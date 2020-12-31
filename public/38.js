(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Register.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Register.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Register',
  data: function data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        passwordConfirm: ''
      }
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])({
    error: function error(state) {
      return state.auth.error;
    }
  })), {}, {
    auth: function auth() {
      var auth = this.$store.auth.auth;
      console.log("auth", auth);
      return auth;
    }
  }),
  methods: {
    register: function register() {
      if (this.user.password !== this.user.passwordConfirm) {} else {
        this.$store.dispatch('auth/register', this.user);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Register.vue?vue&type=template&id=62ff28b9&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/pages/Register.vue?vue&type=template&id=62ff28b9& ***!
  \*****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "d-flex align-items-center min-vh-100" },
    [
      _c(
        "CContainer",
        { attrs: { fluid: "" } },
        [
          _c(
            "CRow",
            { staticClass: "justify-content-center" },
            [
              _c(
                "CCol",
                { attrs: { md: "6" } },
                [
                  _c(
                    "CCard",
                    { staticClass: "mx-4 mb-0" },
                    [
                      _c(
                        "CCardBody",
                        { staticClass: "p-4" },
                        [
                          _c(
                            "CForm",
                            [
                              _c("h1", [_vm._v("Register")]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _vm._v("Create your account")
                              ]),
                              _vm._v(" "),
                              _c("CInput", {
                                attrs: {
                                  placeholder: "Username",
                                  autocomplete: "username"
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "prepend-content",
                                    fn: function() {
                                      return [
                                        _c("CIcon", {
                                          attrs: { name: "cil-user" }
                                        })
                                      ]
                                    },
                                    proxy: true
                                  }
                                ]),
                                model: {
                                  value: _vm.user.name,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "name", $$v)
                                  },
                                  expression: "user.name"
                                }
                              }),
                              _vm._v(" "),
                              _c("CInput", {
                                attrs: {
                                  placeholder: "Email",
                                  autocomplete: "email",
                                  prepend: "@"
                                },
                                model: {
                                  value: _vm.user.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "email", $$v)
                                  },
                                  expression: "user.email"
                                }
                              }),
                              _vm._v(" "),
                              _c("CInput", {
                                attrs: {
                                  placeholder: "Password",
                                  type: "password",
                                  autocomplete: "new-password"
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "prepend-content",
                                    fn: function() {
                                      return [
                                        _c("CIcon", {
                                          attrs: { name: "cil-lock-locked" }
                                        })
                                      ]
                                    },
                                    proxy: true
                                  }
                                ]),
                                model: {
                                  value: _vm.user.password,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "password", $$v)
                                  },
                                  expression: "user.password"
                                }
                              }),
                              _vm._v(" "),
                              _c("CInput", {
                                staticClass: "mb-4",
                                attrs: {
                                  placeholder: "Repeat password",
                                  type: "password",
                                  autocomplete: "new-password"
                                },
                                scopedSlots: _vm._u([
                                  {
                                    key: "prepend-content",
                                    fn: function() {
                                      return [
                                        _c("CIcon", {
                                          attrs: { name: "cil-lock-locked" }
                                        })
                                      ]
                                    },
                                    proxy: true
                                  }
                                ]),
                                model: {
                                  value: _vm.user.passwordConfirm,
                                  callback: function($$v) {
                                    _vm.$set(_vm.user, "passwordConfirm", $$v)
                                  },
                                  expression: "user.passwordConfirm"
                                }
                              }),
                              _vm._v(" "),
                              _c(
                                "CButton",
                                {
                                  attrs: { color: "success", block: "" },
                                  on: {
                                    click: function($event) {
                                      return _vm.register()
                                    }
                                  }
                                },
                                [_vm._v("Create Account")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CCardFooter",
                        { staticClass: "p-4" },
                        [
                          _c(
                            "CRow",
                            [
                              _c(
                                "CCol",
                                { attrs: { col: "6" } },
                                [
                                  _c(
                                    "CButton",
                                    { attrs: { block: "", color: "facebook" } },
                                    [
                                      _vm._v(
                                        "\n                  Facebook\n                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "CCol",
                                { attrs: { col: "6" } },
                                [
                                  _c(
                                    "CButton",
                                    { attrs: { block: "", color: "twitter" } },
                                    [
                                      _vm._v(
                                        "\n                  Twitter\n                "
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _vm.error
                            ? _c(
                                "CAlert",
                                { attrs: { show: "", color: "danger" } },
                                [_vm._v("ERROR")]
                              )
                            : _vm._e()
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/pages/Register.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/pages/Register.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_62ff28b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=62ff28b9& */ "./resources/js/components/pages/Register.vue?vue&type=template&id=62ff28b9&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/components/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_62ff28b9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_62ff28b9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/pages/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/pages/Register.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/pages/Register.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/pages/Register.vue?vue&type=template&id=62ff28b9&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/pages/Register.vue?vue&type=template&id=62ff28b9& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_62ff28b9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=62ff28b9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/pages/Register.vue?vue&type=template&id=62ff28b9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_62ff28b9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_62ff28b9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);