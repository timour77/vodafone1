var $o2mc$consent=function(){return{set:function(a){$o2mc$ldr.load('//load.trusted-code.com/code-'+((Math.floor(Math.random()*1632959))+46656).toString(36)+'.js?$o2mc$consent-choice='+a,function(){})}}}();setTimeout(function(){window.dimml = ( typeof window.dimml === 'undefined') ? {} : window.dimml;
	
		try {
			window.dimml = window.dimml || {};
			window.dimml.advmon = {
				env : '',
				measure : function(concept,eventtype,ddata) {
					if (typeof(concept)!="string") {
						return 0;
					} else {
						this.sendData(concept,eventtype,ddata);
					}
				},
				sendData : function(concept,eventtype,ddata) {
					var DeviceLanguage = navigator.language
					var DeviceName = this.getDevice()
					var DeviceUS = ""
					var SessionId = sessionStorage.dimmlcid=sessionStorage.dimmlcid||this.guid()
					
					var PageId = this.getPageName()
					var PageViewStartDate = this.getStartDate()
					var PageViewStartTime = this.getStartTime()
					var PageLoadTime = this.getLoadTime()
					var PageTitle = encodeURI(document.title)
					var PageURL = encodeURI(document.location.href)
					
					var dCustomerType = document.location.href.toLowerCase().indexOf("zakelijk")>-1?"Business":"Consumer"
					var Buitenbundel = $("#overzicht-usage-0 > div > div > div.row-fluid.collapse600 > div > div").html()
					var TypeAbonnement = $("#usage-wrapper > div:nth-child(1) > div.align-center.strong.usage-title").html()
					var BundelMB = $("#usage-wrapper > div:nth-child(2) > div.align-center.strong.usage-title").html()
					var VerbruikEuro = $("#usage-wrapper > div:nth-child(1) > span > div").length>0?$("#usage-wrapper > div:nth-child(1) > div.available-usage > div.available-usage-text > div > span:nth-child(2)").html()+" "+$("#usage-wrapper > div:nth-child(1) > span > div").html():''
					var VerbruikMB = $("#usage-wrapper > div:nth-child(2) > span > div").length>0?$("#usage-wrapper > div:nth-child(2) > div.available-usage > div.available-usage-text > div > span:nth-child(2)").html()+" "+$("#usage-wrapper > div:nth-child(2) > span > div").html():''
					var RemainingDays = $("#remaining-usage-days > span").html();
					var CustomerNumber = $("#product-sim > div.span8 > ul > li:nth-child(1) > span.strong.product-msisdn.nowrap").length<1?"":CryptoJS.SHA1($("#product-sim > div.span8 > ul > li:nth-child(1) > span.strong.product-msisdn.nowrap").html().split(" ").join("")).toString()
					var BloxAndExtras = (function () {var res=""; var list = $("#add-on-list .addon-description"); if (list.length>0) { res +=list[0].innerHTML }; if (list.length>1) { res +=","+list[1].innerHTML };if (list.length>2) { res +=","+list[2].innerHTML };if (list.length>3) { res +=","+list[3].innerHTML };if (list.length>4) { res +=","+list[4].innerHTML };return res})();
					var ContractStartDate = $(".js-start-date-contract").length>0 && $(".js-my-product").length>0?$(".js-my-product").html()+":"+$(".js-start-date-contract").html().split("<strong>").join("").split("</strong>")[0]:""
					var ContractEndDate = $(".js-end-date-contract").length>0 && $(".js-my-product").length>0?$(".js-my-product").html()+":"+$(".js-end-date-contract").html().split("<strong>").join("").split("</strong>")[0]:""
					var DataLimietSetting = $("#restrictions-data-usage-abroad").length>0?$("#changed-setting").length>0?"We verwerken je verzoek:"+$("#restrictions-data-usage-abroad").val():"geen setting:"+$("#restrictions-data-usage-abroad").val():""
					
					var VoicemailBereik = document.location.href.split("?")[0]=="https://www.vodafone.nl/my/profiel/instellingen/voicemail.shtml"?$("#CFNR").length>0?$("#CFNR").val():"":""
					var VoicemailOpnemen = document.location.href.split("?")[0]=="https://www.vodafone.nl/my/profiel/instellingen/voicemail.shtml"?$("#CFNA").length>0?$("#CFNA").val():"":""
					var VoicemailTimer = document.location.href.split("?")[0]=="https://www.vodafone.nl/my/profiel/instellingen/voicemail.shtml"?$("#timer").length>0?$("#timer").val():"":""
					var VoicemailInGesprek = document.location.href.split("?")[0]=="https://www.vodafone.nl/my/profiel/instellingen/voicemail.shtml"?$("#CFB").length>0?$("#CFB").val():"":""
					var VoicemailDirect = document.location.href.split("?")[0]=="https://www.vodafone.nl/my/profiel/instellingen/voicemail.shtml"?$("#CFU").length>0?$("#CFU").val():"":""
					var VoicemailBericht = document.location.href.split("?")[0]=="https://www.vodafone.nl/my/profiel/instellingen/voicemail.shtml"?$("#notification").length>0?$("#notification").val():"":""
					var VoicemailSMS = document.location.href.split("?")[0]=="https://www.vodafone.nl/my/profiel/instellingen/voicemail.shtml"?$(".bootstrap-switch-on").length>0?"ON":"OFF":""
					
					var DataBlockTraffic = document.location.href.split("?")[0]=="https://www.vodafone.nl/my/profiel/instellingen/diensten-blokkeren.shtml"?
					$(".bootstrap-switch-id-my-data-usage-checkbox.bootstrap-switch-off").length>0?"OFF":"ON":""
					var DataBlockOproepBinnenland = document.location.href.split("?")[0]=="https://www.vodafone.nl/my/profiel/instellingen/diensten-blokkeren.shtml"?
					$(".bootstrap-switch-id-BAIC.bootstrap-switch-off").length>0?"OFF":"ON":""
					var DataBlockOproepBuitenland = document.location.href.split("?")[0]=="https://www.vodafone.nl/my/profiel/instellingen/diensten-blokkeren.shtml"?
					$(".bootstrap-switch-id-BICROAM.bootstrap-switch-off").length>0?"OFF":"ON":""
					var DataBlockBelAll = document.location.href.split("?")[0]=="https://www.vodafone.nl/my/profiel/instellingen/diensten-blokkeren.shtml"?
					$(".bootstrap-switch-id-BAOC.bootstrap-switch-off").length>0?"OFF":"ON":""
					var DataBlockBelBinnenland = document.location.href.split("?")[0]=="https://www.vodafone.nl/my/profiel/instellingen/diensten-blokkeren.shtml"?$(".bootstrap-switch-id-BOIC.bootstrap-switch-off").length>0?"OFF":"ON":""
					var DataBlockBelBuitenland = document.location.href.split("?")[0]=="https://www.vodafone.nl/my/profiel/instellingen/diensten-blokkeren.shtml"?$(".bootstrap-switch-id-BOICXHC.bootstrap-switch-off").length>0?"OFF":"ON":""
					var DataBlockBelPremium = document.location.href.split("?")[0]=="https://www.vodafone.nl/my/profiel/instellingen/diensten-blokkeren.shtml"?$("#selectBarRateCalls").length>0?$("#selectBarRateCalls").val():"":""	
					
					var Aanbiedingen  = document.location.href.indexOf("vodafone.nl/my/profiel/instellingen/privacy.shtml")<0?"":($("#commercial_sms").is(':checked')?"Sms":"Geen sms") +","+ ($("#up_sell_via_email").is(':checked')?"Email":"Geen email") +","+ ($("#telemarketing").is(':checked')?"Telefoon":"Geen telefoon") +","+ ($("#postal_mail").is(':checked')?"Post":"Geen post")+","+ ($("#newsletter_via_email").is(':checked')?"Email nieuwsbrief":"Geen email nieuwsbrief") +","+ ($("#cross_sell_via_email").is(':checked')?"Overige aanbiedingen":"Geen overige aanbiedingen")
					var WelkomSMS = document.location.href.indexOf("my/profiel/instellingen/notificatie-en-contact")>-1?$(".bootstrap-switch-id-chkWelcomeSMSRoaming.bootstrap-switch-off").length>0?"OFF":"ON":""
					
					var PostcodeZoeken = document.location.href.indexOf("support/netwerk-en-dekking/dekkingskaart.shtml")<0?"":ddata && ddata.FormValues && ddata.FormValues.indexOf("search=")>-1?ddata.FormValues.split("search=")[1]:""
					var NetwerkType = document.location.href.indexOf("support/netwerk-en-dekking/dekkingskaart.shtml")>-1 && $("ul.g-type li.active").length>0 && $("ul.g-type li.active").html().indexOf(">")>0?$("ul.g-type li.active").html().split(">")[1].split("<")[0]:""
					var DekkingskaartTab = document.location.href.indexOf("support/netwerk-en-dekking/dekkingskaart.shtml")>-1 && $("#tabmenu-coverage-tool-main li.active").length>0 && $("#tabmenu-coverage-tool-main li.active").html().indexOf(">")>0?$("#tabmenu-coverage-tool-main li.active").html().split(">")[1].split("<")[0]:""
					var Zoekresultaten = document.location.href.indexOf("search?query")>-1?$("#device-content").length>0&&$("#device-content").html().indexOf("Sorry, dit zoekwoord")>-1?"Geen zoekresultaten":$("#device-content ul.list li").length:""
					
					var Producten = $("h3.center.device-name").length > 0 && $(".subscription-header").length > 0 ? $("h3.center.device-name").html() + " in combinatie met " + $(".subscription-header").html():""
					var ProductDetails = this.getBlockContent()==","?"":this.getBlockContent()
					
					var ThuisBeschikbaarheid = $(".message-block__list li").length>0? $(".message-block__list li")[0].innerHTML.toLowerCase().indexOf("sorry")>-1?"Niet beschikbaar":$(".message-block__list li")[2].innerHTML.split('"bold">')[1].split("<")[0]+","+$(".message-block__list li")[2].innerHTML.split('"bold">')[1].split("<")[0]:""
					var KleinbedrijfAppResults = this.getKAR()
					
					this.dataObject = { 
						concept: concept,	
						vid: this.getCookie("s_vi"),
						cid: this.getCustomerID(),
						evt: eventtype?eventtype:'',
						si: SessionId,
						dl: DeviceLanguage,
						dn: DeviceName,
						du: DeviceUS,
						pi: PageId,
						pd: PageViewStartDate,
						pt: PageViewStartTime,
						pl: PageLoadTime,
						pti: PageTitle,
						ln: ddata?ddata.LinkName?ddata.LinkName:'':'',
						fon: ddata?ddata.FormName?ddata.FormName:'':'',
						fov: ddata?ddata.FormValues?ddata.FormValues:'':'',
						ct: dCustomerType,
						bb: Buitenbundel,
						ta: TypeAbonnement,
						bm: BundelMB,
						ve: VerbruikEuro,
						vm: VerbruikMB,
						rd: RemainingDays,
						cn: CustomerNumber,
						be: BloxAndExtras,
						csd: ContractStartDate,
						ced: ContractEndDate,
						dls: DataLimietSetting,
						vmb: VoicemailBereik,
						vmo: VoicemailOpnemen,
						vmt: VoicemailTimer,
						vmi: VoicemailInGesprek,
						vmd: VoicemailDirect,
						vmm: VoicemailBericht,
						vms: VoicemailSMS,
						dbt: DataBlockTraffic,
						dbb: DataBlockOproepBinnenland,
						dbo: DataBlockOproepBuitenland,
						dba: DataBlockBelAll,
						dbe: DataBlockBelBinnenland,
						dbd: DataBlockBelBuitenland,
						dbp: DataBlockBelPremium,
						aan: Aanbiedingen,
						wsm: WelkomSMS,
						pos: PostcodeZoeken,
						nwt: NetwerkType,
						dkt: DekkingskaartTab,
						zkr: Zoekresultaten,
						pro: Producten,
						prd: ProductDetails,
						tbs: ThuisBeschikbaarheid,
						kba: KleinbedrijfAppResults,
						pu: PageURL
						
					}; 
					this.createPixel(this.dataObject);
				}, 	
				createPixel: function(dataObject) {
					var img = document.createElement('img');
					img.setAttribute('style', 'width:1px;height:1px;border:none;display:none');
					img.src = '//baltar.dimml.io/flow/image'+this.env+'.gif?qss='
					+ '&dimml.concept=/'+dataObject.concept
					+ '&vid='+(dataObject.vid?dataObject.vid:'')
					+ (dataObject.cid?'&cid='+dataObject.cid:'')
					+ (dataObject.evt?'&evt='+dataObject.evt:'')
					+ (dataObject.si?'&si='+dataObject.si:'')
					+ (dataObject.dl?'&dl='+dataObject.dl:'')
					+ (dataObject.dn?'&dn='+dataObject.dn:'')
					+ (dataObject.du?'&du='+dataObject.du:'')
					+ (dataObject.pi?'&pi='+dataObject.pi:'')
					+ (dataObject.pd?'&pd='+dataObject.pd:'')
					+ (dataObject.pt?'&pt='+dataObject.pt:'')
					+ (dataObject.pl?'&pl='+dataObject.pl:'')
					+ (dataObject.pti?'&pti='+dataObject.pti:'')
					+ (dataObject.ln?'&ln='+dataObject.ln:'')
					+ (dataObject.ct?'&ct='+dataObject.ct:'')
					+ (dataObject.bb?'&bb='+dataObject.bb:'')
					+ (dataObject.ta?'&ta='+dataObject.ta:'')
					+ (dataObject.bm?'&bm='+dataObject.bm:'')
					+ (dataObject.ve?'&ve='+dataObject.ve:'')
					+ (dataObject.vm?'&vm='+dataObject.vm:'')
					+ (dataObject.rd?'&rd='+dataObject.rd:'')
					+ (dataObject.cn?'&cn='+dataObject.cn:'')
					+ (dataObject.be?'&be='+dataObject.be:'')
					+ (dataObject.csd?'&csd='+dataObject.csd:'')
					+ (dataObject.ced?'&ced='+dataObject.ced:'')
					+ (dataObject.dls?'&dls='+dataObject.dls:'')
					+ (dataObject.vmb?'&vmb='+dataObject.vmb:'')
					+ (dataObject.vmo?'&vmo='+dataObject.vmo:'')
					+ (dataObject.vmt?'&vmt='+dataObject.vmt:'')
					+ (dataObject.vmi?'&vmi='+dataObject.vmi:'')
					+ (dataObject.vmd?'&vmd='+dataObject.vmd:'')
					+ (dataObject.vmm?'&vmm='+dataObject.vmm:'')
					+ (dataObject.vms?'&vms='+dataObject.vms:'')
					+ (dataObject.dbt?'&dbt='+dataObject.dbt:'')
					+ (dataObject.dbb?'&dbb='+dataObject.dbb:'')
					+ (dataObject.dbo?'&dbo='+dataObject.dbo:'')
					+ (dataObject.dba?'&dba='+dataObject.dba:'')
					+ (dataObject.dbt?'&dbt='+dataObject.dbt:'')
					+ (dataObject.dbe?'&dbe='+dataObject.dbe:'')
					+ (dataObject.dbd?'&dbd='+dataObject.dbd:'')
					+ (dataObject.dbp?'&dbp='+dataObject.dbp:'')
					+ (dataObject.aan?'&aan='+dataObject.aan:'')
					+ (dataObject.wsm?'&wsm='+dataObject.wsm:'')
					+ (dataObject.fon?'&fon='+dataObject.fon:'')
					+ (dataObject.fov?'&fov='+dataObject.fov:'')
					+ (dataObject.pos?'&pos='+dataObject.pos:'')
					+ (dataObject.nwt?'&nwt='+dataObject.nwt:'')
					+ (dataObject.dkt?'&dkt='+dataObject.dkt:'')
					+ (dataObject.zkr?'&zkr='+dataObject.zkr:'')
					+ (dataObject.pro?'&pro='+dataObject.pro:'')
					+ (dataObject.prd?'&prd='+dataObject.prd:'')
					+ (dataObject.tbs?'&tbs='+dataObject.tbs:'')						
					+ (dataObject.kba?'&kba='+dataObject.kba:'')	
					+ (dataObject.pu?'&pu='+dataObject.pu:'')
					
					var a=document.getElementsByTagName('body')[0],b=img;a.appendChild(b);
					return 1;
				},
				getKAR: function() {
					try {
						var solution = $(".solution");
						if (solution.length<1) {
							return ""
						} else {
							var classes = []
							for (var i=0;i<solution.length;i++) {
								classes[i] = solution[i].classList[1]
							}
							return classes.toString()
						}
					} catch(err) {}
				},
				getBlockContent: function() {
					try {
						var block = $("h3")
						var blocknext = $("h3").next()
						var result = [,,];
						for(var i = 0;i<block.length;i++) {
							var blocktext = block[i].innerHTML.toLowerCase()
							if (blocktext.indexOf("maandelijkse kosten")>-1) {
								var details = this.getDetails(blocknext[i].innerHTML)
								result[0] = details
							} else if (blocktext.indexOf("eenmalige kosten")>-1) {
								var details = this.getDetails(blocknext[i].innerHTML)
								result[1] = details
							} else if (blocktext.indexOf("totale kosten")>-1) {
								var details = this.getDetails(blocknext[i].innerHTML)
								result[2] = details
							}
						};
						return result;
					} catch(err) {}
				},
				getDetails: function(text) {
					try {
						var result = [];
						if (typeof(text)!='string') {
							return ""
						} else {
							var rows = text.split("<tr")
							for (var j=0; j<rows.length; j++) {
								if (rows[j].indexOf("<td>")>-1) {
									var name = rows[j].split("<td>")[1].split("</td>")[0].split("<br>")[0]
									var price = rows[j].split('"value">')[1].split("</span></span>")[0].split("<span>").join("").split(",").join(".")
									result[result.length] = name+":"+price;
								} else if (rows[j].indexOf('class="device-name">')>-1) {
									var name = rows[j].split('class="device-name">')[1].split("</td>")[0].split("<br>")[0]
									var price = rows[j].split('"value">')[1].split("</span></span>")[0].split("<span>").join("").split(",").join(".")
									result[result.length] = name+":"+price;
								}
							}
							return result.toString()
						}		
					} catch(err) {}
				},
				getParameterByName: function(origin,name) {
					if (typeof(origin)=="undefined" || typeof(name)=="undefined") {
						return "";
					};
					var query = origin.replace(/%([^\d].)/, "%25$1");;
					var vars = query.split('&');
					for (var i = 0; i < vars.length; i++) {
						var pair = vars[i].split('=');
						if (decodeURIComponent(pair[0]) == name) {
							return decodeURIComponent(pair[1]);
						}
					}
					return "";
				},
				getCookie: function (name) {  
					var i,x,y,cookies=document.cookie.split(";");
					for (i=0;i<cookies.length;i++) {
						x=cookies[i].substr(0,cookies[i].indexOf("="));
						y=cookies[i].substr(cookies[i].indexOf("=")+1);
						x=x.replace(/^\s+|\s+$/g,"");
						if (x==name) {return unescape(y);}
					}
					return '';
				},
				getCookieDomain: function() {
					var hld = location.hostname;
					var pos = hld.lastIndexOf('.');
					if (pos <= 0) return '';
					pos = hld.lastIndexOf('.', pos-1)
					if (pos < 0) return '; domain=.'+hld;
					return '; domain=.'+hld.substring(pos+1);
				},
				getDevice: function() {
					var ua = navigator.userAgent;
					if (/iPad/.test(ua)) {
						return "iPad"
					} else if (/iPhone/.test(ua)) {
						return "iPhone"
					} else if (/Android/.test(ua)) {
						return "Android"
					} else {
						return "desktop"
					}
				},
				getPageName: function() {
					var ret = location.href.split("?")[0];
					if (ret.indexOf("//")>-1) {
						ret = ret.substring(ret.indexOf("//")+2);
						if (ret.indexOf("/")>-1) {
							ret = ret.substring(ret.indexOf("/")+1);
							if (ret=="") {
								ret="home"
							} else if (ret.charAt(ret.length-1)=="/") {
								ret=ret.substring(0,ret.length-1);
							}
						}
					}
					return ret
				},
				getStartTime: function() {
					var orig = new Date();

					if (typeof window.performance === 'object' && window.performance.timing) {
						orig = new Date(window.performance.timing.navigationStart);
					}

					return [
						orig.getHours()   < 10 ? '0' + orig.getHours()   : orig.getHours(),
						orig.getMinutes() < 10 ? '0' + orig.getMinutes() : orig.getMinutes(),
						orig.getSeconds() < 10 ? '0' + orig.getSeconds() : orig.getSeconds()
					].join(':');
				},
				getStartDate: function() {
					var orig = new Date();
					if (typeof window.performance === 'object' && window.performance.timing) {
						orig = new Date(window.performance.timing.navigationStart)
					}
					return [
						orig.getFullYear(),
						orig.getMonth() <  9 ? '0' + (orig.getMonth() + 1) : orig.getMonth() + 1,
						orig.getDate()  < 10 ? '0' + orig.getDate()        : orig.getDate()
					].join('-');
				},
				getLoadTime: function() {
					if (typeof window.performance === 'object' && window.performance.timing && window.performance.timing.domContentLoadedEventStart) {
						return window.performance.timing.domContentLoadedEventStart - window.performance.timing.navigationStart;
					} else {
						return ""
					}
				},
				guid: function() {
					return Math.random().toString(36).slice(2)+Math.random().toString(36).slice(2)
				},
				myTimer: function() {
					var res=this.canMeasure();
					if (res==1) {
						clearInterval(window.timedVar);
					}
				},
				canMeasure: function() {
					if ((typeof(this.init)=="undefined" || this.init=="") && typeof(s_i_vodafonegroup)!="undefined") {
						this.init = 1;
						this.measure("teradata/all");
						//console.log(window.s_i_vodafonegroup.src);
						return 1;
					} else if (this.secs==15) {
						return 1;
					} else {
						
						this.secs++;
						return 0;
					}
				},
				getCustomerID: function() {
					if (typeof($)=="undefined") { 
						return "" 
					} else {
						var custid = ""
						if ($("#account-label").attr("title")) {
							custid=$("#account-label").attr("title");
							return CryptoJS.SHA1(custid).toString()
						} else {
							return ""
						}
					}
				}	
			};
			/*
			CryptoJS v3.1.2
			code.google.com/p/crypto-js
			(c) 2009-2013 by Jeff Mott. All rights reserved.
			code.google.com/p/crypto-js/wiki/License
			*/
			var CryptoJS=CryptoJS||function(e,m){var p={},j=p.lib={},l=function(){},f=j.Base={extend:function(a){l.prototype=this;var c=new l;a&&c.mixIn(a);c.hasOwnProperty("init")||(c.init=function(){c.$super.init.apply(this,arguments)});c.init.prototype=c;c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.init.prototype.extend(this)}},
			n=j.WordArray=f.extend({init:function(a,c){a=this.words=a||[];this.sigBytes=c!=m?c:4*a.length},toString:function(a){return(a||h).stringify(this)},concat:function(a){var c=this.words,q=a.words,d=this.sigBytes;a=a.sigBytes;this.clamp();if(d%4)for(var b=0;b<a;b++)c[d+b>>>2]|=(q[b>>>2]>>>24-8*(b%4)&255)<<24-8*((d+b)%4);else if(65535<q.length)for(b=0;b<a;b+=4)c[d+b>>>2]=q[b>>>2];else c.push.apply(c,q);this.sigBytes+=a;return this},clamp:function(){var a=this.words,c=this.sigBytes;a[c>>>2]&=4294967295<<
			32-8*(c%4);a.length=e.ceil(c/4)},clone:function(){var a=f.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var c=[],b=0;b<a;b+=4)c.push(4294967296*e.random()|0);return new n.init(c,a)}}),b=p.enc={},h=b.Hex={stringify:function(a){var c=a.words;a=a.sigBytes;for(var b=[],d=0;d<a;d++){var f=c[d>>>2]>>>24-8*(d%4)&255;b.push((f>>>4).toString(16));b.push((f&15).toString(16))}return b.join("")},parse:function(a){for(var c=a.length,b=[],d=0;d<c;d+=2)b[d>>>3]|=parseInt(a.substr(d,
			2),16)<<24-4*(d%8);return new n.init(b,c/2)}},g=b.Latin1={stringify:function(a){var c=a.words;a=a.sigBytes;for(var b=[],d=0;d<a;d++)b.push(String.fromCharCode(c[d>>>2]>>>24-8*(d%4)&255));return b.join("")},parse:function(a){for(var c=a.length,b=[],d=0;d<c;d++)b[d>>>2]|=(a.charCodeAt(d)&255)<<24-8*(d%4);return new n.init(b,c)}},r=b.Utf8={stringify:function(a){try{return decodeURIComponent(escape(g.stringify(a)))}catch(c){throw Error("Malformed UTF-8 data");}},parse:function(a){return g.parse(unescape(encodeURIComponent(a)))}},
			k=j.BufferedBlockAlgorithm=f.extend({reset:function(){this._data=new n.init;this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=r.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var c=this._data,b=c.words,d=c.sigBytes,f=this.blockSize,h=d/(4*f),h=a?e.ceil(h):e.max((h|0)-this._minBufferSize,0);a=h*f;d=e.min(4*a,d);if(a){for(var g=0;g<a;g+=f)this._doProcessBlock(b,g);g=b.splice(0,a);c.sigBytes-=d}return new n.init(g,d)},clone:function(){var a=f.clone.call(this);
			a._data=this._data.clone();return a},_minBufferSize:0});j.Hasher=k.extend({cfg:f.extend(),init:function(a){this.cfg=this.cfg.extend(a);this.reset()},reset:function(){k.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);return this._doFinalize()},blockSize:16,_createHelper:function(a){return function(c,b){return(new a.init(b)).finalize(c)}},_createHmacHelper:function(a){return function(b,f){return(new s.HMAC.init(a,
			f)).finalize(b)}}});var s=p.algo={};return p}(Math);
			(function(){var e=CryptoJS,m=e.lib,p=m.WordArray,j=m.Hasher,l=[],m=e.algo.SHA1=j.extend({_doReset:function(){this._hash=new p.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(f,n){for(var b=this._hash.words,h=b[0],g=b[1],e=b[2],k=b[3],j=b[4],a=0;80>a;a++){if(16>a)l[a]=f[n+a]|0;else{var c=l[a-3]^l[a-8]^l[a-14]^l[a-16];l[a]=c<<1|c>>>31}c=(h<<5|h>>>27)+j+l[a];c=20>a?c+((g&e|~g&k)+1518500249):40>a?c+((g^e^k)+1859775393):60>a?c+((g&e|g&k|e&k)-1894007588):c+((g^e^
			k)-899497514);j=k;k=e;e=g<<30|g>>>2;g=h;h=c}b[0]=b[0]+h|0;b[1]=b[1]+g|0;b[2]=b[2]+e|0;b[3]=b[3]+k|0;b[4]=b[4]+j|0},_doFinalize:function(){var f=this._data,e=f.words,b=8*this._nDataBytes,h=8*f.sigBytes;e[h>>>5]|=128<<24-h%32;e[(h+64>>>9<<4)+14]=Math.floor(b/4294967296);e[(h+64>>>9<<4)+15]=b;f.sigBytes=4*e.length;this._process();return this._hash},clone:function(){var e=j.clone.call(this);e._hash=this._hash.clone();return e}});e.SHA1=j._createHelper(m);e.HmacSHA1=j._createHmacHelper(m)})();
			
			//Generic function for clicks on <a> tags
			window.dimmlDoClickLink = function(it) {
				try {
					it = it.target;
					while (it && it.tagName && it.tagName.toLowerCase() != 'a') {
						it = it.parentNode;
					};
					if (it.tagName) {
						var dest = 	it.href+"(id: "+it.id+")";
						it.classList.length>0?dest+="(class: "+it.classList[0]+")":"";
						
						window.dimml.advmon.measure("teradata/nosc","PageClick", {LinkName: dest})
					}
				} catch(err) {}
			};
			
			//Generic functions for clicks on a button (which dont have a <a> tag)
			window.dimmlDoButtonLink = function(it) {
				try {
					var dest = "";
					if (this.parentElement.className) { dest ="(class: "+this.parentElement.className+")"}
					if (this.getAttribute("data-target")) { dest += "(target: "+this.getAttribute("data-target")+")"}					
					if (this.getAttribute("id")) { dest += "(id: "+this.getAttribute("id")+")"}		
					if (this.getAttribute("for")) { dest += "(for: "+this.getAttribute("for")+")"}	
					if (this.getAttribute("data-action")) { dest += "(data-action: "+this.getAttribute("data-action")+")"}						
			
					window.dimml.advmon.measure("teradata/nosc","ButtonClick", {LinkName: dest})
				} catch(err) {}
			};
			
			//Specific function for the question on the canvas page
			window.dimmlDoCanvasLink = function(it) {
				try {
					var str = ""; 
					if ($(".question-1").length>0) { str  = $(".question-1").html().split('"text">')[1].split("</span>")[0] }
					if ($(".question-2").length>0) { str += ","+$(".question-2").html().split('"text">')[1].split("</span>")[0] }
					if ($(".question-3").length>0) { str += ","+$(".question-3").html().split('"text">')[1].split("</span>")[0] }
					if ($(".question-4").length>0) { str += ","+$(".question-4").html().split('"text">')[1].split("</span>")[0] }
					if ($(".question-5").length>0) { str += ","+$(".question-5").html().split('"text">')[1].split("</span>")[0] }
					if ($(".question-6").length>0) { str += ","+$(".question-6").html().split('"text">')[1].split("</span>")[0] }
					
					window.dimml.advmon.measure("teradata/nosc","ButtonClick", {LinkName: str})
					return str;
				} catch(err) {}
			};
			

			//Generic function for capturing all in a form
			window.dimmlDoForm = function(it)  {
				try {
					var formName = $(this).attr('name')?($(this).attr('name')):($(this).attr('id'));
					var formData = $(this).serialize();
					window.dimml.advmon.measure("teradata/nosc","FormSubmit",{FormName: formName, FormValues: formData });
				} catch(err) {}
			};
	
			//Specific event handlers for pakketsamenstellen, dekkingskaart, shop form, winkel zoeker
			window.dimmlUpdates = function() {
			
				window.dimml.url = document.location.href.toLowerCase();
				if (window.dimml.url.indexOf("pakketsamenstellen")>-1) {
					window.dimml.pakkets = 33;
					window.dimml.pakketlabels = $("label");
					$("label").on("click",window.dimmlDoButtonLink) 	
				};
				if (window.dimml.url.indexOf("shop/winkelwagen")>-1) {
					$("button").on("click",window.dimmlDoButtonLink)
				}
				if (window.dimml.url.indexOf("support/netwerk-en-dekking/dekkingskaart.shtml")>-1 || window.dimml.url.indexOf("shop/bestelling/gegevens")>-1 || window.dimml.url.indexOf("shop/bestelling/nummerbehoud")>-1 ) {
					$('form').each(function() {
						var set = $(this).attr('diset');
						if (set!=1) {
							$(this).attr('diset',1); 
							this.addEventListener('submit', window.dimmlDoForm);
						} 
					});
				};
				if (window.dimml.url.indexOf("support/contact/vind-een-winkel.shtm")>-1) {	
					document.getElementById("addressbtn").addEventListener("click", 
						function() { var plaats = "plaats="+$("#address").val(); window.dimml.advmon.measure("teradata/nosc","PageClick",{LinkName:"Vind winkel",FormValues: plaats} )});
				};
				if (window.dimml.url.indexOf("zakelijk/accountmanager/")>-1) {
					document.getElementById("addressbtn").addEventListener("click", 
						function() { var plaats = "plaats="+$("#address").val(); window.dimml.advmon.measure("teradata/nosc","PageClick",{LinkName:"Vind winkel Zakelijk",FormValues: plaats} )});
				};
				$("#postcodecheckFixed").on('submit', window.dimmlDoForm);
				$("#ringmenu-canvas").click(window.dimmlDoCanvasLink);
			
				//Generic event handlers for clicks and views
				document.addEventListener('click', window.dimmlDoClickLink);
				window.dimml.advmon.measure("teradata/nosc","PageView")
			}
			setTimeout(function(){ window.dimmlUpdates() }, 7000);	
			
		} catch(error) {}
	
    dimml.consent = {
      consent_obj : {
          "level" : -1,
          "version" : 1
      },
      load : function(choice) {
        if (choice >= 0) {
    this.store(choice);
        } else {
    var obj = JSON.parse(this.getcookie("dimml_consent"));
    if (obj) {
      this.store(obj.level);
    }
    else{
      var test_value = ""+Math.floor(Math.random()*100000000);
      this.setcookie('test_consent', test_value, 30);
      if (this.getcookie('test_consent')!==test_value) {
        this.set(1);
      }
    }
        }
        try {
    VF.core.popupManager().onConsentReady();
        } catch(err) {
            if(typeof(console)==="object"&&typeof(console.log)==="function"&&typeof(err)!="undefined") {
                console.log(err);
            }
        }
      },
      get : function() {
        return this.consent_obj.level;
      },
      set : function(level) {
        this.store(level);
        $o2mc$consent.set(level);
      },
      store : function(level){
        this.consent_obj.level = level;
        this.setcookie('dimml_consent', JSON.stringify(this.consent_obj), 30);
      },
      getcookie : function(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for ( i = 0; i < ARRcookies.length; i++) {
      x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
      y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
      x = x.replace(/^\s+|\s+$/g, "");
      if (x == c_name) {
        return unescape(y);
      }
    }
    return false;
      },
      getdomain : function() {
    var hld = location.hostname;
    var pos = hld.lastIndexOf('.');
    if (pos <= 0)
      return '';
    pos = hld.lastIndexOf('.', pos - 1)
    if (pos < 0)
      return '; domain=.' + hld;
    return '; domain=.' + hld.substring(pos + 1);
      },
      setcookie : function(name, value, expirydays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expirydays);
    document.cookie = name + '=' + value + '; expires=' + exdate.toUTCString() + '; path=/' + this.getdomain();
      }
    };(function(choice,version,lifetime){dimml.consent.load(choice);})(2,-1,30);},0);