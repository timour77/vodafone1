//tealium universal tag - utag.698 ut4.0.201610100728, Copyright 2016 Tealium.com Inc. All Rights Reserved.
try{(function(id,loader){var u={};utag.o[loader].sender[id]=u;if(utag===undefined){utag={};}if(utag.ut===undefined){utag.ut={};}if(utag.ut.loader===undefined){u.loader=function(o){var a,b,c,l;a=document;if(o.type==="iframe"){b=a.createElement("iframe");b.setAttribute("height","1");b.setAttribute("width","1");b.setAttribute("style","display:none");b.setAttribute("src",o.src);}else if(o.type==="img"){utag.DB("Attach img: "+o.src);b=new Image();b.src=o.src;return;}else{b=a.createElement("script");b.language="javascript";b.type="text/javascript";b.async=1;b.charset="utf-8";b.src=o.src;}if(o.id){b.id=o.id;}if(typeof o.cb==="function"){if(b.addEventListener){b.addEventListener("load",function(){o.cb();},false);}else{b.onreadystatechange=function(){if(this.readyState==="complete"||this.readyState==="loaded"){this.onreadystatechange=null;o.cb();}};}}l=o.loc||"head";c=a.getElementsByTagName(l)[0];if(c){utag.DB("Attach to "+l+": "+o.src);if(l==="script"){c.parentNode.insertBefore(b,c);}else{c.appendChild(b);}}};}else{u.loader=utag.ut.loader;}
u.ev={'view':1};u.initialized=false;u.map={};u.extend=[function(a,b){if(VF_WA&&VF_WA.oVisitor&&VF_WA.oVisitor.loginStatus&&VF_WA.oVisitor.loginStatus.toLowerCase()=='authenticated'){setTimeout(function(){if(typeof(VF_WA.aNbaId)!=="undefined"){(function(){var _fbq=window._fbq||(window._fbq=[]);if(!_fbq.loaded){var fbds=document.createElement('script');fbds.async=true;fbds.src='//connect.facebook.net/en_US/fbds.js';var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(fbds,s);_fbq.loaded=true;}})();window._fbq=window._fbq||[];fbq('track','ViewContent',{content_name:'NBA-Offer',content_category:VF_WA.aNbaId,content_ids:VF_WA.aNbaId,content_type:'product',value:0.00,currency:'EUR'});}
},5000);}}];u.send=function(a,b){if(u.ev[a]||u.ev.all!==undefined){var c,d,e,f,i;u.data={};for(c=0;c<u.extend.length;c++){try{d=u.extend[c](a,b);if(d==false)return}catch(e){}};for(d in utag.loader.GV(u.map)){if(b[d]!==undefined&&b[d]!==""){e=u.map[d].split(",");for(f=0;f<e.length;f++){u.data[e[f]]=b[d];}}}
}};utag.o[loader].loader.LOAD(id);})("698","vodafone.nl-breakthrough");}catch(error){utag.DB(error);}
