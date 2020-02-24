/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/style/style.css */ \"./src/public/style/style.css\");\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_style_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_style_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/style/normalize.css */ \"./src/public/style/normalize.css\");\n/* harmony import */ var _public_style_normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_style_normalize_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/js/main.js */ \"./src/public/js/main.js\");\n/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_js_main_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar image = 'https://placehold.it/200x150';\nvar cartImage = 'https://placehold.it/100x80';\nvar API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'; //общий родительский класс списка товаров\n\nvar List =\n/*#__PURE__*/\nfunction () {\n  function List(url, container) {\n    _classCallCheck(this, List);\n\n    this.url = url;\n    this.container = container;\n    this.items = [];\n\n    this._init();\n  }\n\n  _createClass(List, [{\n    key: \"_init\",\n    value: function _init() {\n      return false; //проще переопределить далее\n    }\n  }, {\n    key: \"getData\",\n    value: function getData(url) {\n      return fetch(API + url).then(function (d) {\n        return d.json();\n      });\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n\n      var block = document.querySelector(this.container);\n      var htmlStr = '';\n      this.items.forEach(function (item) {\n        //создает класс товара в зависимости от вызываемого класса\n        var newProd = new classesDependency[_this.constructor.name](item);\n        htmlStr += newProd.getTemplate();\n      });\n      block.innerHTML = htmlStr;\n    }\n  }]);\n\n  return List;\n}(); //общий родительский класс товаров\n\n\nvar Item = function Item(obj) {\n  var img = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : image;\n\n  _classCallCheck(this, Item);\n\n  this.product_name = obj.product_name;\n  this.price = obj.price;\n  this.id_product = obj.id_product;\n  this.img = img;\n}; //класс каталога товаров\n\n\nvar Catalog =\n/*#__PURE__*/\nfunction (_List) {\n  _inherits(Catalog, _List);\n\n  function Catalog(linkToCart) {\n    var _this2;\n\n    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/catalogData.json';\n    var container = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.products';\n\n    _classCallCheck(this, Catalog);\n\n    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(Catalog).call(this, url, container));\n    _this2.cart = linkToCart;\n    return _this2;\n  }\n\n  _createClass(Catalog, [{\n    key: \"_init\",\n    value: function _init() {\n      var _this3 = this;\n\n      this.getData(this.url).then(function (parsedData) {\n        _this3.items = parsedData;\n      }).then(function () {\n        _this3.render();\n      })[\"finally\"](function () {\n        document.querySelector(_this3.container).addEventListener('click', function (evt) {\n          if (evt.target.name === 'buy-btn') {\n            _this3.cart.addProduct(evt.target);\n          }\n        });\n      });\n    }\n  }]);\n\n  return Catalog;\n}(List); //класс корзины товаров\n\n\nvar Cart =\n/*#__PURE__*/\nfunction (_List2) {\n  _inherits(Cart, _List2);\n\n  function Cart() {\n    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/getBasket.json';\n    var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.cart-block';\n\n    _classCallCheck(this, Cart);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Cart).call(this, url, container));\n  }\n\n  _createClass(Cart, [{\n    key: \"_init\",\n    value: function _init() {\n      var _this4 = this;\n\n      this.getData(this.url).then(function (parsedData) {\n        _this4.items = parsedData.contents;\n      }).then(function () {\n        _this4.render();\n      })[\"finally\"](function () {\n        document.querySelector(_this4.container).addEventListener('click', function (evt) {\n          if (evt.target.name === 'del-btn') {\n            _this4.removeProduct(evt.target.dataset.id_product);\n          }\n        });\n        document.querySelector('.btn-cart').addEventListener('click', function () {\n          document.querySelector(_this4.container).classList.toggle('invisible');\n        });\n      });\n    }\n  }, {\n    key: \"addProduct\",\n    value: function addProduct(item) {\n      var findItem = this.items.find(function (elem) {\n        return elem.id_product == item.dataset.id_product;\n      });\n\n      if (!findItem) {\n        this.items.push(new CartItem({\n          product_name: item.dataset.product_name,\n          id_product: item.dataset.id_product,\n          price: +item.dataset.price,\n          quantity: 1\n        }));\n      } else {\n        findItem.quantity++;\n      }\n\n      this.render();\n    }\n  }, {\n    key: \"removeProduct\",\n    value: function removeProduct(id) {\n      var findItem = this.items.find(function (elem) {\n        return elem.id_product == id;\n      });\n\n      if (findItem.quantity > 1) {\n        findItem.quantity--;\n      } else {\n        this.items.splice(this.items.indexOf(findItem), 1);\n      }\n\n      this.render();\n    }\n  }]);\n\n  return Cart;\n}(List); //класс товара в каталоге\n\n\nvar CatalogItem =\n/*#__PURE__*/\nfunction (_List3) {\n  _inherits(CatalogItem, _List3);\n\n  function CatalogItem() {\n    _classCallCheck(this, CatalogItem);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(CatalogItem).apply(this, arguments));\n  }\n\n  _createClass(CatalogItem, [{\n    key: \"getTemplate\",\n    value: function getTemplate() {\n      return \"<div class=\\\"product-item\\\" data-id=\\\"\".concat(this.id_product, \"\\\">\\n                    <img src=\\\"\").concat(this.img, \"\\\" alt=\\\"Some img\\\">\\n                    <div class=\\\"desc\\\">\\n                        <h3>\").concat(this.product_name, \"</h3>\\n                        <p>\").concat(this.price, \" $</p>\\n                        <button class=\\\"buy-btn\\\" \\n                        name=\\\"buy-btn\\\"\\n                        data-id_product=\\\"\").concat(this.id_product, \"\\\"\\n                        data-product_name=\\\"\").concat(this.product_name, \"\\\"\\n                        data-img=\\\"\").concat(this.img, \"\\\"\\n                        data-price=\\\"\").concat(this.price, \"\\\">\\u041A\\u0443\\u043F\\u0438\\u0442\\u044C</button>\\n                    </div>\\n                </div>\");\n    }\n  }]);\n\n  return CatalogItem;\n}(List); //класс товара в корзине\n\n\nvar CartItem =\n/*#__PURE__*/\nfunction (_Item) {\n  _inherits(CartItem, _Item);\n\n  function CartItem(obj) {\n    var _this5;\n\n    var img = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : cartImage;\n\n    _classCallCheck(this, CartItem);\n\n    _this5 = _possibleConstructorReturn(this, _getPrototypeOf(CartItem).call(this, obj, img));\n    _this5.quantity = 1;\n    return _this5;\n  }\n\n  _createClass(CartItem, [{\n    key: \"getTemplate\",\n    value: function getTemplate() {\n      return \"<div class=\\\"cart-item\\\" data-id=\\\"\".concat(this.id, \"\\\">\\n                    <div class=\\\"product-bio\\\">\\n                        <img src=\\\"\").concat(this.img, \"\\\" alt=\\\"Some image\\\">\\n                        <div class=\\\"product-desc\\\">\\n                            <p class=\\\"product-name\\\">\").concat(this.product_name, \"</p>\\n                            <p class=\\\"product-quantity\\\">Quantity: \").concat(this.quantity, \"</p>\\n                            <p class=\\\"product-single-price\\\">$\").concat(this.price, \" each</p>\\n                        </div>\\n                    </div>\\n                    <div class=\\\"right-block\\\">\\n                        <p class=\\\"product-price\\\">\").concat(this.quantity * this.price, \"</p>\\n                        <button class=\\\"del-btn\\\" name=\\\"del-btn\\\" data-id=\\\"\").concat(this.id, \"\\\">&times;</button>\\n                    </div>\\n                </div>\");\n    }\n  }]);\n\n  return CartItem;\n}(Item); //объект, который содержит соответствие классов списков и классов элементов\n\n\nvar classesDependency = {\n  Catalog: CatalogItem,\n  Cart: CartItem\n};\nvar cart = new Cart();\nvar catalog = new Catalog(cart);\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

/***/ }),

/***/ "./src/public/style/normalize.css":
/*!****************************************!*\
  !*** ./src/public/style/normalize.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/style/normalize.css?");

/***/ }),

/***/ "./src/public/style/style.css":
/*!************************************!*\
  !*** ./src/public/style/style.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/public/style/style.css?");

/***/ })

/******/ });