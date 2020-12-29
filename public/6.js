(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/components/Dashboard.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _charts_MainChartExample__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./charts/MainChartExample */ "./resources/js/Admin/components/charts/MainChartExample.vue");
/* harmony import */ var _widgets_WidgetsDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./widgets/WidgetsDropdown */ "./resources/js/Admin/components/widgets/WidgetsDropdown.vue");
/* harmony import */ var _widgets_WidgetsBrand__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./widgets/WidgetsBrand */ "./resources/js/Admin/components/widgets/WidgetsBrand.vue");
/* harmony import */ var _customers_Customers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./customers/Customers */ "./resources/js/Admin/components/customers/Customers.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Dashboard',
  components: {
    MainChartExample: _charts_MainChartExample__WEBPACK_IMPORTED_MODULE_0__["default"],
    WidgetsDropdown: _widgets_WidgetsDropdown__WEBPACK_IMPORTED_MODULE_1__["default"],
    WidgetsBrand: _widgets_WidgetsBrand__WEBPACK_IMPORTED_MODULE_2__["default"],
    Customers: _customers_Customers__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      selected: 'Month',
      tableItems: [{
        avatar: {
          url: 'img/avatars/1.jpg',
          status: 'success'
        },
        user: {
          name: 'Yiorgos Avraamu',
          "new": true,
          registered: 'Jan 1, 2015'
        },
        country: {
          name: 'USA',
          flag: 'cif-us'
        },
        usage: {
          value: 50,
          period: 'Jun 11, 2015 - Jul 10, 2015'
        },
        payment: {
          name: 'Mastercard',
          icon: 'cib-cc-mastercard'
        },
        activity: '10 sec ago'
      }, {
        avatar: {
          url: 'img/avatars/2.jpg',
          status: 'danger'
        },
        user: {
          name: 'Avram Tarasios',
          "new": false,
          registered: 'Jan 1, 2015'
        },
        country: {
          name: 'Brazil',
          flag: 'cif-br'
        },
        usage: {
          value: 22,
          period: 'Jun 11, 2015 - Jul 10, 2015'
        },
        payment: {
          name: 'Visa',
          icon: 'cib-cc-visa'
        },
        activity: '5 minutes ago'
      }, {
        avatar: {
          url: 'img/avatars/3.jpg',
          status: 'warning'
        },
        user: {
          name: 'Quintin Ed',
          "new": true,
          registered: 'Jan 1, 2015'
        },
        country: {
          name: 'India',
          flag: 'cif-in'
        },
        usage: {
          value: 74,
          period: 'Jun 11, 2015 - Jul 10, 2015'
        },
        payment: {
          name: 'Stripe',
          icon: 'cib-stripe'
        },
        activity: '1 hour ago'
      }, {
        avatar: {
          url: 'img/avatars/4.jpg',
          status: ''
        },
        user: {
          name: 'Enéas Kwadwo',
          "new": true,
          registered: 'Jan 1, 2015'
        },
        country: {
          name: 'France',
          flag: 'cif-fr'
        },
        usage: {
          value: 98,
          period: 'Jun 11, 2015 - Jul 10, 2015'
        },
        payment: {
          name: 'PayPal',
          icon: 'cib-paypal'
        },
        activity: 'Last month'
      }, {
        avatar: {
          url: 'img/avatars/5.jpg',
          status: 'success'
        },
        user: {
          name: 'Agapetus Tadeáš',
          "new": true,
          registered: 'Jan 1, 2015'
        },
        country: {
          name: 'Spain',
          flag: 'cif-es'
        },
        usage: {
          value: 22,
          period: 'Jun 11, 2015 - Jul 10, 2015'
        },
        payment: {
          name: 'Google Wallet',
          icon: 'cib-google-pay'
        },
        activity: 'Last week'
      }, {
        avatar: {
          url: 'img/avatars/6.jpg',
          status: 'danger'
        },
        user: {
          name: 'Friderik Dávid',
          "new": true,
          registered: 'Jan 1, 2015'
        },
        country: {
          name: 'Poland',
          flag: 'cif-pl'
        },
        usage: {
          value: 43,
          period: 'Jun 11, 2015 - Jul 10, 2015'
        },
        payment: {
          name: 'Amex',
          icon: 'cib-cc-amex'
        },
        activity: 'Last week'
      }],
      tableFields: [{
        key: 'avatar',
        label: '',
        _classes: 'text-center'
      }, {
        key: 'user'
      }, {
        key: 'country',
        _classes: 'text-center'
      }, {
        key: 'usage'
      }, {
        key: 'payment',
        label: 'Payment method',
        _classes: 'text-center'
      }, {
        key: 'activity'
      }]
    };
  },
  methods: {
    color: function color(value) {
      var $color;

      if (value <= 25) {
        $color = 'info';
      } else if (value > 25 && value <= 50) {
        $color = 'success';
      } else if (value > 50 && value <= 75) {
        $color = 'warning';
      } else if (value > 75 && value <= 100) {
        $color = 'danger';
      }

      return $color;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/components/charts/MainChartExample.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/components/charts/MainChartExample.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/vue-chartjs */ "./node_modules/@coreui/vue-chartjs/dist/coreui-vue-chartjs.common.js");
/* harmony import */ var _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/utils/src */ "./node_modules/@coreui/utils/src/index.js");
//
//
//
//
//
//
//
//



function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'MainChartExample',
  components: {
    CChartLine: _coreui_vue_chartjs__WEBPACK_IMPORTED_MODULE_0__["CChartLine"]
  },
  computed: {
    defaultDatasets: function defaultDatasets() {
      var brandSuccess = Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('success2') || '#4dbd74';
      var brandInfo = Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('info') || '#20a8d8';
      var brandDanger = Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["getStyle"])('danger') || '#f86c6b';
      var elements = 27;
      var data1 = [];
      var data2 = [];
      var data3 = [];

      for (var i = 0; i <= elements; i++) {
        data1.push(random(50, 200));
        data2.push(random(80, 100));
        data3.push(65);
      }

      return [{
        label: 'My First dataset',
        backgroundColor: Object(_coreui_utils_src__WEBPACK_IMPORTED_MODULE_1__["hexToRgba"])(brandInfo, 10),
        borderColor: brandInfo,
        pointHoverBackgroundColor: brandInfo,
        borderWidth: 2,
        data: data1
      }, {
        label: 'My Second dataset',
        backgroundColor: 'transparent',
        borderColor: brandSuccess,
        pointHoverBackgroundColor: brandSuccess,
        borderWidth: 2,
        data: data2
      }, {
        label: 'My Third dataset',
        backgroundColor: 'transparent',
        borderColor: brandDanger,
        pointHoverBackgroundColor: brandDanger,
        borderWidth: 1,
        borderDash: [8, 5],
        data: data3
      }];
    },
    defaultOptions: function defaultOptions() {
      return {
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            gridLines: {
              drawOnChartArea: false
            }
          }],
          yAxes: [{
            ticks: {
              beginAtZero: true,
              maxTicksLimit: 5,
              stepSize: Math.ceil(250 / 5),
              max: 250
            },
            gridLines: {
              display: true
            }
          }]
        },
        elements: {
          point: {
            radius: 0,
            hitRadius: 10,
            hoverRadius: 4,
            hoverBorderWidth: 3
          }
        }
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/components/customers/Customers.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/components/customers/Customers.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      isLoading: false,
      tableFields: [{
        key: 'avatar',
        label: 'Avatar',
        _classes: 'text-center'
      }, {
        key: 'full_name'
      }, {
        key: 'activity'
      }],
      isModal: false,
      properties: {
        first_name: '',
        last_name: ''
      },
      type: 'create'
    };
  },
  components: {
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BModal"]
  },
  directives: {
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BButton"],
    BModal: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BModal"]
  },
  mounted: function mounted() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.$store.dispatch("customer/getCustomers");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  computed: {
    customers: function customers() {
      var customers = this.$store.state.customer.customers;
      customers = customers.map(function (customer) {
        customer.full_name = "".concat(customer.first_name, " ").concat(customer.last_name);
        return customer;
      });
      return customers;
    }
  },
  methods: {
    color: function color(value) {
      var $color;

      if (value <= 25) {
        $color = 'info';
      } else if (value > 25 && value <= 50) {
        $color = 'success';
      } else if (value > 50 && value <= 75) {
        $color = 'warning';
      } else if (value > 75 && value <= 100) {
        $color = 'danger';
      }

      return $color;
    },
    openModal: function openModal(customer) {
      this.isModal = !this.isModal;

      if (customer) {
        this.properties = customer;
        this.type = 'update';
      } else {
        this.type = 'create';
      }
    },
    updateCustomer: function updateCustomer(customer) {
      this.$store.dispatch("customer/updateCustomer", customer);
      this.isModal = !this.isModal;
    },
    deleteModal: function deleteModal(id) {
      this.$store.dispatch("customer/deleteCustomer", id);
    },
    createCustomer: function createCustomer(customer) {
      this.$store.dispatch("customer/createCustomer", customer);
      this.isModal = !this.isModal;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/components/Dashboard.vue?vue&type=template&id=7ab59919&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/components/Dashboard.vue?vue&type=template&id=7ab59919& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    [
      _c("WidgetsDropdown"),
      _vm._v(" "),
      _c(
        "CCard",
        [
          _c(
            "CCardBody",
            [
              _c(
                "CRow",
                [
                  _c("CCol", { attrs: { sm: "5" } }, [
                    _c(
                      "h4",
                      {
                        staticClass: "card-title mb-0",
                        attrs: { id: "traffic" }
                      },
                      [_vm._v("Traffic")]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "small text-muted" }, [
                      _vm._v("November 2017")
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "CCol",
                    { staticClass: "d-none d-md-block", attrs: { sm: "7" } },
                    [
                      _c(
                        "CButton",
                        {
                          staticClass: "float-right",
                          attrs: { color: "primary" }
                        },
                        [
                          _c("CIcon", { attrs: { name: "cil-cloud-download" } })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "CButtonGroup",
                        { staticClass: "float-right mr-3" },
                        _vm._l(["Day", "Month", "Year"], function(value, key) {
                          return _c(
                            "CButton",
                            {
                              key: key,
                              staticClass: "mx-0",
                              attrs: {
                                color: "outline-secondary",
                                pressed: value === _vm.selected ? true : false
                              },
                              on: {
                                click: function($event) {
                                  _vm.selected = value
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n              " +
                                  _vm._s(value) +
                                  "\n            "
                              )
                            ]
                          )
                        }),
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("MainChartExample", {
                staticStyle: { height: "300px", "margin-top": "40px" }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("Customers")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/components/charts/MainChartExample.vue?vue&type=template&id=f71d75f8&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/components/charts/MainChartExample.vue?vue&type=template&id=f71d75f8& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
  return _c("CChartLine", {
    attrs: {
      datasets: _vm.defaultDatasets,
      options: _vm.defaultOptions,
      labels: [
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa",
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa",
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa",
        "Su",
        "Mo",
        "Tu",
        "We",
        "Th",
        "Fr",
        "Sa",
        "Su"
      ]
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/components/customers/Customers.vue?vue&type=template&id=82dc8440&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Admin/components/customers/Customers.vue?vue&type=template&id=82dc8440& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
    "CRow",
    [
      _c(
        "CCol",
        { attrs: { md: "12" } },
        [
          _c(
            "CCardHeader",
            [
              _vm._v("\n      Customer Management\n      "),
              _c("br"),
              _vm._v(" "),
              _c(
                "CCol",
                { staticClass: "d-none d-md-block" },
                [
                  _c(
                    "CButton",
                    {
                      staticClass: "float-right",
                      attrs: { color: "primary" },
                      on: {
                        click: function($event) {
                          return _vm.openModal()
                        }
                      }
                    },
                    [_vm._v("\n            Create\n        ")]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "CCardBody",
                [
                  _c("br"),
                  _vm._v(" "),
                  _vm.customers.length
                    ? _c("CDataTable", {
                        staticClass: "mb-0 table-outline",
                        attrs: {
                          hover: "",
                          items: _vm.customers,
                          fields: _vm.tableFields,
                          "head-color": "light",
                          "no-sorting": ""
                        },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "avatar",
                              fn: function(ref) {
                                var item = ref.item
                                return _c(
                                  "td",
                                  { staticClass: "text-center" },
                                  [
                                    _c("div", { staticClass: "c-avatar" }, [
                                      _c("img", {
                                        staticClass: "c-avatar-img",
                                        attrs: {
                                          src: "img/avatars/1.jpg",
                                          alt: ""
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("span", {
                                        staticClass:
                                          "c-avatar-status bg-success"
                                      })
                                    ])
                                  ]
                                )
                              }
                            },
                            {
                              key: "activity",
                              fn: function(ref) {
                                var item = ref.item
                                return _c(
                                  "td",
                                  {},
                                  [
                                    _c(
                                      "b-button",
                                      {
                                        attrs: { variant: "danger" },
                                        on: {
                                          click: function($event) {
                                            return _vm.deleteModal(item.id)
                                          }
                                        }
                                      },
                                      [_vm._v("Delete")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "CButton",
                                      {
                                        staticClass: "mr-1",
                                        attrs: { color: "dark" },
                                        on: {
                                          click: function($event) {
                                            return _vm.openModal(item)
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n              Update\n            "
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              }
                            }
                          ],
                          null,
                          false,
                          3559061817
                        )
                      })
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "CModal",
        {
          attrs: {
            show: _vm.isModal,
            "no-close-on-backdrop": true,
            centered: true,
            title: "Update customer",
            size: "lg",
            color: "success"
          },
          on: {
            "update:show": function($event) {
              _vm.isModal = $event
            }
          },
          scopedSlots: _vm._u([
            {
              key: "header",
              fn: function() {
                return [
                  _c("h6", { staticClass: "modal-title" }, [
                    _vm._v("Update Customer")
                  ]),
                  _vm._v(" "),
                  _c("CButtonClose", {
                    staticClass: "text-white",
                    on: {
                      click: function($event) {
                        _vm.isModal = false
                      }
                    }
                  })
                ]
              },
              proxy: true
            },
            {
              key: "footer",
              fn: function() {
                return [
                  _c(
                    "CButton",
                    {
                      attrs: { color: "danger" },
                      on: {
                        click: function($event) {
                          _vm.isModal = false
                        }
                      }
                    },
                    [_vm._v("Cancel")]
                  ),
                  _vm._v(" "),
                  _vm.type === "update"
                    ? _c(
                        "CButton",
                        {
                          attrs: { color: "success" },
                          on: {
                            click: function($event) {
                              return _vm.updateCustomer(_vm.properties)
                            }
                          }
                        },
                        [_vm._v("Submit")]
                      )
                    : _c(
                        "CButton",
                        {
                          attrs: { color: "success" },
                          on: {
                            click: function($event) {
                              return _vm.createCustomer(_vm.properties)
                            }
                          }
                        },
                        [_vm._v("Create")]
                      )
                ]
              },
              proxy: true
            }
          ])
        },
        [
          _c(
            "CCardBody",
            [
              _c(
                "CRow",
                [
                  _c(
                    "CCol",
                    { attrs: { sm: "12" } },
                    [
                      _c("CInput", {
                        attrs: {
                          label: "First Name",
                          placeholder: "Enter your First Name"
                        },
                        model: {
                          value: _vm.properties.first_name,
                          callback: function($$v) {
                            _vm.$set(_vm.properties, "first_name", $$v)
                          },
                          expression: "properties.first_name"
                        }
                      })
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "CRow",
                [
                  _c(
                    "CCol",
                    { attrs: { sm: "12" } },
                    [
                      _c("CInput", {
                        attrs: {
                          label: "Last Name",
                          placeholder: "Enter your Last Name"
                        },
                        model: {
                          value: _vm.properties.last_name,
                          callback: function($$v) {
                            _vm.$set(_vm.properties, "last_name", $$v)
                          },
                          expression: "properties.last_name"
                        }
                      })
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

/***/ "./resources/js/Admin/components/Dashboard.vue":
/*!*****************************************************!*\
  !*** ./resources/js/Admin/components/Dashboard.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_7ab59919___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=7ab59919& */ "./resources/js/Admin/components/Dashboard.vue?vue&type=template&id=7ab59919&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/Admin/components/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_7ab59919___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_7ab59919___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Admin/components/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Admin/components/Dashboard.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/Admin/components/Dashboard.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/components/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Admin/components/Dashboard.vue?vue&type=template&id=7ab59919&":
/*!************************************************************************************!*\
  !*** ./resources/js/Admin/components/Dashboard.vue?vue&type=template&id=7ab59919& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_7ab59919___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=7ab59919& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/components/Dashboard.vue?vue&type=template&id=7ab59919&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_7ab59919___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_7ab59919___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Admin/components/charts/MainChartExample.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/Admin/components/charts/MainChartExample.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainChartExample_vue_vue_type_template_id_f71d75f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MainChartExample.vue?vue&type=template&id=f71d75f8& */ "./resources/js/Admin/components/charts/MainChartExample.vue?vue&type=template&id=f71d75f8&");
/* harmony import */ var _MainChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MainChartExample.vue?vue&type=script&lang=js& */ "./resources/js/Admin/components/charts/MainChartExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MainChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainChartExample_vue_vue_type_template_id_f71d75f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MainChartExample_vue_vue_type_template_id_f71d75f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Admin/components/charts/MainChartExample.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Admin/components/charts/MainChartExample.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Admin/components/charts/MainChartExample.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MainChartExample.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/components/charts/MainChartExample.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MainChartExample_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Admin/components/charts/MainChartExample.vue?vue&type=template&id=f71d75f8&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/Admin/components/charts/MainChartExample.vue?vue&type=template&id=f71d75f8& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainChartExample_vue_vue_type_template_id_f71d75f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./MainChartExample.vue?vue&type=template&id=f71d75f8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/components/charts/MainChartExample.vue?vue&type=template&id=f71d75f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainChartExample_vue_vue_type_template_id_f71d75f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MainChartExample_vue_vue_type_template_id_f71d75f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Admin/components/customers/Customers.vue":
/*!***************************************************************!*\
  !*** ./resources/js/Admin/components/customers/Customers.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Customers_vue_vue_type_template_id_82dc8440___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Customers.vue?vue&type=template&id=82dc8440& */ "./resources/js/Admin/components/customers/Customers.vue?vue&type=template&id=82dc8440&");
/* harmony import */ var _Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Customers.vue?vue&type=script&lang=js& */ "./resources/js/Admin/components/customers/Customers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Customers_vue_vue_type_template_id_82dc8440___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Customers_vue_vue_type_template_id_82dc8440___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Admin/components/customers/Customers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Admin/components/customers/Customers.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/Admin/components/customers/Customers.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Customers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/components/customers/Customers.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Admin/components/customers/Customers.vue?vue&type=template&id=82dc8440&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/Admin/components/customers/Customers.vue?vue&type=template&id=82dc8440& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_template_id_82dc8440___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Customers.vue?vue&type=template&id=82dc8440& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Admin/components/customers/Customers.vue?vue&type=template&id=82dc8440&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_template_id_82dc8440___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Customers_vue_vue_type_template_id_82dc8440___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);