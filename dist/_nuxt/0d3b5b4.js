(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{449:function(t,e,r){"use strict";r.r(e);var o=r(21),c=r(22),n=r(64),l=r(65),d=r(39),f=r(15),m=(r(46),r(10),r(115),r(59));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,o=Object(d.a)(t);if(e){var c=Object(d.a)(this).constructor;r=Reflect.construct(o,arguments,c)}else r=o.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(t,e,r,desc){var o,c=arguments.length,n=c<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(f.a)(Reflect))&&"function"==typeof Reflect.decorate)n=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(o=t[i])&&(n=(c<3?o(n):c>3?o(e,r,n):o(e,r))||n);return c>3&&n&&Object.defineProperty(e,r,n),n},h=function(t){Object(n.a)(r,t);var e=v(r);function r(){var t;return Object(o.a)(this,r),(t=e.apply(this,arguments)).productName="",t.productDetail="",t}return Object(c.a)(r,[{key:"clearForm",value:function(){this.productName="",this.productDetail=""}}]),r}(m.Vue),x=h=y([Object(m.Component)({})],h),O=r(28),component=Object(O.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("form",[r("div",{staticClass:"mb-6"},[r("label",{staticClass:"block mb-2 text-[24px] font-bold text-gray-900",attrs:{for:"product"}},[t._v("Product")]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.productName,expression:"productName"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[50%] p-2.5",attrs:{type:"text",id:"product",placeholder:"Write your product's name",required:""},domProps:{value:t.productName},on:{input:function(e){e.target.composing||(t.productName=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"mb-6"},[r("label",{staticClass:"block mb-2 text-[24px] font-bold text-gray-900",attrs:{for:"product"}},[t._v("Detail")]),t._v(" "),r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.productDetail,expression:"productDetail"}],staticClass:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 h-32",attrs:{id:"message",rows:"4",placeholder:"Write your product’s detail"},domProps:{value:t.productDetail},on:{input:function(e){e.target.composing||(t.productDetail=e.target.value)}}})])])])}),[],!1,null,null,null);e.default=component.exports}}]);