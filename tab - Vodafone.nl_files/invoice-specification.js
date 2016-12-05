VF.namespace("VF.pages.my.invoiceSpecifications"),VF.pages.my.invoiceSpecifications=function(){"use strict";function r(){1===VF.core.globals.features["consumer.invoices.core"]&&1===VF.core.globals.features["consumer.invoices.analysis"]&&(f(),K=$.localStorage.getItem("current_billing_customer"),null!==K&&(y(),d()))}function e(r){if(r.preventDefault(),!$(r.target).hasClass("disabled")){er=!0;var e=$(r.currentTarget).data("goto-page");rr[P]=!1,$("#tab-"+P).find("#page").val(e),G.set("pageNumber",e),q(),VF.core.tag().trackSelectChange("my:rekeningen:specificatie:next items")}}function t(r){er=!0,rr[P]=!1;var e=$(r.target).val();G.set("pageNumber",e),q(),VF.core.tag().trackSelectChange("my:rekeningen:specificatie:go to page "+e)}function o(r){er=!0,rr[P]=!1,_=$(r.target).val(),$("#tab-"+P).find("#page-size").val(_),G.set("pageSize",_),G.set("pageNumber",1),q(),VF.core.tag().trackSelectChange("my:rekeningen:specificatie:more items "+_)}function n(r){r.preventDefault(),er=!0;var e=B(P);rr[P]=!1,X.bundleInd=$(".specification-filters #"+e+"-filter-bundle-ind a.selected").data("value"),X.messageCode=$(".specification-filters #"+e+"-filter-message-code a.selected").data("value"),X.fromDuration=$(".specification-filters #"+e+"-filter-duration a.selected").data("start"),X.toDuration=$(".specification-filters #"+e+"-filter-duration a.selected").data("end"),X.fromChargeAmount=$(".specification-filters #"+e+"-filter-amount a.selected").data("start"),X.toChargeAmount=$(".specification-filters #"+e+"-filter-amount a.selected").data("end"),X.calledNumber=$(".specification-filters #"+e+"-filter-search-number").val()?$(".specification-filters #"+e+"-filter-search-number").val():void 0,G.set("pageNumber",1),q()}function l(){var r=$(".number-input-wrapper"),e=$(".filter-dropdown ul");r.each(function(){""===$(this).find("input").val()?$(this).removeClass("active"):$(this).addClass("active")}),e.each(function(){$(this).find("a:first").hasClass("selected")?$(this).closest(".filter-dropdown").removeClass("active"):$(this).closest(".filter-dropdown").addClass("active")})}function p(){var r=$("#specification-"+B(P)+"-filter-template"),e=$("#tab-"+P),t=r.find(".number-input-wrapper"),o=r.find(".filter-dropdown ul"),n=!1;t.each(function(){$(this).find("input").val().length&&(n=!0)}),o.each(function(){$(this).find("a:first").hasClass("selected")||(n=!0)}),n?e.find(".active-filters-message").show():e.find(".active-filters-message").hide()}function s(r){r.preventDefault(),$(".filter-dropdown-menu li a").removeClass("selected"),$(".filter-dropdown-menu").each(function(){var r=$(this).find("a:first").addClass("selected").text();$(this).closest(".filter-dropdown").find(".filter-dropdown-btn").text(r)}),$("#calls-filter-search-number").val(""),l()}function a(r){r.preventDefault();var e,t=$(r.target),o=t.closest(".filter-dropdown");e=t.text(),o.removeClass("open"),o.find(".filter-dropdown-menu a").removeClass("selected"),o.find(".filter-dropdown-btn").text(e),t.addClass("selected").siblings(),l()}function c(r){$(r.target).parent().siblings(".event-row").removeClass("open"),$(r.target).closest(".event-row").toggleClass("open")}function f(){$(document).on("click",".icon-chevron-right",function(){$('[data-toggle="tooltip"]').tooltip("hide").tooltip("disable")}).on("change","#page-size",o).on("change","#page",t).on("keyup",".number-filter",l).on("click","#page-numbers a",e).on("click","#filter-submit",n).on("click","#reset-filters",s).on("click",".filter-dropdown-menu li a",a).on("click",".event-header",c).on("click",".js-wizard-show-toggle",function(r){r.preventDefault(),VF.core.tag().trackButtonClick("my:rekeningen:rekening-specificatie:uitleg"),VF.Wizard.show()}).on("click",".js-show-page-size-select",function(r){r.preventDefault(),$(".page-size").removeClass("hide"),$(".js-page-size-link").addClass("hide")}).on("keypress","input.js-number-filter",function(r){var e=r.keyCode||r.which;if(13==e)return r.preventDefault(),!1}),T.on("shown",q)}function h(r,e){N="undefined"!=typeof e&&e,F.set("subscriberId",N),b(),F.getSubscriberCharges(O).done(function(r){x(r),U=r})}function u(r,e,t){"undefined"!=typeof t.billingArrangements&&t.billingArrangements.length>1&&$(".content").addClass("multiple-ba")}function v(r,e,t){var o,n=document.location,i=[n.origin,n.pathname].join(""),l=!1;F.getInvoice(S).then(function(r){return o=r,F.set("billingArrangementId",e),F.getAllBills()}).then(function(r){for(var n=r.length-1;n>=0;n--)"object"==typeof r[n].cycle&&parseInt(r[n].billing_arrangment_id)===e&&r[n].cycle.month===o.cycle.month&&r[n].cycle.year===o.cycle.year&&(i+="?invoice="+r[n].number,l=!0);l?window.location.href=i:(VF.core.popupManager().createPopup(!0,!0,{title:"Geen rekening gevonden...",text:"<p>Wij hebben voor de maand "+VF.util.date().toMonth(o.cycle.month)+" "+o.cycle.year+" geen rekening gevonden voor "+$('.ba-dropdown-links [data-value="'+e+'"]').text()+".</p>",confirm:{text:"OK",onClick:VF.core.popupManager().closePopup}}),H.setCurrent(t),F.set("billingArrangementId",t))})}function y(){L=VF.core.globals.account.billing_customers[K].billing_customer_id,F.set("billingCustomerId",L),M=VF.core.globals.account.billing_customers[K].is_consumer,VF.Wizard.set("isConsumer",M),R=M?"amount_including_vat":"amount_excluding_vat",E=VF.util.url().getUrlVars(),S="undefined"!=typeof E?E.invoice:0,N="undefined"!=typeof E&&"undefined"!=typeof E.subscriber&&E.subscriber,F.set("subscriberId",N)}function d(){F.getInvoice(S).done(m).fail(g)}function g(r){$(".js-page-error").fadeIn(),$(".content").removeClass("preloader")}function m(r){var e,t={};return O=r,"undefined"==typeof r.charges.subscriber_charges_summaries[0]?void(window.location.href="/my/rekeningen/rekening.shtml?invoice="+r.number):($.isNumeric(N)||(N=r.charges.subscriber_charges_summaries[0].subscriber_id),F.set("subscriberId",N),A(E),void $.when(F.getSubscriberCharges(r),F.getCurrentBillingArrangement()).done(function(o,n){U=o,t.billingArrangement=n,t.subscriberId=N,t.invoice=r,t.isConsumer=M,t.billingCustomerId=L,t.payment=VF.pages.my.invoiceGeneral.getPaymentInfo(r,M),t.dontShowAllSubscriberItem=k(),VF.template.compile(r.type.id,t,function(r){$(".content").html(r).removeClass("preloader"),VF.core.formOfAddress().setFormOfAddress(),T.render()}),VF.pages.my.invoiceGeneral.renderInvoiceDropdown(r,F),e=$(".bill-mu-list"),$("#first-subscriber a").attr("data-toggle","tooltip").attr("data-container","body").attr("data-title",M?W:V).attr("data-user-enabled",!1),x(o),$.when(F._getMinDatePdfInvoiceDetails()).done(function(e){r.close_date>e.data[0].minimum_invoice_creation_date?$(".js-download-verbruiksspecificaties").removeClass("hide"):$(".js-download-verbruiksspecificaties").remove()}).fail(function(){$(".js-download-verbruiksspecificaties").remove()}),$(document).on("click",".js-download-verbruiksspecificaties",function(){VF.core.tag().trackButtonClick("my:rekeningen:specificatie:rekening_specificatie_pdf")}),VF.Wizard.set("url","/my/rekeningen/wizard-specification.json"),VF.Wizard.setVars({invoice_url:"/my/rekeningen/rekening.shtml?invoice="+S+"&startAtPoint=specification_tab",from_bill_wizard:+E.fromBillWizard,has_multiple_subscribers:getDeepProp(r,"charges.subscriber_charges_summaries").length>1});var i=E.startAtPoint;null!=i&&(VF.Wizard.set({skipIntro:!0,startAtPoint:i}),VF.Wizard.on("ready",function(){setTimeout(VF.Wizard.show,500)})),VF.Wizard.on("ready",function(){$(".js-link-wizard").removeClass("hide")}),VF.Wizard.init(),j()}))}function x(r){var e={},t=r.subscriber_usage_charges.slice();if(t.length>0){for(i=0;i<t.length;i++)Z[i]=t[i]=t[i].event_type;void 0!==E&&E.eventtype&&$.inArray(E.eventtype,Z)!==-1&&(P=E.eventtype),P||(P=!!Z[0]&&Z[0]),e.activeEvents=Z,e.selectedEvent=P,G.set("billingCustomerId",L),G.set("billingArrangementId",O.billing_arrangment_id),G.set("invoiceId",O.number),G.set("subscriberId",N),G.set("invoiceCloseDate",O.close_date),G.set("pageSize",_)}else e.activeEvents=[];log("--------",P),void 0!==P&&q(),$(".js-specification-filters").removeClass("hide"),VF.template.compile("SPECIFICATION-TYPE-SELECTOR",e,function(r){$(".js-specification-type-selector").empty().append(r)}),VF.template.compile("SPECIFICATION-TABLE",e,function(r){$(".bill-content").html(r).removeClass("preloader"),T.render()})}function A(r){X.bundleInd=r.bundleInd,X.messageCode=r.messageCode,X.fromDuration=r.fromDuration,X.toDuration=r.toDuration,X.fromChargeAmount=r.fromChargeAmount,X.toChargeAmount=r.toChargeAmount,X.calledNumber=r.calledNumber}function b(){P=void 0,G.set("pageNumber",1),G.set("pageSize",_),rr={calls:!1,data:!1,messages:!1,purchases:!1,other:!1}}function j(){""!==$(".current a .mu-name").text()?$(".mu-dropdown-btn").text($(".current a .mu-name").text()):($(".mu-dropdown-btn").text($(".mu-dropdown-links a .mu-name").first().text()),$(".mu-dropdown-links a .mu-name").first().closest("li").addClass("current"))}function k(){return $(window).width()<600}function q(r,e){void 0!==r&&(P=e.replace(/tab\-/g,""),X={},G.set("pageSize",_),G.set("pageNumber",1));var t={V:"gesprekken",D:"data",T:"sms",M:"aankopen bij derden",O:"overige"};VF.core.tag().trackButtonClick("my:rekeningen:specificatie:"+t[P]),!rr[P]&&P&&($(".bill-sub-tabs-content").loadingIndicator("show"),G.set("bundleInd",X.bundleInd),G.set("messageCode",X.messageCode),G.set("fromDuration",X.fromDuration),G.set("toDuration",X.toDuration),G.set("fromChargeAmount",X.fromChargeAmount),G.set("toChargeAmount",X.toChargeAmount),G.set("calledNumber",X.calledNumber),G.set("eventType",P),G.getChargedEvents().done(function(r){var e,t=[],o=r.data[0],n={};for(o.total_results&&(Q=o.total_results),i=0;i<o.charged_events.length;i++)t[i]=C(o.charged_events[i]);n.chargedEvents=o,n.chargedEventsData=t,n.filters=X,n.pageSize=_,n.pagination=z(_,Q,o.page_number),e=k()?B(P).toUpperCase()+"-MOBILE":B(P).toUpperCase();var s=B(P).toUpperCase()+"-FILTER",a=$("#tab-"+P);VF.template.compile(e,n,function(r){a.html(r).removeClass("preloader"),$(".country-code").tooltip(),a.find("#page").val(n.pagination.currentPage),a.find("#page-size").val(n.pagination.pageSize),0===t.length?$("#tab-"+P).find(".error-message").show().html($("#js-no-data").html()).end().find(".specification-table-wrapper").hide():$("#tab-"+P).find(".error-message").hide().end().find(".specification-table-wrapper").show(),VF.template.compile(s,n,function(r){if(!er){var e=$.parseHTML(r);$(e[1]).removeClass("hide"),$(".bill-multiusers").append(e)}er=!1})}),rr[P]=!0,w(),$(".filter-dropdown").each(function(r,e){if(!$(e).find(".filter-dropdown-menu a:first").hasClass("selected")){var t=$(e).find(".filter-dropdown-menu a.selected").text();$(e).closest(".filter-dropdown").find(".filter-dropdown-btn").text(t)}}),l(),p(),$(".bill-sub-tabs").find('a[data-target="#tab-'+P+'"]').tab("show"),$(".bill-sub-tabs-content").loadingIndicator("hide"),j(),$(".spec-dropdown-btn").text($(".spec-dropdown-links .active a").text())}))}function w(){var r,e=$("#"+B(P)+"-filter-message-code");$.each(U.subscriber_usage_charges,function(){if(this.event_type==P)return void(this.event_charges_summaries.length>1?(e.show(),e.find(".filter-dropdown-menu").empty().append('<li><a data-value="" class="selected">Alles</a></li>'),$.each(this.event_charges_summaries,function(){r=this.message_code in Y?Y[this.message_code]:this.message_text,e.find(".filter-dropdown-menu").append('<li><a data-value="'+this.message_code+'">'+r+"</a></li>")}),X.messageCode&&(e.find(".filter-dropdown-menu .selected").removeClass("selected"),$("a[data-value='"+X.messageCode+"']").addClass("selected"))):e.hide())})}function z(r,e,t){var o={},n=Math.ceil(e/r);return o.totalPages=n,o.previousPage={active:t>1,number:t-1<1?1:t-1},o.currentPage=t,o.nextPage={active:t<n,number:t+1<n?t+1:n},o.pageSize=r,o}function B(r){switch(r){case"V":return"calls";case"D":return"data";case"T":return"messages";case"M":return"purchases";case"O":return"other"}}function C(r){var e,t={};return e=r.destination_country&&r.originator_country&&"NA"!==r.destination_country?"NLD"===r.destination_country&&"NLD"===r.originator_country?"":'<span class="country-code" title="'+r.originator_country_name+'">'+r.originator_country+'</span> <span class="country-arrow">j</span> <span title="'+r.destination_country_name+'" class="country-code">'+r.destination_country+"</span>":r.originator_country?'<span class="country-code" title="'+r.originator_country_name+'">'+r.originator_country+"</span>":r.destination_country?'<span class="country-code" title="'+r.destination_country_name+'">'+r.destination_country+"</span>":"-",t.volume=VF.util.usage().usageValueFormatted(r.volume,r.unit_of_measurement)+" "+VF.util.usage().unitOfMeasurementFormatted(r.volume,r.unit_of_measurement),t.amount=VF.util.prices().toMoneyString(r.charge_amount),t.date=VF.util.date().friendlyTimestamp(r.start_time,"dd-mm-yyyy"),t.startTime=VF.util.date().friendlyTimestamp(r.start_time,"hours-minutes"),t.number=r.destination_number,t.international=e,t.addon=r.offer_name,t.duration=D(r.duration),t.description=r.content_description,t.provider=r.content_provider,t}function D(r){var e,t=Math.floor(r/3600),o=Math.floor((r-3600*t)/60),n=r-3600*t-60*o;return o<10&&(o="0"+o),n<10&&(n="0"+n),e=t<1?t+":"+o+":"+n:t+":"+o+":"+n}var E,F=new VF.services.billing.InvoicesService;F.set("billingArrangementId",$.localStorage.getItem("current_billing_arrangement"));var G=new VF.services.billing.ChargedEventsService,H=new VF.pages.my.invoiceGeneral.BillingArrangementSelector;H.setService(F),H.on("change",v),H.on("render",u);var I=new VF.pages.my.invoiceGeneral.MultiUserSelector;I.setService(F),I.on("change",h);var J="rekening-specificatie-wizard";VF.Wizard.on("show",function(){VF.core.tagMy().trackFormStep({formName:J,stepName:"start"})}),VF.Wizard.on("hide",function(){VF.core.tagMy().trackFormStep({formName:J,stepName:"einde"}),window.usabilla_live("trigger","uitleg rekening wizard POST")}),VF.Wizard.on("point",function(r,e){VF.core.tagMy().trackFormStep({formName:J,step:e.idx,stepName:e.title})});var K,L,M,N,O,P,Q,R,S,T=new VF.pages.my.invoiceGeneral.BillingSubTabs,U=null,V="Specificaties van alle abonnementen samen is natuurlijk niet zo specifiek. En dat is toch juist waarvoor u hier bent. Check daarom alle details per abonnement.",W="Specificaties van alle abonnementen samen is natuurlijk niet zo specifiek. En dat is toch juist waarvoor je hier bent. Check daarom alle details per abonnement.",X={bundleInd:void 0,messageCode:void 0,fromDuration:void 0,toDuration:void 0,fromChargeAmount:void 0,toChargeAmount:void 0,calledNumber:void 0},Y={},Z=[],_=10,rr={V:!1,T:!1,D:!1,M:!1,O:!1},er=!1;return{init:r}}(),VF.core.globals.callbacks.my_account.push(VF.pages.my.invoiceSpecifications.init),$(document).ready(function(){VF.core.features().processFeature("consumer.invoices.statistics")});