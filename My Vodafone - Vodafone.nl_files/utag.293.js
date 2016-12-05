//tealium universal tag - utag.293 ut4.0.201412191150, Copyright 2014 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader,u){try{u=utag.o[loader].sender[id]={}}catch(e){u=utag.sender[id]};u.ev={'view':1};u.qsp_delim='/';u.kvp_delim='.';u.account="VodafoneCBU_AllVisit_jul13_27062013";u.ato='';u.base_url='//view.atdmt.com/action/';u.map={};u.extend=[];u.send=function(a,b,c,d,e,f){if(u.ev[a]||typeof u.ev.all!='undefined'){c=[];for(d in utag.loader.GV(u.map)){if(typeof b[d]!='undefined'&&b[d]!=''){e=u.map[d].split(',');for(f=0;f<e.length;f++){if(e[f]=="ato"||e[f]=="account"){u[e[f]]=b[d]}
else{c.push(e[f]+u.kvp_delim+encodeURIComponent(b[d]))}}}}
u.base_url+=u.account;if(u.ato||c.length>0){u.base_url+='/v3/';if(u.ato){u.base_url+='ato.'+u.ato+'/'};}
u.img=new Image();u.img.src=u.base_url+((c.length>0)?'[':'')+c.join(u.qsp_delim)+((c.length>0)?']':'');}}
try{utag.o[loader].loader.LOAD(id)}catch(e){utag.loader.LOAD(id)}})('293','vodafone.nl-breakthrough');}catch(e){}
