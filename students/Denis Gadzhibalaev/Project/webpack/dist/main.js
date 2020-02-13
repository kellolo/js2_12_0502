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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/style/style.css */ \"./src/public/style/style.css\");\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_style_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_style_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/style/normalize.css */ \"./src/public/style/normalize.css\");\n/* harmony import */ var _public_style_normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_style_normalize_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/js/main.js */ \"./src/public/js/main.js\");\n/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_js_main_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nclass GoodItem {\r\n    constructor(name, price, id, image) {\r\n        this.name = name;\r\n        this.price = price;\r\n        this.id = id;\r\n        this.image = image;\r\n    }\r\n\r\n    render() {\r\n        return `<div class=\"product-item\" data-id=\"${this.id}\">\r\n        <img src=\"${this.image}\" alt=\"Some img\">\r\n       <div class=\"desc\">\r\n            <h3>${this.name}</h3>\r\n            <p>${this.price} $</p>\r\n            <button class=\"buy-btn\" \r\n            data-id=\"${this.id}\"\r\n            data-name=\"${this.name}\"\r\n            data-image=\"${this.image}\"\r\n            data-price=\"${this.price}\">Купить</button>\r\n        </div>\r\n    </div>`;\r\n    }\r\n}\r\n\r\nclass Catalog {\r\n    constructor(container) {\r\n        this.container = container;\r\n        this.goodsList = [];\r\n    }\r\n\r\n    init() {\r\n        this.goodsList = [  {name: 'Notebook',price: 1000,id: 1,image: 'https://placehold.it/200x150',},\r\n                            {name: 'Display',price: 200,id: 2,image: 'https://placehold.it/200x150',},\r\n                            {name: 'Keyboard',price: 20,id: 3,image: 'https://placehold.it/200x150',},\r\n                            {name: 'Mouse',price: 10,id: 4,image: 'https://placehold.it/200x150',},\r\n                            {name: 'Phones',price: 25,id: 5,image: 'https://placehold.it/200x150',},\r\n                            {name: 'Router',price: 30,id: 6,image: 'https://placehold.it/200x150',},\r\n                            {name: 'USB-camera',price: 18,id: 7,image: 'https://placehold.it/200x150',},\r\n                            {name: 'Gamepad',price: 24,id: 8,image: 'https://placehold.it/200x150',},\r\n];\r\n        this._render();\r\n    }\r\n    _fetchData() {\r\n        \r\n    }\r\n    _render() {\r\n        let goodItem = '';\r\n        this.goodsList.forEach(el => {\r\n            goodItem += new GoodItem(el.name, el.price, el.id, el.image).render();\r\n        });\r\n        document.querySelector(this.container).innerHTML = goodItem;\r\n    }\r\n}\r\n\r\nclass BasketItem {\r\n    constructor(name, price, id, image, quantity) {\r\n        this.name = name;\r\n        this.price = price;\r\n        this.id = id;\r\n        this.image = image;\r\n        this.quantity = quantity;\r\n    }\r\n\r\n    render() {\r\n        return `<div class=\"cart-item\" data-id=\"${this.id}\">\r\n        <div class=\"product-bio\">\r\n             <img class = \"product-basket-image\"src=\"${this.image}\" alt=\"Some image\">\r\n             <div class=\"product-desc\">\r\n                 <p class=\"product-title\">${this.name}</p>\r\n                 <p class=\"product-quantity\">Quantity: ${this.quantity}</p>\r\n                 <p class=\"product-single-price\">$${this.price} each</p>\r\n             </div>\r\n         </div>\r\n         <div class=\"right-block\">\r\n             <p class=\"product-price\">${this.quantity * this.price}</p>\r\n             <button class=\"del-btn\" data-id=\"${this.id}\">&times;</button>\r\n         </div>\r\n     </div>`;\r\n    }\r\n}\r\nclass Basket {\r\n    constructor(container) {\r\n        this.basketList = [];\r\n        this.container = container;\r\n        this.totalSum = 0;\r\n        this._controlModalWindow();\r\n    }\r\n    init() {\r\n        this.basketList = [];\r\n        this._addProductToBasket();\r\n        this._removeProductFromBasket();\r\n    }\r\n    _render() {\r\n        let basketItem = '';\r\n        this.basketList.forEach(el => {\r\n            basketItem += new BasketItem(el.name, el.price, el.id, el.image, el.quantity).render();\r\n        });\r\n        document.querySelector(this.container).innerHTML = basketItem;\r\n    }\r\n\r\n    _controlModalWindow() {\r\n        document.querySelector('.btn-cart').addEventListener('click', () => {\r\n            document.querySelector('.cart-block-wrapper').classList.toggle('invisible');\r\n        });\r\n        \r\n    }\r\n\r\n    _addProductToBasket() {\r\n        document.querySelector('.products').addEventListener('click', (evt) => {\r\n            if (evt.target.classList.contains('buy-btn')) {\r\n                this._addProduct(evt.target);\r\n                this._render();\r\n            }\r\n        });\r\n    }\r\n\r\n    _removeProductFromBasket() {\r\n        document.querySelector('.cart-block').addEventListener('click', (evt) => {\r\n            if (evt.target.classList.contains('del-btn')) {\r\n                this._removeProduct(evt.target);\r\n                this._render();\r\n            }\r\n        })\r\n    }\r\n\r\n    _addProduct(product) {\r\n        let productId = +product.dataset['id'];\r\n        let find = this.basketList.find(element => element.id === productId);\r\n        if (!find) {\r\n            this.basketList.push({\r\n                name: product.dataset['name'],\r\n                id: productId,\r\n                image: product.dataset['image'],\r\n                price: +product.dataset['price'],\r\n                quantity: 1\r\n            });\r\n        } else {\r\n            find.quantity++\r\n\r\n        }\r\n        this._increaseTotalSum(+product.dataset['price']);\r\n    }\r\n    _removeProduct(product) {\r\n        let productId = +product.dataset['id'];\r\n        let find = this.basketList.find(element => element.id === productId);\r\n        if (find.quantity > 1) {\r\n            find.quantity--;\r\n        } else {\r\n            this.basketList.splice(this.basketList.indexOf(find), 1);\r\n            document.querySelector(`.cart-item[data-id=\"${productId}\"]`).remove()\r\n        }\r\n        this._reduceTotalSum(+find.price);\r\n    }\r\n\r\n    _increaseTotalSum(sum) {\r\n        this.totalSum += sum;\r\n        return document.querySelector('.total-sum').innerText = `Total price: ${this.totalSum} $`;\r\n    }\r\n\r\n    _reduceTotalSum(sum) {\r\n        this.totalSum -= sum ;\r\n        if (this.totalSum == 0) {\r\n            return document.querySelector('.total-sum').innerText = `Total price: ${this.totalSum}`;\r\n        } else {\r\n        return document.querySelector('.total-sum').innerText = `Total price: ${this.totalSum} $`;\r\n        }\r\n    \r\n    }\r\n}\r\nlet catalog = new Catalog('.products');\r\ncatalog.init();\r\nlet basket = new Basket('.cart-block');\r\nbasket.init();\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

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