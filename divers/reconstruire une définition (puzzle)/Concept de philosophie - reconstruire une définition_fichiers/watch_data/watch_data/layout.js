/////////////////////////////////////////////////////////////////////////
var cardHeight = 50;
var cardWidth = 150;
var isDragging = false;
var videoCounter = 0;
/////////////////////////////////////////////////////////////////////////
var allTextElements = new Array();
/////////////////////////////////////////////////////////////////////////
function htmlEncode(value){  
    return $('<div/>').text(value).html();  
}  
/////////////////////////////////////////////////////////////////////////
function formatContent(p){
 var o = new Object();
 var content = AppClient.getParameter(p,"");
 var a = content.split("|");
 o.param = content;
 var type = AppClient.getParameterType(p);

 if(type == "text"){
  o.value = '<a id="content'+p+'trigger" class="fancybox" href="#item'+p+'content" title="'+(a.length > 1 ? htmlEncode(a[1]):'')+'"></a>'+
    ' <div style="margin-top:0px;text-align:center;font-size:16px;overflow:hidden;height:100%"><div id="content'+p+'" style="width:100%;cursor:pointer;height:100%;text-align:center;" ontouchend="openItem(this)" onmouseup="openItem(this)">'+
  limitText(a[0],35)+ '</div>'+
  ' <div style="display:none;"><div id="item'+p+'content" style="padding:5px;text-align:left">'+AppClient.linkifyText(a[0]) +'</div></div></div>';
  allTextElements.push({paramName:p,value:a[0]});
 }

 if(type == "image"){
  o.value = '<div style="width:100%;height:100%;"><a id="inline" href="'+a[0]+'" title="'+(a.length > 1 ? htmlEncode(a[1]):'')+'"><img class="imageInCard" style="margin-top:0px;max-width:100%;" src="'+a[0]+'" alt=""/></a></div>';
  mediaUsed = true;
 }

 if(type == "speech"){
  videoCounter++;
  o.value = '<div style="width:100%;position:relative;top:50%;margin-top:-15px;color:#000" id="speech'+videoCounter+'"></div><div style="position:relative;bottom:20px;text-align:center"><small>'+(a.length > 2 ? a[2]:'')+'</small></div>';
  window.setTimeout('if(document.getElementById("speech'+videoCounter+'")){ AppClient.loadSpeech("'+p+'","speech'+videoCounter+'"); refreshResize();}',100);
 }

 if(type == "audio"){
  videoCounter++;
  o.value = '<div style="width:100%;position:relative;top:50%;margin-top:-15px;color:#000" id="audio'+videoCounter+'">YouTube Audio</div><div style="position:relative;bottom:30px;text-align:center;"><small>'+(a.length > 3 ? a[3]:'')+'</small></div>';
  window.setTimeout('if(document.getElementById("audio'+videoCounter+'")){ AppClient.loadAudio("'+p+'","audio'+videoCounter+'"); refreshResize();}',100);
  mediaUsed = true;
 }
 
 if(type == "video"){
  videoCounter++;
  o.value = '<div style="width:100%;height:100%;margin-top:0px;color:#000" id="video'+videoCounter+'">YouTube Video</div><div style="position:relative;bottom:30px;text-align:center;background:white;z-index:1;opacity:0.8"><small>'+(a.length > 4 ? a[4]:'')+'</small></div>';
  window.setTimeout('if(document.getElementById("video'+videoCounter+'")) { AppClient.loadVideo("'+p+'","video'+videoCounter+'"); refreshResize();}',100);
  mediaUsed = true;
 }
 return o.value;
}
/////////////////////////////////////////////////////////////////////////
function openItem(d){
  if(!d) return;
  if(!isDragging){
    $("#"+d.id+"trigger").trigger('click');
  } 
}
/////////////////////////////////////////////////////////////////////////
if (!Array.prototype.indexOf) {
 Array.prototype.indexOf = function(obj, start) {
     for (var i = (start || 0), j = this.length; i < j; i++) {
         if (this[i] === obj) { return i; }
     }
     return -1;
 }
}
/////////////////////////////////////////////////////////////////////////
function limitText(s,num){
 if(s.length <= num) return s;
 return s.substring(0,num)+" ...";
}
/////////////////////////////////////////////////////////////////////////
function refreshResize(){
 var w = document.getElementById("wrapper").clientWidth;

 cardWidth = Math.max(150,Math.round(w/5.5));
 cardHeight = Math.max(50,Math.round(80*cardWidth/150));

 $(".fixedCell").css("width",(cardWidth+10)+"px");
 $(".fixedCell").css("height",(cardHeight+10)+"px");

 $(".dropableSlot").css("width",(cardWidth+10)+"px");
 $(".dropableSlot").css("height",(cardHeight+10)+"px");
 $(".dropableSlot").css("margin-bottom",(cardHeight/3)+"px");

 $(".card").css("width",(cardWidth)+"px");
 $(".card").css("height",(cardHeight)+"px");

 $(".tableCellInner").css("width",(cardWidth)+"px");
 $(".tableCellInner").css("height",(cardHeight)+"px");

 $('.fixedCell img').each(function () {
  if($(this).attr("src").indexOf("http://learningapps.org") == -1){
   $(this).css("max-height",'calc('+(cardHeight)+"px - 40%)");
  }
 });

 $('.dropableSlot img').each(function () {
  if($(this).attr("src").indexOf("http://learningapps.org") == -1){
   $(this).css("max-height",'calc('+(cardHeight)+"px - 40%)");

  }
 });

 $('.card img').each(function () {
  if($(this).attr("src").indexOf("http://learningapps.org") == -1){
   $(this).css("max-height",'calc('+(cardHeight)+"px - 40%)");
  }
 });
 
 //$("#nav").css("height",(cardHeight+60)+"px");
 //$("#navinner").css("width",((cardWidth+50)*(totalCards)+10)+"px");
 //$("#navinner").css("height",(cardHeight+60)+"px");
 $("#nav").css("height",(cardHeight+28)+"px");
 $("#navFade").css("height",(cardHeight+28)+"px");
 $("#navinner").css("width",((cardWidth+20)*(totalCards)+180)+"px");

  
 //$("#tab").css("top",(cardHeight+60 +20)+"px");
 var cardsOnLine = Math.floor(w / (cardWidth+40));
 //$("#tab").css("left",((w-tw)/2)+"px");
 var margin = w - (cardsOnLine * (cardWidth+30));
 $("#tab").css("margin-left",(margin/2)+"px");
  
 // rescale text

 for(var i=0; i < allTextElements.length; i++){
  var n = allTextElements[i].paramName;
  if(AppClient.getParameterType(n) == "text"){
   var d = document.getElementById("content"+n);
   var a = AppClient.getParameter(n).split("|");

   if(d){
    d.innerHTML = limitText(a[0],cardWidth/6*(cardHeight/20-1));
    if(d.innerHTML == a[0] && ((a.length == 1) || (a[1] == ""))){
     d.ontouchend=null;
     d.onmouseup=null;
    }else{
     d.ontouchend=function(){openItem(this);};
     d.onmouseup=function(){openItem(this);};
    }
   } 
  }
 }
 
 
}
/////////////////////////////////////////////////////////////////////////
function handleCardDrop( event, ui ) {
// var slotNumber = $(this).data( 'number' );
// var cardNumber = ui.draggable.data( 'number' );
 var oldslot = $(ui.draggable).data( 'slot');
 var s = $(this).data('dropped');
 if(s == 0){
  ui.draggable.draggable( 'option', 'revert', false );
  ui.draggable.css("margin","-2px");
  $(this).append(ui.draggable);
  $(this).data( 'dropped', ui.draggable);
  $(ui.draggable).data( 'slot', $(this));
  if(oldslot){ 
   oldslot.data( 'dropped',0);
  }else{
   $("#nav").scrollLeft(0);
  }
 
 }else{
  ui.draggable.draggable( 'option', 'revert', false );
  ui.draggable.css("margin","-2px");
  $(this).append(ui.draggable);
  $(this).data( 'dropped', ui.draggable);
  $(ui.draggable).data( 'slot', $(this));
  
  if(oldslot){ 
   s.data( 'slot', oldslot);
   oldslot.append(s);
   oldslot.data( 'dropped', s);
  }else{
   s.data( 'slot', 0);
   $('#navinner').append(s);
   s.css("margin","10px");
   s.css("background","#ffd");
   $("#nav").scrollLeft(0);
  } 
 } 
 $("#dragHandler").html("");
 
 return true;
}


function makeCardsDragable(){
 $('.dropableSlot').droppable( {
      accept: '.dragableCard',
      activeClass: "highlight",
      hoverClass: 'hovered',
      greedy: true,
      drop: handleCardDrop
     }); 

 $('.dragableCard').draggable( {
      iframeFix: false,
      containment: '#wrapper',
      stack: '.dragableCard',
      zIndex: 2700,
      helper: 'clone',
//      helper: function(){return '<div class="card">&nbsp;</div>';},
      cursor: 'pointer',
      appendTo: "#dragHandler",
      revert: false,
      stop : function(){setTimeout("isDragging = false;",500); },
      drag : function(){ 
	         if(arrowVisible) {arrowVisible = false; $("#arrow").fadeOut(); }
		 isDragging = true; 
		 $(this).draggable( 'option', 'revert', true ); 
	     }
    });
 $("a#inline").fancybox({
		'hideOnContentClick': true,
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
    onStart:function(items,index,opts) {
     if(arrowVisible) {arrowVisible = false; $("#arrow").fadeOut(); }
     if(isDragging) return false;
    }
  });

 	$(".fancybox").fancybox({
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	true
	});

 $('.dropableSlot').data('dropped',0);	 
 $('.dragableCard').data('slot', 0);	
 
}
