//tealium universal tag - utag.356 ut4.0.201412191150, Copyright 2014 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};u.ev={'view':1};u.t='@@',u.i=[],u.p=["//secure.adnxs.com/px?id=90530&t=2%%619%%","//secure.adnxs.com/px?id=90532&t=2##5000##%%620%%","//secure.adnxs.com/px?id=90533&t=2##10000##%%621%%","//secure.adnxs.com/px?id=90534&t=2##15000##%%622%%","//secure.adnxs.com/px?id=90535&t=2##30000##%%623%%","//secure.adnxs.com/px?id=90536&t=2##60000##%%624%%","","",];u.timeout='//tealium.hs.llnwd.net/o43/db.gif?utid='+utag.cfg.utid+'&tag_id='+id+'&pixel=';u._tto='';u.cachebust="enabled";u.map={};u.extend=[];u.send=function(a,b,c,d,e,f){if(u.ev[a]){for(c=0;c<u.p.length;c++){if(u.p[c]!=""){var x=u.rp(u.p[c],b);if(x.Url!=""){if(u.cachebust=="enabled"&&x.Url.indexOf("_rnd")<0){x.Url+="&_rnd="+Math.random();}
uep(u,i,x);}}}
if(u._tto!=''&&!isNaN(u._tto)){setTimeout(function(){for(var i=0;i<u.i.length;i++){if(!u.i[i].complete)u.i[i].src=u.timeout+(i+1);}},parseFloat(u._tto))}}}
u.rp=function(a,b){if(typeof a!="undefined"&&a.indexOf('%%')>0)
{var regex2=/%%([^@]+)%%/g;a=a.replace(regex2,function(){return'';});}
if(typeof a!="undefined"&&a.indexOf('##')>0)
{var regex1=/##([^@]+)##/g;var tempTime=a.match(regex1);var tempTime2=tempTime[0].substring(2,tempTime[0].length-2);a=a.replace(regex1,function(){return'';});}
if(typeof a!="undefined"&&a.indexOf(u.t)>0)
{var regex0=/@@([^@]+)@@/g;a=a.replace(regex,function(m,d){if(b[d]){return encodeURIComponent(b[d]);}
else{return'';}});}
var x={}
x.Url=a;x.TimeOut=0;if(typeof(tempTime2)!=="undefined"){x.TimeOut=tempTime2;}
return x;}
uep=function(u,i,x){if(x.TimeOut>0){setTimeout(function(){var img=new Image();img.src=x.Url;u.i.push(img);},x.TimeOut)}
else{var img=new Image();img.src=x.Url;u.i.push(img);}}
try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('356','vodafone.nl-breakthrough');}catch(e){}
