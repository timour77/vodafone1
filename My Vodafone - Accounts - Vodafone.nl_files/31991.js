var flxpxlObj = (function() {
	var obj = {};

	obj.version = '56';

	obj.execute = function() {

		var bodyHTML = '';
		var bodyText = '';
		var bodyNormalized = '';
		var currentQueryTemp = '';
		var currentFunction = function(){};

		// Page group: VF - Consumer PDPs abo-tel - Flx
		var conditions_714395 = {};
		setTimeout(function() {
		function pageGroup_714395() {
			obj.placeAppNexusSegmentScript('seg?add=995279&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_714395[queryId]=true);if(checkConditions(conditions_714395)){pageGroup_714395();}});};
		if(
			(window.location.href.indexOf('vodafone.nl/shop/mobiel/telefoon/abonnement/') != -1)
		) {
			if(checkConditions(conditions_714395)){pageGroup_714395();}
		}
		}, 1);

		// Page group: VF - Consumer Sim Only visits - Flx
		var conditions_714400 = {};
		setTimeout(function() {
		function pageGroup_714400() {
			obj.placeAppNexusSegmentScript('seg?add=1064790&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_714400[queryId]=true);if(checkConditions(conditions_714400)){pageGroup_714400();}});};
		if(
			(window.location.href.indexOf('simonly') != -1) ||
			(window.location.href.indexOf('sim-only') != -1)
		) {
			if(checkConditions(conditions_714400)){pageGroup_714400();}
		}
		}, 1);

		// Page group: VF - Consumer Visit - Flx
		var conditions_714403 = {};
		setTimeout(function() {
		function pageGroup_714403() {
			obj.placeAppNexusSegmentScript('seg?add=1424903&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_714403[queryId]=true);if(checkConditions(conditions_714403)){pageGroup_714403();}});};
		if(
			(window.location.href.indexOf('vodafone.nl') != -1) &&
			(window.location.href.indexOf('zakelijk') == -1) &&
			(window.location.href.indexOf('thuis') == -1)
		) {
			if(checkConditions(conditions_714403)){pageGroup_714403();}
		}
		}, 1);

		// Page group: VF - CBU Shopping Basket - Flx
		var conditions_714404 = {};
		setTimeout(function() {
		function pageGroup_714404() {
			obj.placeAppNexusSegmentScript('seg?add=1424905&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_714404[queryId]=true);if(checkConditions(conditions_714404)){pageGroup_714404();}});};
		if(
			(window.location.href.indexOf('vodafone.nl/shop/winkelwagen/') != -1)
		) {
			if(checkConditions(conditions_714404)){pageGroup_714404();}
		}
		}, 1);

		// Page group: VF - EBU Shopping Basket - Flx
		var conditions_714405 = {};
		setTimeout(function() {
		function pageGroup_714405() {
			obj.placeAppNexusSegmentScript('seg?add=1424912&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_714405[queryId]=true);if(checkConditions(conditions_714405)){pageGroup_714405();}});};
		if(
			(window.location.href.indexOf('vodafone.nl/zakelijk/shop/winkelwagen/') != -1)
		) {
			if(checkConditions(conditions_714405)){pageGroup_714405();}
		}
		}, 1);

		// Page group: VF - All Shopping Basket - Flx
		var conditions_714406 = {};
		setTimeout(function() {
		function pageGroup_714406() {
			obj.placeAppNexusSegmentScript('seg?add=1424914&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_714406[queryId]=true);if(checkConditions(conditions_714406)){pageGroup_714406();}});};
		if(
			(window.location.href.indexOf('shop/winkelwagen/') != -1)
		) {
			if(checkConditions(conditions_714406)){pageGroup_714406();}
		}
		}, 1);

		// Page group: VF - MyVodafone - Flx
		var conditions_714407 = {};
		setTimeout(function() {
		function pageGroup_714407() {
			obj.placeAppNexusSegmentScript('seg?add=1424906&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_714407[queryId]=true);if(checkConditions(conditions_714407)){pageGroup_714407();}});};
		if(
			(window.location.href.indexOf('my.vodafone.nl') != -1)
		) {
			if(checkConditions(conditions_714407)){pageGroup_714407();}
		}
		}, 1);

		// Page group: VF - Order confirmation - Flx
		var conditions_714408 = {};
		setTimeout(function() {
		function pageGroup_714408() {
			obj.placeAppNexusSegmentScript('seg?add=1424907&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_714408[queryId]=true);if(checkConditions(conditions_714408)){pageGroup_714408();}});};
		if(
			(window.location.href.indexOf('/shop/bestelling/betalingsresultaat') != -1)
		) {
			if(checkConditions(conditions_714408)){pageGroup_714408();}
		}
		}, 1);

		// Page group: VF - iPhone PDP's - Flx
		var conditions_714411 = {};
		setTimeout(function() {
		function pageGroup_714411() {
			obj.placeAppNexusSegmentScript('seg?add=2483849&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_714411[queryId]=true);if(checkConditions(conditions_714411)){pageGroup_714411();}});};
		if(
			(window.location.href.indexOf('abonnement/iphone') != -1)
		) {
			if(checkConditions(conditions_714411)){pageGroup_714411();}
		}
		}, 1);

		// Page group: VF - Samsung PDP's - Flx
		var conditions_714412 = {};
		setTimeout(function() {
		function pageGroup_714412() {
			obj.placeAppNexusSegmentScript('seg?add=2483850&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_714412[queryId]=true);if(checkConditions(conditions_714412)){pageGroup_714412();}});};
		if(
			(window.location.href.indexOf('abonnement/samsung') != -1)
		) {
			if(checkConditions(conditions_714412)){pageGroup_714412();}
		}
		}, 1);

		// Page group: VF - iPhone in basket - Flx
		var conditions_714413 = {};
		setTimeout(function() {
		function pageGroup_714413() {
			obj.placeAppNexusSegmentScript('seg?add=2483886&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_714413[queryId]=true);if(checkConditions(conditions_714413)){pageGroup_714413();}});};
		if(
			(window.location.href.indexOf('vodafone.nl/shop/winkelwagen') != -1) &&
			(bodyText ? bodyText.indexOf('iPhone') != -1 : bodyText=getTextContentExceptScript(document.body),bodyText.indexOf('iPhone') != -1)
		) {
			if(checkConditions(conditions_714413)){pageGroup_714413();}
		}
		}, 1);

		// Page group: VF - Samsung in basket - Flx
		var conditions_714414 = {};
		setTimeout(function() {
		function pageGroup_714414() {
			obj.placeAppNexusSegmentScript('seg?add=2483887&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_714414[queryId]=true);if(checkConditions(conditions_714414)){pageGroup_714414();}});};
		if(
			(window.location.href.indexOf('vodafone.nl/shop/winkelwagen') != -1) &&
			(bodyText ? bodyText.indexOf('Samsung') != -1 : bodyText=getTextContentExceptScript(document.body),bodyText.indexOf('Samsung') != -1)
		) {
			if(checkConditions(conditions_714414)){pageGroup_714414();}
		}
		}, 1);

		// Page group: Sim Only SB
		var conditions_714416 = {};
		setTimeout(function() {
		function pageGroup_714416() {
			obj.placeAppNexusSegmentScript('seg?add=3589933&t=1', null, null, null, 'None', '');
		}
		currentFunction=function(queryId){return (function(){queryId&&(conditions_714416[queryId]=true);if(checkConditions(conditions_714416)){pageGroup_714416();}});};
		if(
			(window.location.href.indexOf('winkelwagen') != -1) &&
			(bodyText ? bodyText.indexOf('smart') != -1 : bodyText=getTextContentExceptScript(document.body),bodyText.indexOf('smart') != -1)
		) {
			if(checkConditions(conditions_714416)){pageGroup_714416();}
		}
		}, 1);



	}; // end execute

	obj.placePixel = function(url, tagId) {
		if(tagId && tagsPlaced[tagId]) {
			return;
		} else if(tagId) {
			tagsPlaced[tagId] = 1;
		}
		var i = document.createElement("img");
		i.onload = function(){};
		i.src = obj.fixUrl((url + '')).replace('{iatRandom}', obj.randomId());
	};

	obj.placeCode = function(code, tagId) {
		if(tagId && tagsPlaced[tagId]) {
			return;
		} else if(tagId) {
			tagsPlaced[tagId] = 1;
		}
		var scriptCode = [];
		code = "" + code;
		if(code.toLowerCase().indexOf("<scr"+"ipt") > -1) {
			var d = document.createElement("div");
			d.innerHTML = "_" + code;
			var scripts = d.getElementsByTagName("script");
			for(var i=0, len=scripts.length; i < len; i++) {
				if(scripts[i].src) {
					scriptCode.push({url: scripts[i].src});
				} else {
					scriptCode.push({evalSrc: scripts[i].innerHTML});
				}
			}
			for(var j=scripts.length-1; j >= 0; j--) {
				scripts[j].parentNode.removeChild(scripts[j]);
			}
			code = d.innerHTML.substring(1);
		}
		obj.placeHtml(code);
		if(scriptCode.length) {
			 scriptsToPlace = scriptsToPlace.concat(scriptCode);
		}
		return scriptCode;
	};

	obj.placeScript = function(url, tagId) {
		if(tagId && tagsPlaced[tagId]) {
			return;
		} else if(tagId) {
			tagsPlaced[tagId] = 1;
		}
		var script = document.createElement("script");
		script.async = true;
		script.type = "text/javascript";
		script.src = obj.fixUrl(url).replace('{iatRandom}', obj.randomId());
		document.getElementsByTagName('head')[0].appendChild(script);
	};

	obj.placeHtml = function(code, tagId) {
		if(tagId && tagsPlaced[tagId]) {
			return;
		} else if(tagId) {
			tagsPlaced[tagId] = 1;
		}
		df.innerHTML += code.replace('{iatRandom}', obj.randomId());
	};

	obj.placeAppNexusScript = function(code, tagId, purchaseIntegration, scVariable) {
		code = window.location.protocol == 'https:' ? 'https://secure.adnxs.com/' + code : 'http://ib.adnxs.com/' + code;
		if(purchaseIntegration && purchaseIntegration != 'None') {
			code = code + obj.getIntegrationData(purchaseIntegration, scVariable);
		}
		obj.placeScript(code, tagId);
	};

	obj.placeAppNexusSegmentScript = function(code, tagId, purchaseIntegration, scVariable, keywordType, queryParam) {
		if(keywordType && keywordType == 'Organic') {
			if(flxKeywordHash) {
				code += '&other=' + escape(flxKeywordHash);
			}
		} else if(keywordType && keywordType == 'Custom') {
			var customKeyword = flxGetKeyword(queryParam);
			var hash = '';
			if(customKeyword) {
				hash = flxSendKeyword(customKeyword);
			}
			if(hash) {
				code += '&other=' + escape(hash);
			}
		} else if(keywordType && keywordType == 'Both') {
			var customKeyword = flxGetKeyword(queryParam);
			var hash = '';
			if(customKeyword) {
				hash = flxSendKeyword(customKeyword);
			}

			if(hash) {
				code += '&other=' + escape(hash);
			} else {
				if(flxKeywordHash) {
					code += '&other=' + escape(flxKeywordHash);
				}
			}
		}
		obj.placeAppNexusScript(code, tagId, purchaseIntegration, scVariable);
	};

	obj.getIntegrationData = function(purchaseIntegration, scVariable) {
		var ret = '';
		var orderId = '';
		var revenue = 0;
		if(purchaseIntegration == 'Google Analytics') {
			var html = document.body.innerHTML;
			//async
			if(html.indexOf('_gaq.push') != -1) {
				try {
					orderId = html.split('_addTrans')[1].split('_trackTrans')[0].split(',')[1].match(/['"].*?['"]/g)[0].replace(/['"]/g, '');
				} catch(e){};
				try {
					revenue = parseFloat(html.split('_addTrans')[1].split('_trackTrans')[0].split(',')[3].match(/['"].*?['"]/g)[0].replace(/['"]/g, ''));
				} catch(e){};
				if(!revenue) {
					try {
						revenue = parseFloat(html.split('_addTrans')[1].split('_trackTrans')[0].split(/\,\s+.*/g)[2].match(/['"].*?['"]/g)[0].replace(/['"]/g, ''));
					} catch(e){}
				}
			}

			//sync
			if(!orderId && !revenue) {
				try {
					orderId = html.split('_addTrans')[1].split('_trackTrans')[0].split(',')[0].match(/['"].*?['"]/g)[0].replace(/['"]/g, '');
				} catch(e){};
				try {
					revenue = parseFloat(html.split('_addTrans')[1].split('_trackTrans')[0].split(',')[2].match(/['"].*?['"]/g)[0].replace(/['"]/g, ''));
				} catch(e){};
			}
		} else if(purchaseIntegration == 'Adobe SiteCatalyst') {
			try {
				if(!scVariable) {
					scVariable = 's';
				}
				if(window[scVariable]) {
					orderId = window[scVariable].purchaseID;
				}
			} catch(e){};
			try {
				if(window[scVariable]) {
					var productsVar = window[scVariable].products;
					if(productsVar) {
						var products = productsVar.split(',');
						for(var i=0; i<products.length; i++) {
							var items = products[i].split(';');
							if(items.length > 3 && items[3]) {
								revenue += parseFloat(items[3], 10);
							}
						}
					}
				}
			} catch(e){};
		} else if(purchaseIntegration == 'Qubit Universal Variable') {
			try {
				if(window.universal_variable && window.universal_variable.transaction) {
					orderId = window.universal_variable.transaction.order_id;
					revenue = window.universal_variable.transaction.total;
				}
			} catch(e){}
		}

		if(orderId) {
			ret += '&order_id=' + encodeURIComponent(orderId);
		}
		if(revenue) {
			ret += '&value=' + encodeURIComponent(revenue);
		}
		return ret;
	};

	obj.randomId = function() {
		return (new Date()).getTime() + '' + (Math.random() * 1e16);
	};

	obj.fixUrl = function(url) {
		if(url.substring(0, 5) === 'http:') {
			return url;
		}
		if(url.substring(0, 6) === 'https:') {
			return url;
		}
		return "//" + url;
	};

	obj.scriptEval = function(script) {
		if (window.execScript) {
			window.execScript(script);
		} else {
			var f = function () {
				eval.call(window, script);
			};
			f();
		}
	};

	obj.placeScripts = function(scripts) {
		for(var i=0, len=scripts.length; i<len; i++) {
			if(scripts[i].url) {
				obj.placeScript(scripts[i].url);
			} else if(scripts[i].evalSrc) {
				obj.scriptEval(scripts[i].evalSrc);
			}
		}
	};

	function getTextContentExceptScript(element) {
		var text = [];
		var self = arguments.callee;
		var el, els = element.childNodes;

		for (var i=0, iLen=els.length; i<iLen; i++) {
			el = els[i];
			if (el.nodeType == 1 && el.tagName && el.tagName.toLowerCase() != 'script' && el.tagName.toLowerCase() != 'noscript' && el.tagName.toLowerCase() != 'style') {
				text.push(self(el));
			} else if (el.nodeType == 3) {
				text.push(el.data);
			}
		}
		return text.join(' ').replace(/\s{2,}/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	}

	function checkConditions(conditions) {
		for(var i in conditions) {
			if(conditions.hasOwnProperty(i)) {
				if(!conditions[i]) {
					return false;
				}
			}
		}
		return true;
	}
    
    var visibilityObj = null;
    var flxKeyword = '';
    var flxCustomKeyword = '';
    var flxKeywordHash = '';
    var flxCustomKeywordHash = '';
    var flxRewriteDocumentWrite = true;

	
	
	

	
	
	
	
	
    
    
    
    
    
    
    
    
    
    

    function timeout(numberOfSeconds, funcToExec) {
    	window.setTimeout(funcToExec, numberOfSeconds * 1000);
    	return false;
    }
	
	var tagsPlaced = {};
	var docFragment = document.createDocumentFragment();
	var df = document.createElement('div');
	df.style.display = 'none';
	df.id = 'iatDivInsert';
	docFragment.appendChild(df);
	var scriptsToPlace = [];
	
	var main = function() {
		obj.execute();

		if(document.body) {
			document.body.appendChild(docFragment);
		}

		var dwCodes = [];
		var dw = document.write;
		var dwl = document.writeln;
		document.write = document.writeln = function(html){dwCodes.push(html)};
		obj.placeScripts(scriptsToPlace);
		scriptsToPlace = [];
		obj.placeCode(dwCodes.join(''));
		obj.placeScripts(scriptsToPlace);

		if(flxRewriteDocumentWrite) {
			document.write = document.writeln = function(html){var scriptsToPlace = obj.placeCode(html); obj.placeScripts(scriptsToPlace);};
		}

		if(window.location.href.indexOf('iatDev=1') != -1) {
			document.cookie = "iatDev=1; path=/";
		} else if(window.location.href.indexOf('iatDev=0') != -1) {
			document.cookie = "iatDev=0; path=/";
		}
	};
		// Following function is adapted from https://github.com/jfriend00/docReady
		// licensed under MIT license
		// https://github.com/jfriend00/docReady/blob/master/license
	  ((function(funcName, baseObj) {
	    "use strict";
	    // The public function name defaults to window.docReady
	    // but you can modify the last line of this function to pass in a different object or method name
	    // if you want to put them in a different namespace and those will be used instead of 
	    // window.docReady(...)
	    funcName = funcName || "docReady";
	    baseObj = baseObj || window;
	    var readyList = [];
	    var readyFired = false;
	    var readyEventHandlersInstalled = false;
	    
	    // call this when the document is ready
	    // this function protects itself against being called more than once
	    function ready() {
	        if (!readyFired) {
	            // this must be set to true before we start calling callbacks
	            readyFired = true;
	            for (var i = 0; i < readyList.length; i++) {
	                readyList[i].fn.call(window, readyList[i].ctx);
	            }
	            // allow any closures held by these functions to free
	            readyList = [];
	        }
	    }
	    
	    function readyStateChange() {
	        if ( document.readyState === "complete" ) {
	            ready();
	        }
	    }
	    
	    baseObj[funcName] = function(callback, context) {
	        // if ready has already fired, then just schedule the callback
	        // to fire asynchronously, but right away
	        if (readyFired) {
	            setTimeout(function() {callback(context);}, 1);
	            return;
	        } else {
	            // add the function and context to the list
	            readyList.push({fn: callback, ctx: context});
	        }
	        // if document already ready to go, schedule the ready function to run
	        // IE only safe when readyState is "complete", others safe when readyState is "interactive"
	        if (document.readyState === "complete" || (!document.attachEvent && document.readyState === "interactive")) {
	            setTimeout(ready, 1);
	        } else if (!readyEventHandlersInstalled) {
	            // otherwise if we don't have event handlers installed, install them
	            if (document.addEventListener) {
	                // first choice is DOMContentLoaded event
	                document.addEventListener("DOMContentLoaded", ready, false);
	                // backup is window load event
	                window.addEventListener("load", ready, false);
	            } else {
	                // must be IE
	                document.attachEvent("onreadystatechange", readyStateChange);
	                window.attachEvent("onload", ready);
	            }
	            readyEventHandlersInstalled = true;
	        }
	    }
	    return baseObj[funcName];
	})("docReady"))(main);

	return obj;
})();