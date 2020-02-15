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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_style_normalize_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/style/normalize.css */ \"./src/public/style/normalize.css\");\n/* harmony import */ var _public_style_normalize_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_style_normalize_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/style/style.css */ \"./src/public/style/style.css\");\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_style_style_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/js/main.js */ \"./src/public/js/main.js\");\n/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_js_main_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/*const products = [\r\n    {id: 1, name: 'AteloCollagen - Коллагеновый очищающий гель с ателоколлагеном и морскими минералами', price: 990, img: 'https://via.placeholder.com/200x150'},\r\n    {id: 2, name: 'AteloCollagen - Коллагеновый тоник с ателоколлагеном и морскими минералами', price: 935, img: 'https://via.placeholder.com/200x150'},\r\n    {id: 3, name: 'AteloCollagen – Разглаживающий морщины коллагеновый крем с ателоколлагеном и морскими минералами', price: 2030, img: 'https://via.placeholder.com/200x150'},\r\n    {id: 4, name: 'Hyaluron Plus - Активно увлажняющий крем для области вокруг глаз', price: 996, img: 'https://via.placeholder.com/200x150'},\r\n    {id: 5, name: 'Hyaluron Plus - Очищающее молочко с гиалуроновой кислотой', price: 880, img: 'https://via.placeholder.com/200x150'},\r\n    {id: 6, name: 'MultiVitamin — Питательная витаминная маска', price: 1265, img: 'https://via.placeholder.com/200x150'},\r\n    {id: 7, name: 'Антибактериальный тоник Acne - Antibacterial tonic', price: 880, img: 'https://via.placeholder.com/200x150'},\r\n    {id: 8, name: 'Гиалуроновая маска для активного увлажнения кожи / Hyaluron Plus - Hyaluronic mask active moisturizing', price: 1200, img: 'https://via.placeholder.com/200x150'}\r\n]*/\r\nconst cartImage = 'https://placehold.it/100x80';\r\nlet URL_CATALOG = 'https://raw.githubusercontent.com/okkey45/js2_12_0502/master/students/VitaliyChalin/Project/with_webpack/src/dataBase/catalogData.json'\r\nlet URL_CART = 'https://raw.githubusercontent.com/okkey45/js2_12_0502/master/students/VitaliyChalin/Project/with_webpack/src/dataBase/cartData.json'\r\n\r\n// Запрос данных\r\nfunction makeGETRequest(url, resolve, reject) {\r\n    let xhr = new XMLHttpRequest()\r\n\r\n    xhr.onreadystatechange = function () {\r\n        if (xhr.readyState === 4) {\r\n            if(xhr.status === 200) {\r\n                resolve (xhr.responseText)\r\n            } else {\r\n                reject ('error')\r\n            }\r\n        }\r\n    }\r\n\r\n    xhr.open('GET', url, true)\r\n    xhr.send()\r\n}\r\n\r\nfunction promiseReq (url) {\r\n    return new Promise ((res, rej) => {\r\n        makeGETRequest(url, res, rej)\r\n    })\r\n}\r\n\r\nclass Item {\r\n    constructor(element) {\r\n        this.id = element.id\r\n        this.name = element.name\r\n        this.price = element.price\r\n        this.img = element.img\r\n    }\r\n    render() {\r\n        return `<div class=\"product-item\" data-id=\"${this.id}\">\r\n                    <img src=\"${this.img}\" alt=\"Some img\">\r\n                    <div class=\"desc\">\r\n                        <h3>${this.name}</h3>\r\n                        <p>${this.price} $</p>\r\n                        <button class=\"buy-btn\" \r\n                            data-id=\"${this.id}\"\r\n                            data-name=\"${this.name}\"\r\n                            data-image=\"${this.img}\"\r\n                            data-price=\"${this.price}\"\r\n                            data-value=\"addToCart\">Купить</button>\r\n                    </div>\r\n                </div>`\r\n    }\r\n}\r\n\r\nclass List {\r\n    constructor(container) {\r\n        this.container = document.querySelector(container)\r\n        this.products = []\r\n        this._init()\r\n    }\r\n    _init() {\r\n        promiseReq (URL_CATALOG)\r\n            .then (dataJSON => {\r\n                this.products = JSON.parse(dataJSON)\r\n            })\r\n            .then (() => {\r\n                this._render()\r\n            })\r\n            .catch (dataError => {\r\n                console.log(dataError)\r\n            })\r\n    }\r\n    _render() {\r\n        let listHtml = ''\r\n        this.products.forEach(element => {\r\n            listHtml += new Item (element).render()\r\n        })\r\n        this.container.innerHTML = listHtml\r\n        this.initListeners()\r\n        this.totalCoast()\r\n    }\r\n    initListeners(){//Универсальный листенер, будет работать как в каталоге так и вкорзине\r\n        const buttons = [...this.container.querySelectorAll('button')];\r\n        buttons.forEach((button)=>{\r\n            button.addEventListener('click', (evt)=>{\r\n                if(evt.target.dataset.value==='addToCart'){\r\n                    this.addToCart(this.findElement(parseInt(evt.target.dataset.id, 10)))\r\n                }else if(evt.target.dataset.value==='removeToCart'){\r\n                    this.deleteProduct(this.findElement(parseInt(evt.target.dataset.id, 10)))\r\n                }\r\n            })\r\n        })\r\n    }\r\n    findElement(prodId){\r\n        console.log(prodId)\r\n        console.log(this.products)\r\n        console.log(this.products.contents)\r\n        if(this.products.find(el => el.id)) {\r\n            return this.products.find(el => el.id === prodId)\r\n        } else {\r\n            return this.products.contents.find(el => el.id === prodId)\r\n        }\r\n    }\r\n    totalCoast() {\r\n        let sum = 0\r\n        this.products.forEach(element => sum += element.price)\r\n        return sum\r\n    }\r\n}\r\n\r\nclass Catalog extends List {\r\n    addToCart(elem) {\r\n        cart.checkQuant(elem)\r\n    }\r\n}\r\n\r\nconst catalog = new Catalog('.products')\r\n\r\nclass CartItem  {\r\n    constructor(element) {\r\n        this.id = element.id\r\n        this.name = element.name\r\n        this.price = element.price\r\n        this.img = cartImage\r\n        this.quant = element.quant\r\n    }\r\n    render() {\r\n        return `<div class=\"cart-item\" data-id=\"${this.id}\">\r\n                    <div class=\"product-bio\">\r\n                        <img src=\"${this.img}\" alt=\"Some image\">\r\n                        <div class=\"product-desc\">\r\n                            <p class=\"product-title\">${this.name}</p>\r\n                            <p class=\"product-quantity\">Quantity: ${this.quant}</p>\r\n                            <p class=\"product-single-price\">$${this.price} each</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"right-block\">\r\n                        <p class=\"product-price\">${this.quant * this.price}</p>\r\n                        <button class=\"del-btn\"\r\n                            data-id=\"${this.id}\"\r\n                            data-value=\"removeToCart\">&times;</button>\r\n                    </div>\r\n                </div>`\r\n    }\r\n}\r\n\r\nclass Cart extends List {\r\n    constructor(...attrs) {\r\n        super(attrs)\r\n    }\r\n    _init() {\r\n        promiseReq (URL_CART)\r\n            .then (dataJSON => {\r\n                this.products = JSON.parse(dataJSON)\r\n            })\r\n            .then (() => {\r\n                this.render()\r\n            })\r\n            .catch (dataError => {\r\n                console.log(dataError)\r\n            })\r\n    }\r\n    checkQuant(elem) {\r\n        console.log(elem.id)\r\n        if(this.findElement(elem.id)) {\r\n            this.products[this.findIndexProduct(elem)].quant++\r\n            this.render()\r\n        } else {\r\n            elem.quant = 1\r\n            this.products.push(elem)\r\n            this.render()\r\n        }\r\n    }\r\n    findIndexProduct(element){\r\n        return this.products.findIndex(el => el === element)\r\n    }\r\n    deleteProduct(removeProdId) {\r\n        this.products.splice(this.findIndexProduct(removeProdId), 1)\r\n        this.render()\r\n    }\r\n    render() {\r\n        let listHtml = ''\r\n        this.products.contents.forEach(element => {\r\n            listHtml += new CartItem(element).render()\r\n        })\r\n        this.container.innerHTML = listHtml\r\n        this.initListeners()\r\n    }\r\n}\r\n\r\nconst cart = new Cart('.cart-block')\r\n\r\ndocument.querySelector('.btn-cart').addEventListener('click', () => {\r\n    document.querySelector('.cart-block').classList.toggle('invisible');\r\n});\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

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