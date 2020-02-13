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
eval("\r\nclass GoodItem {\r\n    constructor(name, price, id, image) {\r\n        this.name = name;\r\n        this.price = price;\r\n        this.id = id;\r\n        this.image = image;\r\n    }\r\n\r\n    render() {\r\n        return `<div class=\"product-item\" data-id=\"${this.id}\">\r\n        <img src=\"${this.image}\" alt=\"Some img\">\r\n       <div class=\"desc\">\r\n            <h3>${this.name}</h3>\r\n            <p>${this.price} $</p>\r\n            <button class=\"buy-btn\" \r\n            data-id=\"${this.id}\"\r\n            data-name=\"${this.name}\"\r\n            data-image=\"${this.image}\"\r\n            data-price=\"${this.price}\">Купить</button>\r\n        </div>\r\n    </div>`;\r\n    }\r\n}\r\n\r\nclass Catalog {\r\n    constructor(container) {\r\n        this.container = container;\r\n        this.goodsList = [];\r\n    }\r\n\r\n    init() {\r\n        this._fetchData();\r\n       \r\n    }\r\n    _fetchData() {\r\n        let url = 'https://raw.githubusercontent.com/Diger134/js2_12_0502/master/students/Denis%20Gadzhibalaev/Project/webpack/src/db/catalogData.json';\r\n        this.goodsList = [];\r\n        this._promiseReq (url)\r\n            .then (dataJSON => {\r\n                return JSON.parse(dataJSON);\r\n            })\r\n            .then (dataParsedFromJSON => {\r\n                this.goodsList = dataParsedFromJSON;\r\n                this._render();\r\n            })\r\n            .catch (errorData => {\r\n                console.log (errorData + ' ERROR');\r\n            })\r\n            .finally (() => {\r\n                console.log('Catalog:');\r\n                console.log (this.goodsList);\r\n            })\r\n    }\r\n\r\n    _makeGETRequest(url, resolve, reject) {\r\n        let xhr = new XMLHttpRequest();\r\n        xhr.onreadystatechange = function () {\r\n            if (xhr.readyState === 4) {\r\n                if (xhr.status === 200) {\r\n                    resolve (xhr.responseText);\r\n                } else {\r\n                    reject ('error');\r\n                }\r\n            }\r\n        }\r\n\r\n        xhr.open('GET', url, true);\r\n        xhr.send();\r\n    }\r\n\r\n    _promiseReq (url) {\r\n        return new Promise ((res, rej) => {\r\n            this._makeGETRequest(url, res, rej);\r\n        });\r\n    }\r\n\r\n    _render() {\r\n        let goodItem = '';\r\n        this.goodsList.forEach(el => {\r\n            goodItem += new GoodItem(el.product_name, el.price, el.id_product, el.image).render();\r\n        });\r\n        document.querySelector(this.container).innerHTML = goodItem;\r\n    }\r\n}\r\n\r\nclass BasketItem {\r\n    constructor(name, price, id, image, quantity) {\r\n        this.name = name;\r\n        this.price = price;\r\n        this.id = id;\r\n        this.image = image;\r\n        this.quantity = quantity;\r\n    }\r\n\r\n    render() {\r\n        return `<div class=\"cart-item\" data-id=\"${this.id}\">\r\n        <div class=\"product-bio\">\r\n             <img class = \"product-basket-image\"src=\"${this.image}\" alt=\"Some image\">\r\n             <div class=\"product-desc\">\r\n                 <p class=\"product-title\">${this.name}</p>\r\n                 <p class=\"product-quantity\">Quantity: ${this.quantity}</p>\r\n                 <p class=\"product-single-price\">$${this.price} each</p>\r\n             </div>\r\n         </div>\r\n         <div class=\"right-block\">\r\n             <p class=\"product-price\">${this.quantity * this.price}</p>\r\n             <button class=\"del-btn\" data-id=\"${this.id}\">&times;</button>\r\n         </div>\r\n     </div>`;\r\n    }\r\n}\r\nclass Basket {\r\n    constructor(container) {\r\n        this.basketList = [];\r\n        this.container = container;\r\n        this.totalSum = 0;\r\n        this._controlModalWindow();\r\n    }\r\n    init() {\r\n        this._fetchData();\r\n        this._addProductToBasket();\r\n        this._removeProductFromBasket();\r\n    }\r\n\r\n    _fetchData() {\r\n        let url = 'https://raw.githubusercontent.com/Diger134/js2_12_0502/master/students/Denis%20Gadzhibalaev/Project/webpack/src/db/getBasket.json';\r\n        this.basketList = [];\r\n        this._promiseReq (url)\r\n            .then (dataJSON => {\r\n                return JSON.parse(dataJSON);\r\n            })\r\n            .then (dataParsedFromJSON => {\r\n                this.basketList = dataParsedFromJSON;\r\n                this._render();\r\n            })\r\n            .catch (errorData => {\r\n                console.log (errorData + ' ERROR');\r\n            })\r\n            .finally (() => {\r\n                console.log('Basket:');\r\n                console.log (this.basketList.contents);\r\n            })\r\n    }\r\n\r\n    _makeGETRequest(url, resolve, reject) {\r\n        let xhr = new XMLHttpRequest();\r\n        xhr.onreadystatechange = function () {\r\n            if (xhr.readyState === 4) {\r\n                if (xhr.status === 200) {\r\n                    resolve (xhr.responseText);\r\n                } else {\r\n                    reject ('error');\r\n                }\r\n            }\r\n        }\r\n\r\n        xhr.open('GET', url, true);\r\n        xhr.send();\r\n    }\r\n\r\n    _promiseReq (url) {\r\n        return new Promise ((res, rej) => {\r\n            this._makeGETRequest(url, res, rej);\r\n        });\r\n    }\r\n\r\n    _render() {\r\n        let basketItem = '';\r\n        this.basketList.contents.forEach(el => {\r\n            basketItem += new BasketItem(el.product_name, el.price, el.id_product, el.image, el.quantity).render();\r\n        });\r\n        document.querySelector(this.container).innerHTML = basketItem;\r\n    }\r\n\r\n    _controlModalWindow() {\r\n        document.querySelector('.btn-cart').addEventListener('click', () => {\r\n            document.querySelector('.cart-block-wrapper').classList.toggle('invisible');\r\n        });\r\n        \r\n    }\r\n\r\n    _addProductToBasket() {\r\n        document.querySelector('.products').addEventListener('click', (evt) => {\r\n            if (evt.target.classList.contains('buy-btn')) {\r\n                this._addProduct(evt.target);\r\n                this._render();\r\n            }\r\n        });\r\n    }\r\n\r\n    _removeProductFromBasket() {\r\n        document.querySelector('.cart-block').addEventListener('click', (evt) => {\r\n            if (evt.target.classList.contains('del-btn')) {\r\n                this._removeProduct(evt.target);\r\n                this._render();\r\n            }\r\n        })\r\n    }\r\n\r\n    _addProduct(product) {\r\n        let productId = +product.dataset['id'];\r\n        let find = this.basketList.contents.find(element => element.id_product === productId);\r\n        if (!find) {\r\n            this.basketList.contents.push({\r\n                product_name: product.dataset['name'],\r\n                id_product: productId,\r\n                image: product.dataset['image'],\r\n                price: +product.dataset['price'],\r\n                quantity: 1\r\n            });\r\n        } else {\r\n            find.quantity++\r\n\r\n        }\r\n        this._increaseTotalSum(+product.dataset['price']);\r\n    }\r\n    _removeProduct(product) {\r\n        let productId = +product.dataset['id'];\r\n        let find = this.basketList.contents.find(element => element.id_product === productId);\r\n        if (find.quantity > 1) {\r\n            find.quantity--;\r\n        } else {\r\n            this.basketList.contents.splice(this.basketList.contents.indexOf(find), 1);\r\n            document.querySelector(`.cart-item[data-id=\"${productId}\"]`).remove()\r\n        }\r\n        this._reduceTotalSum(+find.price);\r\n    }\r\n\r\n    _increaseTotalSum(sum) {\r\n        this.totalSum += sum;\r\n        return document.querySelector('.total-sum').innerText = `Total price: ${this.totalSum} $`;\r\n    }\r\n\r\n    _reduceTotalSum(sum) {\r\n        this.totalSum -= sum ;\r\n        if (this.totalSum == 0) {\r\n            return document.querySelector('.total-sum').innerText = `Total price: ${this.totalSum}`;\r\n        } else {\r\n        return document.querySelector('.total-sum').innerText = `Total price: ${this.totalSum} $`;\r\n        }\r\n    \r\n    }\r\n}\r\nlet catalog = new Catalog('.products');\r\ncatalog.init();\r\nlet basket = new Basket('.cart-block');\r\nbasket.init();\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

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