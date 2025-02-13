function isActivebooksPearsonEu() {
    return window.location.href.includes('activebooks.pearson.eu');
}

function isEnglishconnectPearsonCom() {
    return window.location.href.includes('englishconnect.pearson.com');
}

function isEdeskPearsonPl() {
    return window.location.href.includes('edesk.pearson.pl');
}

function isMcourserEurope1() {
    return (
        window.location.href.includes('test.kunnskap.no') ||
        window.location.href.includes('mcourser-europe-1')
    );
}

function isMcourserEurope5() {
    return window.location.href.includes('mcourser-europe-5');
}

function isMcourserEurope6() {
    return window.location.href.includes('mcourser-europe-6');
}

function isMcourserFrance() {
    return window.location.href.includes('mcourser-france');
}

function isMcourserEurope7() {
    return window.location.href.includes('min.kunnskap.no');
}

function isMcourserEurope8() {
    return window.location.href.includes('mcourser-europe-8');
}

function isMcourserEurope9() {
    return window.location.href.includes('mcourser-europe-9');
}

function isMcourserEurope11() {
    return window.location.href.includes('mcourser-europe-11');
}

function isMcourserFranceNameExtension() {
    return window.location.href.includes('mcourser.fr');
}

function isMcourserDirectplateforme() {
    return window.location.href.includes('directplateforme.com');
}

function isFranceInstance() {
    return (
        isMcourserEurope5() ||
        isMcourserFrance() ||
        isMcourserEurope9() ||
        isMcourserEurope11() ||
        isMcourserFranceNameExtension() ||
        isMcourserDirectplateforme()
    );
}
