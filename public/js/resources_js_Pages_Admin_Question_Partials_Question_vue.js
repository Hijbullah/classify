(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Admin_Question_Partials_Question_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Question/Partials/Question.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Question/Partials/Question.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
  props: {
    examCode: String,
    examStatus: String,
    question: Object,
    serial: Number
  },
  methods: {
    deleteQuestion: function deleteQuestion(url) {
      this.$inertia["delete"](url, {
        preserveScroll: true,
        onBefore: function onBefore() {
          return confirm('Are you sure you want to delete?');
        }
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/Pages/Admin/Question/Partials/Question.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/Pages/Admin/Question/Partials/Question.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Question_vue_vue_type_template_id_904b6c3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Question.vue?vue&type=template&id=904b6c3a& */ "./resources/js/Pages/Admin/Question/Partials/Question.vue?vue&type=template&id=904b6c3a&");
/* harmony import */ var _Question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Question.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Question/Partials/Question.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Question_vue_vue_type_template_id_904b6c3a___WEBPACK_IMPORTED_MODULE_0__.render,
  _Question_vue_vue_type_template_id_904b6c3a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Question/Partials/Question.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Question/Partials/Question.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Question/Partials/Question.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Question.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Question/Partials/Question.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Question_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Question/Partials/Question.vue?vue&type=template&id=904b6c3a&":
/*!************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Question/Partials/Question.vue?vue&type=template&id=904b6c3a& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Question_vue_vue_type_template_id_904b6c3a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Question_vue_vue_type_template_id_904b6c3a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Question_vue_vue_type_template_id_904b6c3a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Question.vue?vue&type=template&id=904b6c3a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Question/Partials/Question.vue?vue&type=template&id=904b6c3a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Question/Partials/Question.vue?vue&type=template&id=904b6c3a&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Admin/Question/Partials/Question.vue?vue&type=template&id=904b6c3a& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "relative p-5 bg-white shadow-sm" }, [
      _c(
        "p",
        {
          staticClass:
            "absolute left-2 top-2 text-xs font-semibold uppercase tracking-wider bg-green-400 text-white rounded-full px-2 py-1 leading-none"
        },
        [_vm._v(_vm._s(_vm.question.subject.name))]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "flex items-center mt-3 mb-2" }, [
        _c("span", { staticClass: "font-bold" }, [
          _vm._v(_vm._s(_vm.serial) + ".")
        ]),
        _vm._v(" "),
        _c("h3", { staticClass: "ml-4 font-bold" }, [
          _vm._v(_vm._s(_vm.question.question))
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "pl-8 space-y-2" }, [
        _c("div", { staticClass: "flex items-center" }, [
          _c("input", {
            staticClass:
              "form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out",
            attrs: { disabled: "", type: "radio" },
            domProps: { checked: _vm.question.answer == "a" }
          }),
          _vm._v(" "),
          _c("p", { staticClass: "ml-4" }, [
            _vm._v(_vm._s(_vm.question.options["a"]))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex items-center" }, [
          _c("input", {
            staticClass:
              "form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out",
            attrs: { disabled: "", type: "radio" },
            domProps: { checked: _vm.question.answer == "b" }
          }),
          _vm._v(" "),
          _c("p", { staticClass: "ml-4" }, [
            _vm._v(_vm._s(_vm.question.options["b"]))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex items-center" }, [
          _c("input", {
            staticClass:
              "form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out",
            attrs: { disabled: "", type: "radio" },
            domProps: { checked: _vm.question.answer == "c" }
          }),
          _vm._v(" "),
          _c("p", { staticClass: "ml-4" }, [
            _vm._v(_vm._s(_vm.question.options["c"]))
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "flex items-center" }, [
          _c("input", {
            staticClass:
              "form-radio h-4 w-4 text-indigo-600 transition duration-150 ease-in-out",
            attrs: { disabled: "", type: "radio" },
            domProps: { checked: _vm.question.answer == "d" }
          }),
          _vm._v(" "),
          _c("p", { staticClass: "ml-4" }, [
            _vm._v(_vm._s(_vm.question.options["d"]))
          ])
        ])
      ]),
      _vm._v(" "),
      _vm.examStatus === "pending"
        ? _c(
            "div",
            { staticClass: "absolute right-0 top-0 mt-4 mr-3" },
            [
              _c(
                "inertia-link",
                {
                  staticClass:
                    "inline-flex items-center px-2 py-1 bg-gray-800 text-white text-xs font-bold tracking-widest uppercase rounded hover:bg-gray-600 focus:outline-none",
                  attrs: {
                    href: _vm.route("admin.questions.edit", [
                      _vm.examCode,
                      _vm.question.id
                    ])
                  }
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "h-5 w-5 stroke-current",
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d:
                            "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        }
                      })
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "inline-flex items-center ml-3 px-2 py-1 bg-red-700 text-white text-xs font-bold tracking-widest uppercase rounded hover:bg-red-500 focus:outline-none",
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.deleteQuestion(
                        _vm.route("admin.questions.destroy", _vm.question.id)
                      )
                    }
                  }
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "h-5 w-5 stroke-current",
                      attrs: {
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: "none",
                        viewBox: "0 0 24 24",
                        stroke: "currentColor"
                      }
                    },
                    [
                      _c("path", {
                        attrs: {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d:
                            "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        }
                      })
                    ]
                  )
                ]
              )
            ],
            1
          )
        : _vm._e()
    ])
  ])
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