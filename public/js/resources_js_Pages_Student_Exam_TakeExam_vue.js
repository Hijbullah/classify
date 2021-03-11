(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_Pages_Student_Exam_TakeExam_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shared/Dropdown/Dropdown.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shared/Dropdown/Dropdown.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    align: {
      "default": 'right'
    },
    width: {
      "default": '48'
    },
    contentClasses: {
      "default": function _default() {
        return ['py-1', 'bg-white'];
      }
    }
  },
  data: function data() {
    return {
      open: false
    };
  },
  created: function created() {
    var _this = this;

    var closeOnEscape = function closeOnEscape(e) {
      if (_this.open && e.keyCode === 27) {
        _this.open = false;
      }
    };

    this.$once('hook:destroyed', function () {
      document.removeEventListener('keydown', closeOnEscape);
    });
    document.addEventListener('keydown', closeOnEscape);
  },
  computed: {
    widthClass: function widthClass() {
      return {
        '48': 'w-48'
      }[this.width.toString()];
    },
    alignmentClasses: function alignmentClasses() {
      if (this.align === 'left') {
        return 'origin-top-left left-0';
      } else if (this.align === 'right') {
        return 'origin-top-right right-0';
      } else {
        return 'origin-top';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shared/Dropdown/DropdownLink.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shared/Dropdown/DropdownLink.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['href', 'as']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Student/NavLink.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Student/NavLink.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['href', 'active'],
  computed: {
    classes: function classes() {
      return this.active ? 'inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out' : 'inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Student/ResponsiveNavLink.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Student/ResponsiveNavLink.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['active', 'href', 'as'],
  computed: {
    classes: function classes() {
      return this.active ? 'block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out' : 'block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/StudentLayout.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/StudentLayout.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Components_Shared_ApplicationLogo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Components/Shared/ApplicationLogo */ "./resources/js/Components/Shared/ApplicationLogo.vue");
/* harmony import */ var _Components_Shared_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/Components/Shared/Dropdown/Dropdown */ "./resources/js/Components/Shared/Dropdown/Dropdown.vue");
/* harmony import */ var _Components_Shared_Dropdown_DropdownLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/Components/Shared/Dropdown/DropdownLink */ "./resources/js/Components/Shared/Dropdown/DropdownLink.vue");
/* harmony import */ var _Components_Student_NavLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/Components/Student/NavLink */ "./resources/js/Components/Student/NavLink.vue");
/* harmony import */ var _Components_Student_ResponsiveNavLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/Components/Student/ResponsiveNavLink */ "./resources/js/Components/Student/ResponsiveNavLink.vue");
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
    ApplicationLogo: _Components_Shared_ApplicationLogo__WEBPACK_IMPORTED_MODULE_0__.default,
    AppDropdown: _Components_Shared_Dropdown_Dropdown__WEBPACK_IMPORTED_MODULE_1__.default,
    AppDropdownLink: _Components_Shared_Dropdown_DropdownLink__WEBPACK_IMPORTED_MODULE_2__.default,
    StudentNavLink: _Components_Student_NavLink__WEBPACK_IMPORTED_MODULE_3__.default,
    StudentResponsiveNavLink: _Components_Student_ResponsiveNavLink__WEBPACK_IMPORTED_MODULE_4__.default
  },
  data: function data() {
    return {
      showingNavigationDropdown: false
    };
  },
  methods: {
    logout: function logout() {
      this.$inertia.post(route('logout'));
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Student/Exam/TakeExam.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Student/Exam/TakeExam.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Layouts_StudentLayout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/Layouts/StudentLayout */ "./resources/js/Layouts/StudentLayout.vue");
/* harmony import */ var _TheTimer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheTimer */ "./resources/js/Pages/Student/Exam/TheTimer.vue");
/* harmony import */ var katex_dist_katex_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! katex/dist/katex.min.css */ "./node_modules/katex/dist/katex.min.css");
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


 // import 'vue2-editor/dist/vue2-editor.css'

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    StudentLayout: _Layouts_StudentLayout__WEBPACK_IMPORTED_MODULE_0__.default,
    TheTimer: _TheTimer__WEBPACK_IMPORTED_MODULE_1__.default
  },
  props: {
    result_code: String,
    exam: Object,
    questions: Array
  },
  data: function data() {
    return {
      removeStartEventListener: null,
      isExamFinish: false,
      selectedOption: null,
      neverQuestion: 0,
      allQuestions: [],
      questionData: [],
      laterQuestions: [],
      currenQuestion: [],
      form: this.$inertia.form({
        result_code: this.result_code,
        answerSheet: []
      })
    };
  },
  methods: {
    // select answer
    selectAnswer: function selectAnswer(answer) {
      this.form.answerSheet.push({
        id: this.currenQuestion.id,
        answer: this.selectedOption
      });
      this.changeQuestonStatus('selected');
      this.selectedOption = null;
      this.getNextQuestion();
    },
    // next question
    getNextQuestion: function getNextQuestion() {
      if (this.questionData.length >= 1) {
        this.currenQuestion = this.questionData.pop();
      } else if (this.laterQuestions.length >= 1) {
        this.questionData = this.laterQuestions.reverse();
        this.laterQuestions = [];
        this.currenQuestion = this.questionData.pop();
      } else {
        this.isExamFinish = true;
      }
    },
    // later
    setLaterQuestion: function setLaterQuestion() {
      this.selectedOption = null;
      this.laterQuestions.push(this.currenQuestion);
      this.changeQuestonStatus('later');
      this.getNextQuestion();
    },
    //never
    setNeverQuestion: function setNeverQuestion() {
      this.selectedOption = null;
      this.neverQuestion += 1;
      this.changeQuestonStatus('skip');
      this.getNextQuestion();
    },
    finishExam: function finishExam() {
      this.removeStartEventListener();
      this.form.post(route('students.exams.finish', this.exam.exam_code));
    },
    examTimeEnded: function examTimeEnded() {
      this.finishExam();
    },
    changeQuestonStatus: function changeQuestonStatus(status) {
      var _this = this;

      var question = this.questions.find(function (question) {
        return question.serial == _this.currenQuestion.serial;
      });

      if (status == 'selected') {
        question.cssClass = 'bg-green-600 text-white';
      } else if (status == 'skip') {
        question.cssClass = 'bg-red-600 text-white';
      } else {
        question.cssClass = 'bg-yellow-600 text-white';
      }
    }
  },
  mounted: function mounted() {
    this.allQuestions = this.questions.map(function (question, index) {
      question['serial'] = index + 1;
      question['cssClass'] = '';
      return question;
    });
    this.questionData = Array.from(this.questions).reverse();
    this.currenQuestion = this.questionData.pop();
    this.$once('hook:destroyed', this.removeStartEventListener = this.$inertia.on('start', function (event) {
      if (!confirm('Want to navigate away, Are you sure? Your exam will end autometically')) {
        event.preventDefault();
      }
    })); // document.addEventListener("visibilitychange", this.logSomething)
    //     this.$once("hook:beforeDestroy", () => {
    //     document.removeEventListener("visibilitychange", this.logSomething);
    // });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Student/Exam/TheTimer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Student/Exam/TheTimer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['duration'],
  // in minute
  data: function data() {
    return {
      timePassed: 0,
      timerInterval: null
    };
  },
  computed: {
    formattedTimeLeft: function formattedTimeLeft() {
      var timeLeft = this.timeLeft;
      var hours = Math.floor(timeLeft / 3600);
      var minutes = Math.floor(timeLeft / 60) >= 60 ? Math.floor(timeLeft / 60) - 60 : Math.floor(timeLeft / 60);
      var seconds = timeLeft % 60;

      if (hours < 10) {
        hours = "0".concat(hours);
      }

      if (minutes < 10) {
        minutes = "0".concat(minutes);
      }

      if (seconds < 10) {
        seconds = "0".concat(seconds);
      }

      return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
    },
    timeLeft: function timeLeft() {
      return this.duration * 60 - this.timePassed; // duration converted to second
    }
  },
  methods: {
    onTimesUp: function onTimesUp() {
      this.$emit('times-up');
      clearInterval(this.timerInterval);
    },
    startTimer: function startTimer() {
      var _this = this;

      this.timerInterval = setInterval(function () {
        return _this.timePassed += 1;
      }, 1000);
    }
  },
  watch: {
    timeLeft: function timeLeft(newValue) {
      if (newValue === 0) {
        this.onTimesUp();
      }
    }
  },
  mounted: function mounted() {
    this.startTimer();
  },
  destroyed: function destroyed() {
    clearInterval(this.timerInterval);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/katex/dist/katex.min.css":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/katex/dist/katex.min.css ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _fonts_KaTeX_AMS_Regular_woff2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fonts/KaTeX_AMS-Regular.woff2 */ "./node_modules/katex/dist/fonts/KaTeX_AMS-Regular.woff2");
/* harmony import */ var _fonts_KaTeX_AMS_Regular_woff__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts/KaTeX_AMS-Regular.woff */ "./node_modules/katex/dist/fonts/KaTeX_AMS-Regular.woff");
/* harmony import */ var _fonts_KaTeX_AMS_Regular_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fonts/KaTeX_AMS-Regular.ttf */ "./node_modules/katex/dist/fonts/KaTeX_AMS-Regular.ttf");
/* harmony import */ var _fonts_KaTeX_Caligraphic_Bold_woff2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fonts/KaTeX_Caligraphic-Bold.woff2 */ "./node_modules/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff2");
/* harmony import */ var _fonts_KaTeX_Caligraphic_Bold_woff__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./fonts/KaTeX_Caligraphic-Bold.woff */ "./node_modules/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff");
/* harmony import */ var _fonts_KaTeX_Caligraphic_Bold_ttf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./fonts/KaTeX_Caligraphic-Bold.ttf */ "./node_modules/katex/dist/fonts/KaTeX_Caligraphic-Bold.ttf");
/* harmony import */ var _fonts_KaTeX_Caligraphic_Regular_woff2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./fonts/KaTeX_Caligraphic-Regular.woff2 */ "./node_modules/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff2");
/* harmony import */ var _fonts_KaTeX_Caligraphic_Regular_woff__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fonts/KaTeX_Caligraphic-Regular.woff */ "./node_modules/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff");
/* harmony import */ var _fonts_KaTeX_Caligraphic_Regular_ttf__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fonts/KaTeX_Caligraphic-Regular.ttf */ "./node_modules/katex/dist/fonts/KaTeX_Caligraphic-Regular.ttf");
/* harmony import */ var _fonts_KaTeX_Fraktur_Bold_woff2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./fonts/KaTeX_Fraktur-Bold.woff2 */ "./node_modules/katex/dist/fonts/KaTeX_Fraktur-Bold.woff2");
/* harmony import */ var _fonts_KaTeX_Fraktur_Bold_woff__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fonts/KaTeX_Fraktur-Bold.woff */ "./node_modules/katex/dist/fonts/KaTeX_Fraktur-Bold.woff");
/* harmony import */ var _fonts_KaTeX_Fraktur_Bold_ttf__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./fonts/KaTeX_Fraktur-Bold.ttf */ "./node_modules/katex/dist/fonts/KaTeX_Fraktur-Bold.ttf");
/* harmony import */ var _fonts_KaTeX_Fraktur_Regular_woff2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./fonts/KaTeX_Fraktur-Regular.woff2 */ "./node_modules/katex/dist/fonts/KaTeX_Fraktur-Regular.woff2");
/* harmony import */ var _fonts_KaTeX_Fraktur_Regular_woff__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./fonts/KaTeX_Fraktur-Regular.woff */ "./node_modules/katex/dist/fonts/KaTeX_Fraktur-Regular.woff");
/* harmony import */ var _fonts_KaTeX_Fraktur_Regular_ttf__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./fonts/KaTeX_Fraktur-Regular.ttf */ "./node_modules/katex/dist/fonts/KaTeX_Fraktur-Regular.ttf");
/* harmony import */ var _fonts_KaTeX_Main_Bold_woff2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./fonts/KaTeX_Main-Bold.woff2 */ "./node_modules/katex/dist/fonts/KaTeX_Main-Bold.woff2");
/* harmony import */ var _fonts_KaTeX_Main_Bold_woff__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./fonts/KaTeX_Main-Bold.woff */ "./node_modules/katex/dist/fonts/KaTeX_Main-Bold.woff");
/* harmony import */ var _fonts_KaTeX_Main_Bold_ttf__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./fonts/KaTeX_Main-Bold.ttf */ "./node_modules/katex/dist/fonts/KaTeX_Main-Bold.ttf");
/* harmony import */ var _fonts_KaTeX_Main_BoldItalic_woff2__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./fonts/KaTeX_Main-BoldItalic.woff2 */ "./node_modules/katex/dist/fonts/KaTeX_Main-BoldItalic.woff2");
/* harmony import */ var _fonts_KaTeX_Main_BoldItalic_woff__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./fonts/KaTeX_Main-BoldItalic.woff */ "./node_modules/katex/dist/fonts/KaTeX_Main-BoldItalic.woff");
/* harmony import */ var _fonts_KaTeX_Main_BoldItalic_ttf__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./fonts/KaTeX_Main-BoldItalic.ttf */ "./node_modules/katex/dist/fonts/KaTeX_Main-BoldItalic.ttf");
/* harmony import */ var _fonts_KaTeX_Main_Italic_woff2__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./fonts/KaTeX_Main-Italic.woff2 */ "./node_modules/katex/dist/fonts/KaTeX_Main-Italic.woff2");
/* harmony import */ var _fonts_KaTeX_Main_Italic_woff__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./fonts/KaTeX_Main-Italic.woff */ "./node_modules/katex/dist/fonts/KaTeX_Main-Italic.woff");
/* harmony import */ var _fonts_KaTeX_Main_Italic_ttf__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./fonts/KaTeX_Main-Italic.ttf */ "./node_modules/katex/dist/fonts/KaTeX_Main-Italic.ttf");
/* harmony import */ var _fonts_KaTeX_Main_Regular_woff2__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./fonts/KaTeX_Main-Regular.woff2 */ "./node_modules/katex/dist/fonts/KaTeX_Main-Regular.woff2");
/* harmony import */ var _fonts_KaTeX_Main_Regular_woff__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./fonts/KaTeX_Main-Regular.woff */ "./node_modules/katex/dist/fonts/KaTeX_Main-Regular.woff");
/* harmony import */ var _fonts_KaTeX_Main_Regular_ttf__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./fonts/KaTeX_Main-Regular.ttf */ "./node_modules/katex/dist/fonts/KaTeX_Main-Regular.ttf");
/* harmony import */ var _fonts_KaTeX_Math_BoldItalic_woff2__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./fonts/KaTeX_Math-BoldItalic.woff2 */ "./node_modules/katex/dist/fonts/KaTeX_Math-BoldItalic.woff2");
/* harmony import */ var _fonts_KaTeX_Math_BoldItalic_woff__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./fonts/KaTeX_Math-BoldItalic.woff */ "./node_modules/katex/dist/fonts/KaTeX_Math-BoldItalic.woff");
/* harmony import */ var _fonts_KaTeX_Math_BoldItalic_ttf__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./fonts/KaTeX_Math-BoldItalic.ttf */ "./node_modules/katex/dist/fonts/KaTeX_Math-BoldItalic.ttf");
/* harmony import */ var _fonts_KaTeX_Math_Italic_woff2__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./fonts/KaTeX_Math-Italic.woff2 */ "./node_modules/katex/dist/fonts/KaTeX_Math-Italic.woff2");
/* harmony import */ var _fonts_KaTeX_Math_Italic_woff__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./fonts/KaTeX_Math-Italic.woff */ "./node_modules/katex/dist/fonts/KaTeX_Math-Italic.woff");
/* harmony import */ var _fonts_KaTeX_Math_Italic_ttf__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./fonts/KaTeX_Math-Italic.ttf */ "./node_modules/katex/dist/fonts/KaTeX_Math-Italic.ttf");
/* harmony import */ var _fonts_KaTeX_SansSerif_Bold_woff2__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./fonts/KaTeX_SansSerif-Bold.woff2 */ "./node_modules/katex/dist/fonts/KaTeX_SansSerif-Bold.woff2");
/* harmony import */ var _fonts_KaTeX_SansSerif_Bold_woff__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./fonts/KaTeX_SansSerif-Bold.woff */ "./node_modules/katex/dist/fonts/KaTeX_SansSerif-Bold.woff");
/* harmony import */ var _fonts_KaTeX_SansSerif_Bold_ttf__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./fonts/KaTeX_SansSerif-Bold.ttf */ "./node_modules/katex/dist/fonts/KaTeX_SansSerif-Bold.ttf");
/* harmony import */ var _fonts_KaTeX_SansSerif_Italic_woff2__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./fonts/KaTeX_SansSerif-Italic.woff2 */ "./node_modules/katex/dist/fonts/KaTeX_SansSerif-Italic.woff2");
/* harmony import */ var _fonts_KaTeX_SansSerif_Italic_woff__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./fonts/KaTeX_SansSerif-Italic.woff */ "./node_modules/katex/dist/fonts/KaTeX_SansSerif-Italic.woff");
/* harmony import */ var _fonts_KaTeX_SansSerif_Italic_ttf__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./fonts/KaTeX_SansSerif-Italic.ttf */ "./node_modules/katex/dist/fonts/KaTeX_SansSerif-Italic.ttf");
/* harmony import */ var _fonts_KaTeX_SansSerif_Regular_woff2__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./fonts/KaTeX_SansSerif-Regular.woff2 */ "./node_modules/katex/dist/fonts/KaTeX_SansSerif-Regular.woff2");
/* harmony import */ var _fonts_KaTeX_SansSerif_Regular_woff__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./fonts/KaTeX_SansSerif-Regular.woff */ "./node_modules/katex/dist/fonts/KaTeX_SansSerif-Regular.woff");
/* harmony import */ var _fonts_KaTeX_SansSerif_Regular_ttf__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./fonts/KaTeX_SansSerif-Regular.ttf */ "./node_modules/katex/dist/fonts/KaTeX_SansSerif-Regular.ttf");
/* harmony import */ var _fonts_KaTeX_Script_Regular_woff2__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./fonts/KaTeX_Script-Regular.woff2 */ "./node_modules/katex/dist/fonts/KaTeX_Script-Regular.woff2");
/* harmony import */ var _fonts_KaTeX_Script_Regular_woff__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./fonts/KaTeX_Script-Regular.woff */ "./node_modules/katex/dist/fonts/KaTeX_Script-Regular.woff");
/* harmony import */ var _fonts_KaTeX_Script_Regular_ttf__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./fonts/KaTeX_Script-Regular.ttf */ "./node_modules/katex/dist/fonts/KaTeX_Script-Regular.ttf");
/* harmony import */ var _fonts_KaTeX_Size1_Regular_woff2__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./fonts/KaTeX_Size1-Regular.woff2 */ "./node_modules/katex/dist/fonts/KaTeX_Size1-Regular.woff2");
/* harmony import */ var _fonts_KaTeX_Size1_Regular_woff__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./fonts/KaTeX_Size1-Regular.woff */ "./node_modules/katex/dist/fonts/KaTeX_Size1-Regular.woff");
/* harmony import */ var _fonts_KaTeX_Size1_Regular_ttf__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./fonts/KaTeX_Size1-Regular.ttf */ "./node_modules/katex/dist/fonts/KaTeX_Size1-Regular.ttf");
/* harmony import */ var _fonts_KaTeX_Size2_Regular_woff2__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./fonts/KaTeX_Size2-Regular.woff2 */ "./node_modules/katex/dist/fonts/KaTeX_Size2-Regular.woff2");
/* harmony import */ var _fonts_KaTeX_Size2_Regular_woff__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./fonts/KaTeX_Size2-Regular.woff */ "./node_modules/katex/dist/fonts/KaTeX_Size2-Regular.woff");
/* harmony import */ var _fonts_KaTeX_Size2_Regular_ttf__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./fonts/KaTeX_Size2-Regular.ttf */ "./node_modules/katex/dist/fonts/KaTeX_Size2-Regular.ttf");
/* harmony import */ var _fonts_KaTeX_Size3_Regular_woff2__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./fonts/KaTeX_Size3-Regular.woff2 */ "./node_modules/katex/dist/fonts/KaTeX_Size3-Regular.woff2");
/* harmony import */ var _fonts_KaTeX_Size3_Regular_woff__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./fonts/KaTeX_Size3-Regular.woff */ "./node_modules/katex/dist/fonts/KaTeX_Size3-Regular.woff");
/* harmony import */ var _fonts_KaTeX_Size3_Regular_ttf__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./fonts/KaTeX_Size3-Regular.ttf */ "./node_modules/katex/dist/fonts/KaTeX_Size3-Regular.ttf");
/* harmony import */ var _fonts_KaTeX_Size4_Regular_woff2__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./fonts/KaTeX_Size4-Regular.woff2 */ "./node_modules/katex/dist/fonts/KaTeX_Size4-Regular.woff2");
/* harmony import */ var _fonts_KaTeX_Size4_Regular_woff__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./fonts/KaTeX_Size4-Regular.woff */ "./node_modules/katex/dist/fonts/KaTeX_Size4-Regular.woff");
/* harmony import */ var _fonts_KaTeX_Size4_Regular_ttf__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./fonts/KaTeX_Size4-Regular.ttf */ "./node_modules/katex/dist/fonts/KaTeX_Size4-Regular.ttf");
/* harmony import */ var _fonts_KaTeX_Typewriter_Regular_woff2__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./fonts/KaTeX_Typewriter-Regular.woff2 */ "./node_modules/katex/dist/fonts/KaTeX_Typewriter-Regular.woff2");
/* harmony import */ var _fonts_KaTeX_Typewriter_Regular_woff__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./fonts/KaTeX_Typewriter-Regular.woff */ "./node_modules/katex/dist/fonts/KaTeX_Typewriter-Regular.woff");
/* harmony import */ var _fonts_KaTeX_Typewriter_Regular_ttf__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./fonts/KaTeX_Typewriter-Regular.ttf */ "./node_modules/katex/dist/fonts/KaTeX_Typewriter-Regular.ttf");
// Imports






























































var ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_AMS_Regular_woff2__WEBPACK_IMPORTED_MODULE_2__.default);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_AMS_Regular_woff__WEBPACK_IMPORTED_MODULE_3__.default);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_AMS_Regular_ttf__WEBPACK_IMPORTED_MODULE_4__.default);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Caligraphic_Bold_woff2__WEBPACK_IMPORTED_MODULE_5__.default);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Caligraphic_Bold_woff__WEBPACK_IMPORTED_MODULE_6__.default);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Caligraphic_Bold_ttf__WEBPACK_IMPORTED_MODULE_7__.default);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Caligraphic_Regular_woff2__WEBPACK_IMPORTED_MODULE_8__.default);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Caligraphic_Regular_woff__WEBPACK_IMPORTED_MODULE_9__.default);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Caligraphic_Regular_ttf__WEBPACK_IMPORTED_MODULE_10__.default);
var ___CSS_LOADER_URL_REPLACEMENT_9___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Fraktur_Bold_woff2__WEBPACK_IMPORTED_MODULE_11__.default);
var ___CSS_LOADER_URL_REPLACEMENT_10___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Fraktur_Bold_woff__WEBPACK_IMPORTED_MODULE_12__.default);
var ___CSS_LOADER_URL_REPLACEMENT_11___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Fraktur_Bold_ttf__WEBPACK_IMPORTED_MODULE_13__.default);
var ___CSS_LOADER_URL_REPLACEMENT_12___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Fraktur_Regular_woff2__WEBPACK_IMPORTED_MODULE_14__.default);
var ___CSS_LOADER_URL_REPLACEMENT_13___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Fraktur_Regular_woff__WEBPACK_IMPORTED_MODULE_15__.default);
var ___CSS_LOADER_URL_REPLACEMENT_14___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Fraktur_Regular_ttf__WEBPACK_IMPORTED_MODULE_16__.default);
var ___CSS_LOADER_URL_REPLACEMENT_15___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Main_Bold_woff2__WEBPACK_IMPORTED_MODULE_17__.default);
var ___CSS_LOADER_URL_REPLACEMENT_16___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Main_Bold_woff__WEBPACK_IMPORTED_MODULE_18__.default);
var ___CSS_LOADER_URL_REPLACEMENT_17___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Main_Bold_ttf__WEBPACK_IMPORTED_MODULE_19__.default);
var ___CSS_LOADER_URL_REPLACEMENT_18___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Main_BoldItalic_woff2__WEBPACK_IMPORTED_MODULE_20__.default);
var ___CSS_LOADER_URL_REPLACEMENT_19___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Main_BoldItalic_woff__WEBPACK_IMPORTED_MODULE_21__.default);
var ___CSS_LOADER_URL_REPLACEMENT_20___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Main_BoldItalic_ttf__WEBPACK_IMPORTED_MODULE_22__.default);
var ___CSS_LOADER_URL_REPLACEMENT_21___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Main_Italic_woff2__WEBPACK_IMPORTED_MODULE_23__.default);
var ___CSS_LOADER_URL_REPLACEMENT_22___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Main_Italic_woff__WEBPACK_IMPORTED_MODULE_24__.default);
var ___CSS_LOADER_URL_REPLACEMENT_23___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Main_Italic_ttf__WEBPACK_IMPORTED_MODULE_25__.default);
var ___CSS_LOADER_URL_REPLACEMENT_24___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Main_Regular_woff2__WEBPACK_IMPORTED_MODULE_26__.default);
var ___CSS_LOADER_URL_REPLACEMENT_25___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Main_Regular_woff__WEBPACK_IMPORTED_MODULE_27__.default);
var ___CSS_LOADER_URL_REPLACEMENT_26___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Main_Regular_ttf__WEBPACK_IMPORTED_MODULE_28__.default);
var ___CSS_LOADER_URL_REPLACEMENT_27___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Math_BoldItalic_woff2__WEBPACK_IMPORTED_MODULE_29__.default);
var ___CSS_LOADER_URL_REPLACEMENT_28___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Math_BoldItalic_woff__WEBPACK_IMPORTED_MODULE_30__.default);
var ___CSS_LOADER_URL_REPLACEMENT_29___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Math_BoldItalic_ttf__WEBPACK_IMPORTED_MODULE_31__.default);
var ___CSS_LOADER_URL_REPLACEMENT_30___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Math_Italic_woff2__WEBPACK_IMPORTED_MODULE_32__.default);
var ___CSS_LOADER_URL_REPLACEMENT_31___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Math_Italic_woff__WEBPACK_IMPORTED_MODULE_33__.default);
var ___CSS_LOADER_URL_REPLACEMENT_32___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Math_Italic_ttf__WEBPACK_IMPORTED_MODULE_34__.default);
var ___CSS_LOADER_URL_REPLACEMENT_33___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_SansSerif_Bold_woff2__WEBPACK_IMPORTED_MODULE_35__.default);
var ___CSS_LOADER_URL_REPLACEMENT_34___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_SansSerif_Bold_woff__WEBPACK_IMPORTED_MODULE_36__.default);
var ___CSS_LOADER_URL_REPLACEMENT_35___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_SansSerif_Bold_ttf__WEBPACK_IMPORTED_MODULE_37__.default);
var ___CSS_LOADER_URL_REPLACEMENT_36___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_SansSerif_Italic_woff2__WEBPACK_IMPORTED_MODULE_38__.default);
var ___CSS_LOADER_URL_REPLACEMENT_37___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_SansSerif_Italic_woff__WEBPACK_IMPORTED_MODULE_39__.default);
var ___CSS_LOADER_URL_REPLACEMENT_38___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_SansSerif_Italic_ttf__WEBPACK_IMPORTED_MODULE_40__.default);
var ___CSS_LOADER_URL_REPLACEMENT_39___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_SansSerif_Regular_woff2__WEBPACK_IMPORTED_MODULE_41__.default);
var ___CSS_LOADER_URL_REPLACEMENT_40___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_SansSerif_Regular_woff__WEBPACK_IMPORTED_MODULE_42__.default);
var ___CSS_LOADER_URL_REPLACEMENT_41___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_SansSerif_Regular_ttf__WEBPACK_IMPORTED_MODULE_43__.default);
var ___CSS_LOADER_URL_REPLACEMENT_42___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Script_Regular_woff2__WEBPACK_IMPORTED_MODULE_44__.default);
var ___CSS_LOADER_URL_REPLACEMENT_43___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Script_Regular_woff__WEBPACK_IMPORTED_MODULE_45__.default);
var ___CSS_LOADER_URL_REPLACEMENT_44___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Script_Regular_ttf__WEBPACK_IMPORTED_MODULE_46__.default);
var ___CSS_LOADER_URL_REPLACEMENT_45___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Size1_Regular_woff2__WEBPACK_IMPORTED_MODULE_47__.default);
var ___CSS_LOADER_URL_REPLACEMENT_46___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Size1_Regular_woff__WEBPACK_IMPORTED_MODULE_48__.default);
var ___CSS_LOADER_URL_REPLACEMENT_47___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Size1_Regular_ttf__WEBPACK_IMPORTED_MODULE_49__.default);
var ___CSS_LOADER_URL_REPLACEMENT_48___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Size2_Regular_woff2__WEBPACK_IMPORTED_MODULE_50__.default);
var ___CSS_LOADER_URL_REPLACEMENT_49___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Size2_Regular_woff__WEBPACK_IMPORTED_MODULE_51__.default);
var ___CSS_LOADER_URL_REPLACEMENT_50___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Size2_Regular_ttf__WEBPACK_IMPORTED_MODULE_52__.default);
var ___CSS_LOADER_URL_REPLACEMENT_51___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Size3_Regular_woff2__WEBPACK_IMPORTED_MODULE_53__.default);
var ___CSS_LOADER_URL_REPLACEMENT_52___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Size3_Regular_woff__WEBPACK_IMPORTED_MODULE_54__.default);
var ___CSS_LOADER_URL_REPLACEMENT_53___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Size3_Regular_ttf__WEBPACK_IMPORTED_MODULE_55__.default);
var ___CSS_LOADER_URL_REPLACEMENT_54___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Size4_Regular_woff2__WEBPACK_IMPORTED_MODULE_56__.default);
var ___CSS_LOADER_URL_REPLACEMENT_55___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Size4_Regular_woff__WEBPACK_IMPORTED_MODULE_57__.default);
var ___CSS_LOADER_URL_REPLACEMENT_56___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Size4_Regular_ttf__WEBPACK_IMPORTED_MODULE_58__.default);
var ___CSS_LOADER_URL_REPLACEMENT_57___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Typewriter_Regular_woff2__WEBPACK_IMPORTED_MODULE_59__.default);
var ___CSS_LOADER_URL_REPLACEMENT_58___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Typewriter_Regular_woff__WEBPACK_IMPORTED_MODULE_60__.default);
var ___CSS_LOADER_URL_REPLACEMENT_59___ = _css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_KaTeX_Typewriter_Regular_ttf__WEBPACK_IMPORTED_MODULE_61__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face{font-family:KaTeX_AMS;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Caligraphic;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Caligraphic;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Fraktur;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_9___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_10___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_11___ + ") format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Fraktur;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_12___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_13___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_14___ + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Main;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_15___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_16___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_17___ + ") format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:KaTeX_Main;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_18___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_19___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_20___ + ") format(\"truetype\");font-weight:700;font-style:italic}@font-face{font-family:KaTeX_Main;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_21___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_22___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_23___ + ") format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:KaTeX_Main;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_24___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_25___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_26___ + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Math;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_27___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_28___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_29___ + ") format(\"truetype\");font-weight:700;font-style:italic}@font-face{font-family:KaTeX_Math;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_30___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_31___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_32___ + ") format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:\"KaTeX_SansSerif\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_33___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_34___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_35___ + ") format(\"truetype\");font-weight:700;font-style:normal}@font-face{font-family:\"KaTeX_SansSerif\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_36___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_37___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_38___ + ") format(\"truetype\");font-weight:400;font-style:italic}@font-face{font-family:\"KaTeX_SansSerif\";src:url(" + ___CSS_LOADER_URL_REPLACEMENT_39___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_40___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_41___ + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Script;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_42___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_43___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_44___ + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size1;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_45___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_46___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_47___ + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size2;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_48___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_49___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_50___ + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size3;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_51___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_52___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_53___ + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Size4;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_54___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_55___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_56___ + ") format(\"truetype\");font-weight:400;font-style:normal}@font-face{font-family:KaTeX_Typewriter;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_57___ + ") format(\"woff2\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_58___ + ") format(\"woff\"),url(" + ___CSS_LOADER_URL_REPLACEMENT_59___ + ") format(\"truetype\");font-weight:400;font-style:normal}.katex{font:normal 1.21em KaTeX_Main,Times New Roman,serif;line-height:1.2;text-indent:0;text-rendering:auto;border-color:currentColor}.katex *{-ms-high-contrast-adjust:none!important}.katex .katex-version:after{content:\"0.13.0\"}.katex .katex-mathml{position:absolute;clip:rect(1px,1px,1px,1px);padding:0;border:0;height:1px;width:1px;overflow:hidden}.katex .katex-html>.newline{display:block}.katex .base{position:relative;white-space:nowrap;width:-webkit-min-content;width:-moz-min-content;width:min-content}.katex .base,.katex .strut{display:inline-block}.katex .textbf{font-weight:700}.katex .textit{font-style:italic}.katex .textrm{font-family:KaTeX_Main}.katex .textsf{font-family:KaTeX_SansSerif}.katex .texttt{font-family:KaTeX_Typewriter}.katex .mathnormal{font-family:KaTeX_Math;font-style:italic}.katex .mathit{font-family:KaTeX_Main;font-style:italic}.katex .mathrm{font-style:normal}.katex .mathbf{font-family:KaTeX_Main;font-weight:700}.katex .boldsymbol{font-family:KaTeX_Math;font-weight:700;font-style:italic}.katex .amsrm,.katex .mathbb,.katex .textbb{font-family:KaTeX_AMS}.katex .mathcal{font-family:KaTeX_Caligraphic}.katex .mathfrak,.katex .textfrak{font-family:KaTeX_Fraktur}.katex .mathtt{font-family:KaTeX_Typewriter}.katex .mathscr,.katex .textscr{font-family:KaTeX_Script}.katex .mathsf,.katex .textsf{font-family:KaTeX_SansSerif}.katex .mathboldsf,.katex .textboldsf{font-family:KaTeX_SansSerif;font-weight:700}.katex .mathitsf,.katex .textitsf{font-family:KaTeX_SansSerif;font-style:italic}.katex .mainrm{font-family:KaTeX_Main;font-style:normal}.katex .vlist-t{display:inline-table;table-layout:fixed;border-collapse:collapse}.katex .vlist-r{display:table-row}.katex .vlist{display:table-cell;vertical-align:bottom;position:relative}.katex .vlist>span{display:block;height:0;position:relative}.katex .vlist>span>span{display:inline-block}.katex .vlist>span>.pstrut{overflow:hidden;width:0}.katex .vlist-t2{margin-right:-2px}.katex .vlist-s{display:table-cell;vertical-align:bottom;font-size:1px;width:2px;min-width:2px}.katex .vbox{display:inline-flex;flex-direction:column;align-items:baseline}.katex .hbox{width:100%}.katex .hbox,.katex .thinbox{display:inline-flex;flex-direction:row}.katex .thinbox{width:0;max-width:0}.katex .msupsub{text-align:left}.katex .mfrac>span>span{text-align:center}.katex .mfrac .frac-line{display:inline-block;width:100%;border-bottom-style:solid}.katex .hdashline,.katex .hline,.katex .mfrac .frac-line,.katex .overline .overline-line,.katex .rule,.katex .underline .underline-line{min-height:1px}.katex .mspace{display:inline-block}.katex .clap,.katex .llap,.katex .rlap{width:0;position:relative}.katex .clap>.inner,.katex .llap>.inner,.katex .rlap>.inner{position:absolute}.katex .clap>.fix,.katex .llap>.fix,.katex .rlap>.fix{display:inline-block}.katex .llap>.inner{right:0}.katex .clap>.inner,.katex .rlap>.inner{left:0}.katex .clap>.inner>span{margin-left:-50%;margin-right:50%}.katex .rule{display:inline-block;border:0 solid;position:relative}.katex .hline,.katex .overline .overline-line,.katex .underline .underline-line{display:inline-block;width:100%;border-bottom-style:solid}.katex .hdashline{display:inline-block;width:100%;border-bottom-style:dashed}.katex .sqrt>.root{margin-left:.27777778em;margin-right:-.55555556em}.katex .fontsize-ensurer.reset-size1.size1,.katex .sizing.reset-size1.size1{font-size:1em}.katex .fontsize-ensurer.reset-size1.size2,.katex .sizing.reset-size1.size2{font-size:1.2em}.katex .fontsize-ensurer.reset-size1.size3,.katex .sizing.reset-size1.size3{font-size:1.4em}.katex .fontsize-ensurer.reset-size1.size4,.katex .sizing.reset-size1.size4{font-size:1.6em}.katex .fontsize-ensurer.reset-size1.size5,.katex .sizing.reset-size1.size5{font-size:1.8em}.katex .fontsize-ensurer.reset-size1.size6,.katex .sizing.reset-size1.size6{font-size:2em}.katex .fontsize-ensurer.reset-size1.size7,.katex .sizing.reset-size1.size7{font-size:2.4em}.katex .fontsize-ensurer.reset-size1.size8,.katex .sizing.reset-size1.size8{font-size:2.88em}.katex .fontsize-ensurer.reset-size1.size9,.katex .sizing.reset-size1.size9{font-size:3.456em}.katex .fontsize-ensurer.reset-size1.size10,.katex .sizing.reset-size1.size10{font-size:4.148em}.katex .fontsize-ensurer.reset-size1.size11,.katex .sizing.reset-size1.size11{font-size:4.976em}.katex .fontsize-ensurer.reset-size2.size1,.katex .sizing.reset-size2.size1{font-size:.83333333em}.katex .fontsize-ensurer.reset-size2.size2,.katex .sizing.reset-size2.size2{font-size:1em}.katex .fontsize-ensurer.reset-size2.size3,.katex .sizing.reset-size2.size3{font-size:1.16666667em}.katex .fontsize-ensurer.reset-size2.size4,.katex .sizing.reset-size2.size4{font-size:1.33333333em}.katex .fontsize-ensurer.reset-size2.size5,.katex .sizing.reset-size2.size5{font-size:1.5em}.katex .fontsize-ensurer.reset-size2.size6,.katex .sizing.reset-size2.size6{font-size:1.66666667em}.katex .fontsize-ensurer.reset-size2.size7,.katex .sizing.reset-size2.size7{font-size:2em}.katex .fontsize-ensurer.reset-size2.size8,.katex .sizing.reset-size2.size8{font-size:2.4em}.katex .fontsize-ensurer.reset-size2.size9,.katex .sizing.reset-size2.size9{font-size:2.88em}.katex .fontsize-ensurer.reset-size2.size10,.katex .sizing.reset-size2.size10{font-size:3.45666667em}.katex .fontsize-ensurer.reset-size2.size11,.katex .sizing.reset-size2.size11{font-size:4.14666667em}.katex .fontsize-ensurer.reset-size3.size1,.katex .sizing.reset-size3.size1{font-size:.71428571em}.katex .fontsize-ensurer.reset-size3.size2,.katex .sizing.reset-size3.size2{font-size:.85714286em}.katex .fontsize-ensurer.reset-size3.size3,.katex .sizing.reset-size3.size3{font-size:1em}.katex .fontsize-ensurer.reset-size3.size4,.katex .sizing.reset-size3.size4{font-size:1.14285714em}.katex .fontsize-ensurer.reset-size3.size5,.katex .sizing.reset-size3.size5{font-size:1.28571429em}.katex .fontsize-ensurer.reset-size3.size6,.katex .sizing.reset-size3.size6{font-size:1.42857143em}.katex .fontsize-ensurer.reset-size3.size7,.katex .sizing.reset-size3.size7{font-size:1.71428571em}.katex .fontsize-ensurer.reset-size3.size8,.katex .sizing.reset-size3.size8{font-size:2.05714286em}.katex .fontsize-ensurer.reset-size3.size9,.katex .sizing.reset-size3.size9{font-size:2.46857143em}.katex .fontsize-ensurer.reset-size3.size10,.katex .sizing.reset-size3.size10{font-size:2.96285714em}.katex .fontsize-ensurer.reset-size3.size11,.katex .sizing.reset-size3.size11{font-size:3.55428571em}.katex .fontsize-ensurer.reset-size4.size1,.katex .sizing.reset-size4.size1{font-size:.625em}.katex .fontsize-ensurer.reset-size4.size2,.katex .sizing.reset-size4.size2{font-size:.75em}.katex .fontsize-ensurer.reset-size4.size3,.katex .sizing.reset-size4.size3{font-size:.875em}.katex .fontsize-ensurer.reset-size4.size4,.katex .sizing.reset-size4.size4{font-size:1em}.katex .fontsize-ensurer.reset-size4.size5,.katex .sizing.reset-size4.size5{font-size:1.125em}.katex .fontsize-ensurer.reset-size4.size6,.katex .sizing.reset-size4.size6{font-size:1.25em}.katex .fontsize-ensurer.reset-size4.size7,.katex .sizing.reset-size4.size7{font-size:1.5em}.katex .fontsize-ensurer.reset-size4.size8,.katex .sizing.reset-size4.size8{font-size:1.8em}.katex .fontsize-ensurer.reset-size4.size9,.katex .sizing.reset-size4.size9{font-size:2.16em}.katex .fontsize-ensurer.reset-size4.size10,.katex .sizing.reset-size4.size10{font-size:2.5925em}.katex .fontsize-ensurer.reset-size4.size11,.katex .sizing.reset-size4.size11{font-size:3.11em}.katex .fontsize-ensurer.reset-size5.size1,.katex .sizing.reset-size5.size1{font-size:.55555556em}.katex .fontsize-ensurer.reset-size5.size2,.katex .sizing.reset-size5.size2{font-size:.66666667em}.katex .fontsize-ensurer.reset-size5.size3,.katex .sizing.reset-size5.size3{font-size:.77777778em}.katex .fontsize-ensurer.reset-size5.size4,.katex .sizing.reset-size5.size4{font-size:.88888889em}.katex .fontsize-ensurer.reset-size5.size5,.katex .sizing.reset-size5.size5{font-size:1em}.katex .fontsize-ensurer.reset-size5.size6,.katex .sizing.reset-size5.size6{font-size:1.11111111em}.katex .fontsize-ensurer.reset-size5.size7,.katex .sizing.reset-size5.size7{font-size:1.33333333em}.katex .fontsize-ensurer.reset-size5.size8,.katex .sizing.reset-size5.size8{font-size:1.6em}.katex .fontsize-ensurer.reset-size5.size9,.katex .sizing.reset-size5.size9{font-size:1.92em}.katex .fontsize-ensurer.reset-size5.size10,.katex .sizing.reset-size5.size10{font-size:2.30444444em}.katex .fontsize-ensurer.reset-size5.size11,.katex .sizing.reset-size5.size11{font-size:2.76444444em}.katex .fontsize-ensurer.reset-size6.size1,.katex .sizing.reset-size6.size1{font-size:.5em}.katex .fontsize-ensurer.reset-size6.size2,.katex .sizing.reset-size6.size2{font-size:.6em}.katex .fontsize-ensurer.reset-size6.size3,.katex .sizing.reset-size6.size3{font-size:.7em}.katex .fontsize-ensurer.reset-size6.size4,.katex .sizing.reset-size6.size4{font-size:.8em}.katex .fontsize-ensurer.reset-size6.size5,.katex .sizing.reset-size6.size5{font-size:.9em}.katex .fontsize-ensurer.reset-size6.size6,.katex .sizing.reset-size6.size6{font-size:1em}.katex .fontsize-ensurer.reset-size6.size7,.katex .sizing.reset-size6.size7{font-size:1.2em}.katex .fontsize-ensurer.reset-size6.size8,.katex .sizing.reset-size6.size8{font-size:1.44em}.katex .fontsize-ensurer.reset-size6.size9,.katex .sizing.reset-size6.size9{font-size:1.728em}.katex .fontsize-ensurer.reset-size6.size10,.katex .sizing.reset-size6.size10{font-size:2.074em}.katex .fontsize-ensurer.reset-size6.size11,.katex .sizing.reset-size6.size11{font-size:2.488em}.katex .fontsize-ensurer.reset-size7.size1,.katex .sizing.reset-size7.size1{font-size:.41666667em}.katex .fontsize-ensurer.reset-size7.size2,.katex .sizing.reset-size7.size2{font-size:.5em}.katex .fontsize-ensurer.reset-size7.size3,.katex .sizing.reset-size7.size3{font-size:.58333333em}.katex .fontsize-ensurer.reset-size7.size4,.katex .sizing.reset-size7.size4{font-size:.66666667em}.katex .fontsize-ensurer.reset-size7.size5,.katex .sizing.reset-size7.size5{font-size:.75em}.katex .fontsize-ensurer.reset-size7.size6,.katex .sizing.reset-size7.size6{font-size:.83333333em}.katex .fontsize-ensurer.reset-size7.size7,.katex .sizing.reset-size7.size7{font-size:1em}.katex .fontsize-ensurer.reset-size7.size8,.katex .sizing.reset-size7.size8{font-size:1.2em}.katex .fontsize-ensurer.reset-size7.size9,.katex .sizing.reset-size7.size9{font-size:1.44em}.katex .fontsize-ensurer.reset-size7.size10,.katex .sizing.reset-size7.size10{font-size:1.72833333em}.katex .fontsize-ensurer.reset-size7.size11,.katex .sizing.reset-size7.size11{font-size:2.07333333em}.katex .fontsize-ensurer.reset-size8.size1,.katex .sizing.reset-size8.size1{font-size:.34722222em}.katex .fontsize-ensurer.reset-size8.size2,.katex .sizing.reset-size8.size2{font-size:.41666667em}.katex .fontsize-ensurer.reset-size8.size3,.katex .sizing.reset-size8.size3{font-size:.48611111em}.katex .fontsize-ensurer.reset-size8.size4,.katex .sizing.reset-size8.size4{font-size:.55555556em}.katex .fontsize-ensurer.reset-size8.size5,.katex .sizing.reset-size8.size5{font-size:.625em}.katex .fontsize-ensurer.reset-size8.size6,.katex .sizing.reset-size8.size6{font-size:.69444444em}.katex .fontsize-ensurer.reset-size8.size7,.katex .sizing.reset-size8.size7{font-size:.83333333em}.katex .fontsize-ensurer.reset-size8.size8,.katex .sizing.reset-size8.size8{font-size:1em}.katex .fontsize-ensurer.reset-size8.size9,.katex .sizing.reset-size8.size9{font-size:1.2em}.katex .fontsize-ensurer.reset-size8.size10,.katex .sizing.reset-size8.size10{font-size:1.44027778em}.katex .fontsize-ensurer.reset-size8.size11,.katex .sizing.reset-size8.size11{font-size:1.72777778em}.katex .fontsize-ensurer.reset-size9.size1,.katex .sizing.reset-size9.size1{font-size:.28935185em}.katex .fontsize-ensurer.reset-size9.size2,.katex .sizing.reset-size9.size2{font-size:.34722222em}.katex .fontsize-ensurer.reset-size9.size3,.katex .sizing.reset-size9.size3{font-size:.40509259em}.katex .fontsize-ensurer.reset-size9.size4,.katex .sizing.reset-size9.size4{font-size:.46296296em}.katex .fontsize-ensurer.reset-size9.size5,.katex .sizing.reset-size9.size5{font-size:.52083333em}.katex .fontsize-ensurer.reset-size9.size6,.katex .sizing.reset-size9.size6{font-size:.5787037em}.katex .fontsize-ensurer.reset-size9.size7,.katex .sizing.reset-size9.size7{font-size:.69444444em}.katex .fontsize-ensurer.reset-size9.size8,.katex .sizing.reset-size9.size8{font-size:.83333333em}.katex .fontsize-ensurer.reset-size9.size9,.katex .sizing.reset-size9.size9{font-size:1em}.katex .fontsize-ensurer.reset-size9.size10,.katex .sizing.reset-size9.size10{font-size:1.20023148em}.katex .fontsize-ensurer.reset-size9.size11,.katex .sizing.reset-size9.size11{font-size:1.43981481em}.katex .fontsize-ensurer.reset-size10.size1,.katex .sizing.reset-size10.size1{font-size:.24108004em}.katex .fontsize-ensurer.reset-size10.size2,.katex .sizing.reset-size10.size2{font-size:.28929605em}.katex .fontsize-ensurer.reset-size10.size3,.katex .sizing.reset-size10.size3{font-size:.33751205em}.katex .fontsize-ensurer.reset-size10.size4,.katex .sizing.reset-size10.size4{font-size:.38572806em}.katex .fontsize-ensurer.reset-size10.size5,.katex .sizing.reset-size10.size5{font-size:.43394407em}.katex .fontsize-ensurer.reset-size10.size6,.katex .sizing.reset-size10.size6{font-size:.48216008em}.katex .fontsize-ensurer.reset-size10.size7,.katex .sizing.reset-size10.size7{font-size:.57859209em}.katex .fontsize-ensurer.reset-size10.size8,.katex .sizing.reset-size10.size8{font-size:.69431051em}.katex .fontsize-ensurer.reset-size10.size9,.katex .sizing.reset-size10.size9{font-size:.83317261em}.katex .fontsize-ensurer.reset-size10.size10,.katex .sizing.reset-size10.size10{font-size:1em}.katex .fontsize-ensurer.reset-size10.size11,.katex .sizing.reset-size10.size11{font-size:1.19961427em}.katex .fontsize-ensurer.reset-size11.size1,.katex .sizing.reset-size11.size1{font-size:.20096463em}.katex .fontsize-ensurer.reset-size11.size2,.katex .sizing.reset-size11.size2{font-size:.24115756em}.katex .fontsize-ensurer.reset-size11.size3,.katex .sizing.reset-size11.size3{font-size:.28135048em}.katex .fontsize-ensurer.reset-size11.size4,.katex .sizing.reset-size11.size4{font-size:.32154341em}.katex .fontsize-ensurer.reset-size11.size5,.katex .sizing.reset-size11.size5{font-size:.36173633em}.katex .fontsize-ensurer.reset-size11.size6,.katex .sizing.reset-size11.size6{font-size:.40192926em}.katex .fontsize-ensurer.reset-size11.size7,.katex .sizing.reset-size11.size7{font-size:.48231511em}.katex .fontsize-ensurer.reset-size11.size8,.katex .sizing.reset-size11.size8{font-size:.57877814em}.katex .fontsize-ensurer.reset-size11.size9,.katex .sizing.reset-size11.size9{font-size:.69453376em}.katex .fontsize-ensurer.reset-size11.size10,.katex .sizing.reset-size11.size10{font-size:.83360129em}.katex .fontsize-ensurer.reset-size11.size11,.katex .sizing.reset-size11.size11{font-size:1em}.katex .delimsizing.size1{font-family:KaTeX_Size1}.katex .delimsizing.size2{font-family:KaTeX_Size2}.katex .delimsizing.size3{font-family:KaTeX_Size3}.katex .delimsizing.size4{font-family:KaTeX_Size4}.katex .delimsizing.mult .delim-size1>span{font-family:KaTeX_Size1}.katex .delimsizing.mult .delim-size4>span{font-family:KaTeX_Size4}.katex .nulldelimiter{display:inline-block;width:.12em}.katex .delimcenter,.katex .op-symbol{position:relative}.katex .op-symbol.small-op{font-family:KaTeX_Size1}.katex .op-symbol.large-op{font-family:KaTeX_Size2}.katex .accent>.vlist-t,.katex .op-limits>.vlist-t{text-align:center}.katex .accent .accent-body{position:relative}.katex .accent .accent-body:not(.accent-full){width:0}.katex .overlay{display:block}.katex .mtable .vertical-separator{display:inline-block;min-width:1px}.katex .mtable .arraycolsep{display:inline-block}.katex .mtable .col-align-c>.vlist-t{text-align:center}.katex .mtable .col-align-l>.vlist-t{text-align:left}.katex .mtable .col-align-r>.vlist-t{text-align:right}.katex .svg-align{text-align:left}.katex svg{display:block;position:absolute;width:100%;height:inherit;fill:currentColor;stroke:currentColor;fill-rule:nonzero;fill-opacity:1;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1}.katex svg path{stroke:none}.katex img{border-style:none;min-width:0;min-height:0;max-width:none;max-height:none}.katex .stretchy{width:100%;display:block;position:relative;overflow:hidden}.katex .stretchy:after,.katex .stretchy:before{content:\"\"}.katex .hide-tail{width:100%;position:relative;overflow:hidden}.katex .halfarrow-left{position:absolute;left:0;width:50.2%;overflow:hidden}.katex .halfarrow-right{position:absolute;right:0;width:50.2%;overflow:hidden}.katex .brace-left{position:absolute;left:0;width:25.1%;overflow:hidden}.katex .brace-center{position:absolute;left:25%;width:50%;overflow:hidden}.katex .brace-right{position:absolute;right:0;width:25.1%;overflow:hidden}.katex .x-arrow-pad{padding:0 .5em}.katex .cd-arrow-pad{padding:0 .55556em 0 .27778em}.katex .mover,.katex .munder,.katex .x-arrow{text-align:center}.katex .boxpad{padding:0 .3em}.katex .fbox,.katex .fcolorbox{box-sizing:border-box;border:.04em solid}.katex .cancel-pad{padding:0 .2em}.katex .cancel-lap{margin-left:-.2em;margin-right:-.2em}.katex .sout{border-bottom-style:solid;border-bottom-width:.08em}.katex .angl{box-sizing:border-content;border-top:.049em solid;border-right:.049em solid;margin-right:.03889em}.katex .anglpad{padding:0 .03889em}.katex .eqn-num:before{counter-increment:katexEqnNo;content:\"(\" counter(katexEqnNo) \")\"}.katex .mml-eqn-num:before{counter-increment:mmlEqnNo;content:\"(\" counter(mmlEqnNo) \")\"}.katex .mtr-glue{width:50%}.katex .cd-vert-arrow{display:inline-block;position:relative}.katex .cd-label-left{display:inline-block;position:absolute;right:calc(50% + .3em);text-align:left}.katex .cd-label-right{display:inline-block;position:absolute;left:calc(50% + .3em);text-align:right}.katex-display{display:block;margin:1em 0;text-align:center}.katex-display>.katex{display:block;text-align:center;white-space:nowrap}.katex-display>.katex>.katex-html{display:block;position:relative}.katex-display>.katex>.katex-html>.tag{position:absolute;right:0}.katex-display.leqno>.katex>.katex-html>.tag{left:0;right:auto}.katex-display.fleqn>.katex{text-align:left;padding-left:2em}body{counter-reset:katexEqnNo mmlEqnNo}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_AMS-Regular.ttf":
/*!*************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_AMS-Regular.ttf ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_AMS-Regular.ttf?1436d720bab5540f6042b9dd39f05ee4");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_AMS-Regular.woff":
/*!**************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_AMS-Regular.woff ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_AMS-Regular.woff?25df3eee39c479c5dbd82a5a27f5c862");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_AMS-Regular.woff2":
/*!***************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_AMS-Regular.woff2 ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_AMS-Regular.woff2?cf3cce94764c737eac33ed35700a6859");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Caligraphic-Bold.ttf":
/*!******************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Caligraphic-Bold.ttf ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Caligraphic-Bold.ttf?a918d0d4efa82bcd404428e97b933b25");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff":
/*!*******************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Caligraphic-Bold.woff?48247fb2230012c6f18ccef4c60208bf");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff2":
/*!********************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Caligraphic-Bold.woff2 ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Caligraphic-Bold.woff2?13c778b4e516e728a883a2f9c1606872");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Caligraphic-Regular.ttf":
/*!*********************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Caligraphic-Regular.ttf ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Caligraphic-Regular.ttf?4ec4acf1f29004681007c4222285d23e");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff":
/*!**********************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Caligraphic-Regular.woff?bdf9b837cc72d077e02944e9fcda47e9");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff2":
/*!***********************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Caligraphic-Regular.woff2 ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Caligraphic-Regular.woff2?3f5d46fccdabd999330b96fa3754271e");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Fraktur-Bold.ttf":
/*!**************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Fraktur-Bold.ttf ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Fraktur-Bold.ttf?dd0877ebec8f48a099708063de2a3af3");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Fraktur-Bold.woff":
/*!***************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Fraktur-Bold.woff ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Fraktur-Bold.woff?6e777b1c03b095c759b5885c236f120c");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Fraktur-Bold.woff2":
/*!****************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Fraktur-Bold.woff2 ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Fraktur-Bold.woff2?df40f734ebd7396509f1bded021d8c6b");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Fraktur-Regular.ttf":
/*!*****************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Fraktur-Regular.ttf ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Fraktur-Regular.ttf?d9979391edeea4fc2712a0bee8f1328c");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Fraktur-Regular.woff":
/*!******************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Fraktur-Regular.woff ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Fraktur-Regular.woff?325384968866dbe03ec934c6a000fb1e");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Fraktur-Regular.woff2":
/*!*******************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Fraktur-Regular.woff2 ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Fraktur-Regular.woff2?ce898e4cf9b1d7e7c8ea6e48249d9795");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Main-Bold.ttf":
/*!***********************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Main-Bold.ttf ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Main-Bold.ttf?fa009f3b39d732e29b43629e08731367");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Main-Bold.woff":
/*!************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Main-Bold.woff ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Main-Bold.woff?f39f77257d3598b25c4d6de65ca976fa");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Main-Bold.woff2":
/*!*************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Main-Bold.woff2 ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Main-Bold.woff2?8d75a1e6ecd58a4eb9940ede7279c3a2");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Main-BoldItalic.ttf":
/*!*****************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Main-BoldItalic.ttf ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Main-BoldItalic.ttf?cd9f7de501f4712d8395f408f87d2589");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Main-BoldItalic.woff":
/*!******************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Main-BoldItalic.woff ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Main-BoldItalic.woff?6496af04088456784f0bdeb1b206a834");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Main-BoldItalic.woff2":
/*!*******************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Main-BoldItalic.woff2 ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Main-BoldItalic.woff2?b7ed9854ec19978153f4c43b1e33e555");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Main-Italic.ttf":
/*!*************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Main-Italic.ttf ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Main-Italic.ttf?8e740c89602084adfd96dc754e66f654");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Main-Italic.woff":
/*!**************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Main-Italic.woff ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Main-Italic.woff?d0f5089f412907de2fd3804f6dec9161");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Main-Italic.woff2":
/*!***************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Main-Italic.woff2 ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Main-Italic.woff2?477273ae2349c76afee0bda356c3e25f");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Main-Regular.ttf":
/*!**************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Main-Regular.ttf ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Main-Regular.ttf?1f59b6fa39fdefdd8d5d3c0e6d1a1068");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Main-Regular.woff":
/*!***************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Main-Regular.woff ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Main-Regular.woff?b6fd45af6cc2dd38df466371b3d2ebc5");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Main-Regular.woff2":
/*!****************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Main-Regular.woff2 ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Main-Regular.woff2?94c5cef0897080e2abc2c4016240df28");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Math-BoldItalic.ttf":
/*!*****************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Math-BoldItalic.ttf ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Math-BoldItalic.ttf?58d4a875a5aab4cfeef8ef3cfe67fef9");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Math-BoldItalic.woff":
/*!******************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Math-BoldItalic.woff ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Math-BoldItalic.woff?0bbce4d2239847d51ef618510405f213");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Math-BoldItalic.woff2":
/*!*******************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Math-BoldItalic.woff2 ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Math-BoldItalic.woff2?d3d8666a4632abee40f4414585d92110");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Math-Italic.ttf":
/*!*************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Math-Italic.ttf ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Math-Italic.ttf?a8101f5976ce6c54168148b48bd5ff52");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Math-Italic.woff":
/*!**************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Math-Italic.woff ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Math-Italic.woff?95efd25798405abac123add1b4eeca2d");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Math-Italic.woff2":
/*!***************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Math-Italic.woff2 ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Math-Italic.woff2?4fe95573161da2448789360783f39816");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_SansSerif-Bold.ttf":
/*!****************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_SansSerif-Bold.ttf ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_SansSerif-Bold.ttf?219aa2d692ab036bee6adfdebaf2d52b");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_SansSerif-Bold.woff":
/*!*****************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_SansSerif-Bold.woff ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_SansSerif-Bold.woff?e20da50e1dda67ed7e88c09276a270cc");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_SansSerif-Bold.woff2":
/*!******************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_SansSerif-Bold.woff2 ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_SansSerif-Bold.woff2?02293ffdf75b14c169db631a51110638");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_SansSerif-Italic.ttf":
/*!******************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_SansSerif-Italic.ttf ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_SansSerif-Italic.ttf?ab042de625e5f6cb75185a6a53556fc1");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_SansSerif-Italic.woff":
/*!*******************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_SansSerif-Italic.woff ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_SansSerif-Italic.woff?cd98aad09d106ffeef20b9bb36573f4d");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_SansSerif-Italic.woff2":
/*!********************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_SansSerif-Italic.woff2 ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_SansSerif-Italic.woff2?652da4643001144184456ef7faf2015b");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_SansSerif-Regular.ttf":
/*!*******************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_SansSerif-Regular.ttf ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_SansSerif-Regular.ttf?927a3bab5c885b4747e4455e5d944c8a");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_SansSerif-Regular.woff":
/*!********************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_SansSerif-Regular.woff ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_SansSerif-Regular.woff?a7167350e99b92f405ae8801435494c3");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_SansSerif-Regular.woff2":
/*!*********************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_SansSerif-Regular.woff2 ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_SansSerif-Regular.woff2?39626825863f8ae552747a74f1614406");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Script-Regular.ttf":
/*!****************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Script-Regular.ttf ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Script-Regular.ttf?ba6b006acc2d150f6bc4c28091c70357");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Script-Regular.woff":
/*!*****************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Script-Regular.woff ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Script-Regular.woff?914df03ff7507e9205a4ecd7e0cfea0d");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Script-Regular.woff2":
/*!******************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Script-Regular.woff2 ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Script-Regular.woff2?330012c54cab64b6abfd8e861dbe36e7");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Size1-Regular.ttf":
/*!***************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Size1-Regular.ttf ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Size1-Regular.ttf?6ca578961bf9f8cf4cd915db7048a245");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Size1-Regular.woff":
/*!****************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Size1-Regular.woff ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Size1-Regular.woff?4ee32d5b4bd0a456f02cdd89f0a1cfd0");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Size1-Regular.woff2":
/*!*****************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Size1-Regular.woff2 ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Size1-Regular.woff2?c03114ec648cbd34e5226cd53e410ac2");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Size2-Regular.ttf":
/*!***************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Size2-Regular.ttf ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Size2-Regular.ttf?1037f625f0d4e4b828b178837918f9ed");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Size2-Regular.woff":
/*!****************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Size2-Regular.woff ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Size2-Regular.woff?9ebe93f9fe71c49b7ceda9c93c510155");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Size2-Regular.woff2":
/*!*****************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Size2-Regular.woff2 ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Size2-Regular.woff2?a136fd4c0c02449d27e20d6017d36078");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Size3-Regular.ttf":
/*!***************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Size3-Regular.ttf ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Size3-Regular.ttf?b6c1d32bceb9a905cbb280807caf3215");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Size3-Regular.woff":
/*!****************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Size3-Regular.woff ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Size3-Regular.woff?a562474e7cb5eaa89d50a4db1e1025db");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Size3-Regular.woff2":
/*!*****************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Size3-Regular.woff2 ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Size3-Regular.woff2?5cce6e91e556438f05bc2903c0c0e568");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Size4-Regular.ttf":
/*!***************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Size4-Regular.ttf ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Size4-Regular.ttf?97bb202f822b59c00fa4ed25ce6cb14b");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Size4-Regular.woff":
/*!****************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Size4-Regular.woff ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Size4-Regular.woff?9e74796262fa0108b4d0f064d92d4306");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Size4-Regular.woff2":
/*!*****************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Size4-Regular.woff2 ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Size4-Regular.woff2?cf8982ba6667cc82989a020c8e8749c7");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Typewriter-Regular.ttf":
/*!********************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Typewriter-Regular.ttf ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Typewriter-Regular.ttf?ea67dc3c167e3d749122eddf7661d3eb");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Typewriter-Regular.woff":
/*!*********************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Typewriter-Regular.woff ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Typewriter-Regular.woff?bbc3c89c9e69cab89642ddf1150018c2");

/***/ }),

/***/ "./node_modules/katex/dist/fonts/KaTeX_Typewriter-Regular.woff2":
/*!**********************************************************************!*\
  !*** ./node_modules/katex/dist/fonts/KaTeX_Typewriter-Regular.woff2 ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("/fonts/vendor/katex/dist/KaTeX_Typewriter-Regular.woff2?e613fbb875f1961b19acbde0799e684d");

/***/ }),

/***/ "./node_modules/katex/dist/katex.min.css":
/*!***********************************************!*\
  !*** ./node_modules/katex/dist/katex.min.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_katex_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./katex.min.css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/katex/dist/katex.min.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_katex_min_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_katex_min_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./resources/js/Components/Shared/ApplicationLogo.vue":
/*!************************************************************!*\
  !*** ./resources/js/Components/Shared/ApplicationLogo.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ApplicationLogo_vue_vue_type_template_id_437974dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApplicationLogo.vue?vue&type=template&id=437974dc& */ "./resources/js/Components/Shared/ApplicationLogo.vue?vue&type=template&id=437974dc&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _ApplicationLogo_vue_vue_type_template_id_437974dc___WEBPACK_IMPORTED_MODULE_0__.render,
  _ApplicationLogo_vue_vue_type_template_id_437974dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Shared/ApplicationLogo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Shared/Dropdown/Dropdown.vue":
/*!**************************************************************!*\
  !*** ./resources/js/Components/Shared/Dropdown/Dropdown.vue ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Dropdown_vue_vue_type_template_id_2f81d5f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=template&id=2f81d5f0& */ "./resources/js/Components/Shared/Dropdown/Dropdown.vue?vue&type=template&id=2f81d5f0&");
/* harmony import */ var _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dropdown.vue?vue&type=script&lang=js& */ "./resources/js/Components/Shared/Dropdown/Dropdown.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Dropdown_vue_vue_type_template_id_2f81d5f0___WEBPACK_IMPORTED_MODULE_0__.render,
  _Dropdown_vue_vue_type_template_id_2f81d5f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Shared/Dropdown/Dropdown.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Shared/Dropdown/DropdownLink.vue":
/*!******************************************************************!*\
  !*** ./resources/js/Components/Shared/Dropdown/DropdownLink.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DropdownLink_vue_vue_type_template_id_821e1dec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DropdownLink.vue?vue&type=template&id=821e1dec& */ "./resources/js/Components/Shared/Dropdown/DropdownLink.vue?vue&type=template&id=821e1dec&");
/* harmony import */ var _DropdownLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DropdownLink.vue?vue&type=script&lang=js& */ "./resources/js/Components/Shared/Dropdown/DropdownLink.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _DropdownLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _DropdownLink_vue_vue_type_template_id_821e1dec___WEBPACK_IMPORTED_MODULE_0__.render,
  _DropdownLink_vue_vue_type_template_id_821e1dec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Shared/Dropdown/DropdownLink.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Student/NavLink.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Components/Student/NavLink.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NavLink_vue_vue_type_template_id_cfe00864___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NavLink.vue?vue&type=template&id=cfe00864& */ "./resources/js/Components/Student/NavLink.vue?vue&type=template&id=cfe00864&");
/* harmony import */ var _NavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavLink.vue?vue&type=script&lang=js& */ "./resources/js/Components/Student/NavLink.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _NavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _NavLink_vue_vue_type_template_id_cfe00864___WEBPACK_IMPORTED_MODULE_0__.render,
  _NavLink_vue_vue_type_template_id_cfe00864___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Student/NavLink.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Student/ResponsiveNavLink.vue":
/*!***************************************************************!*\
  !*** ./resources/js/Components/Student/ResponsiveNavLink.vue ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ResponsiveNavLink_vue_vue_type_template_id_40adc23a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResponsiveNavLink.vue?vue&type=template&id=40adc23a& */ "./resources/js/Components/Student/ResponsiveNavLink.vue?vue&type=template&id=40adc23a&");
/* harmony import */ var _ResponsiveNavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResponsiveNavLink.vue?vue&type=script&lang=js& */ "./resources/js/Components/Student/ResponsiveNavLink.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ResponsiveNavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ResponsiveNavLink_vue_vue_type_template_id_40adc23a___WEBPACK_IMPORTED_MODULE_0__.render,
  _ResponsiveNavLink_vue_vue_type_template_id_40adc23a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Student/ResponsiveNavLink.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Layouts/StudentLayout.vue":
/*!************************************************!*\
  !*** ./resources/js/Layouts/StudentLayout.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _StudentLayout_vue_vue_type_template_id_5eabf4f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StudentLayout.vue?vue&type=template&id=5eabf4f1& */ "./resources/js/Layouts/StudentLayout.vue?vue&type=template&id=5eabf4f1&");
/* harmony import */ var _StudentLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StudentLayout.vue?vue&type=script&lang=js& */ "./resources/js/Layouts/StudentLayout.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _StudentLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _StudentLayout_vue_vue_type_template_id_5eabf4f1___WEBPACK_IMPORTED_MODULE_0__.render,
  _StudentLayout_vue_vue_type_template_id_5eabf4f1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Layouts/StudentLayout.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Student/Exam/TakeExam.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Student/Exam/TakeExam.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TakeExam_vue_vue_type_template_id_8df08cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TakeExam.vue?vue&type=template&id=8df08cee& */ "./resources/js/Pages/Student/Exam/TakeExam.vue?vue&type=template&id=8df08cee&");
/* harmony import */ var _TakeExam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TakeExam.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Student/Exam/TakeExam.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _TakeExam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TakeExam_vue_vue_type_template_id_8df08cee___WEBPACK_IMPORTED_MODULE_0__.render,
  _TakeExam_vue_vue_type_template_id_8df08cee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Student/Exam/TakeExam.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Student/Exam/TheTimer.vue":
/*!******************************************************!*\
  !*** ./resources/js/Pages/Student/Exam/TheTimer.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TheTimer_vue_vue_type_template_id_d4379ad2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheTimer.vue?vue&type=template&id=d4379ad2& */ "./resources/js/Pages/Student/Exam/TheTimer.vue?vue&type=template&id=d4379ad2&");
/* harmony import */ var _TheTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheTimer.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Student/Exam/TheTimer.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _TheTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TheTimer_vue_vue_type_template_id_d4379ad2___WEBPACK_IMPORTED_MODULE_0__.render,
  _TheTimer_vue_vue_type_template_id_d4379ad2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Student/Exam/TheTimer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Shared/Dropdown/Dropdown.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Components/Shared/Dropdown/Dropdown.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shared/Dropdown/Dropdown.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/Shared/Dropdown/DropdownLink.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Components/Shared/Dropdown/DropdownLink.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DropdownLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shared/Dropdown/DropdownLink.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/Student/NavLink.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Components/Student/NavLink.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Student/NavLink.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/Student/ResponsiveNavLink.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Components/Student/ResponsiveNavLink.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveNavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResponsiveNavLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Student/ResponsiveNavLink.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveNavLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Layouts/StudentLayout.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Layouts/StudentLayout.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StudentLayout.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/StudentLayout.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentLayout_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Student/Exam/TakeExam.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Student/Exam/TakeExam.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TakeExam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TakeExam.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Student/Exam/TakeExam.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TakeExam_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Pages/Student/Exam/TheTimer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Pages/Student/Exam/TheTimer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TheTimer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Student/Exam/TheTimer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheTimer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/Components/Shared/ApplicationLogo.vue?vue&type=template&id=437974dc&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/Components/Shared/ApplicationLogo.vue?vue&type=template&id=437974dc& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationLogo_vue_vue_type_template_id_437974dc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationLogo_vue_vue_type_template_id_437974dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApplicationLogo_vue_vue_type_template_id_437974dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ApplicationLogo.vue?vue&type=template&id=437974dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shared/ApplicationLogo.vue?vue&type=template&id=437974dc&");


/***/ }),

/***/ "./resources/js/Components/Shared/Dropdown/Dropdown.vue?vue&type=template&id=2f81d5f0&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/Components/Shared/Dropdown/Dropdown.vue?vue&type=template&id=2f81d5f0& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_2f81d5f0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_2f81d5f0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dropdown_vue_vue_type_template_id_2f81d5f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Dropdown.vue?vue&type=template&id=2f81d5f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shared/Dropdown/Dropdown.vue?vue&type=template&id=2f81d5f0&");


/***/ }),

/***/ "./resources/js/Components/Shared/Dropdown/DropdownLink.vue?vue&type=template&id=821e1dec&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/Components/Shared/Dropdown/DropdownLink.vue?vue&type=template&id=821e1dec& ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownLink_vue_vue_type_template_id_821e1dec___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownLink_vue_vue_type_template_id_821e1dec___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DropdownLink_vue_vue_type_template_id_821e1dec___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DropdownLink.vue?vue&type=template&id=821e1dec& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shared/Dropdown/DropdownLink.vue?vue&type=template&id=821e1dec&");


/***/ }),

/***/ "./resources/js/Components/Student/NavLink.vue?vue&type=template&id=cfe00864&":
/*!************************************************************************************!*\
  !*** ./resources/js/Components/Student/NavLink.vue?vue&type=template&id=cfe00864& ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_template_id_cfe00864___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_template_id_cfe00864___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NavLink_vue_vue_type_template_id_cfe00864___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NavLink.vue?vue&type=template&id=cfe00864& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Student/NavLink.vue?vue&type=template&id=cfe00864&");


/***/ }),

/***/ "./resources/js/Components/Student/ResponsiveNavLink.vue?vue&type=template&id=40adc23a&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Components/Student/ResponsiveNavLink.vue?vue&type=template&id=40adc23a& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveNavLink_vue_vue_type_template_id_40adc23a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveNavLink_vue_vue_type_template_id_40adc23a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResponsiveNavLink_vue_vue_type_template_id_40adc23a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ResponsiveNavLink.vue?vue&type=template&id=40adc23a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Student/ResponsiveNavLink.vue?vue&type=template&id=40adc23a&");


/***/ }),

/***/ "./resources/js/Layouts/StudentLayout.vue?vue&type=template&id=5eabf4f1&":
/*!*******************************************************************************!*\
  !*** ./resources/js/Layouts/StudentLayout.vue?vue&type=template&id=5eabf4f1& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentLayout_vue_vue_type_template_id_5eabf4f1___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentLayout_vue_vue_type_template_id_5eabf4f1___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StudentLayout_vue_vue_type_template_id_5eabf4f1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./StudentLayout.vue?vue&type=template&id=5eabf4f1& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/StudentLayout.vue?vue&type=template&id=5eabf4f1&");


/***/ }),

/***/ "./resources/js/Pages/Student/Exam/TakeExam.vue?vue&type=template&id=8df08cee&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Student/Exam/TakeExam.vue?vue&type=template&id=8df08cee& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TakeExam_vue_vue_type_template_id_8df08cee___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TakeExam_vue_vue_type_template_id_8df08cee___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TakeExam_vue_vue_type_template_id_8df08cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TakeExam.vue?vue&type=template&id=8df08cee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Student/Exam/TakeExam.vue?vue&type=template&id=8df08cee&");


/***/ }),

/***/ "./resources/js/Pages/Student/Exam/TheTimer.vue?vue&type=template&id=d4379ad2&":
/*!*************************************************************************************!*\
  !*** ./resources/js/Pages/Student/Exam/TheTimer.vue?vue&type=template&id=d4379ad2& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheTimer_vue_vue_type_template_id_d4379ad2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheTimer_vue_vue_type_template_id_d4379ad2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheTimer_vue_vue_type_template_id_d4379ad2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TheTimer.vue?vue&type=template&id=d4379ad2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Student/Exam/TheTimer.vue?vue&type=template&id=d4379ad2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shared/ApplicationLogo.vue?vue&type=template&id=437974dc&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shared/ApplicationLogo.vue?vue&type=template&id=437974dc& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "svg",
    { attrs: { viewBox: "0 0 316 316", xmlns: "http://www.w3.org/2000/svg" } },
    [
      _c("path", {
        attrs: {
          d:
            "M305.8 81.125C305.77 80.995 305.69 80.885 305.65 80.755C305.56 80.525 305.49 80.285 305.37 80.075C305.29 79.935 305.17 79.815 305.07 79.685C304.94 79.515 304.83 79.325 304.68 79.175C304.55 79.045 304.39 78.955 304.25 78.845C304.09 78.715 303.95 78.575 303.77 78.475L251.32 48.275C249.97 47.495 248.31 47.495 246.96 48.275L194.51 78.475C194.33 78.575 194.19 78.725 194.03 78.845C193.89 78.955 193.73 79.045 193.6 79.175C193.45 79.325 193.34 79.515 193.21 79.685C193.11 79.815 192.99 79.935 192.91 80.075C192.79 80.285 192.71 80.525 192.63 80.755C192.58 80.875 192.51 80.995 192.48 81.125C192.38 81.495 192.33 81.875 192.33 82.265V139.625L148.62 164.795V52.575C148.62 52.185 148.57 51.805 148.47 51.435C148.44 51.305 148.36 51.195 148.32 51.065C148.23 50.835 148.16 50.595 148.04 50.385C147.96 50.245 147.84 50.125 147.74 49.995C147.61 49.825 147.5 49.635 147.35 49.485C147.22 49.355 147.06 49.265 146.92 49.155C146.76 49.025 146.62 48.885 146.44 48.785L93.99 18.585C92.64 17.805 90.98 17.805 89.63 18.585L37.18 48.785C37 48.885 36.86 49.035 36.7 49.155C36.56 49.265 36.4 49.355 36.27 49.485C36.12 49.635 36.01 49.825 35.88 49.995C35.78 50.125 35.66 50.245 35.58 50.385C35.46 50.595 35.38 50.835 35.3 51.065C35.25 51.185 35.18 51.305 35.15 51.435C35.05 51.805 35 52.185 35 52.575V232.235C35 233.795 35.84 235.245 37.19 236.025L142.1 296.425C142.33 296.555 142.58 296.635 142.82 296.725C142.93 296.765 143.04 296.835 143.16 296.865C143.53 296.965 143.9 297.015 144.28 297.015C144.66 297.015 145.03 296.965 145.4 296.865C145.5 296.835 145.59 296.775 145.69 296.745C145.95 296.655 146.21 296.565 146.45 296.435L251.36 236.035C252.72 235.255 253.55 233.815 253.55 232.245V174.885L303.81 145.945C305.17 145.165 306 143.725 306 142.155V82.265C305.95 81.875 305.89 81.495 305.8 81.125ZM144.2 227.205L100.57 202.515L146.39 176.135L196.66 147.195L240.33 172.335L208.29 190.625L144.2 227.205ZM244.75 114.995V164.795L226.39 154.225L201.03 139.625V89.825L219.39 100.395L244.75 114.995ZM249.12 57.105L292.81 82.265L249.12 107.425L205.43 82.265L249.12 57.105ZM114.49 184.425L96.13 194.995V85.305L121.49 70.705L139.85 60.135V169.815L114.49 184.425ZM91.76 27.425L135.45 52.585L91.76 77.745L48.07 52.585L91.76 27.425ZM43.67 60.135L62.03 70.705L87.39 85.305V202.545V202.555V202.565C87.39 202.735 87.44 202.895 87.46 203.055C87.49 203.265 87.49 203.485 87.55 203.695V203.705C87.6 203.875 87.69 204.035 87.76 204.195C87.84 204.375 87.89 204.575 87.99 204.745C87.99 204.745 87.99 204.755 88 204.755C88.09 204.905 88.22 205.035 88.33 205.175C88.45 205.335 88.55 205.495 88.69 205.635L88.7 205.645C88.82 205.765 88.98 205.855 89.12 205.965C89.28 206.085 89.42 206.225 89.59 206.325C89.6 206.325 89.6 206.325 89.61 206.335C89.62 206.335 89.62 206.345 89.63 206.345L139.87 234.775V285.065L43.67 229.705V60.135ZM244.75 229.705L148.58 285.075V234.775L219.8 194.115L244.75 179.875V229.705ZM297.2 139.625L253.49 164.795V114.995L278.85 100.395L297.21 89.825V139.625H297.2Z"
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shared/Dropdown/Dropdown.vue?vue&type=template&id=2f81d5f0&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shared/Dropdown/Dropdown.vue?vue&type=template&id=2f81d5f0& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "relative" },
    [
      _c(
        "div",
        {
          on: {
            click: function($event) {
              _vm.open = !_vm.open
            }
          }
        },
        [_vm._t("trigger")],
        2
      ),
      _vm._v(" "),
      _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.open,
            expression: "open"
          }
        ],
        staticClass: "fixed inset-0 z-40",
        on: {
          click: function($event) {
            _vm.open = false
          }
        }
      }),
      _vm._v(" "),
      _c(
        "transition",
        {
          attrs: {
            "enter-active-class": "transition ease-out duration-200",
            "enter-class": "transform opacity-0 scale-95",
            "enter-to-class": "transform opacity-100 scale-100",
            "leave-active-class": "transition ease-in duration-75",
            "leave-class": "transform opacity-100 scale-100",
            "leave-to-class": "transform opacity-0 scale-95"
          }
        },
        [
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.open,
                  expression: "open"
                }
              ],
              staticClass: "absolute z-50 mt-2 rounded-md shadow-lg",
              class: [_vm.widthClass, _vm.alignmentClasses],
              staticStyle: { display: "none" },
              on: {
                click: function($event) {
                  _vm.open = false
                }
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "rounded-md ring-1 ring-black ring-opacity-5",
                  class: _vm.contentClasses
                },
                [_vm._t("content")],
                2
              )
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shared/Dropdown/DropdownLink.vue?vue&type=template&id=821e1dec&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Shared/Dropdown/DropdownLink.vue?vue&type=template&id=821e1dec& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _vm.as == "button"
        ? _c(
            "button",
            {
              staticClass:
                "block w-full px-4 py-2 text-sm leading-5 text-gray-700 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",
              attrs: { type: "submit" }
            },
            [_vm._t("default")],
            2
          )
        : _c(
            "inertia-link",
            {
              staticClass:
                "block px-4 py-2 text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out",
              attrs: { href: _vm.href }
            },
            [_vm._t("default")],
            2
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Student/NavLink.vue?vue&type=template&id=cfe00864&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Student/NavLink.vue?vue&type=template&id=cfe00864& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "inertia-link",
    { class: _vm.classes, attrs: { href: _vm.href } },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Student/ResponsiveNavLink.vue?vue&type=template&id=40adc23a&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Components/Student/ResponsiveNavLink.vue?vue&type=template&id=40adc23a& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _vm.as == "button"
        ? _c(
            "button",
            { staticClass: "w-full text-left", class: _vm.classes },
            [_vm._t("default")],
            2
          )
        : _c(
            "inertia-link",
            { class: _vm.classes, attrs: { href: _vm.href } },
            [_vm._t("default")],
            2
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/StudentLayout.vue?vue&type=template&id=5eabf4f1&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Layouts/StudentLayout.vue?vue&type=template&id=5eabf4f1& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "min-h-screen bg-gray-100" },
    [
      _c("nav", { staticClass: "bg-white border-b border-gray-100" }, [
        _c("div", { staticClass: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" }, [
          _c("div", { staticClass: "flex justify-between h-16" }, [
            _c("div", { staticClass: "flex" }, [
              _c(
                "div",
                { staticClass: "flex-shrink-0 flex items-center" },
                [
                  _c(
                    "inertia-link",
                    { attrs: { href: _vm.route("students.dashboard") } },
                    [
                      _c("application-logo", {
                        staticClass: "block h-9 w-auto"
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "hidden space-x-8 sm:-my-px sm:ml-10 sm:flex" },
                [
                  _c(
                    "student-nav-link",
                    {
                      attrs: {
                        href: _vm.route("students.dashboard"),
                        active: _vm.route().current("students.dashboard")
                      }
                    },
                    [
                      _vm._v(
                        "\n                            Dashboard\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "student-nav-link",
                    {
                      attrs: {
                        href: _vm.route("students.classes.index"),
                        active: _vm.route().current("students.classes.index")
                      }
                    },
                    [
                      _vm._v(
                        "\n                            Live Class\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "student-nav-link",
                    {
                      attrs: {
                        href: _vm.route("students.exams.index"),
                        active: _vm.route().current("students.exams.*")
                      }
                    },
                    [
                      _vm._v(
                        "\n                            My Exam\n                        "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "student-nav-link",
                    {
                      attrs: {
                        href: _vm.route("students.results.index"),
                        active: _vm.route().current("students.results.*")
                      }
                    },
                    [
                      _vm._v(
                        "\n                            My Results\n                        "
                      )
                    ]
                  )
                ],
                1
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "hidden sm:flex sm:items-center sm:ml-6" },
              [
                _c(
                  "div",
                  { staticClass: "ml-3 relative" },
                  [
                    _c("app-dropdown", {
                      attrs: { align: "right", width: "48" },
                      scopedSlots: _vm._u([
                        {
                          key: "trigger",
                          fn: function() {
                            return [
                              _c(
                                "span",
                                { staticClass: "inline-flex rounded-md" },
                                [
                                  _c(
                                    "button",
                                    {
                                      staticClass:
                                        "inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",
                                      attrs: { type: "button" }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                        " +
                                          _vm._s(
                                            _vm.$page.props.auth.user.full_name
                                          ) +
                                          "\n\n                                        "
                                      ),
                                      _c(
                                        "svg",
                                        {
                                          staticClass: "ml-2 -mr-0.5 h-4 w-4",
                                          attrs: {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 20 20",
                                            fill: "currentColor"
                                          }
                                        },
                                        [
                                          _c("path", {
                                            attrs: {
                                              "fill-rule": "evenodd",
                                              d:
                                                "M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",
                                              "clip-rule": "evenodd"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  )
                                ]
                              )
                            ]
                          },
                          proxy: true
                        },
                        {
                          key: "content",
                          fn: function() {
                            return [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "block px-4 py-2 text-xs text-gray-400"
                                },
                                [
                                  _vm._v(
                                    "\n                                    Manage Account\n                                "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", {
                                staticClass: "border-t border-gray-100"
                              }),
                              _vm._v(" "),
                              _c(
                                "form",
                                {
                                  attrs: { method: "POST" },
                                  on: {
                                    submit: function($event) {
                                      $event.preventDefault()
                                      return _vm.logout($event)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "app-dropdown-link",
                                    { attrs: { as: "button" } },
                                    [
                                      _vm._v(
                                        "\n                                        Log out\n                                    "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          },
                          proxy: true
                        }
                      ])
                    })
                  ],
                  1
                )
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "-mr-2 flex items-center sm:hidden" }, [
              _c(
                "button",
                {
                  staticClass:
                    "inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",
                  on: {
                    click: function($event) {
                      _vm.showingNavigationDropdown = !_vm.showingNavigationDropdown
                    }
                  }
                },
                [
                  _c(
                    "svg",
                    {
                      staticClass: "h-6 w-6",
                      attrs: {
                        stroke: "currentColor",
                        fill: "none",
                        viewBox: "0 0 24 24"
                      }
                    },
                    [
                      _c("path", {
                        class: {
                          hidden: _vm.showingNavigationDropdown,
                          "inline-flex": !_vm.showingNavigationDropdown
                        },
                        attrs: {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M4 6h16M4 12h16M4 18h16"
                        }
                      }),
                      _vm._v(" "),
                      _c("path", {
                        class: {
                          hidden: !_vm.showingNavigationDropdown,
                          "inline-flex": _vm.showingNavigationDropdown
                        },
                        attrs: {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          "stroke-width": "2",
                          d: "M6 18L18 6M6 6l12 12"
                        }
                      })
                    ]
                  )
                ]
              )
            ])
          ])
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "sm:hidden",
            class: {
              block: _vm.showingNavigationDropdown,
              hidden: !_vm.showingNavigationDropdown
            }
          },
          [
            _c(
              "div",
              { staticClass: "pt-2 pb-3 space-y-1" },
              [
                _c(
                  "student-responsive-nav-link",
                  {
                    attrs: {
                      href: _vm.route("students.dashboard"),
                      active: _vm.route().current("students.dashboard")
                    }
                  },
                  [_vm._v("\n                    Dashboard\n                ")]
                ),
                _vm._v(" "),
                _c(
                  "student-responsive-nav-link",
                  {
                    attrs: {
                      href: _vm.route("students.classes.index"),
                      active: _vm.route().current("students.classes.index")
                    }
                  },
                  [_vm._v("\n                    Live Class\n                ")]
                ),
                _vm._v(" "),
                _c(
                  "student-responsive-nav-link",
                  {
                    attrs: {
                      href: _vm.route("students.exams.index"),
                      active: _vm.route().current("students.exams.*")
                    }
                  },
                  [_vm._v("\n                    My Exam\n                ")]
                ),
                _vm._v(" "),
                _c(
                  "student-responsive-nav-link",
                  {
                    attrs: {
                      href: _vm.route("students.results.index"),
                      active: _vm.route().current("students.results.*")
                    }
                  },
                  [_vm._v("\n                    My Results\n                ")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c("div", { staticClass: "pt-4 pb-1 border-t border-gray-200" }, [
              _c("div", { staticClass: "flex items-center px-4" }, [
                _c(
                  "div",
                  { staticClass: "font-medium text-base text-gray-800" },
                  [_vm._v(_vm._s(_vm.$page.props.auth.user.full_name))]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "font-medium text-sm text-gray-500" },
                  [_vm._v(_vm._s(_vm.$page.props.auth.user.email))]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "mt-3 space-y-1" }, [
                _c(
                  "form",
                  {
                    attrs: { method: "POST" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.logout($event)
                      }
                    }
                  },
                  [
                    _c(
                      "student-responsive-nav-link",
                      { attrs: { as: "button" } },
                      [
                        _vm._v(
                          "\n                            Logout\n                        "
                        )
                      ]
                    )
                  ],
                  1
                )
              ])
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _vm.$slots.header
        ? _c("header", { staticClass: "bg-white shadow" }, [
            _c(
              "div",
              { staticClass: "max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8" },
              [_vm._t("header")],
              2
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _c("main", [_vm._t("default")], 2),
      _vm._v(" "),
      _c("portal-target", { attrs: { name: "modal", multiple: "" } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Student/Exam/TakeExam.vue?vue&type=template&id=8df08cee&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Student/Exam/TakeExam.vue?vue&type=template&id=8df08cee& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("student-layout", [
    _c("div", { staticClass: "py-8" }, [
      _c("div", { staticClass: "max-w-7xl mx-auto sm:px-6 lg:px-8" }, [
        _c(
          "div",
          { staticClass: "flex flex-col justify-center items-center" },
          [
            _c("h2", { staticClass: "font-bold uppercase tracking-widest" }, [
              _vm._v(_vm._s(_vm.exam.category) + ": " + _vm._s(_vm.exam.name))
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "flex justify-between items-center space-x-12" },
              [
                _c("p", [_vm._v("Marks: " + _vm._s(_vm.exam.total_question))]),
                _vm._v(" "),
                _c("p", [_vm._v("Time: " + _vm._s(_vm.exam.duration))])
              ]
            )
          ]
        ),
        _vm._v(" "),
        _c("div", { staticClass: "w-2/3 mx-auto mt-12" }, [
          _c(
            "div",
            { staticClass: "flex justify-end items-center mb-6" },
            [
              _c("the-timer", {
                attrs: { duration: _vm.exam.duration },
                on: { "times-up": _vm.examTimeEnded }
              })
            ],
            1
          ),
          _vm._v(" "),
          !_vm.isExamFinish
            ? _c("div", [
                _c("div", { staticClass: "ql-editor" }, [
                  _c("div", { staticClass: "flex" }, [
                    _c("p", { staticClass: "mr-4 text-xl font-bold" }, [
                      _vm._v(_vm._s(_vm.currenQuestion.serial) + ".")
                    ]),
                    _vm._v(" "),
                    _c("div", {
                      domProps: {
                        innerHTML: _vm._s(_vm.currenQuestion.question)
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "mt-3 pl-8 space-y-3" },
                    _vm._l(_vm.currenQuestion.options, function(
                      option,
                      key,
                      index
                    ) {
                      return _c(
                        "div",
                        { key: index, staticClass: "flex items-start" },
                        [
                          _c("div", { staticClass: "flex items-center" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.selectedOption,
                                  expression: "selectedOption"
                                }
                              ],
                              staticClass:
                                "h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer",
                              attrs: { type: "radio" },
                              domProps: {
                                value: key,
                                checked: _vm._q(_vm.selectedOption, key)
                              },
                              on: {
                                change: function($event) {
                                  _vm.selectedOption = key
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("span", { staticClass: "ml-2" }, [
                              _vm._v(_vm._s(key) + ")")
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", {
                            staticClass: "ml-3",
                            domProps: { innerHTML: _vm._s(option) }
                          })
                        ]
                      )
                    }),
                    0
                  )
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "flex justify-between items-center mt-12" },
                  [
                    _c("div", { staticClass: "space-x-2" }, [
                      _c(
                        "button",
                        {
                          staticClass:
                            "px-3 py-1 bg-red-700 text-white text-sm font-semibold uppercase tracking-widest rounded hover:bg-red-600 focus:outline-none",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.setNeverQuestion($event)
                            }
                          }
                        },
                        [_vm._v("Skip")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "px-3 py-1 bg-yellow-500 text-white text-sm font-semibold uppercase tracking-widest rounded hover:bg-yellow-400 focus:outline-none",
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.setLaterQuestion($event)
                            }
                          }
                        },
                        [_vm._v("Later")]
                      ),
                      _vm._v(" "),
                      _c(
                        "button",
                        {
                          staticClass:
                            "px-3 py-1 bg-indigo-700 text-white text-sm font-semibold uppercase tracking-widest rounded hover:bg-indigo-600 focus:outline-none disabled:opacity-50",
                          attrs: { disabled: !this.selectedOption },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.selectAnswer($event)
                            }
                          }
                        },
                        [_vm._v("Next")]
                      )
                    ]),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass:
                          "px-3 py-1 bg-green-600 text-white text-sm font-semibold uppercase tracking-widest rounded hover:bg-green-500 focus:outline-none",
                        class: { "opacity-25": _vm.form.processing },
                        attrs: { disabled: _vm.form.processing },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            return _vm.finishExam($event)
                          }
                        }
                      },
                      [_vm._v("Finish")]
                    )
                  ]
                )
              ])
            : _c(
                "div",
                {
                  staticClass:
                    "flex flex-col justify-center items-center bg-white px-4 py-12"
                },
                [
                  _c("p", { staticClass: "text-sm font-bold" }, [
                    _vm._v("No question Left. You can Finish Now!")
                  ]),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass:
                        "mt-5 px-3 py-2 bg-green-600 text-white text-sm font-bold uppercase tracking-widest rounded hover:bg-green-500 focus:outline-none",
                      class: { "opacity-25": _vm.form.processing },
                      attrs: { disabled: _vm.form.processing },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          return _vm.finishExam($event)
                        }
                      }
                    },
                    [_vm._v("Finish")]
                  )
                ]
              )
        ]),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass:
              "flex justify-center items-center mt-12 divide-x-2 divide-y-2"
          },
          _vm._l(_vm.questions, function(question) {
            return _c(
              "div",
              {
                key: question.serial,
                staticClass:
                  "h-8 w-8 flex justify-center items-center font-semibold rounded-full border-2 border-gray-900",
                class: question.cssClass
              },
              [_vm._v(_vm._s(question.serial))]
            )
          }),
          0
        ),
        _vm._v(" "),
        _c(
          "p",
          { staticClass: "mt-8 text-center text-red-600 font-semibold" },
          [
            _vm._v(
              "* Don't Reload, close or minimize the brower or Change the Tab. Exam will autometically end if you do that."
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Student/Exam/TheTimer.vue?vue&type=template&id=d4379ad2&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/Pages/Student/Exam/TheTimer.vue?vue&type=template&id=d4379ad2& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "inline-flex items-center" }, [
    _c("p", { staticClass: "font-semibold tracking-widest" }, [
      _vm._v("Time Left: " + _vm._s(_vm.formattedTimeLeft))
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