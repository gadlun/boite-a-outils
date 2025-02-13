/**
 * Created by wzamorski on 03.09.2015.
 */

/**
 *
 * @param {Object} config
 * @param {String} config.sesstion_type Value of 'lesson', 'assignment', 'poll', 'contest', 'poll_review', 'assignment_review', 'page_review'
 * @param {Integer} config.lesson_id
 * @param {String} config.lesson_title
 * @param {String} config.lesson_type
 * @param {Integer} config.course_id
 * @param {String} config.course_title
 * @param {Integer} config.course_lessons_count
 * @param {Integer} config.course_ebooks_count
 * @param {Integer} config.chapter_id
 * @param {String} config.chapter_title
 * @param {Integer} user_id id of user as whom session will be saved
 * @constructor
 */
window.EventLogger = function (config, user_id) {
    this.config = config;

    // if user_id is given, then save logs to /log/user_id endpoint
    var logSuffix = user_id ? '/' + user_id : '';
    this.url = '/bigquery/log' + logSuffix;

    this.perf = window.perf || {
        offset: Date.now(),
        now: function now() {
            return Date.now() - this.offset;
        },
    };

    this.browser = {
        IE: !!(window.attachEvent && !window.opera),
        Opera: !!window.opera,
        WebKit: navigator.userAgent.indexOf('AppleWebKit/') > -1,
        Gecko:
            navigator.userAgent.indexOf('Gecko') > -1 &&
            navigator.userAgent.indexOf('KHTML') == -1,
        MobileSafari: !!navigator.userAgent.match(/Apple.*Mobile.*Safari/),
    };
};

/**
 * Log session start event.
 */
window.EventLogger.prototype.sessionStart = function () {
    this.startTime = this.perf.now();
    var json = $.extend({}, this.config);
    json.event_type = 'session_start';
    $.ajax({
        url: this.url,
        type: 'POST',
        data: JSON.stringify(json),
        contentType: 'application/json; charset-utf-8',
    });
};

/**
 * Log session end even.
 * @param score
 */
window.EventLogger.prototype.sessionEnd = function (score) {
    var now = this.perf.now();
    var duration = now - this.startTime;
    this.startTime = now; // sessionEnd is called on any save score, so we need to reset the counter

    var json = $.extend({}, this.config);
    json.event_type = 'session_end';
    json.session_duration = duration;

    if (score && typeof score === 'object') {
        if (score.scaledScore) {
            json.score = score.scaledScore;
        } else {
            json.score = 0;
            console.log('Empty scaledScore');
        }

        if (score.errorsCount) {
            json.errors_count = score.errorsCount;
        } else {
            json.errors_count = 0;
            console.log('Empty errorsCount');
        }

        if (score.checksCount) {
            json.checks_count = score.checksCount;
        } else {
            json.checks_count = 0;
            console.log('Empty checksCount');
        }

        if (score.mistakeCount) {
            json.mistake_count = score.mistakeCount;
        } else {
            json.mistake_count = 0;
            console.log('Empty mistakeCount');
        }
    } else {
        console.log('Wrong score object variable');
    }

    $.ajax({
        url: this.url,
        type: 'POST',
        data: JSON.stringify(json),
        contentType: 'application/json; charset-utf-8',
        async: !this.browser.WebKit,
    });
};
