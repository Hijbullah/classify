(self.webpackChunk=self.webpackChunk||[]).push([[2756],{6287:(t,e,s)=>{"use strict";s.d(e,{Z:()=>a});var n=s(3163),r=s(4792);const c={components:{AppDropdown:n.Z,AppDropdownLink:r.Z},data:function(){return{showingNavigationDropdown:!1}},methods:{logout:function(){this.$inertia.post(route("logout"))}}};const a=(0,s(1900).Z)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"sticky top-0 z-40"},[s("div",{staticClass:"w-full h-16 px-6 bg-gray-100 border-b flex items-center justify-between"},[s("div",{staticClass:"flex"},[s("div",{staticClass:"inline-block  items-center"},[s("button",{staticClass:"hover:text-blue-500 hover:border-white focus:outline-none navbar-burger"},[s("svg",{staticClass:"h-5 w-5",style:{fill:"black"},attrs:{viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[s("title",[t._v("Menu")]),s("path",{attrs:{d:"M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"}})])])])]),t._v(" "),s("div",{staticClass:"flex items-center ml-6"},[s("div",{staticClass:"ml-3 relative"},[s("app-dropdown",{attrs:{align:"right",width:"48"},scopedSlots:t._u([{key:"trigger",fn:function(){return[s("span",{staticClass:"inline-flex rounded-md"},[s("button",{staticClass:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",attrs:{type:"button"}},[t._v("\n                                "+t._s(t.$page.props.auth.user.last_name)+"\n\n                                "),s("svg",{staticClass:"ml-2 -mr-0.5 h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"}},[s("path",{attrs:{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"}})])])])]},proxy:!0},{key:"content",fn:function(){return[s("div",{staticClass:"block px-4 py-2 text-xs text-gray-400"},[t._v("\n                            Manage Account\n                        ")]),t._v(" "),s("div",{staticClass:"border-t border-gray-100"}),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.logout(e)}}},[s("app-dropdown-link",{attrs:{as:"button"}},[t._v("\n                                Logout\n                            ")])],1)]},proxy:!0}])})],1)])])])}),[],!1,null,null,null).exports},2634:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});const n={props:["href","active"],computed:{classes:function(){return this.active?"w-full flex items-center text-blue-400 h-10 pl-4 bg-gray-200 hover:bg-gray-200 rounded-lg cursor-pointer":"w-full flex items-center text-blue-400 h-10 pl-4 hover:bg-gray-200 rounded-lg cursor-pointer"}}};const r=(0,s(1900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("inertia-link",{class:t.classes,attrs:{href:t.href}},[t._t("icon"),t._v(" "),s("span",{staticClass:"text-gray-700"},[t._t("default")],2)],2)}),[],!1,null,null,null).exports},3163:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});const n={props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:function(){return["py-1","bg-white"]}}},data:function(){return{open:!1}},created:function(){var t=this,e=function(e){t.open&&27===e.keyCode&&(t.open=!1)};this.$once("hook:destroyed",(function(){document.removeEventListener("keydown",e)})),document.addEventListener("keydown",e)},computed:{widthClass:function(){return{48:"w-48"}[this.width.toString()]},alignmentClasses:function(){return"left"===this.align?"origin-top-left left-0":"right"===this.align?"origin-top-right right-0":"origin-top"}}};const r=(0,s(1900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"relative"},[s("div",{on:{click:function(e){t.open=!t.open}}},[t._t("trigger")],2),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"fixed inset-0 z-40",on:{click:function(e){t.open=!1}}}),t._v(" "),s("transition",{attrs:{"enter-active-class":"transition ease-out duration-200","enter-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.open,expression:"open"}],staticClass:"absolute z-50 mt-2 rounded-md shadow-lg",class:[t.widthClass,t.alignmentClasses],staticStyle:{display:"none"},on:{click:function(e){t.open=!1}}},[s("div",{staticClass:"rounded-md ring-1 ring-black ring-opacity-5",class:t.contentClasses},[t._t("content")],2)])])],1)}),[],!1,null,null,null).exports},4792:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});const n={props:["href","as"]};const r=(0,s(1900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",["button"==t.as?s("button",{staticClass:"block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",attrs:{type:"submit"}},[t._t("default")],2):s("inertia-link",{staticClass:"block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",attrs:{href:t.href}},[t._t("default")],2)],1)}),[],!1,null,null,null).exports},7809:(t,e,s)=>{"use strict";s.d(e,{Z:()=>r});const n={props:{links:Array}};const r=(0,s(1900).Z)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mt-6 -mb-1 flex flex-wrap"},[t._l(t.links,(function(e,n){return[null===e.url?s("div",{key:n,staticClass:"mr-1 mb-1 px-4 py-2 text-sm border rounded text-gray-400",class:{"ml-auto":"Next"===e.label}},[t._v(t._s(e.label))]):s("inertia-link",{key:n,staticClass:"mr-1 mb-1 px-4 py-2 text-sm border rounded hover:bg-white focus:border-indigo-500 focus:text-indigo-500",class:{"bg-white":e.active,"ml-auto":"Next"===e.label},attrs:{href:e.url}},[t._v(t._s(e.label))])]}))],2)}),[],!1,null,null,null).exports},1578:(t,e,s)=>{"use strict";s.d(e,{Z:()=>o});var n=s(6287);const r={components:{SidebarNavLink:s(2634).Z}};var c=s(1900);const a=(0,c.Z)(r,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-1/2 md:w-1/3 lg:w-64 fixed md:top-0 md:left-0 h-screen hidden sm:block bg-gray-100 border-r z-30"},[t._m(0),t._v(" "),s("div",{staticClass:"overflow-y-auto",staticStyle:{height:"calc(100vh - 100px)"}},[s("div",{staticClass:"mb-4 px-4"},[s("p",{staticClass:"pl-4 text-sm font-semibold mb-2"},[t._v("MAIN")]),t._v(" "),s("sidebar-nav-link",{attrs:{href:t.route("admin.dashboard"),active:t.route().current("admin.dashboard")},scopedSlots:t._u([{key:"icon",fn:function(){return[s("svg",{staticClass:"h-6 w-6 fill-current mr-2",attrs:{viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M18.121,9.88l-7.832-7.836c-0.155-0.158-0.428-0.155-0.584,0L1.842,9.913c-0.262,0.263-0.073,0.705,0.292,0.705h2.069v7.042c0,0.227,0.187,0.414,0.414,0.414h3.725c0.228,0,0.414-0.188,0.414-0.414v-3.313h2.483v3.313c0,0.227,0.187,0.414,0.413,0.414h3.726c0.229,0,0.414-0.188,0.414-0.414v-7.042h2.068h0.004C18.331,10.617,18.389,10.146,18.121,9.88 M14.963,17.245h-2.896v-3.313c0-0.229-0.186-0.415-0.414-0.415H8.342c-0.228,0-0.414,0.187-0.414,0.415v3.313H5.032v-6.628h9.931V17.245z M3.133,9.79l6.864-6.868l6.867,6.868H3.133z"}})])]},proxy:!0}])},[t._v("\n\n                Dashboard\n            ")]),t._v(" "),s("sidebar-nav-link",{attrs:{href:t.route("admin.courses.index"),active:t.route().current("admin.courses.*")},scopedSlots:t._u([{key:"icon",fn:function(){return[s("svg",{staticClass:"h-6 w-6 fill-current mr-2",attrs:{viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M17.431,2.156h-3.715c-0.228,0-0.413,0.186-0.413,0.413v6.973h-2.89V6.687c0-0.229-0.186-0.413-0.413-0.413H6.285c-0.228,0-0.413,0.184-0.413,0.413v6.388H2.569c-0.227,0-0.413,0.187-0.413,0.413v3.942c0,0.228,0.186,0.413,0.413,0.413h14.862c0.228,0,0.413-0.186,0.413-0.413V2.569C17.844,2.342,17.658,2.156,17.431,2.156 M5.872,17.019h-2.89v-3.117h2.89V17.019zM9.587,17.019h-2.89V7.1h2.89V17.019z M13.303,17.019h-2.89v-6.651h2.89V17.019z M17.019,17.019h-2.891V2.982h2.891V17.019z"}})])]},proxy:!0}])},[t._v("\n\n                Courses\n            ")]),t._v(" "),s("sidebar-nav-link",{attrs:{href:t.route("admin.batches.index"),active:t.route().current("admin.batches.*")},scopedSlots:t._u([{key:"icon",fn:function(){return[s("svg",{staticClass:"h-6 w-6 fill-current mr-2",attrs:{viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M17.283,5.549h-5.26V4.335c0-0.222-0.183-0.404-0.404-0.404H8.381c-0.222,0-0.404,0.182-0.404,0.404v1.214h-5.26c-0.223,0-0.405,0.182-0.405,0.405v9.71c0,0.223,0.182,0.405,0.405,0.405h14.566c0.223,0,0.404-0.183,0.404-0.405v-9.71C17.688,5.731,17.506,5.549,17.283,5.549 M8.786,4.74h2.428v0.809H8.786V4.74z M16.879,15.26H3.122v-4.046h5.665v1.201c0,0.223,0.182,0.404,0.405,0.404h1.618c0.222,0,0.405-0.182,0.405-0.404v-1.201h5.665V15.26z M9.595,9.583h0.81v2.428h-0.81V9.583zM16.879,10.405h-5.665V9.19c0-0.222-0.183-0.405-0.405-0.405H9.191c-0.223,0-0.405,0.183-0.405,0.405v1.215H3.122V6.358h13.757V10.405z"}})])]},proxy:!0}])},[t._v("\n\n                Batches\n            ")]),t._v(" "),s("sidebar-nav-link",{attrs:{href:t.route("admin.subjects.index"),active:t.route().current("admin.subjects.*")},scopedSlots:t._u([{key:"icon",fn:function(){return[s("svg",{staticClass:"h-6 w-6 fill-current mr-2",attrs:{viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M6.176,7.241V6.78c0-0.221-0.181-0.402-0.402-0.402c-0.221,0-0.403,0.181-0.403,0.402v0.461C4.79,7.416,4.365,7.955,4.365,8.591c0,0.636,0.424,1.175,1.006,1.35v3.278c0,0.222,0.182,0.402,0.403,0.402c0.222,0,0.402-0.181,0.402-0.402V9.941c0.582-0.175,1.006-0.714,1.006-1.35C7.183,7.955,6.758,7.416,6.176,7.241 M5.774,9.195c-0.332,0-0.604-0.272-0.604-0.604c0-0.332,0.272-0.604,0.604-0.604c0.332,0,0.604,0.272,0.604,0.604C6.377,8.923,6.105,9.195,5.774,9.195 M10.402,10.058V6.78c0-0.221-0.181-0.402-0.402-0.402c-0.222,0-0.402,0.181-0.402,0.402v3.278c-0.582,0.175-1.006,0.714-1.006,1.35c0,0.637,0.424,1.175,1.006,1.351v0.461c0,0.222,0.181,0.402,0.402,0.402c0.221,0,0.402-0.181,0.402-0.402v-0.461c0.582-0.176,1.006-0.714,1.006-1.351C11.408,10.772,10.984,10.233,10.402,10.058M10,12.013c-0.333,0-0.604-0.272-0.604-0.604S9.667,10.805,10,10.805c0.332,0,0.604,0.271,0.604,0.604S10.332,12.013,10,12.013M14.629,8.448V6.78c0-0.221-0.182-0.402-0.403-0.402c-0.221,0-0.402,0.181-0.402,0.402v1.668c-0.581,0.175-1.006,0.714-1.006,1.35c0,0.636,0.425,1.176,1.006,1.351v2.07c0,0.222,0.182,0.402,0.402,0.402c0.222,0,0.403-0.181,0.403-0.402v-2.07c0.581-0.175,1.006-0.715,1.006-1.351C15.635,9.163,15.21,8.624,14.629,8.448 M14.226,10.402c-0.331,0-0.604-0.272-0.604-0.604c0-0.332,0.272-0.604,0.604-0.604c0.332,0,0.604,0.272,0.604,0.604C14.83,10.13,14.558,10.402,14.226,10.402 M17.647,3.962H2.353c-0.221,0-0.402,0.181-0.402,0.402v11.27c0,0.222,0.181,0.402,0.402,0.402h15.295c0.222,0,0.402-0.181,0.402-0.402V4.365C18.05,4.144,17.869,3.962,17.647,3.962 M17.245,15.232H2.755V4.768h14.49V15.232z"}})])]},proxy:!0}])},[t._v("\n\n                Subjects\n            ")]),t._v(" "),s("sidebar-nav-link",{attrs:{href:t.route("admin.lecture-sheets.index"),active:t.route().current("admin.lecture-sheets.*")},scopedSlots:t._u([{key:"icon",fn:function(){return[s("svg",{staticClass:"h-6 w-6 fill-current mr-2",attrs:{viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M6.176,7.241V6.78c0-0.221-0.181-0.402-0.402-0.402c-0.221,0-0.403,0.181-0.403,0.402v0.461C4.79,7.416,4.365,7.955,4.365,8.591c0,0.636,0.424,1.175,1.006,1.35v3.278c0,0.222,0.182,0.402,0.403,0.402c0.222,0,0.402-0.181,0.402-0.402V9.941c0.582-0.175,1.006-0.714,1.006-1.35C7.183,7.955,6.758,7.416,6.176,7.241 M5.774,9.195c-0.332,0-0.604-0.272-0.604-0.604c0-0.332,0.272-0.604,0.604-0.604c0.332,0,0.604,0.272,0.604,0.604C6.377,8.923,6.105,9.195,5.774,9.195 M10.402,10.058V6.78c0-0.221-0.181-0.402-0.402-0.402c-0.222,0-0.402,0.181-0.402,0.402v3.278c-0.582,0.175-1.006,0.714-1.006,1.35c0,0.637,0.424,1.175,1.006,1.351v0.461c0,0.222,0.181,0.402,0.402,0.402c0.221,0,0.402-0.181,0.402-0.402v-0.461c0.582-0.176,1.006-0.714,1.006-1.351C11.408,10.772,10.984,10.233,10.402,10.058M10,12.013c-0.333,0-0.604-0.272-0.604-0.604S9.667,10.805,10,10.805c0.332,0,0.604,0.271,0.604,0.604S10.332,12.013,10,12.013M14.629,8.448V6.78c0-0.221-0.182-0.402-0.403-0.402c-0.221,0-0.402,0.181-0.402,0.402v1.668c-0.581,0.175-1.006,0.714-1.006,1.35c0,0.636,0.425,1.176,1.006,1.351v2.07c0,0.222,0.182,0.402,0.402,0.402c0.222,0,0.403-0.181,0.403-0.402v-2.07c0.581-0.175,1.006-0.715,1.006-1.351C15.635,9.163,15.21,8.624,14.629,8.448 M14.226,10.402c-0.331,0-0.604-0.272-0.604-0.604c0-0.332,0.272-0.604,0.604-0.604c0.332,0,0.604,0.272,0.604,0.604C14.83,10.13,14.558,10.402,14.226,10.402 M17.647,3.962H2.353c-0.221,0-0.402,0.181-0.402,0.402v11.27c0,0.222,0.181,0.402,0.402,0.402h15.295c0.222,0,0.402-0.181,0.402-0.402V4.365C18.05,4.144,17.869,3.962,17.647,3.962 M17.245,15.232H2.755V4.768h14.49V15.232z"}})])]},proxy:!0}])},[t._v("\n\n                Lecture Sheets\n            ")]),t._v(" "),s("sidebar-nav-link",{attrs:{href:t.route("admin.schedules.index"),active:t.route().current("admin.schedules.*")},scopedSlots:t._u([{key:"icon",fn:function(){return[s("svg",{staticClass:"h-6 w-6 fill-current mr-2",attrs:{viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M15.396,2.292H4.604c-0.212,0-0.385,0.174-0.385,0.386v14.646c0,0.212,0.173,0.385,0.385,0.385h10.792c0.211,0,0.385-0.173,0.385-0.385V2.677C15.781,2.465,15.607,2.292,15.396,2.292 M15.01,16.938H4.99v-2.698h1.609c0.156,0.449,0.586,0.771,1.089,0.771c0.638,0,1.156-0.519,1.156-1.156s-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.321-1.089,0.771H4.99v-3.083h1.609c0.156,0.449,0.586,0.771,1.089,0.771c0.638,0,1.156-0.518,1.156-1.156c0-0.638-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.322-1.089,0.771H4.99V6.531h1.609C6.755,6.98,7.185,7.302,7.688,7.302c0.638,0,1.156-0.519,1.156-1.156c0-0.638-0.519-1.156-1.156-1.156c-0.503,0-0.933,0.322-1.089,0.771H4.99V3.062h10.02V16.938z M7.302,13.854c0-0.212,0.173-0.386,0.385-0.386s0.385,0.174,0.385,0.386s-0.173,0.385-0.385,0.385S7.302,14.066,7.302,13.854 M7.302,10c0-0.212,0.173-0.385,0.385-0.385S8.073,9.788,8.073,10s-0.173,0.385-0.385,0.385S7.302,10.212,7.302,10 M7.302,6.146c0-0.212,0.173-0.386,0.385-0.386s0.385,0.174,0.385,0.386S7.899,6.531,7.688,6.531S7.302,6.358,7.302,6.146"}})])]},proxy:!0}])},[t._v("\n\n                Class Schedules\n            ")])],1),t._v(" "),s("div",{staticClass:"mb-4 px-4"},[s("p",{staticClass:"pl-4 text-sm font-semibold mb-1"},[t._v("Exams")]),t._v(" "),s("sidebar-nav-link",{attrs:{href:t.route("admin.exam-categories.index"),active:t.route().current("admin.exam-categories.*")},scopedSlots:t._u([{key:"icon",fn:function(){return[s("svg",{staticClass:"h-6 w-6 fill-current mr-2",attrs:{viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M6.176,7.241V6.78c0-0.221-0.181-0.402-0.402-0.402c-0.221,0-0.403,0.181-0.403,0.402v0.461C4.79,7.416,4.365,7.955,4.365,8.591c0,0.636,0.424,1.175,1.006,1.35v3.278c0,0.222,0.182,0.402,0.403,0.402c0.222,0,0.402-0.181,0.402-0.402V9.941c0.582-0.175,1.006-0.714,1.006-1.35C7.183,7.955,6.758,7.416,6.176,7.241 M5.774,9.195c-0.332,0-0.604-0.272-0.604-0.604c0-0.332,0.272-0.604,0.604-0.604c0.332,0,0.604,0.272,0.604,0.604C6.377,8.923,6.105,9.195,5.774,9.195 M10.402,10.058V6.78c0-0.221-0.181-0.402-0.402-0.402c-0.222,0-0.402,0.181-0.402,0.402v3.278c-0.582,0.175-1.006,0.714-1.006,1.35c0,0.637,0.424,1.175,1.006,1.351v0.461c0,0.222,0.181,0.402,0.402,0.402c0.221,0,0.402-0.181,0.402-0.402v-0.461c0.582-0.176,1.006-0.714,1.006-1.351C11.408,10.772,10.984,10.233,10.402,10.058M10,12.013c-0.333,0-0.604-0.272-0.604-0.604S9.667,10.805,10,10.805c0.332,0,0.604,0.271,0.604,0.604S10.332,12.013,10,12.013M14.629,8.448V6.78c0-0.221-0.182-0.402-0.403-0.402c-0.221,0-0.402,0.181-0.402,0.402v1.668c-0.581,0.175-1.006,0.714-1.006,1.35c0,0.636,0.425,1.176,1.006,1.351v2.07c0,0.222,0.182,0.402,0.402,0.402c0.222,0,0.403-0.181,0.403-0.402v-2.07c0.581-0.175,1.006-0.715,1.006-1.351C15.635,9.163,15.21,8.624,14.629,8.448 M14.226,10.402c-0.331,0-0.604-0.272-0.604-0.604c0-0.332,0.272-0.604,0.604-0.604c0.332,0,0.604,0.272,0.604,0.604C14.83,10.13,14.558,10.402,14.226,10.402 M17.647,3.962H2.353c-0.221,0-0.402,0.181-0.402,0.402v11.27c0,0.222,0.181,0.402,0.402,0.402h15.295c0.222,0,0.402-0.181,0.402-0.402V4.365C18.05,4.144,17.869,3.962,17.647,3.962 M17.245,15.232H2.755V4.768h14.49V15.232z"}})])]},proxy:!0}])},[t._v("\n\n                Categories\n            ")]),t._v(" "),s("sidebar-nav-link",{attrs:{href:t.route("admin.exams.index"),active:t.route().current("admin.exams.*")||t.route().current("admin.questions.*")},scopedSlots:t._u([{key:"icon",fn:function(){return[s("svg",{staticClass:"h-6 w-6 fill-current mr-2",attrs:{viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M6.176,7.241V6.78c0-0.221-0.181-0.402-0.402-0.402c-0.221,0-0.403,0.181-0.403,0.402v0.461C4.79,7.416,4.365,7.955,4.365,8.591c0,0.636,0.424,1.175,1.006,1.35v3.278c0,0.222,0.182,0.402,0.403,0.402c0.222,0,0.402-0.181,0.402-0.402V9.941c0.582-0.175,1.006-0.714,1.006-1.35C7.183,7.955,6.758,7.416,6.176,7.241 M5.774,9.195c-0.332,0-0.604-0.272-0.604-0.604c0-0.332,0.272-0.604,0.604-0.604c0.332,0,0.604,0.272,0.604,0.604C6.377,8.923,6.105,9.195,5.774,9.195 M10.402,10.058V6.78c0-0.221-0.181-0.402-0.402-0.402c-0.222,0-0.402,0.181-0.402,0.402v3.278c-0.582,0.175-1.006,0.714-1.006,1.35c0,0.637,0.424,1.175,1.006,1.351v0.461c0,0.222,0.181,0.402,0.402,0.402c0.221,0,0.402-0.181,0.402-0.402v-0.461c0.582-0.176,1.006-0.714,1.006-1.351C11.408,10.772,10.984,10.233,10.402,10.058M10,12.013c-0.333,0-0.604-0.272-0.604-0.604S9.667,10.805,10,10.805c0.332,0,0.604,0.271,0.604,0.604S10.332,12.013,10,12.013M14.629,8.448V6.78c0-0.221-0.182-0.402-0.403-0.402c-0.221,0-0.402,0.181-0.402,0.402v1.668c-0.581,0.175-1.006,0.714-1.006,1.35c0,0.636,0.425,1.176,1.006,1.351v2.07c0,0.222,0.182,0.402,0.402,0.402c0.222,0,0.403-0.181,0.403-0.402v-2.07c0.581-0.175,1.006-0.715,1.006-1.351C15.635,9.163,15.21,8.624,14.629,8.448 M14.226,10.402c-0.331,0-0.604-0.272-0.604-0.604c0-0.332,0.272-0.604,0.604-0.604c0.332,0,0.604,0.272,0.604,0.604C14.83,10.13,14.558,10.402,14.226,10.402 M17.647,3.962H2.353c-0.221,0-0.402,0.181-0.402,0.402v11.27c0,0.222,0.181,0.402,0.402,0.402h15.295c0.222,0,0.402-0.181,0.402-0.402V4.365C18.05,4.144,17.869,3.962,17.647,3.962 M17.245,15.232H2.755V4.768h14.49V15.232z"}})])]},proxy:!0}])},[t._v("\n\n                Exams\n            ")])],1),t._v(" "),s("div",{staticClass:"mb-4 px-4"},[s("p",{staticClass:"pl-4 text-sm font-semibold mb-1"},[t._v("Students")]),t._v(" "),s("sidebar-nav-link",{attrs:{href:t.route("admin.applications.index"),active:t.route().current("admin.applications.*")},scopedSlots:t._u([{key:"icon",fn:function(){return[s("svg",{staticClass:"h-6 w-6 fill-current mr-2",attrs:{viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"}})])]},proxy:!0}])},[t._v("\n\n                Applications\n            ")]),t._v(" "),s("sidebar-nav-link",{attrs:{href:t.route("admin.students.index"),active:t.route().current("admin.students.*")},scopedSlots:t._u([{key:"icon",fn:function(){return[s("svg",{staticClass:"h-6 w-6 fill-current mr-2",attrs:{viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M16.557,4.467h-1.64v-0.82c0-0.225-0.183-0.41-0.409-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H5.901v-0.82c0-0.225-0.185-0.41-0.41-0.41c-0.226,0-0.41,0.185-0.41,0.41v0.82H3.442c-0.904,0-1.64,0.735-1.64,1.639v9.017c0,0.904,0.736,1.64,1.64,1.64h13.114c0.904,0,1.64-0.735,1.64-1.64V6.106C18.196,5.203,17.461,4.467,16.557,4.467 M17.377,15.123c0,0.453-0.366,0.819-0.82,0.819H3.442c-0.453,0-0.82-0.366-0.82-0.819V8.976h14.754V15.123z M17.377,8.156H2.623V6.106c0-0.453,0.367-0.82,0.82-0.82h1.639v1.23c0,0.225,0.184,0.41,0.41,0.41c0.225,0,0.41-0.185,0.41-0.41v-1.23h8.196v1.23c0,0.225,0.185,0.41,0.41,0.41c0.227,0,0.409-0.185,0.409-0.41v-1.23h1.64c0.454,0,0.82,0.367,0.82,0.82V8.156z"}})])]},proxy:!0}])},[t._v("\n\n                Students\n            ")])],1),t._v(" "),s("div",{staticClass:"mb-4 px-4"},[s("p",{staticClass:"pl-4 text-sm font-semibold mb-1"},[t._v("Administrator")]),t._v(" "),s("sidebar-nav-link",{attrs:{href:t.route("admin.users.index"),active:t.route().current("admin.users.*")},scopedSlots:t._u([{key:"icon",fn:function(){return[s("svg",{staticClass:"h-6 w-6 fill-current mr-2",attrs:{viewBox:"0 0 20 20"}},[s("path",{attrs:{d:"M6.176,7.241V6.78c0-0.221-0.181-0.402-0.402-0.402c-0.221,0-0.403,0.181-0.403,0.402v0.461C4.79,7.416,4.365,7.955,4.365,8.591c0,0.636,0.424,1.175,1.006,1.35v3.278c0,0.222,0.182,0.402,0.403,0.402c0.222,0,0.402-0.181,0.402-0.402V9.941c0.582-0.175,1.006-0.714,1.006-1.35C7.183,7.955,6.758,7.416,6.176,7.241 M5.774,9.195c-0.332,0-0.604-0.272-0.604-0.604c0-0.332,0.272-0.604,0.604-0.604c0.332,0,0.604,0.272,0.604,0.604C6.377,8.923,6.105,9.195,5.774,9.195 M10.402,10.058V6.78c0-0.221-0.181-0.402-0.402-0.402c-0.222,0-0.402,0.181-0.402,0.402v3.278c-0.582,0.175-1.006,0.714-1.006,1.35c0,0.637,0.424,1.175,1.006,1.351v0.461c0,0.222,0.181,0.402,0.402,0.402c0.221,0,0.402-0.181,0.402-0.402v-0.461c0.582-0.176,1.006-0.714,1.006-1.351C11.408,10.772,10.984,10.233,10.402,10.058M10,12.013c-0.333,0-0.604-0.272-0.604-0.604S9.667,10.805,10,10.805c0.332,0,0.604,0.271,0.604,0.604S10.332,12.013,10,12.013M14.629,8.448V6.78c0-0.221-0.182-0.402-0.403-0.402c-0.221,0-0.402,0.181-0.402,0.402v1.668c-0.581,0.175-1.006,0.714-1.006,1.35c0,0.636,0.425,1.176,1.006,1.351v2.07c0,0.222,0.182,0.402,0.402,0.402c0.222,0,0.403-0.181,0.403-0.402v-2.07c0.581-0.175,1.006-0.715,1.006-1.351C15.635,9.163,15.21,8.624,14.629,8.448 M14.226,10.402c-0.331,0-0.604-0.272-0.604-0.604c0-0.332,0.272-0.604,0.604-0.604c0.332,0,0.604,0.272,0.604,0.604C14.83,10.13,14.558,10.402,14.226,10.402 M17.647,3.962H2.353c-0.221,0-0.402,0.181-0.402,0.402v11.27c0,0.222,0.181,0.402,0.402,0.402h15.295c0.222,0,0.402-0.181,0.402-0.402V4.365C18.05,4.144,17.869,3.962,17.647,3.962 M17.245,15.232H2.755V4.768h14.49V15.232z"}})])]},proxy:!0}])},[t._v("\n\n                Users\n            ")])],1)])])}),[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"w-full h-16 border-b flex px-4 items-center mb-6"},[s("p",{staticClass:"font-semibold text-3xl text-blue-400 pl-4"},[t._v("LOGO")])])}],!1,null,null,null).exports,i={components:{AdminNavbar:n.Z,AdminSidebar:a}};const o=(0,c.Z)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"leading-normal tracking-normal"},[s("div",{staticClass:"flex flex-wrap"},[s("AdminSidebar"),t._v(" "),s("div",{staticClass:"w-full bg-gray-100 pl-0 lg:pl-64 min-h-screen"},[s("AdminNavbar"),t._v(" "),s("main",[s("div",{staticClass:"p-6 bg-gray-100 mb-20"},[t._t("default")],2)]),t._v(" "),s("portal-target",{attrs:{name:"modal",multiple:""}})],1)],1)])}),[],!1,null,null,null).exports},2756:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>a});var n=s(1578),r=s(7809);const c={components:{AdminLayout:n.Z,Pagination:r.Z},props:{users:Object},methods:{deleteUser:function(t){this.$inertia.delete(t,{onBefore:function(){return confirm("Are you sure you want to delete?")}})}}};const a=(0,s(1900).Z)(c,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("admin-layout",[s("div",[s("h2",{staticClass:"text-xl text-gray-900 font-semibold border-b-2 border-gray-900"},[t._v("All Admins and Teachers")]),t._v(" "),s("div",{staticClass:"mt-5"},[s("div",{staticClass:"mb-6 flex justify-end items-center"},[s("div",[s("inertia-link",{staticClass:"btn-main px-3 py-2 text-sm font-semibold uppercase tracking-widest",attrs:{href:t.route("admin.users.create")}},[t._v("\n                        Create\n                    ")])],1)]),t._v(" "),s("div",{staticClass:"bg-white rounded shadow overflow-x-auto"},[s("table",{staticClass:"w-full whitespace-no-wrap"},[s("tr",{staticClass:"text-left"},[s("th",{staticClass:"px-6 pt-4 pb-4 font-normal"},[t._v("Name")]),t._v(" "),s("th",{staticClass:"px-6 pt-4 pb-4 font-normal text-center"},[t._v("Email")]),t._v(" "),s("th",{staticClass:"px-6 pt-4 pb-4 font-normal text-center"},[t._v("Type")]),t._v(" "),s("th",{staticClass:"px-6 pt-4 pb-4 font-normal text-center"},[t._v("Joined Date")]),t._v(" "),s("th",{staticClass:"px-6 pt-4 pb-4 font-normal text-center"},[t._v("Action")])]),t._v(" "),t._l(t.users.data,(function(e){return s("tr",{key:e.id,staticClass:"hover:bg-gray-100 focus-within:bg-gray-100"},[s("td",{staticClass:"border-t px-6 py-2"},[t._v("\n                            "+t._s(e.name)+"\n                        ")]),t._v(" "),s("td",{staticClass:"border-t px-6 py-2 text-center"},[t._v("\n                            "+t._s(e.email)+"\n                        ")]),t._v(" "),s("td",{staticClass:"border-t px-6 py-2 text-center"},["admin"===e.type?s("span",{staticClass:"inline-flex items-center px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full uppercase tracking-wider"},[t._v("Admin")]):s("span",{staticClass:"inline-flex items-center px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full uppercase tracking-wider"},[t._v("Teacher")])]),t._v(" "),s("td",{staticClass:"border-t px-6 py-2 text-center"},[t._v("\n                            "+t._s(e.joined_at)+"\n                        ")]),t._v(" "),s("td",{staticClass:"border-t px-6 py-2 text-center space-x-2"},[s("inertia-link",{staticClass:"inline-flex text-gray-800 hover:text-gray-500 focus:outline-none",attrs:{href:t.route("admin.users.edit",e.id)}},[s("svg",{staticClass:"h-5 w-5 stroke-current",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"}})])]),t._v(" "),s("button",{staticClass:"inline-flex text-red-500 hover:text-red-700 focus:outline-none",on:{click:function(s){s.preventDefault(),t.deleteUser(t.route("admin.users.destroy",e.id))}}},[s("svg",{staticClass:"h-5 w-5 stroke-current",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[s("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"}})])])],1)])})),t._v(" "),0===t.users.data.length?s("tr",[s("td",{staticClass:"border-t px-6 py-4",attrs:{colspan:"4"}},[t._v("No user found.")])]):t._e()],2)]),t._v(" "),t.users.data.length?s("pagination",{attrs:{links:t.users.links}}):t._e()],1)])])}),[],!1,null,null,null).exports},1900:(t,e,s)=>{"use strict";function n(t,e,s,n,r,c,a,i){var o,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=s,l._compiled=!0),n&&(l.functional=!0),c&&(l._scopeId="data-v-"+c),a?(o=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=o):r&&(o=i?function(){r.call(this,(l.functional?this.parent:this).$root.$options.shadowRoot)}:r),o)if(l.functional){l._injectStyles=o;var u=l.render;l.render=function(t,e){return o.call(e),u(t,e)}}else{var v=l.beforeCreate;l.beforeCreate=v?[].concat(v,o):[o]}return{exports:t,options:l}}s.d(e,{Z:()=>n})}}]);