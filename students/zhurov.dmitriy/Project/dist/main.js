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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/style/style.css */ \"./src/public/style/style.css\");\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_style_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_style_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/style/normalize.css */ \"./src/public/style/normalize.css\");\n/* harmony import */ var _public_style_normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_style_normalize_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/js/main.js */ \"./src/public/js/main.js\");\n/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_js_main_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("let url = {\r\n    catalog: 'https://raw.githubusercontent.com/Shadzen/js2_12_0502/master/students/zhurov.dmitriy/Project/src/db/catalogData.json',\r\n    basket: 'https://raw.githubusercontent.com/Shadzen/js2_12_0502/master/students/zhurov.dmitriy/Project/src/db/getBasket.json'\r\n};\r\n\r\nlet data = {\r\n    catalog: [],\r\n    basket: []\r\n};\r\n\r\nfunction pRequest(url) {\r\n    return new Promise((res, rej) => {\r\n        let xhr = new XMLHttpRequest();\r\n\r\n        xhr.onreadystatechange = function () {\r\n            if (xhr.readyState === 4) {\r\n                xhr.status === 200 ? res(xhr.responseText) : rej('error');\r\n            }\r\n        };\r\n\r\n        xhr.open('GET', url, true);\r\n        xhr.send()\r\n    })\r\n}\r\n\r\ndocument.querySelector('.btn-cart').addEventListener('click', () => {\r\n    document.querySelector('.cart-block').classList.toggle('invisible');\r\n});\r\n\r\ndocument.querySelector('.cart-block').addEventListener('click', (evt) => {\r\n    if (evt.target.classList.contains('del-btn')) userCart.remove(evt.target);\r\n});\r\n\r\ndocument.querySelector('.products').addEventListener('click', (evt) => {\r\n    if (evt.target.classList.contains('buy-btn')) userCart.add(evt.target);\r\n});\r\n\r\nclass CatalogItem {\r\n    constructor(i) {\r\n        this.id = data.catalog[i].id_product;\r\n        this.name = data.catalog[i].product_name;\r\n        this.img = data.catalog[i].img;\r\n        this.price = data.catalog[i].price;\r\n        this.quantity = 0;\r\n    }\r\n\r\n    toDOM() {\r\n        return `<div class=\"product-item\" data-id=\"${this.id}\">\r\n                    <img src=\"${this.img}\" alt=\"Some img\">\r\n                    <div class=\"desc\">\r\n                        <h3>${this.name}</h3>\r\n                        <p>${this.price} $</p>\r\n                        <button class=\"buy-btn\"\r\n                        data-id=\"${this.id}\"\r\n                        data-name=\"${this.name}\"\r\n                        data-image=\"${this.img}\"\r\n                        data-price=\"${this.price}\">Купить</button>\r\n                    </div>\r\n                </div>`;\r\n    }\r\n}\r\n\r\nclass Catalog {\r\n    constructor(container) {\r\n        this.items = [];\r\n        this.container = container;\r\n        this._init();\r\n    }\r\n\r\n    _fetchData() {\r\n        let arr = [];\r\n        data.catalog.forEach(el => {\r\n            arr.push(new CatalogItem(data.catalog.indexOf(el)));\r\n        });\r\n        return arr;\r\n    }\r\n\r\n    _init() {\r\n        pRequest(url.catalog)\r\n            .then(dataJSON => {\r\n                data.catalog = JSON.parse(dataJSON);\r\n            })\r\n            .finally(() => {\r\n                this.items = this._fetchData();\r\n                this._render();\r\n            });\r\n    }\r\n\r\n    _render() {\r\n        let str = '';\r\n        this.items.forEach(el => {\r\n            str += this.items[this.items.indexOf(el)].toDOM();\r\n        });\r\n        document.querySelector(this.container).innerHTML = str;\r\n    }\r\n}\r\n\r\nlet catalog = new Catalog('#products');\r\n\r\nclass CartItem {\r\n    constructor(product) {\r\n        this.id = +product.dataset['id'];\r\n        this.name = product.dataset ['name'];\r\n        this.price = +product.dataset['price'];\r\n        this.img = \"https://placehold.it/100x80\";\r\n        this.quantity = 1;\r\n    }\r\n\r\n    toDOM() {\r\n        return `<div class=\"cart-item\" data-id=\"${this.id}\">\r\n                    <div class=\"product-bio\">\r\n                        <img src=\"${this.img}\" alt=\"Some image\">\r\n                        <div class=\"product-desc\">\r\n                            <p class=\"product-title\">${this.name}</p>\r\n                            <p class=\"product-quantity\">Quantity: ${this.quantity}</p>\r\n                            <p class=\"product-single-price\">$${this.price} each</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"right-block\">\r\n                        <button class=\"del-btn\" data-id=\"${this.id}\" data-price=\"${this.price}\">&times;</button>\r\n                        <p class=\"product-price\">Total: $${this.quantity * this.price}</p>\r\n                    </div>\r\n                </div>`;\r\n    }\r\n}\r\n\r\nclass Cart {\r\n    constructor(container) {\r\n        this.items = [];\r\n        this.container = container;\r\n        this.totalCost = 0;\r\n        this.totalQty = 0;\r\n        this.itemsCounter = document.querySelector('.items-count');\r\n    }\r\n\r\n    _find(product) {\r\n        return userCart.items.find(element => element.id === +product.dataset['id']);\r\n    }\r\n\r\n    add(product) {\r\n        !this._find(product) ?\r\n            userCart.items.push(new CartItem(product)) :\r\n            this._find(product).quantity++;\r\n        this.totalCost += +product.dataset['price'];\r\n        this.totalQty++;\r\n        this._render();\r\n    }\r\n\r\n    remove(product) {\r\n        if (this._find(product).quantity > 1) {\r\n            this._find(product).quantity--;\r\n        } else {\r\n            userCart.items.splice(userCart.items.indexOf(this._find(product)), 1);\r\n            document.querySelector(`.cart-item[data-id=\"${+product.dataset['id']}\"]`).remove()\r\n        }\r\n        this.totalCost -= +product.dataset['price'];\r\n        this.totalQty--;\r\n        this._render();\r\n    }\r\n\r\n    _render() {\r\n        let allProducts = '';\r\n        for (this.el of userCart.items) {\r\n            allProducts += userCart.items[userCart.items.indexOf(this.el)].toDOM();\r\n        }\r\n        if (this.totalQty <= 0) {\r\n            allProducts += `<p class=\"total-cost\">Cart is empty!</p>`;\r\n            this.itemsCounter.textContent = '';\r\n            this.itemsCounter.style.display = 'none';\r\n        } else {\r\n            allProducts += `<p class=\"total-cost\">Total qty: ${this.totalQty} Total cost: $${this.totalCost}</p>`;\r\n            this.itemsCounter.textContent = this.totalQty;\r\n            this.itemsCounter.style.display = 'block';\r\n        }\r\n        document.querySelector(this.container).innerHTML = allProducts;\r\n    }\r\n}\r\n\r\nlet userCart = new Cart('.cart-block');\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

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