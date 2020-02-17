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

eval("function _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar API = 'https://raw.githubusercontent.com/awesomesk1ll/js2_12_0502/master/students/Aleksey%20Skhomenko/project/src/public/json';\n\nvar ItemList =\n/*#__PURE__*/\nfunction () {\n  function ItemList(path, container) {\n    _classCallCheck(this, ItemList);\n\n    this.items = [];\n    this.url = path;\n    this.container = container;\n\n    this._init();\n  }\n\n  _createClass(ItemList, [{\n    key: \"_init\",\n    value: function _init() {\n      return false;\n    } ////////////////////////// модерн вариант запроса данных через fetch - 4 строчки\n    // getData(url) {\n    //     return fetch(url)\n    //         .then(d => {d.json()})\n    // }\n    ////////////////////////// запрос данных с использованием new Promise - 19 строк (начало вставки)\n\n  }, {\n    key: \"getData\",\n    value: function getData(url) {\n      var _this = this;\n\n      return new Promise(function (res, rej) {\n        _this.makeGETRequest(url, res, rej);\n      }).then(function (d) {\n        return JSON.parse(d);\n      });\n    }\n  }, {\n    key: \"makeGETRequest\",\n    value: function makeGETRequest(url, resolve, reject) {\n      var xhr = new XMLHttpRequest();\n\n      xhr.onreadystatechange = function () {\n        if (xhr.readyState === 4) {\n          if (xhr.status === 200) {\n            resolve(xhr.responseText);\n          } else {\n            reject(Error('xhr.status: ' + xhr.status));\n          }\n        }\n      };\n\n      xhr.open('GET', url, true);\n      xhr.send();\n    } ////////////////////////// (конец вставки)\n\n  }, {\n    key: \"_render\",\n    value: function _render() {\n      var _this2 = this;\n\n      var DOM_target = document.querySelector(this.container);\n      var htmlString = '';\n      if (this.items.length > 0) this.items.forEach(function (item) {\n        var t = new proto[_this2.constructor.name](item);\n        t.quantity = item.quantity;\n        htmlString += t.render();\n      });\n\n      if (this.price != undefined && this.quantity != undefined) {\n        if (this.items.length > 0) {\n          htmlString += \"<hr>\\n                \\u0422\\u043E\\u0432\\u0430\\u0440\\u043E\\u0432 \\u0432 \\u043A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0435: \".concat(this.quantity, \" (\\u0441\\u0442\\u0430\\u043A\\u043E\\u0432: \").concat(this.items.length, \")<br>\\n                \\u041E\\u0431\\u0449\\u0430\\u044F \\u0441\\u0442\\u043E\\u0438\\u043C\\u043E\\u0441\\u0442\\u044C: \").concat(this.price, \"$\\n                <button name=\\\"wipe\\\" class=\\\"btn\\\">\\u041E\\u0447\\u0438\\u0441\\u0442\\u0438\\u0442\\u044C \\u043A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0443</button>\\n                \");\n        } else {\n          htmlString = \"<p>\\u041A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0430 \\u043F\\u0443\\u0441\\u0442\\u0430.</p>\";\n        }\n      }\n\n      DOM_target.innerHTML = htmlString;\n    }\n  }]);\n\n  return ItemList;\n}();\n\nvar Catalog =\n/*#__PURE__*/\nfunction (_ItemList) {\n  _inherits(Catalog, _ItemList);\n\n  function Catalog(cart) {\n    var _this3;\n\n    var url = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/catalogDataResponse.json';\n    var container = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.products';\n\n    _classCallCheck(this, Catalog);\n\n    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Catalog).call(this, url, container));\n    _this3.cart = cart;\n    return _this3;\n  }\n\n  _createClass(Catalog, [{\n    key: \"_init\",\n    value: function _init() {\n      var _this4 = this;\n\n      this.getData(API + this.url).then(function (parsedData) {\n        _this4.items = parsedData;\n      }).then(function () {\n        _this4._render();\n      })[\"catch\"](console.log.bind(console))[\"finally\"](function () {\n        _this4._addListeners();\n      });\n    }\n  }, {\n    key: \"_addListeners\",\n    value: function _addListeners() {\n      var _this5 = this;\n\n      document.querySelector(this.container).addEventListener('click', function (evt) {\n        if (evt.target.name == 'buy') {\n          _this5.cart.addProduct(evt.target);\n\n          console.log(\"\".concat(evt.target.dataset.name, \" \\u0434\\u043E\\u0431\\u0430\\u0432\\u043B\\u0435\\u043D \\u0432 \\u043A\\u043E\\u0440\\u0437\\u0438\\u043D\\u0443.\"));\n        }\n      });\n    }\n  }]);\n\n  return Catalog;\n}(ItemList);\n\nvar Cart =\n/*#__PURE__*/\nfunction (_ItemList2) {\n  _inherits(Cart, _ItemList2);\n\n  function Cart() {\n    var _this6;\n\n    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '/cartDataResponse.json';\n    var container = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.cart-block';\n    var btn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '.btn-cart';\n\n    _classCallCheck(this, Cart);\n\n    _this6 = _possibleConstructorReturn(this, _getPrototypeOf(Cart).call(this, url, container));\n    _this6.price = 0;\n    _this6.quantity = 0;\n    _this6.btn = btn;\n    return _this6;\n  }\n\n  _createClass(Cart, [{\n    key: \"_init\",\n    value: function _init() {\n      var _this7 = this;\n\n      this.getData(API + this.url).then(function (parsedData) {\n        _this7.items = parsedData.items;\n        _this7.price = parsedData.price;\n        _this7.quantity = parsedData.quantity;\n      }).then(function () {\n        _this7._render();\n      })[\"catch\"](console.log.bind(console))[\"finally\"](function () {\n        _this7._addListeners();\n      });\n    }\n  }, {\n    key: \"_addListeners\",\n    value: function _addListeners() {\n      var _this8 = this;\n\n      //кнопка скрытия и показа корзины\n      document.querySelector(this.btn).addEventListener('click', function () {\n        document.querySelector(_this8.container).classList.toggle('invisible');\n      }); //кнопки удаления товара (добавляется один раз)\n\n      document.querySelector(this.container).addEventListener('click', function (evt) {\n        if (evt.target.name == \"remove\") _this8.removeProduct(evt.target, true);\n        if (evt.target.name == \"wipe\") _this8.wipe();\n        if (evt.target.name == \"count-modifier\") _this8.setCount(evt.target);\n      }); //при изменении количества товаров через прямой ввод в input\n\n      document.querySelector(this.container).addEventListener('change', function (evt) {\n        if (evt.target.name == 'quantity') _this8.setCount(evt.target);\n      });\n    }\n  }, {\n    key: \"addProduct\",\n    value: function addProduct(prod) {\n      var find = this.items.find(function (x) {\n        return x.product_id === prod.dataset.id;\n      });\n\n      if (!find) {\n        this.items.push(new CartItem({\n          img: prod.dataset.img,\n          product_name: prod.dataset.name,\n          price: +prod.dataset.price,\n          product_id: prod.dataset.id,\n          quantity: 1\n        }));\n      } else {\n        find.quantity++;\n      }\n\n      this._calculate();\n\n      this._render();\n    } //удаляет одну единицу товара в корзине, если второй параметр true, то удаляет всю связку этого товара\n\n  }, {\n    key: \"removeProduct\",\n    value: function removeProduct(prod) {\n      var all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      var find = this.items.find(function (item) {\n        return item.product_id === prod.dataset.id;\n      });\n\n      if (all || find.quantity <= 1) {\n        this.items.splice(this.items.indexOf(find), 1);\n        console.log(\"\".concat(find.product_name, \" \\u0443\\u0434\\u0430\\u043B\\u0451\\u043D \\u0438\\u0437 \\u043A\\u043E\\u0440\\u0437\\u0438\\u043D\\u044B.\"));\n      } else {\n        find.quantity--;\n      }\n\n      this._calculate();\n\n      this._render();\n    } //прописывает количество товару в корзине, используется на кнопках (+|- 1) и для инпута (любое число)\n\n  }, {\n    key: \"setCount\",\n    value: function setCount(elem) {\n      var item = this.items.find(function (x) {\n        return x.product_id === elem.dataset.id;\n      });\n\n      if (elem.name == \"quantity\") {\n        item.quantity = +elem.value;\n        console.log(item.quantity == 0 ? \"\".concat(item.product_name, \" \\u0443\\u0434\\u0430\\u043B\\u0451\\u043D \\u0438\\u0437 \\u043A\\u043E\\u0440\\u0437\\u0438\\u043D\\u044B.\") : \"\\u041A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E \".concat(item.product_name, \" \\u0442\\u0435\\u043F\\u0435\\u0440\\u044C \\u0440\\u0430\\u0432\\u043D\\u043E \").concat(item.quantity, \".\"));\n      } else if (elem.name == \"count-modifier\") {\n        item.quantity += +elem.dataset.modify;\n        console.log(item.quantity == 0 ? \"\".concat(item.product_name, \" \\u0443\\u0434\\u0430\\u043B\\u0451\\u043D \\u0438\\u0437 \\u043A\\u043E\\u0440\\u0437\\u0438\\u043D\\u044B.\") : \"\\u041A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u043E \".concat(item.product_name, \" \").concat(elem.dataset.modify == \"+1\" ? \"увеличено\" : \"уменьшено\", \" \\u0438 \\u0442\\u0435\\u043F\\u0435\\u0440\\u044C \\u0440\\u0430\\u0432\\u043D\\u043E \").concat(item.quantity, \".\"));\n      }\n\n      if (item.quantity == 0) this.items.splice(this.items.indexOf(item), 1);\n\n      this._calculate();\n\n      this._render();\n    } //пересчитывает стоимость всех товаров в корзине и количество всех товаров (колво связок this.items.length)\n\n  }, {\n    key: \"_calculate\",\n    value: function _calculate() {\n      var p = 0,\n          q = 0;\n      this.items.forEach(function (elem) {\n        p += elem.price * elem.quantity;\n        q += elem.quantity;\n      });\n      this.price = p;\n      this.quantity = q;\n    } //стирает данные в корзине\n\n  }, {\n    key: \"wipe\",\n    value: function wipe() {\n      delete this.items;\n      this.items = [];\n\n      this._calculate();\n\n      this._render();\n\n      console.log('Корзина очищена.');\n    }\n  }]);\n\n  return Cart;\n}(ItemList);\n\nvar Item =\n/*#__PURE__*/\nfunction () {\n  function Item(obj) {\n    _classCallCheck(this, Item);\n\n    this.product_name = obj.product_name;\n    this.price = obj.price;\n    this.product_id = obj.product_id;\n    this.img = obj.img;\n  }\n\n  _createClass(Item, [{\n    key: \"render\",\n    value: function render() {\n      return \"\\n            <div class=\\\"product-item\\\" data-id=\\\"\".concat(this.product_id, \"\\\">\\n                <img src=\\\"\").concat(this.img + '?225x311', \"\\\" alt=\\\"\").concat(this.product_name, \"\\\">\\n                <div class=\\\"desc\\\">\\n                    <h3>\").concat(this.product_name, \"</h3>\\n                    <p>\").concat(this.price, \"$</p>\\n                    <button name=\\\"buy\\\" class=\\\"btn\\\"\\n                        data-id=\\\"\").concat(this.product_id, \"\\\"\\n                        data-name=\\\"\").concat(this.product_name, \"\\\"\\n                        data-price=\\\"\").concat(this.price, \"\\\"\\n                        data-img=\\\"\").concat(this.img, \"\\\">\\n                        \\u041A\\u0443\\u043F\\u0438\\u0442\\u044C\\n                    </button>\\n                </div>\\n            </div>\\n        \");\n    }\n  }]);\n\n  return Item;\n}();\n\nvar CatalogItem =\n/*#__PURE__*/\nfunction (_Item) {\n  _inherits(CatalogItem, _Item);\n\n  function CatalogItem() {\n    _classCallCheck(this, CatalogItem);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(CatalogItem).apply(this, arguments));\n  }\n\n  return CatalogItem;\n}(Item);\n\nvar CartItem =\n/*#__PURE__*/\nfunction (_Item2) {\n  _inherits(CartItem, _Item2);\n\n  function CartItem(obj) {\n    var _this9;\n\n    _classCallCheck(this, CartItem);\n\n    _this9 = _possibleConstructorReturn(this, _getPrototypeOf(CartItem).call(this, obj));\n    _this9.quantity = 1;\n    return _this9;\n  }\n\n  _createClass(CartItem, [{\n    key: \"render\",\n    value: function render() {\n      return \"\\n            <div class=\\\"cart-item\\\" data-id=\\\"\".concat(this.product_id, \"\\\">\\n                <img src=\\\"\").concat(this.img + '?69x93', \"\\\" alt=\\\"\").concat(this.product_name, \"\\\">\\n                <div class=\\\"product-bio\\\">\\n                    <p class=\\\"cart-item-name\\\">\").concat(this.product_name, \"</p>\\n                    <p class=\\\"product-price right-block\\\"> \").concat(this.price, \"$</p>\\n                    <div class=\\\"quantity\\\">\\n                        <button name=\\\"count-modifier\\\" class=\\\"btn\\\" data-id=\\\"\").concat(this.product_id, \"\\\" data-modify=\\\"-1\\\">-</button>\\n                        <input name=\\\"quantity\\\" type=\\\"number\\\" onclick=\\\"event.target.select()\\\" data-id=\\\"\").concat(this.product_id, \"\\\" value=\\\"\").concat(this.quantity, \"\\\">\\n                        <button name=\\\"count-modifier\\\" class=\\\"btn\\\" data-id=\\\"\").concat(this.product_id, \"\\\" data-modify=\\\"+1\\\">+</button>\\n                    </div><br>\\n                <button name=\\\"remove\\\" class=\\\"btn\\\"\\n                    data-id=\\\"\").concat(this.product_id, \"\\\"\\n                    data-name=\\\"\").concat(this.product_name, \"\\\"\\n                    data-price=\\\"\").concat(this.price, \"\\\">\\n                </button>\\n                </div>\\n            </div>\\n        \");\n    }\n  }]);\n\n  return CartItem;\n}(Item);\n\nvar proto = {\n  Cart: CartItem,\n  Catalog: CatalogItem\n};\nvar cart = new Cart();\nvar catalog = new Catalog(cart);\nwindow.onload = console.timeEnd('Loading');\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

/***/ }),

/***/ "./src/public/style/normalize.css":
/*!****************************************!*\
  !*** ./src/public/style/normalize.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/public/style/normalize.css?");

/***/ }),

/***/ "./src/public/style/style.css":
/*!************************************!*\
  !*** ./src/public/style/style.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/public/style/style.css?");

/***/ })

/******/ });