VF.namespace("VF.pages.my.invoiceGeneral"),VF.pages.my.invoiceGeneral=function(){function r(r,e){var t,o={};if(t=(r.customer_invoice_status||"").toUpperCase().replace(" ","_"),"BILL"!==r.type.id)return"CN"===r.type.id&&(e===!1?o.paymentInfo="Een creditnota is een bedrag dat u van ons tegoed heeft. We verrekenen dit bedrag met een openstaande rekening of storten het terug op uw IBAN.":o.paymentInfo="Een creditnota is een bedrag dat je van ons tegoed hebt. We verrekenen dit bedrag met een openstaande rekening of storten het terug op je IBAN."),"DN"===r.type.id&&(e===!1?o.paymentInfo="Een debetnota is een correctie op een eerdere rekening. U moet dit bedrag nog betalen.":o.paymentInfo="Een debetnota is een correctie op een eerdere rekening. Je moet dit bedrag nog betalen."),o;if("OPEN"===t&&r.show_pay_deck===!0&&(o.paymentInfo="Deze rekening is nog niet betaald. Betaal de rekening voor "+VF.util.date().friendlyTimestamp(r.due_date,"day-monthFull-year")),void 0!==r.payments&&(o.payDate=VF.util.date().friendlyTimestamp(r.payments[0].date,"day-monthFull-year"),o.payDateRaw=r.payments[0].date),void 0!==r.paid_date&&(o.payDate=VF.util.date().friendlyTimestamp(r.paid_date,"day-monthFull-year")),void 0!==r.direct_debits){var n,i,l;n=r.direct_debits;for(var p=0;p<n.length;p++)if("recurring"===n[p].request_type){switch(l=n[p].payment_method){case"CC":var s=n[p].credit_card_number;if(o.recurringPaymentMethod="Creditcard","undefined"!=typeof s){var a=[s.substr(s.length-4),s.substr(0,s.length-4).replace(/./g,"*")];o.recurringPaymentValue=a.reverse().join("")}else o.recurringPaymentValue="";break;default:o.recurringPaymentMethod="IBAN",o.recurringPaymentValue=n[p].bank_account_number}switch(i=[o.recurringPaymentMethod,o.recurringPaymentValue].join(" "),o.payDate=VF.util.date().friendlyTimestamp(r.due_date,"day-monthFull-year"),o.payDateRaw=r.due_date,r.status){case"o":o.paymentInfo="Op "+o.payDate+" wordt het bedrag automatisch afgeschreven van "+i+".";break;case"c":o.paymentInfo="Op "+o.payDate+" is het bedrag automatisch afgeschreven van "+i;break;case"overdue":o.paymentInfo="De automatische incasso van "+i+" is niet gelukt."}}}return void 0!==t&&"NOT_PAID"===t&&(e===!1?o.paymentInfo="De automatische incasso is deze maand niet gelukt. Maak het bedrag snel naar ons over, dan hoeven we uw abonnement niet te blokkeren.":o.paymentInfo="De automatische incasso is deze maand niet gelukt. Maak het bedrag snel naar ons over, dan hoeven we je abonnement niet te blokkeren."),void 0!==t&&r.payment_pending===!0&&(e===!1?o.paymentInfo="De betaling is in behandeling. De rekening is nog niet betaald. De verwerking kan 24 uur duren. Als de betaling gelukt is, zie je dit in My Vodafone.":o.paymentInfo="De betaling is in behandeling. De rekening is nog niet betaald. De verwerking kan 24 uur duren. Als de betaling gelukt is, ziet u dit in My Vodafone."),o}var e={render:function(r,t){var o,n,i=$("#invoicelist-tpl").html(),l=Handlebars.compile(i),p={};n="BILL"===r.type.id?t.getAllBills():t.getAllNotes(),n.done(function(t){p.invoices=t,p.currentBillType=r.type.id,p.currentInvoiceNumber=r.number,o=l(p),1===t.length?$(".js-invoicemonth-selector").addClass("single-month").append(o):($(".js-invoicemonth-selector").append(o),e.bindEvents())}).fail(function(){log("Invoice dropdown data not received.")})},bindEvents:function(){var r="is-active",e=document.location,t=[e.origin,e.pathname].join("");$(document).off("click",".js-invoicemonth-link").on("click",".js-invoicemonth-link",function(e){e.preventDefault(),$(".js-invoicemonth-selector").toggleClass(r),VF.core.tag().trackExpanderClick("my:rekeningen:rekening:maand - dropdown")}).on("click",function(e){var t=$(e.target);0!==t.closest(".js-invoicemonth-selector").length||t.hasClass(".js-invoicemonth-link")||$(".js-invoicemonth-selector").removeClass(r)}).on("click",".invoice-monthlist a",function(r){r.preventDefault(),t+="?invoice="+$(r.target).data("invoice-id"),window.location.href=t})}};return{renderInvoiceDropdown:e.render,getPaymentInfo:r}}(),function(r,e,t,o){"use strict";function n(){this._namespace="vf.mu-list-selector",this._service={},this._currentSubscriberId="",this._currentInvoiceNumber="",this.containerSelector=".bill-multiusers",this.listItemSelector=".bill-mu-item a",this.init()}n.prototype={constructor:n,init:function(){var r=this;t(e).on("click",this.listItemSelector,function(e){e.preventDefault();var o=t(this),n=o.data("subscriber_id");return"false"==o.attr("data-user-enabled")?void VF.core.tag().trackButtonClick("my:rekeningen:specificatie:change user (disabled)"):(VF.core.tag().trackButtonClick("my:rekeningen:specificatie:change user"),n&&(n=n.toString()),r._currentSubscriberId=n,o.parent().addClass("current").siblings().removeClass("current"),t.publish(r._namespace+".change",[n]),t(".mu-dropdown-btn").text(t(".current a .mu-name").text()),t(".js-specification-filter").empty(),void t(".js-filter-wrapper").remove())})},on:function(r,e){t.subscribe(this._namespace+"."+r,e)},off:function(r,e){t.unsubscribe(this._namespace+"."+r,e)},setService:function(r){return this._service=r,this},render:function(r){var e=this;return t.isEmptyObject(this._service)?void r("No service bound, could not collect data"):t.isNumeric(this._currentInvoiceNumber)?void this._service.getInvoice(this._currentInvoiceNumber).done(function(o){VF.template.compile("multi-users-list",{invoice:o,subscriberId:e._currentSubscriberId},function(o){t.publish(e._namespace+".render",[o]),r(o)})}).fail(r):void r("No invoice bound, could not collect data")}},r.VF.namespace("VF.services.billing.MultiUserSelector"),r.VF.pages.my.invoiceGeneral.MultiUserSelector=n}(window,document,window.jQuery),function(r,e,t,o){"use strict";function n(){this._namespace="vf.bill-sub-tabs",this.containerSelector=".bill-content",this.tabsSelector=".bill-sub-tabs",this.tabHeaderSelector=".bill-sub-tab-pane-header",this.tabsContentSelector=".bill-sub-tabs-content",this.mobileBreakpoint=600,this.isMobile=VF.util.device().isKnownMobile(),this.init()}n.prototype={constructor:n,init:function(){var r=this;t(e).on("shown",this.tabsSelector+" a",function(e){var o=t(e.target).data("target").slice(1),n=t(e.target).text();t(r.containerSelector).toggleClass("in",!0),t("a",r.tabHeaderSelector).text(n),t.publish(r._namespace+".shown",[o])}),t(e).on("click",".bill-sub-tabs a",function(e){var o=t(e.target).data("target").slice(1);e.preventDefault(),t(".spec-dropdown-btn").html(t(this).html()),t("li",r.tabsSelector).removeClass("active"),t(this).parent("li").addClass("active"),t(".js-filter-wrapper").addClass("hide"),t("#"+o+"-filter").removeClass("hide")})},render:function(){if(t(this.tabsSelector).length)return t(this.containerSelector).addClass("bill-content--has-sub-tabs"),this},setTab:function(r){t(this.tabsSelector).find("a:eq("+r+")").tab("show")},on:function(r,e){t.subscribe(this._namespace+"."+r,e)},off:function(r,e){t.unsubscribe(this._namespace+"."+r,e)},setContainerHeight:function(){if(!(t(r).width()>this.mobileBreakpoint)){var e,o=t(this.containerSelector),n=o.hasClass("in");e=n?t(this.tabsContentSelector).height():t(this.tabsSelector).height(),o.height(e)}},reload:function(){var r=t(this.tabsSelector).find(".active a");t("li",this.tabsSelector).removeClass("active"),r.tab("show")},back:function(){var r=t(this.containerSelector);t("li",this.tabsSelector).removeClass("active"),r.removeClass("in")}},r.VF.namespace("VF.pages.my.invoiceGeneral.BillingSubTabs"),r.VF.pages.my.invoiceGeneral.BillingSubTabs=n}(window,document,window.jQuery),function(r,e,t,o){"use strict";function n(){this._namespace="vf.ba-selector",this._service={},this._data={billingArrangements:[],currentBillingArrangement:{}},this.dropdownSelector="#billingArrangementDropdown",this.dropdownBtnSelector=".ba-dropdown-btn",this.dropdownLinksSelector=".ba-dropdown-links",this.init()}n.prototype={constructor:n,init:function(){var r=this;t(e).on("click",this.dropdownSelector+" .dropdown-menu a",function(e){e.preventDefault();var o=t(this),n=o.data("value"),i=o.data("label"),l=parseInt(r._data.currentBillingArrangement.billing_arrangement_id);if(l!==n){for(var p=r._data.billingArrangements.length-1;p>=0;p--)parseInt(r._data.billingArrangements[p].billing_arrangement_id)===n&&(r._data.currentBillingArrangement=r._data.billingArrangements[p],r.storeInLocalStorage(r._data.billingArrangements[p].billing_arrangement_id,r._data.billingArrangements[p].is_active),t(r.dropdownBtnSelector).text(i),o.parent().addClass("active").siblings().removeClass("active"));t.publish(r._namespace+".change",[n,l])}}),t(e).on("change."+this._namespace,this.dropdownSelector,function(e){e.preventDefault(),e.stopPropagation();for(var o=t(this).val(),n=parseInt(r._data.currentBillingArrangement.billing_arrangement_id),i=r._data.billingArrangements.length-1;i>=0;i--)r._data.billingArrangements[i].billing_arrangement_id==o&&(r._data.currentBillingArrangement=r._data.billingArrangements[i],r.storeInLocalStorage(r._data.billingArrangements[i].billing_arrangement_id,r._data.billingArrangements[i].is_active));t.publish(r._namespace+".change",[o,n])})},on:function(r,e){t.subscribe(this._namespace+"."+r,e)},off:function(r,e){t.unsubscribe(this._namespace+"."+r,e)},setService:function(r){return this.service=r,this},setCurrent:function(r){t(this.dropdownSelector).find('[data-value="'+r+'"]').trigger("click")},render:function(r){var e=this;return t.isEmptyObject(this.service)?void r("No service bound, could not collect data"):void t.when(this.service.getBillingArrangements(),this.service.getCurrentBillingArrangement()).done(function(o,n){e._data.billingArrangements=o,e._data.currentBillingArrangement=n,e.storeInLocalStorage(n.billing_arrangement_id,n.is_active),VF.template.compile("billing-arrangements-dropdown",e._data,function(o){t.publish(e._namespace+".render",[o,e._data]),r(o)})}).fail(function(r){log(r)})},storeInLocalStorage:function(r,e){t.localStorage.setItem("current_billing_arrangement",r),t.localStorage.setItem("billing_arrangement_active",e)}},r.VF.namespace("VF.pages.my.invoiceGeneral.BillingArrangementSelector"),r.VF.pages.my.invoiceGeneral.BillingArrangementSelector=n}(window,document,window.jQuery),function(r,e){r("body").on("click",".js-toggle-invoicedetails",function(){r(".bill-summary").toggleClass("mobile-visible-details")})}(window.jQuery),function(r,e,t,o){function n(r){r.preventDefault(),r.stopPropagation();var e=t(this),o=e.data("billing-customer-id"),n=e.data("billing-arrangement-id"),p=e.data("invoice-id"),s=e.data("bill-name");if(t.isNumeric(o)&&t.isNumeric(n)&&p){VF.core.tag().trackButtonClick("my:rekeningen:betaal-nu:"+s),VF.util.processingIndicator().showProcessingIndicator(e);var a={};a.billing_customer_id=o,a.billing_arrangement_id=n,a.invoice_id=p,a.pay_means="IDEAL";var c={type:"POST",url:"/rest/my/payments/pay",error:i,success:l,data:JSON.stringify(a),dataType:"json",cache:!1,critical:!1};VF.core.ajax().init(c)}}function i(r){log("----error, button not generated",r.error)}function l(e){r.location.href=e.data[0].payment_url}var p=".billing-payment-btn";t(e).on("click",p,n)}(window,document,window.jQuery),function(r,e,t){function o(r){r.preventDefault(),r.stopPropagation(),n||(VF.core.tag().trackTooltipHover("extra-info-betaalstatus"),n=!0)}var n=!1,i=".payment-info-btn";e(r).on("mouseover",i,o)}(document,window.jQuery),function(r){$(r).on("click",".bill-details-expander-link",function(r){r.preventDefault(),$(".bill-details-expander-link > a").toggleClass("open"),$(".bill-details-expander").toggleClass("hide"),VF.core.tag().trackExpanderClick("my:rekeningen:rekening:extra info betaalstatus")})}(document,window.jQuery);