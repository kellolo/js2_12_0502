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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/style/style.css */ \"./src/public/style/style.css\");\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_style_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_style_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/style/normalize.css */ \"./src/public/style/normalize.css\");\n/* harmony import */ var _public_style_normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_style_normalize_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/js/main.js */ \"./src/public/js/main.js\");\n/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_js_main_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//заглушки (имитация базы данных)\n\nconst cartImage = 'https://placehold.it/100x80';\nconst goodImg = 'https://via.placeholder.com/200x150';\nvar list;\n\n/* const goods = [\n    {id:1, title: 'Notebook', price: 1000},\n    {id:2, title: 'Display', price: 200},\n    {id:3, title: 'Keyboard', price: 20},\n    {id:4, title: 'Mouse', price: 10},\n    {id:5, title: 'Phones', price: 25},\n    {id:6, title: 'Router', price: 30},\n    {id:7, title: 'USB-camera', price: 18},\n    {id:8, title: 'Gamepad', price: 24},\n] */\n\n\n// товар\nclass GoodsItem {\n    constructor(id,title, price) {\n      this.id = id;\n      this.title = title;\n      this.price = price;\n      this.img = goodImg;\n\n    }\n    render() {\n        return `<div class=\"product-item\" data-id=\"${this.id}\">\n        <img src=\"${this.img}\" alt=\"Some img\">\n          <div class=\"desc\">\n                <h3>${this.title}</h3>\n                <p>${this.price} $</p>\n                <button class=\"buy-btn\" \n                data-id=\"${this.id}\"\n                data-name=\"${this.title}\"\n                data-image=\"${this.img}\"\n                data-price=\"${this.price}\">Купить</button>\n            </div>\n        </div>`\n    }\n  }\n\n  // список товаров\n  class GoodsList {\n    constructor() {\n      this.goods = [];\n    }\n/*     fetchGoods() {\n        this.goods = goods;\n    }   */\n\n    fetchData() {\n        let url = 'https://raw.githubusercontent.com/qimitau/js2_12_0502/master/students/MajaFaber/Project/webp/src/public/db/catalogData.json';\n        this.promiseReq (url)\n            .then (dataJSON => {\n                return JSON.parse(dataJSON);\n            })\n            .then (dataParsedFromJSON => {\n                this.goods = dataParsedFromJSON;\n                this.render();\n            })\n    }\n\n    makeGETRequest(url, resolve, reject) {\n        let xhr = new XMLHttpRequest();\n        xhr.onreadystatechange = function () {\n            if (xhr.readyState === 4) {\n                if (xhr.status === 200) {\n                    resolve (xhr.responseText);\n                } else {\n                    reject ('error');\n                }\n            }\n        }\n\n        xhr.open('GET', url, true);\n        xhr.send();\n    }\n\n    promiseReq (url) {\n        return new Promise ((res, rej) => {\n            this.makeGETRequest(url, res, rej);\n        });\n    }\n\n\n    render() {\n        let listHtml = '';\n        this.goods.forEach(good => {\n          const goodItem = new GoodsItem(good.id, good.title, good.price, good.img);\n          listHtml += goodItem.render();\n        });\n        document.querySelector('.products').innerHTML = listHtml;\n    }\n    //Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.\n    countSum() {\n        let sum = 0;\n        this.goods.forEach(good => {\n            sum += good.price;\n          });\n          console.log (sum)\n    }\n    init () {\n     console.log ('init start')\n    // this.fetchGoods();\n    // this.render();\n    // this.countSum();\n    this.fetchData();\n    }\n  }\n\n\nclass Cart {\n    constructor() {   \n        this.goods = [];\n        this.sum = 0;\n      }\n\n      fetchData() {\n        let url = 'https://raw.githubusercontent.com/qimitau/js2_12_0502/master/students/MajaFaber/Project/webp/src/public/db/getBasket.json';\n        this.basketList = [];\n        this.promiseReq (url)\n            .then (dataJSON => {\n                this.goods =  JSON.parse(dataJSON);\n                this.sum = this.goods.amount; // to do: пока нигде не отображается\n                this.render();    \n            })\n    }\n\n    makeGETRequest(url, resolve, reject) {\n        let xhr = new XMLHttpRequest();\n        xhr.onreadystatechange = function () {\n            if (xhr.readyState === 4) {\n                if (xhr.status === 200) {\n                    resolve (xhr.responseText);\n                } else {\n                    reject ('error');\n                }\n            }\n        }\n\n        xhr.open('GET', url, true);\n        xhr.send();\n    }\n\n    promiseReq (url) {\n        return new Promise ((res, rej) => {\n            this.makeGETRequest(url, res, rej);\n        });\n    }\n\n    addProduct(product) {\n        let productId = +product.dataset['id'];\n        let find = this.goods.contents.find (element => element.id === productId);\n        if (!find) {\n            this.goods.contents.push ({\n                id: productId,\n                title: product.dataset ['name'],\n                price: +product.dataset['price'],\n                img: cartImage,\n                quantity: 1\n            })\n            this.goods.countGoods +=1;\n        }  \n        else {\n            find.quantity++\n            this.goods.countGoods +=1;\n        }\n        this.render();\n      }\n\n    removeProduct(product) {  \n        let productId = +product.dataset['id'];\n        let find = this.goods.contents.find (element => element.id === productId);\n        if (find.quantity > 1) {\n            find.quantity--;\n            this.goods.countGoods -=1;\n        } else {\n            this.goods.contents.splice(this.goods.contents.indexOf(find), 1);\n            this.goods.countGoods +=1;\n            document.querySelector(`.cart-item[data-id=\"${productId}\"]`).remove();\n        }\n        this.render();\n      }\n\n    render() {\n        let oneCartItem = ' ';\n        this.goods.contents.forEach(el => {\n            oneCartItem += new CartItem( el.id, el.title, el.price, el.quantity).render();\n        });\n        document.querySelector(`.cart-block`).innerHTML = oneCartItem;\n        \n       }\n\n    makeButtons() {\n          document.querySelector('.btn-cart').addEventListener('click', () => {\n          document.querySelector('.cart-block').classList.toggle('invisible');\n          });\n            document.querySelector('.cart-block').addEventListener ('click', (evt) => {\n                if (evt.target.classList.contains ('del-btn')) {\n                    this.removeProduct (evt.target);\n                }\n            });\n            document.querySelector('.products').addEventListener ('click', (evt) => {\n                if (evt.target.classList.contains ('buy-btn')) {\n                    this.addProduct(evt.target);\n                }\n            }); \n      }\n\n    init() {    \n        this.makeButtons();    \n      //  this.render();\n        this.fetchData();\n    }\n}\n\nclass CartItem  { \n    constructor(id, title, price, quantity) {  \n        this.id = id;\n        this.title = title;\n        this.price = price;\n        this.img = cartImage;\n        this.quantity = quantity;\n        }\n    render() {  \n        return `<div class=\"cart-item\" data-id=\"${this.id}\">\n                                <div class=\"product-bio\">\n                                    <img src=\"${this.img}\" alt=\"Some image\">\n                                    <div class=\"product-desc\">\n                                        <p class=\"product-title\">${this.title}</p>\n                                        <p class=\"product-quantity\">Quantity: ${this.quantity}</p>\n                                        <p class=\"product-single-price\">$${this.price} each</p>\n                                    </div>\n                                </div>\n                                <div class=\"right-block\">\n                                    <p class=\"product-price\">${this.quantity * this.price}</p>\n                                    <button class=\"del-btn\" data-id=\"${this.id}\">&times;</button>\n                                </div>\n                            </div>`\n\n      }\n}\n\nconst customList = new GoodsList();\ncustomList.init();\nconst customCart = new Cart();\ncustomCart.init();\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

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