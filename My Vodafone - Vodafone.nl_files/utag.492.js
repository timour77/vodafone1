//tealium universal tag - utag.492 ut4.0.201412191150, Copyright 2014 Tealium.com Inc. All Rights Reserved.
try{if(!utag.libloader){utag.libloader=function(src,handler,a,b){a=document;b=a.createElement('script');b.language='javascript';b.type='text/javascript';b.src=src;if(typeof handler=='function'){b.handlerFlag=0;b.onreadystatechange=function(){if((this.readyState=='complete'||this.readyState=='loaded')&&!b.handlerFlag){b.handlerFlag=1;handler()}};b.onload=function(){if(!b.handlerFlag){b.handlerFlag=1;handler()}};a.getElementsByTagName('head')[0].appendChild(b)}}};(function(id,loader,u){u=utag.o[loader].sender[id]={};u.ev={'view':1};u.map={};u.extend=[];u.send=function(a,b,c,d,e,f){if(u.ev[a]||typeof u.ev.all!="undefined"){var data={};for(d in utag.loader.GV(u.map)){if(typeof b[d]!='undefined'){e=u.map[d].split(',');for(f=0;f<e.length;f++){data[e[f]]=b[d]}}}
}};try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('492','vodafone.nl-breakthrough');}catch(e){}
(function(){if(window.self===window.top){function ML_ImageLoaded()
{function metrixlab_onready(el,func){this.args=new Array(el,func);this.doTry=function(){try{var el=eval(this.args[0]);el.onload=this.args[1];el.onload();clearInterval(this.args[2]);}
catch(e){}}
this.doTry.bind=function(object){var method=this;return function(){method.apply(object);}}
this.args[2]=setInterval(this.doTry.bind(this),250);return this;}
new metrixlab_onready("document",function(){var metrixlab_body=top.document.getElementsByTagName('body').item(0);var metrixlab_script=top.document.createElement('script');metrixlab_script.setAttribute('defer','defer');metrixlab_script.src=MetrixLab_Protocol+'//invitation.opinionbar.com/popups/p14834/overlay.js';metrixlab_script.type='text/javascript';metrixlab_body.insertBefore(metrixlab_script,metrixlab_body.childNodes[0]);});}
function ML_ImageAborted()
{}
function ML_ImageError()
{}
var MetrixLab_Protocol=document.location.protocol;var ML_img_ServerOnline=new Image();ML_img_ServerOnline.src=MetrixLab_Protocol+'//invitation.opinionbar.com/popups/ServerOnline.gif';ML_img_ServerOnline.onload=ML_ImageLoaded;ML_img_ServerOnline.onabort=ML_ImageLoaded;ML_img_ServerOnline.onerror=ML_ImageError;}})();