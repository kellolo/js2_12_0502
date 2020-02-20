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
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nvar image = 'https://placehold.it/200x150';\n\nvar GoodItem =\n/*#__PURE__*/\nfunction () {\n  function GoodItem(name, price, id) {\n    var image = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : image;\n\n    _classCallCheck(this, GoodItem);\n\n    this.name = name;\n    this.price = price;\n    this.id = id;\n    this.image = image;\n  }\n\n  _createClass(GoodItem, [{\n    key: \"render\",\n    value: function render() {\n      return \"<div class=\\\"product-item\\\" data-id=\\\"\".concat(this.id, \"\\\">\\n        <img src=\\\"\").concat(this.image, \"\\\" alt=\\\"Some img\\\">\\n       <div class=\\\"desc\\\">\\n            <h3>\").concat(this.name, \"</h3>\\n            <p>\").concat(this.price, \" $</p>\\n            <button class=\\\"buy-btn\\\" \\n            data-id=\\\"\").concat(this.id, \"\\\"\\n            data-name=\\\"\").concat(this.name, \"\\\"\\n            data-image=\\\"\").concat(this.image, \"\\\"\\n            data-price=\\\"\").concat(this.price, \"\\\">\\u041A\\u0443\\u043F\\u0438\\u0442\\u044C</button>\\n        </div>\\n    </div>\");\n    }\n  }]);\n\n  return GoodItem;\n}();\n\nvar Catalog =\n/*#__PURE__*/\nfunction () {\n  function Catalog(container) {\n    _classCallCheck(this, Catalog);\n\n    this.container = container;\n    this.goodsList = [];\n  }\n\n  _createClass(Catalog, [{\n    key: \"init\",\n    value: function init() {\n      this._fetchData();\n    }\n  }, {\n    key: \"_fetchData\",\n    value: function _fetchData() {\n      var _this = this;\n\n      var url = 'https://raw.githubusercontent.com/Diger134/js2_12_0502/master/students/Denis%20Gadzhibalaev/Project/webpack/src/server/db/catalogData.json';\n      this.goodsList = [];\n\n      this._promiseReq(url).then(function (dataJSON) {\n        return JSON.parse(dataJSON);\n      }).then(function (dataParsedFromJSON) {\n        _this.goodsList = dataParsedFromJSON;\n\n        _this._render();\n      })[\"catch\"](function (errorData) {\n        console.log(errorData + ' ERROR');\n      })[\"finally\"](function () {\n        console.log('Catalog:');\n        console.log(_this.goodsList);\n      });\n    }\n  }, {\n    key: \"_makeGETRequest\",\n    value: function _makeGETRequest(url, resolve, reject) {\n      var xhr = new XMLHttpRequest();\n\n      xhr.onreadystatechange = function () {\n        if (xhr.readyState === 4) {\n          if (xhr.status === 200) {\n            resolve(xhr.responseText);\n          } else {\n            reject('error');\n          }\n        }\n      };\n\n      xhr.open('GET', url, true);\n      xhr.send();\n    }\n  }, {\n    key: \"_promiseReq\",\n    value: function _promiseReq(url) {\n      var _this2 = this;\n\n      return new Promise(function (res, rej) {\n        _this2._makeGETRequest(url, res, rej);\n      });\n    }\n  }, {\n    key: \"_render\",\n    value: function _render() {\n      var goodItem = '';\n      this.goodsList.forEach(function (el) {\n        goodItem += new GoodItem(el.product_name, el.price, el.id_product, el.image).render();\n      });\n      document.querySelector(this.container).innerHTML = goodItem;\n    }\n  }]);\n\n  return Catalog;\n}();\n\nvar BasketItem =\n/*#__PURE__*/\nfunction () {\n  function BasketItem(name, price, id) {\n    var image = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : image;\n    var quantity = arguments.length > 4 ? arguments[4] : undefined;\n\n    _classCallCheck(this, BasketItem);\n\n    this.name = name;\n    this.price = price;\n    this.id = id;\n    this.image = image;\n    this.quantity = quantity;\n  }\n\n  _createClass(BasketItem, [{\n    key: \"render\",\n    value: function render() {\n      return \"<div class=\\\"cart-item\\\" data-id=\\\"\".concat(this.id, \"\\\">\\n        <div class=\\\"product-bio\\\">\\n             <img class = \\\"product-basket-image\\\"src=\\\"\").concat(this.image, \"\\\" alt=\\\"Some image\\\">\\n             <div class=\\\"product-desc\\\">\\n                 <p class=\\\"product-title\\\">\").concat(this.name, \"</p>\\n                 <p class=\\\"product-quantity\\\">Quantity: \").concat(this.quantity, \"</p>\\n                 <p class=\\\"product-single-price\\\">$\").concat(this.price, \" each</p>\\n             </div>\\n         </div>\\n         <div class=\\\"right-block\\\">\\n             <p class=\\\"product-price\\\">\").concat(this.quantity * this.price, \"</p>\\n             <button class=\\\"del-btn\\\" data-id=\\\"\").concat(this.id, \"\\\">&times;</button>\\n         </div>\\n     </div>\");\n    }\n  }]);\n\n  return BasketItem;\n}();\n\nvar Basket =\n/*#__PURE__*/\nfunction () {\n  function Basket(container) {\n    _classCallCheck(this, Basket);\n\n    this.basketList = [];\n    this.container = container;\n\n    this._controlModalWindow();\n  }\n\n  _createClass(Basket, [{\n    key: \"init\",\n    value: function init() {\n      this._fetchData();\n\n      this._addProductToBasket();\n\n      this._removeProductFromBasket();\n    }\n  }, {\n    key: \"_fetchData\",\n    value: function _fetchData() {\n      var _this3 = this;\n\n      var url = 'https://raw.githubusercontent.com/Diger134/js2_12_0502/master/students/Denis%20Gadzhibalaev/Project/webpack/src/server/db/getBasket.json';\n      this.basketList = [];\n\n      this._promiseReq(url).then(function (dataJSON) {\n        _this3.basketList = JSON.parse(dataJSON);\n        _this3.totalSum = _this3.basketList.amount;\n        document.querySelector('.total-sum').innerText = \"Total price: \".concat(_this3.totalSum, \" $\");\n\n        _this3._render();\n      })[\"catch\"](function (errorData) {\n        console.log(errorData + ' ERROR');\n      })[\"finally\"](function () {\n        console.log('Basket:');\n        console.log(_this3.basketList.contents);\n      });\n    }\n  }, {\n    key: \"_makeGETRequest\",\n    value: function _makeGETRequest(url, resolve, reject) {\n      var xhr = new XMLHttpRequest();\n\n      xhr.onreadystatechange = function () {\n        if (xhr.readyState === 4) {\n          if (xhr.status === 200) {\n            resolve(xhr.responseText);\n          } else {\n            reject('error');\n          }\n        }\n      };\n\n      xhr.open('GET', url, true);\n      xhr.send();\n    }\n  }, {\n    key: \"_promiseReq\",\n    value: function _promiseReq(url) {\n      var _this4 = this;\n\n      return new Promise(function (res, rej) {\n        _this4._makeGETRequest(url, res, rej);\n      });\n    }\n  }, {\n    key: \"_render\",\n    value: function _render() {\n      var basketItem = '';\n      this.basketList.contents.forEach(function (el) {\n        basketItem += new BasketItem(el.product_name, el.price, el.id_product, el.image, el.quantity).render();\n      });\n      document.querySelector(this.container).innerHTML = basketItem;\n    }\n  }, {\n    key: \"_controlModalWindow\",\n    value: function _controlModalWindow() {\n      document.querySelector('.btn-cart').addEventListener('click', function () {\n        document.querySelector('.cart-block-wrapper').classList.toggle('invisible');\n      });\n    }\n  }, {\n    key: \"_addProductToBasket\",\n    value: function _addProductToBasket() {\n      var _this5 = this;\n\n      document.querySelector('.products').addEventListener('click', function (evt) {\n        if (evt.target.classList.contains('buy-btn')) {\n          _this5._addProduct(evt.target);\n\n          _this5._render();\n        }\n      });\n    }\n  }, {\n    key: \"_removeProductFromBasket\",\n    value: function _removeProductFromBasket() {\n      var _this6 = this;\n\n      document.querySelector('.cart-block').addEventListener('click', function (evt) {\n        if (evt.target.classList.contains('del-btn')) {\n          _this6._removeProduct(evt.target);\n\n          _this6._render();\n        }\n      });\n    }\n  }, {\n    key: \"_addProduct\",\n    value: function _addProduct(product) {\n      var productId = +product.dataset['id'];\n      var find = this.basketList.contents.find(function (element) {\n        return element.id_product === productId;\n      });\n\n      if (!find) {\n        this.basketList.contents.push({\n          product_name: product.dataset['name'],\n          id_product: productId,\n          image: product.dataset['image'],\n          price: +product.dataset['price'],\n          quantity: 1\n        });\n        this.basketList.countGoods += 1;\n      } else {\n        find.quantity++;\n        this.basketList.countGoods += 1;\n      }\n\n      this._increaseTotalSum(+product.dataset['price']);\n    }\n  }, {\n    key: \"_removeProduct\",\n    value: function _removeProduct(product) {\n      var productId = +product.dataset['id'];\n      var find = this.basketList.contents.find(function (element) {\n        return element.id_product === productId;\n      });\n\n      if (find.quantity > 1) {\n        find.quantity--;\n        this.basketList.countGoods -= 1;\n      } else {\n        this.basketList.contents.splice(this.basketList.contents.indexOf(find), 1);\n        this.basketList.countGoods -= 1;\n        document.querySelector(\".cart-item[data-id=\\\"\".concat(productId, \"\\\"]\")).remove();\n      }\n\n      this._reduceTotalSum(+find.price);\n    }\n  }, {\n    key: \"_increaseTotalSum\",\n    value: function _increaseTotalSum(sum) {\n      this.totalSum += sum;\n      this.basketList.amount = this.totalSum;\n      return document.querySelector('.total-sum').innerText = \"Total price: \".concat(this.totalSum, \" $\");\n    }\n  }, {\n    key: \"_reduceTotalSum\",\n    value: function _reduceTotalSum(sum) {\n      this.totalSum -= sum;\n      this.basketList.amount = this.totalSum;\n\n      if (this.totalSum == 0) {\n        return document.querySelector('.total-sum').innerText = \"\";\n      } else {\n        return document.querySelector('.total-sum').innerText = \"Total price: \".concat(this.totalSum, \" $\");\n      }\n    }\n  }]);\n\n  return Basket;\n}();\n\nvar catalog = new Catalog('.products');\ncatalog.init();\nvar basket = new Basket('.cart-block');\nbasket.init();\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

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