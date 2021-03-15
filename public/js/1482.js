(self.webpackChunk=self.webpackChunk||[]).push([[1482],{1482:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>n});const i={props:{examCode:String,examStatus:String,question:Object,serial:Number},methods:{deleteQuestion:function(t){this.$inertia.delete(t,{preserveScroll:!0,onBefore:function(){return confirm("Are you sure you want to delete?")}})}}};const n=(0,s(1900).Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"relative p-5 bg-white shadow-sm"},[s("p",{staticClass:"absolute left-2 top-2 text-xs font-semibold uppercase tracking-wider bg-green-400 text-white rounded-full px-2 py-1 leading-none"},[t._v(t._s(t.question.subject.name))]),t._v(" "),s("div",{staticClass:"flex mt-3 mb-2"},[s("span",{staticClass:"font-bold"},[t._v(t._s(t.serial)+".")]),t._v(" "),s("h3",{staticClass:"ml-4",domProps:{innerHTML:t._s(t.question.question)}})]),t._v(" "),s("div",{staticClass:"pl-8 space-y-2"},[s("div",{staticClass:"flex items-center"},[s("input",{staticClass:"form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out",attrs:{disabled:"",type:"radio"},domProps:{checked:"a"==t.question.answer}}),t._v(" "),s("div",{staticClass:"ml-4",domProps:{innerHTML:t._s(t.question.options.a)}})]),t._v(" "),s("div",{staticClass:"flex items-center"},[s("input",{staticClass:"form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out",attrs:{disabled:"",type:"radio"},domProps:{checked:"b"==t.question.answer}}),t._v(" "),s("div",{staticClass:"ml-4",domProps:{innerHTML:t._s(t.question.options.b)}})]),t._v(" "),s("div",{staticClass:"flex items-center"},[s("input",{staticClass:"form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out",attrs:{disabled:"",type:"radio"},domProps:{checked:"c"==t.question.answer}}),t._v(" "),s("div",{staticClass:"ml-4",domProps:{innerHTML:t._s(t.question.options.c)}})]),t._v(" "),s("div",{staticClass:"flex items-center"},[s("input",{staticClass:"form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out",attrs:{disabled:"",type:"radio"},domProps:{checked:"d"==t.question.answer}}),t._v(" "),s("div",{staticClass:"ml-4",domProps:{innerHTML:t._s(t.question.options.d)}})])]),t._v(" "),"pending"===t.examStatus?s("div",{staticClass:"absolute right-0 top-0 mt-4 mr-3"},[s("inertia-link",{staticClass:"inline-flex items-center px-2 py-1 bg-gray-800 text-white text-xs font-bold tracking-widest uppercase rounded hover:bg-gray-600 focus:outline-none",attrs:{href:t.route("admin.questions.edit",[t.examCode,t.question.id])}},[s("svg",{staticClass:"h-5 w-5 stroke-current",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"}})])]),t._v(" "),s("button",{staticClass:"inline-flex items-center ml-3 px-2 py-1 bg-red-700 text-white text-xs font-bold tracking-widest uppercase rounded hover:bg-red-500 focus:outline-none",on:{click:function(e){e.preventDefault(),t.deleteQuestion(t.route("admin.questions.destroy",t.question.id))}}},[s("svg",{staticClass:"h-5 w-5 stroke-current",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}})])])],1):t._e()])])}),[],!1,null,null,null).exports},1900:(t,e,s)=>{"use strict";function i(t,e,s,i,n,o,r,a){var d,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=s,l._compiled=!0),i&&(l.functional=!0),o&&(l._scopeId="data-v-"+o),r?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=d):n&&(d=a?function(){n.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:n),d)if(l.functional){l._injectStyles=d;var c=l.render;l.render=function(t,e){return d.call(e),c(t,e)}}else{var u=l.beforeCreate;l.beforeCreate=u?[].concat(u,d):[d]}return{exports:t,options:l}}s.d(e,{Z:()=>i})}}]);