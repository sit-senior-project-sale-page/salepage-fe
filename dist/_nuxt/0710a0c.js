(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{450:function(t,e,r){"use strict";r.r(e);r(115);var c=r(21),n=r(22),o=r(64),l=r(65),f=r(39),d=r(15),v=(r(46),r(10),r(95),r(61),r(268),r(59));function _(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,c=Object(f.a)(t);if(e){var n=Object(f.a)(this).constructor;r=Reflect.construct(c,arguments,n)}else r=c.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(t,e,r,desc){var c,n=arguments.length,o=n<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(d.a)(Reflect))&&"function"==typeof Reflect.decorate)o=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(c=t[i])&&(o=(n<3?c(o):n>3?c(e,r,o):c(e,r))||o);return n>3&&o&&Object.defineProperty(e,r,o),o},h=function(t){Object(o.a)(r,t);var e=_(r);function r(){return Object(c.a)(this,r),e.apply(this,arguments)}return Object(n.a)(r,[{key:"productOptions",value:function(t){return t.productOptions?t.productOptions.map((function(option){return option.text})).join(", "):"-"}},{key:"productOptionImage",value:function(t){var e=t.productOptions.find((function(t){return"image"===t.model}));return e?e.value:"/images/preview-icon.png"}}]),r}(v.Vue);y([Object(v.Prop)({type:Array,default:function(){return[]}})],h.prototype,"products",void 0);var x=h=y([v.Component],h),m=r(28),component=Object(m.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"w-full"},[t._m(0),t._v(" "),r("div",{staticClass:"relative overflow-x-auto shadow-md sm:rounded-lg"},[r("table",{staticClass:"w-full text-sm text-center text-gray-500"},[t._m(1),t._v(" "),r("tbody",t._l(t.products,(function(e,c){return r("tr",{key:c,staticClass:"bg-white border-b mt-2"},[r("th",{staticClass:"flex justify-center py-4"},[r("img",{staticClass:"rounded-full object-cover w-16 h-16",attrs:{src:t.productOptionImage(e)}})]),t._v(" "),r("th",{staticClass:"px-6 py-4 font-medium text-gray-900 whitespace-nowrap",attrs:{scope:"row"}},[t._v("\n            "+t._s(e.productId)+"\n          ")]),t._v(" "),r("td",{staticClass:"px-6 py-4"},[t._v("\n            "+t._s(e.productName)+"\n          ")]),t._v(" "),r("td",{staticClass:"px-6 py-4"},[t._v("\n            "+t._s(e.productAmount)+"\n          ")]),t._v(" "),r("td",{staticClass:"px-6 py-4"},[t._v("\n            "+t._s(t.productOptions(e))+"\n          ")]),t._v(" "),r("td",{staticClass:"px-6 py-4"},[t._v(t._s(e.productPrice)+"฿")])])})),0)])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"py-4 text-center bg-white"},[r("h1",{staticClass:"text-2xl font-bold text-gray-900 uppercase"},[t._v("Product List")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"text-xs text-gray-700 uppercase bg-[#EDEDED]"},[r("tr",[r("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}}),t._v(" "),r("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("ID")]),t._v(" "),r("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Name")]),t._v(" "),r("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Amount")]),t._v(" "),r("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Option")]),t._v(" "),r("th",{staticClass:"px-6 py-3",attrs:{scope:"col"}},[t._v("Price")])])])}],!1,null,null,null);e.default=component.exports}}]);