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

eval("//заглушки (имитация базы данных)\r\nconst image = 'https://placehold.it/200x150';\r\nconst cartImage = 'https://placehold.it/100x80';\r\nconst items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];\r\nconst prices = [1000, 200, 20, 10, 25, 30, 18, 24];\r\nconst ids = [1, 2, 3, 4, 5, 6, 7, 8];\r\n\r\n\r\n//глобальные сущности корзины и каталога (ИМИТАЦИЯ! НЕЛЬЗЯ ТАК ДЕЛАТЬ!)\r\nvar userCart = [];\r\nvar list = fetchData ()\r\n\r\n//кнопка скрытия и показа корзины\r\ndocument.querySelector('.btn-cart').addEventListener('click', () => {\r\n    document.querySelector('.cart-block').classList.toggle('invisible');\r\n});\r\n//кнопки удаления товара (добавляется один раз)\r\ndocument.querySelector('.cart-block').addEventListener ('click', (evt) => {\r\n    if (evt.target.classList.contains ('del-btn')) {\r\n        removeProduct (evt.target);\r\n    }\r\n})\r\n//кнопки покупки товара (добавляется один раз)\r\ndocument.querySelector('.products').addEventListener ('click', (evt) => {\r\n    if (evt.target.classList.contains ('buy-btn')) {\r\n        addProduct (evt.target);\r\n    }\r\n})\r\n\r\n//создание массива объектов - имитация загрузки данных с сервера\r\nfunction fetchData () {\r\n    let arr = [];\r\n    for (let i = 0; i < items.length; i++) {\r\n        arr.push (createProduct (i));\r\n    }\r\n    return arr\r\n};\r\n\r\n//создание товара\r\nfunction createProduct (i) {\r\n    return {\r\n        id: ids[i],\r\n        name: items[i],\r\n        price: prices[i],\r\n        img: image,\r\n        quantity: 0,\r\n        createTemplate: function () {\r\n            return `<div class=\"product-item\" data-id=\"${this.id}\">\r\n                        <img src=\"${this.img}\" alt=\"Some img\">\r\n                        <div class=\"desc\">\r\n                            <h3>${this.name}</h3>\r\n                            <p>${this.price} $</p>\r\n                            <button class=\"buy-btn\" \r\n                            data-id=\"${this.id}\"\r\n                            data-name=\"${this.name}\"\r\n                            data-image=\"${this.img}\"\r\n                            data-price=\"${this.price}\">Купить</button>\r\n                        </div>\r\n                    </div>`\r\n        },\r\n\r\n        add: function() {\r\n            this.quantity++\r\n        }\r\n    }\r\n};\r\n\r\n//рендер списка товаров (каталога)\r\nfunction renderProducts () {\r\n    let arr = [];\r\n    for (item of list) {\r\n        arr.push(item.createTemplate())\r\n    }\r\n    document.querySelector('.products').innerHTML = arr.join(\"\");\r\n}\r\n\r\n\r\n\r\n\r\nfunction init () {\r\n    console.log ('init start')\r\n    list = fetchData ();\r\n    renderProducts ();\r\n}\r\n\r\ninit ()\r\n\r\n//CART\r\n\r\n//Добавление продуктов в корзину\r\nfunction addProduct (product) {\r\n    let productId = +product.dataset['id'];\r\n    let find = userCart.find (element => element.id === productId);\r\n    if (!find) {\r\n        userCart.push ({\r\n            name: product.dataset ['name'],\r\n            id: productId,\r\n            img: cartImage,\r\n            price: +product.dataset['price'],\r\n            quantity: 1\r\n        })\r\n    }  else {\r\n        find.quantity++\r\n    }\r\n    renderCart ()\r\n}\r\n\r\n//удаление товаров\r\nfunction removeProduct (product) {\r\n    let productId = +product.dataset['id'];\r\n    let find = userCart.find (element => element.id === productId);\r\n    if (find.quantity > 1) {\r\n        find.quantity--;\r\n    } else {\r\n        userCart.splice(userCart.indexOf(find), 1);\r\n        document.querySelector(`.cart-item[data-id=\"${productId}\"]`).remove()\r\n    }\r\n    renderCart ();\r\n}\r\n\r\n//перерендер корзины\r\nfunction renderCart () {\r\n    let allProducts = '';\r\n    for (el of userCart) {\r\n        allProducts += `<div class=\"cart-item\" data-id=\"${el.id}\">\r\n                            <div class=\"product-bio\">\r\n                                <img src=\"${el.img}\" alt=\"Some image\">\r\n                                <div class=\"product-desc\">\r\n                                    <p class=\"product-title\">${el.name}</p>\r\n                                    <p class=\"product-quantity\">Quantity: ${el.quantity}</p>\r\n                                    <p class=\"product-single-price\">$${el.price} each</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"right-block\">\r\n                                <p class=\"product-price\">${el.quantity * el.price}</p>\r\n                                <button class=\"del-btn\" data-id=\"${el.id}\">&times;</button>\r\n                            </div>\r\n                        </div>`\r\n    }\r\n\r\n    document.querySelector(`.cart-block`).innerHTML = allProducts;\r\n}\r\n\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

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