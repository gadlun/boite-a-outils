//////////////////////////////////////////////////////////////////////////////////
// App Client JavaScript Library
//  see http://LearningApps.org for further details
//////////////////////////////////////////////////////////////////////////////////
var AppClientTranslation = new Array();
//////////////////////////////////////////////////////////////////////////////////
function addAppClientTranslation(language,id,text){
 var i = findAppClientTranslation(language,id);
 if(i == -1){
  var o = new Object();
  o.language = language;
  o.id = id;
  o.text = text;
  AppClientTranslation.push(o);
 }else{
  AppClientTranslation[i].text = text;
 }
}
//////////////////////////////////////////////////////////////////////////////////
function findAppClientTranslation(language,id){
 if(!AppClientTranslation) AppClientTranslation = new Array();
 for(var i=0; i < AppClientTranslation.length; i++){
  var o = AppClientTranslation[i];
  if(o.id == id && o.language == language) return i;
 } 
 return -1;
}
//////////////////////////////////////////////////////////////////////////////////
function findAppClientTranslations(id){
 if(!AppClientTranslation) AppClientTranslation = new Array();
 var r = new Array();
 for(var i=0; i < AppClientTranslation.length; i++){
  var o = AppClientTranslation[i];
  if(o.id == id) r.push(o);
 } 
 return r;
}
//////////////////////////////////////////////////////////////////////////////////
function getAppClientTranslation(id,lang){
 var language = AppClientLanguage;
 if(lang) language = lang;
 var i = findAppClientTranslation(language,id);
 if(i != -1) return AppClientTranslation[i].text;
 var i = findAppClientTranslation("EN",id); // fallback EN
 if(i != -1) return AppClientTranslation[i].text;
 return id;
}
//////////////////////////////////////////////////////////////////////////////////


var AppClientLanguage = "FR";

addAppClientTranslation("FR",
                        "APPCLIENT_CHARACTERS","aàâbcçdeèêëéfghiîïjklmnoœpqrstuùûüvwxyz");
addAppClientTranslation("FR",
                        "APPCLIENT_FULLSCREEN","Afficher l'appli en plein écran");
addAppClientTranslation("FR",
                        "APPCLIENT_HINTLINK","Afficher la consigne");
addAppClientTranslation("FR",
                        "APPCLIENT_HELPLINK","Afficher des indices");
addAppClientTranslation("FR",
                        "APPCLIENT_HELPDESCRIPTION","Indice");
addAppClientTranslation("FR",
                        "APPCLIENT_TASKDESCRIPTION","Consigne");
addAppClientTranslation("FR",
                        "APPCLIENT_GIVEPARAM","Saisissez la valeur du paramètre :");
addAppClientTranslation("FR",
                        "APPCLIENT_CONNECTIONLOST","La connexion au serveur des applis a été interrompue. La reconnexion est en cours ...");

addAppClientTranslation("FR",
                        "APPCLIENT_VIDEODELTED","La vidéo n'est pas ou plus disponible sur YouTube.");
addAppClientTranslation("FR",
                        "APPCLIENT_VIDEOFORBIDDEN","L'auteur a interdit l'intégration de ce son / cette vidéo sur d'autres sites que YouTube.");
addAppClientTranslation("FR",
                        "APPCLIENT_VIDEOWRONGURL","L'URL YouTube est invalide.");

addAppClientTranslation("FR",
                        "APPCLIENT_READSPEECH","Écouter");

//////////////////////////////////////////////////////////////////////////////////
var AppClientInstance = null;
var AppClientConnection = null;
var AppClientServerProtocol = "https:";

if(!window.AppClientSessionUserID) window.AppClientSessionUserID = 0;

//////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////
loadCSS("https://learningapps.org/frameworks/LearningApps.css?3");
var waitForCSS = false;
if(getURLParam("css") != "") {
   waitForCSS = true;
   setTimeout(function(){waitForCSS = false;},2000);
   setTimeout(function(){
     loadCSS(decodeURIComponent(getURLParam("css")),function(){
       waitForCSS = false;
     },true);
   },50);
}
if(getURLParam("cssString") != "")
   setTimeout(function(){loadCSSString(decodeURIComponent(getURLParam("cssString")),true);},50);
//////////////////////////////////////////////////////////////////////////////////
function guid() {
  function S4() {
   return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

function getCurrentTime(){
  var d = new Date();
  return d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}

if(!Array.prototype.indexOf) {
    Array.prototype.indexOf = function(needle) {
        for(var i = 0; i < this.length; i++) {
            if(this[i] === needle) {
                return i;
            }
        }
        return -1;
    };
}

//////////////////////////////////////////////////////////////////////////////////
// AppClientsocket
//////////////////////////////////////////////////////////////////////////////////
function AppClientsocket(connectionType) {
  this.Version = "1.1";
  this.transmitMessageIndex = 0;
  this.type = connectionType;
  this.datetime = new Date();
  this.localdatetime = new Date();
  this.transmitStack = new Array();
  this.sendStackArray = new Array();
  this.AppStates = new Array();
  this.AppStateIDs = new Array();
  this.Participants = new Array();
  this.uid = guid();
  this.flash = null;
  this.ajaxError = false;
  this.ajaxConnected = false;
  this.ajaxUnused = false;
  this.pollingDone = false;
  this.pollingInterval = null;
  this.pollingRequest = false;
  this.pollingTimout = null;
  this.polling = function () {
    if(AppClientConnection.socket.ajaxUnused) return; // stop polling now
    if(AppClientConnection.socket.waitForNextConnectionTest > 0){
       AppClientConnection.socket.waitForNextConnectionTest--;
    }else{
      if (AppClientConnection.socket.ajaxConnected && AppClientConnection.socket.pollingDone) {
        AppClientConnection.socket.pollingDone = false;
        AppClientConnection.socket.activatePolling();
      }
    }

    if(AppClientConnection.socket.pollingTimout) 
      clearTimeout(AppClientConnection.socket.pollingTimout);
    AppClientConnection.socket.pollingTimout = 
      setTimeout(function(){AppClientConnection.socket.polling();},200);

  }
  this.transmitData = function (data) {
    this.transmitMessageIndex++;
    if (this.type == "ajax") {
      this.transmitStack.push(data);
      if(AppClientConnection.socket.transmitDataTimeout) 
        clearTimeout(AppClientConnection.socket.transmitDataTimeout);
      AppClientConnection.socket.transmitDataTimeout = setTimeout(function(){AppClientConnection.socket.sendTransmitStack();},10);
    }
    if (this.type == "local") {
      AppClientConnection.socket.firstInit = false;
      AppClientConnection.socket.ajaxConnected = true;
      var s = data.split ? data.split("|") : [""];
      if (s[0] == "REGISTER") {
        try{
          if(typeof(Storage)!=="undefined" && localStorage && localStorage["AppClient_"+s[1]]){
           AppClientConnection.socket.AppStates[s[1]] = localStorage["AppClient_"+s[1]];
          }
        }catch(e){}

        AppClient_incomingData("INITAPPSTATE|" + s[1] + "|" + this.AppStates[s[1]]);
        AppClient_incomingData("REGISTERED|" + s[1] + "|" + s[2]+ "|" + new Date());
        var p = AppClientConnection.socket.Participants[s[1]];
        p = (p ? (p + (p != "" ? "|" : "") + s[2]) : s[2]);
        AppClientConnection.socket.Participants[s[1]] = p;
        for (var i = 0; i < AppClientConnection.clients.length; i++)
         if (AppClientConnection.clients[i].isReady) {
             AppClient.console(getCurrentTime()+":USERJOINED: "+s[2]+ " ("+AppClientConnection.clients[i].username+")");
             if (AppClientConnection.clients[i]._onUserJoined != null) 
                 AppClientConnection.clients[i]._onUserJoined(s[2]);
             if (AppClientConnection.clients[i].onUserJoined != null) 
                 AppClientConnection.clients[i].onUserJoined(s[2]);
         }
        
        AppClient_incomingData("APPSTATE|" + s[1] + "|" + this.AppStates[s[1]]);
      }
      if (s[0] == "SEND") {
        AppClient.console(getCurrentTime()+":MESSAGE: "+decodeURIComponent(s[3])+" ("+s[4]+" -> "+s[2]+")");
        var msg = decodeURIComponent(s[3]);
        if(msg != "" && msg.indexOf("#__") == 0) msg = JSON.parse(msg.replace("#__",""));

        for (var i = 0; i < AppClientConnection.clients.length; i++) {
          if (s[2] == '*' || s[2] == AppClientConnection.clients[i].username) {
            if (AppClientConnection.clients[i]._onMessage != null) AppClientConnection.clients[i]._onMessage(msg,s[4]);
            if (AppClientConnection.clients[i].onMessage != null) AppClientConnection.clients[i].onMessage(msg,s[4]);
          }
        }
      }
      if (s[0] == "GETAPPSTATE") {
        AppClient_incomingData("APPSTATE|" + s[1] + "|" + this.AppStates[s[1]]);
      }
      if (s[0] == "SETAPPSTATE") {
        AppClient_incomingData("CHANGEAPPSTATE|" + s.slice(1).join("|"));
      }
    }
  }
  this.waitForNextConnectionTest = 0;
  this.inSendStack = [];
  this.waitForNextConnectionTimer = null;
  this.sendTransmitStack = function () {
   if(AppClientConnection.socket.waitForNextConnectionTest > 0){
     AppClientConnection.socket.waitForNextConnectionTest--;
     if(AppClientConnection.socket.waitForNextConnectionTimer) 
       clearTimeout(AppClientConnection.socket.waitForNextConnectionTimer);
     AppClientConnection.socket.waitForNextConnectionTimer = setTimeout(function(){ 
      AppClientConnection.socket.sendTransmitStack(); 
     }, 1000);
     return;
   }
   var appid = "";
   for (var i = 0; i < AppClientConnection.clients.length; i++) {
     appid = AppClientConnection.clients[i].showID;
     if(appid && appid != "") break;
   }

   var params = "r="+Math.random()+"&uid=" + this.uid+"&app="+appid;

   if (!AppClientConnection.socket.ajaxConnected) {
    // send empty data and try later
    params += "&data0=";
    AppClientConnection.socket.waitForNextConnectionTest = 20;
   }else{
    for(var i = 0; i < this.transmitStack.length; i++){
     params += "&data"+i+"="+encodeURIComponent(this.transmitStack[i]);
     this.inSendStack.push(this.transmitStack[i]);
    }
    this.transmitStack = new Array();
   }

   var xmlHttpReq = false;
   if (window.XMLHttpRequest) xmlHttpReq = new XMLHttpRequest();
   else if (window.ActiveXObject) xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
   xmlHttpReq.open('POST', "https://live.learningapps.org/AJAXClient/1.1", true); 
   xmlHttpReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
   xmlHttpReq.withCredentials = true;
   xmlHttpReq.onerror = function (){
      AppClientConnection.socket.waitForNextConnectionTest = 20;
      // on error, push back to send stack
      for(var i = 0; i < AppClientConnection.socket.inSendStack.length; i++){
        AppClientConnection.socket.transmitStack.push(AppClientConnection.socket.inSendStack[i]);
      }      
      AppClientConnection.socket.inSendStack = [];
      setTimeout(function(){AppClientConnection.socket.sendTransmitStack();},1000);
   };
   xmlHttpReq.onreadystatechange = function () {
    if (xmlHttpReq.readyState == 4) {
     if (xmlHttpReq.status >= 400) {
      //if (!AppClientConnection.socket.ajaxError) AppClient_tryreconnect();
      AppClientConnection.socket.ajaxError = true;
      AppClientConnection.socket.waitForNextConnectionTest = 20;
      // on error, push back to send stack
      for(var i = 0; i < AppClientConnection.socket.inSendStack.length; i++){
        AppClientConnection.socket.transmitStack.push(AppClientConnection.socket.inSendStack[i]);
      }      
      AppClientConnection.socket.inSendStack = [];
      setTimeout(function(){AppClientConnection.socket.sendTransmitStack();},1000);
      return;
     }
     if (xmlHttpReq.status == 200) {
       AppClientConnection.socket.ajaxError = false;
       AppClientConnection.socket.inSendStack = []; // clear in send stack now
     }

     if (xmlHttpReq.responseText != "") AppClient_incomingData(xmlHttpReq.responseText);

     // if still data, send again now
     if(AppClientConnection.socket.transmitStack && AppClientConnection.socket.transmitStack.length > 0){
      if(AppClientConnection.socket.transmitDataTimeout) 
        clearTimeout(AppClientConnection.socket.transmitDataTimeout);
      AppClientConnection.socket.transmitDataTimeout = 
        setTimeout(function(){AppClientConnection.socket.sendTransmitStack();},10);
     }
    }
   };
   xmlHttpReq.send(params);
  };
  
  this.activatePolling = function () {
    this.pollingRequest = false;
    if (window.XMLHttpRequest) this.pollingRequest = new XMLHttpRequest();
    else if (window.ActiveXObject) this.pollingRequest = new ActiveXObject("Microsoft.XMLHTTP");

    var appid = "";
    for (var i = 0; i < AppClientConnection.clients.length; i++) {
      appid = AppClientConnection.clients[i].showID;
      if(appid && appid != "") break;
    }

    var params = "r="+Math.random()+"&poll=1&uid=" + this.uid +"&app="+appid+"&data=";
    if(AppClientConnection.socket.firstPoll) {
      params += "&firstPoll=1";
      AppClientConnection.socket.firstPoll = false;
    }
    this.pollingRequest.open('POST', "https://live.learningapps.org/AJAXClientPoll/1.1", true); 
    this.pollingRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
    this.pollingRequest.withCredentials = true;
    var s = this;
    this.pollingRequest.onerror = function (){
      AppClientConnection.socket.waitForNextConnectionTest = 40;
    };
    this.pollingRequest.onreadystatechange = function () {
      if (AppClientConnection.socket.pollingRequest.readyState == 4) {
        if (AppClientConnection.socket.pollingRequest.status >= 400) {
          if (!AppClientConnection.socket.ajaxError) AppClient_tryreconnect();
          AppClientConnection.socket.ajaxError = true;
          AppClientConnection.socket.waitForNextConnectionTest = 40;
        }
        AppClientConnection.socket.pollingDone = true;
        if (AppClientConnection.socket.pollingRequest.status == 200) 
            AppClientConnection.socket.ajaxError = false;
        if (AppClientConnection.socket.pollingRequest.responseText != "") {
            AppClient_incomingData(AppClientConnection.socket.pollingRequest.responseText);
        }
      }
    };
    this.pollingRequest.send(params);
  };
  
  this.send = function (data) {
    if (this.type == "local") {
      window.setTimeout(function(){ AppClientConnection.socket.transmitData (data); }, 150);
    }
    if (this.type == "ajax") {
      if (this.ajaxUnused){
        this.uid = guid();
        this.init();
      }
      this.transmitData(data);
    }
  };

  this.registerClient = function (showid, username) {
    var isThere = false;
    this.AppStates[showid] = "";
    for (var i = 0; i < this.AppStateIDs.length; i++) {
      if (this.AppStateIDs[i] == showid) {
        isThere = true;
        break;
      }
    }
    if (!isThere) this.AppStateIDs.push(showid);
    this.send("REGISTER|" + showid+"|"+(username ? username :"")+"|"+this.Version);
  };
  
  this.setAppSolved = function(showid,value,startTime){
    var t = Math.abs(new Date() - startTime);
    this.send("SOLVED|" + showid + "|" + value + "|" + t + "|" + AppClientSessionUserID);
  };
  
  this.setAppChecked = function(showid,values,startTime){
    var t = Math.abs(new Date() - startTime);
    this.send("CHECKED|" + showid + "|" + values + "|" + t + "|" + AppClientSessionUserID);
  };

  this.getUsers = function (showid) {
    if (!this.Participants[showid] || this.Participants[showid] == "undefined") return new Array();
    return this.Participants[showid].split("|");
  };
  
  this.setAppStateDelta = function (showid, delta) {
    var a = this.getAppState(showid);
    var r = "";
    for (var param in delta) {
      var same = false;
      if (param == "") continue;
      for (var i = 0; i < a.length; i++)
      if (a[i].name == param && a[i].value == delta[param]) {
        same = true;
        break;
      }
      if (!same) r += "|" + param + "|" + encodeURIComponent(delta[param]);
    }
    if (r != "") this.send("SETAPPSTATE|" + showid + r);
  };
  
  this.getAppState = function (showid) {
    var a = new Array();
    if (this.AppStates[showid] == null) return a;
    var s = this.AppStates[showid];
    var ar = s.split("|");
    for (i = 0; i < ar.length; i++) {
      var d = ar[i].split("=");
      var o = new Object();
      o.name = d[0];
      o.value = decodeURIComponent(d[1]);
      if(o.name) a.push(o);
    }
    return a;
  };
  
  this.sendMessage = function (showID, to, msg, sender) {
    if(typeof msg != "string" && typeof msg != "number" && typeof msg != "boolean") msg = '#__'+JSON.stringify(msg);
    this.send("SEND|" + showID + "|" + to + "|" + encodeURIComponent(msg) + "|" + sender);
  };
  
  this.windowUnload = function (){
   try{
     if(navigator.sendBeacon){
        navigator.sendBeacon("https://live.learningapps.org/AJAXClient/1.1?uid="+
                             AppClientConnection.socket.uid+"&unload=1");
     }else{
       var r;
       if (window.XMLHttpRequest) r = new XMLHttpRequest();
       else if (window.ActiveXObject) r = new ActiveXObject("Microsoft.XMLHTTP");
       r.open('POST',"https://live.learningapps.org/AJAXClient/1.1", false);
       r.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
       var params = "r="+Math.random()+"&uid="+AppClientConnection.socket.uid+"&unload=1";
       r.send(params);
     }
   }catch(e){}
   return; // void
  };
  
  this.init = function () {
    if (this.type == "ajax") {
      this.firstPoll = true;
      this.ajaxUnused = false;
      this.firstInit = true;
      this.pollingDone = true;
      this.transmitData("");
      if(window.addEventListener) window.addEventListener("beforeunload",this.windowUnload);
      if(window['attachEvent']) window.attachEvent("onbeforeunload",this.windowUnload);
      if(window.addEventListener) window.addEventListener("unload",this.windowUnload);
      if(window['attachEvent']) window.attachEvent("onunload",this.windowUnload);
    }
  };
  
  this.reconnect = function () {
    for (var i = 0; i < this.AppStateIDs.length; i++) {
      var p = this.Participants[this.AppStateIDs[i]];
      if (!p) continue;
      var pa = p.split("|");
      for (var pi = 0; pi < pa.length; pi++) {
        var clientname = pa[pi];
        AppClient_userLeft(this.AppStateIDs[i], clientname);
      }
    }
    this.AppStates = new Array();
    this.AppStateIDs = new Array();
    this.Participants = new Array();
    this.sendStackArray = new Array();
    for (var i = 0; i < AppClientConnection.clients.length; i++)
     this.registerClient(AppClientConnection.clients[i].showID);
  };
  
  return this;
}
//////////////////////////////////////////////////////////////////////////////////
// App Client
//////////////////////////////////////////////////////////////////////////////////
function AppClientClass(showID, local, userid) {
  AppClientInstance = this;
  if(userid) AppClientSessionUserID = userid;
  var self = this;
  this.userID = AppClientSessionUserID;
  this.showID = showID;
  this.isReady = false;
  this.isLocal = local == true; 
  this.username = "";
  this.registered = false;
  this.isSolved = false;
  this.isFullscreenFailed = false;
  this.parametersJSON = null;
  this.randomizer = new AppClient_Randomizer(showID);
  this.random = function(){
   if(arguments.length > 0) return Math.floor(self.randomizer.random()*arguments[0]);
   return self.randomizer.random();
  }

  this.loadAppDataFromServer = function(){
   if(typeof AppClientAppData != "undefined"){
     this.parametersJSON = AppClientAppData; // global from JSONP
   }else{
     var paramRequest = null;
     if (window.XMLHttpRequest) this.paramRequest = new XMLHttpRequest();
     else if (window.ActiveXObject) this.paramRequest = new ActiveXObject("Microsoft.XMLHTTP");
     // synchrone call - ensure data is available before continue
     var version = getURLParam("version");
     this.paramRequest.open('GET', "https://learningapps.org/data?id="+this.showID+"&version="+version, false);
     this.paramRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
     var s = this;
     this.paramRequest.onerror = function (){ };
     this.paramRequest.onreadystatechange = function () {
      if (s.paramRequest.readyState == 4) {
       s.parametersJSON = JSON.parse(s.paramRequest.responseText);
      }
     };
     this.paramRequest.send("");
   }
  }

  this.init = function () {
    if(!local){
     this.loadAppDataFromServer(); // load sync
     if(this.parametersJSON.result == "SUCCESS") { // app with this GUID  found 
      this.AppParams = this.parametersJSON.initparameters.split("&");
      for(var i=0; i < this.AppParams.length; i++)
        this.AppParams[i] = this.AppParams[i].replace(/http%3A%2F%2Fdbimg\.eu/g,"https%3A%2F%2Fdbimg.eu");

      this.AppPath = this.parametersJSON.path;
      this.Tool = this.parametersJSON.tool;
      this.Task = this.parametersJSON.tasktext;
      this.Help = this.parametersJSON.helptext;
      this.Title = this.parametersJSON.title;

      for(var i = 0; i < this.parametersJSON.translation.length; i++){ 
       var trans = this.parametersJSON.translation[i];
       addAppClientTranslation(trans.language,trans.id,trans.value);
      }
     }
    }

    AppClientConnection = {};
    this.showLoadingPanel();

    setTimeout(function(){
      if (!AppClientConnection.isReady) {
       AppClientConnection.isReady = true;
       AppClientConnection.client = AppClient;
       AppClientConnection.clients = new Array();
       AppClientConnection.clients.push(AppClient);
       if(typeof (AppClientUseRealtime) != "undefined") 
         AppClient.useRealtime = AppClientUseRealtime;

       if (local == true || !AppClient.useRealtime) {
        AppClientConnection.socket = new AppClientsocket("local");
       } else {
        AppClientConnection.socket = new AppClientsocket("ajax");
       }
       setTimeout(function(){
         AppClientConnection.socket.init();
         if (local != true) {
          setTimeout(function(){
            AppClientConnection.socket.registerClient(self.showID);
          },1);
         }
       },1);
      } else {
       // client exists just add us
       AppClientConnection.clients.push(AppClient);
       if (local != true) {
        setTimeout(function(){
          AppClientConnection.socket.registerClient(self.showID);
        },1);
       }
      }
      AppClient.isReady = true;
    },250); // wait for Gameframework to load to set AppClientUseRealtime

    if(getURLParam("script") != "") loadScript(decodeURIComponent(getURLParam("script")));
  }
  this.getURLParam = function(n){
   return getURLParam(n); // global function
  }
  this.console = function (s){
   if (typeof console == "object" && getURLParam("debug") == "1") console.log(s);
  }
  this.getTranslation = function () {
    var id = arguments[0];
    var v = getAppClientTranslation(id);
    if (arguments.length > 1) v = getAppClientTranslation(id, arguments[1]);
    return v;
  }
  this.getServerDateTime = function () {
    var div = (AppClientConnection.socket.localdatetime - AppClientConnection.socket.datetime);
    return new Date(new Date() - div);
  }
  this.getLanguageCharacters = function (){
    var v = getAppClientTranslation("APPCLIENT_CHARACTERS");
    v = v + v.toUpperCase();
    var a = v.split("");
    var b = new Array();
    var casetype = "all";
    if (arguments.length > 0)casetype = arguments[0]; 
    if(casetype == "upper")
     for(var i = 0; i < a.length; i++) if(a[i] == a[i].toUpperCase()) b.push(a[i]);
    if(casetype == "lower")
     for(var i = 0; i < a.length; i++) if(a[i] == a[i].toLowerCase()) b.push(a[i]);
    if(casetype == "all")c
     for(var i = 0; i < a.length; i++) b.push(a[i]);
    return b;
  }

  this.isTranslationOf = function (id, txt) {
    var r = findAppClientTranslations(id);
    for (var i = 0; i < r.length; i++) {
      if (r[i].text == txt) return true;
    }
    return false;
  }

  this.isMobileDevice = function () {
    return isTierIphone || isTierTablet;
  }
  this.addNavigationButtons = function () {
    var d = document.getElementById('AppClientTaskButton');
    if (d) return;
    var body = document.getElementsByTagName("body");
    if (body.length == 0) {
      setTimeout("AppClient.addNavigationButtons()", 1);
      return;
    }
    var posX = 2;
    newdiv = document.createElement("div");
    newdiv.id = "AppClientTaskButton";
    newdiv.style.position = "fixed";
    newdiv.style.width = "16px";
    newdiv.style.left = posX+"px";
    newdiv.style.top = "2px";
    newdiv.style.zIndex = "999997";
    if (AppClient.Task == "") newdiv.style.display = "none"; else posX += 20;
    newdiv.innerHTML = '<a style="padding:0px; margin:0px; text-decoration:none; font-size:16px" href="JavaScript:AppClient.showTaskPanel()"><img border="0" style="vertical-align:top" src="https://learningapps.org/style/taskicon.gif" title="' + this.getTranslation("APPCLIENT_HINTLINK") + '" alt="" /></a>';
    document.body.appendChild(newdiv);

    newdiv = document.createElement("div");
    newdiv.id = "AppClientHelpButton";
    newdiv.style.position = "fixed";
    newdiv.style.width = "16px";
    newdiv.style.left = posX+"px";
    newdiv.style.top = "2px";
    newdiv.style.zIndex = "999997";
    if (AppClient.Help == "") newdiv.style.display = "none";
    newdiv.innerHTML = '<a style="padding:0px; margin:0px; text-decoration:none; font-size:16px" href="JavaScript:AppClient.showHelpPanel()"><img border="0" style="vertical-align:top" src="https://learningapps.org/style/helpicon.png" title="' + this.getTranslation("APPCLIENT_HELPLINK") + '" alt="" /></a>';
    document.body.appendChild(newdiv);

    if (getURLParam("fullscreen") == "1") return; // already in fullscreen
    newdiv = document.createElement("div");
    newdiv.id = "AppClientFullscreenButton";
    newdiv.style.position = "fixed";
    newdiv.style.width = "16px";
    newdiv.style.right = "2px";
    newdiv.style.top = "2px";
    newdiv.style.zIndex = "999997";
    newdiv.innerHTML = '<a style="padding:0px; margin:0px; text-decoration:none; font-size:16px" href="/watch?v=' + this.showID + '" onclick="return AppClient.doFullscreen()" target="_blank"><img border="0" style="vertical-align:top" src="https://learningapps.org/style/fullscreenicon.png" title="' + this.getTranslation("APPCLIENT_FULLSCREEN") + '" alt="" /></a>';
    document.body.appendChild(newdiv);
  }
  this.checkFullscreen = function () {
    var d = document;
    var isFullScreen = d.mozFullScreen || d.webkitIsFullScreen;
    try{
    if(window != top){
     d = window.parent.document;
    }
    if(d)
      isFullScreen = d.mozFullScreen || d.webkitIsFullScreen;
    }catch(e){
      isFullScreen = document.mozFullScreen || document.webkitIsFullScreen;
    }
    this.isFullscreenFailed = (!isFullScreen);
  }
  this.doFullscreen = function () {
    var d = document;
    var isFullScreen = d.mozFullScreen || d.webkitIsFullScreen;
    try{
      if(window != top){
        d = window.parent.document;
      }
      if(d)
        isFullScreen = d.mozFullScreen || d.webkitIsFullScreen; else
        d = document;
    }catch(e){
      d = document;
    }
    try{
      if (isFullScreen) {
        this.isFullscreenFailed = false;
        if (d.exitFullscreen) {
          d.exitFullscreen();
        } else if (d.cancelFullScreen) {
          d.cancelFullScreen();
        } else if (d.mozCancelFullScreen) {
          d.mozCancelFullScreen();
        } else if (d.webkitCancelFullScreen) {
          d.webkitCancelFullScreen();
        }else 
        return false;
      }
      if (this.isFullscreenFailed) return true;
      var docElm = d.documentElement;
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
        setTimeout("AppClient.checkFullscreen()", 1000);
        return false;
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
        setTimeout("AppClient.checkFullscreen()", 1000);
        return false;
      } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
        docElm.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);  
        setTimeout("AppClient.checkFullscreen()", 1000);
        return false;
      }
    }catch(e){};
    return true;
  }
  this.checkSolution = function(){
    if(typeof window.checkSolution == "function") return checkSolution();
  }
  this.showLoadingPanel = function () {
    var body = document.getElementsByTagName("body");
    if (body.length == 0) {
      setTimeout("AppClient.showLoadingPanel()", 1);
      return;
    }
    document.body.style.overflowWrap = "break-word";
    newdiv = document.createElement("div");
    newdiv.id = "AppClientLoadingPanel";
    newdiv.style.position = "absolute";
    newdiv.style.width = "100%";
    newdiv.style.height = "100%";
    newdiv.style.left = "0px";
    newdiv.style.top = "0px";
    newdiv.style.boxSizing = "border-box";
    newdiv.style.zIndex = "999999";
    newdiv.style.backgroundColor = "#FFFFFF";
    newdiv.innerHTML = '<table style="box-sizing:border-box; width:100%;height:100%"><tr><td width="100%" align="center" style="color:#333;font-family:Arial;" id="LoadingPanelContent"><img src="https://learningapps.org/style/loading.gif" alt="" style="vertical-align:middle;margin:5px"/> <b> Loading ... </b></td></tr></table>';
    document.body.appendChild(newdiv);
    this.loadingPanel = newdiv;
  }
  this.taskPanelshowed = false;
  this.closeTaskPanel = function(){
    document.getElementById('AppClientTaskPanel').style.display = 'none'; 
  };
  this.closeFeedbackPanel = function(){
    document.getElementById('AppClientFeedbackPanel').style.display = 'none'; 
  };
  this.adjustPanelSize = function(panelid){
    var d = document.getElementById(panelid);
    if(!d) return; // not visible anymore
    if(window.innerWidth < 450){
      d.style.width = "88%";
      d.style.marginLeft = "6%";
      d.style.marginRight = "6%";
    }else
    if(window.innerWidth < 800){
      d.style.width = "60%";
      d.style.marginLeft = "20%";
      d.style.marginRight = "20%";
    }else{
      d.style.width = "40%";
      d.style.marginLeft = "30%";
      d.style.marginRight = "30%";
    }
    setTimeout(function(){self.adjustPanelSize(panelid);},250);
  };
  this.showTaskPanel = function (once) {
    var body = document.getElementsByTagName("body");
    if (body.length == 0) {
      setTimeout("AppClient.showTaskPanel(" + (once ? "true" : "false") + ")", 100);
      return;
    }
    if (once) {
      if (this.taskPanelshowed) return;
      this.taskPanelshowed = true;
    }
    if (AppClient.Task == "") {
      if (document.getElementById('AppClientTaskButton')) document.getElementById('AppClientTaskButton').style.display = "none";
      return;
    }
    if (this.taskPanel) {
      var d = document.getElementById('AppClientTaskPanel');
      if (d) {
        d.style.display = "block";
      }
      return;
    }
    if (document.getElementById('AppClientTaskButton')) document.getElementById('AppClientTaskButton').style.display = "block";
    newdiv = document.createElement("div");
    newdiv.id = "AppClientTaskPanel";
    newdiv.style.boxSizing = "border-box";
    newdiv.style.fontFamily = "Arial";
    newdiv.style.position = "absolute";
    newdiv.style.left = "0";
    newdiv.style.top = "20%";
    newdiv.style.maxHeight = "65%";
    newdiv.style.overflow = "auto";
    newdiv.style.zIndex = "999998";
    newdiv.style.padding = "10px";
    newdiv.style.border = "10px solid #ddd";
    newdiv.style.WebkitBoxShadow = "0px 0px 10px #333";
    newdiv.style.MozBoxShadow = "0px 0px 10px #333";
    newdiv.style.boxShadow = "0px 0px 10px #333";
    newdiv.style.WebkitBorderRadius = "10px";
    newdiv.style.MozBorderRadius = "10px";
    newdiv.style.borderRadius = "10px";
    newdiv.style.backgroundColor = "#FFFFFF";
    newdiv.innerHTML = '<p style="text-align:center;font-size:150%;padding:0px;margin:0px;margin-bottom:5px"><b>' + this.getTranslation("APPCLIENT_TASKDESCRIPTION") + '</b></p><div style="max-height:195px;overflow:auto;'+(AppClient.Task.length < 50 ? 'text-align:center':'')+'">' + ((this.linkifyText((AppClient.Task))).replace(/\n/g, "<br>")) + '</div><div style="margin-top:10px;text-align:center"><button type="button" onclick="AppClient.closeTaskPanel()" style="font-size:120%;z-index: 2;position: relative;">OK</div>';
    document.body.appendChild(newdiv);
    this.adjustPanelSize("AppClientTaskPanel");
    this.taskPanel = newdiv;
  }
  this.showHelpPanel = function () {
    var body = document.getElementsByTagName("body");
    if (body.length == 0) {
      setTimeout("AppClient.showHelpPanel()", 100);
      return;
    }
    if (AppClient.Help == "") {
      if (document.getElementById('AppClientHelpButton')) document.getElementById('AppClientHelpButton').style.display = "none";
      return;
    }
    if (this.helpPanel) {
      if (document.getElementById('AppClientHelpPanel')) document.getElementById('AppClientHelpPanel').style.display = "block";
      return;
    }
    if (document.getElementById('AppClientHelpButton')) document.getElementById('AppClientHelpButton').style.display = "block";
    newdiv = document.createElement("div");
    newdiv.id = "AppClientHelpPanel";
    newdiv.style.fontFamily = "Arial";
    newdiv.style.position = "absolute";
    newdiv.style.left = "0";
    newdiv.style.top = "20%";
    newdiv.style.maxHeight = "60%";
    newdiv.style.overflow = "auto";
    newdiv.style.zIndex = "999997";
    newdiv.style.padding = "10px";
    newdiv.style.border = "10px solid #ddd";
    newdiv.style.WebkitBoxShadow = "0px 0px 10px #333";
    newdiv.style.MozBoxShadow = "0px 0px 10px #333";
    newdiv.style.boxShadow = "0px 0px 10px #333";
    newdiv.style.WebkitBorderRadius = "10px";
    newdiv.style.MozBorderRadius = "10px";
    newdiv.style.borderRadius = "10px";
    newdiv.style.backgroundColor = "#FFFFFF";
    newdiv.innerHTML = '<p style="text-align:center;font-size:150%;padding:0px;margin:0px;margin-bottom:5px"><b>' + this.getTranslation("APPCLIENT_HELPDESCRIPTION") + '</b></p><div>' + ((this.linkifyText((AppClient.Help))).replace(/\n/g, "<br>")) + '</div><br/><center><input type="button" onclick="document.getElementById(\'AppClientHelpPanel\').style.display = \'none\';" style="font-size:120%;z-index: 2;position: relative;" value="OK"/>';
    document.body.appendChild(newdiv);
    this.adjustPanelSize("AppClientHelpPanel");
    this.helpPanel = newdiv;
  }

//  AppClient.showFeedbackPanel("feedback");
  this.showFeedbackPanel = function (parameter) {
    var body = document.getElementsByTagName("body");
    var f = this.getParameters(parameter);
    if(f) f = f.value;
    if(!f || trim(f) == "") return; // no feedback here

    if (this.feedbackPanel) {
      var d = document.getElementById('AppClientFeedbackPanel');
      if (d) {
        d.style.display = "block";
      }
      return;
    }
    newdiv = document.createElement("div");
    newdiv.id = "AppClientFeedbackPanel";
    newdiv.style.boxSizing = "border-box";
    newdiv.style.fontFamily = "Arial";
    newdiv.style.position = "absolute";
    newdiv.style.left = "0";
    newdiv.style.top = "20%";
    newdiv.style.maxHeight = "65%";
    newdiv.style.overflow = "auto";
    newdiv.style.zIndex = "999998";
    newdiv.style.padding = "10px";
    newdiv.style.border = "10px solid #ddd";
    newdiv.style.WebkitBoxShadow = "0px 0px 10px #333";
    newdiv.style.MozBoxShadow = "0px 0px 10px #333";
    newdiv.style.boxShadow = "0px 0px 10px #333";
    newdiv.style.WebkitBorderRadius = "10px";
    newdiv.style.MozBorderRadius = "10px";
    newdiv.style.borderRadius = "10px";
    newdiv.style.backgroundColor = "#FFFFFF";
    newdiv.innerHTML = '<div style="max-height:195px;overflow:auto;'+(f.length < 50 ? 'text-align:center':'')+'">' + ((this.linkifyText((f))).replace(/\n/g, "<br>")) + '</div><div style="margin-top:10px;text-align:center"><button type="button" onclick="AppClient.closeFeedbackPanel()" style="font-size:120%;z-index: 2;position: relative;">OK</div>';
    document.body.appendChild(newdiv);
    this.adjustPanelSize("AppClientFeedbackPanel");
    this.feedbackPanel = newdiv;
  }
  this.getFilePath = function (file) {
    return this.AppPath + file;
  }
  this.getParam = function (name) {
    for (var i = 0; i < this.AppParams.length; i++) {
      var s = this.AppParams[i];
      var sp = s.split("=");
      if (decodeURIComponent(sp[0]) != name) continue;
      if (this.getParameterType(name) != "undefined") {
        var a = decodeURIComponent(sp[1]).split("|");
        return decodeURIComponent(sp[1]).substring(a[0].length + 1);
      }
      return decodeURIComponent(sp[1]);
    }
    return "";
  }
  this.getParameterType = function (name) {
    for (var i = 0; i < this.AppParams.length; i++) {
      var s = this.AppParams[i];
      var sp = s.split("=");
      if (decodeURIComponent(sp[0]) != name) continue;
      var a = decodeURIComponent(sp[1]).split("|");
      if (a.length > 1) {
        if (a[0] == "text") return a[0];
        if (a[0] == "video") return a[0];
        if (a[0] == "image") return a[0];
        if (a[0] == "audio") return a[0];
        if (a[0] == "speech") return a[0];
      }
    }
    return "undefined";
  }
  this.getParameter = function () {
    var name = arguments[0];
    var v = this.getParam(name);
    if ((this.isLocal) && v == "") {
      if (arguments.length == 2) v = arguments[1];
      else v = prompt(this.getTranslation("APPCLIENT_GIVEPARAM") + " " + name, "");
      if (v == null) v = "";
      if (v == "") return "";
      this.AppParams.push(encodeURIComponent(name) + "=" + encodeURIComponent(v));
      return this.getParam(name);
    }
    return v;
  }

  this.getParameters = function (name){
   function AppClientParameterList() { 
     var a = [];
	   a.find = function (name){
		   if(typeof name == "undefined") return this;
		   // find exact match
		   for(var i=0; i < this.length; i++){
		    if(this[i] instanceof Array) {
		     for(var z=0; z < this[i].length; z++)
		      if(this[i][z].name == name) return this[i][z];
		    }else 
		     if(this[i].name == name) return this[i];
		   }
		   var a = new AppClientParameterList();
		   // find list xmlName match
		   for(var i=0; i < this.length; i++){
		    if(this[i] instanceof Array) {
		     for(var z=0; z < this[i].length; z++)
		      if(this[i][z].xmlName == name) a.push(this[i][z]);
		    }else 
		     if(this[i].xmlName == name) a.push(this[i]);
		   }
		   if(a.length > 0) return a;
		   // find list with name
		   for(var i=0; i < this.length; i++){
		    if(this[i] instanceof Array) {
		     for(var z=0; z < this[i].length; z++)
		      if(this[i][z].list && this[i][z].list.name == name) a.push(this[i][z]);
		    }else
		     if(this[i].list && this[i].list.name == name) a.push(this[i]);
		   }
		   return a;
	   };
	   a.remove = function (i){
       return this.splice(i,1);
	   };
	   a.groupByListIndex = function(){
		   // find list with name
		   var a = new AppClientParameterList();
		   for (var z = 1; z <= 100; z++){
		    var part = []; 
		    for(var i=0; i < this.length; i++){
		     if(this[i] instanceof Array) {
		      for(var x=0; x < this[i].length; x++)
		       if(this[i][x].list && this[i][x].list.index == z) part.push(this[i][x]);
		     } else
		      if(this[i].list && this[i].list.index == z) part.push(this[i]);
		    }
		    if(part.length > 0) a.push(part);
		   }
		   return a;
	   };
     return a;
   }

   var params = null;

   if(this.getParametersPrevious == null){
    params = new AppClientParameterList();
    // read parameter types from XML file
    function parseParameterTypes (p,params,lists){
      function replaceListIndex (s){
        for (var i= 0; i < lists.length; i++) s = s.replace("#",lists[i].index);
        for (var i= lists.length-1; i >= 0; i--) s = s.replace("$",lists[i].index);
        return s;
      }

      if(p.t == "parameter"){
       var para = new Object();
       para.name = replaceListIndex(p.name);
       para.xmlName = p.name;
       para.xmlValue = "";
       para.value = "";
       para.type = p.type;
       if(lists.length > 0) para.list = lists[lists.length-1];
       para.isEqual = function(v){
        if(v && typeof v.xmlValue !== "undefined") return v.xmlValue == this.xmlValue;
        return this.value == v;
       };

       params.push(para);
      }
      if(p.t == "group") for(var z = 0; z < p.children.length; z++) parseParameterTypes(p.children[z],params,lists);
      if(p.t == "list")
        for(var i = 1; i <= p.max; i++){
          var clone = lists.slice(0);
          clone.push({index:i, name:replaceListIndex(p.name)});
          for(var z = 0; z < p.children.length; z++)
            parseParameterTypes(p.children[z],params,clone);
        } 
    }
    /////////////////////
    function translateSelectValue (v){
      for(var i = 0; i < self.parametersJSON.translation.length; i++){
        var t = self.parametersJSON.translation[i];
        if(t.value == v){
          for(var z = 0; z < self.parametersJSON.translation.length; z++){
            var t2 = self.parametersJSON.translation[z];
            if(t2.id == t.id && t2.language == AppClientLanguage){
              return t2.value;
            }
          }
        }
      }
      return v;
    }
    /////////////////////
    function compareTranslation(v, comp){
      for(var i = 0; i < self.parametersJSON.translation.length; i++){
        var t = self.parametersJSON.translation[i];
        if(t.value == v){
          for(var z = 0; z < self.parametersJSON.translation.length; z++){
            var t2 = self.parametersJSON.translation[z];
            if(t2.id == t.id && t2.value == comp){
              return true;
            }
          }
        }
      }
      return false;
    }
    /////////////////////
    if(this.parametersJSON && this.parametersJSON.parameters){
      for(var i = 0; i < this.parametersJSON.parameters.length; i++){
        var p = this.parametersJSON.parameters[i]; 
        parseParameterTypes(p,params,[]);
      }
    }

    for (var i = 0; i < this.AppParams.length; i++) {
      var s = this.AppParams[i];
      var sp = s.split("=");
      var n = decodeURIComponent(sp[0]);
      var v = decodeURIComponent(sp[1]);
      var a = v.split("|");
      for (var z = 0; z < params.length; z++) {
       if(params[z].name == n) {
          params[z].value = v;
          params[z].xmlValue = v;

          if(params[z].type == "select"){
             params[z].isEqual = function(v){
              return compareTranslation(this.value,v);
             };
          }
          if(params[z].type == "password"){
             params[z].isEqual = function(to){ return this.value == md5(to); };
          }
          if(params[z].type == "marker"){
             var m = v.split(";");
             if(m.length == 3){
               params[z].x = m[0];
               params[z].y = m[1];
               params[z].color = m[2];
             }
          } 
          if(params[z].type == "media"){
             params[z].media = a[0];
             params[z].hint = "";
             if(a.length > 1) params[z].value = a[1];

             if(a[0] == "text"){
              if(a.length > 2) params[z].hint = a[2];
              if(a.length > 3) params[z].hintTTS = a[3];
             }
             if(a[0] == "image"){
              if(a.length > 2) params[z].hint = a[2];
              if(a.length > 3) params[z].hintTTS = a[3];
             }
             if(a[0] == "speech"){
              params[z].language = a[2]; 
              if(a.length > 3) params[z].hint = a[3];
              if(a.length > 4) params[z].hintTTS = a[4];
              params[z].loadPlayer = function (divid, autoStart){
                var self = this;
                if(autoStart && autoStart == true) AppClient.textToSpeech(this.value,this.language); 
                var d = document.getElementById(divid);
                d.innerHTML = '<a href="JavaScript:void(0)" onclick="AppClient.textToSpeech(\''+
                               this.value.replace(/'/g,"\\'").replace(/"/g,'&quot;')+'\',\''+this.language+'\')">'+
                              '<span class="glyphicon glyphicon-play"></span> '+AppClient.getTranslation("APPCLIENT_READSPEECH")+'</a>';
                this.player = new Object();
                this.player.stop = function(){ AppClient.textToSpeechStop(); }; 
                this.player.play = function(){ AppClient.textToSpeech(self.value)}; 
                return this.player;
              }
             }
             if(a[0] == "audio"){
              if(a.length > 2) params[z].startTime = timeToSeconds(a[2]);
              if(a.length > 3) params[z].endTime = timeToSeconds(a[3]);
              if(a.length > 4) params[z].hint = a[4];
              if(a.length > 5) params[z].hintTTS = a[5];
              params[z].loadPlayer = function (divid, autoStart){
                var ytid = "";
                if(this.value.match(/^https?:.*/) && !isYoutubeURL(this.value)){
                  ytid = this.value; // direct use url
                }else{
                  ytid = getYouTubeID(this.value);
                }
                var x = new YouTubeAudio(ytid);
                x.startTime = this.startTime;
                x.endTime = this.endTime;
                x.isMute = this.isMute;
                x.autoStart = autoStart ? autoStart : false;
                x.loadPlayer(divid);
                this.player = x;
                return this.player;
              }
             }
             if(a[0] == "video"){
              if(a.length > 2) params[z].startTime = timeToSeconds(a[2]);
              if(a.length > 3) params[z].endTime = timeToSeconds(a[3]);
              if(a.length > 4) params[z].isMute = a[4] == "false";
              if(a.length > 5) params[z].hint = a[5];
              if(a.length > 6) params[z].hintTTS = a[6];

              if(params[z].value.match(/^https?:.*/) && !isYoutubeURL(params[z].value)){ 
                params[z].thumbURL = "";
              }else{
                params[z].thumbURL = "//img.youtube.com/vi/" +
                                     getYouTubeID(params[z].value) + "/0.jpg";
              }
              params[z].loadPlayer = function (divid, autoStart, controls){
                var ytid = "";
                if(this.value.match(/^https?:.*/) && !isYoutubeURL(this.value)){
                  ytid = this.value; // direct use url
                }else{
                  ytid = getYouTubeID(this.value);
                }
                var x = new YouTubeVideo(ytid);
                x.startTime = this.startTime;
                x.endTime = this.endTime;
                x.isMute = this.isMute;
                x.autoStart = autoStart ? autoStart : false;
                x.loadPlayerRun(divid);
                if (controls == false) x.hideControls();
                this.player = x;
                return this.player;
              }
             }
          }
       }
      }  
    }
    this.getParametersPrevious = params;
   }
   // copy last complete parameter array
   params = this.getParametersPrevious;

   return params.find(name);
  }

  this.getCookie = function (param){
   try{
    if(typeof(Storage)!=="undefined" && localStorage){
     if(localStorage["LA_"+this.showID+'_'+AppClientSessionUserID+'_'+param]) return localStorage["LA_"+this.showID+'_'+AppClientSessionUserID+'_'+param]; else return "";
    }else{
     var c = document.cookie + "";
     if(c == "") return "";
     var a = c.split(";");
     for(var i=0; i < a.length; i++){
      var d = a[i].split("=");
      var ad = trim(d[0]).split("_");
      if(ad.length < 4) continue;
      if(ad[0] == "LA" && ad[1] == this.showID && ad[2] == AppClientSessionUserID){
       ad.splice(0,3);
       if(ad.join("_") == param){
        return decodeURIComponent(d[1]);
       }
      }
     }
     return "";
    }
   }catch(e){ }
   return ""; 
  }

  this.setCookie = function (param,value){
   try{
    if(typeof(Storage)!=="undefined" && localStorage){
     localStorage["LA_"+this.showID+"_"+AppClientSessionUserID+'_'+param] = value;
    }else{
     // may get too large soon
     var today = new Date();
     var expr = new Date(today.getTime() + 365 * 24 * 60 * 60 * 1000);
     var d = expr.toGMTString();
     var c = "";
     c += "LA_"+this.showID+"_"+AppClientSessionUserID+'_'+param + "=" + encodeURIComponent(value)+"; ";
     c += "expires=" + d + "; ";
     c += "domain=learningapps.org;path=/;";
     document.cookie = c; 
    }
   }catch(e){ }
  } 
  /* deprecated but still used? */
  this.loadSpeech = function (param, divid, mini) {
    textToSpeechInit();
    var p = this.getParameter(param);
    var u = p.split("|");
    u[0] = u[0].replace(/'/g,"\\'");
    u[0] = u[0].replace(/"/g,"&quot;");
    var s = "";
    if(mini){
     s += '<img style="cursor:pointer;" src="/style/speech.png" alt="" onclick="AppClient.textToSpeech(\''+u[0]+'\',\''+u[1]+'\')"/>';
    }else{
     s += '<div style="background:white;border-radius:10px;padding:5px"><span onmouseup="AppClient.textToSpeech(\''+u[0]+'\',\''+u[1]+'\');" ontouchend="AppClient.textToSpeech(\''+u[0]+'\',\''+u[1]+'\');event.stopPropagation();event.preventDefault()" style="text-decoration:none;cursor:pointer;color:blue"><img style="vertical-align:middle;width:24px;height:24px;display:inline;margin-right:10px" src="https://learningapps.org/style/speech.png" alt="" />'+this.getTranslation("APPCLIENT_READSPEECH")+"</span></div>";
    }
    document.getElementById(divid).innerHTML = s;
  }
  /* deprecated but still used? */
  this.loadVideo = function (param, divid, controls, autoStart) {
    var p = this.getParameter(param);
    var u = p.split("|");
    var url = u[0];
    var ytid = "";
    if(url.match(/^https?:.*/) && !isYoutubeURL(url)){
      ytid = url; // direct use url
    }else{
      ytid = getYouTubeID(url);
    }
    var x = new YouTubeVideo(ytid);
    x.startTime = timeToSeconds(u[1]);
    x.endTime = timeToSeconds(u[2]);
    x.isMute = u[3] != "true";
    x.autoStart = autoStart;
    x.loadPlayer(divid);
    if (controls == false) x.hideControls();
    return x;
  }
  /* deprecated but still used? */
  this.loadVideoDirect = function (param, divid, controls, autoStart) {
    var p = this.getParameter(param);
    var u = p.split("|");
    var url = u[0];
    var ytid = "";
    if(url.match(/^https?:.*/) && !isYoutubeURL(url)){
      ytid = url; // direct use url
    }else{
      ytid = getYouTubeID(url);
    }
    var x = new YouTubeVideo(ytid);
    x.startTime = timeToSeconds(u[1]);
    x.endTime = timeToSeconds(u[2]);
    x.isMute = u[3] != "true";
    x.autoStart = autoStart;
    x.loadPlayerRun(divid);
    if (controls == false) x.hideControls();
    return x;
  }
  /* deprecated but still used? */
  this.loadAudio = function (param, divid, autoStart) {
    var p = this.getParameter(param);
    var u = p.split("|");
    var url = u[0];
    var ytid = "";
    if(url.match(/^https?:.*/) && !isYoutubeURL(url)){
      ytid = url; // direct use url
    }else{
      ytid = getYouTubeID(url);
    }
    var x = new YouTubeAudio(ytid);
    x.startTime = timeToSeconds(u[1]);
    x.endTime = timeToSeconds(u[2]);
    x.autoStart = autoStart ? autoStart : false;
    x.loadPlayer(divid);
    return x;
  }
  /* deprecated but still used? */
  this.loadImage = function (param, divid) {
    var p = this.getParameter(param);
    document.getElementById(divid).innerHTML = '<img src="' + p + '" alt="" />';
  }
  /* deprecated but still used? */
  this.loadText = function (param, divid) {
    var p = this.getParameter(param);
    document.getElementById(divid).innerHTML = p;
  }
  /* deprecated but still used? */
  this.checkPassword = function (param, value) {
    var v = this.getParameter(param);
    if (value == null) return false;
    return v == md5(value);
  }

  this.shuffleArray = function (d,same){
   var b;
   for (var c = d.length - 1; c > 0; c--) {
     if(same) 
      b = Math.floor(AppClient.random() * (c + 1)); else
      b = Math.floor(Math.random() * (c + 1));
     var a = d[c];
     d[c] = d[b];
     d[b] = a;
   }
   return d;
  }

  this.tableSpreadElements = function (elements,container,callbackEachTime,callbackEnd){
   var hs = new Array();
   var ws = new Array();

   var run = 10; 
   function runFunc() {
    var ox = container.offsetLeft;
    var oy = container.offsetTop;
    var cw = getOffsetWidth(container); 
    var ch = getOffsetHeight(container);
    var minh = 9999999;
    for(var i=0; i < elements.length; i++){
     var w1 = ws[i];
     var h1 = hs[i];
     w1 = getOffsetWidth(elements[i]); 
     h1 = getOffsetHeight(elements[i]); 
     ws[i] = w1;
     hs[i] = h1;
     minh = Math.min(minh, h1);      
    }
    //elements.sort(function(a,b){ return getOffsetHeight(a) - getOffsetHeight(b); });
    for(var i=0; i < elements.length; i++){
     var w1 = ws[i];
     var h1 = hs[i];

     var cols = Math.floor(cw / (w1*1.2));
     var px = (cw - (w1*1.2*cols))/2;
     var mrh = 0;
     var th = 0;
     var lastRow = 0;
     var mch = 0;
     for(var z=0; z < elements.length; z++){
       if(Math.floor(z / cols) >  Math.floor(i / cols)) break;
       if(lastRow != Math.floor(z / cols)) { th += mrh+minh*0.15 ; mrh = 0; lastRow = Math.floor(z / cols); }
       if((z % cols) == (i % cols) && i != z) mch += hs[z]+minh*0.15 ;
       mrh = Math.max(mrh, hs[z]);
     }
    

     var nx = px+0.1*w1 + (w1*1.2) * (i % cols); 
     var ny = mch + 0.2*minh; 

     elements[i].style.left = (nx)+"px";
     elements[i].style.top = (ny)+"px";      
     if(typeof (callbackEachTime) == "function") callbackEachTime(elements[i]);
    }
    run--;    
    if(run > 0) setTimeout(runFunc,200); else
     if(typeof (callbackEnd) == "function") callbackEnd(elements);
   };
   setTimeout(runFunc,10);    
  }

  this.forceSpreadElements = function (elements,container,callbackEachTime,callbackEnd){
   var ox = container.offsetLeft;
   var oy = container.offsetTop;
   var cx = getOffsetWidth(container)/2+ox; 
   var cy = getOffsetHeight(container)/2+oy;
   var g = 0.01;
   var hs = new Array();
   var ws = new Array();
   for(var i=0; i < elements.length; i++){
    var w = getOffsetWidth(elements[i]); 
    var h = getOffsetHeight(elements[i]); 
    ws[i] = w;
    hs[i] = h;
    // start in center of container
    var x = cx + Math.round((Math.random()*100-50) / 10);
    var y = cy + Math.round((Math.random()*100-50) / 10);
    elements[i].style.left = (x-w/2)+"px";
    elements[i].style.top  = (y-h/2)+"px";
   }

   function overlaps(x1,y1,w1,h1,x2,y2,w2,h2){
    return !(x2 > x1+w1 || x2+w2 < x1 || y2 > y1+h1 || y2+h2 < y1);
   }
  
   function collide(x1,y1,w1,h1,x2,y2,w2,h2){
    var r1 = Math.max(w1,h1) / 2;  
    var r2 = Math.max(w2,h2) / 2;  
    var dx = x1-x2; 
    var dy = y1-y2;
    var moveX = 0;
    var moveY = 0;
    if(dx !== 0 || dy !== 0){ 
     var distance = Math.sqrt(dx * dx + dy * dy);
     var minDistance = r1 + r2; 
     if(overlaps(x1-w1/2,y1-h1/2,w1,h1,x2-w2/2,y2-h2/2,w2,h2)){ 
      distance = (distance - minDistance) / distance * 0.1;
      moveX = dx * distance;
      moveY = dy * distance;
     }
    }  
    return [moveX,moveY];
   }
   
   function boundIt(x,y,w,h){
    if(x < ox+10) x = oy+10;
    if(y < oy+20) y = oy+20;
    if(x+w > ox+(cx-ox)*2-10) x = ox+(cx-ox)*2-w-10;
    if(y+h > oy+(cy-oy)*2-10) y = oy+(cy-oy)*2-h-10; 
    return [x,y];
   }

   var run = 30; 
   function runFunc() {
    var randomArray = [];
    for(var i=0; i < elements.length; i++) randomArray.push(i);
    randomArray = AppClient.shuffleArray(randomArray); 

    for(var ra=0; ra < randomArray.length; ra++){
     var i = randomArray[ra];
     var w1 = ws[i];
     var h1 = hs[i];
     if(run % 5 == 0){
      w1 = getOffsetWidth(elements[i]); 
      h1 = getOffsetHeight(elements[i]); 
      ws[i] = w1;
      hs[i] = h1;
     }

     var x1 = parseFloat(elements[i].style.left)+w1/2;
     var y1 = parseFloat(elements[i].style.top)+h1/2;
     var nx = x1 + (Math.max(-5,Math.min(5,cx - x1)))*g; 
     var ny = y1 + (Math.max(-5,Math.min(5,cy - y1)))*g; 
     for(var z=0; z < elements.length; z++){
      if(i == z) continue; 
      var w2 = ws[z];
      var h2 = hs[z]; 
      var x2 = parseFloat(elements[z].style.left)+w2/2;
      var y2 = parseFloat(elements[z].style.top)+h2/2;

      var move = collide(x1,y1,w1,h1,x2,y2,w2,h2);  
      var moveX = move[0];
      var moveY = move[1];
      var p = boundIt(x2+moveX-w2/2,y2+moveY-h2/2,w2,h2);  
      elements[z].style.left = (p[0])+"px";
      elements[z].style.top = (p[1])+"px";
      nx -= moveX;
      ny -= moveY;
     }  

     var p = boundIt(nx-w1/2,ny-h1/2,w1,h1); 
     elements[i].style.left = (p[0])+"px";
     elements[i].style.top = (p[1])+"px";      
     if(typeof (callbackEachTime) == "function") callbackEachTime(elements[i]);
    }
    run--;    
    if(run > 0) setTimeout(runFunc,10); else
     if(typeof (callbackEnd) == "function") callbackEnd(elements);
   };
   setTimeout(runFunc,100);
  }

  this.onAppStateChange = null;
  this.onInit = null;
  this.onUserJoined = null;
  this.onUserLeft = null;
  this.onMessage = null;

  this._onAppStateChange = null;
  this._onInit = null;
  this._onUserJoined = null;
  this._onUserLeft = null;
  this._onMessage = null;

  this.startTime = new Date();

  this.setSolved = function () {
    var value = 100;
    if (arguments.length > 0) value = arguments[0];
    if (!self.isSolved) {
      this.isSolved = true;
      var t = Math.round((Math.abs(new Date() - self.startTime)/1000));

//      if (AppClientConnection.socket)
//          AppClientConnection.socket.setAppSolved(self.showID,value,self.startTime);
      var xmlHttpReq = false;
      if (window.XMLHttpRequest) xmlHttpReq = new XMLHttpRequest();
      else if (window.ActiveXObject) xmlHttpReq = new ActiveXObject("Microsoft.XMLHTTP");
      xmlHttpReq.open('POST', "https://learningapps.org/setAppSolved.php", true); 
      xmlHttpReq.setRequestHeader("Content-type", "application/x-www-form-urlencoded;charset=UTF-8");
      var params = "guid="+encodeURIComponent(self.showID)+"&value="+encodeURIComponent(value)+"&time="+encodeURIComponent(t)+"&user="+encodeURIComponent(AppClientSessionUserID);
      xmlHttpReq.withCredentials = true;
      xmlHttpReq.send(params);

      self.postMessage("AppSolved|"+self.showID+"|"+value+"|"+t);
    }
  }
  this.setChecked = function() {
    var t = Math.round((Math.abs(new Date() - this.startTime)/1000));
    var v = "";
    for(var i=0; i < arguments.length; i++) 
      v += (i > 0 ? ';':'')+
           (typeof arguments[i] == "object" && arguments[i].constructor === Array ? arguments[i].join(';') : arguments[i]);
    //if (AppClientConnection.socket)
    //    AppClientConnection.socket.setAppChecked(this.showID,v,this.startTime);

    this.postMessage("AppChecked|"+this.showID+"|"+t+'|'+v);
  }
  this.setCompleted = function(){
    var state = true;
    if(arguments.length > 0) state = arguments[0];
    if(!state && !this.wasCompleted) return; 
    if(state && this.wasCompleted) return; 
    this.wasCompleted = (state ? true : false);
    var t = Math.round((Math.abs(new Date() - this.startTime)/1000));
    var v = "";
    if(this.wasCompleted)
      this.postMessage("AppCompleted|"+this.showID+"|"+t); else
      this.postMessage("AppIncompleted|"+this.showID+"|"+t);
  }
  this.postMessage = function (s) {
    var level = 0;
    try{
      var parent = window.parent;
      while (parent) {
        parent.postMessage(s+(s.indexOf("|")>0 ? "|"+level:''), "*");
        if (parent.parent && parent.parent != parent) parent = parent.parent;
        else break;
        level++;
      }
    }catch(e){};
  }
  this.textToSpeech = function(txt,lang){
   textToSpeechInit();
   if(!lang) lang = AppClientLanguage;
   this.textToSpeechStop();
   if(this.isLocal)
    textToSpeech(txt,lang,true); else
    textToSpeech(txt,lang);
  }
  this.textToSpeechStop = function () {
   try{
     if(lastTextToSpeechPlayer) lastTextToSpeechPlayer.pause();
     lastTextToSpeechPlayer = null;
     if(window.speechSynthesis) speechSynthesis.cancel();
   }catch(e){};
  }
  this.linkifyText = function (inputText) {
    if(!inputText) return "";
    inputText = " "+inputText;
    var replaceText, replacePattern1, replacePattern2, replacePattern3;
    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /([^"=?])(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(replacePattern1, '$1 <a href="$2" onclick="event.stopPropagation()" ontouchstart="event.stopPropagation()" target="_blank">$2</a>');
    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    //replacePattern2 = /[^"](^|[^\/])(www\.[\S]+(\b|$))/gim;
    //replacedText = replacedText.replace(replacePattern2, ' $1<a href="http://$2" target="_blank">$2</a>');
    //Change email addresses to mailto:: links.
    //replacePattern3 = /[^"](\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,6})/gim;
    //replacedText = replacedText.replace(replacePattern3, ' <a href="mailto:$1">$1</a>');
    replacedText = replacedText.substr(1);
    return replacedText;
  }
  this.escapeHTML = function (inputText) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(inputText));
    return div.innerHTML;
  }
  this.getAppState = function () {
    if (!AppClientConnection.isReady) {
     if (arguments.length == 0) return new Array();
     return "";
    }
    var a = new Array();
    if (AppClientConnection.socket) a = AppClientConnection.socket.getAppState(this.showID);
    if (arguments.length == 0) return a;
    if (arguments.length > 0) {
      var param = arguments[0];
      for (var i = 0; i < a.length; i++)
      if (a[i].name == param) return a[i].value;
    }
    return "";
  }
  this.setAppState = function () {
    var delta = new Object();
    if (arguments.length == 2) delta[arguments[0]]=arguments[1];
    else delta = arguments[0];
    if (!AppClientConnection.isReady) return;
    if (AppClientConnection.socket) AppClientConnection.socket.setAppStateDelta(this.showID, delta);
  }
  this.getUsers = function () {
    var a = new Array();
    if (AppClientConnection.socket) a = AppClientConnection.socket.getUsers(this.showID);
    return a;
  }
  this.sendMessage = function () { // msg, to
    var msg = arguments[0];
    var to = (arguments.length > 1 ? arguments[1] : "*");
    AppClientConnection.socket.sendMessage(this.showID, to, msg, this.username);
  }
  if(typeof (AppClientNoINIT) == "undefined") this.init();
}

if(typeof window.addEventListener == "function") {
  var APIReturnIndex = 0; 
  window.addEventListener("message", function(event){
    var parts = event.data.split ? event.data.split("|") : [""];
    if(parts[0] == "checkSolution"){
      if (typeof AppClient.checkSolution === "function") {
        AppClient.checkSolution()
      }else
      if (typeof checkSolution === "function") {
        checkSolution()
      }
    }
    if(parts[0] == "AppClient"){
      parts.shift(); 
      var f = parts.shift(); 
      var r = ""; 
      if(typeof AppClient[f] == "function") {
        r = AppClient[f].apply(AppClient,parts);
        if(typeof r == "undefined") r = "";
      }else{
        r = AppClient[f];
      }
      APIReturnIndex++;
      AppClient.postMessage("AppClientReturns|"+AppClient.showID+"|"+APIReturnIndex+"|"+f+"|"+r);
    }
  }, false);
}
//////////////////////////////////////////////////////////////////////////////////
// AppClient Handlers
//////////////////////////////////////////////////////////////////////////////////
function AppClient_registered(showID, ipname) {
  function delayHideLoadingPanel(i){
    setTimeout(function(){ hideLoadingPanel(i); },100);
  }
  function hideLoadingPanel(i){
   if(waitForCSS){
     setTimeout(function(){ hideLoadingPanel(i); },100);
     return;
   }
   if(AppClientConnection.clients[i].loadingPanel)
      AppClientConnection.clients[i].loadingPanel.style.display = "none";
  }

  if (!AppClientConnection.client.isLocal) 
       AppClientConnection.client.username = ipname;
  for (var i = 0; i < AppClientConnection.clients.length; i++) {
    if (AppClientConnection.clients[i].showID != showID) continue;
    if (!AppClientConnection.clients[i].isLocal) 
         AppClientConnection.clients[i].username = ipname;
    try{
     AppClientConnection.clients[i].showTaskPanel(true);
     AppClientConnection.clients[i].addNavigationButtons();
    }catch(e){continue;} // iframe is unloaded already

    delayHideLoadingPanel(i); 

    if (!AppClientConnection.clients[i].registered &&
         AppClientConnection.clients[i]._onInit != null)
         AppClientConnection.clients[i]._onInit();
    if (!AppClientConnection.clients[i].registered &&
         AppClientConnection.clients[i].onInit != null)
         setTimeout(AppClientConnection.clients[i].onInit,10);
    AppClientConnection.clients[i].registered = true;

    AppClientConnection.clients[i].postMessage("AppReady");
    // send App Task-Text
    AppClientConnection.clients[i].postMessage("AppTask|"+
                                   AppClientConnection.clients[i].Task);
    // send App Title-Text
    AppClientConnection.clients[i].postMessage("AppTitle|"+
                                   AppClientConnection.clients[i].Title);
    // send App Feedback-Text
    AppClientConnection.clients[i].postMessage("AppFeedback|"+
                        AppClientConnection.clients[i].getParameter("feedback"));
  }
}
//////////////////////////////////////////////////////////////////////////////////
function AppClient_message(showID, from, msg) { 
  if(trim(msg) != "") AppClient.console(getCurrentTime()+":MESSAGE: "+msg+" ("+from+" -> "+AppClient.username+")");
  if(trim(msg) != "" && msg.indexOf("#__") == 0) msg = JSON.parse(msg.replace("#__",""));
  for (var i = 0; i < AppClientConnection.clients.length; i++) {
    if (AppClientConnection.clients[i].showID != showID) continue;
    if (AppClientConnection.clients[i]._onMessage != null) AppClientConnection.clients[i]._onMessage(msg, from);
    if (AppClientConnection.clients[i].onMessage != null) AppClientConnection.clients[i].onMessage(msg, from);
  }
}
//////////////////////////////////////////////////////////////////////////////////
function AppClient_userJoined(showID, username) {
  AppClient.console(getCurrentTime()+":USERJOINED: "+username);
  for (var i = 0; i < AppClientConnection.clients.length; i++) {
    if (AppClientConnection.clients[i].showID == showID){
    if (AppClientConnection.clients[i]._onUserJoined != null) 
        AppClientConnection.clients[i]._onUserJoined(username);
    if (AppClientConnection.clients[i].onUserJoined != null) 
        AppClientConnection.clients[i].onUserJoined(username);
   }
  }
}
//////////////////////////////////////////////////////////////////////////////////
function AppClient_userLeft(showID, username) {
  AppClient.console(getCurrentTime()+":USERLEFT: "+username);
  for (var i = 0; i < AppClientConnection.clients.length; i++) {
    if (AppClientConnection.clients[i].showID == showID) {
    if (AppClientConnection.clients[i]._onUserLeft != null) 
        AppClientConnection.clients[i]._onUserLeft(username);
    if (AppClientConnection.clients[i].onUserLeft != null) 
        AppClientConnection.clients[i].onUserLeft(username);
   }
  }
}
//////////////////////////////////////////////////////////////////////////////////
function AppClient_updateAppState(showID, changed) {
  AppClient.console(getCurrentTime()+":APPSTATE: "+changed.join(";"));

  if (AppClientConnection.socket.type == "local") {
   try{
     if(typeof(Storage)!=="undefined" && localStorage){
      localStorage["AppClient_"+showID] = AppClientConnection.socket.AppStates[showID];
     }
   }catch(e){}
  }
  for (var i = 0; i < AppClientConnection.clients.length; i++) {
    if (AppClientConnection.clients[i].showID == showID){
    if (AppClientConnection.clients[i]._onAppStateChange != null) 
        AppClientConnection.clients[i]._onAppStateChange(changed);
    if (AppClientConnection.clients[i].onAppStateChange != null) 
        AppClientConnection.clients[i].onAppStateChange(changed);
   }
  }
}
//////////////////////////////////////////////////////////////////////////////////
function AppClient_tryreconnect() {
  alert(AppClientConnection.getTranslation("APPCLIENT_CONNECTIONLOST"));
}
//////////////////////////////////////////////////////////////////////////////////
function AppClient_incomingData(msg) {
  if(trim(msg) != "") AppClient.console(getCurrentTime()+":MESSAGE: "+msg);

  var lines = msg.split("\n");
  var showid = "";
  var from = "";
  for (var i = 0; i < lines.length; i++) {
    lines[i] = lines[i].replace(/\x00/g, "");
    var a = lines[i].split("|");
    if (a[0] == "AJAX_CONNTECTED") {
      AppClientConnection.socket.ajaxConnected = true;
      AppClientConnection.socket.waitForNextConnectionTest = 0; // reset on connection
      if (AppClientConnection.socket.firstInit) {
        AppClientConnection.socket.firstInit = false;
        AppClientConnection.socket.pollingInterval = setTimeout(function(){
          AppClientConnection.socket.polling();
        }, 1000);
      } else {
        AppClientConnection.socket.reconnect();
        AppClientConnection.socket.pollingDone = true;
        //AppClientConnection.socket.pollingInterval = setTimeout(function(){AppClientConnection.socket.polling()}, 500);
      }
      continue;
    }
    if (a[0] == "REGISTERED") {
      showid = a[1];
      AppClientConnection.socket.datetime = new Date(a[3]);
      AppClientConnection.socket.localdatetime = new Date();

      AppClient_registered(showid, a[2]);
      continue;
    }
    if (a[0] == "INITAPPSTATE"){
      showid = a[1];
      a.splice(0, 2);
      AppClientConnection.socket.AppStates[showid] = a.join("|");
      continue;
    }
    if (a[0] == "APPSTATE") {
      showid = a[1];
      a.splice(0, 2);
      AppClientConnection.socket.AppStates[showid] = a.join("|");
      var b = AppClientConnection.socket.getAppState(showid);
      var r = new Array();
      for (var bi = 0; bi < b.length; bi++) {
        r.push(b[bi].name);
      }
      if(r.length > 0) AppClient_updateAppState(showid, r);
      continue;
    }
    if (a[0] == "MSG") {
      showid = a[1];
      from = a[2];
      AppClient_message(showid, from, decodeURIComponent(a[3]));
      continue;
    }
    if (a[0] == "CHANGEAPPSTATE") {
      showid = a[1];
      a.splice(0, 2);
      var r = new Array();
      for (var ai = 0; ai < a.length; ai += 2) {
        var n = a[ai];
        var v = decodeURIComponent(a[ai + 1]);
        var newState = "";
        var b = AppClientConnection.socket.getAppState(showid);
        var isThere = false;
        for (var bi = 0; bi < b.length; bi++) {
          var sn = b[bi].name;
          var sv = b[bi].value;
          if (sn == n) {
            if (sv != v) {
              sv = v;
              r.push(sn);
            }
            isThere = true;
          }
          newState += sn + "=" + encodeURIComponent(sv);
          if (bi < b.length - 1) newState += "|";
        }
        if (!isThere) {
          if (newState != "") newState += "|";
          newState += n + "=" + encodeURIComponent(v);
          r.push(n);
        }
        AppClientConnection.socket.AppStates[showid] = newState;
      }
      if(r.length > 0) AppClient_updateAppState(showid, r);
      continue;
    }
    if (a[0] == "USERS") {
      showid = a[1];
      a.splice(0, 2);
      if (a.length == 0) continue;
      AppClientConnection.socket.Participants[showid] = a.join("|");
      for (var ai = 0; ai < a.length; ai++)
      AppClient_userJoined(showid, a[ai]);
      continue;
    }
    if (a[0] == "USERJOINED") {
      showid = a[1];
      clientname = a[2];
      var p = AppClientConnection.socket.Participants[showid];
      var isThere = false;
      if (p) {
        var pa = p.split("|");
        for (var pi = 0; pi < pa.length; pi++) {
          if (pa[pi] == clientname) isThere = true;
        }
      }
      if (!isThere) AppClientConnection.socket.Participants[showid] = (p ? (p + (p != "" ? "|" : "") + clientname) : clientname);
      AppClient_userJoined(showid, clientname);
      continue;
    }
    if (a[0] == "USERLEFT") {
      clientname = a[1];
      for (var ai = 0; ai < AppClientConnection.socket.AppStateIDs.length; ai++) {
        var p = AppClientConnection.socket.Participants[AppClientConnection.socket.AppStateIDs[ai]];
        if (!p) continue;
        var changed = false;
        var pa = p.split("|");
        for (var pi = 0; pi < pa.length; pi++) {
          if (pa[pi] == clientname) {
            pa.splice(pi, 1);
            changed = true;
            break;
          }
        }
        AppClientConnection.socket.Participants[AppClientConnection.socket.AppStateIDs[ai]] = pa.join("|");
        AppClient_userLeft(AppClientConnection.socket.AppStateIDs[ai], clientname);
      }
      continue;
    }
  }
}
//////////////////////////////////////////////////////////////////////////////////
function AppClient_Randomizer (seed){
	var keySchedule = [];
	var keySchedule_i = 0;
	var keySchedule_j = 0;
	seed = seed + "";
	function init(seed) {
		for (var i = 0; i < 256; i++)
			keySchedule[i] = i;
		
		var j = 0;
		for (var i = 0; i < 256; i++)
		{
			j = (j + keySchedule[i] + seed.charCodeAt(i % seed.length)) % 256;
			
			var t = keySchedule[i];
			keySchedule[i] = keySchedule[j];
			keySchedule[j] = t;
		}
	}
	init(seed);
	
	function getRandomByte() {
		keySchedule_i = (keySchedule_i + 1) % 256;
		keySchedule_j = (keySchedule_j + keySchedule[keySchedule_i]) % 256;
		
		var t = keySchedule[keySchedule_i];
		keySchedule[keySchedule_i] = keySchedule[keySchedule_j];
		keySchedule[keySchedule_j] = t;
		
		return keySchedule[(keySchedule[keySchedule_i] + keySchedule[keySchedule_j]) % 256];
	}
	
	this.random = function() {
		var number = 0;
		var multiplier = 1;
		for (var i = 0; i < 8; i++) {
			number += getRandomByte() * multiplier;
			multiplier *= 256;
		}
		return number / 18446744073709551616;
	}
}
//////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
if (typeof AppClientServerProtocol === "undefined") {
 AppClientServerProtocol = "";
}
//////////////////////////////////////////////////////////////////////////////////
if (!Array.prototype.indexOf) {
 // ie8 fix
 Array.prototype.indexOf = function(obj, start) {
     for (var i = (start || 0), j = this.length; i < j; i++) {
         if (this[i] === obj) { return i; }
     }
     return -1;
 }
}
//////////////////////////////////////////////////////////////////////////////////
function stopEvent(e) {
 if(!e) var e = window.event;
 e.cancelBubble = true;
 e.returnValue = false;
 
 if ( e.stopPropagation ) e.stopPropagation();
 if ( e.preventDefault ) e.preventDefault();		
 return false;
}
//////////////////////////////////////////////////////////////////////////////////
function openTargetURL(url){
  if(window.event && 
    (window.event.shiftKey || window.event.ctrlKey || window.event.metaKey)){
    window.open(url, "_blank");
  }else{
    pageLoadDisplay();
    window.location.href = url;
  }
}
//////////////////////////////////////////////////////////////////////////////////
function openNextSibling(e){
 var elem = e;
 do {
  elem = elem.nextSibling;
 } while (elem && elem.nodeType != 1);
 if(elem) elem.style.display = "block";
}
//////////////////////////////////////////////////////////////////////////////////
function openPreviousSibling(e){
 var elem = e;
 do {
  elem = elem.previousSibling;
 } while (elem && elem.nodeType != 1);
 if(elem) elem.style.display = "block";
}
//////////////////////////////////////////////////////////////////////////////////
function hideParentNode(e){
 if(e && e.parentNode) e.parentNode.style.display = "none";
}
//////////////////////////////////////////////////////////////////////////////////
var loadScriptStack = [];
var loadScriptStackLoading = false;
var loadScriptStackWorkerInterval = null;
function loadScript(sURL, onLoad) {
  loadScriptStack.push({url:sURL, callback:onLoad});
  if(loadScriptStackWorkerInterval == null){
     loadScriptStackWorkerInterval = setInterval(loadScriptStackWorker,10);
  }
}

function loadScriptStackWorker() {
  var body = document.getElementsByTagName("body");
  if (body.length == 0) return;

  if(loadScriptStackLoading) return; // still one file loading

  if(loadScriptStack.length == 0 && loadScriptStackWorkerInterval != null){
   clearInterval(loadScriptStackWorkerInterval);
   loadScriptStackWorkerInterval = null;
   return;
  }

  var s = loadScriptStack.shift();

  function loadScriptHandler() {
    var rs = this.readyState;
    if (rs == 'loaded' || rs == 'complete') {
      this.onreadystatechange = null;
      this.onload = null;
      s.callback();
      loadScriptStackLoading = false;
    }
  }

  var oS = document.createElement('script');
  oS.type = 'text/javascript';
  oS.onreadystatechange = loadScriptHandler;
  oS.onload = function(){
     this.onreadystatechange = null;
     this.onload = null;
     if (s.callback) window.setTimeout(s.callback,20);
     loadScriptStackLoading = false;
    };
  
  loadScriptStackLoading = true;
  oS.src = s.url;
  document.body.appendChild(oS);
}
//////////////////////////////////////////////////////////////////////////////////
function loadCSS(sURL, onLoad, withBody) {
  function loadCSSHandler() {
    var rs = this.readyState;
    if (rs == 'loaded' || rs == 'complete') {
      this.onreadystatechange = null;
      this.onload = null;
      if (onLoad) {
        onLoad();
      }
    }
  }

  function CSSOnload() {
    this.onreadystatechange = null;
    this.onload = null;
    window.setTimeout(onLoad,20);
  }

  var oS = document.createElement('link');
  oS.type = 'text/css';
  oS.rel = 'stylesheet';
  if (onLoad) {
    oS.onreadystatechange = loadCSSHandler;
    oS.onload = CSSOnload;
  }
  oS.href = sURL;
  var heads = document.getElementsByTagName("head");
  var bodys = document.getElementsByTagName("body");
  if(heads.length > 0 && (!withBody || bodys.length > 0))
     heads[0].appendChild(oS); else setTimeout(function(){loadCSS(sURL, onLoad, withBody);} ,50);
}
//////////////////////////////////////////////////////////////////////////////////
function loadCSSString(t,withBody,prepend){
  var oS = document.createElement('style');
  oS.type = 'text/css';
  if (oS.styleSheet){
    oS.styleSheet.cssText = t;
  } else {
    oS.appendChild(document.createTextNode(t));
  }
   
  var heads = document.getElementsByTagName("head");
  var bodys = document.getElementsByTagName("body");
  if(heads.length > 0 && (!withBody || bodys.length > 0)){
    if(prepend && heads[0].childNodes.length > 0)
     heads[0].insertBefore(oS,heads[0].childNodes[0]); 
    else
     heads[0].appendChild(oS); 
  } else setTimeout(function(){loadCSSString(t,withBody);} ,50);
}

//////////////////////////////////////////////////////////////////////////////////
var autoTextArea_List = new Array();

function refreshAutoExpandTextareas(){
 for(var i=0; i < autoTextArea_List.length; i++){
  autoTextArea_List[i].resize(autoTextArea_List[i].element);
 }
}

function makeAutoExpandTextarea(id){
 var t = document.getElementById(id);
 if(!t) {setTimeout(function(){makeAutoExpandTextarea(id);},10); return; }

 // check if already in list
 for(var i=0; i < autoTextArea_List.length; i++){
  if(autoTextArea_List[i].element == t) {
   autoTextArea_List[i].resize(autoTextArea_List[i].element);
   return;
  }
 }

 var offset= !window.opera ? (t.offsetHeight - t.clientHeight) : (t.offsetHeight + parseInt(window.getComputedStyle(t, null).getPropertyValue('border-top-width'))) ;
 t.style.overflow = "hidden";
 var resize = function(t) {
  var dy = t.offsetHeight - t.clientHeight;
  t.style.height = (27-dy)+'px';
  if(t.scrollHeight > 0) 
     t.style.height = (t.scrollHeight  + offset ) + 'px';	
 };
 autoTextArea_List.push({element:t, resize:resize});
 setTimeout(function(){resize(t);},100);
 setTimeout(function(){resize(t);},1000);
 t.addEventListener && t.addEventListener('input', function(event) {resize(t);});
 t.addEventListener && t.addEventListener('keyup', function(event) {resize(t);});
 t['attachEvent'] && t.attachEvent('onkeyup', function() {resize(t);});
}
//////////////////////////////////////////////////////////////////////////////////
function browserSupportsFixed() {
  var container = document.body;
  if (document.createElement &&
      container && container.appendChild && container.removeChild) {
      var el = document.createElement("div");
      if (!el.getBoundingClientRect) {
          return null;
      }
      el.innerHTML = "x";
      el.style.cssText = "position:fixed;top:100px;";
      container.appendChild(el);
      var originalHeight = container.style.height, originalScrollTop = container.scrollTop;
      container.style.height = "3000px";
      container.scrollTop = 500;
      var elementTop = el.getBoundingClientRect().top;
      container.style.height = originalHeight;
      var isSupported = elementTop === 100;
      container.removeChild(el);
      container.scrollTop = originalScrollTop;
      return false; // isSupported;
  }
  return null;
}
//////////////////////////////////////////////////////////////////////////////////
function htmlEncode(source) {
	var result = source;
	result = result.replace(/\n/g,'<br/>');
	result = result.replace(/\&/g,'&amp;');
	result = result.replace(/\</g,'&lt;');
	result = result.replace(/\>/g,'&gt;');
	result = result.replace(new RegExp('"','g'), '&quot;');
	return result;
}
//////////////////////////////////////////////////////////////////////////////
function getFlexApp(movieName) {
  if (navigator.appName.indexOf("Microsoft Internet")==-1)
  {
    if (document.embeds && document.embeds[movieName])
      return document.embeds[movieName]; 
  }

  if (navigator.appName.indexOf("Microsoft Internet")!=-1)
  return document.getElementById(movieName);

  if (window.document[movieName]) 
  {
      return window.document[movieName];
  }

  return document.getElementById(movieName);
}
//////////////////////////////////////////////////////////////////////////////
function addEvent(el, eType, fn, uC) {
	if (el.addEventListener) {
		el.addEventListener(eType, fn, uC);
		return true;
	} else if (el.attachEvent) {
		return el.attachEvent('on' + eType, fn);
	} else {
		el['on' + eType] = fn;
	}
} 
//////////////////////////////////////////////////////////////////////////////
function getIFrameHeight(){
    var height = document.body.scrollHeight;
    var c = document.body.offsetHeight;
    if(c && c < height) height = c;

    return parseInt(height);
}
//////////////////////////////////////////////////////////////////////////////
function getURLParam(strParamName){
 var strReturn = "";
 strParamName = strParamName.toLowerCase();
 var strHref = window.location.href;
 if ( strHref.indexOf("?") > -1 ){
  var strQueryString = strHref.substr(strHref.indexOf("?")+1);
  var a = strQueryString.split("&");
  for ( var i = 0; i < a.length; i++ ){
   var b = a[i].split("=");
   if (b[0].toLowerCase() == strParamName){
    strReturn = b[1];
    break;
   }
  }
 }
 return strReturn;
}
//////////////////////////////////////////////////////////////////////////////
function getYouTubeID(u){
  u = u.split("/");
  u = u[u.length-1];
  if(u.indexOf("?")>= 0){
    if(u.indexOf("v=") >= 0){
      u = u.split("?");
      u = u[1];
      u = u.split("&");
      for(var i=0; i< u.length; i++){
        var d = u[i];
        d = d.split("=");
        if(d[0] == "v") return d[1];
      }
    }else{
      u = u.split("?");
      return u[0];
    }
  }else{
    return u;
  }
  return "";
}
//////////////////////////////////////////////////////////////////////////////
function timeToSeconds(s){
    if(s == "" || s == undefined) return 0;
    s = s.replace(".",":");
    var ta = s.split(":");
    t = 0;
    for(var i=0; i < ta.length; i++){
     while(ta[i] != "" && ta[i][0] == "0") ta[i] = ta[i].substring(1);
     if(ta[i] == "") ta[i] = "0";
    }
    if(ta.length == 3){
       t += parseInt(ta[0])*60*60;
       t += parseInt(ta[1])*60;
       t += parseInt(ta[2]);
    }
    if(ta.length == 2){
       t += parseInt(ta[0])*60;
       t += parseInt(ta[1]);
    }
    if(ta.length == 1){
       t += parseInt(ta[0]);
    }
    return t;
}
//////////////////////////////////////////////////////////////////////////////
function secondsToTime(i){
 return ((i - i % 60)/60)+":"+(i % 60 < 10 ? "0":"")+(i % 60);
}
//////////////////////////////////////////////////////////////////////////////
function trim(str, chars) {
 return ltrim(rtrim(str, chars), chars);
}

function ltrim(str, chars) {
 chars = chars || "\\s";
 return str.replace(new RegExp("^[" + chars + "]+", "g"), "");
}
 
function rtrim(str, chars) {
 chars = chars || "\\s";
 return str.replace(new RegExp("[" + chars + "]+$", "g"), "");
}
//////////////////////////////////////////////////////////////////////////////
var textToSpeechAudioCounter = -3;
var soundManagerReady = false;
var textToSpeechHtml5 = false;

function soundManagerReadyCallback(){
 if(textToSpeechAudioCounter == -1) return; // already on the way
 textToSpeechAudioCounter = -1; 
 soundManager.setup({
  url: AppClientServerProtocol+'//learningapps.org/text-to-speech/',
  debugMode : false,
  noSWFCache: true,
  useHTML5Audio: true,
  preferFlash: false, //!textToSpeechHtml5,
  flashLoadTimeout:0,
  onready: function() {
   soundManagerReady = true;	
   textToSpeechAudioCounter = 0; 
  },
  ontimeout: function() {
   soundManagerReady = true;	
   textToSpeechAudioCounter = 0; 
  }
 });
 setTimeout(function(){ 
   soundManager.beginDelayedInit();
 },500);
}

window.speechSynthesisVoices = [ // default voices - ios hack
  { name: "Zuzana", voiceURI: "com.apple.ttsbundle.Zuzana-compact", lang: "cs-CZ", localService: true, "default": true },
  { name: "Anna", voiceURI: "com.apple.ttsbundle.Anna-compact", lang: "de-DE", localService: true, "default": true },
  { name: "Daniel", voiceURI: "com.apple.ttsbundle.Daniel-compact", lang: "en-GB", localService: true, "default": true },
  { name: "Samantha (Enhanced)", voiceURI: "com.apple.ttsbundle.Samantha-premium", lang: "en-US", localService: true, "default": true },
  { name: "Samantha", voiceURI: "com.apple.ttsbundle.Samantha-compact", lang: "en-US", localService: true, "default": true },
  { name: "Monica", voiceURI: "com.apple.ttsbundle.Monica-compact", lang: "es-ES", localService: true, "default": true },
  { name: "Thomas", voiceURI: "com.apple.ttsbundle.Thomas-compact", lang: "fr-FR", localService: true, "default": true },
  { name: "Mariska", voiceURI: "com.apple.ttsbundle.Mariska-compact", lang: "hu-HU", localService: true, "default": true },
  { name: "Alice", voiceURI: "com.apple.ttsbundle.Alice-compact", lang: "it-IT", localService: true, "default": true },
  { name: "Xander", voiceURI: "com.apple.ttsbundle.Xander-compact", lang: "nl-NL", localService: true, "default": true },
  { name: "Zosia", voiceURI: "com.apple.ttsbundle.Zosia-compact", lang: "pl-PL", localService: true, "default": true },
  { name: "Joana", voiceURI: "com.apple.ttsbundle.Joana-compact", lang: "pt-PT", localService: true, "default": true },
  { name: "Milena", voiceURI: "com.apple.ttsbundle.Milena-compact", lang: "ru-RU", localService: true, "default": true },
  { name: "Yelda", voiceURI: "com.apple.ttsbundle.Yelda-compact", lang: "tr-TR", localService: true, "default": true }
];
window.speechSynthesisVoicesSet = false;

function getSpeechSynthesisVoices() {
  if(typeof speechSynthesis == "undefined") return;
  if(window.speechSynthesisVoicesSet) return;
  var v = speechSynthesis.getVoices(); 
  if(v.length > 0) {
    window.speechSynthesisVoices = v;
    window.speechSynthesisVoicesSet = true;
  }else
    setTimeout(getSpeechSynthesisVoices,200);
}
getSpeechSynthesisVoices();

function textToSpeechInit(){
 if(textToSpeechAudioCounter == -3){
  textToSpeechAudioCounter = -2;

  //loadScript(AppClientServerProtocol+"//learningapps.org/text-to-speech/soundmanager2.js?r="+Math.random()+".mp3", soundManagerReadyCallback);

  textToSpeechAudioCounter = -1;
  soundManagerReady = true;	
  textToSpeechAudioCounter = 0; 
 }
}

var textToSpeechRetryCounter = 0;
var lastTextToSpeechPlayer = null;

var textToSpeechHTML5FirstLoad = true;
var textToSpeechHTML5FirstChange = true;

function textToSpeechHTML5(s,lang){
  if(window.speechSynthesisVoices.length == 0) return;
  try{
    var utterance = new SpeechSynthesisUtterance(s);

    var voices = window.speechSynthesisVoices;
    var v = null;
    var en = null;
    for(var i=0; i < voices.length; i++){
      var a = voices[i].lang.split("-");
      if(a[0] == "en" && en == null) en = voices[i];
      if(voices[i]["default"] && a[0] == "en") en = voices[i];
      if(a[0] == lang && v == null) v = voices[i];
      if(voices[i]["default"] && a[0] == lang) v = voices[i];
    } 

    utterance.voice = v ? v : en;
    if(lang == 'en') utterance.lang = 'en-US';
    if(lang == 'fr') utterance.lang = 'fr-FR';
    if(lang == 'de') utterance.lang = 'de-DE';
    if(lang == 'it') utterance.lang = 'it-IT';
    if(lang == 'ru') utterance.lang = 'ru-RU';
    if(lang == 'es') utterance.lang = 'es-ES';
    utterance.volume = 1;
    utterance.rate = 0.9;
  //  if(navigator.platform && ( /iPad|iPhone|iPod/.test(navigator.platform))) utterance.rate = 0.1;
    utterance.pitch = 1;
    speechSynthesis.speak(utterance);
  }catch(e){};
}

var text2speechDebounceTimer = null;
var startUpTime = new Date().getTime();
var firstPlayText2SpeechAudio = true;
var text2speechAudioPlayer = new Audio();
function textToSpeech(s,lang,html5){
  function unlockAudio() {
    text2speechAudioPlayer.src = 'https://learningapps.org/silence.mp3';
    text2speechAudioPlayer.play();
    document.body.removeEventListener('click', unlockAudio);
    document.body.removeEventListener('touchstart', unlockAudio);
  }
 if(firstPlayText2SpeechAudio){
   setTimeout(function(){
     document.body.addEventListener('click', unlockAudio);
     document.body.addEventListener('touchstart', unlockAudio);
   },10);
   firstPlayText2SpeechAudio = false;
 }
 if(!lang) lang = "de";
 lang = lang.toLowerCase();
 try{
   textToSpeechAudioCounter = 0;
   if(text2speechAudioPlayer) { 
    text2speechAudioPlayer.pause(); 
   }
 }catch(e){};
 try{
   text2speechAudioPlayer.src = AppClientServerProtocol+"//learningapps.org/text-to-speech/t2s.php?tl="+lang+"&txt="+encodeURIComponent(s)+ "&rnd="+startUpTime;
   var promise = text2speechAudioPlayer.play();
   if(promise) promise.then(function(){
     text2speechAudioPlayer.play();
   },function(e){ console.log(e); });
 }catch(e){};
}
//////////////////////////////////////////////////////////////////////////////
var MathJaxEnabled = true;
function addMathJax(){
 var body = document.getElementsByTagName("body");
 if (body.length == 0) {
  setTimeout("addMathJax()", 150);
  return;
 }

 if(!MathJaxEnabled) return;
 var script= document.createElement('script');
 script.type= 'text/x-mathjax-config';
 script.text = 'MathJax.Hub.Config({showMathMenu:false,showProcessingMessages:false, tex2jax: {inlineMath: [["$$","$$"]], displayMath: [["$$$","$$$"]], processEnvironments:false}});';
 // adding a special \rand{1}{6} random generator to display a number between 1 and 6 (including)
 script.text += 'MathJax.Hub.Register.StartupHook("TeX Jax Ready",function () { MathJax.InputJax.TeX.prefilterHooks.Add(function (data) { data.math = data.math.replace(/\\\\rand\\{([^\\}]*?)\\}\\{([^\\}]*?)\\}/g,function(n,min,max){ return Math.floor(Math.random()*(parseInt(max) - parseInt(min) + 1)) + parseInt(min); }); }); });'; 
 
 document.body.appendChild(script);

 var script= document.createElement('script');
 script.type= 'text/javascript';
 script.src= AppClientServerProtocol+'//learningapps.org/MathJax/MathJax.js?config=TeX-AMS-MML_HTMLorMML&v=2.75';
 document.body.appendChild(script);

 MathJaxRefresh = setInterval("refreshMathJax()",1000);
}
function refreshMathJax(){
 if(!MathJaxEnabled) return;
 if(typeof(MathJax) != "undefined" && MathJax.Hub)
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
}

var checkForMathJax = function(){
 var body = document.getElementsByTagName("body");
 if (body.length == 0) {
  setTimeout("checkForMathJax()", 150);
  return;
 }

 setTimeout(function(){
 if(typeof AppClient != "undefined"){
  var params = AppClient.getParameters();
  var hasLatex = false;
  for(var i=0; i < params.length; i++){
   if(params[i].value.indexOf("$$") >= 0) {hasLatex = true; break;} 
   if(params[i].hint && params[i].hint.indexOf && params[i].hint.indexOf("$$") >= 0) {hasLatex = true; break;} 
  }
  if(!hasLatex){ 
   if(document.body && document.body.innerHTML.indexOf("$$") < 0) return; // no MathJax
  }
 }
 addMathJax();
 },250);
}
checkForMathJax();

//////////////////////////////////////////////////////////////////////////////
function makeIETouchWork(){
  loadCSSString(".ui-draggable {-ms-touch-action:none;}",false,true);
  /*
  var css = document.styleSheets[0];
  if(css){
   if(css.insertRule) 
    css.insertRule(".ui-draggable {-ms-touch-action:none;}",0); else
    css.addRule(".ui-draggable", "-ms-touch-action:none;");
  }
  */
}

setTimeout(makeIETouchWork,250);

//////////////////////////////////////////////////////////////////////////////
function _getElementOffset(elm, height) {
	var cStyle = elm.ownerDocument && elm.ownerDocument.defaultView && elm.ownerDocument.defaultView.getComputedStyle
		&& elm.ownerDocument.defaultView.getComputedStyle(elm, null),
		ret = cStyle && cStyle.getPropertyValue(height ? 'height' : 'width') || '';
	if (ret && ret.indexOf('.') > -1) {
		ret = parseFloat(ret)
			+ parseInt(cStyle.getPropertyValue(height ? 'padding-top' : 'padding-left'))
			+ parseInt(cStyle.getPropertyValue(height ? 'padding-bottom' : 'padding-right'))
			+ parseInt(cStyle.getPropertyValue(height ? 'border-top-width' : 'border-left-width'))
			+ parseInt(cStyle.getPropertyValue(height ? 'border-bottom-width' : 'border-right-width'));
	} else {
		ret = height ? elm.offsetHeight : elm.offsetWidth;
	}
	return ret;
}
function getOffsetWidth(elm) {
	return _getElementOffset(elm);
}
function getOffsetHeight(elm) {
	return _getElementOffset(elm, true);
}

/*
var lightBox = new Object();
lightBox.body = null;
lightBox.overlay = null;
lightBox.container = null;
lightBox.close = null;
lightBox.description = null;

lightBox.lightbox = function (imageurl, text, desc){
 if(this.container) return;
 this.body = document.getElementsByTagName("body")[0];
 var isImage = imageurl || imageurl != "" ? true : false;
 this.createOverlay();
 this.createContainer(isImage); // autoadded to body
 this.createCloseButton(this.container); // added to container
 this.createDescription(desc); // initialize
 if(isImage) {
   this.container.appendChild(this.description);
   this.createImageLoader(imageurl);
 }else{ 
    if(!text) return;
    this.createTextLoader(text);
    if(desc) {
     var divider = document.createElement('hr');
     var dividerCSS = 'width:80%;color:#000;';
     divider.setAttribute("style", dividerCSS);
     this.container.appendChild(divider);
     this.container.appendChild(this.description);
    }
  } 
}

lightBox.createOverlay = function(){
 this.overlay = document.createElement('div');
 var overlayCSS = 'position:absolute;width:100%;top:0;left:0;height:100%;background:#000;opacity:0.6;filter:alpha(opacity=0);-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);z-index:10000;cursor:pointer';
 this.overlay.setAttribute('style',overlayCSS);
 var self = this;
 this.overlay.onclick = function closeLightBox(){
   self.fadeOut(self.container, 0, 100);
   self.body.removeChild(self.overlay);
   self.body.removeChild(self.container); 
   self.container = null;
 }
 this.body.appendChild(this.overlay);
}

lightBox.createContainer = function(image){
 this.container = document.createElement('div');
 var containerCSS = '';
 if(image)containerCSS = 'background:white;position:absolute;opacity:0.01;filter:alpha(opacity=0);-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);z-index:10001;border:10px solid #fff;text-align:center;';
 else containerCSS = 'width:400px;display:block;position:absolute;opacity:0;filter:alpha(opacity=0);-ms-filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);z-index:10001;border:10px solid #fff;background-color:#fff;';
 this.container.setAttribute('style',containerCSS);
 this.body.appendChild(this.container);
}

lightBox.createCloseButton = function(){
 var close = document.createElement('div');
 var closeCSS = 'position:absolute;right:-24px;top:-24px;z-index:10003;cursor:pointer;color:#fff;border:2px solid #AEAEAE;border-radius:30px;background:#000;font-size:32px;font-weight:bold;display:inline-block;line-height:0px;padding:11px 3px;'; 
 close.setAttribute("style", closeCSS);
 close.innerHTML = '&times;';
 this.container.appendChild(close);
 close.onclick = this.overlay.onclick;
 this.container.appendChild(close);
}

lightBox.createDescription = function(desc){
 this.description = document.createElement('div');
 var descriptionCSS = 'text-align:center;border-bottom:10px solid #fff;border-top:10px solid #fff;background:#fff;';
 this.description.setAttribute("style", descriptionCSS);
 if(!desc) desc = "";
 this.description.innerHTML = '<small>' + desc + '</small>';
}

lightBox.createImageLoader = function(imageurl){
 var imageToDisplay = document.createElement('img');
 imageToDisplayCSS = 'max-height:' + (this.body.clientHeight * 0.80 -20)+'px;';
 imageToDisplay.setAttribute("style", imageToDisplayCSS);
 
 imageToDisplay.setAttribute('alt', ""); 
 this.container.appendChild(imageToDisplay);
 var self = this;
 imageToDisplay.onload = function onload (){
   var width = imageToDisplay.clientWidth;
   var height = imageToDisplay.clientHeight;
   self.container.style.top = "50%";
   self.container.style.left = "50%";
   self.container.style.width = Math.max(200,width) + 'px';
   var mTop = -height/2;
   var mLeft = -width/2;
   self.container.style.marginTop = mTop + 'px';
   self.container.style.marginLeft = mLeft + 'px'
 
   self.fadeIn(self.container, 1, 100);

   setTimeout(function() {
	var height = self.container.clientHeight+40;
	var width = self.container.clientWidth+20;
	if(height > self.body.clientHeight || width > self.body.clientWidth){
         if(width > self.body.clientWidth) self.container.style.width = "";
         imageToDisplay.style.maxWidth = self.body.clientWidth * 0.9 + "px";
	 imageToDisplay.style.maxHeight =(self.body.clientHeight * 0.80 - 
                                          self.description.clientHeight -20) + 'px';
	 height = self.container.clientHeight;
	}
	self.container.style.marginTop = - self.container.clientHeight / 2 + 'px';
	self.container.style.marginLeft = (- self.container.clientWidth / 2 -10) + 'px';
  }, 100);
 }
 imageToDisplay.setAttribute('src', imageurl); 
}

lightBox.createTextLoader = function(text){
 var contentTextDiv = document.createElement('div');
 contentTextDiv.setAttribute("style", "font-size:120%");
 contentTextDiv.innerHTML = text;
 this.container.style.maxHeight = (this.body.clientHeight*0.8-40)+"px";
 this.container.style.overflowX = "hidden"; 
 this.container.style.overflowY = "auto"; 

 var height = this.container.offsetHeight;
 this.container.appendChild(contentTextDiv);
 this.container.style.top = "20%";
 this.container.style.left = "50%";
 var mTop = -(height/2);
 var mLeft = -(this.container.offsetWidth/2);
 this.container.style.marginLeft = mLeft + 'px';
 this.fadeIn(this.container, 1, 100);
}

lightBox.fadeIn = function(element, targetOpacity, timeToFade){
  var currentOpacity = window.getComputedStyle(element, null).opacity;
  var interval = false,
	interval = setInterval(function() {	   
	   currentOpacity = parseFloat(element.style.opacity);
	   if (currentOpacity <= targetOpacity) {
		  currentOpacity += .1;
		  element.style.opacity = currentOpacity;
		  element.style.filter = 'alpha(opacity=' + currentOpacity * 100 + ')';
	   } else {
		  clearInterval(interval);
	   }
	}, timeToFade);
}

lightBox.fadeOut = function(element, targetOpacity, timeToFade){
  var currentOpacity = window.getComputedStyle(element, null).opacity;
  var interval = false,
        
	interval = setInterval(function() {	   
	   currentOpacity = parseFloat(element.style.opacity);
	   if (currentOpacity > targetOpacity) {
		  currentOpacity -= .1;
		  element.style.opacity = currentOpacity;
		  element.style.filter = 'alpha(opacity=' + currentOpacity * 100 + ')';
	   } else {
		  clearInterval(interval);
	   }
	}, timeToFade);
}

*/

/*! jQuery v1.12.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="1.12.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(n.isPlainObject(c)||(b=n.isArray(c)))?(b?(b=!1,f=a&&n.isArray(a)?a:[]):f=a&&n.isPlainObject(a)?a:{},g[d]=n.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray||function(a){return"array"===n.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;try{if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(!l.ownFirst)for(b in a)return k.call(a,b);for(b in a);return void 0===b||k.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(b){b&&n.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(h)return h.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(f=a[b],b=a,a=f),n.isFunction(a)?(c=e.call(arguments,2),d=function(){return a.apply(b||this,c.concat(e.call(arguments)))},d.guid=a.guid=a.guid||n.guid++,d):void 0},now:function(){return+new Date},support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return n.inArray(a,b)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;e>b;b++)if(n.contains(d[b],this))return!0}));for(b=0;e>b;b++)n.find(a,d[b],c);return c=this.pushStack(e>1?n.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}if(f=d.getElementById(e[2]),f&&f.parentNode){if(f.id!==e[2])return A.find(a);this.length=1,this[0]=f}return this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b,c=n(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(n.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?n.inArray(this[0],n(a)):n.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return n.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||(e=n.uniqueSort(e)),D.test(a)&&(e=e.reverse())),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=!0,c||j.disable(),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.addEventListener?(d.removeEventListener("DOMContentLoaded",K),a.removeEventListener("load",K)):(d.detachEvent("onreadystatechange",K),a.detachEvent("onload",K))}function K(){(d.addEventListener||"load"===a.event.type||"complete"===d.readyState)&&(J(),n.ready())}n.ready.promise=function(b){if(!I)if(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll)a.setTimeout(n.ready);else if(d.addEventListener)d.addEventListener("DOMContentLoaded",K),a.addEventListener("load",K);else{d.attachEvent("onreadystatechange",K),a.attachEvent("onload",K);var c=!1;try{c=null==a.frameElement&&d.documentElement}catch(e){}c&&c.doScroll&&!function f(){if(!n.isReady){try{c.doScroll("left")}catch(b){return a.setTimeout(f,50)}J(),n.ready()}}()}return I.promise(b)},n.ready.promise();var L;for(L in n(l))break;l.ownFirst="0"===L,l.inlineBlockNeedsLayout=!1,n(function(){var a,b,c,e;c=d.getElementsByTagName("body")[0],c&&c.style&&(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",l.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(e))}),function(){var a=d.createElement("div");l.deleteExpando=!0;try{delete a.test}catch(b){l.deleteExpando=!1}a=null}();var M=function(a){var b=n.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b},N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(O,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}n.data(a,b,c)}else c=void 0;
}return c}function Q(a){var b;for(b in a)if(("data"!==b||!n.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function R(a,b,d,e){if(M(a)){var f,g,h=n.expando,i=a.nodeType,j=i?n.cache:a,k=i?a[h]:a[h]&&h;if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||n.guid++:h),j[k]||(j[k]=i?{}:{toJSON:n.noop}),"object"!=typeof b&&"function"!=typeof b||(e?j[k]=n.extend(j[k],b):j[k].data=n.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[n.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[n.camelCase(b)])):f=g,f}}function S(a,b,c){if(M(a)){var d,e,f=a.nodeType,g=f?n.cache:a,h=f?a[n.expando]:n.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){n.isArray(b)?b=b.concat(n.map(b,n.camelCase)):b in d?b=[b]:(b=n.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!Q(d):!n.isEmptyObject(d))return}(c||(delete g[h].data,Q(g[h])))&&(f?n.cleanData([a],!0):l.deleteExpando||g!=g.window?delete g[h]:g[h]=void 0)}}}n.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?n.cache[a[n.expando]]:a[n.expando],!!a&&!Q(a)},data:function(a,b,c){return R(a,b,c)},removeData:function(a,b){return S(a,b)},_data:function(a,b,c){return R(a,b,c,!0)},_removeData:function(a,b){return S(a,b,!0)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=n.data(f),1===f.nodeType&&!n._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));n._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){n.data(this,a)}):arguments.length>1?this.each(function(){n.data(this,a,b)}):f?P(f,a,n.data(f,a)):void 0},removeData:function(a){return this.each(function(){n.removeData(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=n._data(a,b),c&&(!d||n.isArray(c)?d=n._data(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return n._data(a,c)||n._data(a,c,{empty:n.Callbacks("once memory").add(function(){n._removeData(a,b+"queue"),n._removeData(a,c)})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=n._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}}),function(){var a;l.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,e;return c=d.getElementsByTagName("body")[0],c&&c.style?(b=d.createElement("div"),e=d.createElement("div"),e.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(e).appendChild(b),"undefined"!=typeof b.style.zoom&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(d.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(e),a):void 0}}();var T=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,U=new RegExp("^(?:([+-])=|)("+T+")([a-z%]*)$","i"),V=["Top","Right","Bottom","Left"],W=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function X(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&U.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var Y=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)Y(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},Z=/^(?:checkbox|radio)$/i,$=/<([\w:-]+)/,_=/^$|\/(?:java|ecma)script/i,aa=/^\s+/,ba="abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";function ca(a){var b=ba.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}!function(){var a=d.createElement("div"),b=d.createDocumentFragment(),c=d.createElement("input");a.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",l.leadingWhitespace=3===a.firstChild.nodeType,l.tbody=!a.getElementsByTagName("tbody").length,l.htmlSerialize=!!a.getElementsByTagName("link").length,l.html5Clone="<:nav></:nav>"!==d.createElement("nav").cloneNode(!0).outerHTML,c.type="checkbox",c.checked=!0,b.appendChild(c),l.appendChecked=c.checked,a.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!a.cloneNode(!0).lastChild.defaultValue,b.appendChild(a),c=d.createElement("input"),c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),a.appendChild(c),l.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,l.noCloneEvent=!!a.addEventListener,a[n.expando]=1,l.attributes=!a.getAttribute(n.expando)}();var da={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:l.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]};da.optgroup=da.option,da.tbody=da.tfoot=da.colgroup=da.caption=da.thead,da.th=da.td;function ea(a,b){var c,d,e=0,f="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||n.nodeName(d,b)?f.push(d):n.merge(f,ea(d,b));return void 0===b||b&&n.nodeName(a,b)?n.merge([a],f):f}function fa(a,b){for(var c,d=0;null!=(c=a[d]);d++)n._data(c,"globalEval",!b||n._data(b[d],"globalEval"))}var ga=/<|&#?\w+;/,ha=/<tbody/i;function ia(a){Z.test(a.type)&&(a.defaultChecked=a.checked)}function ja(a,b,c,d,e){for(var f,g,h,i,j,k,m,o=a.length,p=ca(b),q=[],r=0;o>r;r++)if(g=a[r],g||0===g)if("object"===n.type(g))n.merge(q,g.nodeType?[g]:g);else if(ga.test(g)){i=i||p.appendChild(b.createElement("div")),j=($.exec(g)||["",""])[1].toLowerCase(),m=da[j]||da._default,i.innerHTML=m[1]+n.htmlPrefilter(g)+m[2],f=m[0];while(f--)i=i.lastChild;if(!l.leadingWhitespace&&aa.test(g)&&q.push(b.createTextNode(aa.exec(g)[0])),!l.tbody){g="table"!==j||ha.test(g)?"<table>"!==m[1]||ha.test(g)?0:i:i.firstChild,f=g&&g.childNodes.length;while(f--)n.nodeName(k=g.childNodes[f],"tbody")&&!k.childNodes.length&&g.removeChild(k)}n.merge(q,i.childNodes),i.textContent="";while(i.firstChild)i.removeChild(i.firstChild);i=p.lastChild}else q.push(b.createTextNode(g));i&&p.removeChild(i),l.appendChecked||n.grep(ea(q,"input"),ia),r=0;while(g=q[r++])if(d&&n.inArray(g,d)>-1)e&&e.push(g);else if(h=n.contains(g.ownerDocument,g),i=ea(p.appendChild(g),"script"),h&&fa(i),c){f=0;while(g=i[f++])_.test(g.type||"")&&c.push(g)}return i=null,p}!function(){var b,c,e=d.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(l[b]=c in a)||(e.setAttribute(c,"t"),l[b]=e.attributes[c].expando===!1);e=null}();var ka=/^(?:input|select|textarea)$/i,la=/^key/,ma=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,na=/^(?:focusinfocus|focusoutblur)$/,oa=/^([^.]*)(?:\.(.+)|)/;function pa(){return!0}function qa(){return!1}function ra(){try{return d.activeElement}catch(a){}}function sa(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)sa(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=qa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=n.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return"undefined"==typeof n||a&&n.event.triggered===a.type?void 0:n.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(G)||[""],h=b.length;while(h--)f=oa.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=n.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=n.event.special[o]||{},l=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},i),(m=g[o])||(m=g[o]=[],m.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,l):m.push(l),n.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=n.hasData(a)&&n._data(a);if(r&&(k=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=oa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=m.length;while(f--)g=m[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(m.splice(f,1),g.selector&&m.delegateCount--,l.remove&&l.remove.call(a,g));i&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(k)&&(delete r.handle,n._removeData(a,"events"))}},trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(i=m=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!na.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),h=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),l=n.event.special[q]||{},f||!l.trigger||l.trigger.apply(e,c)!==!1)){if(!f&&!l.noBubble&&!n.isWindow(e)){for(j=l.delegateType||q,na.test(j+q)||(i=i.parentNode);i;i=i.parentNode)p.push(i),m=i;m===(e.ownerDocument||d)&&p.push(m.defaultView||m.parentWindow||a)}o=0;while((i=p[o++])&&!b.isPropagationStopped())b.type=o>1?j:l.bindType||q,g=(n._data(i,"events")||{})[b.type]&&n._data(i,"handle"),g&&g.apply(i,c),g=h&&i[h],g&&g.apply&&M(i)&&(b.result=g.apply(i,c),b.result===!1&&b.preventDefault());if(b.type=q,!f&&!b.isDefaultPrevented()&&(!l._default||l._default.apply(p.pop(),c)===!1)&&M(e)&&h&&e[q]&&!n.isWindow(e)){m=e[h],m&&(e[h]=null),n.event.triggered=q;try{e[q]()}catch(s){}n.event.triggered=void 0,m&&(e[h]=m)}return b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(n._data(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ma.test(f)?this.mouseHooks:la.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=g.srcElement||d),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,h.filter?h.filter(a,g):a},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button,h=b.fromElement;return null==a.pageX&&null!=b.clientX&&(e=a.target.ownerDocument||d,f=e.documentElement,c=e.body,a.pageX=b.clientX+(f&&f.scrollLeft||c&&c.scrollLeft||0)-(f&&f.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(f&&f.scrollTop||c&&c.scrollTop||0)-(f&&f.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&h&&(a.relatedTarget=h===a.target?b.toElement:h),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==ra()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===ra()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return n.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=d.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)}:function(a,b,c){var d="on"+b;a.detachEvent&&("undefined"==typeof a[d]&&(a[d]=null),a.detachEvent(d,c))},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?pa:qa):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:qa,isPropagationStopped:qa,isImmediatePropagationStopped:qa,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=pa,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=pa,a&&!this.isSimulated&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=pa,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),l.submit||(n.event.special.submit={setup:function(){return n.nodeName(this,"form")?!1:void n.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=n.nodeName(b,"input")||n.nodeName(b,"button")?n.prop(b,"form"):void 0;c&&!n._data(c,"submit")&&(n.event.add(c,"submit._submit",function(a){a._submitBubble=!0}),n._data(c,"submit",!0))})},postDispatch:function(a){a._submitBubble&&(delete a._submitBubble,this.parentNode&&!a.isTrigger&&n.event.simulate("submit",this.parentNode,a))},teardown:function(){return n.nodeName(this,"form")?!1:void n.event.remove(this,"._submit")}}),l.change||(n.event.special.change={setup:function(){return ka.test(this.nodeName)?("checkbox"!==this.type&&"radio"!==this.type||(n.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._justChanged=!0)}),n.event.add(this,"click._change",function(a){this._justChanged&&!a.isTrigger&&(this._justChanged=!1),n.event.simulate("change",this,a)})),!1):void n.event.add(this,"beforeactivate._change",function(a){var b=a.target;ka.test(b.nodeName)&&!n._data(b,"change")&&(n.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||n.event.simulate("change",this.parentNode,a)}),n._data(b,"change",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return n.event.remove(this,"._change"),!ka.test(this.nodeName)}}),l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=n._data(d,b);e||d.addEventListener(a,c,!0),n._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=n._data(d,b)-1;e?n._data(d,b,e):(d.removeEventListener(a,c,!0),n._removeData(d,b))}}}),n.fn.extend({on:function(a,b,c,d){return sa(this,a,b,c,d)},one:function(a,b,c,d){return sa(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=qa),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ta=/ jQuery\d+="(?:null|\d+)"/g,ua=new RegExp("<(?:"+ba+")[\\s/>]","i"),va=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,wa=/<script|<style|<link/i,xa=/checked\s*(?:[^=]|=\s*.checked.)/i,ya=/^true\/(.*)/,za=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Aa=ca(d),Ba=Aa.appendChild(d.createElement("div"));function Ca(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function Da(a){return a.type=(null!==n.find.attr(a,"type"))+"/"+a.type,a}function Ea(a){var b=ya.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Fa(a,b){if(1===b.nodeType&&n.hasData(a)){var c,d,e,f=n._data(a),g=n._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)n.event.add(b,c,h[c][d])}g.data&&(g.data=n.extend({},g.data))}}function Ga(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!l.noCloneEvent&&b[n.expando]){e=n._data(b);for(d in e.events)n.removeEvent(b,d,e.handle);b.removeAttribute(n.expando)}"script"===c&&b.text!==a.text?(Da(b).text=a.text,Ea(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),l.html5Clone&&a.innerHTML&&!n.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&Z.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}}function Ha(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&xa.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),Ha(f,b,c,d)});if(o&&(k=ja(b,a[0].ownerDocument,!1,a,d),e=k.firstChild,1===k.childNodes.length&&(k=e),e||d)){for(i=n.map(ea(k,"script"),Da),h=i.length;o>m;m++)g=k,m!==p&&(g=n.clone(g,!0,!0),h&&n.merge(i,ea(g,"script"))),c.call(a[m],g,m);if(h)for(j=i[i.length-1].ownerDocument,n.map(i,Ea),m=0;h>m;m++)g=i[m],_.test(g.type||"")&&!n._data(g,"globalEval")&&n.contains(j,g)&&(g.src?n._evalUrl&&n._evalUrl(g.src):n.globalEval((g.text||g.textContent||g.innerHTML||"").replace(za,"")));k=e=null}return a}function Ia(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(ea(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&fa(ea(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(va,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h,i=n.contains(a.ownerDocument,a);if(l.html5Clone||n.isXMLDoc(a)||!ua.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(Ba.innerHTML=a.outerHTML,Ba.removeChild(f=Ba.firstChild)),!(l.noCloneEvent&&l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(d=ea(f),h=ea(a),g=0;null!=(e=h[g]);++g)d[g]&&Ga(e,d[g]);if(b)if(c)for(h=h||ea(a),d=d||ea(f),g=0;null!=(e=h[g]);g++)Fa(e,d[g]);else Fa(a,f);return d=ea(f,"script"),d.length>0&&fa(d,!i&&ea(a,"script")),d=h=e=null,f},cleanData:function(a,b){for(var d,e,f,g,h=0,i=n.expando,j=n.cache,k=l.attributes,m=n.event.special;null!=(d=a[h]);h++)if((b||M(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)m[e]?n.event.remove(d,e):n.removeEvent(d,e,g.handle);j[f]&&(delete j[f],k||"undefined"==typeof d.removeAttribute?d[i]=void 0:d.removeAttribute(i),c.push(f))}}}),n.fn.extend({domManip:Ha,detach:function(a){return Ia(this,a,!0)},remove:function(a){return Ia(this,a)},text:function(a){return Y(this,function(a){return void 0===a?n.text(this):this.empty().append((this[0]&&this[0].ownerDocument||d).createTextNode(a))},null,a,arguments.length)},append:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.appendChild(a)}})},prepend:function(){return Ha(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ca(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ha(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&n.cleanData(ea(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&n.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return Y(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(ta,""):void 0;if("string"==typeof a&&!wa.test(a)&&(l.htmlSerialize||!ua.test(a))&&(l.leadingWhitespace||!aa.test(a))&&!da[($.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ea(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ha(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(ea(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=0,e=[],f=n(a),h=f.length-1;h>=d;d++)c=d===h?this:this.clone(!0),n(f[d])[b](c),g.apply(e,c.get());return this.pushStack(e)}});var Ja,Ka={HTML:"block",BODY:"block"};function La(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function Ma(a){var b=d,c=Ka[a];return c||(c=La(a,b),"none"!==c&&c||(Ja=(Ja||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Ja[0].contentWindow||Ja[0].contentDocument).document,b.write(),b.close(),c=La(a,b),Ja.detach()),Ka[a]=c),c}var Na=/^margin/,Oa=new RegExp("^("+T+")(?!px)[a-z%]+$","i"),Pa=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Qa=d.documentElement;!function(){var b,c,e,f,g,h,i=d.createElement("div"),j=d.createElement("div");if(j.style){j.style.cssText="float:left;opacity:.5",l.opacity="0.5"===j.style.opacity,l.cssFloat=!!j.style.cssFloat,j.style.backgroundClip="content-box",j.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===j.style.backgroundClip,i=d.createElement("div"),i.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",j.innerHTML="",i.appendChild(j),l.boxSizing=""===j.style.boxSizing||""===j.style.MozBoxSizing||""===j.style.WebkitBoxSizing,n.extend(l,{reliableHiddenOffsets:function(){return null==b&&k(),f},boxSizingReliable:function(){return null==b&&k(),e},pixelMarginRight:function(){return null==b&&k(),c},pixelPosition:function(){return null==b&&k(),b},reliableMarginRight:function(){return null==b&&k(),g},reliableMarginLeft:function(){return null==b&&k(),h}});function k(){var k,l,m=d.documentElement;m.appendChild(i),j.style.cssText="-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",b=e=h=!1,c=g=!0,a.getComputedStyle&&(l=a.getComputedStyle(j),b="1%"!==(l||{}).top,h="2px"===(l||{}).marginLeft,e="4px"===(l||{width:"4px"}).width,j.style.marginRight="50%",c="4px"===(l||{marginRight:"4px"}).marginRight,k=j.appendChild(d.createElement("div")),k.style.cssText=j.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",k.style.marginRight=k.style.width="0",j.style.width="1px",g=!parseFloat((a.getComputedStyle(k)||{}).marginRight),j.removeChild(k)),j.style.display="none",f=0===j.getClientRects().length,f&&(j.style.display="",j.innerHTML="<table><tr><td></td><td>t</td></tr></table>",j.childNodes[0].style.borderCollapse="separate",k=j.getElementsByTagName("td"),k[0].style.cssText="margin:0;border:0;padding:0;display:none",f=0===k[0].offsetHeight,f&&(k[0].style.display="",k[1].style.display="none",f=0===k[0].offsetHeight)),m.removeChild(i)}}}();var Ra,Sa,Ta=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ra=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Oa.test(g)&&Na.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0===g?g:g+""}):Qa.currentStyle&&(Ra=function(a){return a.currentStyle},Sa=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ra(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Oa.test(g)&&!Ta.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Ua(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Va=/alpha\([^)]*\)/i,Wa=/opacity\s*=\s*([^)]*)/i,Xa=/^(none|table(?!-c[ea]).+)/,Ya=new RegExp("^("+T+")(.*)$","i"),Za={position:"absolute",visibility:"hidden",display:"block"},$a={letterSpacing:"0",fontWeight:"400"},_a=["Webkit","O","Moz","ms"],ab=d.createElement("div").style;function bb(a){if(a in ab)return a;var b=a.charAt(0).toUpperCase()+a.slice(1),c=_a.length;while(c--)if(a=_a[c]+b,a in ab)return a}function cb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=n._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&W(d)&&(f[g]=n._data(d,"olddisplay",Ma(d.nodeName)))):(e=W(d),(c&&"none"!==c||!e)&&n._data(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function db(a,b,c){var d=Ya.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function eb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+V[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+V[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+V[f]+"Width",!0,e))):(g+=n.css(a,"padding"+V[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+V[f]+"Width",!0,e)));return g}function fb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ra(a),g=l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Sa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Oa.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+eb(a,b,c||(g?"border":"content"),d,f)+"px"}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Sa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":l.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;if(b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=U.exec(c))&&e[1]&&(c=X(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=bb(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Sa(a,b,d)),"normal"===f&&b in $a&&(f=$a[b]),""===c||c?(e=parseFloat(f),c===!0||isFinite(e)?e||0:f):f}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Xa.test(n.css(a,"display"))&&0===a.offsetWidth?Pa(a,Za,function(){return fb(a,b,d)}):fb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ra(a);return db(a,c,d?eb(a,b,d,l.boxSizing&&"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),l.opacity||(n.cssHooks.opacity={get:function(a,b){return Wa.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=n.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===n.trim(f.replace(Va,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Va.test(f)?f.replace(Va,e):f+" "+e)}}),n.cssHooks.marginRight=Ua(l.reliableMarginRight,function(a,b){return b?Pa(a,{display:"inline-block"},Sa,[a,"marginRight"]):void 0}),n.cssHooks.marginLeft=Ua(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Sa(a,"marginLeft"))||(n.contains(a.ownerDocument,a)?a.getBoundingClientRect().left-Pa(a,{
marginLeft:0},function(){return a.getBoundingClientRect().left}):0))+"px":void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+V[d]+b]=f[d]||f[d-2]||f[0];return e}},Na.test(a)||(n.cssHooks[a+b].set=db)}),n.fn.extend({css:function(a,b){return Y(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ra(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return cb(this,!0)},hide:function(){return cb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){W(this)?n(this).show():n(this).hide()})}});function gb(a,b,c,d,e){return new gb.prototype.init(a,b,c,d,e)}n.Tween=gb,gb.prototype={constructor:gb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=gb.propHooks[this.prop];return a&&a.get?a.get(this):gb.propHooks._default.get(this)},run:function(a){var b,c=gb.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):gb.propHooks._default.set(this),this}},gb.prototype.init.prototype=gb.prototype,gb.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},gb.propHooks.scrollTop=gb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=gb.prototype.init,n.fx.step={};var hb,ib,jb=/^(?:toggle|show|hide)$/,kb=/queueHooks$/;function lb(){return a.setTimeout(function(){hb=void 0}),hb=n.now()}function mb(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=V[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function nb(a,b,c){for(var d,e=(qb.tweeners[b]||[]).concat(qb.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ob(a,b,c){var d,e,f,g,h,i,j,k,m=this,o={},p=a.style,q=a.nodeType&&W(a),r=n._data(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,m.always(function(){m.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=n.css(a,"display"),k="none"===j?n._data(a,"olddisplay")||Ma(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(l.inlineBlockNeedsLayout&&"inline"!==Ma(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",l.shrinkWrapBlocks()||m.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],jb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(o))"inline"===("none"===j?Ma(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=n._data(a,"fxshow",{}),f&&(r.hidden=!q),q?n(a).show():m.done(function(){n(a).hide()}),m.done(function(){var b;n._removeData(a,"fxshow");for(b in o)n.style(a,b,o[b])});for(d in o)g=nb(q?r[d]:0,d,m),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function pb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function qb(a,b,c){var d,e,f=0,g=qb.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=hb||lb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:hb||lb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(pb(k,j.opts.specialEasing);g>f;f++)if(d=qb.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,nb,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(qb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return X(c.elem,a,U.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],qb.tweeners[c]=qb.tweeners[c]||[],qb.tweeners[c].unshift(b)},prefilters:[ob],prefilter:function(a,b){b?qb.prefilters.unshift(a):qb.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(W).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=qb(this,n.extend({},a),f);(e||n._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=n._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&kb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=n._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(mb(b,!0),a,d,e)}}),n.each({slideDown:mb("show"),slideUp:mb("hide"),slideToggle:mb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=n.timers,c=0;for(hb=n.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||n.fx.stop(),hb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){ib||(ib=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(ib),ib=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a,b=d.createElement("input"),c=d.createElement("div"),e=d.createElement("select"),f=e.appendChild(d.createElement("option"));c=d.createElement("div"),c.setAttribute("className","t"),c.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",a=c.getElementsByTagName("a")[0],b.setAttribute("type","checkbox"),c.appendChild(b),a=c.getElementsByTagName("a")[0],a.style.cssText="top:1px",l.getSetAttribute="t"!==c.className,l.style=/top/.test(a.getAttribute("style")),l.hrefNormalized="/a"===a.getAttribute("href"),l.checkOn=!!b.value,l.optSelected=f.selected,l.enctype=!!d.createElement("form").enctype,e.disabled=!0,l.optDisabled=!f.disabled,b=d.createElement("input"),b.setAttribute("value",""),l.input=""===b.getAttribute("value"),b.value="t",b.setAttribute("type","radio"),l.radioValue="t"===b.value}();var rb=/\r/g,sb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(sb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)if(d=e[g],n.inArray(n.valHooks.option.get(d),f)>-1)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var tb,ub,vb=n.expr.attrHandle,wb=/^(?:checked|selected)$/i,xb=l.getSetAttribute,yb=l.input;n.fn.extend({attr:function(a,b){return Y(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ub:tb)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)?yb&&xb||!wb.test(c)?a[d]=!1:a[n.camelCase("default-"+c)]=a[d]=!1:n.attr(a,c,""),a.removeAttribute(xb?c:d)}}),ub={set:function(a,b,c){return b===!1?n.removeAttr(a,c):yb&&xb||!wb.test(c)?a.setAttribute(!xb&&n.propFix[c]||c,c):a[n.camelCase("default-"+c)]=a[c]=!0,c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=vb[b]||n.find.attr;yb&&xb||!wb.test(b)?vb[b]=function(a,b,d){var e,f;return d||(f=vb[b],vb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,vb[b]=f),e}:vb[b]=function(a,b,c){return c?void 0:a[n.camelCase("default-"+b)]?b.toLowerCase():null}}),yb&&xb||(n.attrHooks.value={set:function(a,b,c){return n.nodeName(a,"input")?void(a.defaultValue=b):tb&&tb.set(a,b,c)}}),xb||(tb={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},vb.id=vb.name=vb.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},n.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:tb.set},n.attrHooks.contenteditable={set:function(a,b,c){tb.set(a,""===b?!1:b,c)}},n.each(["width","height"],function(a,b){n.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),l.style||(n.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var zb=/^(?:input|select|textarea|button|object)$/i,Ab=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return Y(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return a=n.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):zb.test(a.nodeName)||Ab.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.hrefNormalized||n.each(["href","src"],function(a,b){n.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this}),l.enctype||(n.propFix.enctype="encoding");var Bb=/[\t\r\n\f]/g;function Cb(a){return n.attr(a,"class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,Cb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,Cb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=Cb(c),d=1===c.nodeType&&(" "+e+" ").replace(Bb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&n.attr(c,"class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,Cb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=Cb(this),b&&n._data(this,"__className__",b),n.attr(this,"class",b||a===!1?"":n._data(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+Cb(c)+" ").replace(Bb," ").indexOf(b)>-1)return!0;return!1}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}});var Db=a.location,Eb=n.now(),Fb=/\?/,Gb=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;n.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=n.trim(b+"");return e&&!n.trim(e.replace(Gb,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():n.error("Invalid JSON: "+b)},n.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new a.DOMParser,c=d.parseFromString(b,"text/xml")):(c=new a.ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var Hb=/#.*$/,Ib=/([?&])_=[^&]*/,Jb=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Kb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Lb=/^(?:GET|HEAD)$/,Mb=/^\/\//,Nb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Ob={},Pb={},Qb="*/".concat("*"),Rb=Db.href,Sb=Nb.exec(Rb.toLowerCase())||[];function Tb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Ub(a,b,c,d){var e={},f=a===Pb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Vb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&n.extend(!0,a,c),a}function Wb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Xb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rb,type:"GET",isLocal:Kb.test(Sb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Qb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Vb(Vb(a,n.ajaxSettings),b):Vb(n.ajaxSettings,a)},ajaxPrefilter:Tb(Ob),ajaxTransport:Tb(Pb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var d,e,f,g,h,i,j,k,l=n.ajaxSetup({},c),m=l.context||l,o=l.context&&(m.nodeType||m.jquery)?n(m):n.event,p=n.Deferred(),q=n.Callbacks("once memory"),r=l.statusCode||{},s={},t={},u=0,v="canceled",w={readyState:0,getResponseHeader:function(a){var b;if(2===u){if(!k){k={};while(b=Jb.exec(g))k[b[1].toLowerCase()]=b[2]}b=k[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===u?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return u||(a=t[c]=t[c]||a,s[a]=b),this},overrideMimeType:function(a){return u||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>u)for(b in a)r[b]=[r[b],a[b]];else w.always(a[w.status]);return this},abort:function(a){var b=a||v;return j&&j.abort(b),y(0,b),this}};if(p.promise(w).complete=q.add,w.success=w.done,w.error=w.fail,l.url=((b||l.url||Rb)+"").replace(Hb,"").replace(Mb,Sb[1]+"//"),l.type=c.method||c.type||l.method||l.type,l.dataTypes=n.trim(l.dataType||"*").toLowerCase().match(G)||[""],null==l.crossDomain&&(d=Nb.exec(l.url.toLowerCase()),l.crossDomain=!(!d||d[1]===Sb[1]&&d[2]===Sb[2]&&(d[3]||("http:"===d[1]?"80":"443"))===(Sb[3]||("http:"===Sb[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=n.param(l.data,l.traditional)),Ub(Ob,l,c,w),2===u)return w;i=n.event&&l.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!Lb.test(l.type),f=l.url,l.hasContent||(l.data&&(f=l.url+=(Fb.test(f)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=Ib.test(f)?f.replace(Ib,"$1_="+Eb++):f+(Fb.test(f)?"&":"?")+"_="+Eb++)),l.ifModified&&(n.lastModified[f]&&w.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&w.setRequestHeader("If-None-Match",n.etag[f])),(l.data&&l.hasContent&&l.contentType!==!1||c.contentType)&&w.setRequestHeader("Content-Type",l.contentType),w.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+Qb+"; q=0.01":""):l.accepts["*"]);for(e in l.headers)w.setRequestHeader(e,l.headers[e]);if(l.beforeSend&&(l.beforeSend.call(m,w,l)===!1||2===u))return w.abort();v="abort";for(e in{success:1,error:1,complete:1})w[e](l[e]);if(j=Ub(Pb,l,c,w)){if(w.readyState=1,i&&o.trigger("ajaxSend",[w,l]),2===u)return w;l.async&&l.timeout>0&&(h=a.setTimeout(function(){w.abort("timeout")},l.timeout));try{u=1,j.send(s,y)}catch(x){if(!(2>u))throw x;y(-1,x)}}else y(-1,"No Transport");function y(b,c,d,e){var k,s,t,v,x,y=c;2!==u&&(u=2,h&&a.clearTimeout(h),j=void 0,g=e||"",w.readyState=b>0?4:0,k=b>=200&&300>b||304===b,d&&(v=Wb(l,w,d)),v=Xb(l,v,w,k),k?(l.ifModified&&(x=w.getResponseHeader("Last-Modified"),x&&(n.lastModified[f]=x),x=w.getResponseHeader("etag"),x&&(n.etag[f]=x)),204===b||"HEAD"===l.type?y="nocontent":304===b?y="notmodified":(y=v.state,s=v.data,t=v.error,k=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),w.status=b,w.statusText=(c||y)+"",k?p.resolveWith(m,[s,y,w]):p.rejectWith(m,[w,y,t]),w.statusCode(r),r=void 0,i&&o.trigger(k?"ajaxSuccess":"ajaxError",[w,l,k?s:t]),q.fireWith(m,[w,y]),i&&(o.trigger("ajaxComplete",[w,l]),--n.active||n.event.trigger("ajaxStop")))}return w},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){if(n.isFunction(a))return this.each(function(b){n(this).wrapAll(a.call(this,b))});if(this[0]){var b=n(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}});function Yb(a){return a.style&&a.style.display||n.css(a,"display")}function Zb(a){if(!n.contains(a.ownerDocument||d,a))return!0;while(a&&1===a.nodeType){if("none"===Yb(a)||"hidden"===a.type)return!0;a=a.parentNode}return!1}n.expr.filters.hidden=function(a){return l.reliableHiddenOffsets()?a.offsetWidth<=0&&a.offsetHeight<=0&&!a.getClientRects().length:Zb(a)},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var $b=/%20/g,_b=/\[\]$/,ac=/\r?\n/g,bc=/^(?:submit|button|image|reset|file)$/i,cc=/^(?:input|select|textarea|keygen)/i;function dc(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||_b.test(a)?d(a,e):dc(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)dc(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)dc(c,a[c],b,e);return d.join("&").replace($b,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&cc.test(this.nodeName)&&!bc.test(a)&&(this.checked||!Z.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(ac,"\r\n")}}):{name:b.name,value:c.replace(ac,"\r\n")}}).get()}}),n.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return this.isLocal?ic():d.documentMode>8?hc():/^(get|post|head|put|delete|options)$/i.test(this.type)&&hc()||ic()}:hc;var ec=0,fc={},gc=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in fc)fc[a](void 0,!0)}),l.cors=!!gc&&"withCredentials"in gc,gc=l.ajax=!!gc,gc&&n.ajaxTransport(function(b){if(!b.crossDomain||l.cors){var c;return{send:function(d,e){var f,g=b.xhr(),h=++ec;if(g.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(f in b.xhrFields)g[f]=b.xhrFields[f];b.mimeType&&g.overrideMimeType&&g.overrideMimeType(b.mimeType),b.crossDomain||d["X-Requested-With"]||(d["X-Requested-With"]="XMLHttpRequest");for(f in d)void 0!==d[f]&&g.setRequestHeader(f,d[f]+"");g.send(b.hasContent&&b.data||null),c=function(a,d){var f,i,j;if(c&&(d||4===g.readyState))if(delete fc[h],c=void 0,g.onreadystatechange=n.noop,d)4!==g.readyState&&g.abort();else{j={},f=g.status,"string"==typeof g.responseText&&(j.text=g.responseText);try{i=g.statusText}catch(k){i=""}f||!b.isLocal||b.crossDomain?1223===f&&(f=204):f=j.text?200:404}j&&e(f,i,j,g.getAllResponseHeaders())},b.async?4===g.readyState?a.setTimeout(c):g.onreadystatechange=fc[h]=c:c()},abort:function(){c&&c(void 0,!0)}}}});function hc(){try{return new a.XMLHttpRequest}catch(b){}}function ic(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=d.head||n("head")[0]||d.documentElement;return{send:function(e,f){b=d.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||f(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var jc=[],kc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=jc.pop()||n.expando+"_"+Eb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(kc.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&kc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(kc,"$1"+e):b.jsonp!==!1&&(b.url+=(Fb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,jc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ja([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var lc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&lc)return lc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h,a.length)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function mc(a){return n.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&n.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,n.contains(b,e)?("undefined"!=typeof e.getBoundingClientRect&&(d=e.getBoundingClientRect()),c=mc(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===n.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(c=a.offset()),c.top+=n.css(a[0],"borderTopWidth",!0),c.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-n.css(d,"marginTop",!0),left:b.left-c.left-n.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Qa})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);n.fn[a]=function(d){return Y(this,function(a,d,e){var f=mc(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?n(f).scrollLeft():e,c?e:n(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ua(l.pixelPosition,function(a,c){return c?(c=Sa(a,b),Oa.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({
padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return Y(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var nc=a.jQuery,oc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=oc),b&&a.jQuery===n&&(a.jQuery=nc),n},b||(a.jQuery=a.$=n),n});
/*!
 * VERSION: 1.18.2
 * DATE: 2015-12-22
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},e=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e.call(b[c],c):e[c%e.length];delete a.cycle},f=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=f.prototype.render},g=1e-10,h=c._internals,i=h.isSelector,j=h.isArray,k=f.prototype=c.to({},.1,{}),l=[];f.version="1.18.2",k.constructor=f,k.kill()._gc=!1,f.killTweensOf=f.killDelayedCallsTo=c.killTweensOf,f.getTweensOf=c.getTweensOf,f.lagSmoothing=c.lagSmoothing,f.ticker=c.ticker,f.render=c.render,k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),c.prototype.invalidate.call(this)},k.updateTo=function(a,b){var d,e=this.ratio,f=this.vars.immediateRender||a.immediateRender;b&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(d in a)this.vars[d]=a[d];if(this._initted||f)if(b)this._initted=!1,f&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&c._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var g=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(g,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||f)for(var h,i=1/(1-e),j=this._firstPT;j;)h=j.s+j.c,j.c*=i,j.s=h-j.c,j=j._next;return this},k.render=function(a,b,c){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var d,e,f,i,j,k,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._totalTime,q=this._cycle,r=this._duration,s=this._rawPrevTime;if(a>=n-1e-7?(this._totalTime=n,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=r,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===r&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>s||0>=a&&a>=-1e-7||s===g&&"isPause"!==this.data)&&s!==a&&(c=!0,s>g&&(e="onReverseComplete")),this._rawPrevTime=m=!b||a||s===a?a:g)):1e-7>a?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==p||0===r&&s>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===r&&(this._initted||!this.vars.lazy||c)&&(s>=0&&(c=!0),this._rawPrevTime=m=!b||a||s===a?a:g)),this._initted||(c=!0)):(this._totalTime=this._time=a,0!==this._repeat&&(i=r+this._repeatDelay,this._cycle=this._totalTime/i>>0,0!==this._cycle&&this._cycle===this._totalTime/i&&this._cycle--,this._time=this._totalTime-this._cycle*i,this._yoyo&&0!==(1&this._cycle)&&(this._time=r-this._time),this._time>r?this._time=r:this._time<0&&(this._time=0)),this._easeType?(j=this._time/r,k=this._easeType,l=this._easePower,(1===k||3===k&&j>=.5)&&(j=1-j),3===k&&(j*=2),1===l?j*=j:2===l?j*=j*j:3===l?j*=j*j*j:4===l&&(j*=j*j*j*j),1===k?this.ratio=1-j:2===k?this.ratio=j:this._time/r<.5?this.ratio=j/2:this.ratio=1-j/2):this.ratio=this._ease.getRatio(this._time/r)),o===this._time&&!c&&q===this._cycle)return void(p!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=o,this._totalTime=p,this._rawPrevTime=s,this._cycle=q,h.lazyTweens.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/r):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&a>=0&&(this._active=!0),0===p&&(2===this._initted&&a>0&&this._init(),this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===r)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&this._startTime&&this._startAt.render(a,b,c),b||(this._totalTime!==p||d)&&this._callback("onUpdate")),this._cycle!==q&&(b||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===r&&this._rawPrevTime===g&&m!==g&&(this._rawPrevTime=0))},f.to=function(a,b,c){return new f(a,b,c)},f.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new f(a,b,c)},f.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new f(a,b,d)},f.staggerTo=f.allTo=function(a,b,g,h,k,m,n){h=h||0;var o,p,q,r,s=0,t=[],u=function(){g.onComplete&&g.onComplete.apply(g.onCompleteScope||this,arguments),k.apply(n||g.callbackScope||this,m||l)},v=g.cycle,w=g.startAt&&g.startAt.cycle;for(j(a)||("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a))),a=a||[],0>h&&(a=d(a),a.reverse(),h*=-1),o=a.length-1,q=0;o>=q;q++){p={};for(r in g)p[r]=g[r];if(v&&e(p,a,q),w){w=p.startAt={};for(r in g.startAt)w[r]=g.startAt[r];e(p.startAt,a,q)}p.delay=s+(p.delay||0),q===o&&k&&(p.onComplete=u),t[q]=new f(a[q],b,p),s+=h}return t},f.staggerFrom=f.allFrom=function(a,b,c,d,e,g,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,f.staggerTo(a,b,c,d,e,g,h)},f.staggerFromTo=f.allFromTo=function(a,b,c,d,e,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,f.staggerTo(a,b,d,e,g,h,i)},f.delayedCall=function(a,b,c,d,e){return new f(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0})},f.set=function(a,b){return new f(a,0,b)},f.isTweening=function(a){return c.getTweensOf(a,!0).length>0};var m=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(m(f,b)),e=d.length),f=f._next;return d},n=f.getAllTweens=function(b){return m(a._rootTimeline,b).concat(m(a._rootFramesTimeline,b))};f.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var f,g,h,i=n(0!=e),j=i.length,k=c&&d&&e;for(h=0;j>h;h++)g=i[h],(k||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&(a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1))},f.killChildTweensOf=function(a,b){if(null!=a){var e,g,k,l,m,n=h.tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a)),j(a))for(l=a.length;--l>-1;)f.killChildTweensOf(a[l],b);else{e=[];for(k in n)for(g=n[k].target.parentNode;g;)g===a&&(e=e.concat(n[k].tweens)),g=g.parentNode;for(m=e.length,l=0;m>l;l++)b&&e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1)}}};var o=function(a,c,d,e){c=c!==!1,d=d!==!1,e=e!==!1;for(var f,g,h=n(e),i=c&&d&&e,j=h.length;--j>-1;)g=h[j],(i||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&g.paused(a)};return f.pauseAll=function(a,b,c){o(!0,a,b,c)},f.resumeAll=function(a,b,c){o(!1,a,b,c)},f.globalTimeScale=function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b=b||g,d._startTime=e-(e-d._startTime)*d._timeScale/b,d=a._rootFramesTimeline,e=c.ticker.frame,d._startTime=e-(e-d._startTime)*d._timeScale/b,d._timeScale=a._rootTimeline._timeScale=b,b):d._timeScale},k.progress=function(a){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),!1):this._time/this.duration()},k.totalProgress=function(a){return arguments.length?this.totalTime(this.totalDuration()*a,!1):this._totalTime/this.totalDuration()},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},k.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},f},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var c,d,e=this.vars;for(d in e)c=e[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(e[d]=this._swapSelfInParams(c));i(e.tweens)&&this.add(e.tweens,0,e.align,e.stagger)},e=1e-10,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e.call(b[c],c):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=d.prototype=new b;return d.version="1.18.2",q.constructor=d,q.kill()._gc=q._forcingPlayhead=q._hasPause=!1,q.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},q.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,d),e)},q.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},q.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),f=f||0,0>f&&(a=p(a),a.reverse(),f*=-1),o=0;o<a.length;o++)l=m(e),l.startAt&&(l.startAt=m(l.startAt),l.startAt.cycle&&n(l.startAt,a,o)),r&&n(l,a,o),q.to(a[o],b,l,o*f);return this.add(q,g)},q.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},q.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},q.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},q.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g=new d(a),h=g._timeline;for(null==b&&(b=!0),h._remove(g,!0),g._startTime=0,g._rawPrevTime=g._time=g._totalTime=h._time,e=h._first;e;)f=e._next,b&&e instanceof c&&e.target===e.vars.onComplete||g.add(e,e._startTime-e._delay),e=f;return h.add(g,0),g},q.add=function(e,f,g,h){var j,k,l,m,n,o;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),this.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(n=this,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return this},q.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},q._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>d._startTime+d._totalDuration/d._timeScale&&(this._time=this.duration(),this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},q.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},q.insert=q.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},q.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},q.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},q.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},q.removeLabel=function(a){return delete this._labels[a],this},q.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},q._parseTimeOrLabel=function(b,c,d,e){var f;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(f=e.length;--f>-1;)e[f]instanceof a&&e[f].timeline===this&&this.remove(e[f]);if("string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-this.duration():0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=this.duration());else{if(f=b.indexOf("="),-1===f)return null==this._labels[b]?d?this._labels[b]=this.duration()+c:c:this._labels[b]+c;c=parseInt(b.charAt(f-1)+"1",10)*Number(b.substr(f+1)),b=f>1?this._parseTimeOrLabel(b.substr(0,f-1),0,d):this.duration()}return Number(b)+c},q.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},q.stop=function(){return this.paused(!0)},q.gotoAndPlay=function(a,b){return this.play(a,b)},q.gotoAndStop=function(a,b){return this.pause(a,b)},q.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._startTime,q=this._timeScale,r=this._paused;if(a>=n-1e-7)this._totalTime=this._time=n,this._reversed||this._hasPausedChild()||(f=!0,h="onComplete",i=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==a&&this._first&&(i=!0,this._rawPrevTime>e&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,a=n+1e-4;else if(1e-7>a)if(this._totalTime=this._time=0,(0!==o||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>a&&this._rawPrevTime>=0))&&(h="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(i=f=!0,h="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(i=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(i=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!b){if(a>=o)for(d=this._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(l=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(this._time=a=l._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=a}if(this._time!==o&&this._first||c||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==o&&a>0&&(this._active=!0),0===o&&this.vars.onStart&&0!==this._time&&(b||this._callback("onStart")),m=this._time,m>=o)for(d=this._first;d&&(g=d._next,m===this._time&&(!this._paused||r));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=this._last;d&&(g=d._prev,m===this._time&&(!this._paused||r));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}this._onUpdate&&(b||(j.length&&k(),this._callback("onUpdate"))),h&&(this._gc||(p===this._startTime||q!==this._timeScale)&&(0===this._time||n>=this.totalDuration())&&(f&&(j.length&&k(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[h]&&this._callback(h)))}},q._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},q.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},q.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},q.recent=function(){return this._recent},q._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},q.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},q._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},q.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},q.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},q._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},q.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},q.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},q.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;)b=e._prev,e._dirty&&e.totalDuration(),e._startTime>f&&this._sortChildren&&!e._paused?this.add(e,e._startTime-e._delay):f=e._startTime,e._startTime<0&&!e._paused&&(d-=e._startTime,this._timeline.smoothChildTiming&&(this._startTime+=e._startTime/this._timeScale),this.shiftChildren(-e._startTime,!1,-9999999999),f=0),c=e._startTime+e._totalDuration/e._timeScale,c>d&&(d=c),e=b;this._duration=this._totalDuration=d,this._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},q.paused=function(b){if(!b)for(var c=this._first,d=this._time;c;)c._startTime===d&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},q.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},q.rawTime=function(){return this._paused?this._totalTime:(this._timeline.rawTime()-this._startTime)*this._timeScale},d},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=new c(null,null,1,0),j=d.prototype=new a;return j.constructor=d,j.kill()._gc=!1,d.version="1.18.2",j.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},j.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},j.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},j.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},j.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:i,useFrames:this.usesFrames(),immediateRender:!1};for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new b(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time!==f.target.time()&&d===f.duration()&&f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale),c.onStart&&f._callback("onStart")},f},j.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},j.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._dirty?this.totalDuration():this._totalDuration,p=this._duration,q=this._time,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(a>=o-1e-7)this._locked||(this._totalTime=o,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,j="onComplete",k=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||0>u||u===e)&&u!==a&&this._first&&(k=!0,u>e&&(j="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=p,a=p+1e-4);else if(1e-7>a)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==q||0===p&&u!==e&&(u>0||0>a&&u>=0)&&!this._locked)&&(j="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(k=f=!0,j="onReverseComplete"):u>=0&&this._first&&(k=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=p||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(k=!0)}else if(0===p&&0>u&&(k=!0),this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(l=p+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=p-this._time),this._time>p?(this._time=p,a=p+1e-4):this._time<0?this._time=a=0:a=this._time)),this._hasPause&&!this._forcingPlayhead&&!b){if(a=this._time,a>=q)for(d=this._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(m=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&(this._time=a=m._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),y=x===(this._yoyo&&0!==(1&this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if(this._totalTime=w*p,this._cycle<w?x=!x:this._totalTime+=p,this._time=q,this._rawPrevTime=0===p?u-1e-4:u,this._cycle=w,this._locked=!0,q=x?0:p,this.render(q,b,0===p),b||this._gc||this.vars.onRepeat&&this._callback("onRepeat"),q!==this._time)return;if(y&&(q=x?p+1e-4:-1e-4,this.render(q,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=z,this._cycle=A,this._rawPrevTime=B}if(!(this._time!==q&&this._first||c||k||m))return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==r&&a>0&&(this._active=!0),0===r&&this.vars.onStart&&0!==this._totalTime&&(b||this._callback("onStart")),n=this._time,n>=q)for(d=this._first;d&&(i=d._next,n===this._time&&(!this._paused||v));)(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)&&(m===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=this._last;d&&(i=d._prev,n===this._time&&(!this._paused||v));){if(d._active||d._startTime<=q&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}this._onUpdate&&(b||(g.length&&h(),this._callback("onUpdate"))),j&&(this._locked||this._gc||(s===this._startTime||t!==this._timeScale)&&(0===this._time||o>=this.totalDuration())&&(f&&(g.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this._callback(j)))},j.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},j.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},j.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},j.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},j.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},j.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},j.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},j.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},j.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},j.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},j.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},j.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),function(){var a=180/Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function(a,b,c,d){this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length-1,x=0,y=a[0].a;for(j=0;w>j;j++)n=a[x],k=n.a,l=n.d,m=a[x+1].d,h?(t=b[j],u=c[j],v=(u+t)*e*.25/(g?.5:d[j]||.5),o=l-(l-k)*(g?.5*e:0!==t?v/t:0),p=l+(m-l)*(g?.5*e:0!==u?v/u:0),q=l-(o+((p-o)*(3*t/(t+u)+.5)/4||0))):(o=l-(l-k)*e*.5,p=l+(m-l)*e*.5,q=l-(o+p)/2),o+=q,p+=q,n.c=r=o,0!==j?n.b=y:n.b=y=n.a+.6*(n.c-n.a),n.da=l-k,n.ca=r-k,n.ba=y-k,f?(s=i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x+=4):x++,y=p;n=a[x],n.b=y,n.c=y+.4*(n.d-y),n.da=n.d-n.a,n.ca=n.c-n.a,n.ba=y-n.a,f&&(s=i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]))},k=function(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a=[f].concat(a),i=a.length;--i>-1;)"string"==typeof(m=a[i][d])&&"="===m.charAt(1)&&(a[i][d]=f[d]+Number(m.charAt(0)+m.substr(2)));if(h=a.length-2,0>h)return n[0]=new g(a[0][d],0,0,a[-1>h?0:1][d]),n;for(i=0;h>i;i++)j=a[i][d],k=a[i+1][d],n[i]=new g(j,0,0,k),e&&(l=a[i+2][d],b[i]=(b[i]||0)+(k-j)*(k-j),c[i]=(c[i]||0)+(l-k)*(l-k));return n[i]=new g(a[i][d],0,0,a[i+1][d]),n},l=function(a,f,g,i,l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m||a[0];l="string"==typeof l?","+l+",":h,null==f&&(f=1);for(o in a[0])w.push(o);if(a.length>1){for(u=a[a.length-1],t=!0,n=w.length;--n>-1;)if(o=w[n],Math.abs(x[o]-u[o])>.05){t=!1;break}t&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(b.length=c.length=d.length=0,n=w.length;--n>-1;)o=w[n],e[o]=-1!==l.indexOf(","+o+","),v[o]=k(a,o,e[o],m);for(n=b.length;--n>-1;)b[n]=Math.sqrt(b[n]),c[n]=Math.sqrt(c[n]);if(!i){for(n=w.length;--n>-1;)if(e[o])for(p=v[w[n]],s=p.length-1,q=0;s>q;q++)r=p[q+1].da/c[q]+p[q].da/b[q],d[q]=(d[q]||0)+r*r;for(n=d.length;--n>-1;)d[n]=Math.sqrt(d[n])}for(n=w.length,q=g?4:1;--n>-1;)o=w[n],p=v[o],j(p,f,g,i,e[o]),t&&(p.splice(0,q),p.splice(p.length-q,q));return v},m=function(a,b,c){b=b||"soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic"===b?3:2,r="soft"===b,s=[];if(r&&c&&(a=[c].concat(a)),null==a||a.length<q+1)throw"invalid Bezier data";for(m in a[0])s.push(m);for(j=s.length;--j>-1;){for(m=s[j],p[m]=i=[],n=0,l=a.length,k=0;l>k;k++)d=null==c?a[k][m]:"string"==typeof(o=a[k][m])&&"="===o.charAt(1)?c[m]+Number(o.charAt(0)+o.substr(2)):Number(o),r&&k>1&&l-1>k&&(i[n++]=(d+i[n-2])/2),i[n++]=d;for(l=n-q+1,n=0,k=0;l>k;k+=q)d=i[k],e=i[k+1],f=i[k+2],h=2===q?0:i[k+3],i[n++]=o=3===q?new g(d,e,f,h):new g(d,(2*e+d)/3,(2*e+f)/3,f);i.length=n}return p},n=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1/c,p=a.length;--p>-1;)for(m=a[p],f=m.a,g=m.d-f,h=m.c-f,i=m.b-f,d=e=0,k=1;c>=k;k++)j=o*k,l=1-j,d=e-(e=(j*j*g+3*l*(j*h+l*i))*j),n=p*c+k-1,b[n]=(b[n]||0)+d*d},o=function(a,b){b=b>>0||6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b-1,l=[],m=[];for(c in a)n(a[c],g,b);for(e=g.length,d=0;e>d;d++)i+=Math.sqrt(g[d]),f=d%b,m[f]=i,f===k&&(j+=i,f=d/b>>0,l[f]=m,h[f]=j,i=0,m=[]);return{length:j,lengths:h,segments:l}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.4",API:2,global:!0,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._round={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);
var d,e,f,g,h,i=b.values||[],j={},k=i[0],n=b.autoRotate||c.vars.orientToBezier;this._autoRotate=n?n instanceof Array?n:[["x","y","rotation",n===!0?0:Number(n)||0]]:null;for(d in k)this._props.push(d);for(f=this._props.length;--f>-1;)d=this._props[f],this._overwriteProps.push(d),e=this._func[d]="function"==typeof a[d],j[d]=e?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]():parseFloat(a[d]),h||j[d]!==i[0][d]&&(h=j);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,h):m(i,b.type,j),this._segCount=this._beziers[d].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(n=this._autoRotate)for(this._initialRotations=[],n[0]instanceof Array||(this._autoRotate=n=[n]),f=n.length;--f>-1;){for(g=0;3>g;g++)d=n[f][g],this._func[d]="function"==typeof a[d]?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]:!1;d=n[f][2],this._initialRotations[f]=this._func[d]?this._func[d].call(this._target):this._target[d]}return this._startRatio=c.vars.runBackwards?1:0,!0},set:function(b){var c,d,e,f,g,h,i,j,k,l,m=this._segCount,n=this._func,o=this._target,p=b!==this._startRatio;if(this._timeRes){if(k=this._lengths,l=this._curSeg,b*=this._length,e=this._li,b>this._l2&&m-1>e){for(j=m-1;j>e&&(this._l2=k[++e])<=b;);this._l1=k[e-1],this._li=e,this._curSeg=l=this._segments[e],this._s2=l[this._s1=this._si=0]}else if(b<this._l1&&e>0){for(;e>0&&(this._l1=k[--e])>=b;);0===e&&b<this._l1?this._l1=0:e++,this._l2=k[e],this._li=e,this._curSeg=l=this._segments[e],this._s1=l[(this._si=l.length-1)-1]||0,this._s2=l[this._si]}if(c=e,b-=this._l1,e=this._si,b>this._s2&&e<l.length-1){for(j=l.length-1;j>e&&(this._s2=l[++e])<=b;);this._s1=l[e-1],this._si=e}else if(b<this._s1&&e>0){for(;e>0&&(this._s1=l[--e])>=b;);0===e&&b<this._s1?this._s1=0:e++,this._s2=l[e],this._si=e}h=(e+(b-this._s1)/(this._s2-this._s1))*this._prec}else c=0>b?0:b>=1?m-1:m*b>>0,h=(b-c*(1/m))*m;for(d=1-h,e=this._props.length;--e>-1;)f=this._props[e],g=this._beziers[f][c],i=(h*h*g.da+3*d*(h*g.ca+d*g.ba))*h+g.a,this._round[f]&&(i=Math.round(i)),n[f]?o[f](i):o[f]=i;if(this._autoRotate){var q,r,s,t,u,v,w,x=this._autoRotate;for(e=x.length;--e>-1;)f=x[e][2],v=x[e][3]||0,w=x[e][4]===!0?1:a,g=this._beziers[x[e][0]],q=this._beziers[x[e][1]],g&&q&&(g=g[c],q=q[c],r=g.a+(g.b-g.a)*h,t=g.b+(g.c-g.b)*h,r+=(t-r)*h,t+=(g.c+(g.d-g.c)*h-t)*h,s=q.a+(q.b-q.a)*h,u=q.b+(q.c-q.b)*h,s+=(u-s)*h,u+=(q.c+(q.d-q.c)*h-u)*h,i=p?Math.atan2(u-s,t-r)*w+v:this._initialRotations[e],n[f]?o[f](i):o[f]=i)}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function(a,b,f,g,h,i){b instanceof Array&&(b={values:b}),i=new p;var j,k,l,m=b.values,n=m.length-1,o=[],q={};if(0>n)return h;for(j=0;n>=j;j++)l=c(a,m[j],g,h,i,n!==j),o[j]=l.end;for(k in b)q[k]=b[k];return q.values=o,h=new e(a,"bezier",0,0,l.pt,2),h.data=l,h.plugin=i,h.setRatio=d,0===q.autoRotate&&(q.autoRotate=!0),!q.autoRotate||q.autoRotate instanceof Array||(j=q.autoRotate===!0?0:Number(q.autoRotate),q.autoRotate=null!=l.end.left?[["left","top","rotation",j,!1]]:null!=l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate&&(g._transform||g._enableTransforms(!1),l.autoRotate=g._target._gsTransform),i._onInitTween(l.proxy,q,g._tween),h}})}},q._roundProps=function(a,b){for(var c=this._overwriteProps,d=c.length;--d>-1;)(a[c[d]]||a.bezier||a.bezierThrough)&&(this._round[c[d]]=b)},q._kill=function(a){var b,c,d=this._props;for(b in this._beziers)if(b in a)for(delete this._beziers[b],delete this._func[b],c=d.length;--c>-1;)d[c]===b&&d.splice(c,1);return this._super._kill.call(this,a)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="1.18.2",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q=/(?:\d|\-\d|\.\d|\-\.\d)+/g,r=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,s=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,t=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,u=/(?:\d|\-|\+|=|#|\.)*/g,v=/opacity *= *([^)]*)/i,w=/opacity:([^;]*)/i,x=/alpha\(opacity *=.+?\)/i,y=/^(rgb|hsl)/,z=/([A-Z])/g,A=/-([a-z])/gi,B=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,C=function(a,b){return b.toUpperCase()},D=/(?:Left|Right|Width)/i,E=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,F=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,G=/,(?=[^\)]*(?:\(|$))/gi,H=Math.PI/180,I=180/Math.PI,J={},K=document,L=function(a){return K.createElementNS?K.createElementNS("http://www.w3.org/1999/xhtml",a):K.createElement(a)},M=L("div"),N=L("img"),O=g._internals={_specialProps:i},P=navigator.userAgent,Q=function(){var a=P.indexOf("Android"),b=L("a");return m=-1!==P.indexOf("Safari")&&-1===P.indexOf("Chrome")&&(-1===a||Number(P.substr(a+8,1))>3),o=m&&Number(P.substr(P.indexOf("Version/")+8,1))<6,n=-1!==P.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(P)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(P))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),R=function(a){return v.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},S=function(a){window.console&&console.log(a)},T="",U="",V=function(a,b){b=b||M;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(U=3===d?"ms":c[d],T="-"+U.toLowerCase()+"-",U+a):null},W=K.defaultView?K.defaultView.getComputedStyle:function(){},X=g.getStyle=function(a,b,c,d,e){var f;return Q||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||W(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(z,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):R(a)},Y=O.convertToPixels=function(a,c,d,e,f){if("px"===e||!e)return d;if("auto"===e||!d)return 0;var h,i,j,k=D.test(c),l=a,m=M.style,n=0>d;if(n&&(d=-d),"%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+X(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||K.body,i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(M),h=parseFloat(M[k?"offsetWidth":"offsetHeight"]),l.removeChild(M),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=Y(a,c,d,e,!0))}return n?-h:h},Z=O.calculateOffset=function(a,b,c){if("absolute"!==X(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=X(a,"margin"+d,c);return a["offset"+d]-(Y(a,b,parseFloat(e),e.replace(u,""))||0)},$=function(a,b){var c,d,e,f={};if(b=b||W(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||za===e)&&(f[e.replace(A,C)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||ya===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(A,C)]=b[c]);return Q||(f.opacity=R(a)),d=La(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Ba&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},_=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(t,"")?f:0:Z(a,g),void 0!==j[g]&&(h=new oa(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},aa={width:["Left","Right"],height:["Top","Bottom"]},ba=["marginLeft","marginRight","marginTop","marginBottom"],ca=function(a,b,c){var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=aa[b],f=e.length;for(c=c||W(a,null);--f>-1;)d-=parseFloat(X(a,"padding"+e[f],c,!0))||0,d-=parseFloat(X(a,"border"+e[f]+"Width",c,!0))||0;return d},da=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c=a.split(" "),d=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":c[0],e=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":c[1];return null==e?e="center"===d?"50%":"0":"center"===e&&(e="50%"),("center"===d||isNaN(parseFloat(d))&&-1===(d+"").indexOf("="))&&(d="50%"),a=d+" "+e+(c.length>2?" "+c[2]:""),b&&(b.oxp=-1!==d.indexOf("%"),b.oyp=-1!==e.indexOf("%"),b.oxr="="===d.charAt(1),b.oyr="="===e.charAt(1),b.ox=parseFloat(d.replace(t,"")),b.oy=parseFloat(e.replace(t,"")),b.v=a),b||a},ea=function(a,b){return"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)},fa=function(a,b){return null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)},ga=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:I)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},ha={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ia=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},ja=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),ha[a])c=ha[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(q),b){if(-1!==a.indexOf("="))return a.match(r)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(a[3])),c[0]=ia(g+1/3,d,e),c[1]=ia(g,d,e),c[2]=ia(g-1/3,d,e);else c=a.match(q)||ha.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=ha.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},ka=function(a,b){var c,d,e,f=a.match(la)||[],g=0,h=f.length?"":a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=ja(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h},la="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in ha)la+="|"+j+"\\b";la=new RegExp(la+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+a[1];la.lastIndex=0,la.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=ka(a[0],b),a[1]=ka(a[1],b))},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var ma=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(la)||[""])[0]:"",g=a.split(f).join("").match(s)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(q,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&G.test(a)){for(o=a.replace(G,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(la)||[f])[0],m=a.split(b).join("").match(s)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&G.test(a)){for(f=a.replace(G,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(s)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},na=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},oa=(O._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=Math.round(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),pa=(O._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=J;for(c._transform=null,J=b,d=k=c.parse(a,b,d,e),J=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new oa(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new oa(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},O.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof pa||f.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),qa=function(a,b,c,d,e,f){var g=new pa(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},ra=g.parseComplex=function(a,b,c,d,e,f,g,h,i,j){c=c||f||"",g=new pa(a,b,0,0,g,j?2:1,null,!1,h,c,d),d+="";var l,m,n,o,p,s,t,u,v,w,x,y,z,A=c.split(", ").join(",").split(" "),B=d.split(", ").join(",").split(" "),C=A.length,D=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(A=A.join(" ").replace(G,", ").split(" "),B=B.join(" ").replace(G,", ").split(" "),C=A.length),C!==B.length&&(A=(f||"").split(" "),C=A.length),g.plugin=i,g.setRatio=j,la.lastIndex=0,l=0;C>l;l++)if(o=A[l],p=B[l],u=parseFloat(o),u||0===u)g.appendXtra("",u,ea(p,u),p.replace(r,""),D&&-1!==p.indexOf("px"),!0);else if(e&&la.test(o))y=","===p.charAt(p.length-1)?"),":")",z=-1!==p.indexOf("hsl")&&Q,o=ja(o,z),p=ja(p,z),v=o.length+p.length>6,v&&!Q&&0===p[3]?(g["xs"+g.l]+=g.l?" transparent":"transparent",g.e=g.e.split(B[l]).join("transparent")):(Q||(v=!1),z?g.appendXtra(v?"hsla(":"hsl(",o[0],ea(p[0],o[0]),",",!1,!0).appendXtra("",o[1],ea(p[1],o[1]),"%,",!1).appendXtra("",o[2],ea(p[2],o[2]),v?"%,":"%"+y,!1):g.appendXtra(v?"rgba(":"rgb(",o[0],p[0]-o[0],",",!0,!0).appendXtra("",o[1],p[1]-o[1],",",!0).appendXtra("",o[2],p[2]-o[2],v?",":y,!0),v&&(o=o.length<4?1:o[3],g.appendXtra("",o,(p.length<4?1:p[3])-o,y,!1))),la.lastIndex=0;else if(s=o.match(q)){if(t=p.match(r),!t||t.length!==s.length)return g;for(n=0,m=0;m<s.length;m++)x=s[m],w=o.indexOf(x,n),g.appendXtra(o.substr(n,w-n),Number(x),ea(t[m],x),"",D&&"px"===o.substr(w+x.length,2),0===m),n=w+x.length;g["xs"+g.l]+=o.substr(n)}else g["xs"+g.l]+=g.l?" "+p:p;if(-1!==d.indexOf("=")&&g.data){for(y=g.xs0+g.data.s,l=1;l<g.l;l++)y+=g["xs"+l]+g.data["xn"+l];g.e=y+g["xs"+l]}return g.l||(g.type=-1,g.xs0=g.e),g.xfirst||g},sa=9;for(j=pa.prototype,j.l=j.pr=0;--sa>0;)j["xn"+sa]=0,j["xs"+sa]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&h?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new pa(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var ta=function(a,b){b=b||{},this.p=b.prefix?V(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||ma(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},ua=O._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new ta(f[d],b)},va=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";ua(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(S("Error: "+b+" js file not loaded."),f)}})}};j=ta.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(G.test(c)||G.test(b)?(h=b.replace(G,"|").split("|"),i=c.replace(G,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return ra(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(X(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){ua(a,{parser:function(a,d,e,f,g,h,i){var j=new pa(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=m||n;var wa,xa="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),ya=V("transform"),za=T+"transform",Aa=V("transformOrigin"),Ba=null!==V("perspective"),Ca=O.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Ba?g.defaultForce3D||"auto":!1},Da=window.SVGElement,Ea=function(a,b,c){var d,e=K.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Fa=K.documentElement,Ga=function(){var a,b,c,d=p||/Android/i.test(P)&&!window.chrome;return K.createElementNS&&!d&&(a=Ea("svg",Fa),b=Ea("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Aa]="50% 50%",b.style[ya]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Ba),Fa.removeChild(a)),d}(),Ha=function(a,b,c,d,e){var f,h,i,j,k,l,m,n,o,p,q,r,s,t,u=a._gsTransform,v=Ka(a,!0);u&&(s=u.xOrigin,t=u.yOrigin),(!d||(f=d.split(" ")).length<2)&&(m=a.getBBox(),b=da(b).split(" "),f=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*m.width:parseFloat(b[0]))+m.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*m.height:parseFloat(b[1]))+m.y]),c.xOrigin=j=parseFloat(f[0]),c.yOrigin=k=parseFloat(f[1]),d&&v!==Ja&&(l=v[0],m=v[1],n=v[2],o=v[3],p=v[4],q=v[5],r=l*o-m*n,h=j*(o/r)+k*(-n/r)+(n*q-o*p)/r,i=j*(-m/r)+k*(l/r)-(l*q-m*p)/r,j=c.xOrigin=f[0]=h,k=c.yOrigin=f[1]=i),u&&(e||e!==!1&&g.defaultSmoothOrigin!==!1?(h=j-s,i=k-t,u.xOffset+=h*v[0]+i*v[2]-h,u.yOffset+=h*v[1]+i*v[3]-i):u.xOffset=u.yOffset=0),a.setAttribute("data-svg-origin",f.join(" "))},Ia=function(a){return!!(Da&&"function"==typeof a.getBBox&&a.getCTM&&(!a.parentNode||a.parentNode.getBBox&&a.parentNode.getCTM))},Ja=[1,0,0,1,0,0],Ka=function(a,b){var c,d,e,f,g,h=a._gsTransform||new Ca,i=1e5;if(ya?d=X(a,za,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(E),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),h.x||0,h.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,(h.svg||a.getBBox&&Ia(a))&&(c&&-1!==(a.style[ya]+"").indexOf("matrix")&&(d=a.style[ya],c=0),e=a.getAttribute("transform"),c&&e&&(-1!==e.indexOf("matrix")?(d=e,c=0):-1!==e.indexOf("translate")&&(d="matrix(1,0,0,1,"+e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",c=0))),c)return Ja;for(e=(d||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],sa=e.length;--sa>-1;)f=Number(e[sa]),e[sa]=(g=f-(f|=0))?(g*i+(0>g?-.5:.5)|0)/i+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},La=O.getTransform=function(a,c,d,f){if(a._gsTransform&&d&&!f)return a._gsTransform;var h,i,j,k,l,m,n=d?a._gsTransform||new Ca:new Ca,o=n.scaleX<0,p=2e-5,q=1e5,r=Ba?parseFloat(X(a,Aa,c,!1,"0 0 0").split(" ")[2])||n.zOrigin||0:0,s=parseFloat(g.defaultTransformPerspective)||0;if(n.svg=!(!a.getBBox||!Ia(a)),n.svg&&(Ha(a,X(a,Aa,e,!1,"50% 50%")+"",n,a.getAttribute("data-svg-origin")),wa=g.useSVGTransformAttr||Ga),h=Ka(a),h!==Ja){if(16===h.length){var t,u,v,w,x,y=h[0],z=h[1],A=h[2],B=h[3],C=h[4],D=h[5],E=h[6],F=h[7],G=h[8],H=h[9],J=h[10],K=h[12],L=h[13],M=h[14],N=h[11],O=Math.atan2(E,J);n.zOrigin&&(M=-n.zOrigin,K=G*M-h[12],L=H*M-h[13],M=J*M+n.zOrigin-h[14]),n.rotationX=O*I,O&&(w=Math.cos(-O),x=Math.sin(-O),t=C*w+G*x,u=D*w+H*x,v=E*w+J*x,G=C*-x+G*w,H=D*-x+H*w,J=E*-x+J*w,N=F*-x+N*w,C=t,D=u,E=v),O=Math.atan2(-A,J),n.rotationY=O*I,O&&(w=Math.cos(-O),x=Math.sin(-O),t=y*w-G*x,u=z*w-H*x,v=A*w-J*x,H=z*x+H*w,J=A*x+J*w,N=B*x+N*w,y=t,z=u,A=v),O=Math.atan2(z,y),n.rotation=O*I,O&&(w=Math.cos(-O),x=Math.sin(-O),y=y*w+C*x,u=z*w+D*x,D=z*-x+D*w,E=A*-x+E*w,z=u),n.rotationX&&Math.abs(n.rotationX)+Math.abs(n.rotation)>359.9&&(n.rotationX=n.rotation=0,n.rotationY=180-n.rotationY),n.scaleX=(Math.sqrt(y*y+z*z)*q+.5|0)/q,n.scaleY=(Math.sqrt(D*D+H*H)*q+.5|0)/q,n.scaleZ=(Math.sqrt(E*E+J*J)*q+.5|0)/q,n.skewX=0,n.perspective=N?1/(0>N?-N:N):0,n.x=K,n.y=L,n.z=M,n.svg&&(n.x-=n.xOrigin-(n.xOrigin*y-n.yOrigin*C),n.y-=n.yOrigin-(n.yOrigin*z-n.xOrigin*D))}else if((!Ba||f||!h.length||n.x!==h[4]||n.y!==h[5]||!n.rotationX&&!n.rotationY)&&(void 0===n.x||"none"!==X(a,"display",c))){var P=h.length>=6,Q=P?h[0]:1,R=h[1]||0,S=h[2]||0,T=P?h[3]:1;n.x=h[4]||0,n.y=h[5]||0,j=Math.sqrt(Q*Q+R*R),k=Math.sqrt(T*T+S*S),l=Q||R?Math.atan2(R,Q)*I:n.rotation||0,m=S||T?Math.atan2(S,T)*I+l:n.skewX||0,Math.abs(m)>90&&Math.abs(m)<270&&(o?(j*=-1,m+=0>=l?180:-180,l+=0>=l?180:-180):(k*=-1,m+=0>=m?180:-180)),n.scaleX=j,n.scaleY=k,n.rotation=l,n.skewX=m,Ba&&(n.rotationX=n.rotationY=n.z=0,n.perspective=s,n.scaleZ=1),n.svg&&(n.x-=n.xOrigin-(n.xOrigin*Q+n.yOrigin*S),n.y-=n.yOrigin-(n.xOrigin*R+n.yOrigin*T))}n.zOrigin=r;for(i in n)n[i]<p&&n[i]>-p&&(n[i]=0)}return d&&(a._gsTransform=n,n.svg&&(wa&&a.style[ya]?b.delayedCall(.001,function(){Pa(a.style,ya)}):!wa&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),n},Ma=function(a){var b,c,d=this.data,e=-d.rotation*H,f=e+d.skewX*H,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,w=d.x+q*d.xPercent/100,x=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,w+=n-(n*h+o*i),x+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+w)+", Dy="+(o-(n*j+o*k)+x)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(F,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||v.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+w),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+x),sa=0;4>sa;sa++)z=ba[sa],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):Y(this.t,z,parseFloat(y),y.replace(u,""))||0,A=c!==d[z]?2>sa?-d.ieOffsetX:-d.ieOffsetY:2>sa?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===sa||2===sa?1:B)))+"px"}}},Na=O.set3DTransformRatio=O.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,I=z.x,J=z.y,K=z.z,L=z.svg,M=z.perspective,N=z.force3D;if(((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!K&&!M&&!D&&!C&&1===G||wa&&L||!Ba)return void(B||z.skewX||L?(B*=H,x=z.skewX*H,y=1e5,b=Math.cos(B)*E,e=Math.sin(B)*E,c=Math.sin(B-x)*-F,f=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(s=Math.tan(x),s=Math.sqrt(1+s*s),c*=s,f*=s,z.skewY&&(b*=s,e*=s)),L&&(I+=z.xOrigin-(z.xOrigin*b+z.yOrigin*c)+z.xOffset,J+=z.yOrigin-(z.xOrigin*e+z.yOrigin*f)+z.yOffset,wa&&(z.xPercent||z.yPercent)&&(p=this.t.getBBox(),I+=.01*z.xPercent*p.width,J+=.01*z.yPercent*p.height),p=1e-6,p>I&&I>-p&&(I=0),p>J&&J>-p&&(J=0)),u=(b*y|0)/y+","+(e*y|0)/y+","+(c*y|0)/y+","+(f*y|0)/y+","+I+","+J+")",L&&wa?this.t.setAttribute("transform","matrix("+u):A[ya]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[ya]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+I+","+J+")");if(n&&(p=1e-4,p>E&&E>-p&&(E=G=2e-5),p>F&&F>-p&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||z.skewX)B*=H,q=b=Math.cos(B),r=e=Math.sin(B),z.skewX&&(B-=z.skewX*H,q=Math.cos(B),r=Math.sin(B),"simple"===z.skewType&&(s=Math.tan(z.skewX*H),s=Math.sqrt(1+s*s),q*=s,r*=s,z.skewY&&(b*=s,e*=s))),c=-r,f=q;else{if(!(D||C||1!==G||M||L))return void(A[ya]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+I+"px,"+J+"px,"+K+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));b=f=1,c=e=0}j=1,d=g=h=i=k=l=0,m=M?-1/M:0,o=z.zOrigin,p=1e-6,v=",",w="0",B=D*H,B&&(q=Math.cos(B),r=Math.sin(B),h=-r,k=m*-r,d=b*r,g=e*r,j=q,m*=q,b*=q,e*=q),B=C*H,B&&(q=Math.cos(B),r=Math.sin(B),s=c*q+d*r,t=f*q+g*r,i=j*r,l=m*r,d=c*-r+d*q,g=f*-r+g*q,j*=q,m*=q,c=s,f=t),1!==G&&(d*=G,g*=G,j*=G,m*=G),1!==F&&(c*=F,f*=F,i*=F,l*=F),1!==E&&(b*=E,e*=E,h*=E,k*=E),(o||L)&&(o&&(I+=d*-o,J+=g*-o,K+=j*-o+o),L&&(I+=z.xOrigin-(z.xOrigin*b+z.yOrigin*c)+z.xOffset,J+=z.yOrigin-(z.xOrigin*e+z.yOrigin*f)+z.yOffset),p>I&&I>-p&&(I=w),p>J&&J>-p&&(J=w),p>K&&K>-p&&(K=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(p>b&&b>-p?w:b)+v+(p>e&&e>-p?w:e)+v+(p>h&&h>-p?w:h),u+=v+(p>k&&k>-p?w:k)+v+(p>c&&c>-p?w:c)+v+(p>f&&f>-p?w:f),C||D||1!==G?(u+=v+(p>i&&i>-p?w:i)+v+(p>l&&l>-p?w:l)+v+(p>d&&d>-p?w:d),u+=v+(p>g&&g>-p?w:g)+v+(p>j&&j>-p?w:j)+v+(p>m&&m>-p?w:m)+v):u+=",0,0,0,0,1,0,",u+=I+v+J+v+K+v+(M?1+-K/M:1)+")",A[ya]=u};j=Ca.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,ua("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j,k,l,m,n,o,p,q,r,s,t=a._gsTransform,u=a.style,v=1e-6,w=xa.length,x=i,y={},z="transformOrigin";if(i.display?(m=X(a,"display"),u.display="block",j=La(a,e,!0,i.parseTransform),u.display=m):j=La(a,e,!0,i.parseTransform),d._transform=j,"string"==typeof x.transform&&ya)m=M.style,m[ya]=x.transform,m.display="block",m.position="absolute",K.body.appendChild(M),k=La(M,null,!1),K.body.removeChild(M),k.perspective||(k.perspective=j.perspective),null!=x.xPercent&&(k.xPercent=fa(x.xPercent,j.xPercent)),null!=x.yPercent&&(k.yPercent=fa(x.yPercent,j.yPercent));else if("object"==typeof x){if(k={scaleX:fa(null!=x.scaleX?x.scaleX:x.scale,j.scaleX),scaleY:fa(null!=x.scaleY?x.scaleY:x.scale,j.scaleY),scaleZ:fa(x.scaleZ,j.scaleZ),x:fa(x.x,j.x),y:fa(x.y,j.y),z:fa(x.z,j.z),xPercent:fa(x.xPercent,j.xPercent),yPercent:fa(x.yPercent,j.yPercent),perspective:fa(x.transformPerspective,j.perspective)},q=x.directionalRotation,null!=q)if("object"==typeof q)for(m in q)x[m]=q[m];else x.rotation=q;"string"==typeof x.x&&-1!==x.x.indexOf("%")&&(k.x=0,k.xPercent=fa(x.x,j.xPercent)),"string"==typeof x.y&&-1!==x.y.indexOf("%")&&(k.y=0,k.yPercent=fa(x.y,j.yPercent)),k.rotation=ga("rotation"in x?x.rotation:"shortRotation"in x?x.shortRotation+"_short":"rotationZ"in x?x.rotationZ:j.rotation,j.rotation,"rotation",y),Ba&&(k.rotationX=ga("rotationX"in x?x.rotationX:"shortRotationX"in x?x.shortRotationX+"_short":j.rotationX||0,j.rotationX,"rotationX",y),k.rotationY=ga("rotationY"in x?x.rotationY:"shortRotationY"in x?x.shortRotationY+"_short":j.rotationY||0,j.rotationY,"rotationY",y)),k.skewX=null==x.skewX?j.skewX:ga(x.skewX,j.skewX),k.skewY=null==x.skewY?j.skewY:ga(x.skewY,j.skewY),(l=k.skewY-j.skewY)&&(k.skewX+=l,k.rotation+=l)}for(Ba&&null!=x.force3D&&(j.force3D=x.force3D,p=!0),j.skewType=x.skewType||j.skewType||g.defaultSkewType,o=j.force3D||j.z||j.rotationX||j.rotationY||k.z||k.rotationX||k.rotationY||k.perspective,o||null==x.scale||(k.scaleZ=1);--w>-1;)c=xa[w],n=k[c]-j[c],(n>v||-v>n||null!=x[c]||null!=J[c])&&(p=!0,f=new pa(j,c,j[c],n,f),c in y&&(f.e=y[c]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return n=x.transformOrigin,j.svg&&(n||x.svgOrigin)&&(r=j.xOffset,s=j.yOffset,Ha(a,da(n),k,x.svgOrigin,x.smoothOrigin),f=qa(j,"xOrigin",(t?j:k).xOrigin,k.xOrigin,f,z),f=qa(j,"yOrigin",(t?j:k).yOrigin,k.yOrigin,f,z),(r!==j.xOffset||s!==j.yOffset)&&(f=qa(j,"xOffset",t?r:j.xOffset,j.xOffset,f,z),f=qa(j,"yOffset",t?s:j.yOffset,j.yOffset,f,z)),n=wa?null:"0px 0px"),(n||Ba&&o&&j.zOrigin)&&(ya?(p=!0,c=Aa,n=(n||X(a,c,e,!1,"50% 50%"))+"",f=new pa(u,c,0,0,f,-1,z),f.b=u[c],f.plugin=h,Ba?(m=j.zOrigin,n=n.split(" "),j.zOrigin=(n.length>2&&(0===m||"0px"!==n[2])?parseFloat(n[2]):m)||0,f.xs0=f.e=n[0]+" "+(n[1]||"50%")+" 0px",f=new pa(j,"zOrigin",0,0,f,-1,f.n),f.b=m,f.xs0=f.e=j.zOrigin):f.xs0=f.e=n):da(n+"",j)),p&&(d._transformType=j.svg&&wa||!o&&3!==this._transformType?2:3),f},prefix:!0}),ua("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ua("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=V(y[j])),m=l=X(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=Y(a,"borderLeft",o,t),w=Y(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=Y(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=ra(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:ma("0px 0px 0px 0px",!1,!0)}),ua("backgroundPosition",{
defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||W(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&(m=X(a,"backgroundImage").replace(B,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),N.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-N.width:a.offsetHeight-N.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:da}),ua("backgroundSize",{defaultValue:"0 0",formatter:da}),ua("perspective",{defaultValue:"0px",prefix:!0}),ua("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ua("transformStyle",{prefix:!0}),ua("backfaceVisibility",{prefix:!0}),ua("userSelect",{prefix:!0}),ua("margin",{parser:na("marginTop,marginRight,marginBottom,marginLeft")}),ua("padding",{parser:na("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ua("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(X(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),ua("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ua("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),ua("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){return this.parseComplex(a.style,this.format(X(a,"borderTopWidth",e,!1,"0px")+" "+X(a,"borderTopStyle",e,!1,"solid")+" "+X(a,"borderTopColor",e,!1,"#000")),this.format(b),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(la)||["#000"])[0]}}),ua("borderWidth",{parser:na("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ua("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new pa(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Oa=function(a){var b,c=this.t,d=c.filter||X(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!X(this.data,"filter")):(c.filter=d.replace(x,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(v,"opacity="+e))};ua("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(X(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===X(a,"visibility",e)&&0!==b&&(h=0),Q?f=new pa(i,"opacity",h,b-h,f):(f=new pa(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Oa),j&&(f=new pa(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Pa=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(z,"-$1").toLowerCase())):a.removeAttribute(b))},Qa=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Pa(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ua("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new pa(a,d,0,0,g,2),g.setRatio=Qa,g.pr=-11,c=!0,g.b=o,k=$(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("\\s*\\b"+b.substr(2)+"\\b"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=_(a,k,$(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Ra=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Aa:i[c].p),Pa(g,c);e&&(Pa(g,ya),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(ua("clearProps",{parser:function(a,b,d,e,f){return f=new pa(a,d,0,0,f,2),f.setRatio=Ra,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),sa=j.length;sa--;)va(j[sa]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h){if(!a.nodeType)return!1;this._target=a,this._tween=h,this._vars=b,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=W(a,""),f=this._overwriteProps;var j,n,p,q,r,s,t,u,v,x=a.style;if(l&&""===x.zIndex&&(j=X(a,"zIndex",e),("auto"===j||""===j)&&this._addLazySet(x,"zIndex",0)),"string"==typeof b&&(q=x.cssText,j=$(a,e),x.cssText=q+";"+b,j=_(a,j,$(a)).difs,!Q&&w.test(b)&&(j.opacity=parseFloat(RegExp.$1)),b=j,x.cssText=q),b.className?this._firstPT=n=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=n=this.parse(a,b,null),this._transformType){for(v=3===this._transformType,ya?m&&(l=!0,""===x.zIndex&&(t=X(a,"zIndex",e),("auto"===t||""===t)&&this._addLazySet(x,"zIndex",0)),o&&this._addLazySet(x,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(v?"visible":"hidden"))):x.zoom=1,p=n;p&&p._next;)p=p._next;u=new pa(a,"transform",0,0,null,2),this._linkCSSP(u,null,p),u.setRatio=ya?Na:Ma,u.data=this._transform||La(a,e,!0),u.tween=h,u.pr=-1,f.pop()}if(c){for(;n;){for(s=n._next,p=q;p&&p.pr>n.pr;)p=p._next;(n._prev=p?p._prev:r)?n._prev._next=n:q=n,(n._next=p)?p._prev=n:r=n,n=s}this._firstPT=q}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,q,r,s=a.style;for(g in b)n=b[g],h=i[g],h?c=h.parse(a,n,g,this,c,f,b):(m=X(a,g,e)+"",q="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||q&&y.test(n)?(q||(n=ja(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=ra(s,g,m,n,!0,"transparent",c,0,f)):!q||-1===n.indexOf(" ")&&-1===n.indexOf(",")?(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ca(a,g,e),o="px"):"left"===g||"top"===g?(j=Z(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),r=q&&"="===n.charAt(1),r?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(u,"")):(l=parseFloat(n),p=q?n.replace(u,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(r?l+j:l)+p:b[g],o!==p&&""!==p&&(l||0===l)&&j&&(j=Y(a,g,j,o),"%"===p?(j/=Y(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=Y(a,g,1,p):"px"!==p&&(l=Y(a,g,l,p),p="px"),r&&(l||0===l)&&(n=l+j+p)),r&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==s[g]&&(n||n+""!="NaN"&&null!=n)?(c=new pa(s,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):S("invalid "+g+" tween value: "+b[g]):(c=new pa(s,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p)):c=ra(s,g,m,n,!0,null,c,0,f)),f&&c&&!c.plugin&&(c.plugin=f);return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=Math.round(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=Math.round(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||La(this._target,e,!0),this._transformType=this._transform.svg&&wa||!a&&3!==this._transformType?2:3};var Sa=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new pa(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Sa,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}return b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),a.prototype._kill.call(this,f)};var Ta=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Ta(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push($(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Ta(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Ta(a,k,m),i.render(c,!0,!0),Ta(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=_(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0),function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.5",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=function(a){for(;a;)a.f||a.blob||(a.r=1),a=a._next},c=a.prototype;c._onInitAllProps=function(){for(var a,c,d,e=this._tween,f=e.vars.roundProps.join?e.vars.roundProps:e.vars.roundProps.split(","),g=f.length,h={},i=e._propLookup.roundProps;--g>-1;)h[f[g]]=1;for(g=f.length;--g>-1;)for(a=f[g],c=e._firstPT;c;)d=c._next,c.pg?c.t._roundProps(h,!0):c.n===a&&(2===c.f&&c.t?b(c.t._firstPT):(this._add(c.t,a,c.s,c.c),d&&(d._prev=c._prev),c._prev?c._prev._next=d:e._firstPT===c&&(e._firstPT=d),c._next=c._prev=null,e._propLookup[a]=i)),c=d;return!1},c._add=function(a,b,c,d){this._addTween(a,b,c,c+d,b,!0),this._overwriteProps.push(b)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.5.0",init:function(a,b,c){var d;if("function"!=typeof a.setAttribute)return!1;for(d in b)this._addTween(a,"setAttribute",a.getAttribute(d)+"",b[d]+"",d,!1,d),this._overwriteProps.push(d);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.2.1",API:2,init:function(a,b,c){"object"!=typeof b&&(b={rotation:b}),this.finals={};var d,e,f,g,h,i,j=b.useRadians===!0?2*Math.PI:360,k=1e-6;for(d in b)"useRadians"!==d&&(i=(b[d]+"").split("_"),e=i[0],f=parseFloat("function"!=typeof a[d]?a[d]:a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]()),g=this.finals[d]="string"==typeof e&&"="===e.charAt(1)?f+parseInt(e.charAt(0)+"1",10)*Number(e.substr(2)):Number(e)||0,h=g-f,i.length&&(e=i.join("_"),-1!==e.indexOf("short")&&(h%=j,h!==h%(j/2)&&(h=0>h?h+j:h-j)),-1!==e.indexOf("_cw")&&0>h?h=(h+9999999999*j)%j-(h/j|0)*j:-1!==e.indexOf("ccw")&&h>0&&(h=(h-9999999999*j)%j-(h/j|0)*j)),(h>k||-k>h)&&(this._addTween(a,d,f,f+h,d),this._overwriteProps.push(d)));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e=_gsScope.GreenSockGlobals||_gsScope,f=e.com.greensock,g=2*Math.PI,h=Math.PI/2,i=f._class,j=function(b,c){var d=i("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},k=a.register||function(){},l=function(a,b,c,d,e){var f=i("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return k(f,a),f},m=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},n=function(b,c){var d=i("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},o=l("Back",n("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),n("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),n("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),p=i("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),q=p.prototype=new a;return q.constructor=p,q.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},p.ease=new p(.7,.7),q.config=p.config=function(a,b,c){return new p(a,b,c)},b=i("easing.SteppedEase",function(a){a=a||1,this._p1=1/a,this._p2=a+1},!0),q=b.prototype=new a,q.constructor=b,q.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),(this._p2*a>>0)*this._p1},q.config=b.config=function(a){return new b(a)},c=i("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),n=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--n>-1;)c=o?Math.random():1/l*n,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:n%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new m(1,1,null),n=l;--n>-1;)g=j[n],h=new m(g.x,g.y,h);this._prev=new m(0,0,0!==h.t?h:h.next)},!0),q=c.prototype=new a,q.constructor=c,q.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},q.config=function(a){return new c(a)},c.ease=new c,l("Bounce",j("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),j("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),j("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),l("Circ",j("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),j("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),j("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),d=function(b,c,d){var e=i("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/g*(Math.asin(1/this._p1)||0),this._p2=g/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},l("Elastic",d("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),d("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),d("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),l("Expo",j("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),j("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),j("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),l("Sine",j("SineOut",function(a){return Math.sin(a*h)}),j("SineIn",function(a){return-Math.cos(a*h)+1}),j("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),i("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),k(e.SlowMo,"SlowMo","ease,"),k(c,"RoughEase","ease,"),k(b,"SteppedEase","ease,"),o},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a,b){"use strict";var c=a.GreenSockGlobals=a.GreenSockGlobals||a;if(!c.TweenLite){var d,e,f,g,h,i=function(a){var b,d=a.split("."),e=c;for(b=0;b<d.length;b++)e[d[b]]=e=e[d[b]]||{};return e},j=i("com.greensock"),k=1e-10,l=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},m=function(){},n=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),o={},p=function(d,e,f,g){this.sc=o[d]?o[d].sc:[],o[d]=this,this.gsClass=null,this.func=f;var h=[];this.check=function(j){for(var k,l,m,n,q,r=e.length,s=r;--r>-1;)(k=o[e[r]]||new p(e[r],[])).gsClass?(h[r]=k.gsClass,s--):j&&k.sc.push(this);if(0===s&&f)for(l=("com.greensock."+d).split("."),m=l.pop(),n=i(l.join("."))[m]=this.gsClass=f.apply(f,h),g&&(c[m]=n,q="undefined"!=typeof module&&module.exports,!q&&"function"==typeof define&&define.amd?define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").pop(),[],function(){return n}):d===b&&q&&(module.exports=n)),r=0;r<this.sc.length;r++)this.sc[r].check()},this.check(!0)},q=a._gsDefine=function(a,b,c,d){return new p(a,b,c,d)},r=j._class=function(a,b,c){return b=b||function(){},q(a,[],function(){return b},c),b};q.globals=c;var s=[0,0,1,1],t=[],u=r("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?s.concat(b):s},!0),v=u.map={},w=u.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),k=i.length,l=(c||"easeIn,easeOut,easeInOut").split(",");--k>-1;)for(f=i[k],e=d?r("easing."+f,null,!0):j.easing[f]||{},g=l.length;--g>-1;)h=l[g],v[f+"."+h]=v[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(f=u.prototype,f._calcEnd=!1,f.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},d=["Linear","Quad","Cubic","Quart","Quint,Strong"],e=d.length;--e>-1;)f=d[e]+",Power"+e,w(new u(null,null,1,e),f,"easeOut",!0),w(new u(null,null,2,e),f,"easeIn"+(0===e?",easeNone":"")),w(new u(null,null,3,e),f,"easeInOut");v.linear=j.easing.Linear.easeIn,v.swing=j.easing.Quad.easeInOut;var x=r("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});f=x.prototype,f.addEventListener=function(a,b,c,d,e){e=e||0;var f,i,j=this._listeners[a],k=0;for(null==j&&(this._listeners[a]=j=[]),i=j.length;--i>-1;)f=j[i],f.c===b&&f.s===c?j.splice(i,1):0===k&&f.pr<e&&(k=i+1);j.splice(k,0,{c:b,s:c,up:d,pr:e}),this!==g||h||g.wake()},f.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},f.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var y=a.requestAnimationFrame,z=a.cancelAnimationFrame,A=Date.now||function(){return(new Date).getTime()},B=A();for(d=["ms","moz","webkit","o"],e=d.length;--e>-1&&!y;)y=a[d[e]+"RequestAnimationFrame"],z=a[d[e]+"CancelAnimationFrame"]||a[d[e]+"CancelRequestAnimationFrame"];r("Ticker",function(a,b){var c,d,e,f,i,j=this,l=A(),n=b!==!1&&y?"auto":!1,o=500,p=33,q="tick",r=function(a){var b,g,h=A()-B;h>o&&(l+=h-p),B+=h,j.time=(B-l)/1e3,b=j.time-i,(!c||b>0||a===!0)&&(j.frame++,i+=b+(b>=f?.004:f-b),g=!0),a!==!0&&(e=d(r)),g&&j.dispatchEvent(q)};x.call(j),j.time=j.frame=0,j.tick=function(){r(!0)},j.lagSmoothing=function(a,b){o=a||1/k,p=Math.min(b,o,0)},j.sleep=function(){null!=e&&(n&&z?z(e):clearTimeout(e),d=m,e=null,j===g&&(h=!1))},j.wake=function(a){null!==e?j.sleep():a?l+=-B+(B=A()):j.frame>10&&(B=A()-o+5),d=0===c?m:n&&y?y:function(a){return setTimeout(a,1e3*(i-j.time)+1|0)},j===g&&(h=!0),r(2)},j.fps=function(a){return arguments.length?(c=a,f=1/(c||60),i=this.time+f,void j.wake()):c},j.useRAF=function(a){return arguments.length?(j.sleep(),n=a,void j.fps(c)):n},j.fps(a),setTimeout(function(){"auto"===n&&j.frame<5&&"hidden"!==document.visibilityState&&j.useRAF(!1)},1500)}),f=j.Ticker.prototype=new j.events.EventDispatcher,f.constructor=j.Ticker;var C=r("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,V){h||g.wake();var c=this.vars.useFrames?U:V;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});g=C.ticker=new j.Ticker,f=C.prototype,f._dirty=f._gc=f._initted=f._paused=!1,f._totalTime=f._time=0,f._rawPrevTime=-1,f._next=f._last=f._onUpdate=f._timeline=f.timeline=null,f._paused=!1;var D=function(){h&&A()-B>2e3&&g.wake(),setTimeout(D,2e3)};D(),f.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},f.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},f.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},f.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},f.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},f.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},f.render=function(a,b,c){},f.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},f.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime())>=c&&a<c+this.totalDuration()/this._timeScale},f._enabled=function(a,b){return h||g.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},f._kill=function(a,b){return this._enabled(!1,!1)},f.kill=function(a,b){return this._kill(a,b),this},f._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},f._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},f._callback=function(a){var b=this.vars;b[a].apply(b[a+"Scope"]||b.callbackScope||this,b[a+"Params"]||t)},f.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=n(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},f.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},f.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},f.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},f.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},f.totalTime=function(a,b,c){if(h||g.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(I.length&&X(),this.render(a,b,!1),I.length&&X())}return this},f.progress=f.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},f.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},f.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},f.timeScale=function(a){if(!arguments.length)return this._timeScale;if(a=a||k,this._timeline&&this._timeline.smoothChildTiming){var b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime();this._startTime=c-(c-this._startTime)*this._timeScale/a}return this._timeScale=a,this._uncache(!1)},f.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},f.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(h||a||g.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var E=r("core.SimpleTimeline",function(a){C.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});f=E.prototype=new C,f.constructor=E,f.kill()._gc=!1,f._first=f._last=f._recent=null,f._sortChildren=!1,f.add=f.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},f._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},f.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},f.rawTime=function(){return h||g.wake(),this._totalTime};var F=r("TweenLite",function(b,c,d){if(C.call(this,c,d),this.render=F.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:F.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?T[F.defaultOverwrite]:"number"==typeof i?i>>0:T[i],(h||b instanceof Array||b.push&&n(b))&&"number"!=typeof b[0])for(this._targets=g=l(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(l(f))):(this._siblings[e]=Y(f,this,!1),1===i&&this._siblings[e].length>1&&$(f,this,null,1,this._siblings[e])):(f=g[e--]=F.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=Y(b,this,!1),1===i&&this._siblings.length>1&&$(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-k,this.render(-this._delay))},!0),G=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},H=function(a,b){var c,d={};for(c in a)S[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!P[c]||P[c]&&P[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};f=F.prototype=new C,f.constructor=F,f.kill()._gc=!1,f.ratio=0,f._firstPT=f._targets=f._overwrittenProps=f._startAt=null,f._notifyPluginsOfEnabled=f._lazy=!1,F.version="1.18.2",F.defaultEase=f._ease=new u(null,null,1,1),F.defaultOverwrite="auto",F.ticker=g,F.autoSleep=120,F.lagSmoothing=function(a,b){g.lagSmoothing(a,b)},F.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(F.selector=c,c(b)):"undefined"==typeof document?b:document.querySelectorAll?document.querySelectorAll(b):document.getElementById("#"===b.charAt(0)?b.substr(1):b)};var I=[],J={},K=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,L=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?a?this.join(""):this.start:c.c*a+c.s,c.r?b=Math.round(b):d>b&&b>-d&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},M=function(a,b,c,d){var e,f,g,h,i,j,k,l=[a,b],m=0,n="",o=0;for(l.start=a,c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(K)||[],f=b.match(K)||[],d&&(d._next=null,d.blob=1,l._firstPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,r:o&&4>o}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=L,l},N=function(a,b,c,d,e,f,g,h){var i,j,k="get"===c?a[b]:c,l=typeof a[b],m="string"==typeof d&&"="===d.charAt(1),n={t:a,p:b,s:k,f:"function"===l,pg:0,n:e||b,r:f,pr:0,c:m?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-k||0};return"number"!==l&&("function"===l&&"get"===c&&(j=b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),n.s=k=g?a[j](g):a[j]()),"string"==typeof k&&(g||isNaN(k))?(n.fp=g,i=M(k,d,h||F.defaultStringFilter,n),n={t:i,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0}):m||(n.s=parseFloat(k),n.c=parseFloat(d)-n.s||0)),n.c?((n._next=this._firstPT)&&(n._next._prev=n),this._firstPT=n,n):void 0},O=F._internals={isArray:n,isSelector:G,lazyTweens:I,blobDif:M},P=F._plugins={},Q=O.tweenLookup={},R=0,S=O.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1},T={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},U=C._rootFramesTimeline=new E,V=C._rootTimeline=new E,W=30,X=O.lazyRender=function(){
var a,b=I.length;for(J={};--b>-1;)a=I[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);I.length=0};V._startTime=g.time,U._startTime=g.frame,V._active=U._active=!0,setTimeout(X,1),C._updateRoot=F.render=function(){var a,b,c;if(I.length&&X(),V.render((g.time-V._startTime)*V._timeScale,!1,!1),U.render((g.frame-U._startTime)*U._timeScale,!1,!1),I.length&&X(),g.frame>=W){W=g.frame+(parseInt(F.autoSleep,10)||120);for(c in Q){for(b=Q[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete Q[c]}if(c=V._first,(!c||c._paused)&&F.autoSleep&&!U._first&&1===g._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||g.sleep()}}},g.addEventListener("tick",C._updateRoot);var Y=function(a,b,c){var d,e,f=a._gsTweenID;if(Q[f||(a._gsTweenID=f="t"+R++)]||(Q[f]={target:a,tweens:[]}),b&&(d=Q[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return Q[f].tweens},Z=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=F.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},$=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,l=b._startTime+k,m=[],n=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||_(b,0,o),0===_(h,j,o)&&(m[n++]=h)):h._startTime<=l&&h._startTime+h.totalDuration()/h._timeScale>l&&((o||!h._initted)&&l-h._startTime<=2e-10||(m[n++]=h)));for(f=n;--f>-1;)if(h=m[f],2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted){if(2!==d&&!Z(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},_=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*k>f-b?k:(f+=a.totalDuration()/a._timeScale/e)>b+k?0:f-b-k};f._init=function(){var a,b,c,d,e,f=this.vars,g=this._overwrittenProps,h=this._duration,i=!!f.immediateRender,j=f.ease;if(f.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in f.startAt)e[d]=f.startAt[d];if(e.overwrite=!1,e.immediateRender=!0,e.lazy=i&&f.lazy!==!1,e.startAt=e.delay=null,this._startAt=F.to(this.target,0,e),i)if(this._time>0)this._startAt=null;else if(0!==h)return}else if(f.runBackwards&&0!==h)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(i=!1),c={};for(d in f)S[d]&&"autoCSS"!==d||(c[d]=f[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=i&&f.lazy!==!1,c.immediateRender=i,this._startAt=F.to(this.target,0,c),i){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=j=j?j instanceof u?j:"function"==typeof j?new u(j,f.easeParams):v[j]||F.defaultEase:F.defaultEase,f.easeParams instanceof Array&&j.config&&(this._ease=j.config.apply(j,f.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(a=this._targets.length;--a>-1;)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],g?g[a]:null)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,g);if(b&&F._onPluginEvent("_onInitAllProps",this),g&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),f.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=f.onUpdate,this._initted=!0},f._initProps=function(b,c,d,e){var f,g,h,i,j,k;if(null==b)return!1;J[b._gsTweenID]&&X(),this.vars.css||b.style&&b!==a&&b.nodeType&&P.css&&this.vars.autoCSS!==!1&&H(this.vars,b);for(f in this.vars)if(k=this.vars[f],S[f])k&&(k instanceof Array||k.push&&n(k))&&-1!==k.join("").indexOf("{self}")&&(this.vars[f]=k=this._swapSelfInParams(k,this));else if(P[f]&&(i=new P[f])._onInitTween(b,this.vars[f],this)){for(this._firstPT=j={_next:this._firstPT,t:i,p:"setRatio",s:0,c:1,f:1,n:f,pg:1,pr:i._priority},g=i._overwriteProps.length;--g>-1;)c[i._overwriteProps[g]]=this._firstPT;(i._priority||i._onInitAllProps)&&(h=!0),(i._onDisable||i._onEnable)&&(this._notifyPluginsOfEnabled=!0),j._next&&(j._next._prev=j)}else c[f]=N.call(this,b,f,"get",k,f,0,null,this.vars.stringFilter);return e&&this._kill(e,b)?this._initProps(b,c,d,e):this._overwrite>1&&this._firstPT&&d.length>1&&$(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(J[b._gsTweenID]=!0),h)},f.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===k&&"isPause"!==this.data)&&j!==a&&(c=!0,j>k&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:k);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==k||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:k)),this._initted||(c=!0);else if(this._totalTime=this._time=a,this._easeType){var l=a/i,m=this._easeType,n=this._easePower;(1===m||3===m&&l>=.5)&&(l=1-l),3===m&&(l*=2),1===n?l*=l:2===n?l*=l*l:3===n?l*=l*l*l:4===n&&(l*=l*l*l*l),1===m?this.ratio=1-l:2===m?this.ratio=l:.5>a/i?this.ratio=l/2:this.ratio=1-l/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,I.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,b,c),b||(this._time!==h||d)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===k&&g!==k&&(this._rawPrevTime=0))}},f._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:F.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline;if((n(b)||G(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(F.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!Z(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return i},f.invalidate=function(){return this._notifyPluginsOfEnabled&&F._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],C.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-k,this.render(-this._delay)),this},f._enabled=function(a,b){if(h||g.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=Y(d[c],this,!0);else this._siblings=Y(this.target,this,!0)}return C.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?F._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},F.to=function(a,b,c){return new F(a,b,c)},F.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new F(a,b,c)},F.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new F(a,b,d)},F.delayedCall=function(a,b,c,d,e){return new F(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},F.set=function(a,b){return new F(a,0,b)},F.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:F.selector(a)||a;var c,d,e,f;if((n(a)||G(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(F.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else for(d=Y(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d},F.killTweensOf=F.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=F.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var aa=r("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=aa.prototype},!0);if(f=aa.prototype,aa.version="1.18.0",aa.API=2,f._firstPT=null,f._addTween=N,f.setRatio=L,f._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},f._roundProps=function(a,b){for(var c=this._firstPT;c;)(a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")])&&(c.r=b),c=c._next},F._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},aa.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===aa.API&&(P[(new a[b])._propName]=a[b]);return!0},q.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},g=r("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){aa.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new aa(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,aa.activate([g]),g},d=a._gsQueue){for(e=0;e<d.length;e++)d[e]();for(f in o)o[f].func||a.console.log("GSAP encountered missing dependency: com.greensock."+f)}h=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");/*!
 * VERSION: 1.18.2
 * DATE: 2015-12-22
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
!function(a,b){"use strict";var c=a.GreenSockGlobals=a.GreenSockGlobals||a;if(!c.TweenLite){var d,e,f,g,h,i=function(a){var b,d=a.split("."),e=c;for(b=0;b<d.length;b++)e[d[b]]=e=e[d[b]]||{};return e},j=i("com.greensock"),k=1e-10,l=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},m=function(){},n=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),o={},p=function(d,e,f,g){this.sc=o[d]?o[d].sc:[],o[d]=this,this.gsClass=null,this.func=f;var h=[];this.check=function(j){for(var k,l,m,n,q,r=e.length,s=r;--r>-1;)(k=o[e[r]]||new p(e[r],[])).gsClass?(h[r]=k.gsClass,s--):j&&k.sc.push(this);if(0===s&&f)for(l=("com.greensock."+d).split("."),m=l.pop(),n=i(l.join("."))[m]=this.gsClass=f.apply(f,h),g&&(c[m]=n,q="undefined"!=typeof module&&module.exports,!q&&"function"==typeof define&&define.amd?define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").pop(),[],function(){return n}):d===b&&q&&(module.exports=n)),r=0;r<this.sc.length;r++)this.sc[r].check()},this.check(!0)},q=a._gsDefine=function(a,b,c,d){return new p(a,b,c,d)},r=j._class=function(a,b,c){return b=b||function(){},q(a,[],function(){return b},c),b};q.globals=c;var s=[0,0,1,1],t=[],u=r("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?s.concat(b):s},!0),v=u.map={},w=u.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),k=i.length,l=(c||"easeIn,easeOut,easeInOut").split(",");--k>-1;)for(f=i[k],e=d?r("easing."+f,null,!0):j.easing[f]||{},g=l.length;--g>-1;)h=l[g],v[f+"."+h]=v[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(f=u.prototype,f._calcEnd=!1,f.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},d=["Linear","Quad","Cubic","Quart","Quint,Strong"],e=d.length;--e>-1;)f=d[e]+",Power"+e,w(new u(null,null,1,e),f,"easeOut",!0),w(new u(null,null,2,e),f,"easeIn"+(0===e?",easeNone":"")),w(new u(null,null,3,e),f,"easeInOut");v.linear=j.easing.Linear.easeIn,v.swing=j.easing.Quad.easeInOut;var x=r("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});f=x.prototype,f.addEventListener=function(a,b,c,d,e){e=e||0;var f,i,j=this._listeners[a],k=0;for(null==j&&(this._listeners[a]=j=[]),i=j.length;--i>-1;)f=j[i],f.c===b&&f.s===c?j.splice(i,1):0===k&&f.pr<e&&(k=i+1);j.splice(k,0,{c:b,s:c,up:d,pr:e}),this!==g||h||g.wake()},f.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},f.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var y=a.requestAnimationFrame,z=a.cancelAnimationFrame,A=Date.now||function(){return(new Date).getTime()},B=A();for(d=["ms","moz","webkit","o"],e=d.length;--e>-1&&!y;)y=a[d[e]+"RequestAnimationFrame"],z=a[d[e]+"CancelAnimationFrame"]||a[d[e]+"CancelRequestAnimationFrame"];r("Ticker",function(a,b){var c,d,e,f,i,j=this,l=A(),n=b!==!1&&y?"auto":!1,o=500,p=33,q="tick",r=function(a){var b,g,h=A()-B;h>o&&(l+=h-p),B+=h,j.time=(B-l)/1e3,b=j.time-i,(!c||b>0||a===!0)&&(j.frame++,i+=b+(b>=f?.004:f-b),g=!0),a!==!0&&(e=d(r)),g&&j.dispatchEvent(q)};x.call(j),j.time=j.frame=0,j.tick=function(){r(!0)},j.lagSmoothing=function(a,b){o=a||1/k,p=Math.min(b,o,0)},j.sleep=function(){null!=e&&(n&&z?z(e):clearTimeout(e),d=m,e=null,j===g&&(h=!1))},j.wake=function(a){null!==e?j.sleep():a?l+=-B+(B=A()):j.frame>10&&(B=A()-o+5),d=0===c?m:n&&y?y:function(a){return setTimeout(a,1e3*(i-j.time)+1|0)},j===g&&(h=!0),r(2)},j.fps=function(a){return arguments.length?(c=a,f=1/(c||60),i=this.time+f,void j.wake()):c},j.useRAF=function(a){return arguments.length?(j.sleep(),n=a,void j.fps(c)):n},j.fps(a),setTimeout(function(){"auto"===n&&j.frame<5&&"hidden"!==document.visibilityState&&j.useRAF(!1)},1500)}),f=j.Ticker.prototype=new j.events.EventDispatcher,f.constructor=j.Ticker;var C=r("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,V){h||g.wake();var c=this.vars.useFrames?U:V;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});g=C.ticker=new j.Ticker,f=C.prototype,f._dirty=f._gc=f._initted=f._paused=!1,f._totalTime=f._time=0,f._rawPrevTime=-1,f._next=f._last=f._onUpdate=f._timeline=f.timeline=null,f._paused=!1;var D=function(){h&&A()-B>2e3&&g.wake(),setTimeout(D,2e3)};D(),f.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},f.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},f.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},f.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},f.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},f.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},f.render=function(a,b,c){},f.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},f.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime())>=c&&a<c+this.totalDuration()/this._timeScale},f._enabled=function(a,b){return h||g.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},f._kill=function(a,b){return this._enabled(!1,!1)},f.kill=function(a,b){return this._kill(a,b),this},f._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},f._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},f._callback=function(a){var b=this.vars;b[a].apply(b[a+"Scope"]||b.callbackScope||this,b[a+"Params"]||t)},f.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=n(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},f.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},f.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},f.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},f.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},f.totalTime=function(a,b,c){if(h||g.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(I.length&&X(),this.render(a,b,!1),I.length&&X())}return this},f.progress=f.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},f.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},f.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},f.timeScale=function(a){if(!arguments.length)return this._timeScale;if(a=a||k,this._timeline&&this._timeline.smoothChildTiming){var b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime();this._startTime=c-(c-this._startTime)*this._timeScale/a}return this._timeScale=a,this._uncache(!1)},f.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},f.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(h||a||g.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var E=r("core.SimpleTimeline",function(a){C.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});f=E.prototype=new C,f.constructor=E,f.kill()._gc=!1,f._first=f._last=f._recent=null,f._sortChildren=!1,f.add=f.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},f._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},f.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},f.rawTime=function(){return h||g.wake(),this._totalTime};var F=r("TweenLite",function(b,c,d){if(C.call(this,c,d),this.render=F.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:F.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?T[F.defaultOverwrite]:"number"==typeof i?i>>0:T[i],(h||b instanceof Array||b.push&&n(b))&&"number"!=typeof b[0])for(this._targets=g=l(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(l(f))):(this._siblings[e]=Y(f,this,!1),1===i&&this._siblings[e].length>1&&$(f,this,null,1,this._siblings[e])):(f=g[e--]=F.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=Y(b,this,!1),1===i&&this._siblings.length>1&&$(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-k,this.render(-this._delay))},!0),G=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},H=function(a,b){var c,d={};for(c in a)S[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!P[c]||P[c]&&P[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};f=F.prototype=new C,f.constructor=F,f.kill()._gc=!1,f.ratio=0,f._firstPT=f._targets=f._overwrittenProps=f._startAt=null,f._notifyPluginsOfEnabled=f._lazy=!1,F.version="1.18.2",F.defaultEase=f._ease=new u(null,null,1,1),F.defaultOverwrite="auto",F.ticker=g,F.autoSleep=120,F.lagSmoothing=function(a,b){g.lagSmoothing(a,b)},F.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(F.selector=c,c(b)):"undefined"==typeof document?b:document.querySelectorAll?document.querySelectorAll(b):document.getElementById("#"===b.charAt(0)?b.substr(1):b)};var I=[],J={},K=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,L=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?a?this.join(""):this.start:c.c*a+c.s,c.r?b=Math.round(b):d>b&&b>-d&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},M=function(a,b,c,d){var e,f,g,h,i,j,k,l=[a,b],m=0,n="",o=0;for(l.start=a,c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(K)||[],f=b.match(K)||[],d&&(d._next=null,d.blob=1,l._firstPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,r:o&&4>o}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=L,l},N=function(a,b,c,d,e,f,g,h){var i,j,k="get"===c?a[b]:c,l=typeof a[b],m="string"==typeof d&&"="===d.charAt(1),n={t:a,p:b,s:k,f:"function"===l,pg:0,n:e||b,r:f,pr:0,c:m?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-k||0};return"number"!==l&&("function"===l&&"get"===c&&(j=b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),n.s=k=g?a[j](g):a[j]()),"string"==typeof k&&(g||isNaN(k))?(n.fp=g,i=M(k,d,h||F.defaultStringFilter,n),n={t:i,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0}):m||(n.s=parseFloat(k),n.c=parseFloat(d)-n.s||0)),n.c?((n._next=this._firstPT)&&(n._next._prev=n),this._firstPT=n,n):void 0},O=F._internals={isArray:n,isSelector:G,lazyTweens:I,blobDif:M},P=F._plugins={},Q=O.tweenLookup={},R=0,S=O.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1},T={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},U=C._rootFramesTimeline=new E,V=C._rootTimeline=new E,W=30,X=O.lazyRender=function(){var a,b=I.length;for(J={};--b>-1;)a=I[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);I.length=0};V._startTime=g.time,U._startTime=g.frame,V._active=U._active=!0,setTimeout(X,1),C._updateRoot=F.render=function(){var a,b,c;if(I.length&&X(),V.render((g.time-V._startTime)*V._timeScale,!1,!1),U.render((g.frame-U._startTime)*U._timeScale,!1,!1),I.length&&X(),g.frame>=W){W=g.frame+(parseInt(F.autoSleep,10)||120);for(c in Q){for(b=Q[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete Q[c]}if(c=V._first,(!c||c._paused)&&F.autoSleep&&!U._first&&1===g._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||g.sleep()}}},g.addEventListener("tick",C._updateRoot);var Y=function(a,b,c){var d,e,f=a._gsTweenID;if(Q[f||(a._gsTweenID=f="t"+R++)]||(Q[f]={target:a,tweens:[]}),b&&(d=Q[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return Q[f].tweens},Z=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=F.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},$=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,l=b._startTime+k,m=[],n=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||_(b,0,o),0===_(h,j,o)&&(m[n++]=h)):h._startTime<=l&&h._startTime+h.totalDuration()/h._timeScale>l&&((o||!h._initted)&&l-h._startTime<=2e-10||(m[n++]=h)));for(f=n;--f>-1;)if(h=m[f],2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted){if(2!==d&&!Z(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},_=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*k>f-b?k:(f+=a.totalDuration()/a._timeScale/e)>b+k?0:f-b-k};f._init=function(){var a,b,c,d,e,f=this.vars,g=this._overwrittenProps,h=this._duration,i=!!f.immediateRender,j=f.ease;if(f.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in f.startAt)e[d]=f.startAt[d];if(e.overwrite=!1,e.immediateRender=!0,e.lazy=i&&f.lazy!==!1,e.startAt=e.delay=null,this._startAt=F.to(this.target,0,e),i)if(this._time>0)this._startAt=null;else if(0!==h)return}else if(f.runBackwards&&0!==h)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(i=!1),c={};for(d in f)S[d]&&"autoCSS"!==d||(c[d]=f[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=i&&f.lazy!==!1,c.immediateRender=i,this._startAt=F.to(this.target,0,c),i){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=j=j?j instanceof u?j:"function"==typeof j?new u(j,f.easeParams):v[j]||F.defaultEase:F.defaultEase,f.easeParams instanceof Array&&j.config&&(this._ease=j.config.apply(j,f.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(a=this._targets.length;--a>-1;)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],g?g[a]:null)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,g);if(b&&F._onPluginEvent("_onInitAllProps",this),g&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),f.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=f.onUpdate,this._initted=!0},f._initProps=function(b,c,d,e){var f,g,h,i,j,k;if(null==b)return!1;J[b._gsTweenID]&&X(),this.vars.css||b.style&&b!==a&&b.nodeType&&P.css&&this.vars.autoCSS!==!1&&H(this.vars,b);for(f in this.vars)if(k=this.vars[f],S[f])k&&(k instanceof Array||k.push&&n(k))&&-1!==k.join("").indexOf("{self}")&&(this.vars[f]=k=this._swapSelfInParams(k,this));else if(P[f]&&(i=new P[f])._onInitTween(b,this.vars[f],this)){for(this._firstPT=j={_next:this._firstPT,t:i,p:"setRatio",s:0,c:1,f:1,n:f,pg:1,pr:i._priority},g=i._overwriteProps.length;--g>-1;)c[i._overwriteProps[g]]=this._firstPT;(i._priority||i._onInitAllProps)&&(h=!0),(i._onDisable||i._onEnable)&&(this._notifyPluginsOfEnabled=!0),j._next&&(j._next._prev=j)}else c[f]=N.call(this,b,f,"get",k,f,0,null,this.vars.stringFilter);return e&&this._kill(e,b)?this._initProps(b,c,d,e):this._overwrite>1&&this._firstPT&&d.length>1&&$(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(J[b._gsTweenID]=!0),h)},f.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===k&&"isPause"!==this.data)&&j!==a&&(c=!0,j>k&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:k);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==k||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:k)),this._initted||(c=!0);else if(this._totalTime=this._time=a,this._easeType){var l=a/i,m=this._easeType,n=this._easePower;(1===m||3===m&&l>=.5)&&(l=1-l),3===m&&(l*=2),1===n?l*=l:2===n?l*=l*l:3===n?l*=l*l*l:4===n&&(l*=l*l*l*l),1===m?this.ratio=1-l:2===m?this.ratio=l:.5>a/i?this.ratio=l/2:this.ratio=1-l/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,I.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,b,c),b||(this._time!==h||d)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===k&&g!==k&&(this._rawPrevTime=0))}},f._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:F.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline;if((n(b)||G(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(F.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!Z(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return i},f.invalidate=function(){return this._notifyPluginsOfEnabled&&F._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],C.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-k,this.render(-this._delay)),this},f._enabled=function(a,b){if(h||g.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=Y(d[c],this,!0);else this._siblings=Y(this.target,this,!0)}return C.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?F._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},F.to=function(a,b,c){return new F(a,b,c)},F.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new F(a,b,c)},F.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new F(a,b,d)},F.delayedCall=function(a,b,c,d,e){return new F(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},F.set=function(a,b){return new F(a,0,b)},F.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:F.selector(a)||a;var c,d,e,f;if((n(a)||G(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(F.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else for(d=Y(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d},F.killTweensOf=F.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=F.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var aa=r("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=aa.prototype},!0);if(f=aa.prototype,aa.version="1.18.0",aa.API=2,f._firstPT=null,f._addTween=N,f.setRatio=L,f._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},f._roundProps=function(a,b){for(var c=this._firstPT;c;)(a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")])&&(c.r=b),c=c._next},F._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},aa.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===aa.API&&(P[(new a[b])._propName]=a[b]);return!0},q.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_roundProps",initAll:"_onInitAllProps"},g=r("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){aa.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new aa(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,aa.activate([g]),g},d=a._gsQueue){for(e=0;e<d.length;e++)d[e]();for(f in o)o[f].func||a.console.log("GSAP encountered missing dependency: com.greensock."+f)}h=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenLite");

/*!
 * VERSION: 1.18.2
 * DATE: 2015-12-22
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="1.18.2",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q=/(?:\d|\-\d|\.\d|\-\.\d)+/g,r=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,s=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,t=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,u=/(?:\d|\-|\+|=|#|\.)*/g,v=/opacity *= *([^)]*)/i,w=/opacity:([^;]*)/i,x=/alpha\(opacity *=.+?\)/i,y=/^(rgb|hsl)/,z=/([A-Z])/g,A=/-([a-z])/gi,B=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,C=function(a,b){return b.toUpperCase()},D=/(?:Left|Right|Width)/i,E=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,F=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,G=/,(?=[^\)]*(?:\(|$))/gi,H=Math.PI/180,I=180/Math.PI,J={},K=document,L=function(a){return K.createElementNS?K.createElementNS("http://www.w3.org/1999/xhtml",a):K.createElement(a)},M=L("div"),N=L("img"),O=g._internals={_specialProps:i},P=navigator.userAgent,Q=function(){var a=P.indexOf("Android"),b=L("a");return m=-1!==P.indexOf("Safari")&&-1===P.indexOf("Chrome")&&(-1===a||Number(P.substr(a+8,1))>3),o=m&&Number(P.substr(P.indexOf("Version/")+8,1))<6,n=-1!==P.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(P)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(P))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),R=function(a){return v.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},S=function(a){window.console&&console.log(a)},T="",U="",V=function(a,b){b=b||M;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(U=3===d?"ms":c[d],T="-"+U.toLowerCase()+"-",U+a):null},W=K.defaultView?K.defaultView.getComputedStyle:function(){},X=g.getStyle=function(a,b,c,d,e){var f;return Q||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||W(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(z,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):R(a)},Y=O.convertToPixels=function(a,c,d,e,f){if("px"===e||!e)return d;if("auto"===e||!d)return 0;var h,i,j,k=D.test(c),l=a,m=M.style,n=0>d;if(n&&(d=-d),"%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+X(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||K.body,i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(M),h=parseFloat(M[k?"offsetWidth":"offsetHeight"]),l.removeChild(M),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=Y(a,c,d,e,!0))}return n?-h:h},Z=O.calculateOffset=function(a,b,c){if("absolute"!==X(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=X(a,"margin"+d,c);return a["offset"+d]-(Y(a,b,parseFloat(e),e.replace(u,""))||0)},$=function(a,b){var c,d,e,f={};if(b=b||W(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||za===e)&&(f[e.replace(A,C)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||ya===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(A,C)]=b[c]);return Q||(f.opacity=R(a)),d=La(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Ba&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},_=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(t,"")?f:0:Z(a,g),void 0!==j[g]&&(h=new oa(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},aa={width:["Left","Right"],height:["Top","Bottom"]},ba=["marginLeft","marginRight","marginTop","marginBottom"],ca=function(a,b,c){var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=aa[b],f=e.length;for(c=c||W(a,null);--f>-1;)d-=parseFloat(X(a,"padding"+e[f],c,!0))||0,d-=parseFloat(X(a,"border"+e[f]+"Width",c,!0))||0;return d},da=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c=a.split(" "),d=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":c[0],e=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":c[1];return null==e?e="center"===d?"50%":"0":"center"===e&&(e="50%"),("center"===d||isNaN(parseFloat(d))&&-1===(d+"").indexOf("="))&&(d="50%"),a=d+" "+e+(c.length>2?" "+c[2]:""),b&&(b.oxp=-1!==d.indexOf("%"),b.oyp=-1!==e.indexOf("%"),b.oxr="="===d.charAt(1),b.oyr="="===e.charAt(1),b.ox=parseFloat(d.replace(t,"")),b.oy=parseFloat(e.replace(t,"")),b.v=a),b||a},ea=function(a,b){return"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)},fa=function(a,b){return null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)},ga=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:I)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},ha={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ia=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},ja=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),ha[a])c=ha[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(q),b){if(-1!==a.indexOf("="))return a.match(r)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(a[3])),c[0]=ia(g+1/3,d,e),c[1]=ia(g,d,e),c[2]=ia(g-1/3,d,e);else c=a.match(q)||ha.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=ha.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},ka=function(a,b){var c,d,e,f=a.match(la)||[],g=0,h=f.length?"":a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=ja(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h},la="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in ha)la+="|"+j+"\\b";la=new RegExp(la+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+a[1];la.lastIndex=0,la.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=ka(a[0],b),a[1]=ka(a[1],b))},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var ma=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(la)||[""])[0]:"",g=a.split(f).join("").match(s)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(q,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&G.test(a)){for(o=a.replace(G,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(la)||[f])[0],m=a.split(b).join("").match(s)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&G.test(a)){for(f=a.replace(G,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(s)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},na=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},oa=(O._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=Math.round(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),pa=(O._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=J;for(c._transform=null,J=b,d=k=c.parse(a,b,d,e),J=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new oa(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new oa(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},O.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof pa||f.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),qa=function(a,b,c,d,e,f){var g=new pa(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},ra=g.parseComplex=function(a,b,c,d,e,f,g,h,i,j){c=c||f||"",g=new pa(a,b,0,0,g,j?2:1,null,!1,h,c,d),d+="";var l,m,n,o,p,s,t,u,v,w,x,y,z,A=c.split(", ").join(",").split(" "),B=d.split(", ").join(",").split(" "),C=A.length,D=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(A=A.join(" ").replace(G,", ").split(" "),B=B.join(" ").replace(G,", ").split(" "),C=A.length),C!==B.length&&(A=(f||"").split(" "),C=A.length),g.plugin=i,g.setRatio=j,la.lastIndex=0,l=0;C>l;l++)if(o=A[l],p=B[l],u=parseFloat(o),u||0===u)g.appendXtra("",u,ea(p,u),p.replace(r,""),D&&-1!==p.indexOf("px"),!0);else if(e&&la.test(o))y=","===p.charAt(p.length-1)?"),":")",z=-1!==p.indexOf("hsl")&&Q,o=ja(o,z),p=ja(p,z),v=o.length+p.length>6,v&&!Q&&0===p[3]?(g["xs"+g.l]+=g.l?" transparent":"transparent",g.e=g.e.split(B[l]).join("transparent")):(Q||(v=!1),z?g.appendXtra(v?"hsla(":"hsl(",o[0],ea(p[0],o[0]),",",!1,!0).appendXtra("",o[1],ea(p[1],o[1]),"%,",!1).appendXtra("",o[2],ea(p[2],o[2]),v?"%,":"%"+y,!1):g.appendXtra(v?"rgba(":"rgb(",o[0],p[0]-o[0],",",!0,!0).appendXtra("",o[1],p[1]-o[1],",",!0).appendXtra("",o[2],p[2]-o[2],v?",":y,!0),v&&(o=o.length<4?1:o[3],g.appendXtra("",o,(p.length<4?1:p[3])-o,y,!1))),la.lastIndex=0;else if(s=o.match(q)){if(t=p.match(r),!t||t.length!==s.length)return g;for(n=0,m=0;m<s.length;m++)x=s[m],w=o.indexOf(x,n),g.appendXtra(o.substr(n,w-n),Number(x),ea(t[m],x),"",D&&"px"===o.substr(w+x.length,2),0===m),n=w+x.length;g["xs"+g.l]+=o.substr(n)}else g["xs"+g.l]+=g.l?" "+p:p;if(-1!==d.indexOf("=")&&g.data){for(y=g.xs0+g.data.s,l=1;l<g.l;l++)y+=g["xs"+l]+g.data["xn"+l];g.e=y+g["xs"+l]}return g.l||(g.type=-1,g.xs0=g.e),g.xfirst||g},sa=9;for(j=pa.prototype,j.l=j.pr=0;--sa>0;)j["xn"+sa]=0,j["xs"+sa]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&h?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new pa(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var ta=function(a,b){b=b||{},this.p=b.prefix?V(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||ma(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},ua=O._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new ta(f[d],b)},va=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";ua(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(S("Error: "+b+" js file not loaded."),f)}})}};j=ta.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(G.test(c)||G.test(b)?(h=b.replace(G,"|").split("|"),i=c.replace(G,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return ra(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(X(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){ua(a,{parser:function(a,d,e,f,g,h,i){var j=new pa(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=m||n;var wa,xa="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),ya=V("transform"),za=T+"transform",Aa=V("transformOrigin"),Ba=null!==V("perspective"),Ca=O.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Ba?g.defaultForce3D||"auto":!1},Da=window.SVGElement,Ea=function(a,b,c){var d,e=K.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Fa=K.documentElement,Ga=function(){var a,b,c,d=p||/Android/i.test(P)&&!window.chrome;return K.createElementNS&&!d&&(a=Ea("svg",Fa),b=Ea("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Aa]="50% 50%",b.style[ya]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Ba),Fa.removeChild(a)),d}(),Ha=function(a,b,c,d,e){var f,h,i,j,k,l,m,n,o,p,q,r,s,t,u=a._gsTransform,v=Ka(a,!0);u&&(s=u.xOrigin,t=u.yOrigin),(!d||(f=d.split(" ")).length<2)&&(m=a.getBBox(),b=da(b).split(" "),f=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*m.width:parseFloat(b[0]))+m.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*m.height:parseFloat(b[1]))+m.y]),c.xOrigin=j=parseFloat(f[0]),c.yOrigin=k=parseFloat(f[1]),d&&v!==Ja&&(l=v[0],m=v[1],n=v[2],o=v[3],p=v[4],q=v[5],r=l*o-m*n,h=j*(o/r)+k*(-n/r)+(n*q-o*p)/r,i=j*(-m/r)+k*(l/r)-(l*q-m*p)/r,j=c.xOrigin=f[0]=h,k=c.yOrigin=f[1]=i),u&&(e||e!==!1&&g.defaultSmoothOrigin!==!1?(h=j-s,i=k-t,u.xOffset+=h*v[0]+i*v[2]-h,u.yOffset+=h*v[1]+i*v[3]-i):u.xOffset=u.yOffset=0),a.setAttribute("data-svg-origin",f.join(" "))},Ia=function(a){return!!(Da&&"function"==typeof a.getBBox&&a.getCTM&&(!a.parentNode||a.parentNode.getBBox&&a.parentNode.getCTM))},Ja=[1,0,0,1,0,0],Ka=function(a,b){var c,d,e,f,g,h=a._gsTransform||new Ca,i=1e5;if(ya?d=X(a,za,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(E),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),h.x||0,h.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,(h.svg||a.getBBox&&Ia(a))&&(c&&-1!==(a.style[ya]+"").indexOf("matrix")&&(d=a.style[ya],c=0),e=a.getAttribute("transform"),c&&e&&(-1!==e.indexOf("matrix")?(d=e,c=0):-1!==e.indexOf("translate")&&(d="matrix(1,0,0,1,"+e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",c=0))),c)return Ja;for(e=(d||"").match(/(?:\-|\b)[\d\-\.e]+\b/gi)||[],sa=e.length;--sa>-1;)f=Number(e[sa]),e[sa]=(g=f-(f|=0))?(g*i+(0>g?-.5:.5)|0)/i+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},La=O.getTransform=function(a,c,d,f){if(a._gsTransform&&d&&!f)return a._gsTransform;var h,i,j,k,l,m,n=d?a._gsTransform||new Ca:new Ca,o=n.scaleX<0,p=2e-5,q=1e5,r=Ba?parseFloat(X(a,Aa,c,!1,"0 0 0").split(" ")[2])||n.zOrigin||0:0,s=parseFloat(g.defaultTransformPerspective)||0;if(n.svg=!(!a.getBBox||!Ia(a)),n.svg&&(Ha(a,X(a,Aa,e,!1,"50% 50%")+"",n,a.getAttribute("data-svg-origin")),wa=g.useSVGTransformAttr||Ga),h=Ka(a),h!==Ja){if(16===h.length){var t,u,v,w,x,y=h[0],z=h[1],A=h[2],B=h[3],C=h[4],D=h[5],E=h[6],F=h[7],G=h[8],H=h[9],J=h[10],K=h[12],L=h[13],M=h[14],N=h[11],O=Math.atan2(E,J);n.zOrigin&&(M=-n.zOrigin,K=G*M-h[12],L=H*M-h[13],M=J*M+n.zOrigin-h[14]),n.rotationX=O*I,O&&(w=Math.cos(-O),x=Math.sin(-O),t=C*w+G*x,u=D*w+H*x,v=E*w+J*x,G=C*-x+G*w,H=D*-x+H*w,J=E*-x+J*w,N=F*-x+N*w,C=t,D=u,E=v),O=Math.atan2(-A,J),n.rotationY=O*I,O&&(w=Math.cos(-O),x=Math.sin(-O),t=y*w-G*x,u=z*w-H*x,v=A*w-J*x,H=z*x+H*w,J=A*x+J*w,N=B*x+N*w,y=t,z=u,A=v),O=Math.atan2(z,y),n.rotation=O*I,O&&(w=Math.cos(-O),x=Math.sin(-O),y=y*w+C*x,u=z*w+D*x,D=z*-x+D*w,E=A*-x+E*w,z=u),n.rotationX&&Math.abs(n.rotationX)+Math.abs(n.rotation)>359.9&&(n.rotationX=n.rotation=0,n.rotationY=180-n.rotationY),n.scaleX=(Math.sqrt(y*y+z*z)*q+.5|0)/q,n.scaleY=(Math.sqrt(D*D+H*H)*q+.5|0)/q,n.scaleZ=(Math.sqrt(E*E+J*J)*q+.5|0)/q,n.skewX=0,n.perspective=N?1/(0>N?-N:N):0,n.x=K,n.y=L,n.z=M,n.svg&&(n.x-=n.xOrigin-(n.xOrigin*y-n.yOrigin*C),n.y-=n.yOrigin-(n.yOrigin*z-n.xOrigin*D))}else if((!Ba||f||!h.length||n.x!==h[4]||n.y!==h[5]||!n.rotationX&&!n.rotationY)&&(void 0===n.x||"none"!==X(a,"display",c))){var P=h.length>=6,Q=P?h[0]:1,R=h[1]||0,S=h[2]||0,T=P?h[3]:1;n.x=h[4]||0,n.y=h[5]||0,j=Math.sqrt(Q*Q+R*R),k=Math.sqrt(T*T+S*S),l=Q||R?Math.atan2(R,Q)*I:n.rotation||0,m=S||T?Math.atan2(S,T)*I+l:n.skewX||0,Math.abs(m)>90&&Math.abs(m)<270&&(o?(j*=-1,m+=0>=l?180:-180,l+=0>=l?180:-180):(k*=-1,m+=0>=m?180:-180)),n.scaleX=j,n.scaleY=k,n.rotation=l,n.skewX=m,Ba&&(n.rotationX=n.rotationY=n.z=0,n.perspective=s,n.scaleZ=1),n.svg&&(n.x-=n.xOrigin-(n.xOrigin*Q+n.yOrigin*S),n.y-=n.yOrigin-(n.xOrigin*R+n.yOrigin*T))}n.zOrigin=r;for(i in n)n[i]<p&&n[i]>-p&&(n[i]=0)}return d&&(a._gsTransform=n,n.svg&&(wa&&a.style[ya]?b.delayedCall(.001,function(){Pa(a.style,ya)}):!wa&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),n},Ma=function(a){var b,c,d=this.data,e=-d.rotation*H,f=e+d.skewX*H,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,w=d.x+q*d.xPercent/100,x=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,w+=n-(n*h+o*i),x+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+w)+", Dy="+(o-(n*j+o*k)+x)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(F,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||v.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+w),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+x),sa=0;4>sa;sa++)z=ba[sa],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):Y(this.t,z,parseFloat(y),y.replace(u,""))||0,A=c!==d[z]?2>sa?-d.ieOffsetX:-d.ieOffsetY:2>sa?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===sa||2===sa?1:B)))+"px"}}},Na=O.set3DTransformRatio=O.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,I=z.x,J=z.y,K=z.z,L=z.svg,M=z.perspective,N=z.force3D;if(((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!K&&!M&&!D&&!C&&1===G||wa&&L||!Ba)return void(B||z.skewX||L?(B*=H,x=z.skewX*H,y=1e5,b=Math.cos(B)*E,e=Math.sin(B)*E,c=Math.sin(B-x)*-F,f=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(s=Math.tan(x),s=Math.sqrt(1+s*s),c*=s,f*=s,z.skewY&&(b*=s,e*=s)),L&&(I+=z.xOrigin-(z.xOrigin*b+z.yOrigin*c)+z.xOffset,J+=z.yOrigin-(z.xOrigin*e+z.yOrigin*f)+z.yOffset,wa&&(z.xPercent||z.yPercent)&&(p=this.t.getBBox(),I+=.01*z.xPercent*p.width,J+=.01*z.yPercent*p.height),p=1e-6,p>I&&I>-p&&(I=0),p>J&&J>-p&&(J=0)),u=(b*y|0)/y+","+(e*y|0)/y+","+(c*y|0)/y+","+(f*y|0)/y+","+I+","+J+")",L&&wa?this.t.setAttribute("transform","matrix("+u):A[ya]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[ya]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+I+","+J+")");if(n&&(p=1e-4,p>E&&E>-p&&(E=G=2e-5),p>F&&F>-p&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||z.skewX)B*=H,q=b=Math.cos(B),r=e=Math.sin(B),z.skewX&&(B-=z.skewX*H,q=Math.cos(B),r=Math.sin(B),"simple"===z.skewType&&(s=Math.tan(z.skewX*H),s=Math.sqrt(1+s*s),q*=s,r*=s,z.skewY&&(b*=s,e*=s))),c=-r,f=q;else{if(!(D||C||1!==G||M||L))return void(A[ya]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+I+"px,"+J+"px,"+K+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));b=f=1,c=e=0}j=1,d=g=h=i=k=l=0,m=M?-1/M:0,o=z.zOrigin,p=1e-6,v=",",w="0",B=D*H,B&&(q=Math.cos(B),r=Math.sin(B),h=-r,k=m*-r,d=b*r,g=e*r,j=q,m*=q,b*=q,e*=q),B=C*H,B&&(q=Math.cos(B),r=Math.sin(B),s=c*q+d*r,t=f*q+g*r,i=j*r,l=m*r,d=c*-r+d*q,g=f*-r+g*q,j*=q,m*=q,c=s,f=t),1!==G&&(d*=G,g*=G,j*=G,m*=G),1!==F&&(c*=F,f*=F,i*=F,l*=F),1!==E&&(b*=E,e*=E,h*=E,k*=E),(o||L)&&(o&&(I+=d*-o,J+=g*-o,K+=j*-o+o),L&&(I+=z.xOrigin-(z.xOrigin*b+z.yOrigin*c)+z.xOffset,J+=z.yOrigin-(z.xOrigin*e+z.yOrigin*f)+z.yOffset),p>I&&I>-p&&(I=w),p>J&&J>-p&&(J=w),p>K&&K>-p&&(K=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(p>b&&b>-p?w:b)+v+(p>e&&e>-p?w:e)+v+(p>h&&h>-p?w:h),u+=v+(p>k&&k>-p?w:k)+v+(p>c&&c>-p?w:c)+v+(p>f&&f>-p?w:f),C||D||1!==G?(u+=v+(p>i&&i>-p?w:i)+v+(p>l&&l>-p?w:l)+v+(p>d&&d>-p?w:d),u+=v+(p>g&&g>-p?w:g)+v+(p>j&&j>-p?w:j)+v+(p>m&&m>-p?w:m)+v):u+=",0,0,0,0,1,0,",u+=I+v+J+v+K+v+(M?1+-K/M:1)+")",A[ya]=u};j=Ca.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,ua("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j,k,l,m,n,o,p,q,r,s,t=a._gsTransform,u=a.style,v=1e-6,w=xa.length,x=i,y={},z="transformOrigin";if(i.display?(m=X(a,"display"),u.display="block",j=La(a,e,!0,i.parseTransform),u.display=m):j=La(a,e,!0,i.parseTransform),d._transform=j,"string"==typeof x.transform&&ya)m=M.style,m[ya]=x.transform,m.display="block",m.position="absolute",K.body.appendChild(M),k=La(M,null,!1),K.body.removeChild(M),k.perspective||(k.perspective=j.perspective),null!=x.xPercent&&(k.xPercent=fa(x.xPercent,j.xPercent)),null!=x.yPercent&&(k.yPercent=fa(x.yPercent,j.yPercent));else if("object"==typeof x){if(k={scaleX:fa(null!=x.scaleX?x.scaleX:x.scale,j.scaleX),scaleY:fa(null!=x.scaleY?x.scaleY:x.scale,j.scaleY),scaleZ:fa(x.scaleZ,j.scaleZ),x:fa(x.x,j.x),y:fa(x.y,j.y),z:fa(x.z,j.z),xPercent:fa(x.xPercent,j.xPercent),yPercent:fa(x.yPercent,j.yPercent),perspective:fa(x.transformPerspective,j.perspective)},q=x.directionalRotation,null!=q)if("object"==typeof q)for(m in q)x[m]=q[m];else x.rotation=q;"string"==typeof x.x&&-1!==x.x.indexOf("%")&&(k.x=0,k.xPercent=fa(x.x,j.xPercent)),"string"==typeof x.y&&-1!==x.y.indexOf("%")&&(k.y=0,k.yPercent=fa(x.y,j.yPercent)),k.rotation=ga("rotation"in x?x.rotation:"shortRotation"in x?x.shortRotation+"_short":"rotationZ"in x?x.rotationZ:j.rotation,j.rotation,"rotation",y),Ba&&(k.rotationX=ga("rotationX"in x?x.rotationX:"shortRotationX"in x?x.shortRotationX+"_short":j.rotationX||0,j.rotationX,"rotationX",y),k.rotationY=ga("rotationY"in x?x.rotationY:"shortRotationY"in x?x.shortRotationY+"_short":j.rotationY||0,j.rotationY,"rotationY",y)),k.skewX=null==x.skewX?j.skewX:ga(x.skewX,j.skewX),k.skewY=null==x.skewY?j.skewY:ga(x.skewY,j.skewY),(l=k.skewY-j.skewY)&&(k.skewX+=l,k.rotation+=l)}for(Ba&&null!=x.force3D&&(j.force3D=x.force3D,p=!0),j.skewType=x.skewType||j.skewType||g.defaultSkewType,o=j.force3D||j.z||j.rotationX||j.rotationY||k.z||k.rotationX||k.rotationY||k.perspective,o||null==x.scale||(k.scaleZ=1);--w>-1;)c=xa[w],n=k[c]-j[c],(n>v||-v>n||null!=x[c]||null!=J[c])&&(p=!0,f=new pa(j,c,j[c],n,f),c in y&&(f.e=y[c]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return n=x.transformOrigin,j.svg&&(n||x.svgOrigin)&&(r=j.xOffset,s=j.yOffset,Ha(a,da(n),k,x.svgOrigin,x.smoothOrigin),f=qa(j,"xOrigin",(t?j:k).xOrigin,k.xOrigin,f,z),f=qa(j,"yOrigin",(t?j:k).yOrigin,k.yOrigin,f,z),(r!==j.xOffset||s!==j.yOffset)&&(f=qa(j,"xOffset",t?r:j.xOffset,j.xOffset,f,z),f=qa(j,"yOffset",t?s:j.yOffset,j.yOffset,f,z)),n=wa?null:"0px 0px"),(n||Ba&&o&&j.zOrigin)&&(ya?(p=!0,c=Aa,n=(n||X(a,c,e,!1,"50% 50%"))+"",f=new pa(u,c,0,0,f,-1,z),f.b=u[c],f.plugin=h,Ba?(m=j.zOrigin,n=n.split(" "),j.zOrigin=(n.length>2&&(0===m||"0px"!==n[2])?parseFloat(n[2]):m)||0,f.xs0=f.e=n[0]+" "+(n[1]||"50%")+" 0px",f=new pa(j,"zOrigin",0,0,f,-1,f.n),f.b=m,f.xs0=f.e=j.zOrigin):f.xs0=f.e=n):da(n+"",j)),p&&(d._transformType=j.svg&&wa||!o&&3!==this._transformType?2:3),f},prefix:!0}),ua("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ua("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=V(y[j])),m=l=X(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=Y(a,"borderLeft",o,t),w=Y(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=Y(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=ra(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:ma("0px 0px 0px 0px",!1,!0)}),ua("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||W(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&(m=X(a,"backgroundImage").replace(B,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),N.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-N.width:a.offsetHeight-N.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:da}),ua("backgroundSize",{defaultValue:"0 0",formatter:da}),ua("perspective",{defaultValue:"0px",prefix:!0}),ua("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ua("transformStyle",{prefix:!0}),ua("backfaceVisibility",{prefix:!0}),ua("userSelect",{prefix:!0}),ua("margin",{parser:na("marginTop,marginRight,marginBottom,marginLeft")}),ua("padding",{parser:na("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ua("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(X(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),ua("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ua("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),ua("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){return this.parseComplex(a.style,this.format(X(a,"borderTopWidth",e,!1,"0px")+" "+X(a,"borderTopStyle",e,!1,"solid")+" "+X(a,"borderTopColor",e,!1,"#000")),this.format(b),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(la)||["#000"])[0]}}),ua("borderWidth",{parser:na("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ua("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new pa(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Oa=function(a){var b,c=this.t,d=c.filter||X(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!X(this.data,"filter")):(c.filter=d.replace(x,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(v,"opacity="+e))};ua("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(X(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===X(a,"visibility",e)&&0!==b&&(h=0),Q?f=new pa(i,"opacity",h,b-h,f):(f=new pa(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Oa),j&&(f=new pa(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Pa=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(z,"-$1").toLowerCase())):a.removeAttribute(b))},Qa=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Pa(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ua("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new pa(a,d,0,0,g,2),
g.setRatio=Qa,g.pr=-11,c=!0,g.b=o,k=$(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("\\s*\\b"+b.substr(2)+"\\b"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=_(a,k,$(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Ra=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Aa:i[c].p),Pa(g,c);e&&(Pa(g,ya),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(ua("clearProps",{parser:function(a,b,d,e,f){return f=new pa(a,d,0,0,f,2),f.setRatio=Ra,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),sa=j.length;sa--;)va(j[sa]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h){if(!a.nodeType)return!1;this._target=a,this._tween=h,this._vars=b,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=W(a,""),f=this._overwriteProps;var j,n,p,q,r,s,t,u,v,x=a.style;if(l&&""===x.zIndex&&(j=X(a,"zIndex",e),("auto"===j||""===j)&&this._addLazySet(x,"zIndex",0)),"string"==typeof b&&(q=x.cssText,j=$(a,e),x.cssText=q+";"+b,j=_(a,j,$(a)).difs,!Q&&w.test(b)&&(j.opacity=parseFloat(RegExp.$1)),b=j,x.cssText=q),b.className?this._firstPT=n=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=n=this.parse(a,b,null),this._transformType){for(v=3===this._transformType,ya?m&&(l=!0,""===x.zIndex&&(t=X(a,"zIndex",e),("auto"===t||""===t)&&this._addLazySet(x,"zIndex",0)),o&&this._addLazySet(x,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(v?"visible":"hidden"))):x.zoom=1,p=n;p&&p._next;)p=p._next;u=new pa(a,"transform",0,0,null,2),this._linkCSSP(u,null,p),u.setRatio=ya?Na:Ma,u.data=this._transform||La(a,e,!0),u.tween=h,u.pr=-1,f.pop()}if(c){for(;n;){for(s=n._next,p=q;p&&p.pr>n.pr;)p=p._next;(n._prev=p?p._prev:r)?n._prev._next=n:q=n,(n._next=p)?p._prev=n:r=n,n=s}this._firstPT=q}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,q,r,s=a.style;for(g in b)n=b[g],h=i[g],h?c=h.parse(a,n,g,this,c,f,b):(m=X(a,g,e)+"",q="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||q&&y.test(n)?(q||(n=ja(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=ra(s,g,m,n,!0,"transparent",c,0,f)):!q||-1===n.indexOf(" ")&&-1===n.indexOf(",")?(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ca(a,g,e),o="px"):"left"===g||"top"===g?(j=Z(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),r=q&&"="===n.charAt(1),r?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(u,"")):(l=parseFloat(n),p=q?n.replace(u,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(r?l+j:l)+p:b[g],o!==p&&""!==p&&(l||0===l)&&j&&(j=Y(a,g,j,o),"%"===p?(j/=Y(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=Y(a,g,1,p):"px"!==p&&(l=Y(a,g,l,p),p="px"),r&&(l||0===l)&&(n=l+j+p)),r&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==s[g]&&(n||n+""!="NaN"&&null!=n)?(c=new pa(s,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):S("invalid "+g+" tween value: "+b[g]):(c=new pa(s,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p)):c=ra(s,g,m,n,!0,null,c,0,f)),f&&c&&!c.plugin&&(c.plugin=f);return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=Math.round(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=Math.round(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||La(this._target,e,!0),this._transformType=this._transform.svg&&wa||!a&&3!==this._transformType?2:3};var Sa=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new pa(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Sa,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}return b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),a.prototype._kill.call(this,f)};var Ta=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Ta(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push($(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Ta(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Ta(a,k,m),i.render(c,!0,!0),Ta(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=_(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define(["TweenLite"],b):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=b())}("CSSPlugin");

/*!
 * VERSION: 0.14.3
 * DATE: 2015-12-19
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Requires TweenLite and CSSPlugin version 1.17.0 or later (TweenMax contains both TweenLite and CSSPlugin). ThrowPropsPlugin is required for momentum-based continuation of movement after the mouse/touch is released (ThrowPropsPlugin is a membership benefit of Club GreenSock - http://greensock.com/club/).
 *
 * @license Copyright (c) 2008-2016, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("utils.Draggable",["events.EventDispatcher","TweenLite","plugins.CSSPlugin"],function(a,b,c){var d,e,f,g,h,i,j,k,l={css:{}},m={css:{}},n={css:{}},o={css:{}},p=_gsScope._gsDefine.globals,q={},r=document,s=r.documentElement||{},t=function(a){return r.createElementNS?r.createElementNS("http://www.w3.org/1999/xhtml",a):r.createElement(a)},u=t("div"),v=[],w=function(){return!1},x=180/Math.PI,y=999999999999999,z=Date.now||function(){return(new Date).getTime()},A=!(r.addEventListener||!r.all),B=r.createElement("div"),C=[],D={},E=0,F=/^(?:a|input|textarea|button|select)$/i,G=0,H=-1!==navigator.userAgent.toLowerCase().indexOf("android"),I=0,J={},K={},L=function(a){if("string"==typeof a&&(a=b.selector(a)),!a||a.nodeType)return[a];var c,d=[],e=a.length;for(c=0;c!==e;d.push(a[c++]));return d},M=function(a){var b,c={};for(b in a)c[b]=a[b];return c},N=function(){for(var a=C.length;--a>-1;)C[a]()},O=function(a){C.push(a),1===C.length&&b.ticker.addEventListener("tick",N,this,!1,1)},P=function(a){for(var c=C.length;--c>-1;)C[c]===a&&C.splice(c,1);b.to(Q,0,{overwrite:"all",delay:15,onComplete:Q})},Q=function(){C.length||b.ticker.removeEventListener("tick",N)},R=function(a,b){var c;for(c in b)void 0===a[c]&&(a[c]=b[c]);return a},S=function(){return null!=window.pageYOffset?window.pageYOffset:null!=r.scrollTop?r.scrollTop:s.scrollTop||r.body.scrollTop||0},T=function(){return null!=window.pageXOffset?window.pageXOffset:null!=r.scrollLeft?r.scrollLeft:s.scrollLeft||r.body.scrollLeft||0},U=function(a,b){Ha(a,"scroll",b),W(a.parentNode)||U(a.parentNode,b)},V=function(a,b){Ia(a,"scroll",b),W(a.parentNode)||V(a.parentNode,b)},W=function(a){return!(a&&a!==s&&a!==r&&a!==r.body&&a!==window&&a.nodeType&&a.parentNode)},X=function(a,b){var c="x"===b?"Width":"Height",d="scroll"+c,e="client"+c,f=r.body;return Math.max(0,W(a)?Math.max(s[d],f[d])-(window["inner"+c]||s[e]||f[e]):a[d]-a[e])},Y=function(a){var b=W(a),c=X(a,"x"),d=X(a,"y");b?a=K:Y(a.parentNode),a._gsMaxScrollX=c,a._gsMaxScrollY=d,a._gsScrollX=a.scrollLeft||0,a._gsScrollY=a.scrollTop||0},Z=function(a,b){return a=a||window.event,q.pageX=a.clientX+r.body.scrollLeft+s.scrollLeft,q.pageY=a.clientY+r.body.scrollTop+s.scrollTop,b&&(a.returnValue=!1),q},$=function(a){return a?("string"==typeof a&&(a=b.selector(a)),a.length&&a!==window&&a[0]&&a[0].style&&!a.nodeType&&(a=a[0]),a===window||a.nodeType&&a.style?a:null):a},_=function(a,b){var c,e,f,g=a.style;if(void 0===g[b]){for(f=["O","Moz","ms","Ms","Webkit"],e=5,c=b.charAt(0).toUpperCase()+b.substr(1);--e>-1&&void 0===g[f[e]+c];);if(0>e)return"";d=3===e?"ms":f[e],b=d+c}return b},aa=function(a,b,c){var d=a.style;d&&(void 0===d[b]&&(b=_(a,b)),null==c?d.removeProperty?d.removeProperty(b.replace(/([A-Z])/g,"-$1").toLowerCase()):d.removeAttribute(b):void 0!==d[b]&&(d[b]=c))},ba=r.defaultView?r.defaultView.getComputedStyle:w,ca=/(?:Left|Right|Width)/i,da=/(?:\d|\-|\+|=|#|\.)*/g,ea=function(a,b,c,d,e){if("px"===d||!d)return c;if("auto"===d||!c)return 0;var f,g=ca.test(b),h=a,i=u.style,j=0>c;return j&&(c=-c),"%"===d&&-1!==b.indexOf("border")?f=c/100*(g?a.clientWidth:a.clientHeight):(i.cssText="border:0 solid red;position:"+ga(a,"position",!0)+";line-height:0;","%"!==d&&h.appendChild?i[g?"borderLeftWidth":"borderTopWidth"]=c+d:(h=a.parentNode||r.body,i[g?"width":"height"]=c+d),h.appendChild(u),f=parseFloat(u[g?"offsetWidth":"offsetHeight"]),h.removeChild(u),0!==f||e||(f=ea(a,b,c,d,!0))),j?-f:f},fa=function(a,b){if("absolute"!==ga(a,"position",!0))return 0;var c="left"===b?"Left":"Top",d=ga(a,"margin"+c,!0);return a["offset"+c]-(ea(a,b,parseFloat(d),(d+"").replace(da,""))||0)},ga=function(a,b,c){var d,e=(a._gsTransform||{})[b];return e||0===e?e:(a.style[b]?e=a.style[b]:(d=ba(a))?(e=d.getPropertyValue(b.replace(/([A-Z])/g,"-$1").toLowerCase()),e=e||d.length?e:d[b]):a.currentStyle&&(e=a.currentStyle[b]),"auto"!==e||"top"!==b&&"left"!==b||(e=fa(a,b)),c?e:parseFloat(e)||0)},ha=function(a,b,c){var d=a.vars,e=d[c],f=a._listeners[b];"function"==typeof e&&e.apply(d[c+"Scope"]||d.callbackScope||a,d[c+"Params"]||[a.pointerEvent]),f&&a.dispatchEvent(b)},ia=function(a,b){var c,d,e,f=$(a);return f?Ca(f,b):void 0!==a.left?(e=wa(b),{left:a.left-e.x,top:a.top-e.y,width:a.width,height:a.height}):(d=a.min||a.minX||a.minRotation||0,c=a.min||a.minY||0,{left:d,top:c,width:(a.max||a.maxX||a.maxRotation||0)-d,height:(a.max||a.maxY||0)-c})},ja=function(){if(!r.createElementNS)return g=0,void(h=!1);var a,b,c,d,e=t("div"),f=r.createElementNS("http://www.w3.org/2000/svg","svg"),k=t("div"),l=e.style,m=r.body||s;r.body&&ma&&(l.position=k.style.position="absolute",m.appendChild(k),k.appendChild(e),l.height="10px",d=e.offsetTop,k.style.border="5px solid red",j=d!==e.offsetTop,m.removeChild(k)),l=f.style,f.setAttributeNS(null,"width","400px"),f.setAttributeNS(null,"height","400px"),f.setAttributeNS(null,"viewBox","0 0 400 400"),l.display="block",l.boxSizing="border-box",l.border="0px solid red",l.transform="none",e.style.cssText="width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;",m.appendChild(e),e.appendChild(f),c=f.createSVGPoint().matrixTransform(f.getScreenCTM()),b=c.y,e.scrollTop=100,c.x=c.y=0,c=c.matrixTransform(f.getScreenCTM()),i=b-c.y<100.1?0:b-c.y-150,e.removeChild(f),m.removeChild(e),m.appendChild(f),a=f.getScreenCTM(),b=a.e,l.border="50px solid red",a=f.getScreenCTM(),0===b&&0===a.e&&0===a.f&&1===a.a?(g=1,h=!0):(g=b!==a.e?1:0,h=1!==a.a),m.removeChild(f)},ka=""!==_(u,"perspective"),la=_(u,"transformOrigin").replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),ma=_(u,"transform"),na=ma.replace(/^ms/g,"Ms").replace(/([A-Z])/g,"-$1").toLowerCase(),oa={},pa={},qa=window.SVGElement,ra=function(a){return!!(qa&&"function"==typeof a.getBBox&&a.getCTM&&(!a.parentNode||a.parentNode.getBBox&&a.parentNode.getCTM))},sa=(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(navigator.userAgent))&&parseFloat(RegExp.$1)<11,ta=[],ua=[],va=function(a){if(!a.getBoundingClientRect||!a.parentNode||!ma)return{offsetTop:0,offsetLeft:0,scaleX:1,scaleY:1,offsetParent:s};if(Ra.cacheSVGData!==!1&&a._gsCache&&a._gsCache.lastUpdate===b.ticker.frame)return a._gsCache;var c,d,e,f,j,k,l,m,n,o,p,q,t=a,u=xa(a);if(u.lastUpdate=b.ticker.frame,a.getBBox&&!u.isSVGRoot){for(t=a.parentNode,c=a.getBBox();t&&"svg"!==(t.nodeName+"").toLowerCase();)t=t.parentNode;return f=va(t),u.offsetTop=c.y*f.scaleY,u.offsetLeft=c.x*f.scaleX,u.scaleX=f.scaleX,u.scaleY=f.scaleY,u.offsetParent=t||s,u}for(e=u.offsetParent,e===r.body&&(e=s),ua.length=ta.length=0;t&&(j=ga(t,ma,!0),"matrix(1, 0, 0, 1, 0, 0)"!==j&&"none"!==j&&"translate3d(0px, 0px, 0px)"!==j&&(ua.push(t),ta.push(t.style[ma]),t.style[ma]="none"),t!==e);)t=t.parentNode;for(d=e.getBoundingClientRect(),j=a.getScreenCTM(),m=a.createSVGPoint(),l=m.matrixTransform(j),m.x=m.y=10,m=m.matrixTransform(j),u.scaleX=(m.x-l.x)/10,u.scaleY=(m.y-l.y)/10,void 0===g&&ja(),u.borderBox&&!h&&a.getAttribute("width")&&(f=ba(a)||{},n=parseFloat(f.borderLeftWidth)+parseFloat(f.borderRightWidth)||0,o=parseFloat(f.borderTopWidth)+parseFloat(f.borderBottomWidth)||0,p=parseFloat(f.width)||0,q=parseFloat(f.height)||0,u.scaleX*=(p-n)/p,u.scaleY*=(q-o)/q),i?(c=a.getBoundingClientRect(),u.offsetLeft=c.left-d.left,u.offsetTop=c.top-d.top):(u.offsetLeft=l.x-d.left,u.offsetTop=l.y-d.top),u.offsetParent=e,k=ua.length;--k>-1;)ua[k].style[ma]=ta[k];return u},wa=function(a,c){if(c=c||{},!a||a===s||!a.parentNode||a===window)return{x:0,y:0};var d=ba(a),e=la&&d?d.getPropertyValue(la):"50% 50%",f=e.split(" "),g=-1!==e.indexOf("left")?"0%":-1!==e.indexOf("right")?"100%":f[0],h=-1!==e.indexOf("top")?"0%":-1!==e.indexOf("bottom")?"100%":f[1];return("center"===h||null==h)&&(h="50%"),("center"===g||isNaN(parseFloat(g)))&&(g="50%"),a.getBBox&&ra(a)?(a._gsTransform||(b.set(a,{x:"+=0",overwrite:!1}),void 0===a._gsTransform.xOrigin&&console.log("Draggable requires at least GSAP 1.17.0")),e=a.getBBox(),c.x=a._gsTransform.xOrigin-e.x,c.y=a._gsTransform.yOrigin-e.y):(a.getBBox&&!a.offsetWidth&&-1!==(g+h).indexOf("%")&&(a=a.getBBox(),a={offsetWidth:a.width,offsetHeight:a.height}),c.x=-1!==g.indexOf("%")?a.offsetWidth*parseFloat(g)/100:parseFloat(g),c.y=-1!==h.indexOf("%")?a.offsetHeight*parseFloat(h)/100:parseFloat(h)),c},xa=function(a){if(Ra.cacheSVGData!==!1&&a._gsCache&&a._gsCache.lastUpdate===b.ticker.frame)return a._gsCache;var c,d=a._gsCache=a._gsCache||{},e=ba(a),f=a.getBBox&&ra(a),g="svg"===(a.nodeName+"").toLowerCase();if(d.isSVG=f,d.isSVGRoot=g,d.borderBox="border-box"===e.boxSizing,d.computedStyle=e,g)(d.offsetParent=a.offsetParent)||(c=a.parentNode||s,c.insertBefore(u,a),d.offsetParent=u.offsetParent||s,c.removeChild(u));else if(f){for(c=a.parentNode;c&&"svg"!==(c.nodeName+"").toLowerCase();)c=c.parentNode;d.offsetParent=c}return d},ya=function(a,b,c,d){if(a===window||!a||!a.style||!a.parentNode)return[1,0,0,1,0,0];var e,f,h,i,k,l,m,n,o,p,q,t,u,v,w=a._gsCache||xa(a),x=a.parentNode,y=x._gsCache||xa(x),z=w.computedStyle,A=w.isSVG?y.offsetParent:x.offsetParent;return e=w.isSVG&&-1!==(a.style[ma]+"").indexOf("matrix")?a.style[ma]:z?z.getPropertyValue(na):a.currentStyle?a.currentStyle[ma]:"1,0,0,1,0,0",a.getBBox&&-1!==(a.getAttribute("transform")+"").indexOf("matrix")&&(e=a.getAttribute("transform")),e=(e+"").match(/(?:\-|\b)[\d\-\.e]+\b/g)||[1,0,0,1,0,0],e.length>6&&(e=[e[0],e[1],e[4],e[5],e[12],e[13]]),d?e[4]=e[5]=0:w.isSVG&&(k=a._gsTransform)&&(k.xOrigin||k.yOrigin)&&(e[0]=parseFloat(e[0]),e[1]=parseFloat(e[1]),e[2]=parseFloat(e[2]),e[3]=parseFloat(e[3]),e[4]=parseFloat(e[4])-(k.xOrigin-(k.xOrigin*e[0]+k.yOrigin*e[2])),e[5]=parseFloat(e[5])-(k.yOrigin-(k.xOrigin*e[1]+k.yOrigin*e[3]))),b&&(void 0===g&&ja(),h=w.isSVG||w.isSVGRoot?va(a):a,w.isSVG?(i=a.getBBox(),p=y.isSVGRoot?{x:0,y:0}:x.getBBox(),h={offsetLeft:i.x-p.x,offsetTop:i.y-p.y,offsetParent:w.offsetParent}):w.isSVGRoot?(q=parseInt(z.borderTopWidth,10)||0,t=parseInt(z.borderLeftWidth,10)||0,u=(e[0]-g)*t+e[2]*q,v=e[1]*t+(e[3]-g)*q,l=b.x,m=b.y,n=l-(l*e[0]+m*e[2]),o=m-(l*e[1]+m*e[3]),e[4]=parseFloat(e[4])+n,e[5]=parseFloat(e[5])+o,b.x-=n,b.y-=o,l=h.scaleX,m=h.scaleY,b.x*=l,b.y*=m,e[0]*=l,e[1]*=m,e[2]*=l,e[3]*=m,sa||(b.x+=u,b.y+=v)):!j&&a.offsetParent&&(b.x+=parseInt(ga(a.offsetParent,"borderLeftWidth"),10)||0,b.y+=parseInt(ga(a.offsetParent,"borderTopWidth"),10)||0),f=x===s||x===r.body,e[4]=Number(e[4])+b.x+(h.offsetLeft||0)-c.x-(f?0:x.scrollLeft||0),e[5]=Number(e[5])+b.y+(h.offsetTop||0)-c.y-(f?0:x.scrollTop||0),x&&"fixed"===ga(a,"position",z)&&(e[4]+=T(),e[5]+=S()),x&&x!==s&&A===h.offsetParent&&(e[4]-=x.offsetLeft||0,e[5]-=x.offsetTop||0,j||!x.offsetParent||w.isSVG||w.isSVGRoot||(e[4]-=parseInt(ga(x.offsetParent,"borderLeftWidth"),10)||0,e[5]-=parseInt(ga(x.offsetParent,"borderTopWidth"),10)||0))),e},za=function(a,b){if(!a||a===window||!a.parentNode)return[1,0,0,1,0,0];for(var c,d,e,f,g,h,i,j,k=wa(a,oa),l=wa(a.parentNode,pa),m=ya(a,k,l);(a=a.parentNode)&&a.parentNode&&a!==s;)k=l,l=wa(a.parentNode,k===oa?pa:oa),i=ya(a,k,l),c=m[0],d=m[1],e=m[2],f=m[3],g=m[4],h=m[5],m[0]=c*i[0]+d*i[2],m[1]=c*i[1]+d*i[3],m[2]=e*i[0]+f*i[2],m[3]=e*i[1]+f*i[3],m[4]=g*i[0]+h*i[2]+i[4],m[5]=g*i[1]+h*i[3]+i[5];return b&&(c=m[0],d=m[1],e=m[2],f=m[3],g=m[4],h=m[5],j=c*f-d*e,m[0]=f/j,m[1]=-d/j,m[2]=-e/j,m[3]=c/j,m[4]=(e*h-f*g)/j,m[5]=-(c*h-d*g)/j),m},Aa=function(a,b,c,d,e){a=$(a);var f=za(a,!1,e),g=b.x,h=b.y;return c&&(wa(a,b),g-=b.x,h-=b.y),d=d===!0?b:d||{},d.x=g*f[0]+h*f[2]+f[4],d.y=g*f[1]+h*f[3]+f[5],d},Ba=function(a,b,c){var d=a.x*b[0]+a.y*b[2]+b[4],e=a.x*b[1]+a.y*b[3]+b[5];return a.x=d*c[0]+e*c[2]+c[4],a.y=d*c[1]+e*c[3]+c[5],a},Ca=function(a,b,c){if(!(a=$(a)))return null;b=$(b);var d,e,f,g,h,i,j,k,l,m,n,o,p,q,t,u,v,w,x,y,z,B,C=a.getBBox&&ra(a);if(a===window)g=S(),e=T(),f=e+(s.clientWidth||a.innerWidth||r.body.clientWidth||0),h=g+((a.innerHeight||0)-20<s.clientHeight?s.clientHeight:a.innerHeight||r.body.clientHeight||0);else{if(void 0===b||b===window)return a.getBoundingClientRect();d=wa(a),e=-d.x,g=-d.y,C?(o=a.getBBox(),p=o.width,q=o.height):a.offsetWidth?(p=a.offsetWidth,q=a.offsetHeight):(z=ba(a),p=parseFloat(z.width),q=parseFloat(z.height)),f=e+p,h=g+q,"svg"!==a.nodeName.toLowerCase()||A||(t=va(a),B=t.computedStyle||{},w=(a.getAttribute("viewBox")||"0 0").split(" "),x=parseFloat(w[0]),y=parseFloat(w[1]),u=parseFloat(B.borderLeftWidth)||0,v=parseFloat(B.borderTopWidth)||0,f-=p-(p-u)/t.scaleX-x,h-=q-(q-v)/t.scaleY-y,e-=u/t.scaleX-x,g-=v/t.scaleY-y,z&&(f+=(parseFloat(B.borderRightWidth)+u)/t.scaleX,h+=(v+parseFloat(B.borderBottomWidth))/t.scaleY))}return a===b?{left:e,top:g,width:f-e,height:h-g}:(i=za(a),j=za(b,!0),k=Ba({x:e,y:g},i,j),l=Ba({x:f,y:g},i,j),m=Ba({x:f,y:h},i,j),n=Ba({x:e,y:h},i,j),e=Math.min(k.x,l.x,m.x,n.x),g=Math.min(k.y,l.y,m.y,n.y),J.x=J.y=0,c&&wa(b,J),{left:e+J.x,top:g+J.y,width:Math.max(k.x,l.x,m.x,n.x)-e,height:Math.max(k.y,l.y,m.y,n.y)-g})},Da=function(a){return a&&a.length&&a[0]&&(a[0].nodeType&&a[0].style&&!a.nodeType||a[0].length&&a[0][0])?!0:!1},Ea=function(a){var b,c,d,e=[],f=a.length;for(b=0;f>b;b++)if(c=a[b],Da(c))for(d=c.length,d=0;d<c.length;d++)e.push(c[d]);else c&&0!==c.length&&e.push(c);return e},Fa="ontouchstart"in s&&"orientation"in window,Ga=function(a){for(var b=a.split(","),c=(void 0!==u.onpointerdown?"pointerdown,pointermove,pointerup,pointercancel":void 0!==u.onmspointerdown?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":a).split(","),d={},e=8;--e>-1;)d[b[e]]=c[e],d[c[e]]=b[e];return d}("touchstart,touchmove,touchend,touchcancel"),Ha=function(a,b,c,d){a.addEventListener?a.addEventListener(Ga[b]||b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},Ia=function(a,b,c){a.removeEventListener?a.removeEventListener(Ga[b]||b,c):a.detachEvent&&a.detachEvent("on"+b,c)},Ja=function(a,b){for(var c=a.length;--c>-1;)if(a[c].identifier===b)return!0;return!1},Ka=function(a){e=a.touches&&G<a.touches.length,Ia(a.target,"touchend",Ka)},La=function(a){e=a.touches&&G<a.touches.length,Ha(a.target,"touchend",Ka)},Ma=function(a,b,c,d,e,f){var g,h,i,j={};if(b)if(1!==e&&b instanceof Array){for(j.end=g=[],i=b.length,h=0;i>h;h++)g[h]=b[h]*e;c+=1.1,d-=1.1}else"function"==typeof b?j.end=function(c){return b.call(a,c)*e}:j.end=b;return(c||0===c)&&(j.max=c),(d||0===d)&&(j.min=d),f&&(j.velocity=0),j},Na=function(a){var b;return a&&a.getAttribute&&"BODY"!==a.nodeName?"true"===(b=a.getAttribute("data-clickable"))||"false"!==b&&(a.onclick||F.test(a.nodeName+"")||"true"===a.getAttribute("contentEditable"))?!0:Na(a.parentNode):!1},Oa=function(a,b){for(var c,d=a.length;--d>-1;)c=a[d],c.ondragstart=c.onselectstart=b?null:w,aa(c,"userSelect",b?"text":"none")},Pa=function(){var a,b=r.createElement("div"),c=r.createElement("div"),d=c.style,e=r.body||u;return d.display="inline-block",d.position="relative",b.style.cssText=c.innerHTML="width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden",b.appendChild(c),e.appendChild(b),k=c.offsetHeight+18>b.scrollHeight,d.width="100%",ma||(d.paddingRight="500px",a=b.scrollLeft=b.scrollWidth-b.clientWidth,d.left="-90px",a=a!==b.scrollLeft),e.removeChild(b),a}(),Qa=function(a,c){a=$(a),c=c||{};var d,e,f,g,h,i,j=r.createElement("div"),l=j.style,m=a.firstChild,n=0,o=0,p=a.scrollTop,q=a.scrollLeft,s=a.scrollWidth,t=a.scrollHeight,u=0,v=0,w=0;ka&&c.force3D!==!1?(h="translate3d(",i="px,0px)"):ma&&(h="translate(",i="px)"),this.scrollTop=function(a,b){return arguments.length?void this.top(-a,b):-this.top()},this.scrollLeft=function(a,b){return arguments.length?void this.left(-a,b):-this.left()},this.left=function(d,e){if(!arguments.length)return-(a.scrollLeft+o);var f=a.scrollLeft-q,g=o;return(f>2||-2>f)&&!e?(q=a.scrollLeft,b.killTweensOf(this,!0,{left:1,scrollLeft:1}),this.left(-q),void(c.onKill&&c.onKill())):(d=-d,0>d?(o=d-.5|0,d=0):d>v?(o=d-v|0,d=v):o=0,(o||g)&&(h?this._suspendTransforms||(l[ma]=h+-o+"px,"+-n+i):l.left=-o+"px",Pa&&o+u>=0&&(l.paddingRight=o+u+"px")),a.scrollLeft=0|d,void(q=a.scrollLeft))},this.top=function(d,e){if(!arguments.length)return-(a.scrollTop+n);var f=a.scrollTop-p,g=n;return(f>2||-2>f)&&!e?(p=a.scrollTop,b.killTweensOf(this,!0,{top:1,scrollTop:1}),this.top(-p),void(c.onKill&&c.onKill())):(d=-d,0>d?(n=d-.5|0,d=0):d>w?(n=d-w|0,d=w):n=0,(n||g)&&(h?this._suspendTransforms||(l[ma]=h+-o+"px,"+-n+i):l.top=-n+"px"),a.scrollTop=0|d,void(p=a.scrollTop))},this.maxScrollTop=function(){return w},this.maxScrollLeft=function(){return v},this.disable=function(){for(m=j.firstChild;m;)g=m.nextSibling,a.appendChild(m),m=g;a===j.parentNode&&a.removeChild(j)},this.enable=function(){if(m=a.firstChild,m!==j){for(;m;)g=m.nextSibling,j.appendChild(m),m=g;a.appendChild(j),this.calibrate()}},this.calibrate=function(b){var c,g,h=a.clientWidth===d;p=a.scrollTop,q=a.scrollLeft,(!h||a.clientHeight!==e||j.offsetHeight!==f||s!==a.scrollWidth||t!==a.scrollHeight||b)&&((n||o)&&(c=this.left(),g=this.top(),this.left(-a.scrollLeft),this.top(-a.scrollTop)),(!h||b)&&(l.display="block",l.width="auto",l.paddingRight="0px",u=Math.max(0,a.scrollWidth-a.clientWidth),u&&(u+=ga(a,"paddingLeft")+(k?ga(a,"paddingRight"):0))),l.display="inline-block",l.position="relative",l.overflow="visible",l.verticalAlign="top",l.width="100%",l.paddingRight=u+"px",k&&(l.paddingBottom=ga(a,"paddingBottom",!0)),A&&(l.zoom="1"),d=a.clientWidth,e=a.clientHeight,s=a.scrollWidth,t=a.scrollHeight,v=a.scrollWidth-d,w=a.scrollHeight-e,f=j.offsetHeight,l.display="block",(c||g)&&(this.left(c),this.top(g)))},this.content=j,this.element=a,this._suspendTransforms=!1,this.enable()},Ra=function(d,g){a.call(this,d),d=$(d),f||(f=p.com.greensock.plugins.ThrowPropsPlugin),this.vars=g=M(g||{}),this.target=d,this.x=this.y=this.rotation=0,this.dragResistance=parseFloat(g.dragResistance)||0,this.edgeResistance=isNaN(g.edgeResistance)?1:parseFloat(g.edgeResistance)||0,this.lockAxis=g.lockAxis,this.autoScroll=g.autoScroll||0,this.lockedAxis=null,this.allowEventDefault=!!g.allowEventDefault;var h,i,j,k,q,t,u,w,C,F,J,N,Q,S,T,X,_,ba,ca,da,ea,fa,ja,ka,la,ma,na,oa,pa,qa,ra,sa,ta,ua=(g.type||(A?"top,left":"x,y")).toLowerCase(),va=-1!==ua.indexOf("x")||-1!==ua.indexOf("y"),wa=-1!==ua.indexOf("rotation"),xa=wa?"rotation":va?"x":"left",ya=va?"y":"top",Ba=-1!==ua.indexOf("x")||-1!==ua.indexOf("left")||"scroll"===ua,Ca=-1!==ua.indexOf("y")||-1!==ua.indexOf("top")||"scroll"===ua,Da=g.minimumMovement||2,Ea=this,Ka=L(g.trigger||g.handle||d),Pa={},Sa=0,Ta=!1,Ua=g.clickableTest||Na,Wa=function(a){if(Ea.autoScroll&&(Ta||Ea.isDragging&&ba)){var b,c,e,f,g,h,j,k,l=d,m=15*Ea.autoScroll;for(Ta=!1,K.scrollTop=null!=window.pageYOffset?window.pageYOffset:null!=s.scrollTop?s.scrollTop:r.body.scrollTop,K.scrollLeft=null!=window.pageXOffset?window.pageXOffset:null!=s.scrollLeft?s.scrollLeft:r.body.scrollLeft,f=Ea.pointerX-K.scrollLeft,g=Ea.pointerY-K.scrollTop;l&&!c;)c=W(l.parentNode),b=c?K:l.parentNode,e=c?{bottom:Math.max(s.clientHeight,window.innerHeight||0),right:Math.max(s.clientWidth,window.innerWidth||0),left:0,top:0}:b.getBoundingClientRect(),h=j=0,Ca&&(k=b._gsMaxScrollY-b.scrollTop,0>k?j=k:g>e.bottom-40&&k?(Ta=!0,j=Math.min(k,m*(1-Math.max(0,e.bottom-g)/40)|0)):g<e.top+40&&b.scrollTop&&(Ta=!0,j=-Math.min(b.scrollTop,m*(1-Math.max(0,g-e.top)/40)|0)),j&&(b.scrollTop+=j)),Ba&&(k=b._gsMaxScrollX-b.scrollLeft,0>k?h=k:f>e.right-40&&k?(Ta=!0,h=Math.min(k,m*(1-Math.max(0,e.right-f)/40)|0)):f<e.left+40&&b.scrollLeft&&(Ta=!0,h=-Math.min(b.scrollLeft,m*(1-Math.max(0,f-e.left)/40)|0)),h&&(b.scrollLeft+=h)),c&&(h||j)&&(window.scrollTo(b.scrollLeft,b.scrollTop),gb(Ea.pointerX+h,Ea.pointerY+j)),l=b}if(ba){var n=Ea.x,o=Ea.y,p=1e-6;p>n&&n>-p&&(n=0),p>o&&o>-p&&(o=0),wa?(pa.data.rotation=Ea.rotation=n,pa.setRatio(1)):i?(Ca&&i.top(o),Ba&&i.left(n)):va?(Ca&&(pa.data.y=o),Ba&&(pa.data.x=n),pa.setRatio(1)):(Ca&&(d.style.top=o+"px"),Ba&&(d.style.left=n+"px")),!w||a||sa||(sa=!0,ha(Ea,"drag","onDrag"),sa=!1)}ba=!1},Xa=function(a,c){var e,f=Ea.x,g=Ea.y;d._gsTransform||!va&&!wa||b.set(d,{x:"+=0",overwrite:!1}),va?(Ea.y=d._gsTransform.y,Ea.x=d._gsTransform.x):wa?Ea.x=Ea.rotation=d._gsTransform.rotation:i?(Ea.y=i.top(),Ea.x=i.left()):(Ea.y=parseInt(d.style.top,10)||0,Ea.x=parseInt(d.style.left,10)||0),!da&&!ea||c||(da&&(e=da(Ea.x),e!==Ea.x&&(Ea.x=e,wa&&(Ea.rotation=e))),ea&&(e=ea(Ea.y),e!==Ea.y&&(Ea.y=e))),(f!==Ea.x||g!==Ea.y)&&Wa(!0),a||ha(Ea,"throwupdate","onThrowUpdate")},Ya=function(){var a,b,c,e;u=!1,i?(i.calibrate(),Ea.minX=F=-i.maxScrollLeft(),Ea.minY=N=-i.maxScrollTop(),Ea.maxX=C=Ea.maxY=J=0,u=!0):g.bounds&&(a=ia(g.bounds,d.parentNode),wa?(Ea.minX=F=a.left,Ea.maxX=C=a.left+a.width,Ea.minY=N=Ea.maxY=J=0):void 0!==g.bounds.maxX||void 0!==g.bounds.maxY?(a=g.bounds,Ea.minX=F=a.minX,Ea.minY=N=a.minY,Ea.maxX=C=a.maxX,Ea.maxY=J=a.maxY):(b=ia(d,d.parentNode),Ea.minX=F=ga(d,xa)+a.left-b.left,Ea.minY=N=ga(d,ya)+a.top-b.top,Ea.maxX=C=F+(a.width-b.width),Ea.maxY=J=N+(a.height-b.height)),F>C&&(Ea.minX=C,Ea.maxX=C=F,F=Ea.minX),N>J&&(Ea.minY=J,Ea.maxY=J=N,N=Ea.minY),wa&&(Ea.minRotation=F,Ea.maxRotation=C),u=!0),g.liveSnap&&(c=g.liveSnap===!0?g.snap||{}:g.liveSnap,e=c instanceof Array||"function"==typeof c,wa?(da=db(e?c:c.rotation,F,C,1),ea=null):(Ba&&(da=db(e?c:c.x||c.left||c.scrollLeft,F,C,i?-1:1)),Ca&&(ea=db(e?c:c.y||c.top||c.scrollTop,N,J,i?-1:1))))},Za=function(){Ea.isThrowing=!1,ha(Ea,"throwcomplete","onThrowComplete")},$a=function(){Ea.isThrowing=!1},_a=function(a,b){var c,e,h,j;a&&f?(a===!0&&(c=g.snap||{},e=c instanceof Array||"function"==typeof c,a={resistance:(g.throwResistance||g.resistance||1e3)/(wa?10:1)},wa?a.rotation=Ma(Ea,e?c:c.rotation,C,F,1,b):(Ba&&(a[xa]=Ma(Ea,e?c:c.x||c.left||c.scrollLeft,C,F,i?-1:1,b||"x"===Ea.lockedAxis)),Ca&&(a[ya]=Ma(Ea,e?c:c.y||c.top||c.scrollTop,J,N,i?-1:1,b||"y"===Ea.lockedAxis)))),Ea.isThrowing=!0,j=isNaN(g.overshootTolerance)?1===g.edgeResistance?0:1-Ea.edgeResistance+.2:g.overshootTolerance,Ea.tween=h=f.to(i||d,{throwProps:a,ease:g.ease||p.Power3.easeOut,onComplete:Za,onOverwrite:$a,onUpdate:g.fastMode?ha:Xa,onUpdateParams:g.fastMode?[Ea,"onthrowupdate","onThrowUpdate"]:v},isNaN(g.maxDuration)?2:g.maxDuration,isNaN(g.minDuration)?0===j?0:.5:g.minDuration,j),g.fastMode||(i&&(i._suspendTransforms=!0),h.render(h.duration(),!0,!0),Xa(!0,!0),Ea.endX=Ea.x,Ea.endY=Ea.y,wa&&(Ea.endRotation=Ea.x),h.play(0),Xa(!0,!0),i&&(i._suspendTransforms=!1))):u&&Ea.applyBounds()},ab=function(){var a,b,c,e,f,g,h,i,l,m=ka||[1,0,0,1,0,0];ka=za(d.parentNode,!0),Ea.isPressed&&m.join(",")!==ka.join(",")&&(a=m[0],b=m[1],c=m[2],e=m[3],f=m[4],g=m[5],h=a*e-b*c,i=j*(e/h)+k*(-c/h)+(c*g-e*f)/h,l=j*(-b/h)+k*(a/h)+-(a*g-b*f)/h,k=i*ka[1]+l*ka[3]+ka[5],j=i*ka[0]+l*ka[2]+ka[4]),ka[1]||ka[2]||1!=ka[0]||1!=ka[3]||0!=ka[4]||0!=ka[5]||(ka=null)},bb=function(){var a=1-Ea.edgeResistance;ab(),i?(Ya(),t=i.top(),q=i.left()):(cb()?(Xa(!0,!0),Ya()):Ea.applyBounds(),wa?(_=Aa(d,{x:0,y:0}),Xa(!0,!0),q=Ea.x,t=Ea.y=Math.atan2(_.y-k,j-_.x)*x):(na=d.parentNode?d.parentNode.scrollTop||0:0,oa=d.parentNode?d.parentNode.scrollLeft||0:0,t=ga(d,ya),q=ga(d,xa))),u&&a&&(q>C?q=C+(q-C)/a:F>q&&(q=F-(F-q)/a),wa||(t>J?t=J+(t-J)/a:N>t&&(t=N-(N-t)/a)))},cb=function(){return Ea.tween&&Ea.tween.isActive()},db=function(a,b,c,d){return"function"==typeof a?function(e){var f=Ea.isPressed?1-Ea.edgeResistance:1;return a.call(Ea,e>c?c+(e-c)*f:b>e?b+(e-b)*f:e)*d}:a instanceof Array?function(d){for(var e,f,g=a.length,h=0,i=y;--g>-1;)e=a[g],f=e-d,0>f&&(f=-f),i>f&&e>=b&&c>=e&&(h=g,i=f);return a[h]}:isNaN(a)?function(a){return a}:function(){return a*d}},eb=function(a){var c,e;if(h&&!Ea.isPressed&&a&&!("mousedown"===a.type&&z()-ma<30&&Ga[Ea.pointerEvent.type])){if(la=cb(),Ea.pointerEvent=a,Ga[a.type]?(ja=-1!==a.type.indexOf("touch")?a.currentTarget||a.target:r,Ha(ja,"touchend",hb),Ha(ja,"touchmove",fb),Ha(ja,"touchcancel",hb),Ha(r,"touchstart",La)):(ja=null,Ha(r,"mousemove",fb)),ra=null,Ha(r,"mouseup",hb),a&&a.target&&Ha(a.target,"mouseup",hb),fa=Ua.call(Ea,a.target)&&!g.dragClickables)return Ha(a.target,"change",hb),ha(Ea,"press","onPress"),void Oa(Ka,!0);if(qa=!ja||Ba===Ca||i||Ea.vars.allowNativeTouchScrolling===!1?!1:Ba?"y":"x",A?a=Z(a,!0):qa||Ea.allowEventDefault||(a.preventDefault(),a.preventManipulation&&a.preventManipulation()),a.changedTouches?(a=T=a.changedTouches[0],X=a.identifier):a.pointerId?X=a.pointerId:T=X=null,G++,O(Wa),k=Ea.pointerY=a.pageY,j=Ea.pointerX=a.pageX,(qa||Ea.autoScroll)&&Y(d.parentNode),!Ea.autoScroll||wa||i||!d.parentNode||d.getBBox||!d.parentNode._gsMaxScrollX||B.parentNode||(B.style.width=d.parentNode.scrollWidth+"px",d.parentNode.appendChild(B)),bb(),ka&&(c=j*ka[0]+k*ka[2]+ka[4],k=j*ka[1]+k*ka[3]+ka[5],j=c),Ea.tween&&Ea.tween.kill(),Ea.isThrowing=!1,b.killTweensOf(i||d,!0,Pa),i&&b.killTweensOf(d,!0,{scrollTo:1}),Ea.tween=Ea.lockedAxis=null,(g.zIndexBoost||!wa&&!i&&g.zIndexBoost!==!1)&&(d.style.zIndex=Ra.zIndex++),Ea.isPressed=!0,w=!(!g.onDrag&&!Ea._listeners.drag),!wa)for(e=Ka.length;--e>-1;)aa(Ka[e],"cursor",g.cursor||"move");ha(Ea,"press","onPress")}},fb=function(a){var b,c,d,f,g=a;if(h&&!e&&Ea.isPressed&&a){if(Ea.pointerEvent=a,b=a.changedTouches){if(a=b[0],a!==T&&a.identifier!==X){for(f=b.length;--f>-1&&(a=b[f]).identifier!==X;);if(0>f)return}}else if(a.pointerId&&X&&a.pointerId!==X)return;if(A)a=Z(a,!0);else{if(ja&&qa&&!ra&&(c=a.pageX,d=a.pageY,ka&&(f=c*ka[0]+d*ka[2]+ka[4],d=c*ka[1]+d*ka[3]+ka[5],c=f),ra=Math.abs(c-j)>Math.abs(d-k)&&Ba?"x":"y",Ea.vars.lockAxisOnTouchScroll!==!1&&(Ea.lockedAxis="x"===ra?"y":"x","function"==typeof Ea.vars.onLockAxis&&Ea.vars.onLockAxis.call(Ea,g)),H&&qa===ra))return void hb(g);Ea.allowEventDefault||qa&&(!ra||qa===ra)||g.cancelable===!1||(g.preventDefault(),g.preventManipulation&&g.preventManipulation())}Ea.autoScroll&&(Ta=!0),gb(a.pageX,a.pageY)}},gb=function(a,b){var c,d,e,f,g,h,i=1-Ea.dragResistance,l=1-Ea.edgeResistance;Ea.pointerX=a,Ea.pointerY=b,wa?(f=Math.atan2(_.y-b,a-_.x)*x,g=Ea.y-f,Ea.y=f,g>180?t-=360:-180>g&&(t+=360),e=q+(t-f)*i):(ka&&(h=a*ka[0]+b*ka[2]+ka[4],b=a*ka[1]+b*ka[3]+ka[5],a=h),d=b-k,c=a-j,Da>d&&d>-Da&&(d=0),Da>c&&c>-Da&&(c=0),(Ea.lockAxis||Ea.lockedAxis)&&(c||d)&&(h=Ea.lockedAxis,h||(Ea.lockedAxis=h=Ba&&Math.abs(c)>Math.abs(d)?"y":Ca?"x":null,h&&"function"==typeof Ea.vars.onLockAxis&&Ea.vars.onLockAxis.call(Ea,Ea.pointerEvent)),"y"===h?d=0:"x"===h&&(c=0)),e=q+c*i,f=t+d*i),da||ea?(da&&(e=da(e)),ea&&(f=ea(f))):u&&(e>C?e=C+(e-C)*l:F>e&&(e=F+(e-F)*l),wa||(f>J?f=J+(f-J)*l:N>f&&(f=N+(f-N)*l))),wa||(e=Math.round(e),f=Math.round(f)),(Ea.x!==e||Ea.y!==f&&!wa)&&(wa?Ea.endRotation=Ea.x=Ea.endX=e:(Ca&&(Ea.y=Ea.endY=f),Ba&&(Ea.x=Ea.endX=e)),ba=!0,!Ea.isDragging&&Ea.isPressed&&(Ea.isDragging=!0,ha(Ea,"dragstart","onDragStart")))},hb=function(a,c){if(h&&Ea.isPressed&&(!a||null==X||c||!(a.pointerId&&a.pointerId!==X||a.changedTouches&&!Ja(a.changedTouches,X)))){Ea.isPressed=!1;var e,f,i,j,k=a,l=Ea.isDragging;if(ja?(Ia(ja,"touchend",hb),Ia(ja,"touchmove",fb),Ia(ja,"touchcancel",hb),Ia(r,"touchstart",La)):Ia(r,"mousemove",fb),Ia(r,"mouseup",hb),a&&a.target&&Ia(a.target,"mouseup",hb),ba=!1,B.parentNode&&B.parentNode.removeChild(B),fa)return a&&Ia(a.target,"change",hb),Oa(Ka,!1),ha(Ea,"release","onRelease"),ha(Ea,"click","onClick"),void(fa=!1);if(P(Wa),!wa)for(f=Ka.length;--f>-1;)aa(Ka[f],"cursor",g.cursor||"move");if(l&&(Sa=I=z(),Ea.isDragging=!1),G--,a){if(A&&(a=Z(a,!1)),e=a.changedTouches,e&&(a=e[0],a!==T&&a.identifier!==X)){for(f=e.length;--f>-1&&(a=e[f]).identifier!==X;);if(0>f)return}Ea.pointerEvent=k,Ea.pointerX=a.pageX,Ea.pointerY=a.pageY}return k&&!l?(la&&(g.snap||g.bounds)&&_a(g.throwProps),ha(Ea,"release","onRelease"),H&&"touchmove"===k.type||(ha(Ea,"click","onClick"),j=k.target||k.srcElement||d,ma=z(),b.delayedCall(1e-5,function(){ma!==ta&&Ea.enabled()&&!Ea.isPressed&&(j.click?j.click():r.createEvent&&(i=r.createEvent("MouseEvents"),i.initMouseEvent("click",!0,!0,window,1,Ea.pointerEvent.screenX,Ea.pointerEvent.screenY,Ea.pointerX,Ea.pointerY,!1,!1,!1,!1,0,null),j.dispatchEvent(i)))}))):(_a(g.throwProps),A||Ea.allowEventDefault||!k||!g.dragClickables&&Ua.call(Ea,k.target)||!l||qa&&(!ra||qa!==ra)||k.cancelable===!1||(k.preventDefault(),k.preventManipulation&&k.preventManipulation()),ha(Ea,"release","onRelease")),l&&ha(Ea,"dragend","onDragEnd"),!0}},ib=function(a){if(a&&Ea.isDragging){var b=a.target||a.srcElement||d.parentNode,c=b.scrollLeft-b._gsScrollX,e=b.scrollTop-b._gsScrollY;(c||e)&&(j-=c,k-=e,b._gsScrollX+=c,b._gsScrollY+=e,gb(Ea.pointerX,Ea.pointerY))}},jb=function(a){var b=z(),c=40>b-ma,d=40>b-Sa;return c&&ta!==ma?void(ta=ma):void((Ea.isPressed||d||c)&&(a.preventDefault?(a.preventDefault(),(c||d&&Ea.vars.suppressClickOnDrag!==!1)&&a.stopImmediatePropagation()):a.returnValue=!1,a.preventManipulation&&a.preventManipulation()))};ca=Ra.get(this.target),ca&&ca.kill(),this.startDrag=function(a){eb(a),Ea.isDragging||(Ea.isDragging=!0,ha(Ea,"dragstart","onDragStart"))},this.drag=fb,this.endDrag=function(a){hb(a,!0)},this.timeSinceDrag=function(){return Ea.isDragging?0:(z()-Sa)/1e3},this.hitTest=function(a,b){return Ra.hitTest(Ea.target,a,b)},this.getDirection=function(a,b){var c,d,e,g,h,i,j="velocity"===a&&f?a:"object"!=typeof a||wa?"start":"element";return"element"===j&&(h=Va(Ea.target),i=Va(a)),c="start"===j?Ea.x-q:"velocity"===j?f.getVelocity(this.target,xa):h.left+h.width/2-(i.left+i.width/2),wa?0>c?"counter-clockwise":"clockwise":(b=b||2,d="start"===j?Ea.y-t:"velocity"===j?f.getVelocity(this.target,ya):h.top+h.height/2-(i.top+i.height/2),e=Math.abs(c/d),g=1/b>e?"":0>c?"left":"right",b>e&&(""!==g&&(g+="-"),g+=0>d?"up":"down"),g)},this.applyBounds=function(a){var b,c,d;return a&&g.bounds!==a?(g.bounds=a,Ea.update(!0)):(Xa(!0),Ya(),u&&(b=Ea.x,c=Ea.y,u&&(b>C?b=C:F>b&&(b=F),c>J?c=J:N>c&&(c=N)),(Ea.x!==b||Ea.y!==c)&&(d=!0,Ea.x=Ea.endX=b,wa?Ea.endRotation=b:Ea.y=Ea.endY=c,ba=!0,Wa()),Ea.isThrowing&&(d||Ea.endX>C||Ea.endX<F||Ea.endY>J||Ea.endY<N)&&_a(g.throwProps,d)),Ea)},this.update=function(a,b){var c=Ea.x,e=Ea.y;return ab(),a?Ea.applyBounds():(ba&&b&&Wa(),Xa(!0)),Ea.isPressed&&(Ba&&Math.abs(c-Ea.x)>.01||Ca&&Math.abs(e-Ea.y)>.01&&!wa)&&bb(),Ea.autoScroll&&(Y(d.parentNode),Ta=!0,Wa()),Ea},this.enable=function(a){var e,j,k;if("soft"!==a){for(j=Ka.length;--j>-1;)k=Ka[j],Ha(k,"mousedown",eb),Ha(k,"touchstart",eb),Ha(k,"click",jb,!0),wa||aa(k,"cursor",g.cursor||"move"),aa(k,"touchCallout","none"),aa(k,"touchAction",Ba===Ca||i?"none":Ba?"pan-y":"pan-x");Oa(Ka,!1)}return U(Ea.target,ib),h=!0,f&&"soft"!==a&&f.track(i||d,va?"x,y":wa?"rotation":"top,left"),i&&i.enable(),d._gsDragID=e="d"+E++,D[e]=this,i&&(i.element._gsDragID=e),b.set(d,{x:"+=0",overwrite:!1}),pa={t:d,data:A?S:d._gsTransform,tween:{},setRatio:A?function(){b.set(d,Q)}:c._internals.setTransformRatio||c._internals.set3DTransformRatio},Ea.update(!0),Ea},this.disable=function(a){var b,c,e=Ea.isDragging;if(!wa)for(b=Ka.length;--b>-1;)aa(Ka[b],"cursor",null);if("soft"!==a){for(b=Ka.length;--b>-1;)c=Ka[b],aa(c,"touchCallout",null),aa(c,"touchAction",null),Ia(c,"mousedown",eb),Ia(c,"touchstart",eb),Ia(c,"click",jb);Oa(Ka,!0),ja&&(Ia(ja,"touchcancel",hb),Ia(ja,"touchend",hb),Ia(ja,"touchmove",fb)),Ia(r,"mouseup",hb),Ia(r,"mousemove",fb)}return V(d,ib),h=!1,f&&"soft"!==a&&f.untrack(i||d,va?"x,y":wa?"rotation":"top,left"),i&&i.disable(),P(Wa),Ea.isDragging=Ea.isPressed=fa=!1,e&&ha(Ea,"dragend","onDragEnd"),Ea},this.enabled=function(a,b){return arguments.length?a?Ea.enable(b):Ea.disable(b):h},this.kill=function(){return Ea.isThrowing=!1,b.killTweensOf(i||d,!0,Pa),Ea.disable(),delete D[d._gsDragID],Ea},-1!==ua.indexOf("scroll")&&(i=this.scrollProxy=new Qa(d,R({onKill:function(){Ea.isPressed&&hb(null)}},g)),d.style.overflowY=Ca&&!Fa?"auto":"hidden",d.style.overflowX=Ba&&!Fa?"auto":"hidden",d=i.content),g.force3D!==!1&&b.set(d,{force3D:!0}),wa?Pa.rotation=1:(Ba&&(Pa[xa]=1),Ca&&(Pa[ya]=1)),wa?(Q=o,S=Q.css,Q.overwrite=!1):va&&(Q=Ba&&Ca?l:Ba?m:n,S=Q.css,Q.overwrite=!1),this.enable()},Sa=Ra.prototype=new a;Sa.constructor=Ra,Sa.pointerX=Sa.pointerY=0,Sa.isDragging=Sa.isPressed=!1,Ra.version="0.14.3",Ra.zIndex=1e3,Ha(r,"touchcancel",function(){}),Ha(r,"contextmenu",function(a){var b;for(b in D)D[b].isPressed&&D[b].endDrag();
}),Ra.create=function(a,c){"string"==typeof a&&(a=b.selector(a));for(var d=a&&0!==a.length?Da(a)?Ea(a):[a]:[],e=d.length;--e>-1;)d[e]=new Ra(d[e],c);return d},Ra.get=function(a){return D[($(a)||{})._gsDragID]},Ra.timeSinceDrag=function(){return(z()-I)/1e3};var Ta={},Ua=function(a){var b,c,d=0,e=0;for(a=$(a),b=a.offsetWidth,c=a.offsetHeight;a;)d+=a.offsetTop,e+=a.offsetLeft,a=a.offsetParent;return{top:d,left:e,width:b,height:c}},Va=function(a,b){if(a===window)return Ta.left=Ta.top=0,Ta.width=Ta.right=s.clientWidth||a.innerWidth||r.body.clientWidth||0,Ta.height=Ta.bottom=(a.innerHeight||0)-20<s.clientHeight?s.clientHeight:a.innerHeight||r.body.clientHeight||0,Ta;var c=a.pageX!==b?{left:a.pageX-T(),top:a.pageY-S(),right:a.pageX-T()+1,bottom:a.pageY-S()+1}:a.nodeType||a.left===b||a.top===b?A?Ua(a):$(a).getBoundingClientRect():a;return c.right===b&&c.width!==b?(c.right=c.left+c.width,c.bottom=c.top+c.height):c.width===b&&(c={width:c.right-c.left,height:c.bottom-c.top,right:c.right,left:c.left,bottom:c.bottom,top:c.top}),c};return Ra.hitTest=function(a,b,c){if(a===b)return!1;var d,e,f,g=Va(a),h=Va(b),i=h.left>g.right||h.right<g.left||h.top>g.bottom||h.bottom<g.top;return i||!c?!i:(f=-1!==(c+"").indexOf("%"),c=parseFloat(c)||0,d={left:Math.max(g.left,h.left),top:Math.max(g.top,h.top)},d.width=Math.min(g.right,h.right)-d.left,d.height=Math.min(g.bottom,h.bottom)-d.top,d.width<0||d.height<0?!1:f?(c*=.01,e=d.width*d.height,e>=g.width*g.height*c||e>=h.width*h.height*c):d.width>c&&d.height>c)},B.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;",Ra},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define(["TweenLite"],b):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),require("../plugins/CSSPlugin.js"),module.exports=b())}("Draggable");



Draggable.bringToFront = function (a){
 if(!a || a.length == 0) return;
 // check if already top most
 var isEqual = true;
 var r = 0;
 for(var i = a.length-1; i >= 0; i--){
  var c = a[i].css("z-index");
  if(Draggable.zIndex-1-r != c) {isEqual = false; break; }
  r++;
 } 
 if(isEqual) return;
 for(var i = 0; i < a.length; i++) a[i].css("z-index",Draggable.zIndex++);
};

Draggable.zIndexNeg = 0;

Draggable.sendToBack = function (a){
 if(!a || a.length == 0) return;
 // check if already back most
 var isEqual = true;
 var r = 0;
 for(var i = a.length-1; i >= 0; i--){
  var c = a[i].css("z-index");  
  if(Draggable.zIndexNeg-1-r != -c) {isEqual = false; break; }
  r++;
 } 
 if(isEqual) return;
 for(var i = 0; i < a.length; i++) a[i].css("z-index",-(Draggable.zIndexNeg++));
}
/*!
 * Bootstrap v3.1.1 (http://getbootstrap.com)
 * Copyright 2011-2014 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]};return!1}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.isLoading=!1};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",f.resetText||d.data("resetText",d[e]()),d[e](f[b]||this.options[b]),setTimeout(a.proxy(function(){"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c))},this),0)},b.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?a=!1:b.find(".active").removeClass("active")),a&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}a&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}if(e.hasClass("active"))return this.sliding=!1;var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});return this.$element.trigger(j),j.isDefaultPrevented()?void 0:(this.sliding=!0,f&&this.pause(),this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")?(e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(1e3*d.css("transition-duration").slice(0,-1))):(d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")),f&&this.cycle(),this)};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("collapse in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?void this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);!e&&f.toggle&&"show"==c&&(c=!c),e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(b){a(d).remove(),a(e).each(function(){var d=c(a(this)),e={relatedTarget:this};d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown",e)),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown",e))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){"ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown",h),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=" li:not(.divider):visible a",i=f.find("[role=menu]"+h+", [role=listbox]"+h);if(i.length){var j=i.index(i.filter(":focus"));38==b.keyCode&&j>0&&j--,40==b.keyCode&&j<i.length-1&&j++,~j||(j=0),i.eq(j).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu], [role=listbox]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show().scrollTop(0),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());c.is("a")&&b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show)):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide)):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this,d=this.tip();this.setContent(),this.options.animation&&d.addClass("fade");var e="function"==typeof this.options.placement?this.options.placement.call(this,d[0],this.$element[0]):this.options.placement,f=/\s?auto?\s?/i,g=f.test(e);g&&(e=e.replace(f,"")||"top"),d.detach().css({top:0,left:0,display:"block"}).addClass(e),this.options.container?d.appendTo(this.options.container):d.insertAfter(this.$element);var h=this.getPosition(),i=d[0].offsetWidth,j=d[0].offsetHeight;if(g){var k=this.$element.parent(),l=e,m=document.documentElement.scrollTop||document.body.scrollTop,n="body"==this.options.container?window.innerWidth:k.outerWidth(),o="body"==this.options.container?window.innerHeight:k.outerHeight(),p="body"==this.options.container?0:k.offset().left;e="bottom"==e&&h.top+h.height+j-m>o?"top":"top"==e&&h.top-m-j<0?"bottom":"right"==e&&h.right+i>n?"left":"left"==e&&h.left-i<p?"right":e,d.removeClass(l).addClass(e)}var q=this.getCalculatedOffset(e,h,i,j);this.applyPlacement(q,e),this.hoverState=null;var r=function(){c.$element.trigger("shown.bs."+c.type)};a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,r).emulateTransitionEnd(150):r()}},b.prototype.applyPlacement=function(b,c){var d,e=this.tip(),f=e[0].offsetWidth,g=e[0].offsetHeight,h=parseInt(e.css("margin-top"),10),i=parseInt(e.css("margin-left"),10);isNaN(h)&&(h=0),isNaN(i)&&(i=0),b.top=b.top+h,b.left=b.left+i,a.offset.setOffset(e[0],a.extend({using:function(a){e.css({top:Math.round(a.top),left:Math.round(a.left)})}},b),0),e.addClass("in");var j=e[0].offsetWidth,k=e[0].offsetHeight;if("top"==c&&k!=g&&(d=!0,b.top=b.top+g-k),/bottom|top/.test(c)){var l=0;b.left<0&&(l=-2*b.left,b.left=0,e.offset(b),j=e[0].offsetWidth,k=e[0].offsetHeight),this.replaceArrow(l-f+j,j,"left")}else this.replaceArrow(k-g,k,"top");d&&e.offset(b)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach(),c.$element.trigger("hidden.bs."+c.type)}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.hoverState=null,this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){clearTimeout(this.timeout),this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;(e||"destroy"!=c)&&(e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]())})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(a(c).is("body")?window:c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);{var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})}},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);if(g&&b<=e[0])return g!=(a=f[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=this.pinnedOffset=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(b.RESET).addClass("affix");var a=this.$window.scrollTop(),c=this.$element.offset();return this.pinnedOffset=c.top-a},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"top"==this.affixed&&(e.top+=d),"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top(this.$element)),"function"==typeof h&&(h=f.bottom(this.$element));var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;if(this.affixed!==i){this.unpin&&this.$element.css("top","");var j="affix"+(i?"-"+i:""),k=a.Event(j+".bs.affix");this.$element.trigger(k),k.isDefaultPrevented()||(this.affixed=i,this.unpin="bottom"==i?this.getPinnedOffset():null,this.$element.removeClass(b.RESET).addClass(j).trigger(a.Event(j.replace("affix","affixed"))),"bottom"==i&&this.$element.offset({top:c-h-this.$element.height()}))}}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);///////////////////////////////////////////////////////////////////////////////
// modal dialog for lightboxes, delete after close
///////////////////////////////////////////////////////////////////////////////
function createModalDialogFrame (html,onshow,onhide){
 var d =
  $('<div class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">'+
    ' <div class="modal-dialog modal-lg">'+
    '  <div class="modal-content">'+ 
    '   <div class="modal-body">'+
    '    <button class="close" data-dismiss="modal">&times;</button>'+
    '    <div class="innerModalContent" style="text-align:center;margin-bottom:20px"></div>'+
    '   </div>'+      
    '  </div>'+
    ' </div>'+
    '</div>');

 $(".innerModalContent",d).html(html);
 if(onshow) d.on('show.bs.modal',function(e){setTimeout(function(){
  onshow(e);
 },200);} );
 if(onhide) d.on('hidden.bs.modal',onhide);
 d.on('hidden.bs.modal', function(){ d.remove(); });

 $("body").append(d);
 return d;
}

/**
 * textFit v2.3.1
 * Previously known as jQuery.textFit
 * 11/2014 by STRML (strml.github.com)
 * MIT License
 *
 * To use: textFit(document.getElementById('target-div'), options);
 *
 * Will make the *text* content inside a container scale to fit the container
 * The container is required to have a set width and height
 * Uses binary search to fit text with minimal layout calls.
 * Version 2.0 does not use jQuery.
 */
/*global define:true, document:true, window:true, HTMLElement:true*/

(function(root, factory) {
  "use strict";

  // UMD shim
  if (typeof define === "function" && define.amd) {
    // AMD
    define([], factory);
  } else if (typeof exports === "object") {
    // Node/CommonJS
    module.exports = factory();
  } else {
    // Browser
    root.textFit = factory();
  }

}(typeof global === "object" ? global : this, function () {
  "use strict";

  var defaultSettings = {
    alignVert: false, // if true, textFit will align vertically using css tables
    alignHoriz: false, // if true, textFit will set text-align: center
    multiLine: false, // if true, textFit will not set white-space: no-wrap
    detectMultiLine: true, // disable to turn off automatic multi-line sensing
    minFontSize: 6,
    maxFontSize: 80,
    reProcess: true, // if true, textFit will re-process already-fit nodes. Set to 'false' for better performance
    widthOnly: false, // if true, textFit will fit text to element width, regardless of text height
    alignVertWithFlexbox: false, // if true, textFit will use flexbox for vertical alignment
  };

  return function textFit(els, options) {

    if (!options) options = {};

    // Extend options.
    var settings = {};
    for(var key in defaultSettings){
      if(options.hasOwnProperty(key)){
        settings[key] = options[key];
      } else {
        settings[key] = defaultSettings[key];
      }
    }

    // Convert jQuery objects into arrays
    if (typeof els.toArray === "function") {
      els = els.toArray();
    }

    // Support passing a single el
    var elType = Object.prototype.toString.call(els);
    if (elType !== '[object Array]' && elType !== '[object NodeList]' &&
            elType !== '[object HTMLCollection]'){
      els = [els];
    }

    // Process each el we've passed.
    for(var i = 0; i < els.length; i++){
      processItem(els[i], settings);
    }
  };

  /**
   * The meat. Given an el, make the text inside it fit its parent.
   * @param  {DOMElement} el       Child el.
   * @param  {Object} settings     Options for fit.
   */
  function processItem(el, settings){
    if (!isElement(el) || (!settings.reProcess && el.getAttribute('textFitted'))) {
      return false;
    }

    // Set textFitted attribute so we know this was processed.
    if(!settings.reProcess){
      el.setAttribute('textFitted', 1);
    }

    var innerSpan, originalHeight, originalHTML, originalWidth;
    var low, mid, high;

    // Get element data.
    originalHTML = el.innerHTML;
    originalWidth = innerWidth(el);
    originalHeight = innerHeight(el);

    // Don't process if we can't find box dimensions
    if (!originalWidth || (!settings.widthOnly && !originalHeight)) {
      if(!settings.widthOnly)
        throw new Error('Set a static height and width on the target element ' + el.outerHTML +
          ' before using textFit!');
      else
        throw new Error('Set a static width on the target element ' + el.outerHTML +
          ' before using textFit!');
    }

    // Add textFitted span inside this container.
    if (originalHTML.indexOf('textFitted') === -1) {
      innerSpan = document.createElement('span');
      innerSpan.className = 'textFitted';
      // Inline block ensure it takes on the size of its contents, even if they are enclosed
      // in other tags like <p>
      innerSpan.style['display'] = 'inline-block';
      innerSpan.innerHTML = originalHTML;
      el.innerHTML = '';
      el.appendChild(innerSpan);
    } else {
      // Reprocessing.
      innerSpan = el.querySelector('span.textFitted');
      // Remove vertical align if we're reprocessing.
      if (hasClass(innerSpan, 'textFitAlignVert')){
        innerSpan.className = innerSpan.className.replace('textFitAlignVert', '');
        innerSpan.style['height'] = '';
        el.className.replace('textFitAlignVertFlex', '');
      }
    }

    // Prepare & set alignment
    if (settings.alignHoriz) {
      el.style['text-align'] = 'center';
      innerSpan.style['text-align'] = 'center';
    }

    // Check if this string is multiple lines
    // Not guaranteed to always work if you use wonky line-heights
    var multiLine = settings.multiLine;
    if (settings.detectMultiLine && !multiLine &&
        innerSpan.getBoundingClientRect().height >= parseInt(window.getComputedStyle(innerSpan)['font-size'], 10) * 2){
      multiLine = true;
    }

    // If we're not treating this as a multiline string, don't let it wrap.
    if (!multiLine) {
      el.style['white-space'] = 'nowrap';
    }

    low = settings.minFontSize;
    high = settings.maxFontSize;

    // Binary search for highest best fit
    var size = low;
    while (low <= high) {
      mid = (high + low) >> 1;
      innerSpan.style.fontSize = mid + 'px';
      var innerSpanBoundingClientRect = innerSpan.getBoundingClientRect();
      if (
        innerSpanBoundingClientRect.width <= originalWidth 
        && (settings.widthOnly || innerSpanBoundingClientRect.height <= originalHeight)
      ) {
        size = mid;
        low = mid + 1;
      } else {
        high = mid - 1;
      }
      // await injection point
    }
    // found, updating font if differs:
    if( innerSpan.style.fontSize != size + 'px' ) innerSpan.style.fontSize = size + 'px';

    // Our height is finalized. If we are aligning vertically, set that up.
    if (settings.alignVert) {
      addStyleSheet();
      var height = innerSpan.scrollHeight;
      if (window.getComputedStyle(el)['position'] === "static"){
        el.style['position'] = 'relative';
      }
      if (!hasClass(innerSpan, "textFitAlignVert")){
        innerSpan.className = innerSpan.className + " textFitAlignVert";
      }
      innerSpan.style['height'] = height + "px";
      if (settings.alignVertWithFlexbox && !hasClass(el, "textFitAlignVertFlex")) {
        el.className = el.className + " textFitAlignVertFlex";
      }
    }
  }

  // Calculate height without padding.
  function innerHeight(el){
    var style = window.getComputedStyle(el, null);
    return el.getBoundingClientRect().height -
      parseInt(style.getPropertyValue('padding-top'), 10) -
      parseInt(style.getPropertyValue('padding-bottom'), 10);
  }

  // Calculate width without padding.
  function innerWidth(el){
    var style = window.getComputedStyle(el, null);
    return el.getBoundingClientRect().width -
      parseInt(style.getPropertyValue('padding-left'), 10) -
      parseInt(style.getPropertyValue('padding-right'), 10);
  }

  //Returns true if it is a DOM element
  function isElement(o){
    return (
      typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
      o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
    );
  }

  function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
  }

  // Better than a stylesheet dependency
  function addStyleSheet() {
    if (document.getElementById("textFitStyleSheet")) return;
    var style = [
      ".textFitAlignVert{",
        "position: absolute;",
        "top: 0; right: 0; bottom: 0; left: 0;",
        "margin: auto;",
        "display: flex;",
        "justify-content: center;",
        "flex-direction: column;",
      "}",
      ".textFitAlignVertFlex{",
        "display: flex;",
      "}",
      ".textFitAlignVertFlex .textFitAlignVert{",
        "position: static;",
      "}",].join("");

    var css = document.createElement("style");
    css.type = "text/css";
    css.id = "textFitStyleSheet";
    css.innerHTML = style;
    document.body.appendChild(css);
  }
}));

loadCSS ('https://learningapps.org/frameworks/bootstrap.css');


/* mobile Orientation change */
var mobileOrientationChangeTouchStartHandlerFired = false;
$(function(){
 if(window.parent){
  $("body").on ("touchstart", function(e){
   try{
     if(mobileOrientationChangeTouchStartHandlerFired) return;
     mobileOrientationChangeTouchStartHandlerFired = true;
     var w = screen.width;
     var h = screen.height;
     if(/iPhone|iPad|iPod/.test(navigator.platform))
      if(window.parent.orientation != 0 && window.parent.orientation != 180) {w = screen.height; h = screen.width;}

     if(h > w){
      var s = Math.min(1,Math.round((w/500)*100)/100);
      s = s-0.01;
      $("meta[name=viewport]",window.parent.document).attr("content",
        "user-scalable=1, width=500, minimum-scale=0.25, maximum-scale=3.0, initial-scale="+s);
     }else{
      var s = Math.min(1,Math.round((w/900)*100)/100);
      s = s-0.01;
      $("meta[name=viewport]",window.parent.document).attr("content",
        "user-scalable=1, width=900, minimum-scale=0.25, maximum-scale=3.0, initial-scale="+s);
     } 
   }catch(e){}
  });
 }
 try{
   $(window.parent).on("orientationchange", function(event){
    try{
     mobileOrientationChangeTouchStartHandlerFired = false;
     var w = screen.width;
     var h = screen.height;
     if(/iPhone|iPad|iPod/.test(navigator.platform) && window.parent)
      if(window.parent.orientation != 0 && window.parent.orientation != 180) {w = screen.height; h = screen.width;}

     if(h > w){
      var s = Math.min(1,Math.round((w/500)*100)/100);
      $("meta[name=viewport]",window.parent.document).attr("content",
        "width=500, minimum-scale="+s+", maximum-scale="+s+", initial-scale="+s+", user-scalable=0");
     } else {
      var s = Math.min(1,Math.round((w/900)*100)/100);
      $("meta[name=viewport]",window.parent.document).attr("content",
        "width=900, minimum-scale="+s+", maximum-scale="+s+", initial-scale="+s+", user-scalable=0");
     }
    }catch(e){}
   }); 
   $(window.parent).trigger("orientationchange");
   $(window).trigger("resize");
 }catch(e){};
});


/**
*
*  MD5 (Message-Digest Algorithm)
*  http://www.webtoolkit.info/
*
**/
 
function MD5 (string) {
 
	function RotateLeft(lValue, iShiftBits) {
		return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
	}
 
	function AddUnsigned(lX,lY) {
		var lX4,lY4,lX8,lY8,lResult;
		lX8 = (lX & 0x80000000);
		lY8 = (lY & 0x80000000);
		lX4 = (lX & 0x40000000);
		lY4 = (lY & 0x40000000);
		lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
		if (lX4 & lY4) {
			return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
		}
		if (lX4 | lY4) {
			if (lResult & 0x40000000) {
				return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
			} else {
				return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
			}
		} else {
			return (lResult ^ lX8 ^ lY8);
		}
 	}
 
 	function F(x,y,z) { return (x & y) | ((~x) & z); }
 	function G(x,y,z) { return (x & z) | (y & (~z)); }
 	function H(x,y,z) { return (x ^ y ^ z); }
	function I(x,y,z) { return (y ^ (x | (~z))); }
 
	function FF(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};
 
	function GG(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};
 
	function HH(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};
 
	function II(a,b,c,d,x,s,ac) {
		a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
		return AddUnsigned(RotateLeft(a, s), b);
	};
 
	function ConvertToWordArray(string) {
		var lWordCount;
		var lMessageLength = string.length;
		var lNumberOfWords_temp1=lMessageLength + 8;
		var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
		var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
		var lWordArray=Array(lNumberOfWords-1);
		var lBytePosition = 0;
		var lByteCount = 0;
		while ( lByteCount < lMessageLength ) {
			lWordCount = (lByteCount-(lByteCount % 4))/4;
			lBytePosition = (lByteCount % 4)*8;
			lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
			lByteCount++;
		}
		lWordCount = (lByteCount-(lByteCount % 4))/4;
		lBytePosition = (lByteCount % 4)*8;
		lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
		lWordArray[lNumberOfWords-2] = lMessageLength<<3;
		lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
		return lWordArray;
	};
 
	function WordToHex(lValue) {
		var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
		for (lCount = 0;lCount<=3;lCount++) {
			lByte = (lValue>>>(lCount*8)) & 255;
			WordToHexValue_temp = "0" + lByte.toString(16);
			WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
		}
		return WordToHexValue;
	};
 
	function Utf8Encode(string) {
		string = string.replace(/\r\n/g,"\n");
		var utftext = "";
 
		for (var n = 0; n < string.length; n++) {
 
			var c = string.charCodeAt(n);
 
			if (c < 128) {
				utftext += String.fromCharCode(c);
			}
			else if((c > 127) && (c < 2048)) {
				utftext += String.fromCharCode((c >> 6) | 192);
				utftext += String.fromCharCode((c & 63) | 128);
			}
			else {
				utftext += String.fromCharCode((c >> 12) | 224);
				utftext += String.fromCharCode(((c >> 6) & 63) | 128);
				utftext += String.fromCharCode((c & 63) | 128);
			}
 
		}
 
		return utftext;
	};
 
	var x=Array();
	var k,AA,BB,CC,DD,a,b,c,d;
	var S11=7, S12=12, S13=17, S14=22;
	var S21=5, S22=9 , S23=14, S24=20;
	var S31=4, S32=11, S33=16, S34=23;
	var S41=6, S42=10, S43=15, S44=21;
 
	string = Utf8Encode(string);
 
	x = ConvertToWordArray(string);
 
	a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
 
	for (k=0;k<x.length;k+=16) {
		AA=a; BB=b; CC=c; DD=d;
		a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
		d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
		c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
		b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
		a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
		d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
		c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
		b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
		a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
		d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
		c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
		b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
		a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
		d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
		c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
		b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
		a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
		d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
		c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
		b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
		a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
		d=GG(d,a,b,c,x[k+10],S22,0x2441453);
		c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
		b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
		a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
		d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
		c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
		b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
		a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
		d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
		c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
		b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
		a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
		d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
		c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
		b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
		a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
		d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
		c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
		b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
		a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
		d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
		c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
		b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
		a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
		d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
		c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
		b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
		a=II(a,b,c,d,x[k+0], S41,0xF4292244);
		d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
		c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
		b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
		a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
		d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
		c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
		b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
		a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
		d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
		c=II(c,d,a,b,x[k+6], S43,0xA3014314);
		b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
		a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
		d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
		c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
		b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
		a=AddUnsigned(a,AA);
		b=AddUnsigned(b,BB);
		c=AddUnsigned(c,CC);
		d=AddUnsigned(d,DD);
	}
 
	var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);
 
	return temp.toLowerCase();
}
function md5(str) {return MD5(str);}
/* *******************************************
// Copyright 2010-2011, Anthony Hand
//
// File version date: August 22, 2011
//              Update: 
//              - Updated DetectAndroidTablet() to fix a bug introduced in the last fix! The true/false returns were mixed up. 
//
// File version date: August 16, 2011
//              Update: 
//              - Updated DetectAndroidTablet() to exclude Opera Mini, which was falsely reporting as running on a tablet device when on a phone.
//              - Updated the user agent (uagent) init technique to handle spiders and such with null values.
//
// File version date: August 7, 2011
//              Update: 
//              - The Opera for Android browser doesn't follow Google's recommended useragent string guidelines, so some fixes were needed.
//              - Updated DetectAndroidPhone() and DetectAndroidTablet() to properly detect devices running Opera Mobile.
//              - Created 2 new methods: DetectOperaAndroidPhone() and DetectOperaAndroidTablet(). 
//              - Updated DetectTierIphone(). Removed the call to DetectMaemoTablet(), an obsolete mobile OS.
//
// File version date: July 15, 2011
//              Update: 
//              - Refactored the variable called maemoTablet. Its new name is the more generic deviceTablet.
//              - Created the variable deviceWebOShp for HP's line of WebOS devices starting with the TouchPad tablet.
//              - Created the DetectWebOSTablet() method for HP's line of WebOS tablets starting with the TouchPad tablet.
//              - Updated the DetectTierTablet() method to also search for WebOS tablets. 
//              - Updated the DetectMaemoTablet() method to disambiguate against WebOS tablets which share some signature traits. 
//
//
// LICENSE INFORMATION
// Licensed under the Apache License, Version 2.0 (the "License"); 
// you may not use this file except in compliance with the License. 
// You may obtain a copy of the License at 
//        http://www.apache.org/licenses/LICENSE-2.0 
// Unless required by applicable law or agreed to in writing, 
// software distributed under the License is distributed on an 
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, 
// either express or implied. See the License for the specific 
// language governing permissions and limitations under the License. 
//
//
// ABOUT THIS PROJECT
//   Project Owner: Anthony Hand
//   Email: anthony.hand@gmail.com
//   Web Site: http://www.mobileesp.com
//   Source Files: http://code.google.com/p/mobileesp/
//   
//   Versions of this code are available for:
//      PHP, JavaScript, Java, ASP.NET (C#), and Ruby
//
//
// WARNING: 
//   These JavaScript-based device detection features may ONLY work 
//   for the newest generation of smartphones, such as the iPhone, 
//   Android and Palm WebOS devices.
//   These device detection features may NOT work for older smartphones 
//   which had poor support for JavaScript, including 
//   older BlackBerry, PalmOS, and Windows Mobile devices. 
//   Additionally, because JavaScript support is extremely poor among 
//   'feature phones', these features may not work at all on such devices.
//   For better results, consider using a server-based version of this code, 
//   such as Java, APS.NET, PHP, or Ruby.
//
// *******************************************
*/

//Optional: Store values for quickly accessing same info multiple times.
//Note: These values are not set automatically.
//Stores whether the device is an iPhone or iPod Touch.
var isIphone = false; 
//Stores whether the device is an Android phone or multi-media player.
var isAndroidPhone = false; 
//Stores whether is the Tablet (HTML5-capable, larger screen) tier of devices.
var isTierTablet = false; 
//Stores whether is the iPhone tier of devices.
var isTierIphone = false; 
//Stores whether the device can probably support Rich CSS, but JavaScript support is not assumed. (e.g., newer BlackBerry, Windows Mobile)
var isTierRichCss = false; 
//Stores whether it is another mobile device, which cannot be assumed to support CSS or JS (eg, older BlackBerry, RAZR)
var isTierGenericMobile = false; 

//Initialize some initial string variables we'll look for later.
var engineWebKit = "webkit";
var deviceIphone = "iphone";
var deviceIpod = "ipod";
var deviceIpad = "ipad";
var deviceMacPpc = "macintosh"; //Used for disambiguation

var deviceAndroid = "android";
var deviceGoogleTV = "googletv";
var deviceXoom = "xoom"; //Motorola Xoom
var deviceHtcFlyer = "htc_flyer"; //HTC Flyer

var deviceNuvifone = "nuvifone"; //Garmin Nuvifone

var deviceSymbian = "symbian";
var deviceS60 = "series60";
var deviceS70 = "series70";
var deviceS80 = "series80";
var deviceS90 = "series90";

var deviceWinPhone7 = "windows phone os 7"; 
var deviceWinMob = "windows ce";
var deviceWindows = "windows";
var deviceIeMob = "iemobile";
var devicePpc = "ppc"; //Stands for PocketPC
var enginePie = "wm5 pie";  //An old Windows Mobile

var deviceBB = "blackberry";
var vndRIM = "vnd.rim"; //Detectable when BB devices emulate IE or Firefox
var deviceBBStorm = "blackberry95"; //Storm 1 and 2
var deviceBBBold = "blackberry97"; //Bold
var deviceBBTour = "blackberry96"; //Tour
var deviceBBCurve = "blackberry89"; //Curve 2
var deviceBBTorch = "blackberry 98"; //Torch
var deviceBBPlaybook = "playbook"; //PlayBook tablet

var devicePalm = "palm";
var deviceWebOS = "webos"; //For Palm's line of WebOS devices
var deviceWebOShp = "hpwos"; //For HP's line of WebOS devices

var engineBlazer = "blazer"; //Old Palm browser
var engineXiino = "xiino";

var deviceKindle = "kindle"; //Amazon Kindle, eInk one.

//Initialize variables for mobile-specific content.
var vndwap = "vnd.wap";
var wml = "wml";

//Initialize variables for random devices and mobile browsers.
//Some of these may not support JavaScript
var deviceTablet = "tablet"; //Generic term for slate and tablet devices
var deviceBrew = "brew";
var deviceDanger = "danger";
var deviceHiptop = "hiptop";
var devicePlaystation = "playstation";
var deviceNintendoDs = "nitro";
var deviceNintendo = "nintendo";
var deviceWii = "wii";
var deviceXbox = "xbox";
var deviceArchos = "archos";

var engineOpera = "opera"; //Popular browser
var engineNetfront = "netfront"; //Common embedded OS browser
var engineUpBrowser = "up.browser"; //common on some phones
var engineOpenWeb = "openweb"; //Transcoding by OpenWave server
var deviceMidp = "midp"; //a mobile Java technology
var uplink = "up.link";
var engineTelecaQ = 'teleca q'; //a modern feature phone browser

var devicePda = "pda";
var mini = "mini";  //Some mobile browsers put 'mini' in their names.
var mobile = "mobile"; //Some mobile browsers put 'mobile' in their user agent strings.
var mobi = "mobi"; //Some mobile browsers put 'mobi' in their user agent strings.

//Use Maemo, Tablet, and Linux to test for Nokia's Internet Tablets.
var maemo = "maemo";
var linux = "linux";
var qtembedded = "qt embedded"; //for Sony Mylo and others
var mylocom2 = "com2"; //for Sony Mylo also

//In some UserAgents, the only clue is the manufacturer.
var manuSonyEricsson = "sonyericsson";
var manuericsson = "ericsson";
var manuSamsung1 = "sec-sgh";
var manuSony = "sony";
var manuHtc = "htc"; //Popular Android and WinMo manufacturer

//In some UserAgents, the only clue is the operator.
var svcDocomo = "docomo";
var svcKddi = "kddi";
var svcVodafone = "vodafone";

//Disambiguation strings.
var disUpdate = "update"; //pda vs. update



//Initialize our user agent string.
var uagent = "";
if (navigator && navigator.userAgent)
    uagent = navigator.userAgent.toLowerCase();


//**************************
// Detects if the current device is an iPhone.
function DetectIphone()
{
   if (uagent.search(deviceIphone) > -1)
   {
      //The iPad and iPod Touch say they're an iPhone! So let's disambiguate.
      if (DetectIpad() || DetectIpod())
         return false;
      //Yay! It's an iPhone!
      else 
         return true;
   }
   else
      return false;
}

//**************************
// Detects if the current device is an iPod Touch.
function DetectIpod()
{
   if (uagent.search(deviceIpod) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects if the current device is an iPad tablet.
function DetectIpad()
{
   if (uagent.search(deviceIpad) > -1  && DetectWebkit())
      return true;
   else
      return false;
}

//**************************
// Detects if the current device is an iPhone or iPod Touch.
function DetectIphoneOrIpod()
{
   //We repeat the searches here because some iPods 
   //  may report themselves as an iPhone, which is ok.
   if (uagent.search(deviceIphone) > -1 ||
       uagent.search(deviceIpod) > -1)
       return true;
    else
       return false;
}

//**************************
// Detects *any* iOS device: iPhone, iPod Touch, iPad.
function DetectIos()
{
   if (DetectIphoneOrIpod() || DetectIpad())
      return true;
   else
      return false;
}

//**************************
// Detects *any* Android OS-based device: phone, tablet, and multi-media player.
// Also detects Google TV.
function DetectAndroid()
{
   if ((uagent.search(deviceAndroid) > -1) || DetectGoogleTV())
      return true;
   //Special check for the HTC Flyer 7" tablet. It should report here.
   if (uagent.search(deviceHtcFlyer) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects if the current device is a (small-ish) Android OS-based device
// used for calling and/or multi-media (like a Samsung Galaxy Player).
// Google says these devices will have 'Android' AND 'mobile' in user agent.
// Ignores tablets (Honeycomb and later).
function DetectAndroidPhone()
{
   if (DetectAndroid() && (uagent.search(mobile) > -1))
      return true;
   //Special check for Android phones with Opera Mobile. They should report here.
   if (DetectOperaAndroidPhone())
      return true;
   //Special check for the HTC Flyer 7" tablet. It should report here.
   if (uagent.search(deviceHtcFlyer) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects if the current device is a (self-reported) Android tablet.
// Google says these devices will have 'Android' and NOT 'mobile' in their user agent.
function DetectAndroidTablet()
{
   //First, let's make sure we're on an Android device.
   if (!DetectAndroid())
      return false;

   //Special check for Opera Android Phones. They should NOT report here.
   if (DetectOperaMobile())
      return false;
   //Special check for the HTC Flyer 7" tablet. It should NOT report here.
   if (uagent.search(deviceHtcFlyer) > -1)
      return false;
         
   //Otherwise, if it's Android and does NOT have 'mobile' in it, Google says it's a tablet.
   if (uagent.search(mobile) > -1)
      return false;
   else
      return true;
}


//**************************
// Detects if the current device is an Android OS-based device and
//   the browser is based on WebKit.
function DetectAndroidWebKit()
{
   if (DetectAndroid() && DetectWebkit())
      return true;
   else
      return false;
}


//**************************
// Detects if the current device is a GoogleTV.
function DetectGoogleTV()
{
   if (uagent.search(deviceGoogleTV) > -1)
      return true;
   else
      return false;
}


//**************************
// Detects if the current browser is based on WebKit.
function DetectWebkit()
{
   if (uagent.search(engineWebKit) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects if the current browser is the Nokia S60 Open Source Browser.
function DetectS60OssBrowser()
{
   if (DetectWebkit())
   {
     if ((uagent.search(deviceS60) > -1 || 
          uagent.search(deviceSymbian) > -1))
        return true;
     else
        return false;
   }
   else
      return false;
}

//**************************
// Detects if the current device is any Symbian OS-based device,
//   including older S60, Series 70, Series 80, Series 90, and UIQ, 
//   or other browsers running on these devices.
function DetectSymbianOS()
{
   if (uagent.search(deviceSymbian) > -1 ||
       uagent.search(deviceS60) > -1 ||
       uagent.search(deviceS70) > -1 ||
       uagent.search(deviceS80) > -1 ||
       uagent.search(deviceS90) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects if the current browser is a 
// Windows Phone 7 device.
function DetectWindowsPhone7()
{
   if (uagent.search(deviceWinPhone7) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects if the current browser is a Windows Mobile device.
// Excludes Windows Phone 7 devices. 
// Focuses on Windows Mobile 6.xx and earlier.
function DetectWindowsMobile()
{
   //Exclude new Windows Phone 7.
   if (DetectWindowsPhone7())
      return false;
   //Most devices use 'Windows CE', but some report 'iemobile' 
   //  and some older ones report as 'PIE' for Pocket IE. 
   if (uagent.search(deviceWinMob) > -1 ||
       uagent.search(deviceIeMob) > -1 ||
       uagent.search(enginePie) > -1)
      return true;
   //Test for Windows Mobile PPC but not old Macintosh PowerPC.
   if ((uagent.search(devicePpc) > -1) && 
       !(uagent.search(deviceMacPpc) > -1))
      return true;
   //Test for Windwos Mobile-based HTC devices.
   if (uagent.search(manuHtc) > -1 &&
       uagent.search(deviceWindows) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects if the current browser is a BlackBerry of some sort.
// Includes the PlayBook.
function DetectBlackBerry()
{
   if (uagent.search(deviceBB) > -1)
      return true;
   if (uagent.search(vndRIM) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects if the current browser is on a BlackBerry tablet device.
//    Example: PlayBook
function DetectBlackBerryTablet()
{
   if (uagent.search(deviceBBPlaybook) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects if the current browser is a BlackBerry device AND uses a
//    WebKit-based browser. These are signatures for the new BlackBerry OS 6.
//    Examples: Torch. Includes the Playbook.
function DetectBlackBerryWebKit()
{
   if (DetectBlackBerry() &&
       uagent.search(engineWebKit) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects if the current browser is a BlackBerry Touch
//    device, such as the Storm or Torch. Excludes the Playbook.
function DetectBlackBerryTouch()
{
   if (DetectBlackBerry() &&
        ((uagent.search(deviceBBStorm) > -1) ||
        (uagent.search(deviceBBTorch) > -1)))
      return true;
   else
      return false;
}

//**************************
// Detects if the current browser is a BlackBerry OS 5 device AND
//    has a more capable recent browser. Excludes the Playbook.
//    Examples, Storm, Bold, Tour, Curve2
//    Excludes the new BlackBerry OS 6 browser!!
function DetectBlackBerryHigh()
{
   //Disambiguate for BlackBerry OS 6 (WebKit) browser
   if (DetectBlackBerryWebKit())
      return false;
   if (DetectBlackBerry())
   {
     if (DetectBlackBerryTouch() ||
        uagent.search(deviceBBBold) > -1 || 
        uagent.search(deviceBBTour) > -1 || 
        uagent.search(deviceBBCurve) > -1)
        return true;
     else
        return false;
   }
   else
      return false;
}

//**************************
// Detects if the current browser is a BlackBerry device AND
//    has an older, less capable browser. 
//    Examples: Pearl, 8800, Curve1.
function DetectBlackBerryLow()
{
   if (DetectBlackBerry())
   {
     //Assume that if it's not in the High tier or has WebKit, then it's Low.
     if (DetectBlackBerryHigh() || DetectBlackBerryWebKit())
        return false;
     else
        return true;
   }
   else
      return false;
}


//**************************
// Detects if the current browser is on a PalmOS device.
function DetectPalmOS()
{
   //Most devices nowadays report as 'Palm', 
   //  but some older ones reported as Blazer or Xiino.
   if (uagent.search(devicePalm) > -1 ||
       uagent.search(engineBlazer) > -1 ||
       uagent.search(engineXiino) > -1)
   {
     //Make sure it's not WebOS first
     if (DetectPalmWebOS())
        return false;
     else
        return true;
   }
   else
      return false;
}

//**************************
// Detects if the current browser is on a Palm device
//   running the new WebOS.
function DetectPalmWebOS()
{
   if (uagent.search(deviceWebOS) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects if the current browser is on an HP tablet running WebOS.
function DetectWebOSTablet()
{
   if (uagent.search(deviceWebOShp) > -1 &&
       uagent.search(deviceTablet) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects if the current browser is a
//   Garmin Nuvifone.
function DetectGarminNuvifone()
{
   if (uagent.search(deviceNuvifone) > -1)
      return true;
   else
      return false;
}


//**************************
// Check to see whether the device is a 'smartphone'.
//   You might wish to send smartphones to a more capable web page
//   than a dumbed down WAP page. 
function DetectSmartphone()
{
   if (DetectIphoneOrIpod() 
      || DetectAndroidPhone()
      || DetectS60OssBrowser()
      || DetectSymbianOS()
      || DetectWindowsMobile()
      || DetectWindowsPhone7()
      || DetectBlackBerry()
      || DetectPalmWebOS()
      || DetectPalmOS()
      || DetectGarminNuvifone())
      return true;

   //Otherwise, return false.
   return false;
};

//**************************
// Detects if the current device is an Archos media player/Internet tablet.
function DetectArchos()
{
   if (uagent.search(deviceArchos) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects whether the device is a Brew-powered device.
function DetectBrewDevice()
{
   if (uagent.search(deviceBrew) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects the Danger Hiptop device.
function DetectDangerHiptop()
{
   if (uagent.search(deviceDanger) > -1 ||
       uagent.search(deviceHiptop) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects if the current device is on one of 
// the Maemo-based Nokia Internet Tablets.
function DetectMaemoTablet()
{
   if (uagent.search(maemo) > -1)
      return true;
   //For Nokia N810, must be Linux + Tablet, or else it could be something else.
   if ((uagent.search(linux) > -1) 
       && (uagent.search(deviceTablet) > -1)
       && !DetectWebOSTablet()
       && !DetectAndroid())
      return true;
   else
      return false;
}

//**************************
// Detects if the current browser is a Sony Mylo device.
function DetectSonyMylo()
{
   if (uagent.search(manuSony) > -1)
   {
     if (uagent.search(qtembedded) > -1 ||
         uagent.search(mylocom2) > -1)
        return true;
     else
        return false;
   }
   else
      return false;
}

//**************************
// Detects if the current browser is Opera Mobile or Mini.
function DetectOperaMobile()
{
   if (uagent.search(engineOpera) > -1)
   {
     if (uagent.search(mini) > -1 ||
         uagent.search(mobi) > -1)
        return true;
     else
        return false;
   }
   else
      return false;
}

//**************************
// Detects if the current browser is Opera Mobile 
// running on an Android phone.
function DetectOperaAndroidPhone()
{
   if ((uagent.search(engineOpera) > -1) &&
      (uagent.search(deviceAndroid) > -1) &&
      (uagent.search(mobi) > -1))
      return true;
   else
      return false;
}

//**************************
// Detects if the current browser is Opera Mobile 
// running on an Android tablet.
function DetectOperaAndroidTablet()
{
   if ((uagent.search(engineOpera) > -1) &&
      (uagent.search(deviceAndroid) > -1) &&
      (uagent.search(deviceTablet) > -1))
      return true;
   else
      return false;
}

//**************************
// Detects if the current device is a Sony Playstation.
function DetectSonyPlaystation()
{
   if (uagent.search(devicePlaystation) > -1)
      return true;
   else
      return false;
};

//**************************
// Detects if the current device is a Nintendo game device.
function DetectNintendo()
{
   if (uagent.search(deviceNintendo) > -1   || 
        uagent.search(deviceWii) > -1 ||
        uagent.search(deviceNintendoDs) > -1)
      return true;
   else
      return false;
};

//**************************
// Detects if the current device is a Microsoft Xbox.
function DetectXbox()
{
   if (uagent.search(deviceXbox) > -1)
      return true;
   else
      return false;
};

//**************************
// Detects if the current device is an Internet-capable game console.
function DetectGameConsole()
{
   if (DetectSonyPlaystation())
      return true;
   if (DetectNintendo())
      return true;
   if (DetectXbox())
      return true;
   else
      return false;
};

//**************************
// Detects if the current device is a Kindle.
function DetectKindle()
{
   if (uagent.search(deviceKindle) > -1)
      return true;
   else
      return false;
}

//**************************
// Detects if the current device is a mobile device.
//  This method catches most of the popular modern devices.
//  Excludes Apple iPads and other modern tablets.
function DetectMobileQuick()
{
   //Let's exclude tablets.
   if (DetectTierTablet())
      return false;

   //Most mobile browsing is done on smartphones
   if (DetectSmartphone())
      return true;

   if (uagent.search(deviceMidp) > -1 ||
        DetectBrewDevice())
      return true;

   if (DetectOperaMobile())
      return true;

   if (uagent.search(engineNetfront) > -1)
      return true;
   if (uagent.search(engineUpBrowser) > -1)
      return true;
   if (uagent.search(engineOpenWeb) > -1)
      return true;

   if (DetectDangerHiptop())
      return true;
      
   if (DetectMaemoTablet())
      return true;
   if (DetectArchos())
      return true;

   if ((uagent.search(devicePda) > -1) &&
        !(uagent.search(disUpdate) > -1)) 
      return true;
   if (uagent.search(mobile) > -1)
      return true;

   if (DetectKindle())
      return true;
      
   return false;
};


//**************************
// Detects in a more comprehensive way if the current device is a mobile device.
function DetectMobileLong()
{
   if (DetectMobileQuick())
      return true;
   if (DetectGameConsole())
      return true;
   if (DetectSonyMylo())
      return true;

   //Detect for certain very old devices with stupid useragent strings.
   if (uagent.search(manuSamsung1) > -1 ||
        uagent.search(manuSonyEricsson) > -1 || 
        uagent.search(manuericsson) > -1)
      return true;

   if (uagent.search(svcDocomo) > -1)
      return true;
   if (uagent.search(svcKddi) > -1)
      return true;
   if (uagent.search(svcVodafone) > -1)
      return true;


   return false;
};


//*****************************
// For Mobile Web Site Design
//*****************************

//**************************
// The quick way to detect for a tier of devices.
//   This method detects for the new generation of
//   HTML 5 capable, larger screen tablets.
//   Includes iPad, Android (e.g., Xoom), BB Playbook, WebOS, etc.
function DetectTierTablet()
{
   if (DetectIpad() 
        || DetectAndroidTablet()
        || DetectBlackBerryTablet()
        || DetectWebOSTablet())
      return true;
   else
      return false;
};

//**************************
// The quick way to detect for a tier of devices.
//   This method detects for devices which can 
//   display iPhone-optimized web content.
//   Includes iPhone, iPod Touch, Android, WebOS, etc.
function DetectTierIphone()
{
   if (DetectIphoneOrIpod())
      return true;
   if (DetectAndroidPhone())
      return true;
   if (DetectBlackBerryWebKit() && DetectBlackBerryTouch())
      return true;
   if (DetectPalmWebOS())
      return true;
   if (DetectGarminNuvifone())
      return true;
   else
      return false;
};

//**************************
// The quick way to detect for a tier of devices.
//   This method detects for devices which are likely to be 
//   capable of viewing CSS content optimized for the iPhone, 
//   but may not necessarily support JavaScript.
//   Excludes all iPhone Tier devices.
function DetectTierRichCss()
{
    if (DetectMobileQuick())
    {
       if (DetectTierIphone())
          return false;
          
       //The following devices are explicitly ok.
       if (DetectWebkit())
          return true;
       if (DetectS60OssBrowser())
          return true;

       //Note: 'High' BlackBerry devices ONLY
       if (DetectBlackBerryHigh())
          return true;
          
       //WP7's IE-7-based browser isn't good enough for iPhone Tier.
       if (DetectWindowsPhone7())
          return true;
       if (DetectWindowsMobile())
          return true;
          
       if (uagent.search(engineTelecaQ) > -1)
          return true;
          
       else
          return false;
    }
    else
      return false;
};

//**************************
// The quick way to detect for a tier of devices.
//   This method detects for all other types of phones,
//   but excludes the iPhone and RichCSS Tier devices.
// NOTE: This method probably won't work due to poor
//  support for JavaScript among other devices. 
function DetectTierOtherPhones()
{
    if (DetectMobileLong())
    {
       //Exclude devices in the other 2 categories
       if (DetectTierIphone() || DetectTierRichCss())
          return false;

       //Otherwise, it's a YES
       else
          return true;
    }
    else
      return false;
};


//**************************
// Initialize Key Stored Values.
function InitDeviceScan()
{
    //We'll use these 4 variables to speed other processing. They're super common.
    //isIphone = DetectIphoneOrIpod();
    //isAndroidPhone = DetectAndroidPhone();
    isTierIphone = DetectTierIphone();
    isTierTablet = DetectTierTablet();
    //Optional: Comment these out if you don't need them.
    //isTierRichCss = DetectTierRichCss();
    //isTierGenericMobile = DetectTierOtherPhones();
};

//Now, run the initialization method.
InitDeviceScan();


//////////////////////////////////////////////////////////////////////////////
// YouTubeVideo Objekt siehe: 
// http://learningapps.de/wiki/YouTubeVideo-Objekt
//////////////////////////////////////////////////////////////////////////////
var YouTubeAPIInit = false;
var YouTubeAPIReady = false;
var YouTubePlayers = new Array();
var YouTubePlayerID = 0;
//////////////////////////////////////////////////////////////////////////////
function deleteYouTubePlayer(playerId) {
  for (var i = 0; i < YouTubePlayers.length; i++) {
    var c = YouTubePlayers[i];
    if (c && c.ID == playerId) {
      window.clearInterval(c.updateInterval);
      try {
        if(c.html5player){
          c.html5player.pause();
        }else
        if (c.ytplayer.stopVideo) c.stop();
      } catch (e) {}
      YouTubePlayers[i] = null;
      break;
    }
  }
}
function stopAllYouTubePlayers(index) {
  for (var i = 0; i < YouTubePlayers.length; i++) {
    var c = YouTubePlayers[i];
    if(i == index) continue;
    if(c) c.pause();
  }
}
//////////////////////////////////////////////////////////////////////////////
function onYouTubePlayerAPIReady() {
  YouTubeAPIReady = true;
}

function onYouTubePlayerStateChange(evt) {
  var p = evt.target;
  var t = null;
  for (var i = 0; i < YouTubePlayers.length; i++) {
    if (YouTubePlayers[i] && YouTubePlayers[i].ytplayer == p) {
      t = YouTubePlayers[i];
      break;
    }
  }
  if (!t) return;
  t.playerState = evt.data;
  if ((t.playerState == -1 || t.playerState == 5 || t.playerState == 2) && t.firstStart) { // qued
    t.firstStart = false;
    //if(t.autoStart) setTimeout("t.play();",500);
  }
  if (t.playerState == 1) {
    document.getElementById("playpauseButton" + t.ID).style.visibility = "visible";
    document.getElementById("videoTrackbar_" + t.ID).style.visibility = "visible";
    if (t.video) {
      // audio
      var d = document.getElementById("videoPlaceholder" + t.ID);
      if(typeof(AppClient) != "undefined" && AppClient.isMobileDevice()) {if(d) d.style.display = "none"; t.playpause();}
      if (d) d.style.opacity = 0;
      if (d) d.style.filter = "alpha(opacity=0)";

      d = document.getElementById("videoPlaceholderOuter" + t.ID);
      if(d) d.style.top = "-200px";
      if(typeof(AppClient) != "undefined" && AppClient.isMobileDevice()) if(d) d.style.display = "none";
      if (d) d.style.opacity = 0;
      if (d) d.style.filter = "alpha(opacity=0)";

    }
  }
}

function onYouTubePlayerReadyEvent(evt) {
  var p = evt.target;
  if(p.addEventListener)
     p.addEventListener('onStateChange', onYouTubePlayerStateChange);
  var c = null;
  for (var i = 0; i < YouTubePlayers.length; i++) {
    if (YouTubePlayers[i] && YouTubePlayers[i].ytplayer == p) {
      c = YouTubePlayers[i];
      break;
    }
  }
  if (!c) return;
  if (!c.updateInterval) clearInterval(c.updateInterval);
  c.updateInterval = setInterval("if(YouTubePlayers[" + c.index + "]) YouTubePlayers[" + c.index + "].updatePlayerInfo()", 250);
  c.updatePlayerInfo();
  // wont load on ipad because of missing user interaction
  //setTimeout("YouTubePlayers["+c.index+"].seekTo(0);",1000);
  //c.ytplayer = document.getElementById("ytPlayer"+c.ID );
  //c.ytplayer.addEventListener("onStateChange", "YouTubePlayers["+c.index+"].onPlayerStateChange");
  //c.ytplayer.addEventListener("onError", "YouTubePlayers["+c.index+"].onPlayerError");
  //Load an initial video into the player
  if (c.isMute) c.mute(); else { c.unmute(); c.setVolume(100);}
}
function onHtml5PlayerReadyEvent(p) {
  var c = null;
  for (var i = 0; i < YouTubePlayers.length; i++) {
    if (YouTubePlayers[i] && YouTubePlayers[i].html5player == p) {
      c = YouTubePlayers[i];
      break;
    }
  }
  if (!c) return;
  if (!c.updateInterval) clearInterval(c.updateInterval);
  c.updateInterval = setInterval("if(YouTubePlayers[" + c.index + "]) YouTubePlayers[" + c.index + "].updatePlayerInfo()", 250);
  c.updatePlayerInfo();
  // wont load on ipad because of missing user interaction
  //setTimeout("YouTubePlayers["+c.index+"].seekTo(0);",1000);
  //c.ytplayer = document.getElementById("ytPlayer"+c.ID );
  //c.ytplayer.addEventListener("onStateChange", "YouTubePlayers["+c.index+"].onPlayerStateChange");
  //c.ytplayer.addEventListener("onError", "YouTubePlayers["+c.index+"].onPlayerError");
  //Load an initial video into the player
  if (c.isMute) c.mute(); else { c.unmute(); c.setVolume(100);}
  document.getElementById("playpauseButton" + c.ID).style.visibility = "visible";
  document.getElementById("videoTrackbar_" + c.ID).style.visibility = "visible";
}
var isVideoPlayerPreviewMouseDown = false;
var player_lastMousePositionX = 0;
var player_lastMousePositionY = 0;
function videoPlayerPreviewMouseDown(e) {
  if(e.touches && e.touches.length > 0) e = e.touches[0];
  if (e.pageX || e.pageY) {
    player_lastMousePositionX = e.pageX;
    player_lastMousePositionY = e.pageY;
  }
  else if (e.clientX || e.clientY) {
    player_lastMousePositionX = e.clientX;
    player_lastMousePositionY = e.clientY;
  }
  isVideoPlayerPreviewMouseDown = true;
}

function videoPlayerPreviewMouseMove(e) {
  if(e.touches && e.touches.length > 0) e = e.touches[0];
  var dx = 0;
  var dy = 0;
  if (e.pageX || e.pageY) {
    dx = Math.abs(player_lastMousePositionX - e.pageX);
    dy = Math.abs(player_lastMousePositionY - e.pageY);
  }
  else if (e.clientX || e.clientY) {
    dx = Math.abs(player_lastMousePositionX - e.clientX);
    dy = Math.abs(player_lastMousePositionY - e.clientY);
  }
  if(dx > 3 || dy > 3)
    isVideoPlayerPreviewMouseDown = false;
}

function isYoutubeURL(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|shorts\/|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length==11)? match[7] : false;
}

function getYouTubeID(u){
  u = u.split("/");
  u = u[u.length-1];
  if(u.indexOf("?")>= 0){
    if(u.indexOf("v=") >= 0){
      u = u.split("?");
      u = u[1];
      u = u.split("&");
      for(var i=0; i< u.length; i++){
        var d = u[i];
        d = d.split("=");
        if(d[0] == "v") return d[1];
      }
    }else{
      u = u.split("?");
      return u[0];
    }
  }else{
    return u;
  }
  return "";
}

function YouTubeVideo(YouTubeVideoID, isAudio) {
  this.ID = 0;
  this.insertDiv = "";
  this.previewDiv = "";
  this.ytplayer = null;
  this.html5player = null;  
  this.isMute = false;
  this.firstStart = true;
  this.paused = true;
  this.progressSteps = 100;

  if(YouTubeVideoID.match(/^https?:.*/) && !isYoutubeURL(YouTubeVideoID)){
    this.isFromURL = true;
    YouTubeVideoID = YouTubeVideoID.replace(/^https?:\/\/www.dropbox.com/,"https://dl.dropbox.com");
    YouTubeVideoID = YouTubeVideoID.replace(/^https?:\/\/drive.google.com\/open\?id=/,"https://drive.google.com/uc?export=download&id=");
    YouTubeVideoID = YouTubeVideoID.replace(/^https?:\/\/drive.google.com\/file\/d\/([^\/]+)\/.*/,"https://drive.google.com/uc?export=download&id=$1");

    if(isAudio){
      this.html5player = new Audio();
    }else{
      this.html5player = document.createElement("VIDEO");
    }
    this.html5player.src = YouTubeVideoID;
  }else{
    YouTubeVideoID = getYouTubeID(YouTubeVideoID);
  }

  this.videoID = YouTubeVideoID;

  this.getThumbnailURL = function () {
    if(this.isFromURL) return ""; 
    return "//img.youtube.com/vi/" + YouTubeVideoID + "/0.jpg";
  }
  this.initAPI = function () {
    if(this.isFromURL) return ""; 
    if (YouTubeAPIInit) return;
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
  this.contentFilled = false;
  this.init = function () {
    if (this.ID == 0) {
      YouTubePlayerID++;
      YouTubePlayers.push(this);
      this.ID = "YouTubePlayer" + YouTubePlayerID;
      this.index = YouTubePlayers.length - 1;
    }
  }
  this.loadPlayer = function (div) {
    this.previewDiv = div;
    var previewIn = document.getElementById(div);
    if (!previewIn) {
      alert("Element: " + div + " not found!");
      return;
    }
    this.init();
    var newH = "100%";
    if (previewIn.style.height) newH = (parseInt(previewIn.style.height)) + "px";
    if (previewIn.style.height == "100%") newH = "100%";
    newdiv = document.createElement("div");
    newdiv.id = this.ID + '_overlay';
    newdiv.style.position = "absolute";
    newdiv.style.width = "100%";
    newdiv.style.height = "100%";
    newdiv.style.left = "0px";
    newdiv.style.top = "0px";
    newdiv.style.zIndex = "100000";
    newdiv.style.display = "none";
    newdiv.style.background = "";
    newdiv.style.textAlign = "center";
    newdiv.innerHTML = '<div style="position:absolute;background:black;opacity:0.8;height:100%;width:100%"></div><div style="margin-top:10px;position:relative;width:660px;margin-left:auto;margin-right:auto;height:30px"><span style="float:right;" ><img onclick="document.getElementById(\'' + this.ID + '_overlay\').style.display =\'none\'; YouTubePlayers[' + this.index + '].stop()" style="position:relative;cursor:pointer;" src="//learningapps.org/style/fancy_close.png" alt="" /></span></div><div id="' + this.ID + '_overlayInner' + '" style="position:relative;margin-left:auto;margin-right:auto;width:640px;height:390px;"></div>';
    document.body.appendChild(newdiv); // height:' + newH + '"
    var html = '<div style="position:relative;max-height:100%;width:100%;" onmousedown="videoPlayerPreviewMouseDown(event)" onmousemove="videoPlayerPreviewMouseMove(event)" ontouchstart="videoPlayerPreviewMouseDown(event)" ontouchmove="videoPlayerPreviewMouseMove(event)" ontouchend="if(isVideoPlayerPreviewMouseDown){document.getElementById(\'' + this.ID + '_overlay\').style.display =\'block\'; YouTubePlayers[' + this.index + '].loadPlayerRun(\'' + this.ID + '_overlayInner\');}" onmouseup="if(isVideoPlayerPreviewMouseDown){document.getElementById(\'' + this.ID + '_overlay\').style.display =\'block\'; YouTubePlayers[' + this.index + '].loadPlayerRun(\'' + this.ID + '_overlayInner\');}"><img src="//learningapps.org/style/play_button.png" alt=""  style="z-index:1;position:absolute; margin-top:-30px; margin-left:-30px;left:50%; top:50%; width:60px; max-height:60px !important; cursor:pointer;"/><img src="' + this.getThumbnailURL() + '" style="width:100%;" alt=""/></div>';
    previewIn.innerHTML = html;
  }
  this.loadPlayerRun = function (div) {
    this.insertDiv = div;
    var insertIn = document.getElementById(div);
    if (!insertIn) {
      alert("Element: " + div + " not found!");
      return;
    }
    this.init();

    if (!this.isFromURL && !YouTubeAPIReady) {
      this.initAPI();
      setTimeout("if(YouTubePlayers[" + this.index + "]) YouTubePlayers[" + this.index + "].loadPlayerRun('" + div + "')", 100);
      return;
    }
    if (!this.contentFilled) {
      this.contentFilled = true;
      var newH = "100%";
      if (insertIn.style.height) newH = (parseInt(insertIn.style.height) - 30) + "px";
      if (insertIn.style.height == "100%") newH = "100%";
      insertIn.innerHTML = '<table style="border: 1px solid gray; background:white;width:100%;height:100%;"  cellspacing="0" cellpadding="0"><tr><td style="height:100%" onmouseup="YouTubePlayers[' + (this.index) + '].playpause();"><div style="height:' + newH + '" id="videoPlaceholderOuter' + this.ID + '"><div style="height:' + newH + '" id="videoPlaceholder' + this.ID + '"> </div></div></td></tr>' + '<tr><td><div id="videoControls' + this.ID + '" style="background: white; font-size: 0.75em;"><table style="width:100%" cellspacing="0" cellpadding="3"><tr><td width="30" align="center"><button type="button" style="position:static;width:auto;display:inline; visibility:hidden;font-size:11px; text-decoration:none; background:#F3F3F3; color:#333; height:25px; width:25px; padding:0px; text-align:center; padding:1px;maring-right:1px" id="playpauseButton' + this.ID + '" onclick="YouTubePlayers[' + (this.index) + '].playpause();" class="btn btn-primary"> \u25B6 </button></td><td  style="overflow: hidden;">' + this.createTrackBarItems() + '</td><td width="60" align="right"><span style="padding:1px;white-space:nowrap" id="videoTime' + this.ID + '" > </span></td></tr></table></div></td></tr></table>';
      setTimeout("YouTubePlayers[" + this.index + "].loadPlayerRun('" + div + "')", 250 + Math.floor(Math.random * 1000));
      return;
    }
    if (!this.isFromURL && this.ytplayer != null) {
      window.clearInterval(this.updateInterval);
      try {
        if (this.ytplayer.stopVideo) this.stop();
      } catch (e) {}
      var d = document.getElementById('videoPlaceholderOuter' + this.ID);
      d.innerHTML = '<div style="height:' + newH + '" id="videoPlaceholder' + this.ID + '"> </div>';
      this.ytplayer = null;
      document.getElementById("playpauseButton" + this.ID).style.visibility = "hidden";
      document.getElementById("videoTrackbar_" + this.ID).style.visibility = "hidden";
      var d = document.getElementById(this.ID + '_overlay');
      if (d) d.style.display = "block";
    }
    if (!this.isFromURL && this.ytplayer == null) {
      this.ytplayer = new YT.Player('videoPlaceholder' + this.ID, {
        height: '100%',
        width: '100%',
        host: 'https://www.youtube-nocookie.com',
        playerVars: {
          autoplay: (this.autoStart ? 1 : 0),
          start: this.startTime,
          controls: 0,
          playsinline:1,
          modestbranding:1,
          iv_load_policy:3,
          showinfo: 0,
          rel: 0,
          wmode: "transparent"
        },
        videoId: this.videoID,
        events: {
          'onReady': onYouTubePlayerReadyEvent
        }
      });

    } else
    if (this.isFromURL) {
      var d = document.getElementById('videoPlaceholder' + this.ID);
      d.append(this.html5player);
      
      onHtml5PlayerReadyEvent(this.html5player);

      this.seekTo(this.startTime);
      if(this.autoStart){
        this.play();
      }
      this.html5player.style.position = "absolute";
      this.html5player.style.top = "50%";
      this.html5player.style.right = "50%";
      this.html5player.style.transform = "translate(50%,-50%)";
      this.html5player.style.maxWidth = "100%";
      this.html5player.style.maxHeight = "100%";
      d.style.display = "flex";
      d.style.alignContent = "center";
      d.style.justifyContent = "center";
      d.style.position = "relative";
    }

  }
  this.onPlayerError = function (errorCode) {
    if (errorCode == 100) {
      deleteYouTubePlayer(this.ID);
      var insertIn = document.getElementById(this.insertDiv);
      insertIn.innerHTML = '<div style="background:#FFDDDD;padding:3px">' + getAppClientTranslation("APPCLIENT_VIDEODELTED") + '</div>';
      return;
    }
    if (errorCode == 150 || errorCode == 101) {
      deleteYouTubePlayer(this.ID);
      var insertIn = document.getElementById(this.insertDiv);
      insertIn.innerHTML = '<div style="background:#FFDDDD;padding:3px">' + getAppClientTranslation("APPCLIENT_VIDEOFORBIDDEN") + '</div>';
      return;
    }
    if (errorCode == 2) {
      deleteYouTubePlayer(this.ID);
      var insertIn = document.getElementById(this.insertDiv);
      insertIn.innerHTML = '<div style="background:#FFDDDD;padding:3px">' + getAppClientTranslation("APPCLIENT_VIDEOWRONGURL") + '</div>';
      return;
    }
    alert("An error occured of type:" + errorCode);
  }
  this.getTimeFromSeconds = function (sTime) {
    var seconds = parseInt(sTime);
    if (isNaN(seconds)) {
      return "0:00";
    }
    return ((seconds - seconds % 60)/60)+":"+(seconds % 60 < 10 ? "0":"")+(seconds % 60);
  }

  this.restartVideo = function () {
    this.pause();
    this.seekTo(0);
    this.pause();
    this.videoPosition = 0;
    var self = this;
    setTimeout(function(){
     self.videoPosition = 0;
     self.videoCurrentTime = 0;
     self.pause(); 
     if (self.isMute) self.mute();
    },200);        
  }

  this.updatePlayerInfo = function () {
    if (!document.getElementById('videoControls' + this.ID)) {
      deleteYouTubePlayer(this.ID);
      return;
    }
    var oldPlayerState = this.playerState;
    if(this.isFromURL){
      this.playerState = this.html5player.paused ? (this.html5player.ended ? 0 : 2) : 1;
      this.volume = Math.round(this.html5player.volume*100);
      this.videoDuration = this.html5player.duration;
      this.videoCurrentTime = this.html5player.currentTime;
    }else
    // Also check that at least one function exists since when IE unloads the
    // page, it will destroy the SWF before clearing the interval.
    if (this.ytplayer && this.ytplayer.getDuration) {
      this.playerState = this.ytplayer.getPlayerState();
      this.volume = this.ytplayer.getVolume();
      this.videoDuration = this.ytplayer.getDuration();
      this.videoCurrentTime = this.ytplayer.getCurrentTime();
    }
    this.videoLength = (this.endTime == 0 ? this.videoDuration : this.endTime) - (this.startTime);
    this.videoPosition = this.videoCurrentTime - this.startTime;
    if (this.playerState == 1) this.paused = false;
    if (this.playerState == 2) this.paused = true;
    if (this.playerState == 0) this.paused = true;
    var button = document.getElementById('playpauseButton' + this.ID);     
    if (!this.paused) button.innerHTML = " II "; else button.innerHTML = " \u25B6 ";
//	button.value = this.playerState;
    if (this.videoPosition < -3 && this.playerState == 1) {
      this.seekTo(0);
    }
    if (this.playerState == 1 && oldPlayerState != 1){ 
        stopAllYouTubePlayers(this.index);
    }

    if (this.playerState == 0 && this.videoCurrentTime == this.videoDuration){ 
      // video ended at the end
      this.restartVideo();
    }

    if (this.playerState == 1 && oldPlayerState == 1) 
    if ((this.endTime != "" && this.endTime != 0) || (this.videoPosition >= this.videoLength)) 
    if (this.videoCurrentTime >= this.endTime && this.endTime != 0 ||
        this.videoPosition >= this.videoLength && this.videoPosition != 0) {
      // video ended on time
    	this.restartVideo();
    }

    if (this.videoDuration > 0) {
      this.videoPosition = Math.max(this.videoPosition, 0);
      var time = document.getElementById("videoTime" + this.ID);
      time.innerHTML = this.getTimeFromSeconds(this.videoPosition) + "/" + this.getTimeFromSeconds(this.videoLength);
      var progressW = Math.floor(this.progressSteps * (this.videoPosition / this.videoLength));

      var percentage = (this.videoPosition / this.videoLength) * 100;
      var d = document.getElementById('videoTrackbar_' + this.ID);
      d.children[0].style.width = percentage+"%";

    }
    //this.bytesTotal = this.ytplayer.getVideoBytesTotal();
    //this.startBytes = this.ytplayer.getVideoStartBytes();
    //this.bytesLoaded = this.ytplayer.getVideoBytesLoaded();
  };

  this.setVolume = function (volume) {
    if (isNaN(volume) || volume < 0 || volume > 100) {
      alert("Please enter a valid volume between 0 and 100.");
    } else 
    if(this.isFromURL) {
      this.html5player.volume = volume / 100;
    } else
    if (this.ytplayer) {
      this.ytplayer.setVolume(volume);
    }
  }
  this.seekTo = function (n) {
    if(this.isFromURL) {
      this.html5player.currentTime = this.startTime + n;
    } else
    if (this.ytplayer) {
      this.ytplayer.seekTo(this.startTime + n, true);
    }
  }
  this.seekToPos = function (p) {
    this.seekTo(Math.floor(this.videoLength * p / this.progressSteps));
  }
  this.play = function () {
    if(this.isFromURL) {
      // is never < 0?
      if(this.videoPosition < 0) this.seekTo(0);
      this.html5player.play();
    } else
    if (this.ytplayer) {
      //this.paused = false;
      if(this.videoPosition < 0) this.seekTo(0);
      this.ytplayer.playVideo();
    }
  }
  this.pause = function () {
    if(this.isFromURL) {
      this.html5player.pause();
    } else
    if (this.ytplayer && this.ytplayer.pauseVideo) {
      //this.paused = true;
      this.ytplayer.pauseVideo();
    }
  }
  this.playpause = function () {
    if (this.paused) this.play();
    else this.pause();
  }
  this.stop = function () {
    if(this.isFromURL) {
      this.seekTo(0);
      this.html5player.pause();
    } else
    if (this.ytplayer) {
      //this.paused = true;
      this.ytplayer.stopVideo();
    }
  }
  this.mute = function () {
    if(this.isFromURL) {
      this.html5player.defaultMuted = true;
      this.html5player.muted = true;
    } else
    if (this.ytplayer) {
      this.ytplayer.mute();
      this.isMute = true;
    }
  }
  this.unmute = function () {
    if(this.isFromURL) {
      this.html5player.defaultMuted = false;
      this.html5player.muted = false;
    } else
    if (this.ytplayer) {
      this.ytplayer.unMute();
      this.isMute = false;
    }
  }
  this.hideControls = function () {
    var d = document.getElementById('videoControls' + this.ID);
    d.style.display = "none";
  }
  this.showControls = function () {
    var d = document.getElementById('videoControls' + this.ID);
    d.style.display = "block";
  }
  this.getOffset = function(element){
    if (!element.getClientRects().length){
      return { top: 0, left: 0 };
    }
    var rect = element.getBoundingClientRect();
    var win = element.ownerDocument.defaultView;
    return ({
      top: rect.top + win.pageYOffset,
      left: rect.left + win.pageXOffset
    });   
  }
  this.clickSeek = function(e){
    var s = this;
    var d = document.getElementById("videoTrackbar_"+s.ID);      
  	var offset = s.getOffset(d);
		var left = ((e.pageX - offset.left));
		var totalWidth = d.clientWidth;
		var percentage = ( left / totalWidth );
		var vidTime = s.videoLength * percentage;
    s.seekTo(vidTime);
  }  
  this.createTrackBarItems = function () {
    var s = "";
    s = '<div style="position: relative;visibility:hidden; background:#EEE;height:16px; width:100%" onclick="YouTubePlayers[' + (this.index) + '].clickSeek(event)" id="videoTrackbar_' + this.ID + '" class="videoPlayer-seekbar"><span style="background-color: orange; position: absolute; top: 0; left: 0; height: 16px; width: 0px;"></span></div>';

    return s;
  }
}
//////////////////////////////////////////////////////////////////////////////
function YouTubeAudio(YouTubeVideoID) {
  this.video = new YouTubeVideo(YouTubeVideoID,true); // isAudio
  this.ID = 0;
  this.insertDiv = "";
  this.getThumbnailURL = function () {
    if(this.video.isFromURL) return "";
    return "//img.youtube.com/vi/" + YouTubeVideoID + "/0.jpg";
  }
  this.initAPI = function () {
    if(this.video.isFromURL) return;
    if (YouTubeAPIInit) return;
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/player_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }
  this.updatePlayerInfo = function () {
    this.video.updatePlayerInfo();
  }
  this.onPlayerError = function (errorCode) {
    this.video.onPlayerError(errorCode);
  }
  this.contentFilled = false;

  this.loadPlayer = function (div) {
    this.insertDiv = div;
    this.video.insertDiv = div;
    var insertIn = document.getElementById(div);
    if (!insertIn) {
      alert("Element: " + div + " not found!");
      return;
    }
    if (this.ID == 0) {
      YouTubePlayerID++;
      YouTubePlayers.push(this);
      this.ID = "YouTubePlayer" + YouTubePlayerID;
      this.index = YouTubePlayers.length - 1;
      this.video.audioPlayer = this;
      this.video.index = this.index;
      this.video.ID = this.ID;
      this.video.autoStart = this.autoStart;
      this.video.startTime = this.startTime;
      this.video.endTime = this.endTime;
      this.video.isMute = false;
    }
    if (!this.video.isFromURL && !YouTubeAPIReady) {
      this.initAPI();
      setTimeout("if(YouTubePlayers[" + this.index + "]) YouTubePlayers[" + this.index + "].loadPlayer('" + div + "')", 500);
      return;
    }
    if (!this.contentFilled) {
      this.contentFilled = true;
      insertIn.innerHTML = '<table style="border: 1px solid gray; background:white;width:100%; height:30px" cellspacing="0" cellpadding="0"><tr><td><div id="videoControls' + this.ID + '" style="background: white; font-size: 0.75em; "><table style="width:100%" cellspacing="0" cellpadding="3"><tr><td width="30" align="center">'+(!this.video.isFromURL ? '<div id="videoPlaceholderOuter' + this.ID + '" style="position:absolute;height:25px; opacity:0.01;width:35px;overflow:hidden;padding:0"><div style="position:absolute;left:-82px;top:-87px;height:200px; width:200px;" id="videoPlaceholder' + this.ID + '"></div></div>' : '')+'<button type="button" style="position:static;display:inline;font-size:15px;cursor:pointer; font-weight:bold;text-decoration:none; height:25px; width:25px; padding:0px; text-align:center; background:#F3F3F3; color:#333;" class="btn btn-primary" id="playpauseButton' + this.ID + '" onclick="YouTubePlayers[' + (this.index) + '].playpause();"> \u25B6 </button> </td><td  style="overflow: hidden;">' + this.video.createTrackBarItems() + '</td><td width="60" align="right"><span style="padding:1px;padding-left:3px;white-space:nowrap" id="videoTime' + this.ID + '" > </span></td></tr></table></div></td></tr></table>';
      setTimeout("YouTubePlayers[" + this.index + "].loadPlayer('" + div + "')", 250 + Math.floor(Math.random * 1000));
      return;
    }
    if(!this.video.isFromURL && !this.video.ytplayer){
     this.video.ytplayer = new YT.Player('videoPlaceholder' + this.ID, {
      height: '200px',
      width: '200px',
      host: 'https://www.youtube-nocookie.com',
      playerVars: {
        autoplay: (this.autoStart ? 1 : 0),
        start: this.startTime,
        modestbranding:1,
        iv_load_policy:3,
        playsinline:1,
        controls: 0,
        showinfo: 0,
        rel: 0,
        wmode: "transparent"
      },
      videoId: this.video.videoID,
      events: {
        'onReady': onYouTubePlayerReadyEvent
      }
     });

     this.ytplayer = this.video.ytplayer;
    } else
    if (this.video.isFromURL) {
      this.html5player = this.video.html5player;
      onHtml5PlayerReadyEvent(this.html5player);
      this.video.seekTo(this.startTime);
      if(this.autoStart){
        this.play();
      }
    }
  }
  this.setVolume = function (volume) {
    this.video.setVolume(volume);
  }
  this.seekTo = function (n) {
    this.video.seekTo(n);
  }
  this.seekToPos = function (pos) {
    this.video.seekToPos(pos);
  }
  this.clickSeek = function(e){
    this.video.clickSeek(e);
  }
  this.play = function () {
    this.video.play();
  }
  this.pause = function () {
    this.video.pause();
  }
  this.playpause = function () {
    this.video.playpause();
  }
  this.stop = function () {
    this.video.stop();
  }
  this.mute = function () {
    this.video.mute();
  }
  this.unmute = function () {
    this.video.unmute();
  }

}
//////////////////////////////////////////////////////////////////////////////

// was cached