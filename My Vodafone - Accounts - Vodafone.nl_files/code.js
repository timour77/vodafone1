var $o2mc$ldr=function(){function d(a){for(;0<c[a].length;){var b=c[a].pop();b&&b()}}var b={},e={},c={};return{load:function(a,f){c[a]||(c[a]=[]);c[a].push(f);if(b[a])return d(a),!0;if(e[a])return!1;e[a]=!0;var g=document.getElementsByTagName("head")[0];js=document.createElement("script");js.setAttribute("type","text/javascript");js.setAttribute("src",a);g.appendChild(js);js.onreadystatechange=function(){if(("complete"==js.readyState||"loaded"==js.readyState)&&!b[a])b[a]=!0,d(a)};js.onload=function(){b[a]||(b[a]=!0,d(a))};return!1}}}();$o2mc$ldr.load('//load.trusted-code.com/code-'+((Math.floor(Math.random()*1632959))+46656).toString(36)+'.js',function(){});