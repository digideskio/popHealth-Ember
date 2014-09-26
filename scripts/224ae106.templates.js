Ember.TEMPLATES._results=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){b.buffer.push("Patients")}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j,k,l="",m=c.helperMissing,n=this.escapeExpression,o=this;return e.buffer.push('<div class="percent-listing">\n  <span class="percentage">'),i={},j={},k={hash:{},contexts:[b,b],types:["ID","STRING"],hashContexts:j,hashTypes:i,data:e},e.buffer.push(n((g=c.formatNumeral||b.formatNumeral,g?g.call(b,"performanceRate","0.[0]a",k):m.call(b,"formatNumeral","performanceRate","0.[0]a",k)))),e.buffer.push('<small>%</small></span>\n</div>\n<div class="row-remainder">\n  <div class="measure-type pull-left">\n    <i class="glyphicon glyphicon-user icon-popover" data-placement="bottom" data-content="Patients" data-trigger="hover focus"></i>\n  </div>\n\n  <div class="fraction-listing pull-left">\n    <div class="numerator">'),i={},j={},k={hash:{},contexts:[b,b],types:["ID","STRING"],hashContexts:j,hashTypes:i,data:e},e.buffer.push(n((g=c.formatNumeral||b.formatNumeral,g?g.call(b,"numerator","0.[0]a",k):m.call(b,"formatNumeral","numerator","0.[0]a",k)))),e.buffer.push('</div>\n    <div class="denominator">'),i={},j={},k={hash:{},contexts:[b,b],types:["ID","STRING"],hashContexts:j,hashTypes:i,data:e},e.buffer.push(n((g=c.formatNumeral||b.formatNumeral,g?g.call(b,"performanceDenominator","0.[0]a",k):m.call(b,"formatNumeral","performanceDenominator","0.[0]a",k)))),e.buffer.push('</div>\n  </div>\n\n  <div class="pop-chart pull-left"></div>\n\n  '),j={"class":b},i={"class":"STRING"},k={hash:{"class":"patient-btn pull-right"},inverse:o.noop,fn:o.program(1,f,e),contexts:[b,b,b],types:["STRING","ID","ID"],hashContexts:j,hashTypes:i,data:e},g=c["link-to"]||b["link-to"],h=g?g.call(b,"patientResults","measure.hqmfId","subId",k):m.call(b,"link-to","patientResults","measure.hqmfId","subId",k),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n</div>\n"),l}),Ember.TEMPLATES.application=Ember.Handlebars.template(function(a,b,c,d,e){this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var f,g,h="",i=this.escapeExpression;return e.buffer.push('<div>\n    <nav class="navbar navbar-default" role="navigation">\n        <div class="navbar-header">\n            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">\n                <span class="sr-only">Toggle navigation</span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n                <span class="icon-bar"></span>\n            </button>\n            <a class="navbar-brand" href="#">popHealth</a>\n        </div>\n        <div class="collapse navbar-collapse navbar-ex1-collapse">\n        </div>\n    </nav>\n    <div class="container" id="main">\n        '),f={},g={},e.buffer.push(i(c._triageMustache.call(b,"outlet",{hash:{},contexts:[b],types:["ID"],hashContexts:g,hashTypes:f,data:e}))),e.buffer.push("\n    </div>\n</div>\n"),h}),Ember.TEMPLATES.index=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,g,h="";return b.buffer.push("\n      "),e={},f={},g={hash:{},contexts:[a,a],types:["STRING","ID"],hashContexts:f,hashTypes:e,data:b},b.buffer.push(x((d=c.render||a.render,d?d.call(a,"sidebar-category","",g):w.call(a,"render","sidebar-category","",g)))),b.buffer.push("\n    "),h}function g(a,b){var d,e,f,g="";return b.buffer.push("\n    <h2>"),e={},f={},b.buffer.push(x(c._triageMustache.call(a,"name",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push('</h2>\n    <div class="category">\n      <div class="category-percent">\n        <div class="title-circle">%</div>\n      </div>\n      <div class="category-fraction">\n        <div class="fraction-listing">\n          <div class="numerator">Numerator</div>\n          <div class="denominator">Denominator</div>\n        </div>\n      </div>\n    </div>\n\n    '),f={itemController:a},e={itemController:"STRING"},d=c.each.call(a,"measure","in","selectedMeasures",{hash:{itemController:"dashboard-measure-result"},inverse:y.noop,fn:y.program(4,h,b),contexts:[a,a,a],types:["ID","ID","ID"],hashContexts:f,hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("\n\n    "),b.buffer.push("\n\n  "),g}function h(a,b){var d,e,f,g="";return b.buffer.push("\n      "),e={},f={},d=c["if"].call(a,"subs",{hash:{},inverse:y.program(15,p,b),fn:y.program(5,i,b),contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("\n    "),g}function i(a,b){var d,e,f,g="";return b.buffer.push("\n        "),e={itemController:a},f={itemController:"STRING"},d=c.each.call(a,"subs",{hash:{itemController:"dashboard-submeasure"},inverse:y.noop,fn:y.program(6,j,b),contexts:[a],types:["ID"],hashContexts:e,hashTypes:f,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("\n      "),g}function j(a,b){var d,e,f,g,h,i="";return b.buffer.push('\n          <div class="measure">\n            <div class="measure-identifier">\n              '),f={},g={},d=c["if"].call(a,"isPrimary",{hash:{},inverse:y.noop,fn:y.program(7,k,b),contexts:[a],types:["ID"],hashContexts:g,hashTypes:f,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push("\n            </div>\n            <div "),g={"class":a},f={"class":"STRING"},h={hash:{"class":"isPrimary:measure-info"},contexts:[],types:[],hashContexts:g,hashTypes:f,data:b},b.buffer.push(x((d=c["bind-attr"]||a["bind-attr"],d?d.call(a,h):w.call(a,"bind-attr",h)))),b.buffer.push('>\n              <div class="measure-title-id">\n                <div class="measure-title" '),g={"data-measure-sub":a},f={"data-measure-sub":"ID"},h={hash:{"data-measure-sub":"subId"},contexts:[],types:[],hashContexts:g,hashTypes:f,data:b},b.buffer.push(x((d=c["bind-attr"]||a["bind-attr"],d?d.call(a,h):w.call(a,"bind-attr",h)))),b.buffer.push(">\n                  "),f={},g={},e=c["if"].call(a,"isPrimary",{hash:{},inverse:y.noop,fn:y.program(10,m,b),contexts:[a],types:["ID"],hashContexts:g,hashTypes:f,data:b}),(e||0===e)&&b.buffer.push(e),b.buffer.push('\n                </div>\n                <div class="measure-subtitle">\n                  '),f={},g={},h={hash:{},inverse:y.noop,fn:y.program(13,o,b),contexts:[a,a,a],types:["STRING","ID","ID"],hashContexts:g,hashTypes:f,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"submeasure","measure.hqmfId","subId",h):w.call(a,"link-to","submeasure","measure.hqmfId","subId",h),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n                </div>\n              </div>\n              "),f={},g={},h={hash:{},contexts:[a],types:["STRING"],hashContexts:g,hashTypes:f,data:b},b.buffer.push(x((d=c.partial||a.partial,d?d.call(a,"results",h):w.call(a,"partial","results",h)))),b.buffer.push("\n            </div>\n          </div>\n        "),i}function k(a,b){var d,e,f;e={},f={},d=c["if"].call(a,"measure.cmsId",{hash:{},inverse:y.noop,fn:y.program(8,l,b),contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}),b.buffer.push(d||0===d?d:"")}function l(a,b){var d,e,f="";return b.buffer.push('\n                <div class="cms-cms">CMS</div>\n                <div class="cms-number">'),d={},e={},b.buffer.push(x(c._triageMustache.call(a,"measure.cmsNumber",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push('</div>\n                <div class="cms-version">v'),d={},e={},b.buffer.push(x(c._triageMustache.call(a,"measure.cmsVersion",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</div>\n              "),f}function m(a,b){var d,e,f,g,h,i="";return b.buffer.push("\n                    "),f={},g={},h={hash:{},inverse:y.noop,fn:y.program(11,n,b),contexts:[a,a,a],types:["STRING","ID","ID"],hashContexts:g,hashTypes:f,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"submeasure","parentController.hqmfId","subId",h):w.call(a,"link-to","submeasure","parentController.hqmfId","subId",h),(e||0===e)&&b.buffer.push(e),b.buffer.push("\n                  "),i}function n(a,b){var d,e;d={},e={},b.buffer.push(x(c._triageMustache.call(a,"parentController.name",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b})))}function o(a,b){var d,e;d={},e={},b.buffer.push(x(c._triageMustache.call(a,"shortSubtitle",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b})))}function p(a,b){var d,e,f,g,h,i="";return b.buffer.push('\n        <div class="measure">\n          <div class="measure-identifier">\n            '),f={},g={},d=c["if"].call(a,"cmsId",{hash:{},inverse:y.noop,fn:y.program(16,q,b),contexts:[a],types:["ID"],hashContexts:g,hashTypes:f,data:b}),(d||0===d)&&b.buffer.push(d),b.buffer.push('\n          </div>\n          <div class="measure-info">\n            <div class="measure-title-id">\n              <div class="measure-title">\n                '),f={},g={},h={hash:{},inverse:y.noop,fn:y.program(18,r,b),contexts:[a,a],types:["STRING","ID"],hashContexts:g,hashTypes:f,data:b},d=c["link-to"]||a["link-to"],e=d?d.call(a,"measure","hqmfId",h):w.call(a,"link-to","measure","hqmfId",h),(e||0===e)&&b.buffer.push(e),b.buffer.push('\n              </div>\n              <div class="measure-subtitle"></div>\n            </div>\n            '),f={},g={},h={hash:{},contexts:[a],types:["STRING"],hashContexts:g,hashTypes:f,data:b},b.buffer.push(x((d=c.partial||a.partial,d?d.call(a,"results",h):w.call(a,"partial","results",h)))),b.buffer.push("\n          </div>\n        </div>\n      "),i}function q(a,b){var d,e,f="";return b.buffer.push('\n              <div class="cms-cms">CMS</div>\n              <div class="cms-number">'),d={},e={},b.buffer.push(x(c._triageMustache.call(a,"cmsNumber",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push('</div>\n              <div class="cms-version">v'),d={},e={},b.buffer.push(x(c._triageMustache.call(a,"cmsVersion",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b}))),b.buffer.push("</div>\n            "),f}function r(a,b){var d,e;d={},e={},b.buffer.push(x(c._triageMustache.call(a,"name",{hash:{},contexts:[a],types:["ID"],hashContexts:e,hashTypes:d,data:b})))}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var s,t,u,v="",w=c.helperMissing,x=this.escapeExpression,y=this;return e.buffer.push('<div class="sidebar" id="filters">\n  <h3>Filters</h3>\n\n  <p class="input-group">\n    <input type="text" class="form-control category-measure-search" placeholder="measure or group title">\n    <span class="input-group-btn"><a class="btn btn-default clear-search" type="button">&times;</a></span>\n  </p>\n\n  <div class="panel-group" id="measureSelectors">\n    '),t={},u={},s=c.each.call(b,{hash:{},inverse:y.noop,fn:y.program(1,f,e),contexts:[],types:[],hashContexts:u,hashTypes:t,data:e}),(s||0===s)&&e.buffer.push(s),e.buffer.push('\n  </div>\n</div>\n\n\n<div class="main">\n  <div class="main-heading">\n    <h1 class="title">Measures</h1>\n    <div class="header-actions pull-right">\n\n      <div class="btn-group btn-group-md" data-toggle="buttons">\n        <label class="btn col-md-6 fa fa-align-left large-icon btn-default'),e.buffer.push(" active  btn-primary"),e.buffer.push('">\n          <input class="rescale" type="radio" value="false" name="population_chart_scale" '),e.buffer.push("checked"),e.buffer.push('/>\n        </label>\n        <label class="btn col-md-6 fa fa-align-justify large-icon btn-default'),e.buffer.push('">\n          <input class="rescale" type="radio" value="true" name="population_chart_scale" '),e.buffer.push('/>\n        </label>\n      </div>\n\n      <a href="/api/reports/qrda_cat3.xml'),e.buffer.push('" class="btn btn-primary"><i class="glyphicon glyphicon-download-alt"></i> Export</a>\n    </div>\n  </div>\n  '),u={itemController:b},t={itemController:"STRING"},s=c.each.call(b,"selectedCategories",{hash:{itemController:"dashboard-category"},inverse:y.noop,fn:y.program(3,g,e),contexts:[b],types:["ID"],hashContexts:u,hashTypes:t,data:e}),(s||0===s)&&e.buffer.push(s),e.buffer.push("\n</div>\n"),v}),Ember.TEMPLATES["sidebar-category"]=Ember.Handlebars.template(function(a,b,c,d,e){function f(a,b){var d,e,f,g,h="";return b.buffer.push('\n        <div class="btn-block-container">\n          <a '),e={},f={},b.buffer.push(m(c.action.call(a,"select",{hash:{},contexts:[a],types:["STRING"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push(" "),f={"class":a},e={"class":"STRING"},g={hash:{"class":":btn :btn-checkbox :btn-block :individual isSelected:active"},contexts:[],types:[],hashContexts:f,hashTypes:e,data:b},b.buffer.push(m((d=c["bind-attr"]||a["bind-attr"],d?d.call(a,g):n.call(a,"bind-attr",g)))),b.buffer.push(">"),e={},f={},b.buffer.push(m(c._triageMustache.call(a,"cmsId",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push(" - "),e={},f={},b.buffer.push(m(c._triageMustache.call(a,"name",{hash:{},contexts:[a],types:["ID"],hashContexts:f,hashTypes:e,data:b}))),b.buffer.push("</a>\n        </div>\n      "),h}this.compilerInfo=[4,">= 1.0.0"],c=this.merge(c,Ember.Handlebars.helpers),e=e||{};var g,h,i,j,k,l="",m=this.escapeExpression,n=c.helperMissing,o=this;return e.buffer.push('<div class="panel panel-default">\n  <div class="toggleable panel-heading" data-toggle="collapse" data-parent="#measureSelectors" data-target="#category'),i={},j={},e.buffer.push(m(c.unbound.call(b,"id",{hash:{},contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}))),e.buffer.push('">\n    <h4 class="panel-title">\n      <div class="selection-pull-out">\n        <span class="measure-count">'),i={},j={},e.buffer.push(m(c._triageMustache.call(b,"measureCount",{hash:{},contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}))),e.buffer.push("</span>\n        <i "),j={"class":b},i={"class":"STRING"},k={hash:{"class":":panel-chevron :glyphicon isOpen:glyphicon-chevron-down:glyphicon-chevron-right"},contexts:[],types:[],hashContexts:j,hashTypes:i,data:e},e.buffer.push(m((g=c["bind-attr"]||b["bind-attr"],g?g.call(b,k):n.call(b,"bind-attr",k)))),e.buffer.push("></i>\n      </div>\n      "),i={},j={},e.buffer.push(m(c._triageMustache.call(b,"name",{hash:{},contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}))),e.buffer.push('\n    </h4>\n  </div>\n  <div id="category'),i={},j={},e.buffer.push(m(c.unbound.call(b,"id",{hash:{},contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}))),e.buffer.push('" class="panel-collapse collapse">\n    <div class="panel-body">\n      <div class="btn-block-container">\n        <a '),i={},j={},e.buffer.push(m(c.action.call(b,"selectAll",{hash:{},contexts:[b],types:["STRING"],hashContexts:j,hashTypes:i,data:e}))),e.buffer.push(" "),j={"class":b},i={"class":"STRING"},k={hash:{"class":":btn :btn-checkbox :btn-block :all isAllSelected:active"},contexts:[],types:[],hashContexts:j,hashTypes:i,data:e},e.buffer.push(m((g=c["bind-attr"]||b["bind-attr"],g?g.call(b,k):n.call(b,"bind-attr",k)))),e.buffer.push(">Select All</a>\n      </div>\n      "),j={itemController:b},i={itemController:"STRING"},h=c.each.call(b,"measures",{hash:{itemController:"dashboard-measure"},inverse:o.noop,fn:o.program(1,f,e),contexts:[b],types:["ID"],hashContexts:j,hashTypes:i,data:e}),(h||0===h)&&e.buffer.push(h),e.buffer.push("\n    </div>\n  </div>\n</div>\n"),l});