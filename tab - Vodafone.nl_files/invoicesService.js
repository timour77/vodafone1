!function(r,e,t){"use strict";function o(r){this.config={billingCustomerId:t,billingArrangementId:t,subscriberId:!1},this.cache={invoices:[],notes:[],charges:{},subscriberCharges:{},invoiceAnalysisData:{},averageInvoiceCosts:{},billingArrangements:[],all:[]},this.init(r)}o.prototype={constructor:o,init:function(r){for(var e in r)r.hasOwnProperty(e)&&(this.config[e]=r[e])},set:function(r,e){return this.config.hasOwnProperty(r)&&(this.config[r]=e,this.needsReset.indexOf(r)!=-1&&this.reset()),this},needsReset:["billingCustomerId","billingArrangementId"],_storeInCache:function(r){var e=[].concat(r.invoices_type_bill).concat(r.invoices_type_other);this.cache.invoices=r.invoices_type_bill,this.cache.notes=r.invoices_type_other,this.cache.averageInvoiceCosts=r.average_invoice_cost,this.cache.billingArrangements=r.billing_arrangements,this.cache.all=e},_isValidBA:function(r){var t=!1;return e.each(this.cache.billingArrangements,function(e,o){parseInt(r)===parseInt(o.billing_arrangement_id)&&(t=!0)}),t},_getData:function(){var r,o=this,n=e.Deferred();return"undefined"!=typeof this.cache.billingArrangements&&this.cache.billingArrangements.length>0?(n.resolve(o.cache),n.promise()):this.config.billingCustomerId===t?(n.reject("Could not collect data. Missing billingCustomerId"),n.promise()):(r={critical:!0,url:"/rest/my/invoice/"+this.config.billingCustomerId+"?lst=m",success:function(r){var e,t=r.data[0];if(o._storeInCache(t),"undefined"!=typeof t.billing_arrangements&&1===t.billing_arrangements.length)n.resolve(o.cache);else{for(var i=o._isValidBA(o.config.billingArrangementId)?o.config.billingArrangementId.toString():t.billing_arrangements[0].billing_arrangement_id.toString(),l=o.cache.billingArrangements,p=l.length-1;p>=0;p--)l[p].is_current&&(e=l[p].billing_arrangement_id);e!==i?o._getDataForBA(i).done(function(){n.resolve(o.cache)}).fail(function(r){n.reject(r.error)}):n.resolve(o.cache)}},error:function(r){n.reject(r.error)},cache:!1},VF.core.ajax().init(r),n.promise())},_getDataForBA:function(r){var t=e.Deferred(),o=this,n={critical:!0,url:"/rest/my/invoice/"+this.config.billingCustomerId+"/billing-arrangement/"+r,success:function(r){var e=r.data[0];o._storeInCache(e),t.resolve()},error:function(r){t.reject(r.error)},cache:!1};return VF.core.ajax().init(n),t.promise()},_getInvoiceCharges:function(r){var t=this,o=e.Deferred();if(!this.isValidInvoiceObject(r))return o.reject("Invalid invoice. Missing complete invoice, or missing invoice number."),o.promise();if(!e.isNumeric(this.config.billingCustomerId))return o.reject("Cannot retrieve invoice charges; no billingCustomerId defined"),o.promise();var n=this.cache.invoiceCharges||{};if("object"!=typeof n[r.number]){var i={critical:!1,url:"/rest/my/invoice/charges/"+this.config.billingCustomerId+"?billing_arrangement_id="+r.billing_arrangment_id+"&invoice_id="+r.number+"&invoice_close_date="+r.close_date,success:function(e){var n=e.data[0]||{};t.cache.invoiceCharges=t.cache.invoiceCharges||{},t.cache.invoiceCharges[r.number]=n,o.resolve(n)},error:function(r){o.reject(r.error)},cache:!1};VF.core.ajax().init(i)}else o.resolve(n[r.number]);return o.promise()},_getSubscriberCharges:function(r){var t=this,o=e.Deferred();if(!this.isValidInvoiceObject(r))return o.reject("Invalid invoice. Missing complete invoice, or missing invoice number."),o.promise();if(!e.isNumeric(this.config.billingCustomerId)||"undefined"==typeof this.config.subscriberId||this.config.subscriberId===!1)return o.reject("Cannot retrieve subscriber charges; no billingCustomerId or subscriberId supplied"),o.promise();var n=this.cache.subscriberCharges[r.number]||[];if("object"!=typeof n[this.config.subscriberId]){var i={critical:!1,url:"/rest/my/invoice/subscriber-charges/"+t.config.billingCustomerId+"?billing_arrangement_id="+r.billing_arrangment_id+"&subscriber_id="+t.config.subscriberId+"&invoice_id="+r.number+"&invoice_close_date="+r.close_date,success:function(e){var n=e.data[0]||{};log("------charges------",n),"Telefoon Stefan"===n.subscriber_name&&(n.subscriber_usage_charges=[]),t.cache.subscriberCharges[r.number]=t.cache.subscriberCharges[r.number]||[],t.cache.subscriberCharges[r.number][t.config.subscriberId]=n,o.resolve(n)},error:function(r){o.reject(r.error)},cache:!1};VF.core.ajax().init(i)}else o.resolve(n[this.config.subscriberId]);return o.promise()},_getInvoiceAnalysisData:function(r){var t=this,o=e.Deferred();if(!this.isValidInvoiceObject(r))return o.reject("Invalid invoice. Missing complete invoice, or missing invoice number."),o.promise();if(!e.isNumeric(this.config.billingCustomerId)||"undefined"==typeof this.config.subscriberId||this.config.subscriberId===!1)return o.reject("Cannot retrieve analysis data; no billingCustomerId or subscriberId supplied"),o.promise();var n=this.cache.invoiceAnalysisData[r.number]||[];if("object"!=typeof n[this.config.subscriberId]){var i={critical:!1,url:"/rest/my/invoice/analysis-data/"+this.config.billingCustomerId+"?billing_arrangement_id="+r.billing_arrangment_id+"&subscriber_id="+this.config.subscriberId+"&bill_closed_date="+r.close_date+"&ps=3",success:function(e){var n=e.data[0]||{};t.cache.invoiceAnalysisData[r.number]=t.cache.invoiceAnalysisData[r.number]||[],t.cache.invoiceAnalysisData[r.number][t.config.subscriberId]=n,o.resolve(n)},error:function(r){o.reject(r.error)},cache:!1};VF.core.ajax().init(i)}else o.resolve(n[this.config.subscriberId]);return o.promise()},getAllBills:function(r){var o=this,n=e.Deferred();return this._getData().done(function(){if("undefined"==typeof o.cache.invoices)n.resolve([]);else{var e=o.cache.invoices.slice();r!==t&&(e=Array.prototype.slice.call(e,0,r)),n.resolve(e)}}).fail(function(r){n.reject(r)}),n.promise()},getAllNotes:function(r){var o=this,n=e.Deferred();return this._getData().done(function(){if("undefined"==typeof o.cache.notes)n.resolve([]);else{var e=o.cache.notes.slice();r!==t&&(e=Array.prototype.slice.call(e,0,r)),n.resolve(e)}}).fail(function(r){n.reject(r)}),n.promise()},getAverageInvoiceCosts:function(){var r=this,t=e.Deferred();return this._getData().done(function(){t.resolve(r.cache.averageInvoiceCosts)}).fail(function(r){t.reject(r)}),t.promise()},getBillingArrangements:function(){var r=this,t=e.Deferred();return this._getData().done(function(){t.resolve(r.cache.billingArrangements)}).fail(function(r){t.reject(r)}),t.promise()},getCurrentBillingArrangement:function(){var r=this,t=e.Deferred();return r.getBillingArrangements().done(function(r){if("undefined"==typeof r)t.reject("No billing arrangements defined.");else for(var e=r.length-1;e>=0;e--)r[e].is_current&&t.resolve(r[e])}).fail(function(r){t.reject(r)}),t.promise()},getInvoice:function(r){var o,n=this,i=e.Deferred();return this._getData().then(function(){if("undefined"==typeof n.cache.all)return!1;o=n.cache.all.slice();for(var e=o.length-1;e>=0;e--)if("undefined"!=typeof o[e]&&o[e].number==r)return o[e]}).then(function(r){"undefined"==typeof r&&i.reject("Invoice could not be found"),"undefined"!=typeof n.config.subscriberId&&n.config.subscriberId!==!1?e.when(n._getInvoiceCharges(r),n._getSubscriberCharges(r)).done(function(e,t){r.charges=e,r.subscriber_charges=t,i.resolve(r)}):n._getInvoiceCharges(r).done(function(e){r.charges=e,r.subscriber_charges=t,i.resolve(r)}).fail(function(){i.resolve(r)})}).fail(function(r){i.reject(r)}),i.promise()},getSubscriberCharges:function(r){var t=this,o=e.Deferred();return t._getSubscriberCharges(r).done(function(r){o.resolve(r)}).fail(function(r){o.reject(r)}),o.promise()},getAnalysisData:function(r){var t=this,o=e.Deferred();return t._getInvoiceAnalysisData(r).done(function(r){o.resolve(r)}).fail(function(r){o.reject(r)}),o.promise()},isValidInvoiceObject:function(r){return"object"==typeof r&&!e.isEmptyObject(r)&&!!r.number&&e.isNumeric(r.close_date)},_getMinDatePdfInvoiceDetails:function(){var r,t=e.Deferred();return r={critical:!1,url:"/rest/my/invoice/min-date-pdf-invoice-details",success:function(r){t.resolve(r)},error:function(r){t.reject(r.error)},cache:!1},VF.core.ajax().init(r),t.promise()},reset:function(){return this.cache={invoices:[],notes:[],invoiceCharges:{},invoiceAnalysisData:{},subscriberCharges:{},averageInvoiceCosts:{},billingArrangements:[],all:[]},this}},r.VF.namespace("VF.services.billing.InvoicesService"),r.VF.services.billing.InvoicesService=o}(window,window.jQuery);