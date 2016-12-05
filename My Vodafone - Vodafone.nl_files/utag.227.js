//tealium universal tag - utag.227 ut4.0.201412191150, Copyright 2014 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};u.ev={'view':1};u.qsp_delim="&";u.kvp_delim="=";u.add="292924";u.ids="";u.t="2";u.base_url="//"+(location.protocol=="https:"?"secure":"ib")+".adnxs.com/";u.map={};u.extend=[];u.send=function(a,b,c,d,e,f){if(u.ev[a]||typeof u.ev.all!="undefined"){c=[];for(d in utag.loader.GV(u.map)){if(typeof b[d]!="undefined"&&b[d]!=""){e=u.map[d].split(",");for(f=0;f<e.length;f++){if(e[f]=="add"){u.add=b[d]}
else if(e[f]=="id"){u.ids=b[d]}
else{c.push(e[f]+u.kvp_delim+encodeURIComponent(b[d]));}}}}
if(u.add!=''){c.push('add='+u.add);u.base_url+="seg?";}else{u.base_url+="px?";}
if(u.ids!=''){u.ida=u.ids.split(',');for(f=0;f<u.ida.length;f++){c.push('id='+u.ida[f]);};}
c.push('t='+((u.t)?u.t:"2"));u.img=new Image();u.img.src=u.base_url+c.join(u.qsp_delim);}}
try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('227','vodafone.nl-breakthrough');}catch(e){}
