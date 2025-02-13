/* compact [
	prive/javascript/jquery.js?1724223514
	prive/javascript/jquery.form.js?1724223514
	prive/javascript/jquery.autosave.js?1724223514
	prive/javascript/jquery.placeholder-label.js?1724223514
	prive/javascript/ajaxCallback.js?1724223514
	prive/javascript/js.cookie.js?1724223514
	plugins-dist/mediabox/lib/lity/lity.js?1724223514
	plugins-dist/mediabox/lity/js/lity.mediabox.js?1724223514
	plugins-dist/mediabox/javascript/spip.mediabox.js?1724223514
	plugins/auto/mathjax_latex/v1.2.0/js/refresh_math_ml.js
	sites/philosophie.ac-amiens.fr/local/cache-js/jsdyn-jquery_cookiebar_js-45feef33.js?1724230064
	plugins/auto/cookiebar/v1.3.0/js/jquery.cookiebar.call.js?1720680816
	sites/philosophie.ac-amiens.fr/local/couteau-suisse/header.js
	squelettes/js/bootstrap.min.js
	sites/philosophie.ac-amiens.fr/local/cache-js/jquery.matchHeight-min-minify-1357.js
	sites/philosophie.ac-amiens.fr/local/cache-js/comportement-minify-79f9.js
] 59.8% */

/* prive/javascript/jquery.js?1724223514 */

(function(global,factory){
"use strict";
if(typeof module==="object"&&typeof module.exports==="object"){
module.exports=global.document?
factory(global,true):
function(w){
if(!w.document){
throw new Error("jQuery requires a window with a document");
}
return factory(w);
};
}else{
factory(global);
}
})(typeof window!=="undefined"?window:this,function(window,noGlobal){
"use strict";
var arr=[];
var getProto=Object.getPrototypeOf;
var slice=arr.slice;
var flat=arr.flat?function(array){
return arr.flat.call(array);
}:function(array){
return arr.concat.apply([],array);
};
var push=arr.push;
var indexOf=arr.indexOf;
var class2type={};
var toString=class2type.toString;
var hasOwn=class2type.hasOwnProperty;
var fnToString=hasOwn.toString;
var ObjectFunctionString=fnToString.call(Object);
var support={};
var isFunction=function isFunction(obj){
return typeof obj==="function"&&typeof obj.nodeType!=="number"&&
typeof obj.item!=="function";
};
var isWindow=function isWindow(obj){
return obj!=null&&obj===obj.window;
};
var document=window.document;
var preservedScriptAttributes={
type:true,
src:true,
nonce:true,
noModule:true
};
function DOMEval(code,node,doc){
doc=doc||document;
var i,val,
script=doc.createElement("script");
script.text=code;
if(node){
for(i in preservedScriptAttributes){
val=node[i]||node.getAttribute&&node.getAttribute(i);
if(val){
script.setAttribute(i,val);
}
}
}
doc.head.appendChild(script).parentNode.removeChild(script);
}
function toType(obj){
if(obj==null){
return obj+"";
}
return typeof obj==="object"||typeof obj==="function"?
class2type[toString.call(obj)]||"object":
typeof obj;
}
var version="3.7.1",
rhtmlSuffix=/HTML$/i,
jQuery=function(selector,context){
return new jQuery.fn.init(selector,context);
};
jQuery.fn=jQuery.prototype={
jquery:version,
constructor:jQuery,
length:0,
toArray:function(){
return slice.call(this);
},
get:function(num){
if(num==null){
return slice.call(this);
}
return num<0?this[num+this.length]:this[num];
},
pushStack:function(elems){
var ret=jQuery.merge(this.constructor(),elems);
ret.prevObject=this;
return ret;
},
each:function(callback){
return jQuery.each(this,callback);
},
map:function(callback){
return this.pushStack(jQuery.map(this,function(elem,i){
return callback.call(elem,i,elem);
}));
},
slice:function(){
return this.pushStack(slice.apply(this,arguments));
},
first:function(){
return this.eq(0);
},
last:function(){
return this.eq(-1);
},
even:function(){
return this.pushStack(jQuery.grep(this,function(_elem,i){
return(i+1)%2;
}));
},
odd:function(){
return this.pushStack(jQuery.grep(this,function(_elem,i){
return i%2;
}));
},
eq:function(i){
var len=this.length,
j=+i+(i<0?len:0);
return this.pushStack(j>=0&&j<len?[this[j]]:[]);
},
end:function(){
return this.prevObject||this.constructor();
},
push:push,
sort:arr.sort,
splice:arr.splice
};
jQuery.extend=jQuery.fn.extend=function(){
var options,name,src,copy,copyIsArray,clone,
target=arguments[0]||{},
i=1,
length=arguments.length,
deep=false;
if(typeof target==="boolean"){
deep=target;
target=arguments[i]||{};
i++;
}
if(typeof target!=="object"&&!isFunction(target)){
target={};
}
if(i===length){
target=this;
i--;
}
for(;i<length;i++){
if((options=arguments[i])!=null){
for(name in options){
copy=options[name];
if(name==="__proto__"||target===copy){
continue;
}
if(deep&&copy&&(jQuery.isPlainObject(copy)||
(copyIsArray=Array.isArray(copy)))){
src=target[name];
if(copyIsArray&&!Array.isArray(src)){
clone=[];
}else if(!copyIsArray&&!jQuery.isPlainObject(src)){
clone={};
}else{
clone=src;
}
copyIsArray=false;
target[name]=jQuery.extend(deep,clone,copy);
}else if(copy!==undefined){
target[name]=copy;
}
}
}
}
return target;
};
jQuery.extend({
expando:"jQuery"+(version+Math.random()).replace(/\D/g,""),
isReady:true,
error:function(msg){
throw new Error(msg);
},
noop:function(){},
isPlainObject:function(obj){
var proto,Ctor;
if(!obj||toString.call(obj)!=="[object Object]"){
return false;
}
proto=getProto(obj);
if(!proto){
return true;
}
Ctor=hasOwn.call(proto,"constructor")&&proto.constructor;
return typeof Ctor==="function"&&fnToString.call(Ctor)===ObjectFunctionString;
},
isEmptyObject:function(obj){
var name;
for(name in obj){
return false;
}
return true;
},
globalEval:function(code,options,doc){
DOMEval(code,{nonce:options&&options.nonce},doc);
},
each:function(obj,callback){
var length,i=0;
if(isArrayLike(obj)){
length=obj.length;
for(;i<length;i++){
if(callback.call(obj[i],i,obj[i])===false){
break;
}
}
}else{
for(i in obj){
if(callback.call(obj[i],i,obj[i])===false){
break;
}
}
}
return obj;
},
text:function(elem){
var node,
ret="",
i=0,
nodeType=elem.nodeType;
if(!nodeType){
while((node=elem[i++])){
ret+=jQuery.text(node);
}
}
if(nodeType===1||nodeType===11){
return elem.textContent;
}
if(nodeType===9){
return elem.documentElement.textContent;
}
if(nodeType===3||nodeType===4){
return elem.nodeValue;
}
return ret;
},
makeArray:function(arr,results){
var ret=results||[];
if(arr!=null){
if(isArrayLike(Object(arr))){
jQuery.merge(ret,
typeof arr==="string"?
[arr]:arr
);
}else{
push.call(ret,arr);
}
}
return ret;
},
inArray:function(elem,arr,i){
return arr==null?-1:indexOf.call(arr,elem,i);
},
isXMLDoc:function(elem){
var namespace=elem&&elem.namespaceURI,
docElem=elem&&(elem.ownerDocument||elem).documentElement;
return!rhtmlSuffix.test(namespace||docElem&&docElem.nodeName||"HTML");
},
merge:function(first,second){
var len=+second.length,
j=0,
i=first.length;
for(;j<len;j++){
first[i++]=second[j];
}
first.length=i;
return first;
},
grep:function(elems,callback,invert){
var callbackInverse,
matches=[],
i=0,
length=elems.length,
callbackExpect=!invert;
for(;i<length;i++){
callbackInverse=!callback(elems[i],i);
if(callbackInverse!==callbackExpect){
matches.push(elems[i]);
}
}
return matches;
},
map:function(elems,callback,arg){
var length,value,
i=0,
ret=[];
if(isArrayLike(elems)){
length=elems.length;
for(;i<length;i++){
value=callback(elems[i],i,arg);
if(value!=null){
ret.push(value);
}
}
}else{
for(i in elems){
value=callback(elems[i],i,arg);
if(value!=null){
ret.push(value);
}
}
}
return flat(ret);
},
guid:1,
support:support
});
if(typeof Symbol==="function"){
jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];
}
jQuery.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
function(_i,name){
class2type["[object "+name+"]"]=name.toLowerCase();
});
function isArrayLike(obj){
var length=!!obj&&"length"in obj&&obj.length,
type=toType(obj);
if(isFunction(obj)||isWindow(obj)){
return false;
}
return type==="array"||length===0||
typeof length==="number"&&length>0&&(length-1)in obj;
}
function nodeName(elem,name){
return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();
}
var pop=arr.pop;
var sort=arr.sort;
var splice=arr.splice;
var whitespace="[\\x20\\t\\r\\n\\f]";
var rtrimCSS=new RegExp(
"^"+whitespace+"+|((?:^|[^\\\\])(?:\\\\.)*)"+whitespace+"+$",
"g"
);
jQuery.contains=function(a,b){
var bup=b&&b.parentNode;
return a===bup||!!(bup&&bup.nodeType===1&&(
a.contains?
a.contains(bup):
a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16
));
};
var rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
function fcssescape(ch,asCodePoint){
if(asCodePoint){
if(ch==="\0"){
return"\uFFFD";
}
return ch.slice(0,-1)+"\\"+ch.charCodeAt(ch.length-1).toString(16)+" ";
}
return"\\"+ch;
}
jQuery.escapeSelector=function(sel){
return(sel+"").replace(rcssescape,fcssescape);
};
var preferredDoc=document,
pushNative=push;
(function(){
var i,
Expr,
outermostContext,
sortInput,
hasDuplicate,
push=pushNative,
document,
documentElement,
documentIsHTML,
rbuggyQSA,
matches,
expando=jQuery.expando,
dirruns=0,
done=0,
classCache=createCache(),
tokenCache=createCache(),
compilerCache=createCache(),
nonnativeSelectorCache=createCache(),
sortOrder=function(a,b){
if(a===b){
hasDuplicate=true;
}
return 0;
},
booleans="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|"+
"loop|multiple|open|readonly|required|scoped",
identifier="(?:\\\\[\\da-fA-F]{1,6}"+whitespace+
"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
attributes="\\["+whitespace+"*("+identifier+")(?:"+whitespace+
"*([*^$|!~]?=)"+whitespace+
"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+identifier+"))|)"+
whitespace+"*\\]",
pseudos=":("+identifier+")(?:\\(("+
"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|"+
"((?:\\\\.|[^\\\\()[\\]]|"+attributes+")*)|"+
".*"+
")\\)|)",
rwhitespace=new RegExp(whitespace+"+","g"),
rcomma=new RegExp("^"+whitespace+"*,"+whitespace+"*"),
rleadingCombinator=new RegExp("^"+whitespace+"*([>+~]|"+whitespace+")"+
whitespace+"*"),
rdescend=new RegExp(whitespace+"|>"),
rpseudo=new RegExp(pseudos),
ridentifier=new RegExp("^"+identifier+"$"),
matchExpr={
ID:new RegExp("^#("+identifier+")"),
CLASS:new RegExp("^\\.("+identifier+")"),
TAG:new RegExp("^("+identifier+"|[*])"),
ATTR:new RegExp("^"+attributes),
PSEUDO:new RegExp("^"+pseudos),
CHILD:new RegExp(
"^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+
whitespace+"*(even|odd|(([+-]|)(\\d*)n|)"+whitespace+"*(?:([+-]|)"+
whitespace+"*(\\d+)|))"+whitespace+"*\\)|)","i"),
bool:new RegExp("^(?:"+booleans+")$","i"),
needsContext:new RegExp("^"+whitespace+
"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+whitespace+
"*((?:-\\d)?\\d*)"+whitespace+"*\\)|)(?=[^-]|$)","i")
},
rinputs=/^(?:input|select|textarea|button)$/i,
rheader=/^h\d$/i,
rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
rsibling=/[+~]/,
runescape=new RegExp("\\\\[\\da-fA-F]{1,6}"+whitespace+
"?|\\\\([^\\r\\n\\f])","g"),
funescape=function(escape,nonHex){
var high="0x"+escape.slice(1)-0x10000;
if(nonHex){
return nonHex;
}
return high<0?
String.fromCharCode(high+0x10000):
String.fromCharCode(high>>10|0xD800,high&0x3FF|0xDC00);
},
unloadHandler=function(){
setDocument();
},
inDisabledFieldset=addCombinator(
function(elem){
return elem.disabled===true&&nodeName(elem,"fieldset");
},
{dir:"parentNode",next:"legend"}
);
function safeActiveElement(){
try{
return document.activeElement;
}catch(err){}
}
try{
push.apply(
(arr=slice.call(preferredDoc.childNodes)),
preferredDoc.childNodes
);
arr[preferredDoc.childNodes.length].nodeType;
}catch(e){
push={
apply:function(target,els){
pushNative.apply(target,slice.call(els));
},
call:function(target){
pushNative.apply(target,slice.call(arguments,1));
}
};
}
function find(selector,context,results,seed){
var m,i,elem,nid,match,groups,newSelector,
newContext=context&&context.ownerDocument,
nodeType=context?context.nodeType:9;
results=results||[];
if(typeof selector!=="string"||!selector||
nodeType!==1&&nodeType!==9&&nodeType!==11){
return results;
}
if(!seed){
setDocument(context);
context=context||document;
if(documentIsHTML){
if(nodeType!==11&&(match=rquickExpr.exec(selector))){
if((m=match[1])){
if(nodeType===9){
if((elem=context.getElementById(m))){
if(elem.id===m){
push.call(results,elem);
return results;
}
}else{
return results;
}
}else{
if(newContext&&(elem=newContext.getElementById(m))&&
find.contains(context,elem)&&
elem.id===m){
push.call(results,elem);
return results;
}
}
}else if(match[2]){
push.apply(results,context.getElementsByTagName(selector));
return results;
}else if((m=match[3])&&context.getElementsByClassName){
push.apply(results,context.getElementsByClassName(m));
return results;
}
}
if(!nonnativeSelectorCache[selector+" "]&&
(!rbuggyQSA||!rbuggyQSA.test(selector))){
newSelector=selector;
newContext=context;
if(nodeType===1&&
(rdescend.test(selector)||rleadingCombinator.test(selector))){
newContext=rsibling.test(selector)&&testContext(context.parentNode)||
context;
if(newContext!=context||!support.scope){
if((nid=context.getAttribute("id"))){
nid=jQuery.escapeSelector(nid);
}else{
context.setAttribute("id",(nid=expando));
}
}
groups=tokenize(selector);
i=groups.length;
while(i--){
groups[i]=(nid?"#"+nid:":scope")+" "+
toSelector(groups[i]);
}
newSelector=groups.join(",");
}
try{
push.apply(results,
newContext.querySelectorAll(newSelector)
);
return results;
}catch(qsaError){
nonnativeSelectorCache(selector,true);
}finally{
if(nid===expando){
context.removeAttribute("id");
}
}
}
}
}
return select(selector.replace(rtrimCSS,"$1"),context,results,seed);
}
function createCache(){
var keys=[];
function cache(key,value){
if(keys.push(key+" ")>Expr.cacheLength){
delete cache[keys.shift()];
}
return(cache[key+" "]=value);
}
return cache;
}
function markFunction(fn){
fn[expando]=true;
return fn;
}
function assert(fn){
var el=document.createElement("fieldset");
try{
return!!fn(el);
}catch(e){
return false;
}finally{
if(el.parentNode){
el.parentNode.removeChild(el);
}
el=null;
}
}
function createInputPseudo(type){
return function(elem){
return nodeName(elem,"input")&&elem.type===type;
};
}
function createButtonPseudo(type){
return function(elem){
return(nodeName(elem,"input")||nodeName(elem,"button"))&&
elem.type===type;
};
}
function createDisabledPseudo(disabled){
return function(elem){
if("form"in elem){
if(elem.parentNode&&elem.disabled===false){
if("label"in elem){
if("label"in elem.parentNode){
return elem.parentNode.disabled===disabled;
}else{
return elem.disabled===disabled;
}
}
return elem.isDisabled===disabled||
elem.isDisabled!==!disabled&&
inDisabledFieldset(elem)===disabled;
}
return elem.disabled===disabled;
}else if("label"in elem){
return elem.disabled===disabled;
}
return false;
};
}
function createPositionalPseudo(fn){
return markFunction(function(argument){
argument=+argument;
return markFunction(function(seed,matches){
var j,
matchIndexes=fn([],seed.length,argument),
i=matchIndexes.length;
while(i--){
if(seed[(j=matchIndexes[i])]){
seed[j]=!(matches[j]=seed[j]);
}
}
});
});
}
function testContext(context){
return context&&typeof context.getElementsByTagName!=="undefined"&&context;
}
function setDocument(node){
var subWindow,
doc=node?node.ownerDocument||node:preferredDoc;
if(doc==document||doc.nodeType!==9||!doc.documentElement){
return document;
}
document=doc;
documentElement=document.documentElement;
documentIsHTML=!jQuery.isXMLDoc(document);
matches=documentElement.matches||
documentElement.webkitMatchesSelector||
documentElement.msMatchesSelector;
if(documentElement.msMatchesSelector&&
preferredDoc!=document&&
(subWindow=document.defaultView)&&subWindow.top!==subWindow){
subWindow.addEventListener("unload",unloadHandler);
}
support.getById=assert(function(el){
documentElement.appendChild(el).id=jQuery.expando;
return!document.getElementsByName||
!document.getElementsByName(jQuery.expando).length;
});
support.disconnectedMatch=assert(function(el){
return matches.call(el,"*");
});
support.scope=assert(function(){
return document.querySelectorAll(":scope");
});
support.cssHas=assert(function(){
try{
document.querySelector(":has(*,:jqfake)");
return false;
}catch(e){
return true;
}
});
if(support.getById){
Expr.filter.ID=function(id){
var attrId=id.replace(runescape,funescape);
return function(elem){
return elem.getAttribute("id")===attrId;
};
};
Expr.find.ID=function(id,context){
if(typeof context.getElementById!=="undefined"&&documentIsHTML){
var elem=context.getElementById(id);
return elem?[elem]:[];
}
};
}else{
Expr.filter.ID=function(id){
var attrId=id.replace(runescape,funescape);
return function(elem){
var node=typeof elem.getAttributeNode!=="undefined"&&
elem.getAttributeNode("id");
return node&&node.value===attrId;
};
};
Expr.find.ID=function(id,context){
if(typeof context.getElementById!=="undefined"&&documentIsHTML){
var node,i,elems,
elem=context.getElementById(id);
if(elem){
node=elem.getAttributeNode("id");
if(node&&node.value===id){
return[elem];
}
elems=context.getElementsByName(id);
i=0;
while((elem=elems[i++])){
node=elem.getAttributeNode("id");
if(node&&node.value===id){
return[elem];
}
}
}
return[];
}
};
}
Expr.find.TAG=function(tag,context){
if(typeof context.getElementsByTagName!=="undefined"){
return context.getElementsByTagName(tag);
}else{
return context.querySelectorAll(tag);
}
};
Expr.find.CLASS=function(className,context){
if(typeof context.getElementsByClassName!=="undefined"&&documentIsHTML){
return context.getElementsByClassName(className);
}
};
rbuggyQSA=[];
assert(function(el){
var input;
documentElement.appendChild(el).innerHTML=
"<a id='"+expando+"' href='' disabled='disabled'></a>"+
"<select id='"+expando+"-\r\\' disabled='disabled'>"+
"<option selected=''></option></select>";
if(!el.querySelectorAll("[selected]").length){
rbuggyQSA.push("\\["+whitespace+"*(?:value|"+booleans+")");
}
if(!el.querySelectorAll("[id~="+expando+"-]").length){
rbuggyQSA.push("~=");
}
if(!el.querySelectorAll("a#"+expando+"+*").length){
rbuggyQSA.push(".#.+[+~]");
}
if(!el.querySelectorAll(":checked").length){
rbuggyQSA.push(":checked");
}
input=document.createElement("input");
input.setAttribute("type","hidden");
el.appendChild(input).setAttribute("name","D");
documentElement.appendChild(el).disabled=true;
if(el.querySelectorAll(":disabled").length!==2){
rbuggyQSA.push(":enabled",":disabled");
}
input=document.createElement("input");
input.setAttribute("name","");
el.appendChild(input);
if(!el.querySelectorAll("[name='']").length){
rbuggyQSA.push("\\["+whitespace+"*name"+whitespace+"*="+
whitespace+"*(?:''|\"\")");
}
});
if(!support.cssHas){
rbuggyQSA.push(":has");
}
rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join("|"));
sortOrder=function(a,b){
if(a===b){
hasDuplicate=true;
return 0;
}
var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;
if(compare){
return compare;
}
compare=(a.ownerDocument||a)==(b.ownerDocument||b)?
a.compareDocumentPosition(b):
1;
if(compare&1||
(!support.sortDetached&&b.compareDocumentPosition(a)===compare)){
if(a===document||a.ownerDocument==preferredDoc&&
find.contains(preferredDoc,a)){
return-1;
}
if(b===document||b.ownerDocument==preferredDoc&&
find.contains(preferredDoc,b)){
return 1;
}
return sortInput?
(indexOf.call(sortInput,a)-indexOf.call(sortInput,b)):
0;
}
return compare&4?-1:1;
};
return document;
}
find.matches=function(expr,elements){
return find(expr,null,null,elements);
};
find.matchesSelector=function(elem,expr){
setDocument(elem);
if(documentIsHTML&&
!nonnativeSelectorCache[expr+" "]&&
(!rbuggyQSA||!rbuggyQSA.test(expr))){
try{
var ret=matches.call(elem,expr);
if(ret||support.disconnectedMatch||
elem.document&&elem.document.nodeType!==11){
return ret;
}
}catch(e){
nonnativeSelectorCache(expr,true);
}
}
return find(expr,document,null,[elem]).length>0;
};
find.contains=function(context,elem){
if((context.ownerDocument||context)!=document){
setDocument(context);
}
return jQuery.contains(context,elem);
};
find.attr=function(elem,name){
if((elem.ownerDocument||elem)!=document){
setDocument(elem);
}
var fn=Expr.attrHandle[name.toLowerCase()],
val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?
fn(elem,name,!documentIsHTML):
undefined;
if(val!==undefined){
return val;
}
return elem.getAttribute(name);
};
find.error=function(msg){
throw new Error("Syntax error, unrecognized expression: "+msg);
};
jQuery.uniqueSort=function(results){
var elem,
duplicates=[],
j=0,
i=0;
hasDuplicate=!support.sortStable;
sortInput=!support.sortStable&&slice.call(results,0);
sort.call(results,sortOrder);
if(hasDuplicate){
while((elem=results[i++])){
if(elem===results[i]){
j=duplicates.push(i);
}
}
while(j--){
splice.call(results,duplicates[j],1);
}
}
sortInput=null;
return results;
};
jQuery.fn.uniqueSort=function(){
return this.pushStack(jQuery.uniqueSort(slice.apply(this)));
};
Expr=jQuery.expr={
cacheLength:50,
createPseudo:markFunction,
match:matchExpr,
attrHandle:{},
find:{},
relative:{
">":{dir:"parentNode",first:true},
" ":{dir:"parentNode"},
"+":{dir:"previousSibling",first:true},
"~":{dir:"previousSibling"}
},
preFilter:{
ATTR:function(match){
match[1]=match[1].replace(runescape,funescape);
match[3]=(match[3]||match[4]||match[5]||"")
.replace(runescape,funescape);
if(match[2]==="~="){
match[3]=" "+match[3]+" ";
}
return match.slice(0,4);
},
CHILD:function(match){
match[1]=match[1].toLowerCase();
if(match[1].slice(0,3)==="nth"){
if(!match[3]){
find.error(match[0]);
}
match[4]=+(match[4]?
match[5]+(match[6]||1):
2*(match[3]==="even"||match[3]==="odd")
);
match[5]=+((match[7]+match[8])||match[3]==="odd");
}else if(match[3]){
find.error(match[0]);
}
return match;
},
PSEUDO:function(match){
var excess,
unquoted=!match[6]&&match[2];
if(matchExpr.CHILD.test(match[0])){
return null;
}
if(match[3]){
match[2]=match[4]||match[5]||"";
}else if(unquoted&&rpseudo.test(unquoted)&&
(excess=tokenize(unquoted,true))&&
(excess=unquoted.indexOf(")",unquoted.length-excess)-unquoted.length)){
match[0]=match[0].slice(0,excess);
match[2]=unquoted.slice(0,excess);
}
return match.slice(0,3);
}
},
filter:{
TAG:function(nodeNameSelector){
var expectedNodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();
return nodeNameSelector==="*"?
function(){
return true;
}:
function(elem){
return nodeName(elem,expectedNodeName);
};
},
CLASS:function(className){
var pattern=classCache[className+" "];
return pattern||
(pattern=new RegExp("(^|"+whitespace+")"+className+
"("+whitespace+"|$)"))&&
classCache(className,function(elem){
return pattern.test(
typeof elem.className==="string"&&elem.className||
typeof elem.getAttribute!=="undefined"&&
elem.getAttribute("class")||
""
);
});
},
ATTR:function(name,operator,check){
return function(elem){
var result=find.attr(elem,name);
if(result==null){
return operator==="!=";
}
if(!operator){
return true;
}
result+="";
if(operator==="="){
return result===check;
}
if(operator==="!="){
return result!==check;
}
if(operator==="^="){
return check&&result.indexOf(check)===0;
}
if(operator==="*="){
return check&&result.indexOf(check)>-1;
}
if(operator==="$="){
return check&&result.slice(-check.length)===check;
}
if(operator==="~="){
return(" "+result.replace(rwhitespace," ")+" ")
.indexOf(check)>-1;
}
if(operator==="|="){
return result===check||result.slice(0,check.length+1)===check+"-";
}
return false;
};
},
CHILD:function(type,what,_argument,first,last){
var simple=type.slice(0,3)!=="nth",
forward=type.slice(-4)!=="last",
ofType=what==="of-type";
return first===1&&last===0?
function(elem){
return!!elem.parentNode;
}:
function(elem,_context,xml){
var cache,outerCache,node,nodeIndex,start,
dir=simple!==forward?"nextSibling":"previousSibling",
parent=elem.parentNode,
name=ofType&&elem.nodeName.toLowerCase(),
useCache=!xml&&!ofType,
diff=false;
if(parent){
if(simple){
while(dir){
node=elem;
while((node=node[dir])){
if(ofType?
nodeName(node,name):
node.nodeType===1){
return false;
}
}
start=dir=type==="only"&&!start&&"nextSibling";
}
return true;
}
start=[forward?parent.firstChild:parent.lastChild];
if(forward&&useCache){
outerCache=parent[expando]||(parent[expando]={});
cache=outerCache[type]||[];
nodeIndex=cache[0]===dirruns&&cache[1];
diff=nodeIndex&&cache[2];
node=nodeIndex&&parent.childNodes[nodeIndex];
while((node=++nodeIndex&&node&&node[dir]||
(diff=nodeIndex=0)||start.pop())){
if(node.nodeType===1&&++diff&&node===elem){
outerCache[type]=[dirruns,nodeIndex,diff];
break;
}
}
}else{
if(useCache){
outerCache=elem[expando]||(elem[expando]={});
cache=outerCache[type]||[];
nodeIndex=cache[0]===dirruns&&cache[1];
diff=nodeIndex;
}
if(diff===false){
while((node=++nodeIndex&&node&&node[dir]||
(diff=nodeIndex=0)||start.pop())){
if((ofType?
nodeName(node,name):
node.nodeType===1)&&
++diff){
if(useCache){
outerCache=node[expando]||
(node[expando]={});
outerCache[type]=[dirruns,diff];
}
if(node===elem){
break;
}
}
}
}
}
diff-=last;
return diff===first||(diff%first===0&&diff/first>=0);
}
};
},
PSEUDO:function(pseudo,argument){
var args,
fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||
find.error("unsupported pseudo: "+pseudo);
if(fn[expando]){
return fn(argument);
}
if(fn.length>1){
args=[pseudo,pseudo,"",argument];
return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?
markFunction(function(seed,matches){
var idx,
matched=fn(seed,argument),
i=matched.length;
while(i--){
idx=indexOf.call(seed,matched[i]);
seed[idx]=!(matches[idx]=matched[i]);
}
}):
function(elem){
return fn(elem,0,args);
};
}
return fn;
}
},
pseudos:{
not:markFunction(function(selector){
var input=[],
results=[],
matcher=compile(selector.replace(rtrimCSS,"$1"));
return matcher[expando]?
markFunction(function(seed,matches,_context,xml){
var elem,
unmatched=matcher(seed,null,xml,[]),
i=seed.length;
while(i--){
if((elem=unmatched[i])){
seed[i]=!(matches[i]=elem);
}
}
}):
function(elem,_context,xml){
input[0]=elem;
matcher(input,null,xml,results);
input[0]=null;
return!results.pop();
};
}),
has:markFunction(function(selector){
return function(elem){
return find(selector,elem).length>0;
};
}),
contains:markFunction(function(text){
text=text.replace(runescape,funescape);
return function(elem){
return(elem.textContent||jQuery.text(elem)).indexOf(text)>-1;
};
}),
lang:markFunction(function(lang){
if(!ridentifier.test(lang||"")){
find.error("unsupported lang: "+lang);
}
lang=lang.replace(runescape,funescape).toLowerCase();
return function(elem){
var elemLang;
do{
if((elemLang=documentIsHTML?
elem.lang:
elem.getAttribute("xml:lang")||elem.getAttribute("lang"))){
elemLang=elemLang.toLowerCase();
return elemLang===lang||elemLang.indexOf(lang+"-")===0;
}
}while((elem=elem.parentNode)&&elem.nodeType===1);
return false;
};
}),
target:function(elem){
var hash=window.location&&window.location.hash;
return hash&&hash.slice(1)===elem.id;
},
root:function(elem){
return elem===documentElement;
},
focus:function(elem){
return elem===safeActiveElement()&&
document.hasFocus()&&
!!(elem.type||elem.href||~elem.tabIndex);
},
enabled:createDisabledPseudo(false),
disabled:createDisabledPseudo(true),
checked:function(elem){
return(nodeName(elem,"input")&&!!elem.checked)||
(nodeName(elem,"option")&&!!elem.selected);
},
selected:function(elem){
if(elem.parentNode){
elem.parentNode.selectedIndex;
}
return elem.selected===true;
},
empty:function(elem){
for(elem=elem.firstChild;elem;elem=elem.nextSibling){
if(elem.nodeType<6){
return false;
}
}
return true;
},
parent:function(elem){
return!Expr.pseudos.empty(elem);
},
header:function(elem){
return rheader.test(elem.nodeName);
},
input:function(elem){
return rinputs.test(elem.nodeName);
},
button:function(elem){
return nodeName(elem,"input")&&elem.type==="button"||
nodeName(elem,"button");
},
text:function(elem){
var attr;
return nodeName(elem,"input")&&elem.type==="text"&&
((attr=elem.getAttribute("type"))==null||
attr.toLowerCase()==="text");
},
first:createPositionalPseudo(function(){
return[0];
}),
last:createPositionalPseudo(function(_matchIndexes,length){
return[length-1];
}),
eq:createPositionalPseudo(function(_matchIndexes,length,argument){
return[argument<0?argument+length:argument];
}),
even:createPositionalPseudo(function(matchIndexes,length){
var i=0;
for(;i<length;i+=2){
matchIndexes.push(i);
}
return matchIndexes;
}),
odd:createPositionalPseudo(function(matchIndexes,length){
var i=1;
for(;i<length;i+=2){
matchIndexes.push(i);
}
return matchIndexes;
}),
lt:createPositionalPseudo(function(matchIndexes,length,argument){
var i;
if(argument<0){
i=argument+length;
}else if(argument>length){
i=length;
}else{
i=argument;
}
for(;--i>=0;){
matchIndexes.push(i);
}
return matchIndexes;
}),
gt:createPositionalPseudo(function(matchIndexes,length,argument){
var i=argument<0?argument+length:argument;
for(;++i<length;){
matchIndexes.push(i);
}
return matchIndexes;
})
}
};
Expr.pseudos.nth=Expr.pseudos.eq;
for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){
Expr.pseudos[i]=createInputPseudo(i);
}
for(i in{submit:true,reset:true}){
Expr.pseudos[i]=createButtonPseudo(i);
}
function setFilters(){}
setFilters.prototype=Expr.filters=Expr.pseudos;
Expr.setFilters=new setFilters();
function tokenize(selector,parseOnly){
var matched,match,tokens,type,
soFar,groups,preFilters,
cached=tokenCache[selector+" "];
if(cached){
return parseOnly?0:cached.slice(0);
}
soFar=selector;
groups=[];
preFilters=Expr.preFilter;
while(soFar){
if(!matched||(match=rcomma.exec(soFar))){
if(match){
soFar=soFar.slice(match[0].length)||soFar;
}
groups.push((tokens=[]));
}
matched=false;
if((match=rleadingCombinator.exec(soFar))){
matched=match.shift();
tokens.push({
value:matched,
type:match[0].replace(rtrimCSS," ")
});
soFar=soFar.slice(matched.length);
}
for(type in Expr.filter){
if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||
(match=preFilters[type](match)))){
matched=match.shift();
tokens.push({
value:matched,
type:type,
matches:match
});
soFar=soFar.slice(matched.length);
}
}
if(!matched){
break;
}
}
if(parseOnly){
return soFar.length;
}
return soFar?
find.error(selector):
tokenCache(selector,groups).slice(0);
}
function toSelector(tokens){
var i=0,
len=tokens.length,
selector="";
for(;i<len;i++){
selector+=tokens[i].value;
}
return selector;
}
function addCombinator(matcher,combinator,base){
var dir=combinator.dir,
skip=combinator.next,
key=skip||dir,
checkNonElements=base&&key==="parentNode",
doneName=done++;
return combinator.first?
function(elem,context,xml){
while((elem=elem[dir])){
if(elem.nodeType===1||checkNonElements){
return matcher(elem,context,xml);
}
}
return false;
}:
function(elem,context,xml){
var oldCache,outerCache,
newCache=[dirruns,doneName];
if(xml){
while((elem=elem[dir])){
if(elem.nodeType===1||checkNonElements){
if(matcher(elem,context,xml)){
return true;
}
}
}
}else{
while((elem=elem[dir])){
if(elem.nodeType===1||checkNonElements){
outerCache=elem[expando]||(elem[expando]={});
if(skip&&nodeName(elem,skip)){
elem=elem[dir]||elem;
}else if((oldCache=outerCache[key])&&
oldCache[0]===dirruns&&oldCache[1]===doneName){
return(newCache[2]=oldCache[2]);
}else{
outerCache[key]=newCache;
if((newCache[2]=matcher(elem,context,xml))){
return true;
}
}
}
}
}
return false;
};
}
function elementMatcher(matchers){
return matchers.length>1?
function(elem,context,xml){
var i=matchers.length;
while(i--){
if(!matchers[i](elem,context,xml)){
return false;
}
}
return true;
}:
matchers[0];
}
function multipleContexts(selector,contexts,results){
var i=0,
len=contexts.length;
for(;i<len;i++){
find(selector,contexts[i],results);
}
return results;
}
function condense(unmatched,map,filter,context,xml){
var elem,
newUnmatched=[],
i=0,
len=unmatched.length,
mapped=map!=null;
for(;i<len;i++){
if((elem=unmatched[i])){
if(!filter||filter(elem,context,xml)){
newUnmatched.push(elem);
if(mapped){
map.push(i);
}
}
}
}
return newUnmatched;
}
function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){
if(postFilter&&!postFilter[expando]){
postFilter=setMatcher(postFilter);
}
if(postFinder&&!postFinder[expando]){
postFinder=setMatcher(postFinder,postSelector);
}
return markFunction(function(seed,results,context,xml){
var temp,i,elem,matcherOut,
preMap=[],
postMap=[],
preexisting=results.length,
elems=seed||
multipleContexts(selector||"*",
context.nodeType?[context]:context,[]),
matcherIn=preFilter&&(seed||!selector)?
condense(elems,preMap,preFilter,context,xml):
elems;
if(matcher){
matcherOut=postFinder||(seed?preFilter:preexisting||postFilter)?
[]:
results;
matcher(matcherIn,matcherOut,context,xml);
}else{
matcherOut=matcherIn;
}
if(postFilter){
temp=condense(matcherOut,postMap);
postFilter(temp,[],context,xml);
i=temp.length;
while(i--){
if((elem=temp[i])){
matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);
}
}
}
if(seed){
if(postFinder||preFilter){
if(postFinder){
temp=[];
i=matcherOut.length;
while(i--){
if((elem=matcherOut[i])){
temp.push((matcherIn[i]=elem));
}
}
postFinder(null,(matcherOut=[]),temp,xml);
}
i=matcherOut.length;
while(i--){
if((elem=matcherOut[i])&&
(temp=postFinder?indexOf.call(seed,elem):preMap[i])>-1){
seed[temp]=!(results[temp]=elem);
}
}
}
}else{
matcherOut=condense(
matcherOut===results?
matcherOut.splice(preexisting,matcherOut.length):
matcherOut
);
if(postFinder){
postFinder(null,results,matcherOut,xml);
}else{
push.apply(results,matcherOut);
}
}
});
}
function matcherFromTokens(tokens){
var checkContext,matcher,j,
len=tokens.length,
leadingRelative=Expr.relative[tokens[0].type],
implicitRelative=leadingRelative||Expr.relative[" "],
i=leadingRelative?1:0,
matchContext=addCombinator(function(elem){
return elem===checkContext;
},implicitRelative,true),
matchAnyContext=addCombinator(function(elem){
return indexOf.call(checkContext,elem)>-1;
},implicitRelative,true),
matchers=[function(elem,context,xml){
var ret=(!leadingRelative&&(xml||context!=outermostContext))||(
(checkContext=context).nodeType?
matchContext(elem,context,xml):
matchAnyContext(elem,context,xml));
checkContext=null;
return ret;
}];
for(;i<len;i++){
if((matcher=Expr.relative[tokens[i].type])){
matchers=[addCombinator(elementMatcher(matchers),matcher)];
}else{
matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);
if(matcher[expando]){
j=++i;
for(;j<len;j++){
if(Expr.relative[tokens[j].type]){
break;
}
}
return setMatcher(
i>1&&elementMatcher(matchers),
i>1&&toSelector(
tokens.slice(0,i-1)
.concat({value:tokens[i-2].type===" "?"*":""})
).replace(rtrimCSS,"$1"),
matcher,
i<j&&matcherFromTokens(tokens.slice(i,j)),
j<len&&matcherFromTokens((tokens=tokens.slice(j))),
j<len&&toSelector(tokens)
);
}
matchers.push(matcher);
}
}
return elementMatcher(matchers);
}
function matcherFromGroupMatchers(elementMatchers,setMatchers){
var bySet=setMatchers.length>0,
byElement=elementMatchers.length>0,
superMatcher=function(seed,context,xml,results,outermost){
var elem,j,matcher,
matchedCount=0,
i="0",
unmatched=seed&&[],
setMatched=[],
contextBackup=outermostContext,
elems=seed||byElement&&Expr.find.TAG("*",outermost),
dirrunsUnique=(dirruns+=contextBackup==null?1:Math.random()||0.1),
len=elems.length;
if(outermost){
outermostContext=context==document||context||outermost;
}
for(;i!==len&&(elem=elems[i])!=null;i++){
if(byElement&&elem){
j=0;
if(!context&&elem.ownerDocument!=document){
setDocument(elem);
xml=!documentIsHTML;
}
while((matcher=elementMatchers[j++])){
if(matcher(elem,context||document,xml)){
push.call(results,elem);
break;
}
}
if(outermost){
dirruns=dirrunsUnique;
}
}
if(bySet){
if((elem=!matcher&&elem)){
matchedCount--;
}
if(seed){
unmatched.push(elem);
}
}
}
matchedCount+=i;
if(bySet&&i!==matchedCount){
j=0;
while((matcher=setMatchers[j++])){
matcher(unmatched,setMatched,context,xml);
}
if(seed){
if(matchedCount>0){
while(i--){
if(!(unmatched[i]||setMatched[i])){
setMatched[i]=pop.call(results);
}
}
}
setMatched=condense(setMatched);
}
push.apply(results,setMatched);
if(outermost&&!seed&&setMatched.length>0&&
(matchedCount+setMatchers.length)>1){
jQuery.uniqueSort(results);
}
}
if(outermost){
dirruns=dirrunsUnique;
outermostContext=contextBackup;
}
return unmatched;
};
return bySet?
markFunction(superMatcher):
superMatcher;
}
function compile(selector,match){
var i,
setMatchers=[],
elementMatchers=[],
cached=compilerCache[selector+" "];
if(!cached){
if(!match){
match=tokenize(selector);
}
i=match.length;
while(i--){
cached=matcherFromTokens(match[i]);
if(cached[expando]){
setMatchers.push(cached);
}else{
elementMatchers.push(cached);
}
}
cached=compilerCache(selector,
matcherFromGroupMatchers(elementMatchers,setMatchers));
cached.selector=selector;
}
return cached;
}
function select(selector,context,results,seed){
var i,tokens,token,type,find,
compiled=typeof selector==="function"&&selector,
match=!seed&&tokenize((selector=compiled.selector||selector));
results=results||[];
if(match.length===1){
tokens=match[0]=match[0].slice(0);
if(tokens.length>2&&(token=tokens[0]).type==="ID"&&
context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){
context=(Expr.find.ID(
token.matches[0].replace(runescape,funescape),
context
)||[])[0];
if(!context){
return results;
}else if(compiled){
context=context.parentNode;
}
selector=selector.slice(tokens.shift().value.length);
}
i=matchExpr.needsContext.test(selector)?0:tokens.length;
while(i--){
token=tokens[i];
if(Expr.relative[(type=token.type)]){
break;
}
if((find=Expr.find[type])){
if((seed=find(
token.matches[0].replace(runescape,funescape),
rsibling.test(tokens[0].type)&&
testContext(context.parentNode)||context
))){
tokens.splice(i,1);
selector=seed.length&&toSelector(tokens);
if(!selector){
push.apply(results,seed);
return results;
}
break;
}
}
}
}
(compiled||compile(selector,match))(
seed,
context,
!documentIsHTML,
results,
!context||rsibling.test(selector)&&testContext(context.parentNode)||context
);
return results;
}
support.sortStable=expando.split("").sort(sortOrder).join("")===expando;
setDocument();
support.sortDetached=assert(function(el){
return el.compareDocumentPosition(document.createElement("fieldset"))&1;
});
jQuery.find=find;
jQuery.expr[":"]=jQuery.expr.pseudos;
jQuery.unique=jQuery.uniqueSort;
find.compile=compile;
find.select=select;
find.setDocument=setDocument;
find.tokenize=tokenize;
find.escape=jQuery.escapeSelector;
find.getText=jQuery.text;
find.isXML=jQuery.isXMLDoc;
find.selectors=jQuery.expr;
find.support=jQuery.support;
find.uniqueSort=jQuery.uniqueSort;
})();
var dir=function(elem,dir,until){
var matched=[],
truncate=until!==undefined;
while((elem=elem[dir])&&elem.nodeType!==9){
if(elem.nodeType===1){
if(truncate&&jQuery(elem).is(until)){
break;
}
matched.push(elem);
}
}
return matched;
};
var siblings=function(n,elem){
var matched=[];
for(;n;n=n.nextSibling){
if(n.nodeType===1&&n!==elem){
matched.push(n);
}
}
return matched;
};
var rneedsContext=jQuery.expr.match.needsContext;
var rsingleTag=(/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i);
function winnow(elements,qualifier,not){
if(isFunction(qualifier)){
return jQuery.grep(elements,function(elem,i){
return!!qualifier.call(elem,i,elem)!==not;
});
}
if(qualifier.nodeType){
return jQuery.grep(elements,function(elem){
return(elem===qualifier)!==not;
});
}
if(typeof qualifier!=="string"){
return jQuery.grep(elements,function(elem){
return(indexOf.call(qualifier,elem)>-1)!==not;
});
}
return jQuery.filter(qualifier,elements,not);
}
jQuery.filter=function(expr,elems,not){
var elem=elems[0];
if(not){
expr=":not("+expr+")";
}
if(elems.length===1&&elem.nodeType===1){
return jQuery.find.matchesSelector(elem,expr)?[elem]:[];
}
return jQuery.find.matches(expr,jQuery.grep(elems,function(elem){
return elem.nodeType===1;
}));
};
jQuery.fn.extend({
find:function(selector){
var i,ret,
len=this.length,
self=this;
if(typeof selector!=="string"){
return this.pushStack(jQuery(selector).filter(function(){
for(i=0;i<len;i++){
if(jQuery.contains(self[i],this)){
return true;
}
}
}));
}
ret=this.pushStack([]);
for(i=0;i<len;i++){
jQuery.find(selector,self[i],ret);
}
return len>1?jQuery.uniqueSort(ret):ret;
},
filter:function(selector){
return this.pushStack(winnow(this,selector||[],false));
},
not:function(selector){
return this.pushStack(winnow(this,selector||[],true));
},
is:function(selector){
return!!winnow(
this,
typeof selector==="string"&&rneedsContext.test(selector)?
jQuery(selector):
selector||[],
false
).length;
}
});
var rootjQuery,
rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
init=jQuery.fn.init=function(selector,context,root){
var match,elem;
if(!selector){
return this;
}
root=root||rootjQuery;
if(typeof selector==="string"){
if(selector[0]==="<"&&
selector[selector.length-1]===">"&&
selector.length>=3){
match=[null,selector,null];
}else{
match=rquickExpr.exec(selector);
}
if(match&&(match[1]||!context)){
if(match[1]){
context=context instanceof jQuery?context[0]:context;
jQuery.merge(this,jQuery.parseHTML(
match[1],
context&&context.nodeType?context.ownerDocument||context:document,
true
));
if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){
for(match in context){
if(isFunction(this[match])){
this[match](context[match]);
}else{
this.attr(match,context[match]);
}
}
}
return this;
}else{
elem=document.getElementById(match[2]);
if(elem){
this[0]=elem;
this.length=1;
}
return this;
}
}else if(!context||context.jquery){
return(context||root).find(selector);
}else{
return this.constructor(context).find(selector);
}
}else if(selector.nodeType){
this[0]=selector;
this.length=1;
return this;
}else if(isFunction(selector)){
return root.ready!==undefined?
root.ready(selector):
selector(jQuery);
}
return jQuery.makeArray(selector,this);
};
init.prototype=jQuery.fn;
rootjQuery=jQuery(document);
var rparentsprev=/^(?:parents|prev(?:Until|All))/,
guaranteedUnique={
children:true,
contents:true,
next:true,
prev:true
};
jQuery.fn.extend({
has:function(target){
var targets=jQuery(target,this),
l=targets.length;
return this.filter(function(){
var i=0;
for(;i<l;i++){
if(jQuery.contains(this,targets[i])){
return true;
}
}
});
},
closest:function(selectors,context){
var cur,
i=0,
l=this.length,
matched=[],
targets=typeof selectors!=="string"&&jQuery(selectors);
if(!rneedsContext.test(selectors)){
for(;i<l;i++){
for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){
if(cur.nodeType<11&&(targets?
targets.index(cur)>-1:
cur.nodeType===1&&
jQuery.find.matchesSelector(cur,selectors))){
matched.push(cur);
break;
}
}
}
}
return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);
},
index:function(elem){
if(!elem){
return(this[0]&&this[0].parentNode)?this.first().prevAll().length:-1;
}
if(typeof elem==="string"){
return indexOf.call(jQuery(elem),this[0]);
}
return indexOf.call(this,
elem.jquery?elem[0]:elem
);
},
add:function(selector,context){
return this.pushStack(
jQuery.uniqueSort(
jQuery.merge(this.get(),jQuery(selector,context))
)
);
},
addBack:function(selector){
return this.add(selector==null?
this.prevObject:this.prevObject.filter(selector)
);
}
});
function sibling(cur,dir){
while((cur=cur[dir])&&cur.nodeType!==1){}
return cur;
}
jQuery.each({
parent:function(elem){
var parent=elem.parentNode;
return parent&&parent.nodeType!==11?parent:null;
},
parents:function(elem){
return dir(elem,"parentNode");
},
parentsUntil:function(elem,_i,until){
return dir(elem,"parentNode",until);
},
next:function(elem){
return sibling(elem,"nextSibling");
},
prev:function(elem){
return sibling(elem,"previousSibling");
},
nextAll:function(elem){
return dir(elem,"nextSibling");
},
prevAll:function(elem){
return dir(elem,"previousSibling");
},
nextUntil:function(elem,_i,until){
return dir(elem,"nextSibling",until);
},
prevUntil:function(elem,_i,until){
return dir(elem,"previousSibling",until);
},
siblings:function(elem){
return siblings((elem.parentNode||{}).firstChild,elem);
},
children:function(elem){
return siblings(elem.firstChild);
},
contents:function(elem){
if(elem.contentDocument!=null&&
getProto(elem.contentDocument)){
return elem.contentDocument;
}
if(nodeName(elem,"template")){
elem=elem.content||elem;
}
return jQuery.merge([],elem.childNodes);
}
},function(name,fn){
jQuery.fn[name]=function(until,selector){
var matched=jQuery.map(this,fn,until);
if(name.slice(-5)!=="Until"){
selector=until;
}
if(selector&&typeof selector==="string"){
matched=jQuery.filter(selector,matched);
}
if(this.length>1){
if(!guaranteedUnique[name]){
jQuery.uniqueSort(matched);
}
if(rparentsprev.test(name)){
matched.reverse();
}
}
return this.pushStack(matched);
};
});
var rnothtmlwhite=(/[^\x20\t\r\n\f]+/g);
function createOptions(options){
var object={};
jQuery.each(options.match(rnothtmlwhite)||[],function(_,flag){
object[flag]=true;
});
return object;
}
jQuery.Callbacks=function(options){
options=typeof options==="string"?
createOptions(options):
jQuery.extend({},options);
var
firing,
memory,
fired,
locked,
list=[],
queue=[],
firingIndex=-1,
fire=function(){
locked=locked||options.once;
fired=firing=true;
for(;queue.length;firingIndex=-1){
memory=queue.shift();
while(++firingIndex<list.length){
if(list[firingIndex].apply(memory[0],memory[1])===false&&
options.stopOnFalse){
firingIndex=list.length;
memory=false;
}
}
}
if(!options.memory){
memory=false;
}
firing=false;
if(locked){
if(memory){
list=[];
}else{
list="";
}
}
},
self={
add:function(){
if(list){
if(memory&&!firing){
firingIndex=list.length-1;
queue.push(memory);
}
(function add(args){
jQuery.each(args,function(_,arg){
if(isFunction(arg)){
if(!options.unique||!self.has(arg)){
list.push(arg);
}
}else if(arg&&arg.length&&toType(arg)!=="string"){
add(arg);
}
});
})(arguments);
if(memory&&!firing){
fire();
}
}
return this;
},
remove:function(){
jQuery.each(arguments,function(_,arg){
var index;
while((index=jQuery.inArray(arg,list,index))>-1){
list.splice(index,1);
if(index<=firingIndex){
firingIndex--;
}
}
});
return this;
},
has:function(fn){
return fn?
jQuery.inArray(fn,list)>-1:
list.length>0;
},
empty:function(){
if(list){
list=[];
}
return this;
},
disable:function(){
locked=queue=[];
list=memory="";
return this;
},
disabled:function(){
return!list;
},
lock:function(){
locked=queue=[];
if(!memory&&!firing){
list=memory="";
}
return this;
},
locked:function(){
return!!locked;
},
fireWith:function(context,args){
if(!locked){
args=args||[];
args=[context,args.slice?args.slice():args];
queue.push(args);
if(!firing){
fire();
}
}
return this;
},
fire:function(){
self.fireWith(this,arguments);
return this;
},
fired:function(){
return!!fired;
}
};
return self;
};
function Identity(v){
return v;
}
function Thrower(ex){
throw ex;
}
function adoptValue(value,resolve,reject,noValue){
var method;
try{
if(value&&isFunction((method=value.promise))){
method.call(value).done(resolve).fail(reject);
}else if(value&&isFunction((method=value.then))){
method.call(value,resolve,reject);
}else{
resolve.apply(undefined,[value].slice(noValue));
}
}catch(value){
reject.apply(undefined,[value]);
}
}
jQuery.extend({
Deferred:function(func){
var tuples=[
["notify","progress",jQuery.Callbacks("memory"),
jQuery.Callbacks("memory"),2],
["resolve","done",jQuery.Callbacks("once memory"),
jQuery.Callbacks("once memory"),0,"resolved"],
["reject","fail",jQuery.Callbacks("once memory"),
jQuery.Callbacks("once memory"),1,"rejected"]
],
state="pending",
promise={
state:function(){
return state;
},
always:function(){
deferred.done(arguments).fail(arguments);
return this;
},
"catch":function(fn){
return promise.then(null,fn);
},
pipe:function(){
var fns=arguments;
return jQuery.Deferred(function(newDefer){
jQuery.each(tuples,function(_i,tuple){
var fn=isFunction(fns[tuple[4]])&&fns[tuple[4]];
deferred[tuple[1]](function(){
var returned=fn&&fn.apply(this,arguments);
if(returned&&isFunction(returned.promise)){
returned.promise()
.progress(newDefer.notify)
.done(newDefer.resolve)
.fail(newDefer.reject);
}else{
newDefer[tuple[0]+"With"](
this,
fn?[returned]:arguments
);
}
});
});
fns=null;
}).promise();
},
then:function(onFulfilled,onRejected,onProgress){
var maxDepth=0;
function resolve(depth,deferred,handler,special){
return function(){
var that=this,
args=arguments,
mightThrow=function(){
var returned,then;
if(depth<maxDepth){
return;
}
returned=handler.apply(that,args);
if(returned===deferred.promise()){
throw new TypeError("Thenable self-resolution");
}
then=returned&&
(typeof returned==="object"||
typeof returned==="function")&&
returned.then;
if(isFunction(then)){
if(special){
then.call(
returned,
resolve(maxDepth,deferred,Identity,special),
resolve(maxDepth,deferred,Thrower,special)
);
}else{
maxDepth++;
then.call(
returned,
resolve(maxDepth,deferred,Identity,special),
resolve(maxDepth,deferred,Thrower,special),
resolve(maxDepth,deferred,Identity,
deferred.notifyWith)
);
}
}else{
if(handler!==Identity){
that=undefined;
args=[returned];
}
(special||deferred.resolveWith)(that,args);
}
},
process=special?
mightThrow:
function(){
try{
mightThrow();
}catch(e){
if(jQuery.Deferred.exceptionHook){
jQuery.Deferred.exceptionHook(e,
process.error);
}
if(depth+1>=maxDepth){
if(handler!==Thrower){
that=undefined;
args=[e];
}
deferred.rejectWith(that,args);
}
}
};
if(depth){
process();
}else{
if(jQuery.Deferred.getErrorHook){
process.error=jQuery.Deferred.getErrorHook();
}else if(jQuery.Deferred.getStackHook){
process.error=jQuery.Deferred.getStackHook();
}
window.setTimeout(process);
}
};
}
return jQuery.Deferred(function(newDefer){
tuples[0][3].add(
resolve(
0,
newDefer,
isFunction(onProgress)?
onProgress:
Identity,
newDefer.notifyWith
)
);
tuples[1][3].add(
resolve(
0,
newDefer,
isFunction(onFulfilled)?
onFulfilled:
Identity
)
);
tuples[2][3].add(
resolve(
0,
newDefer,
isFunction(onRejected)?
onRejected:
Thrower
)
);
}).promise();
},
promise:function(obj){
return obj!=null?jQuery.extend(obj,promise):promise;
}
},
deferred={};
jQuery.each(tuples,function(i,tuple){
var list=tuple[2],
stateString=tuple[5];
promise[tuple[1]]=list.add;
if(stateString){
list.add(
function(){
state=stateString;
},
tuples[3-i][2].disable,
tuples[3-i][3].disable,
tuples[0][2].lock,
tuples[0][3].lock
);
}
list.add(tuple[3].fire);
deferred[tuple[0]]=function(){
deferred[tuple[0]+"With"](this===deferred?undefined:this,arguments);
return this;
};
deferred[tuple[0]+"With"]=list.fireWith;
});
promise.promise(deferred);
if(func){
func.call(deferred,deferred);
}
return deferred;
},
when:function(singleValue){
var
remaining=arguments.length,
i=remaining,
resolveContexts=Array(i),
resolveValues=slice.call(arguments),
primary=jQuery.Deferred(),
updateFunc=function(i){
return function(value){
resolveContexts[i]=this;
resolveValues[i]=arguments.length>1?slice.call(arguments):value;
if(!(--remaining)){
primary.resolveWith(resolveContexts,resolveValues);
}
};
};
if(remaining<=1){
adoptValue(singleValue,primary.done(updateFunc(i)).resolve,primary.reject,
!remaining);
if(primary.state()==="pending"||
isFunction(resolveValues[i]&&resolveValues[i].then)){
return primary.then();
}
}
while(i--){
adoptValue(resolveValues[i],updateFunc(i),primary.reject);
}
return primary.promise();
}
});
var rerrorNames=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
jQuery.Deferred.exceptionHook=function(error,asyncError){
if(window.console&&window.console.warn&&error&&rerrorNames.test(error.name)){
window.console.warn("jQuery.Deferred exception: "+error.message,
error.stack,asyncError);
}
};
jQuery.readyException=function(error){
window.setTimeout(function(){
throw error;
});
};
var readyList=jQuery.Deferred();
jQuery.fn.ready=function(fn){
readyList
.then(fn)
.catch(function(error){
jQuery.readyException(error);
});
return this;
};
jQuery.extend({
isReady:false,
readyWait:1,
ready:function(wait){
if(wait===true?--jQuery.readyWait:jQuery.isReady){
return;
}
jQuery.isReady=true;
if(wait!==true&&--jQuery.readyWait>0){
return;
}
readyList.resolveWith(document,[jQuery]);
}
});
jQuery.ready.then=readyList.then;
function completed(){
document.removeEventListener("DOMContentLoaded",completed);
window.removeEventListener("load",completed);
jQuery.ready();
}
if(document.readyState==="complete"||
(document.readyState!=="loading"&&!document.documentElement.doScroll)){
window.setTimeout(jQuery.ready);
}else{
document.addEventListener("DOMContentLoaded",completed);
window.addEventListener("load",completed);
}
var access=function(elems,fn,key,value,chainable,emptyGet,raw){
var i=0,
len=elems.length,
bulk=key==null;
if(toType(key)==="object"){
chainable=true;
for(i in key){
access(elems,fn,i,key[i],true,emptyGet,raw);
}
}else if(value!==undefined){
chainable=true;
if(!isFunction(value)){
raw=true;
}
if(bulk){
if(raw){
fn.call(elems,value);
fn=null;
}else{
bulk=fn;
fn=function(elem,_key,value){
return bulk.call(jQuery(elem),value);
};
}
}
if(fn){
for(;i<len;i++){
fn(
elems[i],key,raw?
value:
value.call(elems[i],i,fn(elems[i],key))
);
}
}
}
if(chainable){
return elems;
}
if(bulk){
return fn.call(elems);
}
return len?fn(elems[0],key):emptyGet;
};
var rmsPrefix=/^-ms-/,
rdashAlpha=/-([a-z])/g;
function fcamelCase(_all,letter){
return letter.toUpperCase();
}
function camelCase(string){
return string.replace(rmsPrefix,"ms-").replace(rdashAlpha,fcamelCase);
}
var acceptData=function(owner){
return owner.nodeType===1||owner.nodeType===9||!(+owner.nodeType);
};
function Data(){
this.expando=jQuery.expando+Data.uid++;
}
Data.uid=1;
Data.prototype={
cache:function(owner){
var value=owner[this.expando];
if(!value){
value={};
if(acceptData(owner)){
if(owner.nodeType){
owner[this.expando]=value;
}else{
Object.defineProperty(owner,this.expando,{
value:value,
configurable:true
});
}
}
}
return value;
},
set:function(owner,data,value){
var prop,
cache=this.cache(owner);
if(typeof data==="string"){
cache[camelCase(data)]=value;
}else{
for(prop in data){
cache[camelCase(prop)]=data[prop];
}
}
return cache;
},
get:function(owner,key){
return key===undefined?
this.cache(owner):
owner[this.expando]&&owner[this.expando][camelCase(key)];
},
access:function(owner,key,value){
if(key===undefined||
((key&&typeof key==="string")&&value===undefined)){
return this.get(owner,key);
}
this.set(owner,key,value);
return value!==undefined?value:key;
},
remove:function(owner,key){
var i,
cache=owner[this.expando];
if(cache===undefined){
return;
}
if(key!==undefined){
if(Array.isArray(key)){
key=key.map(camelCase);
}else{
key=camelCase(key);
key=key in cache?
[key]:
(key.match(rnothtmlwhite)||[]);
}
i=key.length;
while(i--){
delete cache[key[i]];
}
}
if(key===undefined||jQuery.isEmptyObject(cache)){
if(owner.nodeType){
owner[this.expando]=undefined;
}else{
delete owner[this.expando];
}
}
},
hasData:function(owner){
var cache=owner[this.expando];
return cache!==undefined&&!jQuery.isEmptyObject(cache);
}
};
var dataPriv=new Data();
var dataUser=new Data();
var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
rmultiDash=/[A-Z]/g;
function getData(data){
if(data==="true"){
return true;
}
if(data==="false"){
return false;
}
if(data==="null"){
return null;
}
if(data===+data+""){
return+data;
}
if(rbrace.test(data)){
return JSON.parse(data);
}
return data;
}
function dataAttr(elem,key,data){
var name;
if(data===undefined&&elem.nodeType===1){
name="data-"+key.replace(rmultiDash,"-$&").toLowerCase();
data=elem.getAttribute(name);
if(typeof data==="string"){
try{
data=getData(data);
}catch(e){}
dataUser.set(elem,key,data);
}else{
data=undefined;
}
}
return data;
}
jQuery.extend({
hasData:function(elem){
return dataUser.hasData(elem)||dataPriv.hasData(elem);
},
data:function(elem,name,data){
return dataUser.access(elem,name,data);
},
removeData:function(elem,name){
dataUser.remove(elem,name);
},
_data:function(elem,name,data){
return dataPriv.access(elem,name,data);
},
_removeData:function(elem,name){
dataPriv.remove(elem,name);
}
});
jQuery.fn.extend({
data:function(key,value){
var i,name,data,
elem=this[0],
attrs=elem&&elem.attributes;
if(key===undefined){
if(this.length){
data=dataUser.get(elem);
if(elem.nodeType===1&&!dataPriv.get(elem,"hasDataAttrs")){
i=attrs.length;
while(i--){
if(attrs[i]){
name=attrs[i].name;
if(name.indexOf("data-")===0){
name=camelCase(name.slice(5));
dataAttr(elem,name,data[name]);
}
}
}
dataPriv.set(elem,"hasDataAttrs",true);
}
}
return data;
}
if(typeof key==="object"){
return this.each(function(){
dataUser.set(this,key);
});
}
return access(this,function(value){
var data;
if(elem&&value===undefined){
data=dataUser.get(elem,key);
if(data!==undefined){
return data;
}
data=dataAttr(elem,key);
if(data!==undefined){
return data;
}
return;
}
this.each(function(){
dataUser.set(this,key,value);
});
},null,value,arguments.length>1,null,true);
},
removeData:function(key){
return this.each(function(){
dataUser.remove(this,key);
});
}
});
jQuery.extend({
queue:function(elem,type,data){
var queue;
if(elem){
type=(type||"fx")+"queue";
queue=dataPriv.get(elem,type);
if(data){
if(!queue||Array.isArray(data)){
queue=dataPriv.access(elem,type,jQuery.makeArray(data));
}else{
queue.push(data);
}
}
return queue||[];
}
},
dequeue:function(elem,type){
type=type||"fx";
var queue=jQuery.queue(elem,type),
startLength=queue.length,
fn=queue.shift(),
hooks=jQuery._queueHooks(elem,type),
next=function(){
jQuery.dequeue(elem,type);
};
if(fn==="inprogress"){
fn=queue.shift();
startLength--;
}
if(fn){
if(type==="fx"){
queue.unshift("inprogress");
}
delete hooks.stop;
fn.call(elem,next,hooks);
}
if(!startLength&&hooks){
hooks.empty.fire();
}
},
_queueHooks:function(elem,type){
var key=type+"queueHooks";
return dataPriv.get(elem,key)||dataPriv.access(elem,key,{
empty:jQuery.Callbacks("once memory").add(function(){
dataPriv.remove(elem,[type+"queue",key]);
})
});
}
});
jQuery.fn.extend({
queue:function(type,data){
var setter=2;
if(typeof type!=="string"){
data=type;
type="fx";
setter--;
}
if(arguments.length<setter){
return jQuery.queue(this[0],type);
}
return data===undefined?
this:
this.each(function(){
var queue=jQuery.queue(this,type,data);
jQuery._queueHooks(this,type);
if(type==="fx"&&queue[0]!=="inprogress"){
jQuery.dequeue(this,type);
}
});
},
dequeue:function(type){
return this.each(function(){
jQuery.dequeue(this,type);
});
},
clearQueue:function(type){
return this.queue(type||"fx",[]);
},
promise:function(type,obj){
var tmp,
count=1,
defer=jQuery.Deferred(),
elements=this,
i=this.length,
resolve=function(){
if(!(--count)){
defer.resolveWith(elements,[elements]);
}
};
if(typeof type!=="string"){
obj=type;
type=undefined;
}
type=type||"fx";
while(i--){
tmp=dataPriv.get(elements[i],type+"queueHooks");
if(tmp&&tmp.empty){
count++;
tmp.empty.add(resolve);
}
}
resolve();
return defer.promise(obj);
}
});
var pnum=(/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/).source;
var rcssNum=new RegExp("^(?:([+-])=|)("+pnum+")([a-z%]*)$","i");
var cssExpand=["Top","Right","Bottom","Left"];
var documentElement=document.documentElement;
var isAttached=function(elem){
return jQuery.contains(elem.ownerDocument,elem);
},
composed={composed:true};
if(documentElement.getRootNode){
isAttached=function(elem){
return jQuery.contains(elem.ownerDocument,elem)||
elem.getRootNode(composed)===elem.ownerDocument;
};
}
var isHiddenWithinTree=function(elem,el){
elem=el||elem;
return elem.style.display==="none"||
elem.style.display===""&&
isAttached(elem)&&
jQuery.css(elem,"display")==="none";
};
function adjustCSS(elem,prop,valueParts,tween){
var adjusted,scale,
maxIterations=20,
currentValue=tween?
function(){
return tween.cur();
}:
function(){
return jQuery.css(elem,prop,"");
},
initial=currentValue(),
unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?"":"px"),
initialInUnit=elem.nodeType&&
(jQuery.cssNumber[prop]||unit!=="px"&&+initial)&&
rcssNum.exec(jQuery.css(elem,prop));
if(initialInUnit&&initialInUnit[3]!==unit){
initial=initial/2;
unit=unit||initialInUnit[3];
initialInUnit=+initial||1;
while(maxIterations--){
jQuery.style(elem,prop,initialInUnit+unit);
if((1-scale)*(1-(scale=currentValue()/initial||0.5))<=0){
maxIterations=0;
}
initialInUnit=initialInUnit/scale;
}
initialInUnit=initialInUnit*2;
jQuery.style(elem,prop,initialInUnit+unit);
valueParts=valueParts||[];
}
if(valueParts){
initialInUnit=+initialInUnit||+initial||0;
adjusted=valueParts[1]?
initialInUnit+(valueParts[1]+1)*valueParts[2]:
+valueParts[2];
if(tween){
tween.unit=unit;
tween.start=initialInUnit;
tween.end=adjusted;
}
}
return adjusted;
}
var defaultDisplayMap={};
function getDefaultDisplay(elem){
var temp,
doc=elem.ownerDocument,
nodeName=elem.nodeName,
display=defaultDisplayMap[nodeName];
if(display){
return display;
}
temp=doc.body.appendChild(doc.createElement(nodeName));
display=jQuery.css(temp,"display");
temp.parentNode.removeChild(temp);
if(display==="none"){
display="block";
}
defaultDisplayMap[nodeName]=display;
return display;
}
function showHide(elements,show){
var display,elem,
values=[],
index=0,
length=elements.length;
for(;index<length;index++){
elem=elements[index];
if(!elem.style){
continue;
}
display=elem.style.display;
if(show){
if(display==="none"){
values[index]=dataPriv.get(elem,"display")||null;
if(!values[index]){
elem.style.display="";
}
}
if(elem.style.display===""&&isHiddenWithinTree(elem)){
values[index]=getDefaultDisplay(elem);
}
}else{
if(display!=="none"){
values[index]="none";
dataPriv.set(elem,"display",display);
}
}
}
for(index=0;index<length;index++){
if(values[index]!=null){
elements[index].style.display=values[index];
}
}
return elements;
}
jQuery.fn.extend({
show:function(){
return showHide(this,true);
},
hide:function(){
return showHide(this);
},
toggle:function(state){
if(typeof state==="boolean"){
return state?this.show():this.hide();
}
return this.each(function(){
if(isHiddenWithinTree(this)){
jQuery(this).show();
}else{
jQuery(this).hide();
}
});
}
});
var rcheckableType=(/^(?:checkbox|radio)$/i);
var rtagName=(/<([a-z][^\/\0>\x20\t\r\n\f]*)/i);
var rscriptType=(/^$|^module$|\/(?:java|ecma)script/i);
(function(){
var fragment=document.createDocumentFragment(),
div=fragment.appendChild(document.createElement("div")),
input=document.createElement("input");
input.setAttribute("type","radio");
input.setAttribute("checked","checked");
input.setAttribute("name","t");
div.appendChild(input);
support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;
div.innerHTML="<textarea>x</textarea>";
support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;
div.innerHTML="<option></option>";
support.option=!!div.lastChild;
})();
var wrapMap={
thead:[1,"<table>","</table>"],
col:[2,"<table><colgroup>","</colgroup></table>"],
tr:[2,"<table><tbody>","</tbody></table>"],
td:[3,"<table><tbody><tr>","</tr></tbody></table>"],
_default:[0,"",""]
};
wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;
wrapMap.th=wrapMap.td;
if(!support.option){
wrapMap.optgroup=wrapMap.option=[1,"<select multiple='multiple'>","</select>"];
}
function getAll(context,tag){
var ret;
if(typeof context.getElementsByTagName!=="undefined"){
ret=context.getElementsByTagName(tag||"*");
}else if(typeof context.querySelectorAll!=="undefined"){
ret=context.querySelectorAll(tag||"*");
}else{
ret=[];
}
if(tag===undefined||tag&&nodeName(context,tag)){
return jQuery.merge([context],ret);
}
return ret;
}
function setGlobalEval(elems,refElements){
var i=0,
l=elems.length;
for(;i<l;i++){
dataPriv.set(
elems[i],
"globalEval",
!refElements||dataPriv.get(refElements[i],"globalEval")
);
}
}
var rhtml=/<|&#?\w+;/;
function buildFragment(elems,context,scripts,selection,ignored){
var elem,tmp,tag,wrap,attached,j,
fragment=context.createDocumentFragment(),
nodes=[],
i=0,
l=elems.length;
for(;i<l;i++){
elem=elems[i];
if(elem||elem===0){
if(toType(elem)==="object"){
jQuery.merge(nodes,elem.nodeType?[elem]:elem);
}else if(!rhtml.test(elem)){
nodes.push(context.createTextNode(elem));
}else{
tmp=tmp||fragment.appendChild(context.createElement("div"));
tag=(rtagName.exec(elem)||["",""])[1].toLowerCase();
wrap=wrapMap[tag]||wrapMap._default;
tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];
j=wrap[0];
while(j--){
tmp=tmp.lastChild;
}
jQuery.merge(nodes,tmp.childNodes);
tmp=fragment.firstChild;
tmp.textContent="";
}
}
}
fragment.textContent="";
i=0;
while((elem=nodes[i++])){
if(selection&&jQuery.inArray(elem,selection)>-1){
if(ignored){
ignored.push(elem);
}
continue;
}
attached=isAttached(elem);
tmp=getAll(fragment.appendChild(elem),"script");
if(attached){
setGlobalEval(tmp);
}
if(scripts){
j=0;
while((elem=tmp[j++])){
if(rscriptType.test(elem.type||"")){
scripts.push(elem);
}
}
}
}
return fragment;
}
var rtypenamespace=/^([^.]*)(?:\.(.+)|)/;
function returnTrue(){
return true;
}
function returnFalse(){
return false;
}
function on(elem,types,selector,data,fn,one){
var origFn,type;
if(typeof types==="object"){
if(typeof selector!=="string"){
data=data||selector;
selector=undefined;
}
for(type in types){
on(elem,type,selector,data,types[type],one);
}
return elem;
}
if(data==null&&fn==null){
fn=selector;
data=selector=undefined;
}else if(fn==null){
if(typeof selector==="string"){
fn=data;
data=undefined;
}else{
fn=data;
data=selector;
selector=undefined;
}
}
if(fn===false){
fn=returnFalse;
}else if(!fn){
return elem;
}
if(one===1){
origFn=fn;
fn=function(event){
jQuery().off(event);
return origFn.apply(this,arguments);
};
fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);
}
return elem.each(function(){
jQuery.event.add(this,types,fn,data,selector);
});
}
jQuery.event={
global:{},
add:function(elem,types,handler,data,selector){
var handleObjIn,eventHandle,tmp,
events,t,handleObj,
special,handlers,type,namespaces,origType,
elemData=dataPriv.get(elem);
if(!acceptData(elem)){
return;
}
if(handler.handler){
handleObjIn=handler;
handler=handleObjIn.handler;
selector=handleObjIn.selector;
}
if(selector){
jQuery.find.matchesSelector(documentElement,selector);
}
if(!handler.guid){
handler.guid=jQuery.guid++;
}
if(!(events=elemData.events)){
events=elemData.events=Object.create(null);
}
if(!(eventHandle=elemData.handle)){
eventHandle=elemData.handle=function(e){
return typeof jQuery!=="undefined"&&jQuery.event.triggered!==e.type?
jQuery.event.dispatch.apply(elem,arguments):undefined;
};
}
types=(types||"").match(rnothtmlwhite)||[""];
t=types.length;
while(t--){
tmp=rtypenamespace.exec(types[t])||[];
type=origType=tmp[1];
namespaces=(tmp[2]||"").split(".").sort();
if(!type){
continue;
}
special=jQuery.event.special[type]||{};
type=(selector?special.delegateType:special.bindType)||type;
special=jQuery.event.special[type]||{};
handleObj=jQuery.extend({
type:type,
origType:origType,
data:data,
handler:handler,
guid:handler.guid,
selector:selector,
needsContext:selector&&jQuery.expr.match.needsContext.test(selector),
namespace:namespaces.join(".")
},handleObjIn);
if(!(handlers=events[type])){
handlers=events[type]=[];
handlers.delegateCount=0;
if(!special.setup||
special.setup.call(elem,data,namespaces,eventHandle)===false){
if(elem.addEventListener){
elem.addEventListener(type,eventHandle);
}
}
}
if(special.add){
special.add.call(elem,handleObj);
if(!handleObj.handler.guid){
handleObj.handler.guid=handler.guid;
}
}
if(selector){
handlers.splice(handlers.delegateCount++,0,handleObj);
}else{
handlers.push(handleObj);
}
jQuery.event.global[type]=true;
}
},
remove:function(elem,types,handler,selector,mappedTypes){
var j,origCount,tmp,
events,t,handleObj,
special,handlers,type,namespaces,origType,
elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);
if(!elemData||!(events=elemData.events)){
return;
}
types=(types||"").match(rnothtmlwhite)||[""];
t=types.length;
while(t--){
tmp=rtypenamespace.exec(types[t])||[];
type=origType=tmp[1];
namespaces=(tmp[2]||"").split(".").sort();
if(!type){
for(type in events){
jQuery.event.remove(elem,type+types[t],handler,selector,true);
}
continue;
}
special=jQuery.event.special[type]||{};
type=(selector?special.delegateType:special.bindType)||type;
handlers=events[type]||[];
tmp=tmp[2]&&
new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)");
origCount=j=handlers.length;
while(j--){
handleObj=handlers[j];
if((mappedTypes||origType===handleObj.origType)&&
(!handler||handler.guid===handleObj.guid)&&
(!tmp||tmp.test(handleObj.namespace))&&
(!selector||selector===handleObj.selector||
selector==="**"&&handleObj.selector)){
handlers.splice(j,1);
if(handleObj.selector){
handlers.delegateCount--;
}
if(special.remove){
special.remove.call(elem,handleObj);
}
}
}
if(origCount&&!handlers.length){
if(!special.teardown||
special.teardown.call(elem,namespaces,elemData.handle)===false){
jQuery.removeEvent(elem,type,elemData.handle);
}
delete events[type];
}
}
if(jQuery.isEmptyObject(events)){
dataPriv.remove(elem,"handle events");
}
},
dispatch:function(nativeEvent){
var i,j,ret,matched,handleObj,handlerQueue,
args=new Array(arguments.length),
event=jQuery.event.fix(nativeEvent),
handlers=(
dataPriv.get(this,"events")||Object.create(null)
)[event.type]||[],
special=jQuery.event.special[event.type]||{};
args[0]=event;
for(i=1;i<arguments.length;i++){
args[i]=arguments[i];
}
event.delegateTarget=this;
if(special.preDispatch&&special.preDispatch.call(this,event)===false){
return;
}
handlerQueue=jQuery.event.handlers.call(this,event,handlers);
i=0;
while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){
event.currentTarget=matched.elem;
j=0;
while((handleObj=matched.handlers[j++])&&
!event.isImmediatePropagationStopped()){
if(!event.rnamespace||handleObj.namespace===false||
event.rnamespace.test(handleObj.namespace)){
event.handleObj=handleObj;
event.data=handleObj.data;
ret=((jQuery.event.special[handleObj.origType]||{}).handle||
handleObj.handler).apply(matched.elem,args);
if(ret!==undefined){
if((event.result=ret)===false){
event.preventDefault();
event.stopPropagation();
}
}
}
}
}
if(special.postDispatch){
special.postDispatch.call(this,event);
}
return event.result;
},
handlers:function(event,handlers){
var i,handleObj,sel,matchedHandlers,matchedSelectors,
handlerQueue=[],
delegateCount=handlers.delegateCount,
cur=event.target;
if(delegateCount&&
cur.nodeType&&
!(event.type==="click"&&event.button>=1)){
for(;cur!==this;cur=cur.parentNode||this){
if(cur.nodeType===1&&!(event.type==="click"&&cur.disabled===true)){
matchedHandlers=[];
matchedSelectors={};
for(i=0;i<delegateCount;i++){
handleObj=handlers[i];
sel=handleObj.selector+" ";
if(matchedSelectors[sel]===undefined){
matchedSelectors[sel]=handleObj.needsContext?
jQuery(sel,this).index(cur)>-1:
jQuery.find(sel,this,null,[cur]).length;
}
if(matchedSelectors[sel]){
matchedHandlers.push(handleObj);
}
}
if(matchedHandlers.length){
handlerQueue.push({elem:cur,handlers:matchedHandlers});
}
}
}
}
cur=this;
if(delegateCount<handlers.length){
handlerQueue.push({elem:cur,handlers:handlers.slice(delegateCount)});
}
return handlerQueue;
},
addProp:function(name,hook){
Object.defineProperty(jQuery.Event.prototype,name,{
enumerable:true,
configurable:true,
get:isFunction(hook)?
function(){
if(this.originalEvent){
return hook(this.originalEvent);
}
}:
function(){
if(this.originalEvent){
return this.originalEvent[name];
}
},
set:function(value){
Object.defineProperty(this,name,{
enumerable:true,
configurable:true,
writable:true,
value:value
});
}
});
},
fix:function(originalEvent){
return originalEvent[jQuery.expando]?
originalEvent:
new jQuery.Event(originalEvent);
},
special:{
load:{
noBubble:true
},
click:{
setup:function(data){
var el=this||data;
if(rcheckableType.test(el.type)&&
el.click&&nodeName(el,"input")){
leverageNative(el,"click",true);
}
return false;
},
trigger:function(data){
var el=this||data;
if(rcheckableType.test(el.type)&&
el.click&&nodeName(el,"input")){
leverageNative(el,"click");
}
return true;
},
_default:function(event){
var target=event.target;
return rcheckableType.test(target.type)&&
target.click&&nodeName(target,"input")&&
dataPriv.get(target,"click")||
nodeName(target,"a");
}
},
beforeunload:{
postDispatch:function(event){
if(event.result!==undefined&&event.originalEvent){
event.originalEvent.returnValue=event.result;
}
}
}
}
};
function leverageNative(el,type,isSetup){
if(!isSetup){
if(dataPriv.get(el,type)===undefined){
jQuery.event.add(el,type,returnTrue);
}
return;
}
dataPriv.set(el,type,false);
jQuery.event.add(el,type,{
namespace:false,
handler:function(event){
var result,
saved=dataPriv.get(this,type);
if((event.isTrigger&1)&&this[type]){
if(!saved){
saved=slice.call(arguments);
dataPriv.set(this,type,saved);
this[type]();
result=dataPriv.get(this,type);
dataPriv.set(this,type,false);
if(saved!==result){
event.stopImmediatePropagation();
event.preventDefault();
return result;
}
}else if((jQuery.event.special[type]||{}).delegateType){
event.stopPropagation();
}
}else if(saved){
dataPriv.set(this,type,jQuery.event.trigger(
saved[0],
saved.slice(1),
this
));
event.stopPropagation();
event.isImmediatePropagationStopped=returnTrue;
}
}
});
}
jQuery.removeEvent=function(elem,type,handle){
if(elem.removeEventListener){
elem.removeEventListener(type,handle);
}
};
jQuery.Event=function(src,props){
if(!(this instanceof jQuery.Event)){
return new jQuery.Event(src,props);
}
if(src&&src.type){
this.originalEvent=src;
this.type=src.type;
this.isDefaultPrevented=src.defaultPrevented||
src.defaultPrevented===undefined&&
src.returnValue===false?
returnTrue:
returnFalse;
this.target=(src.target&&src.target.nodeType===3)?
src.target.parentNode:
src.target;
this.currentTarget=src.currentTarget;
this.relatedTarget=src.relatedTarget;
}else{
this.type=src;
}
if(props){
jQuery.extend(this,props);
}
this.timeStamp=src&&src.timeStamp||Date.now();
this[jQuery.expando]=true;
};
jQuery.Event.prototype={
constructor:jQuery.Event,
isDefaultPrevented:returnFalse,
isPropagationStopped:returnFalse,
isImmediatePropagationStopped:returnFalse,
isSimulated:false,
preventDefault:function(){
var e=this.originalEvent;
this.isDefaultPrevented=returnTrue;
if(e&&!this.isSimulated){
e.preventDefault();
}
},
stopPropagation:function(){
var e=this.originalEvent;
this.isPropagationStopped=returnTrue;
if(e&&!this.isSimulated){
e.stopPropagation();
}
},
stopImmediatePropagation:function(){
var e=this.originalEvent;
this.isImmediatePropagationStopped=returnTrue;
if(e&&!this.isSimulated){
e.stopImmediatePropagation();
}
this.stopPropagation();
}
};
jQuery.each({
altKey:true,
bubbles:true,
cancelable:true,
changedTouches:true,
ctrlKey:true,
detail:true,
eventPhase:true,
metaKey:true,
pageX:true,
pageY:true,
shiftKey:true,
view:true,
"char":true,
code:true,
charCode:true,
key:true,
keyCode:true,
button:true,
buttons:true,
clientX:true,
clientY:true,
offsetX:true,
offsetY:true,
pointerId:true,
pointerType:true,
screenX:true,
screenY:true,
targetTouches:true,
toElement:true,
touches:true,
which:true
},jQuery.event.addProp);
jQuery.each({focus:"focusin",blur:"focusout"},function(type,delegateType){
function focusMappedHandler(nativeEvent){
if(document.documentMode){
var handle=dataPriv.get(this,"handle"),
event=jQuery.event.fix(nativeEvent);
event.type=nativeEvent.type==="focusin"?"focus":"blur";
event.isSimulated=true;
handle(nativeEvent);
if(event.target===event.currentTarget){
handle(event);
}
}else{
jQuery.event.simulate(delegateType,nativeEvent.target,
jQuery.event.fix(nativeEvent));
}
}
jQuery.event.special[type]={
setup:function(){
var attaches;
leverageNative(this,type,true);
if(document.documentMode){
attaches=dataPriv.get(this,delegateType);
if(!attaches){
this.addEventListener(delegateType,focusMappedHandler);
}
dataPriv.set(this,delegateType,(attaches||0)+1);
}else{
return false;
}
},
trigger:function(){
leverageNative(this,type);
return true;
},
teardown:function(){
var attaches;
if(document.documentMode){
attaches=dataPriv.get(this,delegateType)-1;
if(!attaches){
this.removeEventListener(delegateType,focusMappedHandler);
dataPriv.remove(this,delegateType);
}else{
dataPriv.set(this,delegateType,attaches);
}
}else{
return false;
}
},
_default:function(event){
return dataPriv.get(event.target,type);
},
delegateType:delegateType
};
jQuery.event.special[delegateType]={
setup:function(){
var doc=this.ownerDocument||this.document||this,
dataHolder=document.documentMode?this:doc,
attaches=dataPriv.get(dataHolder,delegateType);
if(!attaches){
if(document.documentMode){
this.addEventListener(delegateType,focusMappedHandler);
}else{
doc.addEventListener(type,focusMappedHandler,true);
}
}
dataPriv.set(dataHolder,delegateType,(attaches||0)+1);
},
teardown:function(){
var doc=this.ownerDocument||this.document||this,
dataHolder=document.documentMode?this:doc,
attaches=dataPriv.get(dataHolder,delegateType)-1;
if(!attaches){
if(document.documentMode){
this.removeEventListener(delegateType,focusMappedHandler);
}else{
doc.removeEventListener(type,focusMappedHandler,true);
}
dataPriv.remove(dataHolder,delegateType);
}else{
dataPriv.set(dataHolder,delegateType,attaches);
}
}
};
});
jQuery.each({
mouseenter:"mouseover",
mouseleave:"mouseout",
pointerenter:"pointerover",
pointerleave:"pointerout"
},function(orig,fix){
jQuery.event.special[orig]={
delegateType:fix,
bindType:fix,
handle:function(event){
var ret,
target=this,
related=event.relatedTarget,
handleObj=event.handleObj;
if(!related||(related!==target&&!jQuery.contains(target,related))){
event.type=handleObj.origType;
ret=handleObj.handler.apply(this,arguments);
event.type=fix;
}
return ret;
}
};
});
jQuery.fn.extend({
on:function(types,selector,data,fn){
return on(this,types,selector,data,fn);
},
one:function(types,selector,data,fn){
return on(this,types,selector,data,fn,1);
},
off:function(types,selector,fn){
var handleObj,type;
if(types&&types.preventDefault&&types.handleObj){
handleObj=types.handleObj;
jQuery(types.delegateTarget).off(
handleObj.namespace?
handleObj.origType+"."+handleObj.namespace:
handleObj.origType,
handleObj.selector,
handleObj.handler
);
return this;
}
if(typeof types==="object"){
for(type in types){
this.off(type,selector,types[type]);
}
return this;
}
if(selector===false||typeof selector==="function"){
fn=selector;
selector=undefined;
}
if(fn===false){
fn=returnFalse;
}
return this.each(function(){
jQuery.event.remove(this,types,fn,selector);
});
}
});
var
rnoInnerhtml=/<script|<style|<link/i,
rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,
rcleanScript=/^\s*<!\[CDATA\[|\]\]>\s*$/g;
function manipulationTarget(elem,content){
if(nodeName(elem,"table")&&
nodeName(content.nodeType!==11?content:content.firstChild,"tr")){
return jQuery(elem).children("tbody")[0]||elem;
}
return elem;
}
function disableScript(elem){
elem.type=(elem.getAttribute("type")!==null)+"/"+elem.type;
return elem;
}
function restoreScript(elem){
if((elem.type||"").slice(0,5)==="true/"){
elem.type=elem.type.slice(5);
}else{
elem.removeAttribute("type");
}
return elem;
}
function cloneCopyEvent(src,dest){
var i,l,type,pdataOld,udataOld,udataCur,events;
if(dest.nodeType!==1){
return;
}
if(dataPriv.hasData(src)){
pdataOld=dataPriv.get(src);
events=pdataOld.events;
if(events){
dataPriv.remove(dest,"handle events");
for(type in events){
for(i=0,l=events[type].length;i<l;i++){
jQuery.event.add(dest,type,events[type][i]);
}
}
}
}
if(dataUser.hasData(src)){
udataOld=dataUser.access(src);
udataCur=jQuery.extend({},udataOld);
dataUser.set(dest,udataCur);
}
}
function fixInput(src,dest){
var nodeName=dest.nodeName.toLowerCase();
if(nodeName==="input"&&rcheckableType.test(src.type)){
dest.checked=src.checked;
}else if(nodeName==="input"||nodeName==="textarea"){
dest.defaultValue=src.defaultValue;
}
}
function domManip(collection,args,callback,ignored){
args=flat(args);
var fragment,first,scripts,hasScripts,node,doc,
i=0,
l=collection.length,
iNoClone=l-1,
value=args[0],
valueIsFunction=isFunction(value);
if(valueIsFunction||
(l>1&&typeof value==="string"&&
!support.checkClone&&rchecked.test(value))){
return collection.each(function(index){
var self=collection.eq(index);
if(valueIsFunction){
args[0]=value.call(this,index,self.html());
}
domManip(self,args,callback,ignored);
});
}
if(l){
fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);
first=fragment.firstChild;
if(fragment.childNodes.length===1){
fragment=first;
}
if(first||ignored){
scripts=jQuery.map(getAll(fragment,"script"),disableScript);
hasScripts=scripts.length;
for(;i<l;i++){
node=fragment;
if(i!==iNoClone){
node=jQuery.clone(node,true,true);
if(hasScripts){
jQuery.merge(scripts,getAll(node,"script"));
}
}
callback.call(collection[i],node,i);
}
if(hasScripts){
doc=scripts[scripts.length-1].ownerDocument;
jQuery.map(scripts,restoreScript);
for(i=0;i<hasScripts;i++){
node=scripts[i];
if(rscriptType.test(node.type||"")&&
!dataPriv.access(node,"globalEval")&&
jQuery.contains(doc,node)){
if(node.src&&(node.type||"").toLowerCase()!=="module"){
if(jQuery._evalUrl&&!node.noModule){
jQuery._evalUrl(node.src,{
nonce:node.nonce||node.getAttribute("nonce")
},doc);
}
}else{
DOMEval(node.textContent.replace(rcleanScript,""),node,doc);
}
}
}
}
}
}
return collection;
}
function remove(elem,selector,keepData){
var node,
nodes=selector?jQuery.filter(selector,elem):elem,
i=0;
for(;(node=nodes[i])!=null;i++){
if(!keepData&&node.nodeType===1){
jQuery.cleanData(getAll(node));
}
if(node.parentNode){
if(keepData&&isAttached(node)){
setGlobalEval(getAll(node,"script"));
}
node.parentNode.removeChild(node);
}
}
return elem;
}
jQuery.extend({
htmlPrefilter:function(html){
return html;
},
clone:function(elem,dataAndEvents,deepDataAndEvents){
var i,l,srcElements,destElements,
clone=elem.cloneNode(true),
inPage=isAttached(elem);
if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&
!jQuery.isXMLDoc(elem)){
destElements=getAll(clone);
srcElements=getAll(elem);
for(i=0,l=srcElements.length;i<l;i++){
fixInput(srcElements[i],destElements[i]);
}
}
if(dataAndEvents){
if(deepDataAndEvents){
srcElements=srcElements||getAll(elem);
destElements=destElements||getAll(clone);
for(i=0,l=srcElements.length;i<l;i++){
cloneCopyEvent(srcElements[i],destElements[i]);
}
}else{
cloneCopyEvent(elem,clone);
}
}
destElements=getAll(clone,"script");
if(destElements.length>0){
setGlobalEval(destElements,!inPage&&getAll(elem,"script"));
}
return clone;
},
cleanData:function(elems){
var data,elem,type,
special=jQuery.event.special,
i=0;
for(;(elem=elems[i])!==undefined;i++){
if(acceptData(elem)){
if((data=elem[dataPriv.expando])){
if(data.events){
for(type in data.events){
if(special[type]){
jQuery.event.remove(elem,type);
}else{
jQuery.removeEvent(elem,type,data.handle);
}
}
}
elem[dataPriv.expando]=undefined;
}
if(elem[dataUser.expando]){
elem[dataUser.expando]=undefined;
}
}
}
}
});
jQuery.fn.extend({
detach:function(selector){
return remove(this,selector,true);
},
remove:function(selector){
return remove(this,selector);
},
text:function(value){
return access(this,function(value){
return value===undefined?
jQuery.text(this):
this.empty().each(function(){
if(this.nodeType===1||this.nodeType===11||this.nodeType===9){
this.textContent=value;
}
});
},null,value,arguments.length);
},
append:function(){
return domManip(this,arguments,function(elem){
if(this.nodeType===1||this.nodeType===11||this.nodeType===9){
var target=manipulationTarget(this,elem);
target.appendChild(elem);
}
});
},
prepend:function(){
return domManip(this,arguments,function(elem){
if(this.nodeType===1||this.nodeType===11||this.nodeType===9){
var target=manipulationTarget(this,elem);
target.insertBefore(elem,target.firstChild);
}
});
},
before:function(){
return domManip(this,arguments,function(elem){
if(this.parentNode){
this.parentNode.insertBefore(elem,this);
}
});
},
after:function(){
return domManip(this,arguments,function(elem){
if(this.parentNode){
this.parentNode.insertBefore(elem,this.nextSibling);
}
});
},
empty:function(){
var elem,
i=0;
for(;(elem=this[i])!=null;i++){
if(elem.nodeType===1){
jQuery.cleanData(getAll(elem,false));
elem.textContent="";
}
}
return this;
},
clone:function(dataAndEvents,deepDataAndEvents){
dataAndEvents=dataAndEvents==null?false:dataAndEvents;
deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;
return this.map(function(){
return jQuery.clone(this,dataAndEvents,deepDataAndEvents);
});
},
html:function(value){
return access(this,function(value){
var elem=this[0]||{},
i=0,
l=this.length;
if(value===undefined&&elem.nodeType===1){
return elem.innerHTML;
}
if(typeof value==="string"&&!rnoInnerhtml.test(value)&&
!wrapMap[(rtagName.exec(value)||["",""])[1].toLowerCase()]){
value=jQuery.htmlPrefilter(value);
try{
for(;i<l;i++){
elem=this[i]||{};
if(elem.nodeType===1){
jQuery.cleanData(getAll(elem,false));
elem.innerHTML=value;
}
}
elem=0;
}catch(e){}
}
if(elem){
this.empty().append(value);
}
},null,value,arguments.length);
},
replaceWith:function(){
var ignored=[];
return domManip(this,arguments,function(elem){
var parent=this.parentNode;
if(jQuery.inArray(this,ignored)<0){
jQuery.cleanData(getAll(this));
if(parent){
parent.replaceChild(elem,this);
}
}
},ignored);
}
});
jQuery.each({
appendTo:"append",
prependTo:"prepend",
insertBefore:"before",
insertAfter:"after",
replaceAll:"replaceWith"
},function(name,original){
jQuery.fn[name]=function(selector){
var elems,
ret=[],
insert=jQuery(selector),
last=insert.length-1,
i=0;
for(;i<=last;i++){
elems=i===last?this:this.clone(true);
jQuery(insert[i])[original](elems);
push.apply(ret,elems.get());
}
return this.pushStack(ret);
};
});
var rnumnonpx=new RegExp("^("+pnum+")(?!px)[a-z%]+$","i");
var rcustomProp=/^--/;
var getStyles=function(elem){
var view=elem.ownerDocument.defaultView;
if(!view||!view.opener){
view=window;
}
return view.getComputedStyle(elem);
};
var swap=function(elem,options,callback){
var ret,name,
old={};
for(name in options){
old[name]=elem.style[name];
elem.style[name]=options[name];
}
ret=callback.call(elem);
for(name in options){
elem.style[name]=old[name];
}
return ret;
};
var rboxStyle=new RegExp(cssExpand.join("|"),"i");
(function(){
function computeStyleTests(){
if(!div){
return;
}
container.style.cssText="position:absolute;left:-11111px;width:60px;"+
"margin-top:1px;padding:0;border:0";
div.style.cssText=
"position:relative;display:block;box-sizing:border-box;overflow:scroll;"+
"margin:auto;border:1px;padding:1px;"+
"width:60%;top:1%";
documentElement.appendChild(container).appendChild(div);
var divStyle=window.getComputedStyle(div);
pixelPositionVal=divStyle.top!=="1%";
reliableMarginLeftVal=roundPixelMeasures(divStyle.marginLeft)===12;
div.style.right="60%";
pixelBoxStylesVal=roundPixelMeasures(divStyle.right)===36;
boxSizingReliableVal=roundPixelMeasures(divStyle.width)===36;
div.style.position="absolute";
scrollboxSizeVal=roundPixelMeasures(div.offsetWidth/3)===12;
documentElement.removeChild(container);
div=null;
}
function roundPixelMeasures(measure){
return Math.round(parseFloat(measure));
}
var pixelPositionVal,boxSizingReliableVal,scrollboxSizeVal,pixelBoxStylesVal,
reliableTrDimensionsVal,reliableMarginLeftVal,
container=document.createElement("div"),
div=document.createElement("div");
if(!div.style){
return;
}
div.style.backgroundClip="content-box";
div.cloneNode(true).style.backgroundClip="";
support.clearCloneStyle=div.style.backgroundClip==="content-box";
jQuery.extend(support,{
boxSizingReliable:function(){
computeStyleTests();
return boxSizingReliableVal;
},
pixelBoxStyles:function(){
computeStyleTests();
return pixelBoxStylesVal;
},
pixelPosition:function(){
computeStyleTests();
return pixelPositionVal;
},
reliableMarginLeft:function(){
computeStyleTests();
return reliableMarginLeftVal;
},
scrollboxSize:function(){
computeStyleTests();
return scrollboxSizeVal;
},
reliableTrDimensions:function(){
var table,tr,trChild,trStyle;
if(reliableTrDimensionsVal==null){
table=document.createElement("table");
tr=document.createElement("tr");
trChild=document.createElement("div");
table.style.cssText="position:absolute;left:-11111px;border-collapse:separate";
tr.style.cssText="box-sizing:content-box;border:1px solid";
tr.style.height="1px";
trChild.style.height="9px";
trChild.style.display="block";
documentElement
.appendChild(table)
.appendChild(tr)
.appendChild(trChild);
trStyle=window.getComputedStyle(tr);
reliableTrDimensionsVal=(parseInt(trStyle.height,10)+
parseInt(trStyle.borderTopWidth,10)+
parseInt(trStyle.borderBottomWidth,10))===tr.offsetHeight;
documentElement.removeChild(table);
}
return reliableTrDimensionsVal;
}
});
})();
function curCSS(elem,name,computed){
var width,minWidth,maxWidth,ret,
isCustomProp=rcustomProp.test(name),
style=elem.style;
computed=computed||getStyles(elem);
if(computed){
ret=computed.getPropertyValue(name)||computed[name];
if(isCustomProp&&ret){
ret=ret.replace(rtrimCSS,"$1")||undefined;
}
if(ret===""&&!isAttached(elem)){
ret=jQuery.style(elem,name);
}
if(!support.pixelBoxStyles()&&rnumnonpx.test(ret)&&rboxStyle.test(name)){
width=style.width;
minWidth=style.minWidth;
maxWidth=style.maxWidth;
style.minWidth=style.maxWidth=style.width=ret;
ret=computed.width;
style.width=width;
style.minWidth=minWidth;
style.maxWidth=maxWidth;
}
}
return ret!==undefined?
ret+"":
ret;
}
function addGetHookIf(conditionFn,hookFn){
return{
get:function(){
if(conditionFn()){
delete this.get;
return;
}
return(this.get=hookFn).apply(this,arguments);
}
};
}
var cssPrefixes=["Webkit","Moz","ms"],
emptyStyle=document.createElement("div").style,
vendorProps={};
function vendorPropName(name){
var capName=name[0].toUpperCase()+name.slice(1),
i=cssPrefixes.length;
while(i--){
name=cssPrefixes[i]+capName;
if(name in emptyStyle){
return name;
}
}
}
function finalPropName(name){
var final=jQuery.cssProps[name]||vendorProps[name];
if(final){
return final;
}
if(name in emptyStyle){
return name;
}
return vendorProps[name]=vendorPropName(name)||name;
}
var
rdisplayswap=/^(none|table(?!-c[ea]).+)/,
cssShow={position:"absolute",visibility:"hidden",display:"block"},
cssNormalTransform={
letterSpacing:"0",
fontWeight:"400"
};
function setPositiveNumber(_elem,value,subtract){
var matches=rcssNum.exec(value);
return matches?
Math.max(0,matches[2]-(subtract||0))+(matches[3]||"px"):
value;
}
function boxModelAdjustment(elem,dimension,box,isBorderBox,styles,computedVal){
var i=dimension==="width"?1:0,
extra=0,
delta=0,
marginDelta=0;
if(box===(isBorderBox?"border":"content")){
return 0;
}
for(;i<4;i+=2){
if(box==="margin"){
marginDelta+=jQuery.css(elem,box+cssExpand[i],true,styles);
}
if(!isBorderBox){
delta+=jQuery.css(elem,"padding"+cssExpand[i],true,styles);
if(box!=="padding"){
delta+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);
}else{
extra+=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);
}
}else{
if(box==="content"){
delta-=jQuery.css(elem,"padding"+cssExpand[i],true,styles);
}
if(box!=="margin"){
delta-=jQuery.css(elem,"border"+cssExpand[i]+"Width",true,styles);
}
}
}
if(!isBorderBox&&computedVal>=0){
delta+=Math.max(0,Math.ceil(
elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)]-
computedVal-
delta-
extra-
0.5
))||0;
}
return delta+marginDelta;
}
function getWidthOrHeight(elem,dimension,extra){
var styles=getStyles(elem),
boxSizingNeeded=!support.boxSizingReliable()||extra,
isBorderBox=boxSizingNeeded&&
jQuery.css(elem,"boxSizing",false,styles)==="border-box",
valueIsBorderBox=isBorderBox,
val=curCSS(elem,dimension,styles),
offsetProp="offset"+dimension[0].toUpperCase()+dimension.slice(1);
if(rnumnonpx.test(val)){
if(!extra){
return val;
}
val="auto";
}
if((!support.boxSizingReliable()&&isBorderBox||
!support.reliableTrDimensions()&&nodeName(elem,"tr")||
val==="auto"||
!parseFloat(val)&&jQuery.css(elem,"display",false,styles)==="inline")&&
elem.getClientRects().length){
isBorderBox=jQuery.css(elem,"boxSizing",false,styles)==="border-box";
valueIsBorderBox=offsetProp in elem;
if(valueIsBorderBox){
val=elem[offsetProp];
}
}
val=parseFloat(val)||0;
return(val+
boxModelAdjustment(
elem,
dimension,
extra||(isBorderBox?"border":"content"),
valueIsBorderBox,
styles,
val
)
)+"px";
}
jQuery.extend({
cssHooks:{
opacity:{
get:function(elem,computed){
if(computed){
var ret=curCSS(elem,"opacity");
return ret===""?"1":ret;
}
}
}
},
cssNumber:{
animationIterationCount:true,
aspectRatio:true,
borderImageSlice:true,
columnCount:true,
flexGrow:true,
flexShrink:true,
fontWeight:true,
gridArea:true,
gridColumn:true,
gridColumnEnd:true,
gridColumnStart:true,
gridRow:true,
gridRowEnd:true,
gridRowStart:true,
lineHeight:true,
opacity:true,
order:true,
orphans:true,
scale:true,
widows:true,
zIndex:true,
zoom:true,
fillOpacity:true,
floodOpacity:true,
stopOpacity:true,
strokeMiterlimit:true,
strokeOpacity:true
},
cssProps:{},
style:function(elem,name,value,extra){
if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){
return;
}
var ret,type,hooks,
origName=camelCase(name),
isCustomProp=rcustomProp.test(name),
style=elem.style;
if(!isCustomProp){
name=finalPropName(origName);
}
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];
if(value!==undefined){
type=typeof value;
if(type==="string"&&(ret=rcssNum.exec(value))&&ret[1]){
value=adjustCSS(elem,name,ret);
type="number";
}
if(value==null||value!==value){
return;
}
if(type==="number"&&!isCustomProp){
value+=ret&&ret[3]||(jQuery.cssNumber[origName]?"":"px");
}
if(!support.clearCloneStyle&&value===""&&name.indexOf("background")===0){
style[name]="inherit";
}
if(!hooks||!("set"in hooks)||
(value=hooks.set(elem,value,extra))!==undefined){
if(isCustomProp){
style.setProperty(name,value);
}else{
style[name]=value;
}
}
}else{
if(hooks&&"get"in hooks&&
(ret=hooks.get(elem,false,extra))!==undefined){
return ret;
}
return style[name];
}
},
css:function(elem,name,extra,styles){
var val,num,hooks,
origName=camelCase(name),
isCustomProp=rcustomProp.test(name);
if(!isCustomProp){
name=finalPropName(origName);
}
hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];
if(hooks&&"get"in hooks){
val=hooks.get(elem,true,extra);
}
if(val===undefined){
val=curCSS(elem,name,styles);
}
if(val==="normal"&&name in cssNormalTransform){
val=cssNormalTransform[name];
}
if(extra===""||extra){
num=parseFloat(val);
return extra===true||isFinite(num)?num||0:val;
}
return val;
}
});
jQuery.each(["height","width"],function(_i,dimension){
jQuery.cssHooks[dimension]={
get:function(elem,computed,extra){
if(computed){
return rdisplayswap.test(jQuery.css(elem,"display"))&&
(!elem.getClientRects().length||!elem.getBoundingClientRect().width)?
swap(elem,cssShow,function(){
return getWidthOrHeight(elem,dimension,extra);
}):
getWidthOrHeight(elem,dimension,extra);
}
},
set:function(elem,value,extra){
var matches,
styles=getStyles(elem),
scrollboxSizeBuggy=!support.scrollboxSize()&&
styles.position==="absolute",
boxSizingNeeded=scrollboxSizeBuggy||extra,
isBorderBox=boxSizingNeeded&&
jQuery.css(elem,"boxSizing",false,styles)==="border-box",
subtract=extra?
boxModelAdjustment(
elem,
dimension,
extra,
isBorderBox,
styles
):
0;
if(isBorderBox&&scrollboxSizeBuggy){
subtract-=Math.ceil(
elem["offset"+dimension[0].toUpperCase()+dimension.slice(1)]-
parseFloat(styles[dimension])-
boxModelAdjustment(elem,dimension,"border",false,styles)-
0.5
);
}
if(subtract&&(matches=rcssNum.exec(value))&&
(matches[3]||"px")!=="px"){
elem.style[dimension]=value;
value=jQuery.css(elem,dimension);
}
return setPositiveNumber(elem,value,subtract);
}
};
});
jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,
function(elem,computed){
if(computed){
return(parseFloat(curCSS(elem,"marginLeft"))||
elem.getBoundingClientRect().left-
swap(elem,{marginLeft:0},function(){
return elem.getBoundingClientRect().left;
})
)+"px";
}
}
);
jQuery.each({
margin:"",
padding:"",
border:"Width"
},function(prefix,suffix){
jQuery.cssHooks[prefix+suffix]={
expand:function(value){
var i=0,
expanded={},
parts=typeof value==="string"?value.split(" "):[value];
for(;i<4;i++){
expanded[prefix+cssExpand[i]+suffix]=
parts[i]||parts[i-2]||parts[0];
}
return expanded;
}
};
if(prefix!=="margin"){
jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;
}
});
jQuery.fn.extend({
css:function(name,value){
return access(this,function(elem,name,value){
var styles,len,
map={},
i=0;
if(Array.isArray(name)){
styles=getStyles(elem);
len=name.length;
for(;i<len;i++){
map[name[i]]=jQuery.css(elem,name[i],false,styles);
}
return map;
}
return value!==undefined?
jQuery.style(elem,name,value):
jQuery.css(elem,name);
},name,value,arguments.length>1);
}
});
function Tween(elem,options,prop,end,easing){
return new Tween.prototype.init(elem,options,prop,end,easing);
}
jQuery.Tween=Tween;
Tween.prototype={
constructor:Tween,
init:function(elem,options,prop,end,easing,unit){
this.elem=elem;
this.prop=prop;
this.easing=easing||jQuery.easing._default;
this.options=options;
this.start=this.now=this.cur();
this.end=end;
this.unit=unit||(jQuery.cssNumber[prop]?"":"px");
},
cur:function(){
var hooks=Tween.propHooks[this.prop];
return hooks&&hooks.get?
hooks.get(this):
Tween.propHooks._default.get(this);
},
run:function(percent){
var eased,
hooks=Tween.propHooks[this.prop];
if(this.options.duration){
this.pos=eased=jQuery.easing[this.easing](
percent,this.options.duration*percent,0,1,this.options.duration
);
}else{
this.pos=eased=percent;
}
this.now=(this.end-this.start)*eased+this.start;
if(this.options.step){
this.options.step.call(this.elem,this.now,this);
}
if(hooks&&hooks.set){
hooks.set(this);
}else{
Tween.propHooks._default.set(this);
}
return this;
}
};
Tween.prototype.init.prototype=Tween.prototype;
Tween.propHooks={
_default:{
get:function(tween){
var result;
if(tween.elem.nodeType!==1||
tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){
return tween.elem[tween.prop];
}
result=jQuery.css(tween.elem,tween.prop,"");
return!result||result==="auto"?0:result;
},
set:function(tween){
if(jQuery.fx.step[tween.prop]){
jQuery.fx.step[tween.prop](tween);
}else if(tween.elem.nodeType===1&&(
jQuery.cssHooks[tween.prop]||
tween.elem.style[finalPropName(tween.prop)]!=null)){
jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);
}else{
tween.elem[tween.prop]=tween.now;
}
}
}
};
Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={
set:function(tween){
if(tween.elem.nodeType&&tween.elem.parentNode){
tween.elem[tween.prop]=tween.now;
}
}
};
jQuery.easing={
linear:function(p){
return p;
},
swing:function(p){
return 0.5-Math.cos(p*Math.PI)/2;
},
_default:"swing"
};
jQuery.fx=Tween.prototype.init;
jQuery.fx.step={};
var
fxNow,inProgress,
rfxtypes=/^(?:toggle|show|hide)$/,
rrun=/queueHooks$/;
function schedule(){
if(inProgress){
if(document.hidden===false&&window.requestAnimationFrame){
window.requestAnimationFrame(schedule);
}else{
window.setTimeout(schedule,jQuery.fx.interval);
}
jQuery.fx.tick();
}
}
function createFxNow(){
window.setTimeout(function(){
fxNow=undefined;
});
return(fxNow=Date.now());
}
function genFx(type,includeWidth){
var which,
i=0,
attrs={height:type};
includeWidth=includeWidth?1:0;
for(;i<4;i+=2-includeWidth){
which=cssExpand[i];
attrs["margin"+which]=attrs["padding"+which]=type;
}
if(includeWidth){
attrs.opacity=attrs.width=type;
}
return attrs;
}
function createTween(value,prop,animation){
var tween,
collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners["*"]),
index=0,
length=collection.length;
for(;index<length;index++){
if((tween=collection[index].call(animation,prop,value))){
return tween;
}
}
}
function defaultPrefilter(elem,props,opts){
var prop,value,toggle,hooks,oldfire,propTween,restoreDisplay,display,
isBox="width"in props||"height"in props,
anim=this,
orig={},
style=elem.style,
hidden=elem.nodeType&&isHiddenWithinTree(elem),
dataShow=dataPriv.get(elem,"fxshow");
if(!opts.queue){
hooks=jQuery._queueHooks(elem,"fx");
if(hooks.unqueued==null){
hooks.unqueued=0;
oldfire=hooks.empty.fire;
hooks.empty.fire=function(){
if(!hooks.unqueued){
oldfire();
}
};
}
hooks.unqueued++;
anim.always(function(){
anim.always(function(){
hooks.unqueued--;
if(!jQuery.queue(elem,"fx").length){
hooks.empty.fire();
}
});
});
}
for(prop in props){
value=props[prop];
if(rfxtypes.test(value)){
delete props[prop];
toggle=toggle||value==="toggle";
if(value===(hidden?"hide":"show")){
if(value==="show"&&dataShow&&dataShow[prop]!==undefined){
hidden=true;
}else{
continue;
}
}
orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);
}
}
propTween=!jQuery.isEmptyObject(props);
if(!propTween&&jQuery.isEmptyObject(orig)){
return;
}
if(isBox&&elem.nodeType===1){
opts.overflow=[style.overflow,style.overflowX,style.overflowY];
restoreDisplay=dataShow&&dataShow.display;
if(restoreDisplay==null){
restoreDisplay=dataPriv.get(elem,"display");
}
display=jQuery.css(elem,"display");
if(display==="none"){
if(restoreDisplay){
display=restoreDisplay;
}else{
showHide([elem],true);
restoreDisplay=elem.style.display||restoreDisplay;
display=jQuery.css(elem,"display");
showHide([elem]);
}
}
if(display==="inline"||display==="inline-block"&&restoreDisplay!=null){
if(jQuery.css(elem,"float")==="none"){
if(!propTween){
anim.done(function(){
style.display=restoreDisplay;
});
if(restoreDisplay==null){
display=style.display;
restoreDisplay=display==="none"?"":display;
}
}
style.display="inline-block";
}
}
}
if(opts.overflow){
style.overflow="hidden";
anim.always(function(){
style.overflow=opts.overflow[0];
style.overflowX=opts.overflow[1];
style.overflowY=opts.overflow[2];
});
}
propTween=false;
for(prop in orig){
if(!propTween){
if(dataShow){
if("hidden"in dataShow){
hidden=dataShow.hidden;
}
}else{
dataShow=dataPriv.access(elem,"fxshow",{display:restoreDisplay});
}
if(toggle){
dataShow.hidden=!hidden;
}
if(hidden){
showHide([elem],true);
}
anim.done(function(){
if(!hidden){
showHide([elem]);
}
dataPriv.remove(elem,"fxshow");
for(prop in orig){
jQuery.style(elem,prop,orig[prop]);
}
});
}
propTween=createTween(hidden?dataShow[prop]:0,prop,anim);
if(!(prop in dataShow)){
dataShow[prop]=propTween.start;
if(hidden){
propTween.end=propTween.start;
propTween.start=0;
}
}
}
}
function propFilter(props,specialEasing){
var index,name,easing,value,hooks;
for(index in props){
name=camelCase(index);
easing=specialEasing[name];
value=props[index];
if(Array.isArray(value)){
easing=value[1];
value=props[index]=value[0];
}
if(index!==name){
props[name]=value;
delete props[index];
}
hooks=jQuery.cssHooks[name];
if(hooks&&"expand"in hooks){
value=hooks.expand(value);
delete props[name];
for(index in value){
if(!(index in props)){
props[index]=value[index];
specialEasing[index]=easing;
}
}
}else{
specialEasing[name]=easing;
}
}
}
function Animation(elem,properties,options){
var result,
stopped,
index=0,
length=Animation.prefilters.length,
deferred=jQuery.Deferred().always(function(){
delete tick.elem;
}),
tick=function(){
if(stopped){
return false;
}
var currentTime=fxNow||createFxNow(),
remaining=Math.max(0,animation.startTime+animation.duration-currentTime),
temp=remaining/animation.duration||0,
percent=1-temp,
index=0,
length=animation.tweens.length;
for(;index<length;index++){
animation.tweens[index].run(percent);
}
deferred.notifyWith(elem,[animation,percent,remaining]);
if(percent<1&&length){
return remaining;
}
if(!length){
deferred.notifyWith(elem,[animation,1,0]);
}
deferred.resolveWith(elem,[animation]);
return false;
},
animation=deferred.promise({
elem:elem,
props:jQuery.extend({},properties),
opts:jQuery.extend(true,{
specialEasing:{},
easing:jQuery.easing._default
},options),
originalProperties:properties,
originalOptions:options,
startTime:fxNow||createFxNow(),
duration:options.duration,
tweens:[],
createTween:function(prop,end){
var tween=jQuery.Tween(elem,animation.opts,prop,end,
animation.opts.specialEasing[prop]||animation.opts.easing);
animation.tweens.push(tween);
return tween;
},
stop:function(gotoEnd){
var index=0,
length=gotoEnd?animation.tweens.length:0;
if(stopped){
return this;
}
stopped=true;
for(;index<length;index++){
animation.tweens[index].run(1);
}
if(gotoEnd){
deferred.notifyWith(elem,[animation,1,0]);
deferred.resolveWith(elem,[animation,gotoEnd]);
}else{
deferred.rejectWith(elem,[animation,gotoEnd]);
}
return this;
}
}),
props=animation.props;
propFilter(props,animation.opts.specialEasing);
for(;index<length;index++){
result=Animation.prefilters[index].call(animation,elem,props,animation.opts);
if(result){
if(isFunction(result.stop)){
jQuery._queueHooks(animation.elem,animation.opts.queue).stop=
result.stop.bind(result);
}
return result;
}
}
jQuery.map(props,createTween,animation);
if(isFunction(animation.opts.start)){
animation.opts.start.call(elem,animation);
}
animation
.progress(animation.opts.progress)
.done(animation.opts.done,animation.opts.complete)
.fail(animation.opts.fail)
.always(animation.opts.always);
jQuery.fx.timer(
jQuery.extend(tick,{
elem:elem,
anim:animation,
queue:animation.opts.queue
})
);
return animation;
}
jQuery.Animation=jQuery.extend(Animation,{
tweeners:{
"*":[function(prop,value){
var tween=this.createTween(prop,value);
adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);
return tween;
}]
},
tweener:function(props,callback){
if(isFunction(props)){
callback=props;
props=["*"];
}else{
props=props.match(rnothtmlwhite);
}
var prop,
index=0,
length=props.length;
for(;index<length;index++){
prop=props[index];
Animation.tweeners[prop]=Animation.tweeners[prop]||[];
Animation.tweeners[prop].unshift(callback);
}
},
prefilters:[defaultPrefilter],
prefilter:function(callback,prepend){
if(prepend){
Animation.prefilters.unshift(callback);
}else{
Animation.prefilters.push(callback);
}
}
});
jQuery.speed=function(speed,easing,fn){
var opt=speed&&typeof speed==="object"?jQuery.extend({},speed):{
complete:fn||!fn&&easing||
isFunction(speed)&&speed,
duration:speed,
easing:fn&&easing||easing&&!isFunction(easing)&&easing
};
if(jQuery.fx.off){
opt.duration=0;
}else{
if(typeof opt.duration!=="number"){
if(opt.duration in jQuery.fx.speeds){
opt.duration=jQuery.fx.speeds[opt.duration];
}else{
opt.duration=jQuery.fx.speeds._default;
}
}
}
if(opt.queue==null||opt.queue===true){
opt.queue="fx";
}
opt.old=opt.complete;
opt.complete=function(){
if(isFunction(opt.old)){
opt.old.call(this);
}
if(opt.queue){
jQuery.dequeue(this,opt.queue);
}
};
return opt;
};
jQuery.fn.extend({
fadeTo:function(speed,to,easing,callback){
return this.filter(isHiddenWithinTree).css("opacity",0).show()
.end().animate({opacity:to},speed,easing,callback);
},
animate:function(prop,speed,easing,callback){
var empty=jQuery.isEmptyObject(prop),
optall=jQuery.speed(speed,easing,callback),
doAnimation=function(){
var anim=Animation(this,jQuery.extend({},prop),optall);
if(empty||dataPriv.get(this,"finish")){
anim.stop(true);
}
};
doAnimation.finish=doAnimation;
return empty||optall.queue===false?
this.each(doAnimation):
this.queue(optall.queue,doAnimation);
},
stop:function(type,clearQueue,gotoEnd){
var stopQueue=function(hooks){
var stop=hooks.stop;
delete hooks.stop;
stop(gotoEnd);
};
if(typeof type!=="string"){
gotoEnd=clearQueue;
clearQueue=type;
type=undefined;
}
if(clearQueue){
this.queue(type||"fx",[]);
}
return this.each(function(){
var dequeue=true,
index=type!=null&&type+"queueHooks",
timers=jQuery.timers,
data=dataPriv.get(this);
if(index){
if(data[index]&&data[index].stop){
stopQueue(data[index]);
}
}else{
for(index in data){
if(data[index]&&data[index].stop&&rrun.test(index)){
stopQueue(data[index]);
}
}
}
for(index=timers.length;index--;){
if(timers[index].elem===this&&
(type==null||timers[index].queue===type)){
timers[index].anim.stop(gotoEnd);
dequeue=false;
timers.splice(index,1);
}
}
if(dequeue||!gotoEnd){
jQuery.dequeue(this,type);
}
});
},
finish:function(type){
if(type!==false){
type=type||"fx";
}
return this.each(function(){
var index,
data=dataPriv.get(this),
queue=data[type+"queue"],
hooks=data[type+"queueHooks"],
timers=jQuery.timers,
length=queue?queue.length:0;
data.finish=true;
jQuery.queue(this,type,[]);
if(hooks&&hooks.stop){
hooks.stop.call(this,true);
}
for(index=timers.length;index--;){
if(timers[index].elem===this&&timers[index].queue===type){
timers[index].anim.stop(true);
timers.splice(index,1);
}
}
for(index=0;index<length;index++){
if(queue[index]&&queue[index].finish){
queue[index].finish.call(this);
}
}
delete data.finish;
});
}
});
jQuery.each(["toggle","show","hide"],function(_i,name){
var cssFn=jQuery.fn[name];
jQuery.fn[name]=function(speed,easing,callback){
return speed==null||typeof speed==="boolean"?
cssFn.apply(this,arguments):
this.animate(genFx(name,true),speed,easing,callback);
};
});
jQuery.each({
slideDown:genFx("show"),
slideUp:genFx("hide"),
slideToggle:genFx("toggle"),
fadeIn:{opacity:"show"},
fadeOut:{opacity:"hide"},
fadeToggle:{opacity:"toggle"}
},function(name,props){
jQuery.fn[name]=function(speed,easing,callback){
return this.animate(props,speed,easing,callback);
};
});
jQuery.timers=[];
jQuery.fx.tick=function(){
var timer,
i=0,
timers=jQuery.timers;
fxNow=Date.now();
for(;i<timers.length;i++){
timer=timers[i];
if(!timer()&&timers[i]===timer){
timers.splice(i--,1);
}
}
if(!timers.length){
jQuery.fx.stop();
}
fxNow=undefined;
};
jQuery.fx.timer=function(timer){
jQuery.timers.push(timer);
jQuery.fx.start();
};
jQuery.fx.interval=13;
jQuery.fx.start=function(){
if(inProgress){
return;
}
inProgress=true;
schedule();
};
jQuery.fx.stop=function(){
inProgress=null;
};
jQuery.fx.speeds={
slow:600,
fast:200,
_default:400
};
jQuery.fn.delay=function(time,type){
time=jQuery.fx?jQuery.fx.speeds[time]||time:time;
type=type||"fx";
return this.queue(type,function(next,hooks){
var timeout=window.setTimeout(next,time);
hooks.stop=function(){
window.clearTimeout(timeout);
};
});
};
(function(){
var input=document.createElement("input"),
select=document.createElement("select"),
opt=select.appendChild(document.createElement("option"));
input.type="checkbox";
support.checkOn=input.value!=="";
support.optSelected=opt.selected;
input=document.createElement("input");
input.value="t";
input.type="radio";
support.radioValue=input.value==="t";
})();
var boolHook,
attrHandle=jQuery.expr.attrHandle;
jQuery.fn.extend({
attr:function(name,value){
return access(this,jQuery.attr,name,value,arguments.length>1);
},
removeAttr:function(name){
return this.each(function(){
jQuery.removeAttr(this,name);
});
}
});
jQuery.extend({
attr:function(elem,name,value){
var ret,hooks,
nType=elem.nodeType;
if(nType===3||nType===8||nType===2){
return;
}
if(typeof elem.getAttribute==="undefined"){
return jQuery.prop(elem,name,value);
}
if(nType!==1||!jQuery.isXMLDoc(elem)){
hooks=jQuery.attrHooks[name.toLowerCase()]||
(jQuery.expr.match.bool.test(name)?boolHook:undefined);
}
if(value!==undefined){
if(value===null){
jQuery.removeAttr(elem,name);
return;
}
if(hooks&&"set"in hooks&&
(ret=hooks.set(elem,value,name))!==undefined){
return ret;
}
elem.setAttribute(name,value+"");
return value;
}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){
return ret;
}
ret=jQuery.find.attr(elem,name);
return ret==null?undefined:ret;
},
attrHooks:{
type:{
set:function(elem,value){
if(!support.radioValue&&value==="radio"&&
nodeName(elem,"input")){
var val=elem.value;
elem.setAttribute("type",value);
if(val){
elem.value=val;
}
return value;
}
}
}
},
removeAttr:function(elem,value){
var name,
i=0,
attrNames=value&&value.match(rnothtmlwhite);
if(attrNames&&elem.nodeType===1){
while((name=attrNames[i++])){
elem.removeAttribute(name);
}
}
}
});
boolHook={
set:function(elem,value,name){
if(value===false){
jQuery.removeAttr(elem,name);
}else{
elem.setAttribute(name,name);
}
return name;
}
};
jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(_i,name){
var getter=attrHandle[name]||jQuery.find.attr;
attrHandle[name]=function(elem,name,isXML){
var ret,handle,
lowercaseName=name.toLowerCase();
if(!isXML){
handle=attrHandle[lowercaseName];
attrHandle[lowercaseName]=ret;
ret=getter(elem,name,isXML)!=null?
lowercaseName:
null;
attrHandle[lowercaseName]=handle;
}
return ret;
};
});
var rfocusable=/^(?:input|select|textarea|button)$/i,
rclickable=/^(?:a|area)$/i;
jQuery.fn.extend({
prop:function(name,value){
return access(this,jQuery.prop,name,value,arguments.length>1);
},
removeProp:function(name){
return this.each(function(){
delete this[jQuery.propFix[name]||name];
});
}
});
jQuery.extend({
prop:function(elem,name,value){
var ret,hooks,
nType=elem.nodeType;
if(nType===3||nType===8||nType===2){
return;
}
if(nType!==1||!jQuery.isXMLDoc(elem)){
name=jQuery.propFix[name]||name;
hooks=jQuery.propHooks[name];
}
if(value!==undefined){
if(hooks&&"set"in hooks&&
(ret=hooks.set(elem,value,name))!==undefined){
return ret;
}
return(elem[name]=value);
}
if(hooks&&"get"in hooks&&(ret=hooks.get(elem,name))!==null){
return ret;
}
return elem[name];
},
propHooks:{
tabIndex:{
get:function(elem){
var tabindex=jQuery.find.attr(elem,"tabindex");
if(tabindex){
return parseInt(tabindex,10);
}
if(
rfocusable.test(elem.nodeName)||
rclickable.test(elem.nodeName)&&
elem.href
){
return 0;
}
return-1;
}
}
},
propFix:{
"for":"htmlFor",
"class":"className"
}
});
if(!support.optSelected){
jQuery.propHooks.selected={
get:function(elem){
var parent=elem.parentNode;
if(parent&&parent.parentNode){
parent.parentNode.selectedIndex;
}
return null;
},
set:function(elem){
var parent=elem.parentNode;
if(parent){
parent.selectedIndex;
if(parent.parentNode){
parent.parentNode.selectedIndex;
}
}
}
};
}
jQuery.each([
"tabIndex",
"readOnly",
"maxLength",
"cellSpacing",
"cellPadding",
"rowSpan",
"colSpan",
"useMap",
"frameBorder",
"contentEditable"
],function(){
jQuery.propFix[this.toLowerCase()]=this;
});
function stripAndCollapse(value){
var tokens=value.match(rnothtmlwhite)||[];
return tokens.join(" ");
}
function getClass(elem){
return elem.getAttribute&&elem.getAttribute("class")||"";
}
function classesToArray(value){
if(Array.isArray(value)){
return value;
}
if(typeof value==="string"){
return value.match(rnothtmlwhite)||[];
}
return[];
}
jQuery.fn.extend({
addClass:function(value){
var classNames,cur,curValue,className,i,finalValue;
if(isFunction(value)){
return this.each(function(j){
jQuery(this).addClass(value.call(this,j,getClass(this)));
});
}
classNames=classesToArray(value);
if(classNames.length){
return this.each(function(){
curValue=getClass(this);
cur=this.nodeType===1&&(" "+stripAndCollapse(curValue)+" ");
if(cur){
for(i=0;i<classNames.length;i++){
className=classNames[i];
if(cur.indexOf(" "+className+" ")<0){
cur+=className+" ";
}
}
finalValue=stripAndCollapse(cur);
if(curValue!==finalValue){
this.setAttribute("class",finalValue);
}
}
});
}
return this;
},
removeClass:function(value){
var classNames,cur,curValue,className,i,finalValue;
if(isFunction(value)){
return this.each(function(j){
jQuery(this).removeClass(value.call(this,j,getClass(this)));
});
}
if(!arguments.length){
return this.attr("class","");
}
classNames=classesToArray(value);
if(classNames.length){
return this.each(function(){
curValue=getClass(this);
cur=this.nodeType===1&&(" "+stripAndCollapse(curValue)+" ");
if(cur){
for(i=0;i<classNames.length;i++){
className=classNames[i];
while(cur.indexOf(" "+className+" ")>-1){
cur=cur.replace(" "+className+" "," ");
}
}
finalValue=stripAndCollapse(cur);
if(curValue!==finalValue){
this.setAttribute("class",finalValue);
}
}
});
}
return this;
},
toggleClass:function(value,stateVal){
var classNames,className,i,self,
type=typeof value,
isValidValue=type==="string"||Array.isArray(value);
if(isFunction(value)){
return this.each(function(i){
jQuery(this).toggleClass(
value.call(this,i,getClass(this),stateVal),
stateVal
);
});
}
if(typeof stateVal==="boolean"&&isValidValue){
return stateVal?this.addClass(value):this.removeClass(value);
}
classNames=classesToArray(value);
return this.each(function(){
if(isValidValue){
self=jQuery(this);
for(i=0;i<classNames.length;i++){
className=classNames[i];
if(self.hasClass(className)){
self.removeClass(className);
}else{
self.addClass(className);
}
}
}else if(value===undefined||type==="boolean"){
className=getClass(this);
if(className){
dataPriv.set(this,"__className__",className);
}
if(this.setAttribute){
this.setAttribute("class",
className||value===false?
"":
dataPriv.get(this,"__className__")||""
);
}
}
});
},
hasClass:function(selector){
var className,elem,
i=0;
className=" "+selector+" ";
while((elem=this[i++])){
if(elem.nodeType===1&&
(" "+stripAndCollapse(getClass(elem))+" ").indexOf(className)>-1){
return true;
}
}
return false;
}
});
var rreturn=/\r/g;
jQuery.fn.extend({
val:function(value){
var hooks,ret,valueIsFunction,
elem=this[0];
if(!arguments.length){
if(elem){
hooks=jQuery.valHooks[elem.type]||
jQuery.valHooks[elem.nodeName.toLowerCase()];
if(hooks&&
"get"in hooks&&
(ret=hooks.get(elem,"value"))!==undefined
){
return ret;
}
ret=elem.value;
if(typeof ret==="string"){
return ret.replace(rreturn,"");
}
return ret==null?"":ret;
}
return;
}
valueIsFunction=isFunction(value);
return this.each(function(i){
var val;
if(this.nodeType!==1){
return;
}
if(valueIsFunction){
val=value.call(this,i,jQuery(this).val());
}else{
val=value;
}
if(val==null){
val="";
}else if(typeof val==="number"){
val+="";
}else if(Array.isArray(val)){
val=jQuery.map(val,function(value){
return value==null?"":value+"";
});
}
hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];
if(!hooks||!("set"in hooks)||hooks.set(this,val,"value")===undefined){
this.value=val;
}
});
}
});
jQuery.extend({
valHooks:{
option:{
get:function(elem){
var val=jQuery.find.attr(elem,"value");
return val!=null?
val:
stripAndCollapse(jQuery.text(elem));
}
},
select:{
get:function(elem){
var value,option,i,
options=elem.options,
index=elem.selectedIndex,
one=elem.type==="select-one",
values=one?null:[],
max=one?index+1:options.length;
if(index<0){
i=max;
}else{
i=one?index:0;
}
for(;i<max;i++){
option=options[i];
if((option.selected||i===index)&&
!option.disabled&&
(!option.parentNode.disabled||
!nodeName(option.parentNode,"optgroup"))){
value=jQuery(option).val();
if(one){
return value;
}
values.push(value);
}
}
return values;
},
set:function(elem,value){
var optionSet,option,
options=elem.options,
values=jQuery.makeArray(value),
i=options.length;
while(i--){
option=options[i];
if(option.selected=
jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1
){
optionSet=true;
}
}
if(!optionSet){
elem.selectedIndex=-1;
}
return values;
}
}
}
});
jQuery.each(["radio","checkbox"],function(){
jQuery.valHooks[this]={
set:function(elem,value){
if(Array.isArray(value)){
return(elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1);
}
}
};
if(!support.checkOn){
jQuery.valHooks[this].get=function(elem){
return elem.getAttribute("value")===null?"on":elem.value;
};
}
});
var location=window.location;
var nonce={guid:Date.now()};
var rquery=(/\?/);
jQuery.parseXML=function(data){
var xml,parserErrorElem;
if(!data||typeof data!=="string"){
return null;
}
try{
xml=(new window.DOMParser()).parseFromString(data,"text/xml");
}catch(e){}
parserErrorElem=xml&&xml.getElementsByTagName("parsererror")[0];
if(!xml||parserErrorElem){
jQuery.error("Invalid XML: "+(
parserErrorElem?
jQuery.map(parserErrorElem.childNodes,function(el){
return el.textContent;
}).join("\n"):
data
));
}
return xml;
};
var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,
stopPropagationCallback=function(e){
e.stopPropagation();
};
jQuery.extend(jQuery.event,{
trigger:function(event,data,elem,onlyHandlers){
var i,cur,tmp,bubbleType,ontype,handle,special,lastElement,
eventPath=[elem||document],
type=hasOwn.call(event,"type")?event.type:event,
namespaces=hasOwn.call(event,"namespace")?event.namespace.split("."):[];
cur=lastElement=tmp=elem=elem||document;
if(elem.nodeType===3||elem.nodeType===8){
return;
}
if(rfocusMorph.test(type+jQuery.event.triggered)){
return;
}
if(type.indexOf(".")>-1){
namespaces=type.split(".");
type=namespaces.shift();
namespaces.sort();
}
ontype=type.indexOf(":")<0&&"on"+type;
event=event[jQuery.expando]?
event:
new jQuery.Event(type,typeof event==="object"&&event);
event.isTrigger=onlyHandlers?2:3;
event.namespace=namespaces.join(".");
event.rnamespace=event.namespace?
new RegExp("(^|\\.)"+namespaces.join("\\.(?:.*\\.|)")+"(\\.|$)"):
null;
event.result=undefined;
if(!event.target){
event.target=elem;
}
data=data==null?
[event]:
jQuery.makeArray(data,[event]);
special=jQuery.event.special[type]||{};
if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){
return;
}
if(!onlyHandlers&&!special.noBubble&&!isWindow(elem)){
bubbleType=special.delegateType||type;
if(!rfocusMorph.test(bubbleType+type)){
cur=cur.parentNode;
}
for(;cur;cur=cur.parentNode){
eventPath.push(cur);
tmp=cur;
}
if(tmp===(elem.ownerDocument||document)){
eventPath.push(tmp.defaultView||tmp.parentWindow||window);
}
}
i=0;
while((cur=eventPath[i++])&&!event.isPropagationStopped()){
lastElement=cur;
event.type=i>1?
bubbleType:
special.bindType||type;
handle=(dataPriv.get(cur,"events")||Object.create(null))[event.type]&&
dataPriv.get(cur,"handle");
if(handle){
handle.apply(cur,data);
}
handle=ontype&&cur[ontype];
if(handle&&handle.apply&&acceptData(cur)){
event.result=handle.apply(cur,data);
if(event.result===false){
event.preventDefault();
}
}
}
event.type=type;
if(!onlyHandlers&&!event.isDefaultPrevented()){
if((!special._default||
special._default.apply(eventPath.pop(),data)===false)&&
acceptData(elem)){
if(ontype&&isFunction(elem[type])&&!isWindow(elem)){
tmp=elem[ontype];
if(tmp){
elem[ontype]=null;
}
jQuery.event.triggered=type;
if(event.isPropagationStopped()){
lastElement.addEventListener(type,stopPropagationCallback);
}
elem[type]();
if(event.isPropagationStopped()){
lastElement.removeEventListener(type,stopPropagationCallback);
}
jQuery.event.triggered=undefined;
if(tmp){
elem[ontype]=tmp;
}
}
}
}
return event.result;
},
simulate:function(type,elem,event){
var e=jQuery.extend(
new jQuery.Event(),
event,
{
type:type,
isSimulated:true
}
);
jQuery.event.trigger(e,null,elem);
}
});
jQuery.fn.extend({
trigger:function(type,data){
return this.each(function(){
jQuery.event.trigger(type,data,this);
});
},
triggerHandler:function(type,data){
var elem=this[0];
if(elem){
return jQuery.event.trigger(type,data,elem,true);
}
}
});
var
rbracket=/\[\]$/,
rCRLF=/\r?\n/g,
rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,
rsubmittable=/^(?:input|select|textarea|keygen)/i;
function buildParams(prefix,obj,traditional,add){
var name;
if(Array.isArray(obj)){
jQuery.each(obj,function(i,v){
if(traditional||rbracket.test(prefix)){
add(prefix,v);
}else{
buildParams(
prefix+"["+(typeof v==="object"&&v!=null?i:"")+"]",
v,
traditional,
add
);
}
});
}else if(!traditional&&toType(obj)==="object"){
for(name in obj){
buildParams(prefix+"["+name+"]",obj[name],traditional,add);
}
}else{
add(prefix,obj);
}
}
jQuery.param=function(a,traditional){
var prefix,
s=[],
add=function(key,valueOrFunction){
var value=isFunction(valueOrFunction)?
valueOrFunction():
valueOrFunction;
s[s.length]=encodeURIComponent(key)+"="+
encodeURIComponent(value==null?"":value);
};
if(a==null){
return"";
}
if(Array.isArray(a)||(a.jquery&&!jQuery.isPlainObject(a))){
jQuery.each(a,function(){
add(this.name,this.value);
});
}else{
for(prefix in a){
buildParams(prefix,a[prefix],traditional,add);
}
}
return s.join("&");
};
jQuery.fn.extend({
serialize:function(){
return jQuery.param(this.serializeArray());
},
serializeArray:function(){
return this.map(function(){
var elements=jQuery.prop(this,"elements");
return elements?jQuery.makeArray(elements):this;
}).filter(function(){
var type=this.type;
return this.name&&!jQuery(this).is(":disabled")&&
rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&
(this.checked||!rcheckableType.test(type));
}).map(function(_i,elem){
var val=jQuery(this).val();
if(val==null){
return null;
}
if(Array.isArray(val)){
return jQuery.map(val,function(val){
return{name:elem.name,value:val.replace(rCRLF,"\r\n")};
});
}
return{name:elem.name,value:val.replace(rCRLF,"\r\n")};
}).get();
}
});
var
r20=/%20/g,
rhash=/#.*$/,
rantiCache=/([?&])_=[^&]*/,
rheaders=/^(.*?):[ \t]*([^\r\n]*)$/mg,
rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
rnoContent=/^(?:GET|HEAD)$/,
rprotocol=/^\/\//,
prefilters={},
transports={},
allTypes="*/".concat("*"),
originAnchor=document.createElement("a");
originAnchor.href=location.href;
function addToPrefiltersOrTransports(structure){
return function(dataTypeExpression,func){
if(typeof dataTypeExpression!=="string"){
func=dataTypeExpression;
dataTypeExpression="*";
}
var dataType,
i=0,
dataTypes=dataTypeExpression.toLowerCase().match(rnothtmlwhite)||[];
if(isFunction(func)){
while((dataType=dataTypes[i++])){
if(dataType[0]==="+"){
dataType=dataType.slice(1)||"*";
(structure[dataType]=structure[dataType]||[]).unshift(func);
}else{
(structure[dataType]=structure[dataType]||[]).push(func);
}
}
}
};
}
function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){
var inspected={},
seekingTransport=(structure===transports);
function inspect(dataType){
var selected;
inspected[dataType]=true;
jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){
var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);
if(typeof dataTypeOrTransport==="string"&&
!seekingTransport&&!inspected[dataTypeOrTransport]){
options.dataTypes.unshift(dataTypeOrTransport);
inspect(dataTypeOrTransport);
return false;
}else if(seekingTransport){
return!(selected=dataTypeOrTransport);
}
});
return selected;
}
return inspect(options.dataTypes[0])||!inspected["*"]&&inspect("*");
}
function ajaxExtend(target,src){
var key,deep,
flatOptions=jQuery.ajaxSettings.flatOptions||{};
for(key in src){
if(src[key]!==undefined){
(flatOptions[key]?target:(deep||(deep={})))[key]=src[key];
}
}
if(deep){
jQuery.extend(true,target,deep);
}
return target;
}
function ajaxHandleResponses(s,jqXHR,responses){
var ct,type,finalDataType,firstDataType,
contents=s.contents,
dataTypes=s.dataTypes;
while(dataTypes[0]==="*"){
dataTypes.shift();
if(ct===undefined){
ct=s.mimeType||jqXHR.getResponseHeader("Content-Type");
}
}
if(ct){
for(type in contents){
if(contents[type]&&contents[type].test(ct)){
dataTypes.unshift(type);
break;
}
}
}
if(dataTypes[0]in responses){
finalDataType=dataTypes[0];
}else{
for(type in responses){
if(!dataTypes[0]||s.converters[type+" "+dataTypes[0]]){
finalDataType=type;
break;
}
if(!firstDataType){
firstDataType=type;
}
}
finalDataType=finalDataType||firstDataType;
}
if(finalDataType){
if(finalDataType!==dataTypes[0]){
dataTypes.unshift(finalDataType);
}
return responses[finalDataType];
}
}
function ajaxConvert(s,response,jqXHR,isSuccess){
var conv2,current,conv,tmp,prev,
converters={},
dataTypes=s.dataTypes.slice();
if(dataTypes[1]){
for(conv in s.converters){
converters[conv.toLowerCase()]=s.converters[conv];
}
}
current=dataTypes.shift();
while(current){
if(s.responseFields[current]){
jqXHR[s.responseFields[current]]=response;
}
if(!prev&&isSuccess&&s.dataFilter){
response=s.dataFilter(response,s.dataType);
}
prev=current;
current=dataTypes.shift();
if(current){
if(current==="*"){
current=prev;
}else if(prev!=="*"&&prev!==current){
conv=converters[prev+" "+current]||converters["* "+current];
if(!conv){
for(conv2 in converters){
tmp=conv2.split(" ");
if(tmp[1]===current){
conv=converters[prev+" "+tmp[0]]||
converters["* "+tmp[0]];
if(conv){
if(conv===true){
conv=converters[conv2];
}else if(converters[conv2]!==true){
current=tmp[0];
dataTypes.unshift(tmp[1]);
}
break;
}
}
}
}
if(conv!==true){
if(conv&&s.throws){
response=conv(response);
}else{
try{
response=conv(response);
}catch(e){
return{
state:"parsererror",
error:conv?e:"No conversion from "+prev+" to "+current
};
}
}
}
}
}
}
return{state:"success",data:response};
}
jQuery.extend({
active:0,
lastModified:{},
etag:{},
ajaxSettings:{
url:location.href,
type:"GET",
isLocal:rlocalProtocol.test(location.protocol),
global:true,
processData:true,
async:true,
contentType:"application/x-www-form-urlencoded; charset=UTF-8",
accepts:{
"*":allTypes,
text:"text/plain",
html:"text/html",
xml:"application/xml, text/xml",
json:"application/json, text/javascript"
},
contents:{
xml:/\bxml\b/,
html:/\bhtml/,
json:/\bjson\b/
},
responseFields:{
xml:"responseXML",
text:"responseText",
json:"responseJSON"
},
converters:{
"* text":String,
"text html":true,
"text json":JSON.parse,
"text xml":jQuery.parseXML
},
flatOptions:{
url:true,
context:true
}
},
ajaxSetup:function(target,settings){
return settings?
ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):
ajaxExtend(jQuery.ajaxSettings,target);
},
ajaxPrefilter:addToPrefiltersOrTransports(prefilters),
ajaxTransport:addToPrefiltersOrTransports(transports),
ajax:function(url,options){
if(typeof url==="object"){
options=url;
url=undefined;
}
options=options||{};
var transport,
cacheURL,
responseHeadersString,
responseHeaders,
timeoutTimer,
urlAnchor,
completed,
fireGlobals,
i,
uncached,
s=jQuery.ajaxSetup({},options),
callbackContext=s.context||s,
globalEventContext=s.context&&
(callbackContext.nodeType||callbackContext.jquery)?
jQuery(callbackContext):
jQuery.event,
deferred=jQuery.Deferred(),
completeDeferred=jQuery.Callbacks("once memory"),
statusCode=s.statusCode||{},
requestHeaders={},
requestHeadersNames={},
strAbort="canceled",
jqXHR={
readyState:0,
getResponseHeader:function(key){
var match;
if(completed){
if(!responseHeaders){
responseHeaders={};
while((match=rheaders.exec(responseHeadersString))){
responseHeaders[match[1].toLowerCase()+" "]=
(responseHeaders[match[1].toLowerCase()+" "]||[])
.concat(match[2]);
}
}
match=responseHeaders[key.toLowerCase()+" "];
}
return match==null?null:match.join(", ");
},
getAllResponseHeaders:function(){
return completed?responseHeadersString:null;
},
setRequestHeader:function(name,value){
if(completed==null){
name=requestHeadersNames[name.toLowerCase()]=
requestHeadersNames[name.toLowerCase()]||name;
requestHeaders[name]=value;
}
return this;
},
overrideMimeType:function(type){
if(completed==null){
s.mimeType=type;
}
return this;
},
statusCode:function(map){
var code;
if(map){
if(completed){
jqXHR.always(map[jqXHR.status]);
}else{
for(code in map){
statusCode[code]=[statusCode[code],map[code]];
}
}
}
return this;
},
abort:function(statusText){
var finalText=statusText||strAbort;
if(transport){
transport.abort(finalText);
}
done(0,finalText);
return this;
}
};
deferred.promise(jqXHR);
s.url=((url||s.url||location.href)+"")
.replace(rprotocol,location.protocol+"//");
s.type=options.method||options.type||s.method||s.type;
s.dataTypes=(s.dataType||"*").toLowerCase().match(rnothtmlwhite)||[""];
if(s.crossDomain==null){
urlAnchor=document.createElement("a");
try{
urlAnchor.href=s.url;
urlAnchor.href=urlAnchor.href;
s.crossDomain=originAnchor.protocol+"//"+originAnchor.host!==
urlAnchor.protocol+"//"+urlAnchor.host;
}catch(e){
s.crossDomain=true;
}
}
if(s.data&&s.processData&&typeof s.data!=="string"){
s.data=jQuery.param(s.data,s.traditional);
}
inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);
if(completed){
return jqXHR;
}
fireGlobals=jQuery.event&&s.global;
if(fireGlobals&&jQuery.active++===0){
jQuery.event.trigger("ajaxStart");
}
s.type=s.type.toUpperCase();
s.hasContent=!rnoContent.test(s.type);
cacheURL=s.url.replace(rhash,"");
if(!s.hasContent){
uncached=s.url.slice(cacheURL.length);
if(s.data&&(s.processData||typeof s.data==="string")){
cacheURL+=(rquery.test(cacheURL)?"&":"?")+s.data;
delete s.data;
}
if(s.cache===false){
cacheURL=cacheURL.replace(rantiCache,"$1");
uncached=(rquery.test(cacheURL)?"&":"?")+"_="+(nonce.guid++)+
uncached;
}
s.url=cacheURL+uncached;
}else if(s.data&&s.processData&&
(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0){
s.data=s.data.replace(r20,"+");
}
if(s.ifModified){
if(jQuery.lastModified[cacheURL]){
jqXHR.setRequestHeader("If-Modified-Since",jQuery.lastModified[cacheURL]);
}
if(jQuery.etag[cacheURL]){
jqXHR.setRequestHeader("If-None-Match",jQuery.etag[cacheURL]);
}
}
if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){
jqXHR.setRequestHeader("Content-Type",s.contentType);
}
jqXHR.setRequestHeader(
"Accept",
s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?
s.accepts[s.dataTypes[0]]+
(s.dataTypes[0]!=="*"?", "+allTypes+"; q=0.01":""):
s.accepts["*"]
);
for(i in s.headers){
jqXHR.setRequestHeader(i,s.headers[i]);
}
if(s.beforeSend&&
(s.beforeSend.call(callbackContext,jqXHR,s)===false||completed)){
return jqXHR.abort();
}
strAbort="abort";
completeDeferred.add(s.complete);
jqXHR.done(s.success);
jqXHR.fail(s.error);
transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);
if(!transport){
done(-1,"No Transport");
}else{
jqXHR.readyState=1;
if(fireGlobals){
globalEventContext.trigger("ajaxSend",[jqXHR,s]);
}
if(completed){
return jqXHR;
}
if(s.async&&s.timeout>0){
timeoutTimer=window.setTimeout(function(){
jqXHR.abort("timeout");
},s.timeout);
}
try{
completed=false;
transport.send(requestHeaders,done);
}catch(e){
if(completed){
throw e;
}
done(-1,e);
}
}
function done(status,nativeStatusText,responses,headers){
var isSuccess,success,error,response,modified,
statusText=nativeStatusText;
if(completed){
return;
}
completed=true;
if(timeoutTimer){
window.clearTimeout(timeoutTimer);
}
transport=undefined;
responseHeadersString=headers||"";
jqXHR.readyState=status>0?4:0;
isSuccess=status>=200&&status<300||status===304;
if(responses){
response=ajaxHandleResponses(s,jqXHR,responses);
}
if(!isSuccess&&
jQuery.inArray("script",s.dataTypes)>-1&&
jQuery.inArray("json",s.dataTypes)<0){
s.converters["text script"]=function(){};
}
response=ajaxConvert(s,response,jqXHR,isSuccess);
if(isSuccess){
if(s.ifModified){
modified=jqXHR.getResponseHeader("Last-Modified");
if(modified){
jQuery.lastModified[cacheURL]=modified;
}
modified=jqXHR.getResponseHeader("etag");
if(modified){
jQuery.etag[cacheURL]=modified;
}
}
if(status===204||s.type==="HEAD"){
statusText="nocontent";
}else if(status===304){
statusText="notmodified";
}else{
statusText=response.state;
success=response.data;
error=response.error;
isSuccess=!error;
}
}else{
error=statusText;
if(status||!statusText){
statusText="error";
if(status<0){
status=0;
}
}
}
jqXHR.status=status;
jqXHR.statusText=(nativeStatusText||statusText)+"";
if(isSuccess){
deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);
}else{
deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);
}
jqXHR.statusCode(statusCode);
statusCode=undefined;
if(fireGlobals){
globalEventContext.trigger(isSuccess?"ajaxSuccess":"ajaxError",
[jqXHR,s,isSuccess?success:error]);
}
completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);
if(fireGlobals){
globalEventContext.trigger("ajaxComplete",[jqXHR,s]);
if(!(--jQuery.active)){
jQuery.event.trigger("ajaxStop");
}
}
}
return jqXHR;
},
getJSON:function(url,data,callback){
return jQuery.get(url,data,callback,"json");
},
getScript:function(url,callback){
return jQuery.get(url,undefined,callback,"script");
}
});
jQuery.each(["get","post"],function(_i,method){
jQuery[method]=function(url,data,callback,type){
if(isFunction(data)){
type=type||callback;
callback=data;
data=undefined;
}
return jQuery.ajax(jQuery.extend({
url:url,
type:method,
dataType:type,
data:data,
success:callback
},jQuery.isPlainObject(url)&&url));
};
});
jQuery.ajaxPrefilter(function(s){
var i;
for(i in s.headers){
if(i.toLowerCase()==="content-type"){
s.contentType=s.headers[i]||"";
}
}
});
jQuery._evalUrl=function(url,options,doc){
return jQuery.ajax({
url:url,
type:"GET",
dataType:"script",
cache:true,
async:false,
global:false,
converters:{
"text script":function(){}
},
dataFilter:function(response){
jQuery.globalEval(response,options,doc);
}
});
};
jQuery.fn.extend({
wrapAll:function(html){
var wrap;
if(this[0]){
if(isFunction(html)){
html=html.call(this[0]);
}
wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);
if(this[0].parentNode){
wrap.insertBefore(this[0]);
}
wrap.map(function(){
var elem=this;
while(elem.firstElementChild){
elem=elem.firstElementChild;
}
return elem;
}).append(this);
}
return this;
},
wrapInner:function(html){
if(isFunction(html)){
return this.each(function(i){
jQuery(this).wrapInner(html.call(this,i));
});
}
return this.each(function(){
var self=jQuery(this),
contents=self.contents();
if(contents.length){
contents.wrapAll(html);
}else{
self.append(html);
}
});
},
wrap:function(html){
var htmlIsFunction=isFunction(html);
return this.each(function(i){
jQuery(this).wrapAll(htmlIsFunction?html.call(this,i):html);
});
},
unwrap:function(selector){
this.parent(selector).not("body").each(function(){
jQuery(this).replaceWith(this.childNodes);
});
return this;
}
});
jQuery.expr.pseudos.hidden=function(elem){
return!jQuery.expr.pseudos.visible(elem);
};
jQuery.expr.pseudos.visible=function(elem){
return!!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);
};
jQuery.ajaxSettings.xhr=function(){
try{
return new window.XMLHttpRequest();
}catch(e){}
};
var xhrSuccessStatus={
0:200,
1223:204
},
xhrSupported=jQuery.ajaxSettings.xhr();
support.cors=!!xhrSupported&&("withCredentials"in xhrSupported);
support.ajax=xhrSupported=!!xhrSupported;
jQuery.ajaxTransport(function(options){
var callback,errorCallback;
if(support.cors||xhrSupported&&!options.crossDomain){
return{
send:function(headers,complete){
var i,
xhr=options.xhr();
xhr.open(
options.type,
options.url,
options.async,
options.username,
options.password
);
if(options.xhrFields){
for(i in options.xhrFields){
xhr[i]=options.xhrFields[i];
}
}
if(options.mimeType&&xhr.overrideMimeType){
xhr.overrideMimeType(options.mimeType);
}
if(!options.crossDomain&&!headers["X-Requested-With"]){
headers["X-Requested-With"]="XMLHttpRequest";
}
for(i in headers){
xhr.setRequestHeader(i,headers[i]);
}
callback=function(type){
return function(){
if(callback){
callback=errorCallback=xhr.onload=
xhr.onerror=xhr.onabort=xhr.ontimeout=
xhr.onreadystatechange=null;
if(type==="abort"){
xhr.abort();
}else if(type==="error"){
if(typeof xhr.status!=="number"){
complete(0,"error");
}else{
complete(
xhr.status,
xhr.statusText
);
}
}else{
complete(
xhrSuccessStatus[xhr.status]||xhr.status,
xhr.statusText,
(xhr.responseType||"text")!=="text"||
typeof xhr.responseText!=="string"?
{binary:xhr.response}:
{text:xhr.responseText},
xhr.getAllResponseHeaders()
);
}
}
};
};
xhr.onload=callback();
errorCallback=xhr.onerror=xhr.ontimeout=callback("error");
if(xhr.onabort!==undefined){
xhr.onabort=errorCallback;
}else{
xhr.onreadystatechange=function(){
if(xhr.readyState===4){
window.setTimeout(function(){
if(callback){
errorCallback();
}
});
}
};
}
callback=callback("abort");
try{
xhr.send(options.hasContent&&options.data||null);
}catch(e){
if(callback){
throw e;
}
}
},
abort:function(){
if(callback){
callback();
}
}
};
}
});
jQuery.ajaxPrefilter(function(s){
if(s.crossDomain){
s.contents.script=false;
}
});
jQuery.ajaxSetup({
accepts:{
script:"text/javascript, application/javascript, "+
"application/ecmascript, application/x-ecmascript"
},
contents:{
script:/\b(?:java|ecma)script\b/
},
converters:{
"text script":function(text){
jQuery.globalEval(text);
return text;
}
}
});
jQuery.ajaxPrefilter("script",function(s){
if(s.cache===undefined){
s.cache=false;
}
if(s.crossDomain){
s.type="GET";
}
});
jQuery.ajaxTransport("script",function(s){
if(s.crossDomain||s.scriptAttrs){
var script,callback;
return{
send:function(_,complete){
script=jQuery("<script>")
.attr(s.scriptAttrs||{})
.prop({charset:s.scriptCharset,src:s.url})
.on("load error",callback=function(evt){
script.remove();
callback=null;
if(evt){
complete(evt.type==="error"?404:200,evt.type);
}
});
document.head.appendChild(script[0]);
},
abort:function(){
if(callback){
callback();
}
}
};
}
});
var oldCallbacks=[],
rjsonp=/(=)\?(?=&|$)|\?\?/;
jQuery.ajaxSetup({
jsonp:"callback",
jsonpCallback:function(){
var callback=oldCallbacks.pop()||(jQuery.expando+"_"+(nonce.guid++));
this[callback]=true;
return callback;
}
});
jQuery.ajaxPrefilter("json jsonp",function(s,originalSettings,jqXHR){
var callbackName,overwritten,responseContainer,
jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?
"url":
typeof s.data==="string"&&
(s.contentType||"")
.indexOf("application/x-www-form-urlencoded")===0&&
rjsonp.test(s.data)&&"data"
);
if(jsonProp||s.dataTypes[0]==="jsonp"){
callbackName=s.jsonpCallback=isFunction(s.jsonpCallback)?
s.jsonpCallback():
s.jsonpCallback;
if(jsonProp){
s[jsonProp]=s[jsonProp].replace(rjsonp,"$1"+callbackName);
}else if(s.jsonp!==false){
s.url+=(rquery.test(s.url)?"&":"?")+s.jsonp+"="+callbackName;
}
s.converters["script json"]=function(){
if(!responseContainer){
jQuery.error(callbackName+" was not called");
}
return responseContainer[0];
};
s.dataTypes[0]="json";
overwritten=window[callbackName];
window[callbackName]=function(){
responseContainer=arguments;
};
jqXHR.always(function(){
if(overwritten===undefined){
jQuery(window).removeProp(callbackName);
}else{
window[callbackName]=overwritten;
}
if(s[callbackName]){
s.jsonpCallback=originalSettings.jsonpCallback;
oldCallbacks.push(callbackName);
}
if(responseContainer&&isFunction(overwritten)){
overwritten(responseContainer[0]);
}
responseContainer=overwritten=undefined;
});
return"script";
}
});
support.createHTMLDocument=(function(){
var body=document.implementation.createHTMLDocument("").body;
body.innerHTML="<form></form><form></form>";
return body.childNodes.length===2;
})();
jQuery.parseHTML=function(data,context,keepScripts){
if(typeof data!=="string"){
return[];
}
if(typeof context==="boolean"){
keepScripts=context;
context=false;
}
var base,parsed,scripts;
if(!context){
if(support.createHTMLDocument){
context=document.implementation.createHTMLDocument("");
base=context.createElement("base");
base.href=document.location.href;
context.head.appendChild(base);
}else{
context=document;
}
}
parsed=rsingleTag.exec(data);
scripts=!keepScripts&&[];
if(parsed){
return[context.createElement(parsed[1])];
}
parsed=buildFragment([data],context,scripts);
if(scripts&&scripts.length){
jQuery(scripts).remove();
}
return jQuery.merge([],parsed.childNodes);
};
jQuery.fn.load=function(url,params,callback){
var selector,type,response,
self=this,
off=url.indexOf(" ");
if(off>-1){
selector=stripAndCollapse(url.slice(off));
url=url.slice(0,off);
}
if(isFunction(params)){
callback=params;
params=undefined;
}else if(params&&typeof params==="object"){
type="POST";
}
if(self.length>0){
jQuery.ajax({
url:url,
type:type||"GET",
dataType:"html",
data:params
}).done(function(responseText){
response=arguments;
self.html(selector?
jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector):
responseText);
}).always(callback&&function(jqXHR,status){
self.each(function(){
callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);
});
});
}
return this;
};
jQuery.expr.pseudos.animated=function(elem){
return jQuery.grep(jQuery.timers,function(fn){
return elem===fn.elem;
}).length;
};
jQuery.offset={
setOffset:function(elem,options,i){
var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,
position=jQuery.css(elem,"position"),
curElem=jQuery(elem),
props={};
if(position==="static"){
elem.style.position="relative";
}
curOffset=curElem.offset();
curCSSTop=jQuery.css(elem,"top");
curCSSLeft=jQuery.css(elem,"left");
calculatePosition=(position==="absolute"||position==="fixed")&&
(curCSSTop+curCSSLeft).indexOf("auto")>-1;
if(calculatePosition){
curPosition=curElem.position();
curTop=curPosition.top;
curLeft=curPosition.left;
}else{
curTop=parseFloat(curCSSTop)||0;
curLeft=parseFloat(curCSSLeft)||0;
}
if(isFunction(options)){
options=options.call(elem,i,jQuery.extend({},curOffset));
}
if(options.top!=null){
props.top=(options.top-curOffset.top)+curTop;
}
if(options.left!=null){
props.left=(options.left-curOffset.left)+curLeft;
}
if("using"in options){
options.using.call(elem,props);
}else{
curElem.css(props);
}
}
};
jQuery.fn.extend({
offset:function(options){
if(arguments.length){
return options===undefined?
this:
this.each(function(i){
jQuery.offset.setOffset(this,options,i);
});
}
var rect,win,
elem=this[0];
if(!elem){
return;
}
if(!elem.getClientRects().length){
return{top:0,left:0};
}
rect=elem.getBoundingClientRect();
win=elem.ownerDocument.defaultView;
return{
top:rect.top+win.pageYOffset,
left:rect.left+win.pageXOffset
};
},
position:function(){
if(!this[0]){
return;
}
var offsetParent,offset,doc,
elem=this[0],
parentOffset={top:0,left:0};
if(jQuery.css(elem,"position")==="fixed"){
offset=elem.getBoundingClientRect();
}else{
offset=this.offset();
doc=elem.ownerDocument;
offsetParent=elem.offsetParent||doc.documentElement;
while(offsetParent&&
(offsetParent===doc.body||offsetParent===doc.documentElement)&&
jQuery.css(offsetParent,"position")==="static"){
offsetParent=offsetParent.parentNode;
}
if(offsetParent&&offsetParent!==elem&&offsetParent.nodeType===1){
parentOffset=jQuery(offsetParent).offset();
parentOffset.top+=jQuery.css(offsetParent,"borderTopWidth",true);
parentOffset.left+=jQuery.css(offsetParent,"borderLeftWidth",true);
}
}
return{
top:offset.top-parentOffset.top-jQuery.css(elem,"marginTop",true),
left:offset.left-parentOffset.left-jQuery.css(elem,"marginLeft",true)
};
},
offsetParent:function(){
return this.map(function(){
var offsetParent=this.offsetParent;
while(offsetParent&&jQuery.css(offsetParent,"position")==="static"){
offsetParent=offsetParent.offsetParent;
}
return offsetParent||documentElement;
});
}
});
jQuery.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(method,prop){
var top="pageYOffset"===prop;
jQuery.fn[method]=function(val){
return access(this,function(elem,method,val){
var win;
if(isWindow(elem)){
win=elem;
}else if(elem.nodeType===9){
win=elem.defaultView;
}
if(val===undefined){
return win?win[prop]:elem[method];
}
if(win){
win.scrollTo(
!top?val:win.pageXOffset,
top?val:win.pageYOffset
);
}else{
elem[method]=val;
}
},method,val,arguments.length);
};
});
jQuery.each(["top","left"],function(_i,prop){
jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,
function(elem,computed){
if(computed){
computed=curCSS(elem,prop);
return rnumnonpx.test(computed)?
jQuery(elem).position()[prop]+"px":
computed;
}
}
);
});
jQuery.each({Height:"height",Width:"width"},function(name,type){
jQuery.each({
padding:"inner"+name,
content:type,
"":"outer"+name
},function(defaultExtra,funcName){
jQuery.fn[funcName]=function(margin,value){
var chainable=arguments.length&&(defaultExtra||typeof margin!=="boolean"),
extra=defaultExtra||(margin===true||value===true?"margin":"border");
return access(this,function(elem,type,value){
var doc;
if(isWindow(elem)){
return funcName.indexOf("outer")===0?
elem["inner"+name]:
elem.document.documentElement["client"+name];
}
if(elem.nodeType===9){
doc=elem.documentElement;
return Math.max(
elem.body["scroll"+name],doc["scroll"+name],
elem.body["offset"+name],doc["offset"+name],
doc["client"+name]
);
}
return value===undefined?
jQuery.css(elem,type,extra):
jQuery.style(elem,type,value,extra);
},type,chainable?margin:undefined,chainable);
};
});
});
jQuery.each([
"ajaxStart",
"ajaxStop",
"ajaxComplete",
"ajaxError",
"ajaxSuccess",
"ajaxSend"
],function(_i,type){
jQuery.fn[type]=function(fn){
return this.on(type,fn);
};
});
jQuery.fn.extend({
bind:function(types,data,fn){
return this.on(types,null,data,fn);
},
unbind:function(types,fn){
return this.off(types,null,fn);
},
delegate:function(selector,types,data,fn){
return this.on(types,selector,data,fn);
},
undelegate:function(selector,types,fn){
return arguments.length===1?
this.off(selector,"**"):
this.off(types,selector||"**",fn);
},
hover:function(fnOver,fnOut){
return this
.on("mouseenter",fnOver)
.on("mouseleave",fnOut||fnOver);
}
});
jQuery.each(
("blur focus focusin focusout resize scroll click dblclick "+
"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+
"change select submit keydown keypress keyup contextmenu").split(" "),
function(_i,name){
jQuery.fn[name]=function(data,fn){
return arguments.length>0?
this.on(name,null,data,fn):
this.trigger(name);
};
}
);
var rtrim=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
jQuery.proxy=function(fn,context){
var tmp,args,proxy;
if(typeof context==="string"){
tmp=fn[context];
context=fn;
fn=tmp;
}
if(!isFunction(fn)){
return undefined;
}
args=slice.call(arguments,2);
proxy=function(){
return fn.apply(context||this,args.concat(slice.call(arguments)));
};
proxy.guid=fn.guid=fn.guid||jQuery.guid++;
return proxy;
};
jQuery.holdReady=function(hold){
if(hold){
jQuery.readyWait++;
}else{
jQuery.ready(true);
}
};
jQuery.isArray=Array.isArray;
jQuery.parseJSON=JSON.parse;
jQuery.nodeName=nodeName;
jQuery.isFunction=isFunction;
jQuery.isWindow=isWindow;
jQuery.camelCase=camelCase;
jQuery.type=toType;
jQuery.now=Date.now;
jQuery.isNumeric=function(obj){
var type=jQuery.type(obj);
return(type==="number"||type==="string")&&
!isNaN(obj-parseFloat(obj));
};
jQuery.trim=function(text){
return text==null?
"":
(text+"").replace(rtrim,"$1");
};
if(typeof define==="function"&&define.amd){
define("jquery",[],function(){
return jQuery;
});
}
var
_jQuery=window.jQuery,
_$=window.$;
jQuery.noConflict=function(deep){
if(window.$===jQuery){
window.$=_$;
}
if(deep&&window.jQuery===jQuery){
window.jQuery=_jQuery;
}
return jQuery;
};
if(typeof noGlobal==="undefined"){
window.jQuery=window.$=jQuery;
}
return jQuery;
});


/* prive/javascript/jquery.form.js?1724223514 */

(function(factory){
if(typeof define==='function'&&define.amd){
define(['jquery'],factory);
}else if(typeof module==='object'&&module.exports){
module.exports=function(root,jQuery){
if(typeof jQuery==='undefined'){
if(typeof window!=='undefined'){
jQuery=require('jquery');
}
else{
jQuery=require('jquery')(root);
}
}
factory(jQuery);
return jQuery;
};
}else{
factory(jQuery);
}
}(function($){
'use strict';
var rCRLF=/\r?\n/g;
var feature={};
feature.fileapi=$('<input type="file">').get(0).files!==undefined;
feature.formdata=(typeof window.FormData!=='undefined');
var hasProp=!!$.fn.prop;
$.fn.attr2=function(){
if(!hasProp){
return this.attr.apply(this,arguments);
}
var val=this.prop.apply(this,arguments);
if((val&&val.jquery)||typeof val==='string'){
return val;
}
return this.attr.apply(this,arguments);
};
$.fn.ajaxSubmit=function(options,data,dataType,onSuccess){
if(!this.length){
log('ajaxSubmit: skipping submit process - no element selected');
return this;
}
var method,action,url,isMsie,iframeSrc,$form=this;
if(typeof options==='function'){
options={success:options};
}else if(typeof options==='string'||(options===false&&arguments.length>0)){
options={
'url':options,
'data':data,
'dataType':dataType
};
if(typeof onSuccess==='function'){
options.success=onSuccess;
}
}else if(typeof options==='undefined'){
options={};
}
method=options.method||options.type||this.attr2('method');
action=options.url||this.attr2('action');
url=(typeof action==='string')?$.trim(action):'';
url=url||window.location.href||'';
if(url){
url=(url.match(/^([^#]+)/)||[])[1];
}
isMsie=/(MSIE|Trident)/.test(navigator.userAgent||'');
iframeSrc=(isMsie&&/^https/i.test(window.location.href||''))?'javascript:false':'about:blank';
options=$.extend(true,{
url:url,
success:$.ajaxSettings.success,
type:method||$.ajaxSettings.type,
iframeSrc:iframeSrc
},options);
var veto={};
this.trigger('form-pre-serialize',[this,options,veto]);
if(veto.veto){
log('ajaxSubmit: submit vetoed via form-pre-serialize trigger');
return this;
}
if(options.beforeSerialize&&options.beforeSerialize(this,options)===false){
log('ajaxSubmit: submit aborted via beforeSerialize callback');
return this;
}
var traditional=options.traditional;
if(typeof traditional==='undefined'){
traditional=$.ajaxSettings.traditional;
}
var elements=[];
var qx,a=this.formToArray(options.semantic,elements,options.filtering);
if(options.data){
var optionsData=$.isFunction(options.data)?options.data(a):options.data;
options.extraData=optionsData;
qx=$.param(optionsData,traditional);
}
if(options.beforeSubmit&&options.beforeSubmit(a,this,options)===false){
log('ajaxSubmit: submit aborted via beforeSubmit callback');
return this;
}
this.trigger('form-submit-validate',[a,this,options,veto]);
if(veto.veto){
log('ajaxSubmit: submit vetoed via form-submit-validate trigger');
return this;
}
var q=$.param(a,traditional);
if(qx){
q=(q?(q+'&'+qx):qx);
}
if(options.type.toUpperCase()==='GET'){
options.url+=(options.url.indexOf('?')>=0?'&':'?')+q;
options.data=null;
}else{
options.data=q;
}
var callbacks=[];
if(options.resetForm){
callbacks.push(function(){
$form.resetForm();
});
}
if(options.clearForm){
callbacks.push(function(){
$form.clearForm(options.includeHidden);
});
}
if(!options.dataType&&options.target){
var oldSuccess=options.success||function(){};
callbacks.push(function(data,textStatus,jqXHR){
var successArguments=arguments,
fn=options.replaceTarget?'replaceWith':'html';
if(fn=='html'){
data=$.parseHTML($("<div>").text(data).html())
};
$(options.target)[fn](data).each(function(){
oldSuccess.apply(this,successArguments);
});
});
}else if(options.success){
if($.isArray(options.success)){
$.merge(callbacks,options.success);
}else{
callbacks.push(options.success);
}
}
options.success=function(data,status,xhr){
var context=options.context||this;
for(var i=0,max=callbacks.length;i<max;i++){
callbacks[i].apply(context,[data,status,xhr||$form,$form]);
}
};
if(options.error){
var oldError=options.error;
options.error=function(xhr,status,error){
var context=options.context||this;
oldError.apply(context,[xhr,status,error,$form]);
};
}
if(options.complete){
var oldComplete=options.complete;
options.complete=function(xhr,status){
var context=options.context||this;
oldComplete.apply(context,[xhr,status,$form]);
};
}
var fileInputs=$('input[type=file]:enabled',this).filter(function(){
return $(this).val()!=='';
});
var hasFileInputs=fileInputs.length>0;
var mp='multipart/form-data';
var multipart=($form.attr('enctype')===mp||$form.attr('encoding')===mp);
var fileAPI=feature.fileapi&&feature.formdata;
log('fileAPI :'+fileAPI);
var shouldUseFrame=(hasFileInputs||multipart)&&!fileAPI;
var jqxhr;
if(options.iframe!==false&&(options.iframe||shouldUseFrame)){
if(options.closeKeepAlive){
$.get(options.closeKeepAlive,function(){
jqxhr=fileUploadIframe(a);
});
}else{
jqxhr=fileUploadIframe(a);
}
}else if((hasFileInputs||multipart)&&fileAPI){
jqxhr=fileUploadXhr(a);
}else{
jqxhr=$.ajax(options);
}
$form.removeData('jqxhr').data('jqxhr',jqxhr);
for(var k=0;k<elements.length;k++){
elements[k]=null;
}
this.trigger('form-submit-notify',[this,options]);
return this;
function deepSerialize(extraData){
var serialized=$.param(extraData,options.traditional).split('&');
var len=serialized.length;
var result=[];
var i,part;
for(i=0;i<len;i++){
serialized[i]=serialized[i].replace(/\+/g,' ');
part=serialized[i].split('=');
result.push([decodeURIComponent(part[0]),decodeURIComponent(part[1])]);
}
return result;
}
function fileUploadXhr(a){
var formdata=new FormData();
for(var i=0;i<a.length;i++){
formdata.append(a[i].name,a[i].value);
}
if(options.extraData){
var serializedData=deepSerialize(options.extraData);
for(i=0;i<serializedData.length;i++){
if(serializedData[i]){
formdata.append(serializedData[i][0],serializedData[i][1]);
}
}
}
options.data=null;
var s=$.extend(true,{},$.ajaxSettings,options,{
contentType:false,
processData:false,
cache:false,
type:method||'POST'
});
if(options.uploadProgress){
s.xhr=function(){
var xhr=$.ajaxSettings.xhr();
if(xhr.upload){
xhr.upload.addEventListener('progress',function(event){
var percent=0;
var position=event.loaded||event.position;
var total=event.total;
if(event.lengthComputable){
percent=Math.ceil(position/total*100);
}
options.uploadProgress(event,position,total,percent);
},false);
}
return xhr;
};
}
s.data=null;
var beforeSend=s.beforeSend;
s.beforeSend=function(xhr,o){
if(options.formData){
o.data=options.formData;
}else{
o.data=formdata;
}
if(beforeSend){
beforeSend.call(this,xhr,o);
}
};
return $.ajax(s);
}
function fileUploadIframe(a){
var form=$form[0],el,i,s,g,id,$io,io,xhr,sub,n,timedOut,timeoutHandle;
var deferred=$.Deferred();
deferred.abort=function(status){
xhr.abort(status);
};
if(a){
for(i=0;i<elements.length;i++){
el=$(elements[i]);
if(hasProp){
el.prop('disabled',false);
}else{
el.removeAttr('disabled');
}
}
}
s=$.extend(true,{},$.ajaxSettings,options);
s.context=s.context||s;
id='jqFormIO'+new Date().getTime();
var ownerDocument=form.ownerDocument;
var $body=$form.closest('body');
if(s.iframeTarget){
$io=$(s.iframeTarget,ownerDocument);
n=$io.attr2('name');
if(!n){
$io.attr2('name',id);
}else{
id=n;
}
}else{
$io=$('<iframe name="'+id+'" src="'+s.iframeSrc+'">',ownerDocument);
$io.css({position:'absolute',top:'-1000px',left:'-1000px'});
}
io=$io[0];
xhr={
aborted:0,
responseText:null,
responseXML:null,
status:0,
statusText:'n/a',
getAllResponseHeaders:function(){},
getResponseHeader:function(){},
setRequestHeader:function(){},
abort:function(status){
var e=(status==='timeout'?'timeout':'aborted');
log('aborting upload... '+e);
this.aborted=1;
try{
if(io.contentWindow.document.execCommand){
io.contentWindow.document.execCommand('Stop');
}
}catch(ignore){}
$io.attr('src',s.iframeSrc);
xhr.error=e;
if(s.error){
s.error.call(s.context,xhr,e,status);
}
if(g){
$.event.trigger('ajaxError',[xhr,s,e]);
}
if(s.complete){
s.complete.call(s.context,xhr,e);
}
}
};
g=s.global;
if(g&&$.active++===0){
$.event.trigger('ajaxStart');
}
if(g){
$.event.trigger('ajaxSend',[xhr,s]);
}
if(s.beforeSend&&s.beforeSend.call(s.context,xhr,s)===false){
if(s.global){
$.active--;
}
deferred.reject();
return deferred;
}
if(xhr.aborted){
deferred.reject();
return deferred;
}
sub=form.clk;
if(sub){
n=sub.name;
if(n&&!sub.disabled){
s.extraData=s.extraData||{};
s.extraData[n]=sub.value;
if(sub.type==='image'){
s.extraData[n+'.x']=form.clk_x;
s.extraData[n+'.y']=form.clk_y;
}
}
}
var CLIENT_TIMEOUT_ABORT=1;
var SERVER_ABORT=2;
function getDoc(frame){
var doc=null;
try{
if(frame.contentWindow){
doc=frame.contentWindow.document;
}
}catch(err){
log('cannot get iframe.contentWindow document: '+err);
}
if(doc){
return doc;
}
try{
doc=frame.contentDocument?frame.contentDocument:frame.document;
}catch(err){
log('cannot get iframe.contentDocument: '+err);
doc=frame.document;
}
return doc;
}
var csrf_token=$('meta[name=csrf-token]').attr('content');
var csrf_param=$('meta[name=csrf-param]').attr('content');
if(csrf_param&&csrf_token){
s.extraData=s.extraData||{};
s.extraData[csrf_param]=csrf_token;
}
function doSubmit(){
var t=$form.attr2('target'),
a=$form.attr2('action'),
mp='multipart/form-data',
et=$form.attr('enctype')||$form.attr('encoding')||mp;
form.setAttribute('target',id);
if(!method||/post/i.test(method)){
form.setAttribute('method','POST');
}
if(a!==s.url){
form.setAttribute('action',s.url);
}
if(!s.skipEncodingOverride&&(!method||/post/i.test(method))){
$form.attr({
encoding:'multipart/form-data',
enctype:'multipart/form-data'
});
}
if(s.timeout){
timeoutHandle=setTimeout(function(){
timedOut=true;cb(CLIENT_TIMEOUT_ABORT);
},s.timeout);
}
function checkState(){
try{
var state=getDoc(io).readyState;
log('state = '+state);
if(state&&state.toLowerCase()==='uninitialized'){
setTimeout(checkState,50);
}
}catch(e){
log('Server abort: ',e,' (',e.name,')');
cb(SERVER_ABORT);
if(timeoutHandle){
clearTimeout(timeoutHandle);
}
timeoutHandle=undefined;
}
}
var extraInputs=[];
try{
if(s.extraData){
for(var n in s.extraData){
if(s.extraData.hasOwnProperty(n)){
if($.isPlainObject(s.extraData[n])&&s.extraData[n].hasOwnProperty('name')&&s.extraData[n].hasOwnProperty('value')){
extraInputs.push(
$('<input type="hidden" name="'+s.extraData[n].name+'">',ownerDocument).val(s.extraData[n].value)
.appendTo(form)[0]);
}else{
extraInputs.push(
$('<input type="hidden" name="'+n+'">',ownerDocument).val(s.extraData[n])
.appendTo(form)[0]);
}
}
}
}
if(!s.iframeTarget){
$io.appendTo($body);
}
if(io.attachEvent){
io.attachEvent('onload',cb);
}else{
io.addEventListener('load',cb,false);
}
setTimeout(checkState,15);
try{
form.submit();
}catch(err){
var submitFn=document.createElement('form').submit;
submitFn.apply(form);
}
}finally{
form.setAttribute('action',a);
form.setAttribute('enctype',et);
if(t){
form.setAttribute('target',t);
}else{
$form.removeAttr('target');
}
$(extraInputs).remove();
}
}
if(s.forceSync){
doSubmit();
}else{
setTimeout(doSubmit,10);
}
var data,doc,domCheckCount=50,callbackProcessed;
function cb(e){
if(xhr.aborted||callbackProcessed){
return;
}
doc=getDoc(io);
if(!doc){
log('cannot access response document');
e=SERVER_ABORT;
}
if(e===CLIENT_TIMEOUT_ABORT&&xhr){
xhr.abort('timeout');
deferred.reject(xhr,'timeout');
return;
}
if(e===SERVER_ABORT&&xhr){
xhr.abort('server abort');
deferred.reject(xhr,'error','server abort');
return;
}
if(!doc||doc.location.href===s.iframeSrc){
if(!timedOut){
return;
}
}
if(io.detachEvent){
io.detachEvent('onload',cb);
}else{
io.removeEventListener('load',cb,false);
}
var status='success',errMsg;
try{
if(timedOut){
throw'timeout';
}
var isXml=s.dataType==='xml'||doc.XMLDocument||$.isXMLDoc(doc);
log('isXml='+isXml);
if(!isXml&&window.opera&&(doc.body===null||!doc.body.innerHTML)){
if(--domCheckCount){
log('requeing onLoad callback, DOM not available');
setTimeout(cb,250);
return;
}
}
var docRoot=doc.body?doc.body:doc.documentElement;
xhr.responseText=docRoot?docRoot.innerHTML:null;
xhr.responseXML=doc.XMLDocument?doc.XMLDocument:doc;
if(isXml){
s.dataType='xml';
}
xhr.getResponseHeader=function(header){
var headers={'content-type':s.dataType};
return headers[header.toLowerCase()];
};
if(docRoot){
xhr.status=Number(docRoot.getAttribute('status'))||xhr.status;
xhr.statusText=docRoot.getAttribute('statusText')||xhr.statusText;
}
var dt=(s.dataType||'').toLowerCase();
var scr=/(json|script|text)/.test(dt);
if(scr||s.textarea){
var ta=doc.getElementsByTagName('textarea')[0];
if(ta){
xhr.responseText=ta.value;
xhr.status=Number(ta.getAttribute('status'))||xhr.status;
xhr.statusText=ta.getAttribute('statusText')||xhr.statusText;
}else if(scr){
var pre=doc.getElementsByTagName('pre')[0];
var b=doc.getElementsByTagName('body')[0];
if(pre){
xhr.responseText=pre.textContent?pre.textContent:pre.innerText;
}else if(b){
xhr.responseText=b.textContent?b.textContent:b.innerText;
}
}
}else if(dt==='xml'&&!xhr.responseXML&&xhr.responseText){
xhr.responseXML=toXml(xhr.responseText);
}
try{
data=httpData(xhr,dt,s);
}catch(err){
status='parsererror';
xhr.error=errMsg=(err||status);
}
}catch(err){
log('error caught: ',err);
status='error';
xhr.error=errMsg=(err||status);
}
if(xhr.aborted){
log('upload aborted');
status=null;
}
if(xhr.status){
status=((xhr.status>=200&&xhr.status<300)||xhr.status===304)?'success':'error';
}
if(status==='success'){
if(s.success){
s.success.call(s.context,data,'success',xhr);
}
deferred.resolve(xhr.responseText,'success',xhr);
if(g){
$.event.trigger('ajaxSuccess',[xhr,s]);
}
}else if(status){
if(typeof errMsg==='undefined'){
errMsg=xhr.statusText;
}
if(s.error){
s.error.call(s.context,xhr,status,errMsg);
}
deferred.reject(xhr,'error',errMsg);
if(g){
$.event.trigger('ajaxError',[xhr,s,errMsg]);
}
}
if(g){
$.event.trigger('ajaxComplete',[xhr,s]);
}
if(g&&!--$.active){
$.event.trigger('ajaxStop');
}
if(s.complete){
s.complete.call(s.context,xhr,status);
}
callbackProcessed=true;
if(s.timeout){
clearTimeout(timeoutHandle);
}
setTimeout(function(){
if(!s.iframeTarget){
$io.remove();
}else{
$io.attr('src',s.iframeSrc);
}
xhr.responseXML=null;
},100);
}
var toXml=$.parseXML||function(s,doc){
if(window.ActiveXObject){
doc=new ActiveXObject('Microsoft.XMLDOM');
doc.async='false';
doc.loadXML(s);
}else{
doc=(new DOMParser()).parseFromString(s,'text/xml');
}
return(doc&&doc.documentElement&&doc.documentElement.nodeName!=='parsererror')?doc:null;
};
var parseJSON=$.parseJSON||function(s){
window.console.error('jquery.parseJSON is undefined');
return null;
};
var httpData=function(xhr,type,s){
var ct=xhr.getResponseHeader('content-type')||'',
xml=((type==='xml'||!type)&&ct.indexOf('xml')>=0),
data=xml?xhr.responseXML:xhr.responseText;
if(xml&&data.documentElement.nodeName==='parsererror'){
if($.error){
$.error('parsererror');
}
}
if(s&&s.dataFilter){
data=s.dataFilter(data,type);
}
if(typeof data==='string'){
if((type==='json'||!type)&&ct.indexOf('json')>=0){
data=parseJSON(data);
}else if((type==='script'||!type)&&ct.indexOf('javascript')>=0){
$.globalEval(data);
}
}
return data;
};
return deferred;
}
};
$.fn.ajaxForm=function(options,data,dataType,onSuccess){
if(typeof options==='string'||(options===false&&arguments.length>0)){
options={
'url':options,
'data':data,
'dataType':dataType
};
if(typeof onSuccess==='function'){
options.success=onSuccess;
}
}
options=options||{};
options.delegation=options.delegation&&$.isFunction($.fn.on);
if(!options.delegation&&this.length===0){
var o={s:this.selector,c:this.context};
if(!$.isReady&&o.s){
log('DOM not ready, queuing ajaxForm');
$(function(){
$(o.s,o.c).ajaxForm(options);
});
return this;
}
log('terminating; zero elements found by selector'+($.isReady?'':' (DOM not ready)'));
return this;
}
if(options.delegation){
$(document)
.off('submit.form-plugin',this.selector,doAjaxSubmit)
.off('click.form-plugin',this.selector,captureSubmittingElement)
.on('submit.form-plugin',this.selector,options,doAjaxSubmit)
.on('click.form-plugin',this.selector,options,captureSubmittingElement);
return this;
}
if(options.beforeFormUnbind){
options.beforeFormUnbind(this,options);
}
return this.ajaxFormUnbind()
.on('submit.form-plugin',options,doAjaxSubmit)
.on('click.form-plugin',options,captureSubmittingElement);
};
function doAjaxSubmit(e){
var options=e.data;
if(!e.isDefaultPrevented()){
e.preventDefault();
$(e.target).closest('form').ajaxSubmit(options);
}
}
function captureSubmittingElement(e){
var target=e.target;
var $el=$(target);
if(!$el.is('[type=submit],[type=image]')){
var t=$el.closest('[type=submit]');
if(t.length===0){
return;
}
target=t[0];
}
var form=target.form;
form.clk=target;
if(target.type==='image'){
if(typeof e.offsetX!=='undefined'){
form.clk_x=e.offsetX;
form.clk_y=e.offsetY;
}else if(typeof $.fn.offset==='function'){
var offset=$el.offset();
form.clk_x=e.pageX-offset.left;
form.clk_y=e.pageY-offset.top;
}else{
form.clk_x=e.pageX-target.offsetLeft;
form.clk_y=e.pageY-target.offsetTop;
}
}
setTimeout(function(){
form.clk=form.clk_x=form.clk_y=null;
},100);
}
$.fn.ajaxFormUnbind=function(){
return this.off('submit.form-plugin click.form-plugin');
};
$.fn.formToArray=function(semantic,elements,filtering){
var a=[];
if(this.length===0){
return a;
}
var form=this[0];
var formId=this.attr('id');
var els=(semantic||typeof form.elements==='undefined')?form.getElementsByTagName('*'):form.elements;
var els2;
if(els){
els=$.makeArray(els);
}
if(formId&&(semantic||/(Edge|Trident)\//.test(navigator.userAgent))){
els2=$(':input[form="'+formId+'"]').get();
if(els2.length){
els=(els||[]).concat(els2);
}
}
if(!els||!els.length){
return a;
}
if($.isFunction(filtering)){
els=$.map(els,filtering);
}
var i,j,n,v,el,max,jmax;
for(i=0,max=els.length;i<max;i++){
el=els[i];
n=el.name;
if(!n||el.disabled){
continue;
}
if(semantic&&form.clk&&el.type==='image'){
if(form.clk===el){
a.push({name:n,value:$(el).val(),type:el.type});
a.push({name:n+'.x',value:form.clk_x},{name:n+'.y',value:form.clk_y});
}
continue;
}
v=$.fieldValue(el,true);
if(v&&v.constructor===Array){
if(elements){
elements.push(el);
}
for(j=0,jmax=v.length;j<jmax;j++){
a.push({name:n,value:v[j]});
}
}else if(feature.fileapi&&el.type==='file'){
if(elements){
elements.push(el);
}
var files=el.files;
if(files.length){
for(j=0;j<files.length;j++){
a.push({name:n,value:files[j],type:el.type});
}
}else{
a.push({name:n,value:'',type:el.type});
}
}else if(v!==null&&typeof v!=='undefined'){
if(elements){
elements.push(el);
}
a.push({name:n,value:v,type:el.type,required:el.required});
}
}
if(!semantic&&form.clk){
var $input=$(form.clk),input=$input[0];
n=input.name;
if(n&&!input.disabled&&input.type==='image'){
a.push({name:n,value:$input.val()});
a.push({name:n+'.x',value:form.clk_x},{name:n+'.y',value:form.clk_y});
}
}
return a;
};
$.fn.formSerialize=function(semantic){
return $.param(this.formToArray(semantic));
};
$.fn.fieldSerialize=function(successful){
var a=[];
this.each(function(){
var n=this.name;
if(!n){
return;
}
var v=$.fieldValue(this,successful);
if(v&&v.constructor===Array){
for(var i=0,max=v.length;i<max;i++){
a.push({name:n,value:v[i]});
}
}else if(v!==null&&typeof v!=='undefined'){
a.push({name:this.name,value:v});
}
});
return $.param(a);
};
$.fn.fieldValue=function(successful){
for(var val=[],i=0,max=this.length;i<max;i++){
var el=this[i];
var v=$.fieldValue(el,successful);
if(v===null||typeof v==='undefined'||(v.constructor===Array&&!v.length)){
continue;
}
if(v.constructor===Array){
$.merge(val,v);
}else{
val.push(v);
}
}
return val;
};
$.fieldValue=function(el,successful){
var n=el.name,t=el.type,tag=el.tagName.toLowerCase();
if(typeof successful==='undefined'){
successful=true;
}
if(successful&&(!n||el.disabled||t==='reset'||t==='button'||
(t==='checkbox'||t==='radio')&&!el.checked||
(t==='submit'||t==='image')&&el.form&&el.form.clk!==el||
tag==='select'&&el.selectedIndex===-1)){
return null;
}
if(tag==='select'){
var index=el.selectedIndex;
if(index<0){
return null;
}
var a=[],ops=el.options;
var one=(t==='select-one');
var max=(one?index+1:ops.length);
for(var i=(one?index:0);i<max;i++){
var op=ops[i];
if(op.selected&&!op.disabled){
var v=op.value;
if(!v){
v=(op.attributes&&op.attributes.value&&!(op.attributes.value.specified))?op.text:op.value;
}
if(one){
return v;
}
a.push(v);
}
}
return a;
}
return $(el).val().replace(rCRLF,'\r\n');
};
$.fn.clearForm=function(includeHidden){
return this.each(function(){
$('input,select,textarea',this).clearFields(includeHidden);
});
};
$.fn.clearFields=$.fn.clearInputs=function(includeHidden){
var re=/^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
return this.each(function(){
var t=this.type,tag=this.tagName.toLowerCase();
if(re.test(t)||tag==='textarea'){
this.value='';
}else if(t==='checkbox'||t==='radio'){
this.checked=false;
}else if(tag==='select'){
this.selectedIndex=-1;
}else if(t==='file'){
if(/MSIE/.test(navigator.userAgent)){
$(this).replaceWith($(this).clone(true));
}else{
$(this).val('');
}
}else if(includeHidden){
if((includeHidden===true&&/hidden/.test(t))||
(typeof includeHidden==='string'&&$(this).is(includeHidden))){
this.value='';
}
}
});
};
$.fn.resetForm=function(){
return this.each(function(){
var el=$(this);
var tag=this.tagName.toLowerCase();
switch(tag){
case'input':
this.checked=this.defaultChecked;
case'textarea':
this.value=this.defaultValue;
return true;
case'option':
case'optgroup':
var select=el.parents('select');
if(select.length&&select[0].multiple){
if(tag==='option'){
this.selected=this.defaultSelected;
}else{
el.find('option').resetForm();
}
}else{
select.resetForm();
}
return true;
case'select':
el.find('option').each(function(i){
this.selected=this.defaultSelected;
if(this.defaultSelected&&!el[0].multiple){
el[0].selectedIndex=i;
return false;
}
});
return true;
case'label':
var forEl=$(el.attr('for'));
var list=el.find('input,select,textarea');
if(forEl[0]){
list.unshift(forEl[0]);
}
list.resetForm();
return true;
case'form':
if(typeof this.reset==='function'||(typeof this.reset==='object'&&!this.reset.nodeType)){
this.reset();
}
return true;
default:
el.find('form,input,label,select,textarea').resetForm();
return true;
}
});
};
$.fn.enable=function(b){
if(typeof b==='undefined'){
b=true;
}
return this.each(function(){
this.disabled=!b;
});
};
$.fn.selected=function(select){
if(typeof select==='undefined'){
select=true;
}
return this.each(function(){
var t=this.type;
if(t==='checkbox'||t==='radio'){
this.checked=select;
}else if(this.tagName.toLowerCase()==='option'){
var $sel=$(this).parent('select');
if(select&&$sel[0]&&$sel[0].type==='select-one'){
$sel.find('option').selected(false);
}
this.selected=select;
}
});
};
$.fn.ajaxSubmit.debug=false;
function log(){
if(!$.fn.ajaxSubmit.debug){
return;
}
var msg='[jquery.form] '+Array.prototype.join.call(arguments,'');
if(window.console&&window.console.log){
window.console.log(msg);
}else if(window.opera&&window.opera.postError){
window.opera.postError(msg);
}
}
}));


/* prive/javascript/jquery.autosave.js?1724223514 */

(function($){
$.fn.autosave=function(opt){
opt=$.extend({
url:window.location,
confirm:false,
confirmstring:'Sauvegarder ?'
},opt);
var save_changed=function(){
$('form.autosavechanged')
.each(function(){
if(!opt.confirm||confirm(opt.confirmstring)){
var contenu=$(this).serialize();
var d=new Date();
contenu=contenu+"&__timestamp="+Math.round(d.getTime()/1000);
$.post(opt.url,{
'action':'session',
'var':'autosave_'+$('input[name=autosave]',this).val(),
'val':contenu
});
}
}).removeClass('autosavechanged');
};
$(window).on('unload',save_changed);
return this
.on('keyup',function(){
$(this).addClass('autosavechanged');
})
.on('change',function(){
$(this).addClass('autosavechanged');
save_changed();
})
.on('submit',function(){
save_changed();
});
};
})(jQuery);


/* prive/javascript/jquery.placeholder-label.js?1724223514 */

(function($){
$.placeholderLabel={
placeholder_class:null,
add_placeholder:function(){
if($(this).val()==$(this).attr('placeholder')){
$(this).val('').removeClass($.placeholderLabel.placeholder_class);
}
},
remove_placeholder:function(){
if($(this).val()==''){
$(this).val($(this).attr('placeholder')).addClass($.placeholderLabel.placeholder_class);
}
},
disable_placeholder_fields:function(){
$(this).find("input[placeholder]").each(function(){
if($(this).val()==$(this).attr('placeholder')){
$(this).val('');
}
});
return true;
}
};
$.fn.placeholderLabel=function(options){
var dummy=document.createElement('input');
if(dummy.placeholder!=undefined){
return this;
}
var config={
placeholder_class:'placeholder'
};
if(options)$.extend(config,options);
$.placeholderLabel.placeholder_class=config.placeholder_class;
this.each(function(){
var input=$(this);
input.focus($.placeholderLabel.add_placeholder);
input.blur($.placeholderLabel.remove_placeholder);
input.triggerHandler('focus');
input.triggerHandler('blur');
$(this.form).submit($.placeholderLabel.disable_placeholder_fields);
});
return this;
}
})(jQuery);


/* prive/javascript/ajaxCallback.js?1724223514 */
jQuery.spip=jQuery.spip||{};
jQuery.spip.log=function(){
if(jQuery.spip.debug&&window.console&&window.console.log)
window.console.log.apply(this,arguments);
}
jQuery.spip.test_espace_prive=function(){
if(typeof spipConfig.core.test_espace_prive!=undefined&&spipConfig.core.test_espace_prive){
return true;
}
return false;
}
if(!jQuery.spip.load_handlers){
jQuery.spip.load_handlers=new Array();
function onAjaxLoad(f){
jQuery.spip.load_handlers.push(f);
};
jQuery.spip.triggerAjaxLoad=function(root){
jQuery.spip.log('triggerAjaxLoad');
jQuery.spip.log(root);
for(var i=0;i<jQuery.spip.load_handlers.length;i++)
jQuery.spip.load_handlers[i].apply(root);
};
jQuery.spip.intercepted={};
jQuery.spip.intercepted.load=jQuery.fn.load;
jQuery.fn.load=function(url,params,callback){
if(typeof url!=="string"){
return jQuery.spip.intercepted.load.apply(this,arguments);
}
callback=callback||function(){};
if(params){
if(params.constructor==Function){
callback=params;
params=null;
}
}
params=jQuery.extend(params,{triggerAjaxLoad:false});
var callback2=function(){jQuery.spip.log('jQuery.load');jQuery.spip.triggerAjaxLoad(this);callback.apply(this,arguments);};
return jQuery.spip.intercepted.load.apply(this,[url,params,callback2]);
};
jQuery.spip.intercepted.ajaxSubmit=jQuery.fn.ajaxSubmit;
jQuery.fn.ajaxSubmit=function(options){
options=options||{};
if(typeof options.onAjaxLoad=="undefined"||options.onAjaxLoad!=false){
var me=jQuery(this).parents('div.ajax');
if(me.length)
me=me.parent();
else
me=document;
if(typeof options=='function')
options={success:options};
var callback=options.success||function(){};
options.success=function(){callback.apply(this,arguments);jQuery.spip.log('jQuery.ajaxSubmit');jQuery.spip.triggerAjaxLoad(me);}
}
return jQuery.spip.intercepted.ajaxSubmit.apply(this,[options]);
}
jQuery.spip.intercepted.ajax=jQuery.ajax;
jQuery.ajax=function(url,settings){
if(typeof settings=='undefined'){
settings={};
if(typeof url=='object'){
settings=url;
url=null;
}
}
if(typeof url=='string'){
settings['url']=url;
}
if(settings.data&&settings.data['triggerAjaxLoad']===false){
settings.data['triggerAjaxLoad']=null;
return jQuery.spip.intercepted.ajax(settings);
}
var s=jQuery.extend(true,{},jQuery.ajaxSettings,settings);
var callbackContext=s.context||s;
try{
if(jQuery.ajax.caller==jQuery.spip.intercepted.load||jQuery.ajax.caller==jQuery.spip.intercepted.ajaxSubmit)
return jQuery.spip.intercepted.ajax(settings);
}
catch(err){}
var orig_complete=s.complete||function(){};
settings.complete=function(res,status){
var dataType=settings.dataType;
var ct=(res&&(typeof res.getResponseHeader=='function'))
?res.getResponseHeader("content-type"):'';
var xml=!dataType&&ct&&ct.indexOf("xml")>=0;
orig_complete.call(callbackContext,res,status);
if((!dataType&&!xml)||dataType=="html"){
jQuery.spip.log('jQuery.ajax');
if(typeof s.onAjaxLoad=="undefined"||s.onAjaxLoad!=false)
jQuery.spip.triggerAjaxLoad(s.ajaxTarget?s.ajaxTarget:document);
}
};
return jQuery.spip.intercepted.ajax(settings);
};
}
jQuery.uaMatch=function(ua){
ua=ua.toLowerCase();
var match=/(chrome)[ \/]([\w.]+)/.exec(ua)||/(webkit)[ \/]([\w.]+)/.exec(ua)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua)||/(msie) ([\w.]+)/.exec(ua)||
ua.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)||
[];
return{
browser:match[1]||"",
version:match[2]||"0"
};
};
if(!jQuery.browser){
matched=jQuery.uaMatch(navigator.userAgent);
browser={};
if(matched.browser){
browser[matched.browser]=true;
browser.version=matched.version;
}
if(browser.chrome){
browser.webkit=true;
}else if(browser.webkit){
browser.safari=true;
}
jQuery.browser=browser;
}
jQuery.getScript=function(url,callback){
return $.ajax({
url:url,
dataType:"script",
success:callback,
cache:true
});
}
jQuery.fn.positionner=function(force,setfocus){
if(!this.length){
return this;
}
var offset=jQuery(this).offset();
var hauteur=parseInt(jQuery(this).css('height'));
var marge=jQuery.spip.positionner_marge||5;
var scrolltop=self['pageYOffset']||
jQuery.boxModel&&document.documentElement['scrollTop']||
document.body['scrollTop'];
var h=jQuery(window).height();
var scroll=0;
if(force||(offset&&offset['top']-marge<=scrolltop)){
scroll=offset['top']-marge;
}
else if(offset&&offset['top']+hauteur-h+marge>scrolltop){
scroll=Math.min(offset['top']-marge-15,offset['top']+hauteur-h+40);
}
if(scroll)
jQuery('html,body')
.animate({scrollTop:scroll},300);
if(setfocus!==false)
jQuery(jQuery('*',this).filter('input[type=text],textarea')[0]).focus();
return this;
}
jQuery.spip.virtualbuffer_id='spip_virtualbufferupdate';
jQuery.spip.initReaderBuffer=function(){
if(jQuery('#'+jQuery.spip.virtualbuffer_id).length)return;
jQuery('body').append('<div style="float:left;width:0;height:0;position:absolute;left:-5000px;top:-5000px;"><input type="hidden" name="'+jQuery.spip.virtualbuffer_id+'" id="'+jQuery.spip.virtualbuffer_id+'" value="0"></div>');
}
jQuery.spip.updateReaderBuffer=function(){
var i=jQuery('#'+jQuery.spip.virtualbuffer_id);
if(!i.length)return;
i.val(parseInt(i.val())+1);
}
jQuery.fn.formulaire_setContainer=function(){
if(!this.closest('.ajax-form-container').length){
this.find('script').remove();
var aria=this.data('aria');
var $container=jQuery('<div class="ajax-form-container"></div>');
if(aria&&typeof aria==='object'){
for(var i in aria){
$container=$container.attr(i,aria[i]);
}
}
else{
aria=false;
}
this.wrap($container);
if(aria){
jQuery('form',this).not('[aria-live]').attr('aria-live','off');
}
}
return this;
}
jQuery.fn.formulaire_dyn_ajax=function(target){
if(this.length)
jQuery.spip.initReaderBuffer();
return this.each(function(){
var scrollwhensubmit=!jQuery(this).is('.noscroll');
var cible=target||this;
jQuery(cible).formulaire_setContainer();
jQuery('form:not(.noajax):not(.bouton_action_post)',this).each(function(){
var leform=this;
var leclk,leclk_x,leclk_y;
var onError=function(xhr,status,error,$form){
jQuery(leform).ajaxFormUnbind().find('input[name="var_ajax"]').remove();
var msg="Erreur";
if(typeof(error_on_ajaxform)!=="undefined")msg=error_on_ajaxform;
jQuery(leform).prepend("<p class='error ajax-error none'>"+msg+"</p>").find('.ajax-error').show('fast');
jQuery(cible).closest('.ajax-form-container').endLoading(true);
}
jQuery(this).prepend("<input type='hidden' name='var_ajax' value='form'>")
.ajaxForm({
beforeSubmit:function(){
leclk=leform.clk;
var scrollwhensubmit_button=true;
if(leclk){
scrollwhensubmit_button=!jQuery(leclk).is('.noscroll');
var n=leclk.name;
if(n&&!leclk.disabled&&leclk.type==="image"){
leclk_x=leform.clk_x;
leclk_y=leform.clk_y;
}
}
jQuery(cible).wrap('<div />');
cible=jQuery(cible).parent();
jQuery(cible).closest('.ajax-form-container').animateLoading();
if(scrollwhensubmit&&scrollwhensubmit_button){
jQuery(cible).positionner(false,false);
}
},
error:onError,
success:function(c,status,xhr,$form){
if(c.match(/^\s*noajax\s*$/)){
jQuery("input[name=var_ajax]",leform).remove();
if(leclk){
var n=leclk.name;
if(n&&!leclk.disabled){
jQuery(leform).prepend("<input type='hidden' name='"+n+"' value='"+leclk.value+"'>");
if(leclk.type==="image"){
jQuery(leform).prepend("<input type='hidden' name='"+n+".x' value='"+leform.clk_x+"'>");
jQuery(leform).prepend("<input type='hidden' name='"+n+".y' value='"+leform.clk_y+"'>");
}
}
}
jQuery(leform).ajaxFormUnbind().closest('.formulaire_spip').addClass('resubmit-noajax');
try{
leform.submit();
}catch(err){
var submitFn=document.createElement('form').submit;
submitFn.apply(leform);
}
}
else{
if(!c.length||c.indexOf("ajax-form-is-ok")==-1)
return onError.apply(this,[status,xhr,$form]);
var preloaded=jQuery.spip.preloaded_urls;
jQuery.spip.preloaded_urls={};
jQuery(cible).html(c);
var a=jQuery('a:first',cible).eq(0);
var d=jQuery('div.ajax',cible);
if(!d.length){
jQuery(cible).addClass('ajax');
if(!scrollwhensubmit)
jQuery(cible).addClass('noscroll');
}
else{
d.siblings('br.bugajaxie').remove();
cible=jQuery(":first",cible);
cible.unwrap();
}
if(a.length
&&a.is('a[name=ajax_ancre]')
&&jQuery(a.attr('href'),cible).length){
a=a.attr('href');
if(jQuery(a,cible).length)
setTimeout(function(){
jQuery(a,cible).positionner(false);
},10);
jQuery(cible).closest('.ajax-form-container').endLoading(true);
}
else{
if(a.length&&a.is('a[name=ajax_redirect]')){
a=a.get(0).href;
setTimeout(function(){
var cur=window.location.href.split('#');
document.location.replace(a);
if(cur[0]==a.split('#')[0]){
window.location.reload();
}
},10);
jQuery(cible).closest('.ajax-form-container').animateLoading();
}
else{
jQuery(cible).closest('.ajax-form-container').endLoading(true);
}
}
if(!jQuery('.reponse_formulaire_ok',cible).length)
jQuery.spip.preloaded_urls=preloaded;
jQuery.spip.updateReaderBuffer();
}
}
})
.addClass('noajax hasajax');
});
});
}
jQuery.fn.formulaire_verifier=function(callback,champ){
var erreurs={'message_erreur':'form non ajax'};
var me=this;
if(jQuery(me).closest('.ajax-form-container').attr('aria-busy')!='true'){
if(jQuery(me).is('form.hasajax')){
jQuery(me).ajaxSubmit({
dataType:"json",
data:{formulaire_action_verifier_json:true},
success:function(errs){
var args=[errs,champ]
if(jQuery(me).closest('.ajax-form-container').attr('aria-busy')!='true')
callback.apply(me,args);
}
});
}
else
callback.apply(me,[erreurs,champ]);
}
return this;
}
jQuery.fn.formulaire_activer_verif_auto=function(callback){
callback=callback||formulaire_actualiser_erreurs;
var me=jQuery(this).closest('.ajax-form-container');
var check=function(){
var name=jQuery(this).attr('name');
setTimeout(function(){me.find('form').formulaire_verifier(callback,name);},50);
}
var activer=function(){
if(me.find('form').attr('data-verifjson')!='on'){
me
.find('form')
.attr('data-verifjson','on')
.find('input,select,textarea')
.on('change',check);
}
}
jQuery(activer);
onAjaxLoad(function(){setTimeout(activer,150);});
}
function formulaire_actualiser_erreurs(erreurs){
var parent=jQuery(this).closest('.formulaire_spip');
if(!parent.length)return;
parent.find('.reponse_formulaire,.erreur_message').fadeOut().remove();
parent.find('.erreur').removeClass('erreur');
if(erreurs['message_ok'])
parent.find('form').before('<p class="reponse_formulaire reponse_formulaire_ok">'+erreurs['message_ok']+'</p>');
if(erreurs['message_erreur'])
parent.find('form').before('<p class="reponse_formulaire reponse_formulaire_erreur">'+erreurs['message_erreur']+'</p>');
for(var k in erreurs){
var saisie=parent.find('.editer_'+k);
if(saisie.length){
saisie.addClass('erreur');
saisie.find('label').after('<span class="erreur_message">'+erreurs[k]+'</span>');
}
}
}
var ajax_confirm=true;
var ajax_confirm_date=0;
var spip_confirm=window.confirm;
function _confirm(message){
ajax_confirm=spip_confirm(message);
if(!ajax_confirm){
var d=new Date();
ajax_confirm_date=d.getTime();
}
return ajax_confirm;
}
window.confirm=_confirm;
var ajaxbloc_selecteur;
jQuery.spip.preloaded_urls={};
jQuery.spip.on_ajax_loaded=function(blocfrag,c,href,history){
history=history||(history==null);
if(typeof href==undefined||href==null)
history=false;
if(history)
jQuery.spip.setHistoryState(blocfrag);
if(jQuery(blocfrag).attr('data-loaded-callback')){
var callback=eval(jQuery(blocfrag).attr('data-loaded-callback'));
callback.call(blocfrag,c,href,history);
}
else{
jQuery(blocfrag)
.html(c)
.endLoading();
}
if(typeof href!=undefined)
jQuery(blocfrag).attr('data-url',href);
if(history){
jQuery.spip.pushHistoryState(href);
jQuery.spip.setHistoryState(blocfrag);
}
var a=jQuery('a:first',jQuery(blocfrag)).eq(0);
if(a.length
&&a.is('a[name=ajax_ancre]')
&&jQuery(a.attr('href'),blocfrag).length){
a=a.attr('href');
jQuery(a,blocfrag).positionner(false);
}
jQuery.spip.log('on_ajax_loaded');
jQuery.spip.triggerAjaxLoad(blocfrag);
a=jQuery(blocfrag).parents('form.hasajax')
if(a.length)
a.eq(0).removeClass('noajax').parents('div.ajax').formulaire_dyn_ajax();
jQuery.spip.updateReaderBuffer();
}
jQuery.spip.on_ajax_failed=function(blocfrag,statusCode,href,history){
jQuery(blocfrag).addClass('invalid');
jQuery.spip.log("Echec AJAX statusCode "+statusCode)
history=history||(history==null);
if(history){
if(jQuery.spip.debug){
jQuery.spip.log("On redirige sur sur "+href)
}
else{
window.location.href=href;
}
}
}
jQuery.spip.stateId=0;
jQuery.spip.setHistoryState=function(blocfrag){
if(!window.history.replaceState)return;
if(!blocfrag.attr('id')){
while(jQuery('#ghsid'+jQuery.spip.stateId).length)
jQuery.spip.stateId++;
blocfrag.attr('id','ghsid'+jQuery.spip.stateId);
}
var href=blocfrag.attr('data-url')||blocfrag.attr('data-origin');
href=jQuery("<"+"a href='"+href+"'></a>").get(0).href;
var state={
id:blocfrag.attr('id'),
href:href
};
var ajaxid=blocfrag.attr('class').match(/\bajax-id-[\w-]+\b/);
if(ajaxid&&ajaxid.length)
state["ajaxid"]=ajaxid[0];
window.history.replaceState(state,window.document.title,window.document.location);
}
jQuery.spip.pushHistoryState=function(href,title){
if(!window.history.pushState)
return false;
window.history.pushState({},title,href);
}
window.onpopstate=function(popState){
if(popState.state&&popState.state.href){
var blocfrag=false;
if(popState.state.id){
blocfrag=jQuery('#'+popState.state.id);
}
if((!blocfrag||!blocfrag.length)&&popState.state.ajaxid){
blocfrag=jQuery('.ajaxbloc.'+popState.state.ajaxid);
}
if(blocfrag&&blocfrag.length==1){
jQuery.spip.ajaxClick(blocfrag,popState.state.href,{history:false});
return true;
}
else{
window.location.href=popState.state.href;
}
}
}
jQuery.spip.loadAjax=function(blocfrag,url,href,options){
var force=options.force||false;
if(jQuery(blocfrag).attr('data-loading-callback')){
var callback=eval(jQuery(blocfrag).attr('data-loading-callback'));
callback.call(blocfrag,url,href,options);
}
else{
jQuery(blocfrag).animateLoading();
}
if(jQuery.spip.preloaded_urls[url]&&!force){
if(jQuery.spip.preloaded_urls[url]=="<!--loading-->"){
setTimeout(function(){jQuery.spip.loadAjax(blocfrag,url,href,options);},100);
return;
}
jQuery.spip.on_ajax_loaded(blocfrag,jQuery.spip.preloaded_urls[url],href,options.history);
}else{
var d=new Date();
jQuery.spip.preloaded_urls[url]="<!--loading-->";
jQuery.ajax({
url:parametre_url(url,'var_t',d.getTime()),
onAjaxLoad:false,
success:function(c){
jQuery.spip.on_ajax_loaded(blocfrag,c,href,options.history);
jQuery.spip.preloaded_urls[url]=c;
if(options.callback&&typeof options.callback=="function")
options.callback.apply(blocfrag);
},
error:function(e){
jQuery.spip.preloaded_urls[url]='';
jQuery.spip.on_ajax_failed(blocfrag,e.status,href,options.history);
}
});
}
}
jQuery.spip.makeAjaxUrl=function(href,ajax_env,origin){
var url=href.split('#');
url[0]=parametre_url(url[0],'var_ajax',1);
url[0]=parametre_url(url[0],'var_ajax_env',ajax_env);
if(origin){
var p=origin.indexOf('?');
if(p!==-1){
var args=origin.substring(p+1).split('&');
var val;
var arg;
for(var n=0;n<args.length;n++){
arg=args[n].split('=');
arg=decodeURIComponent(arg[0]);
p=arg.indexOf('[');
if(p!==-1)
arg=arg.substring(0,p);
val=parametre_url(href,arg);
if(typeof val=="undefined"||val==null)
url[0]=url[0]+'&'+arg+'=';
}
}
}
if(url[1])
url[0]=parametre_url(url[0],'var_ajax_ancre',url[1]);
return url[0];
}
jQuery.spip.ajaxReload=function(blocfrag,options){
var ajax_env=blocfrag.attr('data-ajax-env');
if(!ajax_env||ajax_env==undefined)return;
var href=options.href||blocfrag.attr('data-url')||blocfrag.attr('data-origin');
if(href&&typeof href!=undefined){
options=options||{};
var callback=options.callback||null;
var history=options.history||false;
var args=options.args||{};
for(var key in args)
href=parametre_url(href,key,args[key]==undefined?'':args[key],'&',args[key]==undefined?false:true);
var url=jQuery.spip.makeAjaxUrl(href,ajax_env,blocfrag.attr('data-origin'));
jQuery.spip.loadAjax(blocfrag,url,href,{force:true,callback:callback,history:history});
return true;
}
}
jQuery.spip.ajaxClick=function(blocfrag,href,options){
var ajax_env=blocfrag.attr('data-ajax-env');
if(!ajax_env||ajax_env==undefined)return;
if(!ajax_confirm){
ajax_confirm=true;
var d=new Date();
if((d.getTime()-ajax_confirm_date)<=2)
return false;
}
var url=jQuery.spip.makeAjaxUrl(href,ajax_env,blocfrag.attr('data-origin'));
jQuery.spip.loadAjax(blocfrag,url,href,options);
return false;
}
jQuery.fn.ajaxbloc=function(){
if(this.length)
jQuery.spip.initReaderBuffer();
if(ajaxbloc_selecteur==undefined)
ajaxbloc_selecteur='.pagination a,a.ajax';
return this.each(function(){
jQuery('div.ajaxbloc',this).ajaxbloc();
var blocfrag=jQuery(this);
var ajax_env=blocfrag.attr('data-ajax-env');
if(!ajax_env||ajax_env==undefined)return;
blocfrag.not('.bind-ajaxReload').on('ajaxReload',function(event,options){
if(jQuery.spip.ajaxReload(blocfrag,options))
event.stopPropagation();
}).addClass('bind-ajaxReload');
jQuery(ajaxbloc_selecteur,this).not('.noajax,.bind-ajax')
.click(function(){return jQuery.spip.ajaxClick(blocfrag,this.href,{force:jQuery(this).is('.nocache'),history:!(jQuery(this).is('.nohistory')||jQuery(this).closest('.box_modalbox').length)});})
.addClass('bind-ajax')
.filter('.preload').each(function(){
var href=this.href;
var url=jQuery.spip.makeAjaxUrl(href,ajax_env,blocfrag.attr('data-origin'));
if(!jQuery.spip.preloaded_urls[url]){
jQuery.spip.preloaded_urls[url]='<!--loading-->';
jQuery.ajax({url:url,onAjaxLoad:false,success:function(r){jQuery.spip.preloaded_urls[url]=r;},error:function(){jQuery.spip.preloaded_urls[url]='';}});
}
});
jQuery('form.bouton_action_post.ajax',this).not('.noajax,.bind-ajax').each(function(){
var leform=this;
var url=jQuery(this).attr('action').split('#');
var scrollwhensubmit=(!jQuery(this).is('.noscroll')&&!jQuery('.submit',this).is('.noscroll'));
jQuery(this)
.prepend("<input type='hidden' name='var_ajax' value='1'><input type='hidden' name='var_ajax_env' value='"+(ajax_env)+"'>"+(url[1]?"<input type='hidden' name='var_ajax_ancre' value='"+url[1]+"'>":""))
.ajaxForm({
beforeSubmit:function(){
jQuery(blocfrag).animateLoading();
if(scrollwhensubmit){
jQuery(blocfrag).positionner(false);
}
},
onAjaxLoad:false,
success:function(c){
jQuery.spip.on_ajax_loaded(blocfrag,c);
jQuery.spip.preloaded_urls={};
},
error:function(e){
jQuery.spip.preloaded_urls={};
var href=parametre_url(url,'redirect');
if(!href){
href=window.location.href;
}
jQuery.spip.on_ajax_failed(blocfrag,e.status,href,e.status===400);
}
})
.addClass('bind-ajax');
});
});
};
jQuery.fn.followLink=function(){
$(this).click();
if(!$(this).is('.bind-ajax'))
window.location.href=$(this).get(0).href;
return this;
}
function ajaxReload(ajaxid,options){
jQuery('div.ajaxbloc.ajax-id-'+ajaxid).ajaxReload(options);
}
jQuery.fn.ajaxReload=function(options){
options=options||{};
jQuery(this).trigger('ajaxReload',[options]);
return this;
}
jQuery.fn.animateLoading=function(){
this.attr('aria-busy','true').addClass('loading').children().css('opacity',0.5);
if(typeof ajax_image_searching!='undefined'){
var i=(this).find('.image_loading');
if(i.length)i.eq(0).html(ajax_image_searching);
else this.prepend('<span class="image_loading">'+ajax_image_searching+'</span>');
}
return this;
}
jQuery.fn.animeajax=jQuery.fn.animateLoading;
jQuery.fn.endLoading=function(hard){
hard=hard||false;
this.attr('aria-busy','false').removeClass('loading');
if(hard){
this.children().css('opacity','');
this.find('.image_loading').html('');
}
return this;
}
jQuery.fn.animateRemove=function(callback){
if(this.length){
var me=this;
var color=$("<div class='remove'></div>").css('background-color');
var sel=$(this);
if(sel.is('tr'))
sel=sel.add('>td',sel);
sel.addClass('remove').css({backgroundColor:color}).animate({opacity:"0.0"},'fast',function(){
sel.removeClass('remove').css({backgroundColor:''});
if(callback)
callback.apply(me);
});
}
return this;
}
jQuery.fn.animateAppend=function(callback){
if(this.length){
var me=this;
var color=$("<div class='append'></div>").css('background-color');
var origin=$(this).css('background-color')||'#ffffff';
if(origin=='transparent')origin='#ffffff';
var sel=$(this);
if(sel.is('tr'))
sel=sel.add('>td',sel);
sel.css('opacity','0.0').addClass('append').css({backgroundColor:color}).animate({opacity:"1.0"},1000,function(){
sel.animate({backgroundColor:origin},3000,function(){
sel.removeClass('append').css({backgroundColor:''});
if(callback)
callback.apply(me);
});
});
}
return this;
}
function parametre_url(url,c,v,sep,force_vide){
if(typeof(url)=='undefined'){
url='';
}
var p;
var ancre='';
var a='./';
var args=[];
p=url.indexOf('#');
if(p!=-1){
ancre=url.substring(p);
url=url.substring(0,p);
}
p=url.indexOf('?');
if(p!==-1){
if(p>0)a=url.substring(0,p);
args=url.substring(p+1).split('&');
}
else
a=url;
var regexp=new RegExp('^('+c.replace('[]','\\[\\]')+'\\[?\\]?)(=.*)?$');
var ajouts=[];
var u=(typeof(v)!=='object')?encodeURIComponent(v):v;
var na=[];
var v_read=null;
for(var n=0;n<args.length;n++){
var val=args[n];
try{
val=decodeURIComponent(val);
}catch(e){}
var r=val.match(regexp);
if(r&&r.length){
if(v==null){
if(r[1].substr(-2)=='[]'){
if(!v_read)v_read=[];
v_read.push((r.length>2&&typeof r[2]!=='undefined')?r[2].substring(1):'');
}
else{
return(r.length>2&&typeof r[2]!=='undefined')?r[2].substring(1):'';
}
}
else if(!v.length){
}
else if(r[1].substr(-2)!='[]'){
na.push(r[1]+'='+u);
ajouts.push(r[1]);
}
}
else
na.push(args[n]);
}
if(v==null)return v_read;
if(v||v.length||force_vide){
ajouts="="+ajouts.join("=")+"=";
var all=c.split('|');
for(n=0;n<all.length;n++){
if(ajouts.search("="+all[n]+"=")==-1){
if(typeof(v)!=='object'){
na.push(all[n]+'='+u);
}
else{
var id=((all[n].substring(-2)=='[]')?all[n]:all[n]+"[]");
for(p=0;p<v.length;p++)
na.push(id+'='+encodeURIComponent(v[p]));
}
}
}
}
if(na.length){
if(!sep)sep='&';
a=a+"?"+na.join(sep);
}
return a+ancre;
}
function spip_logo_survol_hover(){
var me=jQuery(this);
if(me.attr('data-src-hover')){
me.attr('data-src-original',me.attr('src'));
me.attr('src',me.attr('data-src-hover'));
}
}
function spip_logo_survol_out(){
var me=jQuery(this);
if(me.attr('data-src-original')){
me.attr('src',me.attr('data-src-original'));
}
}
function disableClickAfterFormSubmit(){
if(jQuery(this).is('.processing-submitted-form')){
return false;
}
jQuery(this)
.addClass('processing-submitted-form')
.find('button[type="submit"]')
.attr('disabled','disabled')
.addClass('disabled')
}
function puce_enable_survol(){
jQuery('span.puce_objet_popup a',this).not('.puce-survol-enabled').click(function(){
selec_statut(jQuery(this).attr('data-puce-id'),jQuery(this).attr('data-puce-type'),jQuery(this).attr('data-puce-decal'),jQuery('img',this).attr('src'),jQuery(this).attr('data-puce-action'));
return false;
}).addClass('puce-survol-enabled');
jQuery('span.puce_objet',this).not('.puce-survol-enabled').mouseover(function(){
if(!this.puce_loaded){
this.puce_loaded=true;prepare_selec_statut(this,jQuery(this).attr('data-puce-nom'),jQuery(this).attr('data-puce-type'),jQuery(this).attr('data-puce-id'),jQuery(this).attr('data-puce-action'));
}
}).addClass('puce-survol-enabled');
}
if(!window.var_zajax_content)
window.var_zajax_content='contenu';
jQuery(function(){
jQuery('form:not(.bouton_action_post)').parents('div.ajax')
.formulaire_dyn_ajax();
jQuery('div.ajaxbloc').ajaxbloc();
jQuery("input[placeholder]:text").placeholderLabel();
jQuery('.spip_logo_survol').hover(spip_logo_survol_hover,spip_logo_survol_out);
puce_enable_survol.apply(this);
jQuery('body').on('submit','form.bouton_action_post',disableClickAfterFormSubmit);
});
onAjaxLoad(function(){
if(jQuery){
jQuery('form:not(.bouton_action_post)',this).parents('div.ajax')
.formulaire_dyn_ajax();
if(jQuery(this).is('div.ajaxbloc'))
jQuery(this).ajaxbloc();
else if(jQuery(this).closest('div.ajaxbloc').length)
jQuery(this).closest('div.ajaxbloc').ajaxbloc();
else
jQuery('div.ajaxbloc',this).ajaxbloc();
jQuery("input[placeholder]:text",this).placeholderLabel();
jQuery('.spip_logo_survol',this).hover(spip_logo_survol_hover,spip_logo_survol_out);
puce_enable_survol.apply(this);
}
});


/* prive/javascript/js.cookie.js?1724223514 */

;
(function(global,factory){
typeof exports==='object'&&typeof module!=='undefined'?module.exports=factory():
typeof define==='function'&&define.amd?define(factory):
(global=typeof globalThis!=='undefined'?globalThis:global||self,(function(){
var current=global.Cookies;
var exports=global.Cookies=factory();
exports.noConflict=function(){global.Cookies=current;return exports;};
})());
})(this,(function(){'use strict';
function assign(target){
for(var i=1;i<arguments.length;i++){
var source=arguments[i];
for(var key in source){
target[key]=source[key];
}
}
return target
}
var defaultConverter={
read:function(value){
if(value[0]==='"'){
value=value.slice(1,-1);
}
return value.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)
},
write:function(value){
return encodeURIComponent(value).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
decodeURIComponent
)
}
};
function init(converter,defaultAttributes){
function set(name,value,attributes){
if(typeof document==='undefined'){
return
}
attributes=assign({},defaultAttributes,attributes);
if(typeof attributes.expires==='number'){
attributes.expires=new Date(Date.now()+attributes.expires*864e5);
}
if(attributes.expires){
attributes.expires=attributes.expires.toUTCString();
}
name=encodeURIComponent(name)
.replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent)
.replace(/[()]/g,escape);
var stringifiedAttributes='';
for(var attributeName in attributes){
if(!attributes[attributeName]){
continue
}
stringifiedAttributes+='; '+attributeName;
if(attributes[attributeName]===true){
continue
}
stringifiedAttributes+='='+attributes[attributeName].split(';')[0];
}
return(document.cookie=
name+'='+converter.write(value,name)+stringifiedAttributes)
}
function get(name){
if(typeof document==='undefined'||(arguments.length&&!name)){
return
}
var cookies=document.cookie?document.cookie.split('; '):[];
var jar={};
for(var i=0;i<cookies.length;i++){
var parts=cookies[i].split('=');
var value=parts.slice(1).join('=');
try{
var found=decodeURIComponent(parts[0]);
jar[found]=converter.read(value,found);
if(name===found){
break
}
}catch(e){}
}
return name?jar[name]:jar
}
return Object.create(
{
set,
get,
remove:function(name,attributes){
set(
name,
'',
assign({},attributes,{
expires:-1
})
);
},
withAttributes:function(attributes){
return init(this.converter,assign({},this.attributes,attributes))
},
withConverter:function(converter){
return init(assign({},this.converter,converter),this.attributes)
}
},
{
attributes:{value:Object.freeze(defaultAttributes)},
converter:{value:Object.freeze(converter)}
}
)
}
var api=init(defaultConverter,{path:'/'});
return api;
}));


/* plugins-dist/mediabox/lib/lity/lity.js?1724223514 */

(function(window,factory){
if(typeof define==='function'&&define.amd){
define(['jquery'],function($){
return factory(window,$);
});
}else if(typeof module==='object'&&typeof module.exports==='object'){
module.exports=factory(window,require('jquery'));
}else{
window.lity=factory(window,window.jQuery||window.Zepto);
}
}(typeof window!=="undefined"?window:this,function(window,$){
'use strict';
var document=window.document;
var _win=$(window);
var _deferred=$.Deferred;
var _html=$('html');
var _instances=[];
var _attrAriaHidden='aria-hidden';
var _dataAriaHidden='lity-'+_attrAriaHidden;
var _focusableElementsSelector='a[href],area[href],input:not([disabled]),select:not([disabled]),textarea:not([disabled]),button:not([disabled]),iframe,object,embed,[contenteditable],[tabindex]:not([tabindex^="-"])';
var _defaultOptions={
esc:true,
handler:null,
handlers:{
image:imageHandler,
inline:inlineHandler,
iframe:iframeHandler
},
forceFocusInside:false,
template:'<div class="lity" role="dialog" aria-label="Dialog Window (Press escape to close)" tabindex="-1"><div class="lity-wrap" data-lity-close role="document"><div class="lity-loader" aria-hidden="true">Loading...</div><div class="lity-container"><div class="lity-content"></div><button class="lity-close" type="button" aria-label="Close (Press escape to close)" data-lity-close>&times;</button></div></div></div>'
};
var _imageRegexp=/(^data:image\/)|(\.(png|jpe?g|gif|svg|webp|bmp|ico|tiff?)(\?\S*)?$)/i;
var _transitionEndEvent=(function(){
var el=document.createElement('div');
var transEndEventNames={
WebkitTransition:'webkitTransitionEnd',
MozTransition:'transitionend',
OTransition:'oTransitionEnd otransitionend',
transition:'transitionend'
};
for(var name in transEndEventNames){
if(el.style[name]!==undefined){
return transEndEventNames[name];
}
}
return false;
})();
function transitionEnd(element){
var deferred=_deferred();
if(!_transitionEndEvent||!element.length){
deferred.resolve();
}else{
element.one(_transitionEndEvent,deferred.resolve);
setTimeout(deferred.resolve,500);
}
return deferred.promise();
}
function settings(currSettings,key,value){
if(arguments.length===1){
return $.extend({},currSettings);
}
if(typeof key==='string'){
if(typeof value==='undefined'){
return typeof currSettings[key]==='undefined'
?null
:currSettings[key];
}
currSettings[key]=value;
}else{
$.extend(currSettings,key);
}
return this;
}
function parseQueryParams(params){
var pos=params.indexOf('?');
if(pos>-1){
params=params.substr(pos+1);
}
var pairs=decodeURI(params.split('#')[0]).split('&');
var obj={},p;
for(var i=0,n=pairs.length;i<n;i++){
if(!pairs[i]){
continue;
}
p=pairs[i].split('=');
obj[p[0]]=p[1];
}
return obj;
}
function appendQueryParams(url,params){
if(!params){
return url;
}
if('string'===$.type(params)){
params=parseQueryParams(params);
}
if(url.indexOf('?')>-1){
var split=url.split('?');
url=split.shift();
params=$.extend(
{},
parseQueryParams(split[0]),
params
)
}
return url+'?'+$.param(params);
}
function transferHash(originalUrl,newUrl){
var pos=originalUrl.indexOf('#');
if(-1===pos){
return newUrl;
}
if(pos>0){
originalUrl=originalUrl.substr(pos);
}
return newUrl+originalUrl;
}
function iframe(iframeUrl,instance,queryParams,hashUrl){
instance&&instance.element().addClass('lity-iframe');
if(queryParams){
iframeUrl=appendQueryParams(iframeUrl,queryParams);
}
if(hashUrl){
iframeUrl=transferHash(hashUrl,iframeUrl);
}
return'<div class="lity-iframe-container"><iframe frameborder="0" allowfullscreen allow="autoplay; fullscreen" src="'+iframeUrl+'"/></div>';
}
function error(msg){
return $('<span class="lity-error"></span>').append(msg);
}
function imageHandler(target,instance){
var desc=(instance.opener()&&instance.opener().data('lity-desc'))||'Image with no description';
var img=$('<img src="'+target+'" alt="'+desc+'"/>');
var deferred=_deferred();
var failed=function(){
deferred.reject(error('Failed loading image'));
};
img
.on('load',function(){
if(this.naturalWidth===0){
return failed();
}
deferred.resolve(img);
})
.on('error',failed)
;
return deferred.promise();
}
imageHandler.test=function(target){
return _imageRegexp.test(target);
};
function inlineHandler(target,instance){
var el,placeholder,hasHideClass;
try{
el=$(target);
}catch(e){
return false;
}
if(!el.length){
return false;
}
placeholder=$('<i style="display:none !important"></i>');
hasHideClass=el.hasClass('lity-hide');
instance
.element()
.one('lity:remove',function(){
placeholder
.before(el)
.remove()
;
if(hasHideClass&&!el.closest('.lity-content').length){
el.addClass('lity-hide');
}
})
;
return el
.removeClass('lity-hide')
.after(placeholder)
;
}
function iframeHandler(target,instance){
return iframe(target,instance);
}
function winHeight(){
return document.documentElement.clientHeight
?document.documentElement.clientHeight
:Math.round(_win.height());
}
function keydown(e){
var current=currentInstance();
if(!current){
return;
}
if(e.keyCode===27&&!!current.options('esc')){
current.close();
}
if(e.keyCode===9){
handleTabKey(e,current);
}
}
function handleTabKey(e,instance){
var focusableElements=instance.element().find(_focusableElementsSelector);
var focusedIndex=focusableElements.index(document.activeElement);
if(e.shiftKey&&focusedIndex<=0){
focusableElements.get(focusableElements.length-1).focus();
e.preventDefault();
}else if(!e.shiftKey&&focusedIndex===focusableElements.length-1){
focusableElements.get(0).focus();
e.preventDefault();
}
if(focusedIndex===-1&&instance.options().forceFocusInside){
focusableElements.get(0).focus();
e.preventDefault();
}
}
function resize(){
$.each(_instances,function(i,instance){
instance.resize();
});
}
function registerInstance(instanceToRegister){
if(1===_instances.unshift(instanceToRegister)){
_html.addClass('lity-active');
_win
.on({
resize:resize,
keydown:keydown
})
;
}
$('body > *').not(instanceToRegister.element())
.addClass('lity-hidden')
.each(function(){
var el=$(this);
if(undefined!==el.data(_dataAriaHidden)){
return;
}
el.data(_dataAriaHidden,el.attr(_attrAriaHidden)||null);
})
.attr(_attrAriaHidden,'true')
;
}
function removeInstance(instanceToRemove){
var show;
instanceToRemove
.element()
.attr(_attrAriaHidden,'true')
;
if(1===_instances.length){
_html.removeClass('lity-active');
_win
.off({
resize:resize,
keydown:keydown
})
;
}
_instances=$.grep(_instances,function(instance){
return instanceToRemove!==instance;
});
if(!!_instances.length){
show=_instances[0].element();
}else{
show=$('.lity-hidden');
}
show
.removeClass('lity-hidden')
.each(function(){
var el=$(this),oldAttr=el.data(_dataAriaHidden);
if(!oldAttr){
el.removeAttr(_attrAriaHidden);
}else{
el.attr(_attrAriaHidden,oldAttr);
}
el.removeData(_dataAriaHidden);
})
;
}
function currentInstance(){
if(0===_instances.length){
return null;
}
return _instances[0];
}
function factory(target,instance,handlers,preferredHandler){
var handler='inline',content;
var currentHandlers=$.extend({},handlers);
if(preferredHandler&&currentHandlers[preferredHandler]){
content=currentHandlers[preferredHandler](target,instance);
handler=preferredHandler;
}else{
$.each(['inline','iframe'],function(i,name){
delete currentHandlers[name];
currentHandlers[name]=handlers[name];
});
$.each(currentHandlers,function(name,currentHandler){
if(!currentHandler){
return true;
}
if(
currentHandler.test&&
!currentHandler.test(target,instance)
){
return true;
}
content=currentHandler(target,instance);
if(false!==content){
handler=name;
return false;
}
});
}
return{handler:handler,content:content||''};
}
function Lity(target,options,opener,activeElement){
var self=this;
var result;
var isReady=false;
var isClosed=false;
var element;
var content;
options=$.extend(
{},
_defaultOptions,
options
);
element=$(options.template);
self.element=function(){
return element;
};
self.opener=function(){
return opener;
};
self.content=function(){
return content;
};
self.options=$.proxy(settings,self,options);
self.handlers=$.proxy(settings,self,options.handlers);
self.resize=function(){
if(!isReady||isClosed){
return;
}
content
.css('max-height',winHeight()+'px')
.trigger('lity:resize',[self])
;
};
self.close=function(){
if(isClosed){
return;
}
isClosed=true;
removeInstance(self);
var deferred=_deferred();
if(
activeElement&&
(
document.activeElement===element[0]||
$.contains(element[0],document.activeElement)
)
){
try{
activeElement.focus();
}catch(e){
}
}
var trigerable=(content?content:element);
trigerable.trigger('lity:close',[self]);
element
.removeClass('lity-opened')
.addClass('lity-closed')
;
transitionEnd(trigerable.add(element))
.always(function(){
trigerable.trigger('lity:remove',[self]);
element.remove();
element=undefined;
deferred.resolve();
})
;
return deferred.promise();
};
result=factory(target,self,options.handlers,options.handler);
element
.attr(_attrAriaHidden,'false')
.addClass('lity-loading lity-opened lity-'+result.handler)
.appendTo('body')
.focus()
.on('click','[data-lity-close]',function(e){
if($(e.target).is('[data-lity-close]')){
self.close();
}
})
.trigger('lity:open',[self])
;
registerInstance(self);
$.when(result.content)
.always(ready)
;
function ready(result){
if(isClosed){
return;
}
content=$(result)
.css('max-height',winHeight()+'px')
;
element
.find('.lity-loader')
.each(function(){
var loader=$(this);
transitionEnd(loader)
.always(function(){
loader.remove();
})
;
})
;
element
.removeClass('lity-loading')
.find('.lity-content')
.empty()
.append(content)
;
isReady=true;
content
.trigger('lity:ready',[self])
;
}
}
function lity(target,options,opener){
if(!target.preventDefault){
opener=$(opener);
}else{
target.preventDefault();
opener=$(this);
target=opener.data('lity-target')||opener.attr('href')||opener.attr('src');
}
var instance=new Lity(
target,
$.extend(
{},
opener.data('lity-options')||opener.data('lity'),
options
),
opener,
document.activeElement
);
if(!target.preventDefault){
return instance;
}
}
lity.version='3.0.0-dev';
lity.options=$.proxy(settings,lity,_defaultOptions);
lity.handlers=$.proxy(settings,lity,_defaultOptions.handlers);
lity.current=currentInstance;
lity.iframe=iframe;
$(document).on('click.lity','[data-lity]',lity);
return lity;
}));


/* plugins-dist/mediabox/lity/js/lity.mediabox.js?1724223514 */
;
(function($){
var litySpip={
nameSpace:'mediabox',
config:{
forceFocusInside:true,
},
strings:{
},
callbacks:{
onOpen:[],
onShow:[],
onClose:[]
},
focusedItem:[],
isTransition:false,
adjustHeight:function(instance){
var $content=instance.content();
var $containerHeight=instance.element().find('.lity-container').height();
if($containerHeight){
var h=Math.round($containerHeight)+'px';
$content
.css('max-height',h)
.find('[data-'+litySpip.nameSpace+'-force-max-height]')
.css('max-height',h);
}
},
template:function(cfg,type,groupName,groupPosition,groupLength){
var className='';
if(!!cfg.className){
className=' '+cfg.className;
}
if(cfg.transitionOnOpen){
className+=' lity-transition-on-open-'+cfg.transitionOnOpen;
}
if(!!cfg.noTransition){
className+=' lity-no-transition';
}
if(!!cfg.slideShow){
className+=' lity-slideshow';
}
var styles=[];
var styles_container='';
var styles_content='';
if(cfg.sideBar){
className+=' lity-sidebar lity-sidebar-'+cfg.sideBar;
if(cfg.sideBar==='start'||cfg.sideBar==='end'){
className+=' lity-sidebar-inline';
cfg.height='100vh';
cfg.maxHeight='100vh';
}
if(cfg.sideBar==='top'||cfg.sideBar==='bottom'){
className+=' lity-sidebar-block';
cfg.width='100vw';
cfg.maxWidth='100vw';
}
}
if(cfg.maxWidth){
styles.push("max-width:"+cfg.maxWidth.replace("%","vw"));
}
if(cfg.maxHeight){
styles.push("max-height:"+cfg.maxHeight.replace("%","vh"));
}
if(cfg.width){
styles.push("width:"+cfg.width.replace("%","vw"));
className+=' lity-width-set';
}
if(cfg.height){
styles.push("height:"+cfg.height.replace("%","vh"));
className+=' lity-height-set';
if(cfg.minHeight){
styles.push("min-height:"+cfg.minHeight.replace("%","vh"));
}
}
if(styles.length){
styles_container=' style="'+styles.join(';')+'"';
}
styles=[];
if(cfg.minWidth){
styles.push("min-width:"+cfg.minWidth.replace("%","vw"));
}
if(cfg.minHeight&&!cfg.height){
styles.push("min-height:"+cfg.minHeight.replace("%","vh"));
}
if(styles.length){
styles_content=' style="'+styles.join(';')+'"';
}
var button_next_prev='',
button_start_stop='',
group_info_text='',
group_info='';
if(groupName&&groupLength){
if(groupLength>1){
var newPosition=(groupPosition<=0?groupLength-1:groupPosition-1);
button_next_prev+='<button class="lity-previous" type="button" data-group-name="'+groupName+'" data-group-position="'+newPosition+'" aria-label="'+litySpip.strings.previous+'" data-lity-previous'
+'><b title="'+litySpip.strings.previous+'">❮</b></button>';
newPosition=(groupPosition>=groupLength-1?0:groupPosition+1);
button_next_prev+='<button class="lity-next" type="button" data-group-name="'+groupName+'" data-group-position="'+newPosition+'"  aria-label="'+litySpip.strings.next+'" data-lity-next'
+'><b title="'+litySpip.strings.next+'">❯</b></button>';
}
group_info_text=" "+litySpip.strings.current;
group_info_text=group_info_text.replace('{current}',(groupPosition+1)+'');
group_info_text=group_info_text.replace('{total}',groupLength+'');
button_start_stop+='<button class="lity-start-stop" type="button" data-lity-stop-start>'
+'<b class="lity-start" aria-label="'+litySpip.strings.slideshowStart+'" title="'+litySpip.strings.slideshowStart+'">▶</b>'
+'<b class="lity-stop" aria-label="'+litySpip.strings.slideshowStop+'" title="'+litySpip.strings.slideshowStop+'">□</b>'
+'</button>';
group_info='<div class="lity-group-caption">'
+'<span class="lity-group-start-stop">'+button_start_stop+'</span>'
+'<span class="lity-group-current">'+group_info_text+'</span>'
+'<span class="lity-group-next-prev">'+button_next_prev+'</span>'
+'<span class="lity-group-progress-bar"><span class="lity-group-progress-bar-status" style="width:0"></span></span>'
+'</div>';
}
var close_button_aria_label=litySpip.strings.close+' ('+litySpip.strings.press_escape+')';
var dialog_title=(type==='image'?litySpip.strings.dialog_title_med:litySpip.strings.dialog_title_def);
dialog_title+=group_info_text+' ('+litySpip.strings.press_escape+')';
var t=
'<dialog class="box_mediabox box_modalbox lity'+className+'" role="dialog" aria-label="'+dialog_title+'" tabindex="-1">'
+'<div class="lity-wrap"'+(cfg.overlayClose===false?'':' data-lity-close')+' role="document">'
+'<div class="lity-loader" aria-hidden="true" aria-label="'+litySpip.strings.loading+'"><span class="box-loading"></span></div>'
+'<div class="lity-container"'+styles_container+'>'
+'<button class="lity-close" type="button" aria-label="'+close_button_aria_label+'" data-lity-close><b data-lity-close title="'+litySpip.strings.close+'">&times;</b></button>'
+'<div class="lity-content"'+styles_content+'></div>'
+group_info
+'</div>'
+'</div>'
+'</dialog>';
return t;
},
failHandler:function(target,instance){
return'<div class="error lity-error">Failed loading content</div>';
},
ajaxHandler:function(target,instance){
var selector,
off=target.indexOf(" ");
if(off>-1){
selector=target.slice(off);
selector=selector.match(/[^\x20\t\r\n\f]+/g)||[];
selector=selector.join(" ");
target=target.slice(0,off);
}
if(jQuery.spip.preloaded_urls[target]){
var content=jQuery.spip.preloaded_urls[target];
if(selector){
content=$("<div>").append($.parseHTML(content)).find(selector);
}
return $('<div class="lity-content-inner"></div>').append(content);
}
var _deferred=$.Deferred;
var deferred=_deferred();
var failed=function(){
deferred.reject($('<span class="error lity-error"></span>').append('Failed loading ajax'));
};
$.get(target)
.done(function(content){
jQuery.spip.preloaded_urls[target]=content;
if(selector){
content=$("<div>").append($.parseHTML(content)).find(selector);
}
deferred.resolve($('<div class="lity-content-inner"></div>').append(content));
})
.fail(failed);
return deferred.promise();
},
imageBuildContent:function(img,desc,longdesc,defaultCaptionClass){
img.attr('alt',desc?desc:'');
desc=(longdesc?longdesc:desc);
if(desc){
defaultCaptionClass=(defaultCaptionClass?defaultCaptionClass:'expanded');
var id='lity-image-caption-'+Date.now().toString(36)+Math.random().toString(36).substr(2);
img.attr('aria-describedby',id);
img=$('<figure class="lity-image-figure"></figure>').append(img).append('<figcaption id="'+id+'" class="lity-image-caption '+defaultCaptionClass+'"><div class="lity-image-caption-text">'+desc+'</div></figcaption>');
}
else{
img=$('<figure class="lity-image-figure"></figure>').append(img);
}
return img;
},
imageHandler:function(target,instance){
var _deferred=$.Deferred;
var desc='';
var longdesc='';
var defaultCaptionClass=(instance.options().defaultCaptionState==='min'?'min':'expanded');
var opener=instance.opener();
if(opener){
desc=opener.attr('title')||$('img[alt]',opener).eq(0).attr('alt')||'';
var by=opener.attr('aria-describedby')||$('img[aria-describedby]',opener).eq(0).attr('aria-describedby')||'';
if(by){
longdesc=$('#'+by).html();
longdesc=longdesc.trim();
}
if(!desc){
desc=desc||instance.opener().attr('aria-label')||'';
}
desc=desc.trim();
}
var img;
var cache=opener.data('lity-image-cache')||{};
if(cache[target]){
img=cache[target];
img=litySpip.imageBuildContent(img,desc,longdesc,defaultCaptionClass);
return img;
}
img=$('<img src="'+target+'" class="lity-image-img" data-'+litySpip.nameSpace+'-force-max-height />');
var deferred=_deferred();
var failed=function(){
deferred.reject($('<span class="error lity-error"></span>').append('Failed loading image'));
};
img
.on('load',function(){
if(this.naturalWidth===0){
img.attr("style","width:25vw;");
}
cache[target]=img;
opener.data('lity-image-cache',cache);
deferred.resolve(litySpip.imageBuildContent(img,desc,longdesc,defaultCaptionClass));
})
.on('error',failed)
;
return deferred.promise();
},
groupElements:function(groupName){
return $('.lity-enabled[data-'+litySpip.nameSpace+'-group'+'='+groupName+']');
},
eventSet:{},
setEvents:function(what){
if(!litySpip.eventSet[what]){
switch(what){
case'opener':
$(document).on('click','.lity-enabled',litySpip.onClickOpener);
break;
case'listener':
$(document).on('click','.lity-previous,.lity-next',litySpip.onPrevNext);
$(document).on('click','.lity-start-stop',litySpip.onSlideShowToggle);
$(window).on('keyup',litySpip.onKeyUp);
$(document).on('click','.lity-image-caption',litySpip.onCaptionToggle);
break;
}
litySpip.eventSet[what]=true;
}
},
onKeyUp:function(event){
var c={37:"previous",39:"next"}[event.keyCode];
if(c){
var current=lity.current();
if(current){
jQuery('.lity-'+c,current.element()).trigger('click');
}
}
},
onCaptionToggle:function(event){
var $caption=$(this);
$caption.toggleClass('min expanded');
},
openerFromPrevNext($button){
var groupName=$button.data('group-name');
var groupPosition=$button.data('group-position');
return litySpip.groupElements(groupName).eq(groupPosition);
},
onPrevNext:function(event){
var $button=$(this);
var newEl=litySpip.openerFromPrevNext($button);
if(newEl){
var element=lity.current().element();
litySpip.isTransition={oldClosed:false,newOpened:true};
element.addClass('lity-no-transition').css('visibility','hidden');
litySpip.slideshowStop(element);
var options={transitionOnOpen:$button.is('.lity-next')?'slide-from-right':'slide-from-left'};
if(element.is('.lity-slideshow')){
options.slideShow=true;
}
lity.current().close();
litySpip.elementOpener(newEl,options);
}
},
slideshowStart:function(element){
var $progress=element.find('.lity-group-progress-bar-status');
$progress.attr('style','');
$progress.css('width','100%');
var delay=litySpip.config.slideshowSpeed;
setTimeout(function(){
$progress.css('transition','width '+((delay-200)/1000)+'s linear');
$progress.css('width','0');
},200);
timer=setTimeout(function(){element.find('.lity-next').trigger('click')},delay);
element.data('lity-timer',timer);
$('.lity-start',element).attr('aria-hidden','true');
$('.lity-stop',element).attr('aria-hidden','false');
jQuery('.lity-start-stop',element).focus();
},
slideshowStop:function(element){
timer=element.data('lity-timer');
if(timer){
clearTimeout(timer);
}
},
onSlideShowToggle:function(event){
var $button=$(this);
var element=$button.closest('.lity');
var slideShowState=(element.is('.lity-slideshow')?true:false);
var timer;
if(!slideShowState){
litySpip.slideshowStart(element);
}
else{
litySpip.slideshowStop(element);
$('.lity-start',element).attr('aria-hidden','false');
$('.lity-stop',element).attr('aria-hidden','true');
}
element.toggleClass('lity-slideshow');
},
onClickOpener:function(event){
event.preventDefault();
var opener=$(this);
litySpip.elementOpener(opener);
},
elementOpener:function(opener,options){
var cfg=opener.data('mediabox-options');
if(options){
cfg=$.extend({},cfg,options);
}
var target=opener.data('href-popin')||opener.data('href')||opener.attr('href')||opener.attr('src');
litySpip.lityOpener(target,cfg,opener.get(0));
},
lityOpener:function(target,cfg,opener){
litySpip.setEvents('listener');
if(!litySpip.isTransition){
litySpip.callbacks.onOpen.push(cfg.onOpen||false);
litySpip.callbacks.onShow.push(cfg.onShow||false);
litySpip.callbacks.onClose.push(cfg.onClose||false);
litySpip.focusedItem.push($(document.activeElement));
}
var type=cfg.type||'';
if(!type&&opener){
type=$(opener).data(litySpip.nameSpace+'-type')||'';
}
var handlers=lity.handlers();
if(type==='ajax'){
handlers.ajax=litySpip.ajaxHandler;
}
handlers.image=litySpip.imageHandler;
if(type==='inline'){
var el=[];
try{
el=$(target);
}catch(e){
el=[];
}
if(!el.length){
handlers.inline=litySpip.failHandler;
}
}
cfg=$.extend({handlers:handlers},cfg);
if(type&&['image','inline','ajax','iframe'].indexOf(type)!==-1){
cfg.handler=type;
}
if(opener&&typeof($.parseMediaboxOptions)!=="undefined"){
cfg=$.extend(cfg,$.parseMediaboxOptions(litySpip.nameSpace,opener));
}
if(!!cfg.preloadOnly){
litySpip.lityPreLoader(target,cfg,opener);
}
else{
var groupPosition=0;
var groupLength=0;
if(opener){
var groupName=cfg.rel||(opener?$(opener).data(litySpip.nameSpace+'-group'):'');
if(groupName){
var elements=litySpip.groupElements(groupName);
groupPosition=elements.index($(opener));
groupLength=elements.length;
}
}
cfg=$.extend({template:litySpip.template(cfg,type,groupName,groupPosition,groupLength)},cfg);
if(cfg.samePopin){
var l=lity.current();
if(l){
l.close();
}
}
lity(target,cfg,opener);
}
},
lityPreLoader:function(target,cfg,opener){
if(cfg.handler&&cfg.handlers[cfg.handler]){
if(cfg.handler==='image'||cfg.handler==='ajax'){
var instance={
opener:function(){return $(opener);},
options:function(){return cfg}
};
var content=cfg.handlers[cfg.handler](target,instance);
}
}
}
}
jQuery.fn.extend({
mediabox:function(options){
var cfg=$.extend({},litySpip.config,options);
if(this===jQuery.fn){
var href=cfg.href||"";
litySpip.lityOpener(href,cfg,null);
return this;
}else{
if(cfg.rel){
this.attr('data-'+litySpip.nameSpace+'-group',cfg.rel);
}
else{
this.each(function(){
var rel=$(this).attr('rel');
if(rel){
$(this).attr('data-'+litySpip.nameSpace+'-group',rel);
}
});
}
litySpip.setEvents('opener');
this
.data('mediabox-options',cfg)
.addClass('lity-enabled');
(cfg.preload?this:this.filter('[data-'+litySpip.nameSpace+'-preload]')).each(function(){
litySpip.elementOpener($(this),{preloadOnly:true});
});
return this;
}
},
mediaboxClose:function(){
var $current=lity.current();
if($current){
$current.close();
return true;
}
return false;
}
});
var initConfig=function(){
var b=typeof(mediabox_settings)=='object'?mediabox_settings:{};
litySpip.nameSpace=b.ns?b.ns:'mediabox';
litySpip.strings.slideshowStart=b.str_ssStart;
litySpip.strings.slideshowStop=b.str_ssStop;
litySpip.strings.current=b.str_cur;
litySpip.strings.previous=b.str_prev;
litySpip.strings.next=b.str_next;
litySpip.strings.close=b.str_close;
litySpip.strings.loading=b.str_loading;
litySpip.strings.press_escape=b.str_petc;
litySpip.strings.dialog_title_def=b.str_dialTitDef;
litySpip.strings.dialog_title_med=b.str_dialTitMed;
litySpip.config.slideshowSpeed=(b.lity.slideshow_speed?b.lity.slideshow_speed:5000);
litySpip.config.defaultCaptionState=(b.lity.defaultCaptionState?b.lity.defaultCaptionState:'expanded');
var styles={
'container':'',
'content':'',
};
if(b.lity.minWidth){
styles.content+="min-width:"+b.lity.minWidth.replace('%','vw')+';';
}
if(b.lity.maxWidth){
styles.container+="max-width:"+b.lity.maxWidth.replace('%','vw')+';';
}
if(b.lity.minHeight){
styles.content+="min-height:"+b.lity.minHeight.replace('%','vh')+';';
}
if(b.lity.maxHeight){
styles.container+="max-height:"+b.lity.maxHeight.replace('%','vh')+';';
}
var insert='';
for(let key in styles){
if(styles[key]){
insert+='.box_mediabox .lity-'+key+'{'+styles[key]+'}';
}
}
if(b.lity.opacite){
insert+='.box_mediabox:before{opacity:'+b.lity.opacite+'}';
}
if(insert){
$('head').append($('<style type="text/css">'+insert+'</style>'));
}
$(document).on('lity:open',function(event,instance){
if(!instance.element().is('.lity-slideshow')){
jQuery('.lity-close',instance.element()).focus();
}
if(!litySpip.isTransition){
var callback=litySpip.callbacks.onOpen.pop();
if(callback){
callback(event,instance);
}
}
});
$(document).on('lity:ready',function(event,instance){
litySpip.adjustHeight(instance);
if(jQuery.spip){
jQuery.spip.triggerAjaxLoad(instance.element().get(0))
}
if(instance.element().addClass('lity-ready').is('.lity-slideshow')){
litySpip.slideshowStart(instance.element());
}
if(!litySpip.isTransition){
var callback=litySpip.callbacks.onShow.pop();
if(callback){
callback(event,instance);
}
}
else{
litySpip.isTransition.newOpened=true;
if(litySpip.isTransition.oldClosed){
litySpip.isTransition=false;
}
instance.content().trigger('lity:resize',[instance]);
}
var $next=instance.element().find('.lity-next');
if($next.length){
$next=litySpip.openerFromPrevNext($next);
if($next){
litySpip.elementOpener($next,{preloadOnly:true});
}
}
});
$(document).on('lity:close',function(event,instance){
if(!litySpip.isTransition){
if(litySpip.callbacks.onShow.length>litySpip.callbacks.onOpen.length){
litySpip.callbacks.onShow.pop();
}
var callback=litySpip.callbacks.onClose.pop();
if(callback){
callback(event,instance);
}
}
});
$(document).on('lity:remove',function(event,instance){
if(!litySpip.isTransition){
var focused=litySpip.focusedItem.pop();
if(focused){
try{
focused.focus();
}catch(e){
}
}
}
else{
litySpip.isTransition.oldClosed=true;
if(litySpip.isTransition.newOpened){
litySpip.isTransition=false;
}
}
});
$(document).on('lity:resize',function(event,instance){
litySpip.adjustHeight(instance);
});
}
initConfig();
})(jQuery);


/* plugins-dist/mediabox/javascript/spip.mediabox.js?1724223514 */
(function($){
$.mediabox
=function(options){
if(typeof(mediabox_autodetect_href)=='function'
&&options.href
&&!options.type){
options.type=mediabox_autodetect_href(options.href);
}
$.fn.mediabox(options);
};
$.modalboxload=$.modalbox=function(href,options){$.mediabox($.extend({href:href,overlayClose:true},options));};
$.modalboxclose=$.mediaboxClose=$.fn.mediaboxClose;
$.parseMediaboxOptions=function(nameSpace,opener){
var options={};
var data2options={
"width":"width",
"height":"height",
"min-width":"minWidth",
"min-height":"minHeight",
"max-width":"maxWidth",
"max-height":"maxHeight",
"caption-state":"defaultCaptionState",
"sidebar":"sideBar",
"class":"className"
};
var v;
for(var o in data2options){
v=($(opener).data(nameSpace+'-'+o)||'');
if(v){
options[data2options[o]]=v;
}
}
if(!options.length){
var eltclass=$(opener).prop('class');
if(eltclass){
if(eltclass.indexOf("boxWidth-")!==-1){
var w=eltclass.match(/boxWidth-([^\s'">]*)/);
w=w[1].replace(/pc/,'%');
options["width"]=w;
}
if(eltclass.indexOf("boxHeight-")!==-1){
var h=eltclass.match(/boxHeight-([^\s'">]*)/);
h=h[1].replace(/pc/,'%');
options["height"]=h;
}
if(eltclass.indexOf("boxIframe")!==-1){
options["type"]='iframe';
}
if(eltclass.indexOf("boxInline")!==-1){
options["type"]='inline';
}
}
}
data2options={"same-popin":"samePopin","type":"type"};
for(var o in data2options){
v=($(opener).data(nameSpace+'-'+o)||'');
if(v){
options[data2options[o]]=v;
}
}
return options;
}
})(jQuery);
var mediaboxInit=function(){
var b=$.extend({},mediabox_settings);
if(b.ns!=='box'){
$('[data-box-type]').each(function(i,e){
var $e=$(e);
var d=$e.attr('data-box-type');
$e.removeAttr('data-box-type').attr('data-'+b.ns+'-type',d);
});
}
if(b.auto_detect){
var $popins=$('[data-href-popin],[data-'+b.ns+'-type]'+(window.var_zajax_content?',[data-var_zajax],a.popin':''))
.add(b.sel_c)
.not(ajaxbloc_selecteur,'.ajaxbloc','.hasbox');
$popins.each(function(i,e){
var $e=$(e);
var url=$e.attr('href')||"./";
var popin=$e.attr('data-href-popin');
var type=$e.attr('data-'+b.ns+'-type')||'';
if(!popin){
var env=$e.attr('data-ajax-env');
if(env){
url=parametre_url(parametre_url(url,'var_ajax',1),'var_ajax_env',env)
$e.removeAttr('data-ajax-env');
type='ajax';
}
var za=$e.attr('data-var_zajax');
if(za!==undefined||$e.hasClass('popin')){
if(za==='content'&&window.var_zajax_content){
za=window.var_zajax_content;
}
url=parametre_url(url,'var_zajax',za||window.var_zajax_content);
$e.removeAttr('data-var_zajax');
type='ajax';
}
if((url!==$e.attr('href')||(!popin&&type))&&url!=="./"){
$e.attr('data-href-popin',url);
}
}
url=popin||url;
if(!type){
var attrs=$e.data();
var types=['inline','html','iframe','image','ajax'];
types.some(function(e){
var k=b.ns+e.charAt(0).toUpperCase()+e.slice(1);
if(attrs[k]){
type=e;
return true;
}
});
}
if(!type&&typeof(mediabox_autodetect_href)=='function'){
type=mediabox_autodetect_href(url);
}
if(!type||$e.hasClass('boxIframe')){
type="iframe";
$e.removeClass('boxIframe');
}
$e.attr('data-'+b.ns+'-type',type);
});
}
if(b.sel_g){
var $items=$();
$(b.sel_g).each(function(i,e){
$items=$items.add(
$(this).is('a[type^=\'image\']')
?$(this)
:$(this).find('a[type^=\'image\']')
);
});
$items
.not('.hasbox')
.removeAttr('onclick')
.mediabox({rel:'galerieauto',slideshow:true,slideshowAuto:false,type:'image'})
.addClass('hasbox');
}
if(b.tt_img){
$('a[type^="image"],a[href$=".png"],a[href$=".jpg"],a[href$=".jpeg"],a[href$=".svg"],a[href$=".webp"]')
.not('.hasbox')
.removeAttr('onclick')
.mediabox({type:'image'})
.addClass('hasbox')
;
}
$(b.sel_c)
.not('.hasbox')
.mediabox()
.addClass('hasbox')
;
$('[data-href-popin]',this)
.not('.hasbox')
.click(function(){if($.modalbox)$.modalbox($(this).attr('data-href-popin'),$.parseMediaboxOptions(b.ns,this));return false;})
.addClass('hasbox');
};
(function($){
if(typeof onAjaxLoad=='function')onAjaxLoad(mediaboxInit);
$(mediaboxInit);
})(jQuery);
function mediabox_autodetect_href(href,options){
options=$.extend({
breakMode:true,
tests:{
image:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,
inline:/^[#.]\w/,
html:/^\s*<[\w!][^<]*>/,
ajax:/((\?|&(amp;)?)var_z?ajax=|cache-ajaxload\/)/i,
iframe:/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i,
},
},options);
var matched=options.breakMode?false:[];
$.each(options.tests,function(type,regex){
if(href.match(regex)&&!href.match('/File:[^/]+(\\#|[?]|$)')){
if(options.breakMode){
matched=type;
return false;
}else{
matched.push(type);
}
}
});
return matched;
};


/* plugins/auto/mathjax_latex/v1.2.0/js/refresh_math_ml.js */

$(document).ready(function(){
var refresh_math_ml=function(){
if(window.MathJax){
MathJax.Hub.Queue(
["Typeset",MathJax.Hub]
);
}
}
if(typeof onAjaxLoad=='function')
onAjaxLoad(refresh_math_ml);
if(window.jQuery)jQuery(document).ready(function(){
refresh_math_ml(document);
});
});


/* sites/philosophie.ac-amiens.fr/local/cache-js/jsdyn-jquery_cookiebar_js-45feef33.js?1724230064 */

(function($){
$.cookieBar=function(options,val){
if(options=='cookies'){
var doReturn='cookies';
}else if(options=='set'){
var doReturn='set';
}else{
var doReturn=false;
}
var defaults={
message:"<span class=\"cb-msg\">En poursuivant votre navigation, vous acceptez le d\u00e9p\u00f4t de cookies destin\u00e9s \u00e0 mesurer la fr\u00e9quentation du site ainsi que vous proposer des vid\u00e9os, des boutons de partage, des remont\u00e9es de contenus de plateformes sociales et des contenus anim\u00e9s et interactifs.<\/span>",
acceptButton:true,
acceptText:'J’accepte',
declineButton:false,
declineText:'Désactiver les cookies',
policyButton:true,
policyText:'Désactiver les cookies',
policyURL:'http://www.ac-amiens.fr/donnees-personnelles-et-cookies.html#a_propos_des_cookies',
autoEnable:true,
acceptOnContinue:false,
expireDays:365,
forceShow:false,
effect:'fade',
element:'body',
append:false,
fixed:true,
bottom:true,
zindex:'999',
redirect:String(window.location.href),
domain:String(window.location.hostname),
referrer:String(document.referrer)
};
var options=$.extend(defaults,options);
var expireDate=new Date();
expireDate.setTime(expireDate.getTime()+(options.expireDays*24*60*60*1000));
expireDate=expireDate.toGMTString();
var cookieEntry='cb-enabled={value}; expires='+expireDate+'; path=/';
var i,cookieValue='',aCookie,aCookies=document.cookie.split('; ');
for(i=0;i<aCookies.length;i++){
aCookie=aCookies[i].split('=');
if(aCookie[0]=='cb-enabled'){
cookieValue=aCookie[1];
}
}
if(cookieValue==''&&options.autoEnable){
cookieValue='enabled';
document.cookie=cookieEntry.replace('{value}','enabled');
}
if(options.acceptOnContinue){
if(options.referrer.indexOf(options.domain)>=0&&String(window.location.href).indexOf(options.policyURL)==-1&&doReturn!='cookies'&&doReturn!='set'&&cookieValue!='accepted'&&cookieValue!='declined'){
doReturn='set';
val='accepted';
}
}
if(doReturn=='cookies'){
if(cookieValue=='enabled'||cookieValue=='accepted'){
return true;
}else{
return false;
}
}else if(doReturn=='set'&&(val=='accepted'||val=='declined')){
document.cookie=cookieEntry.replace('{value}',val);
if(val=='accepted'){
return true;
}else{
return false;
}
}else{
var message=options.message.replace('{policy_url}',options.policyURL);
if(options.acceptButton){
var acceptButton='<a href="" class="cb-enable">'+options.acceptText+'</a>';
}else{
var acceptButton='';
}
if(options.declineButton){
var declineButton='<a href="" class="cb-disable">'+options.declineText+'</a>';
}else{
var declineButton='';
}
if(options.policyButton&&options.policyURL){
var policyButton='<a href="'+options.policyURL+'" class="cb-policy">'+options.policyText+'</a>';
}else{
var policyButton='';
}
if(options.fixed){
if(options.bottom){
var fixed=' class="fixed bottom"';
}else{
var fixed=' class="fixed"';
}
}else{
var fixed='';
}
if(options.zindex!=''){
var zindex=' style="z-index:'+options.zindex+';"';
}else{
var zindex='';
}
if(options.forceShow||cookieValue=='enabled'||cookieValue==''){
if(options.append){
$(options.element).append('<div id="cookie-bar"'+fixed+zindex+'><p>'+message+acceptButton+declineButton+policyButton+'</p></div>');
}else{
$(options.element).prepend('<div id="cookie-bar"'+fixed+zindex+'><p>'+message+acceptButton+declineButton+policyButton+'</p></div>');
}
}
$('#cookie-bar .cb-enable').click(function(){
document.cookie=cookieEntry.replace('{value}','accepted');
if(cookieValue!='enabled'&&cookieValue!='accepted'){
window.location=options.currentLocation;
}else{
if(options.effect=='slide'){
$('#cookie-bar').slideUp(300,function(){$('#cookie-bar').remove();});
}else if(options.effect=='fade'){
$('#cookie-bar').fadeOut(300,function(){$('#cookie-bar').remove();});
}else{
$('#cookie-bar').hide(0,function(){$('#cookie-bar').remove();});
}
return false;
}
});
$('#cookie-bar .cb-disable').click(function(){
var deleteDate=new Date();
deleteDate.setTime(deleteDate.getTime()-(864000000));
deleteDate=deleteDate.toGMTString();
aCookies=document.cookie.split('; ');
for(i=0;i<aCookies.length;i++){
aCookie=aCookies[i].split('=');
if(aCookie[0].indexOf('_')>=0){
document.cookie=aCookie[0]+'=0; expires='+deleteDate+'; domain='+options.domain.replace('www','')+'; path=/';
}else{
document.cookie=aCookie[0]+'=0; expires='+deleteDate+'; path=/';
}
}
document.cookie=cookieEntry.replace('{value}','declined');
if(cookieValue=='enabled'&&cookieValue!='accepted'){
window.location=options.currentLocation;
}else{
if(options.effect=='slide'){
$('#cookie-bar').slideUp(300,function(){$('#cookie-bar').remove();});
}else if(options.effect=='fade'){
$('#cookie-bar').fadeOut(300,function(){$('#cookie-bar').remove();});
}else{
$('#cookie-bar').hide(0,function(){$('#cookie-bar').remove();});
}
return false;
}
});
}
};
})(jQuery);


/* plugins/auto/cookiebar/v1.3.0/js/jquery.cookiebar.call.js?1720680816 */

(function($){
$(document).ready(function(){
$.cookieBar();
});
})(jQuery);


/* sites/philosophie.ac-amiens.fr/local/couteau-suisse/header.js */
var cs_prive=window.location.pathname.match(/\/ecrire\/$/)!=null;
jQuery.fn.cs_todo=function(){return this.not('.cs_done').addClass('cs_done');};
var cs_verif_email=1;
var cs_verif_nom=1;
var cs_verif_deux=0;
var sommaire_sel='div.cs_sommaire_titre_avec_fond, div.cs_sommaire_titre_sans_fond';
function cs_sommaire_init(){
jQuery(sommaire_sel,this)
.cs_todo()
.click(function(){
jQuery(this).toggleClass('cs_sommaire_replie')
.next().toggleClass('cs_sommaire_invisible')
return false;
});
}
function cs_sommaire_cookie(){
if(typeof jQuery.cookie!='function')return;
var replie=jQuery.cookie('cs_sommaire');
jQuery.cookie('cs_sommaire',null);
if(Number(replie))
jQuery(sommaire_sel).eq(0).addClass('cs_sommaire_replie')
.next().toggleClass('cs_sommaire_invisible');
jQuery(window).bind('unload',function(){
jQuery.cookie('cs_sommaire',
Number(jQuery(sommaire_sel).eq(0).is('.cs_sommaire_replie'))
);
});
}
var gloss_el=null;
var gloss_dt=null;
var gloss_dd=null;
var gloss_dl=null;
function glossaire_init(){
if(jQuery('span.gl_js',this).length){
if(!jQuery('#glossOverDiv').length){
jQuery('body').append('<div id="glossOverDiv" style="position:absolute; display:none; visibility: hidden;"><span class="gl_dl"><span class="gl_dt">TITRE</span><span class="gl_dd">Definition</span></span></div>');
gloss_el=document.getElementById('glossOverDiv');
gloss_dl=gloss_el.firstChild;
gloss_dt=gloss_dl.firstChild;
gloss_dd=gloss_dl.lastChild;
}
jQuery('span.gl_mot',this).cs_todo().hover(
function(e){
$this=jQuery(this);
if(this.firstChild.className=="spip_surligne"){
this.className="gl_mot spip_surligne";
this.innerHTML=this.firstChild.innerHTML;
}
gloss_dt.innerHTML=$this.parent().children('.gl_js')[0].title;
gloss_dd.innerHTML=$this.parent().children('.gl_jst')[0].title;
reg=$this.css('font-size').match(/^\d\d?(?:\.\d+)?px/);
if(reg)gloss_el.style.fontSize=reg[0];
jQuery(gloss_el)
.css('top',e.pageY.toString()+"px")
.css('left',e.pageX.toString()+"px")
.css('font-family',jQuery(this).css('font-family'));
gloss_el.style.display='block';
gloss_el.style.visibility='visible';
if(typeof jQuery.fn.offset=="function"){
if(1){
var $glossOverDiv=jQuery('#glossOverDiv');
var $gloss_dl=jQuery(gloss_dl);
positionBy='auto';
ombre=0;
decalX=2;
width=180;
height='auto';
var glossHeight,wHeight;
var linkHeight=this.offsetHeight;
var defHeight=isNaN(parseInt(height,10))?'auto':(/\D/g).test(height)?height:height+'px';
var sTop,linkTop,posY,mouseY,baseLine;
sTop=jQuery(document).scrollTop();
var glossWidth=width+ombre;
var linkWidth=this.offsetWidth;
var linkLeft,posX,mouseX,winWidth;
winWidth=jQuery(window).width();
linkTop=posY=$this.offset().top;
linkLeft=$this.offset().left;
mouseX=e.pageX;
mouseY=e.pageY;
$glossOverDiv.css({margin:'0px'});$gloss_dl.css({margin:'0px'});
posX=Math.max(linkLeft-(glossWidth-linkWidth)/2,0);
if(positionBy=='dessous'||positionBy=='dessus'){
$glossOverDiv.css({left:posX+'px'});
}else{
posX2=(linkWidth>linkLeft&&linkLeft>glossWidth)||(linkLeft+linkWidth+glossWidth+decalX>winWidth)
?linkLeft-glossWidth-decalX
:linkWidth+linkLeft+decalX;
if(positionBy=='mouse'||linkWidth+glossWidth>winWidth){
posX=Math.max(mouseX-(glossWidth-linkWidth)/2,0);
}
var pY=e.pageY;
$glossOverDiv.css({left:(posX>0&&positionBy!='dessus')?posX:(mouseX+(glossWidth/2)>winWidth)?winWidth/2-glossWidth/2:Math.max(mouseX-(glossWidth/2),0)});
}
wHeight=jQuery(window).height();
$glossOverDiv.css({overflow:defHeight=='auto'?'visible':'auto',height:defHeight});
glossHeight=defHeight=='auto'?Math.max($gloss_dl.outerHeight(),$gloss_dl.height()):parseInt(defHeight,10);
glossHeight+=ombre;
tipY=posY;
baseLine=sTop+wHeight;
if(positionBy=='dessous')tipY=posY+linkHeight+2;
else if(positionBy=='dessus')tipY=posY-glossHeight-2;
else if(posX<mouseX&&Math.max(posX,0)+glossWidth>mouseX){
if(posY+glossHeight>baseLine&&mouseY-sTop>glossHeight){
tipY=posY-glossHeight-2;
}else{
tipY=posY+linkHeight+2;
}
}else if(posY+glossHeight>baseLine){
tipY=(glossHeight>=wHeight)?sTop:baseLine-glossHeight;
}else if($this.css('display')=='block'||positionBy=='mouse'){
tipY=pY;
}else{
tipY=posY;
}
$glossOverDiv.css({top:tipY+'px'});
}
}
gloss_el.style.visibility='visible';
},
function(e){
gloss_el.style.display='none';
gloss_el.style.visibility='hidden';
}
);
if(typeof jQuery.fn.offset=="function"){
jQuery('a.cs_glossaire').focus(
function(){
legl_mot=this.firstChild;
gloss_dt.innerHTML=jQuery(this).children('.gl_js')[0].title;
gloss_dd.innerHTML=jQuery(this).children('.gl_jst')[0].title;
reg=jQuery(this.firstChild).css('font-size').match(/^\d\d?(?:\.\d+)?px/);
if(reg)gloss_el.style.fontSize=reg[0];
var result=jQuery(this).offset({scroll:false});
jQuery(gloss_el)
.css('top',result.top+"px")
.css('left',result.left+"px")
.css('font-family',jQuery(this.firstChild).css('font-family'));
gloss_el.style.display='block';
gloss_el.style.visibility='visible';
}
);
jQuery('a.cs_glossaire').blur(
function(){
gloss_el.style.display='none';
gloss_el.style.visibility='hidden';
}
);
}
}
}
function lancerlien(a,b){return'ma'+'ilto'+':'+a.replace(new RegExp(b,'g'),'@');}
function cs_auteur_forum(){
var t=" (obligatoire)";
if(cs_verif_deux){
jQuery('label[for=session_nom]').cs_todo().append("<br /><i>Merci de spécifier votre nom ou votre email !</i>");
cs_verif_nom=cs_verif_email=0;
}else{
if(cs_verif_nom)jQuery('label[for=session_nom]').cs_todo().append(t);
if(cs_verif_email)jQuery('label[for=session_email]').cs_todo().append(t);
}
var sel=jQuery('fieldset.previsu',this);
if(!sel.length)return;
var form=sel.parents('form').eq(0);
if(!form.length)return;
var auteur=jQuery('#session_nom',this);
if(!auteur.length)auteur=jQuery('#auteur',this);
var email=jQuery('#session_email',this);
if(!email.length)email=jQuery('#email_auteur',this);
if(auteur.length||email.length)
form.cs_todo().bind('submit',function(event){
var alert_nom=auteur.length&&!auteur.val().length;
var alert_email=email.length&&!email.val().length;
var alert_deux=cs_verif_deux&&alert_nom&&alert_email;
if(!cs_verif_deux){
alert_nom=alert_nom&&cs_verif_nom;
alert_email=alert_email&&cs_verif_email;
}else if(!alert_deux)
alert_nom=alert_email=false;
auteur.css('background-color','').css('border','');
email.css('background-color','').css('border','');
if(alert_email){
email.focus();
email.css('background-color','#FCC').css('border','solid #C30');
}
if(alert_nom){
auteur.focus();
auteur.css('background-color','#FCC').css('border','solid #C30');
}
if(alert_deux){
alert("Merci de spécifier votre nom ou votre email !");
return false;
}
if(alert_nom){
alert("Merci de spécifier votre nom !");
return false;
}
if(alert_email){
alert("Merci de spécifier votre email !");
return false;
}
return true;
});
}
var cs_init=function(){
cs_auteur_forum.apply(this);
cs_sommaire_init.apply(this);
if(!cs_prive)jQuery("a.spip_out,a.spip_url,a.spip_glossaire",this).attr("target","_blank");
glossaire_init.apply(this);
jQuery('span.mcrypt',this).attr('class','cryptOK').html('&#6'+'4;');
jQuery("a["+cs_sel_jQuery+"title*='..']",this).each(function(){
this.title=this.title.replace(/\.\..t\.\./g,'[@]');
});
}
if(typeof onAjaxLoad=='function')onAjaxLoad(cs_init);
if(window.jQuery){
var cs_sel_jQuery='';
var cs_CookiePlugin="prive/javascript/js.cookie.js";
jQuery(document).ready(function(){
if(jQuery("div.cs_sommaire").length){
jQuery("div.decoupe_haut").css("display","none");
if(cs_CookiePlugin)jQuery.getScript(cs_CookiePlugin,cs_sommaire_cookie);
}
cs_init.apply(document);
});
}


/* squelettes/js/bootstrap.min.js */

if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");!function(t){"use strict";var e=jQuery.fn.jquery.split(" ")[0].split(".");if(e[0]<2&&e[1]<9||1==e[0]&&9==e[1]&&e[2]<1||3<e[0])throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")}(),function(n){"use strict";n.fn.emulateTransitionEnd=function(t){var e=!1,i=this;n(this).one("bsTransitionEnd",function(){e=!0});return setTimeout(function(){e||n(i).trigger(n.support.transition.end)},t),this},n(function(){n.support.transition=function o(){var t=document.createElement("bootstrap"),e={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var i in e)if(t.style[i]!==undefined)return{end:e[i]};return!1}(),n.support.transition&&(n.event.special.bsTransitionEnd={bindType:n.support.transition.end,delegateType:n.support.transition.end,handle:function(t){if(n(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}})})}(jQuery),function(s){"use strict";var e='[data-dismiss="alert"]',a=function(t){s(t).on("click",e,this.close)};a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.close=function(t){var e=s(this),i=e.attr("data-target");i||(i=(i=e.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),i="#"===i?[]:i;var o=s(document).find(i);function n(){o.detach().trigger("closed.bs.alert").remove()}t&&t.preventDefault(),o.length||(o=e.closest(".alert")),o.trigger(t=s.Event("close.bs.alert")),t.isDefaultPrevented()||(o.removeClass("in"),s.support.transition&&o.hasClass("fade")?o.one("bsTransitionEnd",n).emulateTransitionEnd(a.TRANSITION_DURATION):n())};var t=s.fn.alert;s.fn.alert=function o(i){return this.each(function(){var t=s(this),e=t.data("bs.alert");e||t.data("bs.alert",e=new a(this)),"string"==typeof i&&e[i].call(t)})},s.fn.alert.Constructor=a,s.fn.alert.noConflict=function(){return s.fn.alert=t,this},s(document).on("click.bs.alert.data-api",e,a.prototype.close)}(jQuery),function(s){"use strict";var n=function(t,e){this.$element=s(t),this.options=s.extend({},n.DEFAULTS,e),this.isLoading=!1};function i(o){return this.each(function(){var t=s(this),e=t.data("bs.button"),i="object"==typeof o&&o;e||t.data("bs.button",e=new n(this,i)),"toggle"==o?e.toggle():o&&e.setState(o)})}n.VERSION="3.4.1",n.DEFAULTS={loadingText:"loading..."},n.prototype.setState=function(t){var e="disabled",i=this.$element,o=i.is("input")?"val":"html",n=i.data();t+="Text",null==n.resetText&&i.data("resetText",i[o]()),setTimeout(s.proxy(function(){i[o](null==n[t]?this.options[t]:n[t]),"loadingText"==t?(this.isLoading=!0,i.addClass(e).attr(e,e).prop(e,!0)):this.isLoading&&(this.isLoading=!1,i.removeClass(e).removeAttr(e).prop(e,!1))},this),0)},n.prototype.toggle=function(){var t=!0,e=this.$element.closest('[data-toggle="buttons"]');if(e.length){var i=this.$element.find("input");"radio"==i.prop("type")?(i.prop("checked")&&(t=!1),e.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==i.prop("type")&&(i.prop("checked")!==this.$element.hasClass("active")&&(t=!1),this.$element.toggleClass("active")),i.prop("checked",this.$element.hasClass("active")),t&&i.trigger("change")}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active")};var t=s.fn.button;s.fn.button=i,s.fn.button.Constructor=n,s.fn.button.noConflict=function(){return s.fn.button=t,this},s(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(t){var e=s(t.target).closest(".btn");i.call(e,"toggle"),s(t.target).is('input[type="radio"], input[type="checkbox"]')||(t.preventDefault(),e.is("input,button")?e.trigger("focus"):e.find("input:visible,button:visible").first().trigger("focus"))}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(t){s(t.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(t.type))})}(jQuery),function(p){"use strict";var c=function(t,e){this.$element=p(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=e,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",p.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart"in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",p.proxy(this.pause,this)).on("mouseleave.bs.carousel",p.proxy(this.cycle,this))};function r(n){return this.each(function(){var t=p(this),e=t.data("bs.carousel"),i=p.extend({},c.DEFAULTS,t.data(),"object"==typeof n&&n),o="string"==typeof n?n:i.slide;e||t.data("bs.carousel",e=new c(this,i)),"number"==typeof n?e.to(n):o?e[o]():i.interval&&e.pause().cycle()})}c.VERSION="3.4.1",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(t){if(!/input|textarea/i.test(t.target.tagName)){switch(t.which){case 37:this.prev();break;case 39:this.next();break;default:return}t.preventDefault()}},c.prototype.cycle=function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(p.proxy(this.next,this),this.options.interval)),this},c.prototype.getItemIndex=function(t){return this.$items=t.parent().children(".item"),this.$items.index(t||this.$active)},c.prototype.getItemForDirection=function(t,e){var i=this.getItemIndex(e);if(("prev"==t&&0===i||"next"==t&&i==this.$items.length-1)&&!this.options.wrap)return e;var o=(i+("prev"==t?-1:1))%this.$items.length;return this.$items.eq(o)},c.prototype.to=function(t){var e=this,i=this.getItemIndex(this.$active=this.$element.find(".item.active"));if(!(t>this.$items.length-1||t<0))return this.sliding?this.$element.one("slid.bs.carousel",function(){e.to(t)}):i==t?this.pause().cycle():this.slide(i<t?"next":"prev",this.$items.eq(t))},c.prototype.pause=function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&p.support.transition&&(this.$element.trigger(p.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},c.prototype.next=function(){if(!this.sliding)return this.slide("next")},c.prototype.prev=function(){if(!this.sliding)return this.slide("prev")},c.prototype.slide=function(t,e){var i=this.$element.find(".item.active"),o=e||this.getItemForDirection(t,i),n=this.interval,s="next"==t?"left":"right",a=this;if(o.hasClass("active"))return this.sliding=!1;var r=o[0],l=p.Event("slide.bs.carousel",{relatedTarget:r,direction:s});if(this.$element.trigger(l),!l.isDefaultPrevented()){if(this.sliding=!0,n&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var h=p(this.$indicators.children()[this.getItemIndex(o)]);h&&h.addClass("active")}var d=p.Event("slid.bs.carousel",{relatedTarget:r,direction:s});return p.support.transition&&this.$element.hasClass("slide")?(o.addClass(t),"object"==typeof o&&o.length&&o[0].offsetWidth,i.addClass(s),o.addClass(s),i.one("bsTransitionEnd",function(){o.removeClass([t,s].join(" ")).addClass("active"),i.removeClass(["active",s].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger(d)},0)}).emulateTransitionEnd(c.TRANSITION_DURATION)):(i.removeClass("active"),o.addClass("active"),this.sliding=!1,this.$element.trigger(d)),n&&this.cycle(),this}};var t=p.fn.carousel;p.fn.carousel=r,p.fn.carousel.Constructor=c,p.fn.carousel.noConflict=function(){return p.fn.carousel=t,this};var e=function(t){var e=p(this),i=e.attr("href");i&&(i=i.replace(/.*(?=#[^\s]+$)/,""));var o=e.attr("data-target")||i,n=p(document).find(o);if(n.hasClass("carousel")){var s=p.extend({},n.data(),e.data()),a=e.attr("data-slide-to");a&&(s.interval=!1),r.call(n,s),a&&n.data("bs.carousel").to(a),t.preventDefault()}};p(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),p(window).on("load",function(){p('[data-ride="carousel"]').each(function(){var t=p(this);r.call(t,t.data())})})}(jQuery),function(a){"use strict";var r=function(t,e){this.$element=a(t),this.options=a.extend({},r.DEFAULTS,e),this.$trigger=a('[data-toggle="collapse"][href="#'+t.id+'"],[data-toggle="collapse"][data-target="#'+t.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle()};function n(t){var e,i=t.attr("data-target")||(e=t.attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"");return a(document).find(i)}function l(o){return this.each(function(){var t=a(this),e=t.data("bs.collapse"),i=a.extend({},r.DEFAULTS,t.data(),"object"==typeof o&&o);!e&&i.toggle&&/show|hide/.test(o)&&(i.toggle=!1),e||t.data("bs.collapse",e=new r(this,i)),"string"==typeof o&&e[o]()})}r.VERSION="3.4.1",r.TRANSITION_DURATION=350,r.DEFAULTS={toggle:!0},r.prototype.dimension=function(){return this.$element.hasClass("width")?"width":"height"},r.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var t,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(t=e.data("bs.collapse"))&&t.transitioning)){var i=a.Event("show.bs.collapse");if(this.$element.trigger(i),!i.isDefaultPrevented()){e&&e.length&&(l.call(e,"hide"),t||e.data("bs.collapse",null));var o=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[o](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var n=function(){this.$element.removeClass("collapsing").addClass("collapse in")[o](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return n.call(this);var s=a.camelCase(["scroll",o].join("-"));this.$element.one("bsTransitionEnd",a.proxy(n,this)).emulateTransitionEnd(r.TRANSITION_DURATION)[o](this.$element[0][s])}}}},r.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var t=a.Event("hide.bs.collapse");if(this.$element.trigger(t),!t.isDefaultPrevented()){var e=this.dimension();this.$element[e](this.$element[e]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var i=function(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")};if(!a.support.transition)return i.call(this);this.$element[e](0).one("bsTransitionEnd",a.proxy(i,this)).emulateTransitionEnd(r.TRANSITION_DURATION)}}},r.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()},r.prototype.getParent=function(){return a(document).find(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(t,e){var i=a(e);this.addAriaAndCollapsedClass(n(i),i)},this)).end()},r.prototype.addAriaAndCollapsedClass=function(t,e){var i=t.hasClass("in");t.attr("aria-expanded",i),e.toggleClass("collapsed",!i).attr("aria-expanded",i)};var t=a.fn.collapse;a.fn.collapse=l,a.fn.collapse.Constructor=r,a.fn.collapse.noConflict=function(){return a.fn.collapse=t,this},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(t){var e=a(this);e.attr("data-target")||t.preventDefault();var i=n(e),o=i.data("bs.collapse")?"toggle":e.data();l.call(i,o)})}(jQuery),function(a){"use strict";var r='[data-toggle="dropdown"]',o=function(t){a(t).on("click.bs.dropdown",this.toggle)};function l(t){var e=t.attr("data-target");e||(e=(e=t.attr("href"))&&/#[A-Za-z]/.test(e)&&e.replace(/.*(?=#[^\s]*$)/,""));var i="#"!==e?a(document).find(e):null;return i&&i.length?i:t.parent()}function s(o){o&&3===o.which||(a(".dropdown-backdrop").remove(),a(r).each(function(){var t=a(this),e=l(t),i={relatedTarget:this};e.hasClass("open")&&(o&&"click"==o.type&&/input|textarea/i.test(o.target.tagName)&&a.contains(e[0],o.target)||(e.trigger(o=a.Event("hide.bs.dropdown",i)),o.isDefaultPrevented()||(t.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",i)))))}))}o.VERSION="3.4.1",o.prototype.toggle=function(t){var e=a(this);if(!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(s(),!o){"ontouchstart"in document.documentElement&&!i.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",s);var n={relatedTarget:this};if(i.trigger(t=a.Event("show.bs.dropdown",n)),t.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),i.toggleClass("open").trigger(a.Event("shown.bs.dropdown",n))}return!1}},o.prototype.keydown=function(t){if(/(38|40|27|32)/.test(t.which)&&!/input|textarea/i.test(t.target.tagName)){var e=a(this);if(t.preventDefault(),t.stopPropagation(),!e.is(".disabled, :disabled")){var i=l(e),o=i.hasClass("open");if(!o&&27!=t.which||o&&27==t.which)return 27==t.which&&i.find(r).trigger("focus"),e.trigger("click");var n=i.find(".dropdown-menu li:not(.disabled):visible a");if(n.length){var s=n.index(t.target);38==t.which&&0<s&&s--,40==t.which&&s<n.length-1&&s++,~s||(s=0),n.eq(s).trigger("focus")}}}};var t=a.fn.dropdown;a.fn.dropdown=function e(i){return this.each(function(){var t=a(this),e=t.data("bs.dropdown");e||t.data("bs.dropdown",e=new o(this)),"string"==typeof i&&e[i].call(t)})},a.fn.dropdown.Constructor=o,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=t,this},a(document).on("click.bs.dropdown.data-api",s).on("click.bs.dropdown.data-api",".dropdown form",function(t){t.stopPropagation()}).on("click.bs.dropdown.data-api",r,o.prototype.toggle).on("keydown.bs.dropdown.data-api",r,o.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",o.prototype.keydown)}(jQuery),function(a){"use strict";var s=function(t,e){this.options=e,this.$body=a(document.body),this.$element=a(t),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.fixedContent=".navbar-fixed-top, .navbar-fixed-bottom",this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal")},this))};function r(o,n){return this.each(function(){var t=a(this),e=t.data("bs.modal"),i=a.extend({},s.DEFAULTS,t.data(),"object"==typeof o&&o);e||t.data("bs.modal",e=new s(this,i)),"string"==typeof o?e[o](n):i.show&&e.show(n)})}s.VERSION="3.4.1",s.TRANSITION_DURATION=300,s.BACKDROP_TRANSITION_DURATION=150,s.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},s.prototype.toggle=function(t){return this.isShown?this.hide():this.show(t)},s.prototype.show=function(i){var o=this,t=a.Event("show.bs.modal",{relatedTarget:i});this.$element.trigger(t),this.isShown||t.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){o.$element.one("mouseup.dismiss.bs.modal",function(t){a(t.target).is(o.$element)&&(o.ignoreBackdropClick=!0)})}),this.backdrop(function(){var t=a.support.transition&&o.$element.hasClass("fade");o.$element.parent().length||o.$element.appendTo(o.$body),o.$element.show().scrollTop(0),o.adjustDialog(),t&&o.$element[0].offsetWidth,o.$element.addClass("in"),o.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:i});t?o.$dialog.one("bsTransitionEnd",function(){o.$element.trigger("focus").trigger(e)}).emulateTransitionEnd(s.TRANSITION_DURATION):o.$element.trigger("focus").trigger(e)}))},s.prototype.hide=function(t){t&&t.preventDefault(),t=a.Event("hide.bs.modal"),this.$element.trigger(t),this.isShown&&!t.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(s.TRANSITION_DURATION):this.hideModal())},s.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(t){document===t.target||this.$element[0]===t.target||this.$element.has(t.target).length||this.$element.trigger("focus")},this))},s.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(t){27==t.which&&this.hide()},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal")},s.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal")},s.prototype.hideModal=function(){var t=this;this.$element.hide(),this.backdrop(function(){t.$body.removeClass("modal-open"),t.resetAdjustments(),t.resetScrollbar(),t.$element.trigger("hidden.bs.modal")})},s.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},s.prototype.backdrop=function(t){var e=this,i=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var o=a.support.transition&&i;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+i).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(t){this.ignoreBackdropClick?this.ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide())},this)),o&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!t)return;o?this.$backdrop.one("bsTransitionEnd",t).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var n=function(){e.removeBackdrop(),t&&t()};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",n).emulateTransitionEnd(s.BACKDROP_TRANSITION_DURATION):n()}else t&&t()},s.prototype.handleUpdate=function(){this.adjustDialog()},s.prototype.adjustDialog=function(){var t=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&t?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!t?this.scrollbarWidth:""})},s.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""})},s.prototype.checkScrollbar=function(){var t=window.innerWidth;if(!t){var e=document.documentElement.getBoundingClientRect();t=e.right-Math.abs(e.left)}this.bodyIsOverflowing=document.body.clientWidth<t,this.scrollbarWidth=this.measureScrollbar()},s.prototype.setScrollbar=function(){var t=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"";var n=this.scrollbarWidth;this.bodyIsOverflowing&&(this.$body.css("padding-right",t+n),a(this.fixedContent).each(function(t,e){var i=e.style.paddingRight,o=a(e).css("padding-right");a(e).data("padding-right",i).css("padding-right",parseFloat(o)+n+"px")}))},s.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad),a(this.fixedContent).each(function(t,e){var i=a(e).data("padding-right");a(e).removeData("padding-right"),e.style.paddingRight=i||""})},s.prototype.measureScrollbar=function(){var t=document.createElement("div");t.className="modal-scrollbar-measure",this.$body.append(t);var e=t.offsetWidth-t.clientWidth;return this.$body[0].removeChild(t),e};var t=a.fn.modal;a.fn.modal=r,a.fn.modal.Constructor=s,a.fn.modal.noConflict=function(){return a.fn.modal=t,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(t){var e=a(this),i=e.attr("href"),o=e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,""),n=a(document).find(o),s=n.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(i)&&i},n.data(),e.data());e.is("a")&&t.preventDefault(),n.one("show.bs.modal",function(t){t.isDefaultPrevented()||n.one("hidden.bs.modal",function(){e.is(":visible")&&e.trigger("focus")})}),r.call(n,s,this)})}(jQuery),function(g){"use strict";var o=["sanitize","whiteList","sanitizeFn"],a=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],t={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},r=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,l=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function u(t,e){var i=t.nodeName.toLowerCase();if(-1!==g.inArray(i,e))return-1===g.inArray(i,a)||Boolean(t.nodeValue.match(r)||t.nodeValue.match(l));for(var o=g(e).filter(function(t,e){return e instanceof RegExp}),n=0,s=o.length;n<s;n++)if(i.match(o[n]))return!0;return!1}function n(t,e,i){if(0===t.length)return t;if(i&&"function"==typeof i)return i(t);if(!document.implementation||!document.implementation.createHTMLDocument)return t;var o=document.implementation.createHTMLDocument("sanitization");o.body.innerHTML=t;for(var n=g.map(e,function(t,e){return e}),s=g(o.body).find("*"),a=0,r=s.length;a<r;a++){var l=s[a],h=l.nodeName.toLowerCase();if(-1!==g.inArray(h,n))for(var d=g.map(l.attributes,function(t){return t}),p=[].concat(e["*"]||[],e[h]||[]),c=0,f=d.length;c<f;c++)u(d[c],p)||l.removeAttribute(d[c].nodeName);else l.parentNode.removeChild(l)}return o.body.innerHTML}var m=function(t,e){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",t,e)};m.VERSION="3.4.1",m.TRANSITION_DURATION=150,m.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0},sanitize:!0,sanitizeFn:null,whiteList:t},m.prototype.init=function(t,e,i){if(this.enabled=!0,this.type=t,this.$element=g(e),this.options=this.getOptions(i),this.$viewport=this.options.viewport&&g(document).find(g.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0]instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var o=this.options.trigger.split(" "),n=o.length;n--;){var s=o[n];if("click"==s)this.$element.on("click."+this.type,this.options.selector,g.proxy(this.toggle,this));else if("manual"!=s){var a="hover"==s?"mouseenter":"focusin",r="hover"==s?"mouseleave":"focusout";this.$element.on(a+"."+this.type,this.options.selector,g.proxy(this.enter,this)),this.$element.on(r+"."+this.type,this.options.selector,g.proxy(this.leave,this))}}this.options.selector?this._options=g.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},m.prototype.getDefaults=function(){return m.DEFAULTS},m.prototype.getOptions=function(t){var e=this.$element.data();for(var i in e)e.hasOwnProperty(i)&&-1!==g.inArray(i,o)&&delete e[i];return(t=g.extend({},this.getDefaults(),e,t)).delay&&"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),t.sanitize&&(t.template=n(t.template,t.whiteList,t.sanitizeFn)),t},m.prototype.getDelegateOptions=function(){var i={},o=this.getDefaults();return this._options&&g.each(this._options,function(t,e){o[t]!=e&&(i[t]=e)}),i},m.prototype.enter=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusin"==t.type?"focus":"hover"]=!0),e.tip().hasClass("in")||"in"==e.hoverState)e.hoverState="in";else{if(clearTimeout(e.timeout),e.hoverState="in",!e.options.delay||!e.options.delay.show)return e.show();e.timeout=setTimeout(function(){"in"==e.hoverState&&e.show()},e.options.delay.show)}},m.prototype.isInStateTrue=function(){for(var t in this.inState)if(this.inState[t])return!0;return!1},m.prototype.leave=function(t){var e=t instanceof this.constructor?t:g(t.currentTarget).data("bs."+this.type);if(e||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e)),t instanceof g.Event&&(e.inState["focusout"==t.type?"focus":"hover"]=!1),!e.isInStateTrue()){if(clearTimeout(e.timeout),e.hoverState="out",!e.options.delay||!e.options.delay.hide)return e.hide();e.timeout=setTimeout(function(){"out"==e.hoverState&&e.hide()},e.options.delay.hide)}},m.prototype.show=function(){var t=g.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(t);var e=g.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(t.isDefaultPrevented()||!e)return;var i=this,o=this.tip(),n=this.getUID(this.type);this.setContent(),o.attr("id",n),this.$element.attr("aria-describedby",n),this.options.animation&&o.addClass("fade");var s="function"==typeof this.options.placement?this.options.placement.call(this,o[0],this.$element[0]):this.options.placement,a=/\s?auto?\s?/i,r=a.test(s);r&&(s=s.replace(a,"")||"top"),o.detach().css({top:0,left:0,display:"block"}).addClass(s).data("bs."+this.type,this),this.options.container?o.appendTo(g(document).find(this.options.container)):o.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var l=this.getPosition(),h=o[0].offsetWidth,d=o[0].offsetHeight;if(r){var p=s,c=this.getPosition(this.$viewport);s="bottom"==s&&l.bottom+d>c.bottom?"top":"top"==s&&l.top-d<c.top?"bottom":"right"==s&&l.right+h>c.width?"left":"left"==s&&l.left-h<c.left?"right":s,o.removeClass(p).addClass(s)}var f=this.getCalculatedOffset(s,l,h,d);this.applyPlacement(f,s);var u=function(){var t=i.hoverState;i.$element.trigger("shown.bs."+i.type),i.hoverState=null,"out"==t&&i.leave(i)};g.support.transition&&this.$tip.hasClass("fade")?o.one("bsTransitionEnd",u).emulateTransitionEnd(m.TRANSITION_DURATION):u()}},m.prototype.applyPlacement=function(t,e){var i=this.tip(),o=i[0].offsetWidth,n=i[0].offsetHeight,s=parseInt(i.css("margin-top"),10),a=parseInt(i.css("margin-left"),10);isNaN(s)&&(s=0),isNaN(a)&&(a=0),t.top+=s,t.left+=a,g.offset.setOffset(i[0],g.extend({using:function(t){i.css({top:Math.round(t.top),left:Math.round(t.left)})}},t),0),i.addClass("in");var r=i[0].offsetWidth,l=i[0].offsetHeight;"top"==e&&l!=n&&(t.top=t.top+n-l);var h=this.getViewportAdjustedDelta(e,t,r,l);h.left?t.left+=h.left:t.top+=h.top;var d=/top|bottom/.test(e),p=d?2*h.left-o+r:2*h.top-n+l,c=d?"offsetWidth":"offsetHeight";i.offset(t),this.replaceArrow(p,i[0][c],d)},m.prototype.replaceArrow=function(t,e,i){this.arrow().css(i?"left":"top",50*(1-t/e)+"%").css(i?"top":"left","")},m.prototype.setContent=function(){var t=this.tip(),e=this.getTitle();this.options.html?(this.options.sanitize&&(e=n(e,this.options.whiteList,this.options.sanitizeFn)),t.find(".tooltip-inner").html(e)):t.find(".tooltip-inner").text(e),t.removeClass("fade in top bottom left right")},m.prototype.hide=function(t){var e=this,i=g(this.$tip),o=g.Event("hide.bs."+this.type);function n(){"in"!=e.hoverState&&i.detach(),e.$element&&e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),t&&t()}if(this.$element.trigger(o),!o.isDefaultPrevented())return i.removeClass("in"),g.support.transition&&i.hasClass("fade")?i.one("bsTransitionEnd",n).emulateTransitionEnd(m.TRANSITION_DURATION):n(),this.hoverState=null,this},m.prototype.fixTitle=function(){var t=this.$element;(t.attr("title")||"string"!=typeof t.attr("data-original-title"))&&t.attr("data-original-title",t.attr("title")||"").attr("title","")},m.prototype.hasContent=function(){return this.getTitle()},m.prototype.getPosition=function(t){var e=(t=t||this.$element)[0],i="BODY"==e.tagName,o=e.getBoundingClientRect();null==o.width&&(o=g.extend({},o,{width:o.right-o.left,height:o.bottom-o.top}));var n=window.SVGElement&&e instanceof window.SVGElement,s=i?{top:0,left:0}:n?null:t.offset(),a={scroll:i?document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop()},r=i?{width:g(window).width(),height:g(window).height()}:null;return g.extend({},o,a,r,s)},m.prototype.getCalculatedOffset=function(t,e,i,o){return"bottom"==t?{top:e.top+e.height,left:e.left+e.width/2-i/2}:"top"==t?{top:e.top-o,left:e.left+e.width/2-i/2}:"left"==t?{top:e.top+e.height/2-o/2,left:e.left-i}:{top:e.top+e.height/2-o/2,left:e.left+e.width}},m.prototype.getViewportAdjustedDelta=function(t,e,i,o){var n={top:0,left:0};if(!this.$viewport)return n;var s=this.options.viewport&&this.options.viewport.padding||0,a=this.getPosition(this.$viewport);if(/right|left/.test(t)){var r=e.top-s-a.scroll,l=e.top+s-a.scroll+o;r<a.top?n.top=a.top-r:l>a.top+a.height&&(n.top=a.top+a.height-l)}else{var h=e.left-s,d=e.left+s+i;h<a.left?n.left=a.left-h:d>a.right&&(n.left=a.left+a.width-d)}return n},m.prototype.getTitle=function(){var t=this.$element,e=this.options;return t.attr("data-original-title")||("function"==typeof e.title?e.title.call(t[0]):e.title)},m.prototype.getUID=function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},m.prototype.tip=function(){if(!this.$tip&&(this.$tip=g(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip},m.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},m.prototype.enable=function(){this.enabled=!0},m.prototype.disable=function(){this.enabled=!1},m.prototype.toggleEnabled=function(){this.enabled=!this.enabled},m.prototype.toggle=function(t){var e=this;t&&((e=g(t.currentTarget).data("bs."+this.type))||(e=new this.constructor(t.currentTarget,this.getDelegateOptions()),g(t.currentTarget).data("bs."+this.type,e))),t?(e.inState.click=!e.inState.click,e.isInStateTrue()?e.enter(e):e.leave(e)):e.tip().hasClass("in")?e.leave(e):e.enter(e)},m.prototype.destroy=function(){var t=this;clearTimeout(this.timeout),this.hide(function(){t.$element.off("."+t.type).removeData("bs."+t.type),t.$tip&&t.$tip.detach(),t.$tip=null,t.$arrow=null,t.$viewport=null,t.$element=null})},m.prototype.sanitizeHtml=function(t){return n(t,this.options.whiteList,this.options.sanitizeFn)};var e=g.fn.tooltip;g.fn.tooltip=function i(o){return this.each(function(){var t=g(this),e=t.data("bs.tooltip"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.tooltip",e=new m(this,i)),"string"==typeof o&&e[o]())})},g.fn.tooltip.Constructor=m,g.fn.tooltip.noConflict=function(){return g.fn.tooltip=e,this}}(jQuery),function(n){"use strict";var s=function(t,e){this.init("popover",t,e)};if(!n.fn.tooltip)throw new Error("Popover requires tooltip.js");s.VERSION="3.4.1",s.DEFAULTS=n.extend({},n.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),((s.prototype=n.extend({},n.fn.tooltip.Constructor.prototype)).constructor=s).prototype.getDefaults=function(){return s.DEFAULTS},s.prototype.setContent=function(){var t=this.tip(),e=this.getTitle(),i=this.getContent();if(this.options.html){var o=typeof i;this.options.sanitize&&(e=this.sanitizeHtml(e),"string"===o&&(i=this.sanitizeHtml(i))),t.find(".popover-title").html(e),t.find(".popover-content").children().detach().end()["string"===o?"html":"append"](i)}else t.find(".popover-title").text(e),t.find(".popover-content").children().detach().end().text(i);t.removeClass("fade top bottom left right in"),t.find(".popover-title").html()||t.find(".popover-title").hide()},s.prototype.hasContent=function(){return this.getTitle()||this.getContent()},s.prototype.getContent=function(){var t=this.$element,e=this.options;return t.attr("data-content")||("function"==typeof e.content?e.content.call(t[0]):e.content)},s.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")};var t=n.fn.popover;n.fn.popover=function e(o){return this.each(function(){var t=n(this),e=t.data("bs.popover"),i="object"==typeof o&&o;!e&&/destroy|hide/.test(o)||(e||t.data("bs.popover",e=new s(this,i)),"string"==typeof o&&e[o]())})},n.fn.popover.Constructor=s,n.fn.popover.noConflict=function(){return n.fn.popover=t,this}}(jQuery),function(s){"use strict";function n(t,e){this.$body=s(document.body),this.$scrollElement=s(t).is(document.body)?s(window):s(t),this.options=s.extend({},n.DEFAULTS,e),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",s.proxy(this.process,this)),this.refresh(),this.process()}function e(o){return this.each(function(){var t=s(this),e=t.data("bs.scrollspy"),i="object"==typeof o&&o;e||t.data("bs.scrollspy",e=new n(this,i)),"string"==typeof o&&e[o]()})}n.VERSION="3.4.1",n.DEFAULTS={offset:10},n.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight)},n.prototype.refresh=function(){var t=this,o="offset",n=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),s.isWindow(this.$scrollElement[0])||(o="position",n=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var t=s(this),e=t.data("target")||t.attr("href"),i=/^#./.test(e)&&s(e);return i&&i.length&&i.is(":visible")&&[[i[o]().top+n,e]]||null}).sort(function(t,e){return t[0]-e[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},n.prototype.process=function(){var t,e=this.$scrollElement.scrollTop()+this.options.offset,i=this.getScrollHeight(),o=this.options.offset+i-this.$scrollElement.height(),n=this.offsets,s=this.targets,a=this.activeTarget;if(this.scrollHeight!=i&&this.refresh(),o<=e)return a!=(t=s[s.length-1])&&this.activate(t);if(a&&e<n[0])return this.activeTarget=null,this.clear();for(t=n.length;t--;)a!=s[t]&&e>=n[t]&&(n[t+1]===undefined||e<n[t+1])&&this.activate(s[t])},n.prototype.activate=function(t){this.activeTarget=t,this.clear();var e=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',i=s(e).parents("li").addClass("active");i.parent(".dropdown-menu").length&&(i=i.closest("li.dropdown").addClass("active")),i.trigger("activate.bs.scrollspy")},n.prototype.clear=function(){s(this.selector).parentsUntil(this.options.target,".active").removeClass("active")};var t=s.fn.scrollspy;s.fn.scrollspy=e,s.fn.scrollspy.Constructor=n,s.fn.scrollspy.noConflict=function(){return s.fn.scrollspy=t,this},s(window).on("load.bs.scrollspy.data-api",function(){s('[data-spy="scroll"]').each(function(){var t=s(this);e.call(t,t.data())})})}(jQuery),function(r){"use strict";var a=function(t){this.element=r(t)};function e(i){return this.each(function(){var t=r(this),e=t.data("bs.tab");e||t.data("bs.tab",e=new a(this)),"string"==typeof i&&e[i]()})}a.VERSION="3.4.1",a.TRANSITION_DURATION=150,a.prototype.show=function(){var t=this.element,e=t.closest("ul:not(.dropdown-menu)"),i=t.data("target");if(i||(i=(i=t.attr("href"))&&i.replace(/.*(?=#[^\s]*$)/,"")),!t.parent("li").hasClass("active")){var o=e.find(".active:last a"),n=r.Event("hide.bs.tab",{relatedTarget:t[0]}),s=r.Event("show.bs.tab",{relatedTarget:o[0]});if(o.trigger(n),t.trigger(s),!s.isDefaultPrevented()&&!n.isDefaultPrevented()){var a=r(document).find(i);this.activate(t.closest("li"),e),this.activate(a,a.parent(),function(){o.trigger({type:"hidden.bs.tab",relatedTarget:t[0]}),t.trigger({type:"shown.bs.tab",relatedTarget:o[0]})})}}},a.prototype.activate=function(t,e,i){var o=e.find("> .active"),n=i&&r.support.transition&&(o.length&&o.hasClass("fade")||!!e.find("> .fade").length);function s(){o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),t.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),n?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu").length&&t.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),i&&i()}o.length&&n?o.one("bsTransitionEnd",s).emulateTransitionEnd(a.TRANSITION_DURATION):s(),o.removeClass("in")};var t=r.fn.tab;r.fn.tab=e,r.fn.tab.Constructor=a,r.fn.tab.noConflict=function(){return r.fn.tab=t,this};var i=function(t){t.preventDefault(),e.call(r(this),"show")};r(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',i).on("click.bs.tab.data-api",'[data-toggle="pill"]',i)}(jQuery),function(l){"use strict";var h=function(t,e){this.options=l.extend({},h.DEFAULTS,e);var i=this.options.target===h.DEFAULTS.target?l(this.options.target):l(document).find(this.options.target);this.$target=i.on("scroll.bs.affix.data-api",l.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",l.proxy(this.checkPositionWithEventLoop,this)),this.$element=l(t),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition()};function i(o){return this.each(function(){var t=l(this),e=t.data("bs.affix"),i="object"==typeof o&&o;e||t.data("bs.affix",e=new h(this,i)),"string"==typeof o&&e[o]()})}h.VERSION="3.4.1",h.RESET="affix affix-top affix-bottom",h.DEFAULTS={offset:0,target:window},h.prototype.getState=function(t,e,i,o){var n=this.$target.scrollTop(),s=this.$element.offset(),a=this.$target.height();if(null!=i&&"top"==this.affixed)return n<i&&"top";if("bottom"==this.affixed)return null!=i?!(n+this.unpin<=s.top)&&"bottom":!(n+a<=t-o)&&"bottom";var r=null==this.affixed,l=r?n:s.top;return null!=i&&n<=i?"top":null!=o&&t-o<=l+(r?a:e)&&"bottom"},h.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(h.RESET).addClass("affix");var t=this.$target.scrollTop(),e=this.$element.offset();return this.pinnedOffset=e.top-t},h.prototype.checkPositionWithEventLoop=function(){setTimeout(l.proxy(this.checkPosition,this),1)},h.prototype.checkPosition=function(){if(this.$element.is(":visible")){var t=this.$element.height(),e=this.options.offset,i=e.top,o=e.bottom,n=Math.max(l(document).height(),l(document.body).height());"object"!=typeof e&&(o=i=e),"function"==typeof i&&(i=e.top(this.$element)),"function"==typeof o&&(o=e.bottom(this.$element));var s=this.getState(n,t,i,o);if(this.affixed!=s){null!=this.unpin&&this.$element.css("top","");var a="affix"+(s?"-"+s:""),r=l.Event(a+".bs.affix");if(this.$element.trigger(r),r.isDefaultPrevented())return;this.affixed=s,this.unpin="bottom"==s?this.getPinnedOffset():null,this.$element.removeClass(h.RESET).addClass(a).trigger(a.replace("affix","affixed")+".bs.affix")}"bottom"==s&&this.$element.offset({top:n-t-o})}};var t=l.fn.affix;l.fn.affix=i,l.fn.affix.Constructor=h,l.fn.affix.noConflict=function(){return l.fn.affix=t,this},l(window).on("load",function(){l('[data-spy="affix"]').each(function(){var t=l(this),e=t.data();e.offset=e.offset||{},null!=e.offsetBottom&&(e.offset.bottom=e.offsetBottom),null!=e.offsetTop&&(e.offset.top=e.offsetTop),i.call(t,e)})})}(jQuery);


/* sites/philosophie.ac-amiens.fr/local/cache-js/jquery.matchHeight-min-minify-1357.js */

!function(t){"use strict";"function"==typeof define&&define.amd?define(["jquery"],t):"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):t(jQuery)}(function(t){var e=-1,o=-1,a=function(t){return parseFloat(t)||0},i=function(e){var o=1,i=t(e),n=null,r=[];return i.each(function(){var e=t(this),i=e.offset().top-a(e.css("margin-top")),s=r.length>0?r[r.length-1]:null;null===s?r.push(e):Math.floor(Math.abs(n-i))<=o?r[r.length-1]=s.add(e):r.push(e),n=i}),r},n=function(e){var o={
byRow:!0,property:"height",target:null,remove:!1};return"object"==typeof e?t.extend(o,e):("boolean"==typeof e?o.byRow=e:"remove"===e&&(o.remove=!0),o)},r=t.fn.matchHeight=function(e){var o=n(e);if(o.remove){var a=this;return this.css(o.property,""),t.each(r._groups,function(t,e){e.elements=e.elements.not(a)}),this}return this.length<=1&&!o.target?this:(r._groups.push({elements:this,options:o}),r._apply(this,o),this)};r.version="master",r._groups=[],r._throttle=80,r._maintainScroll=!1,r._beforeUpdate=null,
r._afterUpdate=null,r._rows=i,r._parse=a,r._parseOptions=n,r._apply=function(e,o){var s=n(o),h=t(e),l=[h],c=t(window).scrollTop(),p=t("html").outerHeight(!0),d=h.parents().filter(":hidden");return d.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),d.css("display","block"),s.byRow&&!s.target&&(h.each(function(){var e=t(this),o=e.css("display");"inline-block"!==o&&"flex"!==o&&"inline-flex"!==o&&(o="block"),e.data("style-cache",e.attr("style")),e.css({display:o,"padding-top":"0",
"padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=i(h),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,o){var i=t(o),n=0;if(s.target)n=s.target.outerHeight(!1);else{if(s.byRow&&i.length<=1)return void i.css(s.property,"");i.each(function(){var e=t(this),o=e.attr("style"),a=e.css("display");"inline-block"!==a&&"flex"!==a&&"inline-flex"!==a&&(a="block");var i={
display:a};i[s.property]="",e.css(i),e.outerHeight(!1)>n&&(n=e.outerHeight(!1)),o?e.attr("style",o):e.css("display","")})}i.each(function(){var e=t(this),o=0;s.target&&e.is(s.target)||("border-box"!==e.css("box-sizing")&&(o+=a(e.css("border-top-width"))+a(e.css("border-bottom-width")),o+=a(e.css("padding-top"))+a(e.css("padding-bottom"))),e.css(s.property,n-o+"px"))})}),d.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),r._maintainScroll&&t(window).scrollTop(c/p*t("html").outerHeight(!0)),
this},r._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var o=t(this),a=o.attr("data-mh")||o.attr("data-match-height");a in e?e[a]=e[a].add(o):e[a]=o}),t.each(e,function(){this.matchHeight(!0)})};var s=function(e){r._beforeUpdate&&r._beforeUpdate(e,r._groups),t.each(r._groups,function(){r._apply(this.elements,this.options)}),r._afterUpdate&&r._afterUpdate(e,r._groups)};r._update=function(a,i){if(i&&"resize"===i.type){var n=t(window).width();if(n===e)return;e=n;
}a?-1===o&&(o=setTimeout(function(){s(i),o=-1},r._throttle)):s(i)},t(r._applyDataApi),t(window).bind("load",function(t){r._update(!1,t)}),t(window).bind("resize orientationchange",function(t){r._update(!0,t)})});


/* sites/philosophie.ac-amiens.fr/local/cache-js/comportement-minify-79f9.js */

function ouvrirOutils(choix){
var outil=choix;
$('#recherche').removeClass('ferme');
$('#recherche').addClass('ouvert');
setTimeout(function(){$('#recherche #search #rech').focus()},500);
};
function fermerOutils(choix){
var outil=choix;
$('#recherche').removeClass('ouvert');
$('#recherche').addClass('ferme');
$('#rech').val('');
};
jQuery(document).ready(function($){
$('#sommaire.replie').click(function(){
$('#sommaire').removeClass('replie'),
$('#sommaire').addClass('deplie');
});
$(function(){
var twitterHeight=$('#actus').height();
$('#twitter').css('height',twitterHeight);
$('#twitter .timeline-Body').css('height',twitterHeight);
$('#twitter .timeline-Body').css('--scrollbarBG','#FBFBFB');
$('#twitter .timeline-Body').css('--thumbBG','#3b94d9');
$('#twitter .timeline-Body').css('scrollbar-color','var(--thumbBG) var(--scrollbarBG)');
$('#twitter .timeline-Body').css('scrollbar-color','var(--thumbBG) var(--scrollbarBG)');
$('#twitter .timeline-Body').css('scrollbar-width','thin');
$('#twitter .timeline-Body').css('overflow-y','auto');
});
$(function(){
$('div.matchHeight').matchHeight();
});
var x=$('#contenu').offset();
$('#sommaire').css('top',x.top);
$('#menuRS').css('top',x.top+75);
if($(window).width()<1024){
$('#sommaire').css('left',5);
$('#menuRS').css('left',5);
}
else{
$('#sommaire').css('left',x-75);
$('#menuRS').css('left',x-75);
}
document.onscroll=function(){
$('#sommaire').removeClass('deplie');
$('#sommaire').addClass('replie');
if($(window).scrollTop()>0){
var x=$('#contenu').offset();
$('header').css('position','fixed');
$('header').css('height',60);
$('nav.navbar').removeClass('navbar-static-top').addClass('navbar-fixed-top');
$('nav.navbar').css('top',$('header').height());
$('.navbar-default .navbar-collapse').css('height',700);
$('#page').addClass('padding-contenu');
$('#logo_et_urlEGF').css('margin',0);
$('#logo_et_urlEGF').css('height',60);
$('#logo_et_urlEGF .logo').addClass('marianne');
$('#logo_et_urlEGF .urlEGF').css('display','none');
$('#sommaire').css('top',$('header').height()+65);
$('#menuRS').css('top',$('header').height()+140);
$('#contenu-suite #logo_article').addClass('masque');
if($(window).width()<1024){
$('#sommaire').css('left',5);
$('#menuRS').css('left',5);
}
else{
$('#sommaire').css('left',x-75);
$('#menuRS').css('left',x-75);
}
}else{
var x=$('#contenu').offset();
$('header').css('position','relative');
$('header').css('height','initial');
$('nav.navbar').removeClass('navbar-fixed-top').addClass('navbar-static-top');
$('nav.navbar').css('top','initial');
$('#page').removeClass('padding-contenu');
$('#logo_et_urlEGF').css('margin','30px 0');
$('#logo_et_urlEGF').css('height','initial');
$('#logo_et_urlEGF .logo').removeClass('marianne');
$('#logo_et_urlEGF .urlEGF').css('display','block');
$('#sommaire').css('top',x.top+$('header').height());
$('#menuRS').css('top',x.top+$('header').height()+75);
$('#contenu-suite #logo_article').removeClass('masque');
if($(window).width()<1024){
$('#sommaire').css('left',5);
$('#menuRS').css('left',5);
}
else{
$('#sommaire').css('left',x-75);
$('#menuRS').css('left',x-75);
}
}
};
$("div:has(> div[id^='formulaire_formidable-'])").css('width','100%');
$('div.formulaire_formidable').addClass('col-xs-12 col-sm-12 col-md-12 col-lg-12');
$('#champ_case_1').click(function(){
if(champ_case_1.checked){
$('p.boutons').css('display','block');
}else{
$('p.boutons').css('display','none');
}
})
$('#champ_case_2').click(function(){
if($('#champ_case_1').prop('checked',false)){
$('p.boutons').css('display','none');
$('#champ_case_1').prop('checked',false);
}
})
$('span.spip_note_ref a[href*="#"]:not([href="#"])').click(function(){
if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){
var target=$(this.hash);
target=target.length?target:$('[name='+this.hash.slice(1)+']');
if(target.length){
$('html, body').animate({
scrollTop:target.offset().top-50
},500);
return false;
}
}
});
$('#sommaire a[href*="#"]:not([href="#"])').click(function(){
$('#sommaire').removeClass('deplie'),
$('#sommaire').addClass('replie');
if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')&&location.hostname==this.hostname){
var target=$(this.hash);
target=target.length?target:$('[name='+this.hash.slice(1)+']');
if(target.length){
$('html, body').animate({
scrollTop:target.offset().top-60
},500);
return false;
}
}
});
$('div.scrollup').on('click',function(e){
e.preventDefault();
$('html, body').animate({
scrollTop:0
},'300');
});
});


