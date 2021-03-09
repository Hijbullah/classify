(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_LiveClass_LiveClass_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LiveClass/LiveClass.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LiveClass/LiveClass.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LiveMeet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LiveMeet */ "./resources/js/Pages/LiveClass/LiveMeet.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    LiveMeet: _LiveMeet__WEBPACK_IMPORTED_MODULE_0__.default
  },
  props: {
    classId: String,
    subject: String,
    meetingId: String,
    userInfo: Object,
    mode: String,
    backRoute: String
  },
  data: function data() {
    return {
      showCancelButton: true,
      showEndClassButton: false,
      showHangupButton: false
    };
  },
  computed: {
    options: function options() {
      return {
        roomName: this.meetingId,
        noSSL: false,
        userInfo: {
          email: this.userInfo.email,
          displayName: this.userInfo.name
        },
        configOverwrite: {// prejoinPageEnabled: false,
        },
        interfaceConfigOverwrite: {
          SHOW_JITSI_WATERMARK: false,
          JITSI_WATERMARK_LINK: 'https://hijbu.com',
          SHOW_WATERMARK_FOR_GUESTS: false,
          SHOW_CHROME_EXTENSION_BANNER: false,
          SETTINGS_SECTIONS: ['devices', 'language', 'moderator', 'profile'],
          TOOLBAR_BUTTONS: ['microphone', 'camera', 'closedcaptions', 'desktop', 'fullscreen', 'fodeviceselection', 'profile', 'chat', 'recording', 'livestreaming', 'etherpad', 'settings', 'raisehand', 'videoquality', 'filmstrip', 'stats', 'tileview', 'download', 'mute-everyone', 'security']
        },
        onload: this.onIFrameLoad
      };
    }
  },
  methods: {
    onIFrameLoad: function onIFrameLoad() {
      this.$refs.liveMeeting.addEventListener('videoConferenceJoined', this.onVideoConferenceJoined);
      this.$refs.liveMeeting.addEventListener('participantJoined', this.OnParticipantJoined);
    },
    onVideoConferenceJoined: function onVideoConferenceJoined(e) {
      var _this = this;

      axios.post(route('class.live.update', this.classId), {
        meeting_id: this.meetingId
      }).then(function (response) {
        _this.showCancelButton = false;
        _this.showEndClassButton = true;
      });
    },
    OnParticipantJoined: function OnParticipantJoined(e) {
      if (this.mode == 'join') {
        this.showHangupButton = true;
      }
    },
    onReadyToClose: function onReadyToClose() {
      console.log('closed'); // if(this.mode == 'start') {
      //     
      // }else {
      //     this.$inertia.visit(route(this.backRoute));
      // }
    },
    cancelClass: function cancelClass() {
      if (confirm('Your are about to cancel the class. Are you sure?')) {
        this.$inertia.visit(route(this.backRoute));
      }
    },
    endMeeting: function endMeeting() {
      var _this2 = this;

      if (confirm('Your are about to End the class. Are you sure?')) {
        axios.post(route('class.live.end', this.classId)).then(function (response) {
          _this2.$refs.liveMeeting.executeCommand('hangup');

          _this2.$inertia.visit(route(_this2.backRoute));
        });
      }
    },
    hangUp: function hangUp() {
      this.$refs.liveMeeting.executeCommand('hangup');
      this.$inertia.visit(route(this.backRoute));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LiveClass/LiveMeet.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LiveClass/LiveMeet.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    domain: {
      type: String,
      "default": 'meet.jit.si'
    },
    options: {
      type: Object,
      "default": function _default() {
        return {};
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.loadScript('https://meet.jit.si/external_api.js', function () {
      if (!window.JitsiMeetExternalAPI) throw new Error('Jitsi Meet API not loaded');

      _this.embedJitsiWidget();
    });
  },
  beforeDestroy: function beforeDestroy() {
    this.removeJitsiWidget();
  },
  methods: {
    loadScript: function loadScript(src, cb) {
      var scriptEl = document.createElement('script');
      scriptEl.src = src;
      scriptEl.async = 1;
      document.querySelector('head').appendChild(scriptEl);
      scriptEl.addEventListener('load', cb);
    },
    embedJitsiWidget: function embedJitsiWidget() {
      var options = _objectSpread(_objectSpread({}, this.options), {}, {
        parentNode: this.$refs.jitsiContainer
      });

      this.jitsiApi = new window.JitsiMeetExternalAPI(this.domain, options);
    },
    executeCommand: function executeCommand(command) {
      var _this$jitsiApi;

      for (var _len = arguments.length, value = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        value[_key - 1] = arguments[_key];
      }

      (_this$jitsiApi = this.jitsiApi).executeCommand.apply(_this$jitsiApi, [command].concat(value));
    },
    addEventListener: function addEventListener(event, fn) {
      this.jitsiApi.on(event, fn);
    },
    // Misc
    removeJitsiWidget: function removeJitsiWidget() {
      if (this.jitsiApi) this.jitsiApi.dispose();
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/LiveClass/LiveClass.vue":
/*!****************************************************!*\
  !*** ./resources/js/Pages/LiveClass/LiveClass.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LiveClass_vue_vue_type_template_id_56daba60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LiveClass.vue?vue&type=template&id=56daba60& */ "./resources/js/Pages/LiveClass/LiveClass.vue?vue&type=template&id=56daba60&");
/* harmony import */ var _LiveClass_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LiveClass.vue?vue&type=script&lang=js& */ "./resources/js/Pages/LiveClass/LiveClass.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _LiveClass_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _LiveClass_vue_vue_type_template_id_56daba60___WEBPACK_IMPORTED_MODULE_0__.render,
  _LiveClass_vue_vue_type_template_id_56daba60___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/LiveClass/LiveClass.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/LiveClass/LiveMeet.vue":
/*!***************************************************!*\
  !*** ./resources/js/Pages/LiveClass/LiveMeet.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LiveMeet_vue_vue_type_template_id_38259ec2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LiveMeet.vue?vue&type=template&id=38259ec2& */ "./resources/js/Pages/LiveClass/LiveMeet.vue?vue&type=template&id=38259ec2&");
/* harmony import */ var _LiveMeet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LiveMeet.vue?vue&type=script&lang=js& */ "./resources/js/Pages/LiveClass/LiveMeet.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _LiveMeet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _LiveMeet_vue_vue_type_template_id_38259ec2___WEBPACK_IMPORTED_MODULE_0__.render,
  _LiveMeet_vue_vue_type_template_id_38259ec2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/LiveClass/LiveMeet.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/LiveClass/LiveClass.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Pages/LiveClass/LiveClass.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveClass_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LiveClass.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LiveClass/LiveClass.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveClass_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/LiveClass/LiveMeet.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/LiveClass/LiveMeet.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveMeet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LiveMeet.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LiveClass/LiveMeet.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveMeet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/LiveClass/LiveClass.vue?vue&type=template&id=56daba60&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/LiveClass/LiveClass.vue?vue&type=template&id=56daba60& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveClass_vue_vue_type_template_id_56daba60___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveClass_vue_vue_type_template_id_56daba60___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveClass_vue_vue_type_template_id_56daba60___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LiveClass.vue?vue&type=template&id=56daba60& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LiveClass/LiveClass.vue?vue&type=template&id=56daba60&");


/***/ }),

/***/ "./resources/js/Pages/LiveClass/LiveMeet.vue?vue&type=template&id=38259ec2&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Pages/LiveClass/LiveMeet.vue?vue&type=template&id=38259ec2& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveMeet_vue_vue_type_template_id_38259ec2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveMeet_vue_vue_type_template_id_38259ec2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LiveMeet_vue_vue_type_template_id_38259ec2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LiveMeet.vue?vue&type=template&id=38259ec2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LiveClass/LiveMeet.vue?vue&type=template&id=38259ec2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LiveClass/LiveClass.vue?vue&type=template&id=56daba60&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LiveClass/LiveClass.vue?vue&type=template&id=56daba60& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "h-screen w-full flex flex-col" }, [
    _c(
      "div",
      {
        staticClass:
          "h-8 w-full flex justify-between items-center px-4 bg-green-500"
      },
      [
        _c(
          "h4",
          { staticClass: "text-white text-lg font-bold tracking-wider" },
          [_vm._v("Lv Class-Live")]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "flex space-x-3" }, [
          _vm.showCancelButton && _vm.mode == "start"
            ? _c(
                "button",
                {
                  staticClass: "inline-flex text-white focus:outline-none",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.cancelClass($event)
                    }
                  }
                },
                [_vm._v("\n                Cancel\n            ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.showHangupButton
            ? _c(
                "button",
                {
                  staticClass: "inline-flex text-white",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.hangUp($event)
                    }
                  }
                },
                [_vm._v("\n                Hangup\n            ")]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.showEndClassButton && _vm.mode == "start"
            ? _c(
                "button",
                {
                  staticClass: "inline-flex text-white",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.endMeeting($event)
                    }
                  }
                },
                [_vm._v("\n                End Class\n            ")]
              )
            : _vm._e()
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "flex-1" },
      [
        _c("live-meet", {
          ref: "liveMeeting",
          attrs: { domain: "meet.jit.si", options: _vm.options }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LiveClass/LiveMeet.vue?vue&type=template&id=38259ec2&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/LiveClass/LiveMeet.vue?vue&type=template&id=38259ec2& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", {
    ref: "jitsiContainer",
    staticStyle: { height: "100%", width: "100%" }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ normalizeComponent)
/* harmony export */ });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ })

}]);