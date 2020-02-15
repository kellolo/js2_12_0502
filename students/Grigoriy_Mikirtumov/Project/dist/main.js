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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/style/style.css */ \"./src/public/style/style.css\");\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_style_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_style_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/style/normalize.css */ \"./src/public/style/normalize.css\");\n/* harmony import */ var _public_style_normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_style_normalize_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/js/main.js */ \"./src/public/js/main.js\");\n/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_js_main_js__WEBPACK_IMPORTED_MODULE_2__);\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Запрос к бд\r\n\r\nconst URL_CATALOG = 'https://raw.githubusercontent.com/GrigoRASH6000v/js2_12_0502/master/students/Grigoriy_Mikirtumov/Project/src/public/Data%20base/catalogData.json'\r\nconst URL_CART = 'https://raw.githubusercontent.com/GrigoRASH6000v/js2_12_0502/master/students/Grigoriy_Mikirtumov/Project/src/public/Data%20base/getBasket.json'\r\n\r\n/*\r\nfunction makeGetRequest(url){\r\n    return new Promise((resolve, reject)=>{\r\n       let xhr;\r\n       if(window.XMLHttpRequest){\r\n           xhr = new window.XMLHttpRequest();\r\n       }else{\r\n           xhr = new window.ActiveXObject(\"Microsoft.XMLHTTP\");\r\n       };\r\n       xhr.onreadystatechange = function(){ //Ловим момент ответа от сервера\r\n           if(xhr.readyState===4){ // В redystate хранится статус запроса, цифра 4, означает что запрос выполнен\r\n               if(xhr.status!==200){\r\n                   reject(xhr.responseText)\r\n               }\r\n               let body = JSON.parse(xhr.responseText)\r\n               resolve(body) //responseText возвращает строковое значение, содержащее ответ на запрос в виде текста, или null, если запрос был неудачным или еще не был отправлен.\r\n           } \r\n       };\r\n       xhr.open('GET', url);\r\n       xhr.send();\r\n    })\r\n    \r\n}\r\n*/\r\n//Общий класс для единицы товара\r\nclass GoodItem {\r\n    constructor(good){\r\n        this.id = good.id_product;\r\n        this.title = good.product_name;\r\n        this.price = good.price;\r\n        this.img = good.img;\r\n    }\r\n    render(){\r\n        return `<div class=\"product-item\">\r\n                    <img src=\"${this.img}\" alt=\"Some img\">\r\n                    <div class=\"desc\">\r\n                        <h3>${this.title}</h3>\r\n                        <p>${this.price} $</p>\r\n                        <button class=\"buy-btn\" data-value=\"addToCart\" data-id=\"${this.id}\">Купить</button>\r\n                    </div>\r\n                </div>`\r\n    }\r\n}\r\n\r\n\r\n//Общий класс для списка товаров\r\nclass GoodList  {\r\n    constructor(container){\r\n        this.container = document.querySelector(container); \r\n        this.goods=[];\r\n    }\r\n    initListeners(){//Универсальный листенер, будет работать как в каталоге так и вкорзине\r\n       const buttons = [...this.container.querySelectorAll('button')];\r\n        buttons.forEach((button)=>{\r\n            button.addEventListener('click', (evt)=>{\r\n               if(evt.target.dataset.value==='addToCart'){\r\n                   this.addToCart(this.findElement(parseInt(evt.target.dataset.id, 10)))\r\n               }else if(evt.target.dataset.value==='removeToCart'){\r\n                   this.deleteGood(this.findElement(parseInt(evt.target.dataset.id, 10)))\r\n               }\r\n            })\r\n        })\r\n    }\r\n    findElement(goodId){\r\n       return this.goods.find(el=>el.id_product===goodId)  \r\n    }\r\n    totalCost(){\r\n        let sum = 0;\r\n        this.goods.forEach(good=>sum += good.price)\r\n        this.amount = sum;\r\n    }\r\n    \r\n    \r\n    render(){\r\n        let listHtml='';\r\n        this.goods.forEach((good)=>{\r\n            listHtml+=new GoodItem(good).render()\r\n        });\r\n        this.container.innerHTML = listHtml;\r\n        this.initListeners();\r\n        this.totalCost();\r\n    }\r\n    \r\n}\r\n\r\n\r\n//Наследуемся от класса GoodList\r\nclass GoodCatalog extends GoodList{\r\n    addToCart(goodElem){//Здесь данные должны отправлятся на сервак, но т.к мы этого делать ещё не умеем пусть будет так\r\n        cart.checkQuantity(goodElem);\r\n    }\r\n    async fetchData(url){\r\n        let response = await fetch(url);\r\n        let datajson = await response.json();\r\n        this.goods = datajson;\r\n        this.render();\r\n    }\r\n};\r\n\r\n\r\n// Создаём каталог товара на базе класса GoodCatalog\r\nconst catalog = new GoodCatalog('.products');\r\ncatalog.fetchData(URL_CATALOG);\r\n\r\n\r\n\r\nclass GoodItemCart {\r\n    constructor(good){\r\n        this.id = good.id_product;\r\n        this.title = good.product_name;\r\n        this.price = good.price;\r\n        this.img = good.img;\r\n        this.quantity =good.quantity;\r\n    }\r\n    render(){\r\n        return  `<div class=\"cart-item\" data-id=\"${this.id}\">\r\n                    <div class=\"product-bio\">\r\n                        <img src=\"${this.img}\" alt=\"Some image\">\r\n                        <div class=\"product-desc\">\r\n                            <p class=\"product-title\">${this.title}</p>\r\n                            <p class=\"product-quantity\">Quantity: ${this.quantity}</p>\r\n                            <p class=\"product-single-price\">$${this.price} each</p>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"right-block\">\r\n                        <p class=\"product-price\">${this.quantity * this.price}</p>\r\n                        <button class=\"del-btn\" data-id=\"${this.id}\" data-value=\"removeToCart\">&times;</button>\r\n                    </div>\r\n                </div>`\r\n    };\r\n}\r\n\r\n\r\n//Наследуемся от класса GoodList\r\nclass GoodCart extends GoodList {\r\n    constructor(...attrs){ //Собираем все элементы родительского конструктора\r\n        super(attrs); //Передаём все элементы в новый конструктор\r\n        this.amount = 0;\r\n        this.countGoods = 0;\r\n    }\r\n    checkQuantity(goodItem){ // Пока нет backand пусть будет так\r\n        if(this.findElement(goodItem.id_product)){\r\n            this.goods[this.findIndexGood(goodItem)].quantity++;\r\n            this.render();\r\n        }else{\r\n            goodItem.quantity=1;\r\n            this.goods.push(goodItem);\r\n            this.render();\r\n            this.countGoods++\r\n        }\r\n    }\r\n    async fetchData(url){\r\n        let response = await fetch(url);\r\n        let dataJson = await response.json();\r\n        this.goods = dataJson.contents;\r\n        this.amount = dataJson.amount;\r\n        this.countGoods = dataJson.countGoods\r\n        this.render();\r\n    }\r\n    findIndexGood(good){\r\n        return this.goods.findIndex(el=>el===good)\r\n    }\r\n    incQuantity(){};\r\n    decQuantity(){};\r\n    deleteGood(goodRemoveId){\r\n        this.goods.splice(this.findIndexGood(goodRemoveId), 1);\r\n        this.render();\r\n        this.countGoods--\r\n    }\r\n    render(){\r\n        let listHtml='';\r\n        this.goods.forEach((good)=>{\r\n            listHtml+=new GoodItemCart(good).render();\r\n        })\r\n        this.container.innerHTML = listHtml;\r\n        this.initListeners();\r\n        this.totalCost();\r\n    }\r\n}\r\n//Создаём корзину на базе класса GoodCart\r\nconst cart = new GoodCart('.cart-block');\r\ncart.fetchData(URL_CART);\r\n\r\ndocument.querySelector('.btn-cart').addEventListener('click', () => {\r\n    document.querySelector('.cart-block').classList.toggle('invisible');\r\n});\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

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