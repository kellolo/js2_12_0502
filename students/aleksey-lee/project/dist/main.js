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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/style/style.css */ \"./src/public/style/style.css\");\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_style_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_style_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/style/normalize.css */ \"./src/public/style/normalize.css\");\n/* harmony import */ var _public_style_normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_style_normalize_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/js/main.js */ \"./src/public/js/main.js\");\n/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_js_main_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n//Общий класс для единицы товара\nclass Item {\n    constructor(id, name, price, img, cartImage) {\n        this.id = id;\n        this.name = name;\n        this.price = price;\n        this.img = img;\n        this.cartImage = cartImage;\n    }\n}\n\n//Класс Вывода единицы товара в каталоге\nclass GoodsItem extends Item {\n\n    //Вывод единицы товара в каталоге\n    render() {\n      return `<div class=\"product-item\" data-id=\"${this.id}\">\n                <img src=\"${this.img}\" alt=\"Some img\">\n                <div class=\"desc\">\n                    <h3>${this.name}</h3>\n                    <p>${this.price} $</p>\n                    <button class=\"buy-btn\" \n                    data-id=\"${this.id}\"\n                    data-name=\"${this.name}\"\n                    data-image=\"${this.img}\"\n                    data-cartimage=\"${this.cartImage}\"\n                    data-price=\"${this.price}\">Купить</button>\n                </div>\n            </div>`;\n    }\n}\n\n//Класс каталога\nclass GoodsList {\n    constructor(container) {\n        this.goods = [];\n        this.container = document.querySelector(container);\n    }\n    fetchGoods() {\n        this.goods = [\n        { id: 1, name: 'Notebook', price: 1000, img: 'https://placehold.it/200x150', cartImage: 'https://placehold.it/100x80' },\n        { id: 2, name: 'Display', price: 200, img: 'https://placehold.it/200x150', cartImage: 'https://placehold.it/100x80' },\n        { id: 3, name: 'Keyboard', price: 20, img: 'https://placehold.it/200x150', cartImage: 'https://placehold.it/100x80' },\n        { id: 4, name: 'Mouse', price: 10, img: 'https://placehold.it/200x150', cartImage: 'https://placehold.it/100x80' },\n        { id: 5, name: 'Phones', price: 25, img: 'https://placehold.it/200x150', cartImage: 'https://placehold.it/100x80' },\n        { id: 6, name: 'Router', price: 30, img: 'https://placehold.it/200x150', cartImage: 'https://placehold.it/100x80' },\n        { id: 7, name: 'USB-camera', price: 18, img: 'https://placehold.it/200x150', cartImage: 'https://placehold.it/100x80' },\n        { id: 8, name: 'Gamepad', price: 24, img: 'https://placehold.it/200x150', cartImage: 'https://placehold.it/100x80' },\n        ];\n    }\n\n    //Вывод каталога\n    render() {\n        let listHtml = '';\n        this.goods.forEach(good => {\n            const goodItem = new GoodsItem(good.id, good.name, good.price, good.img, good.cartImage);\n            listHtml += goodItem.render();\n        });\n        this.container.innerHTML = listHtml;\n    }\n\n    //метод, определяющий суммарную стоимость всех товаров (из ДЗ)\n    getTotalPrice(){\n        return this.goods.reduce((sum, good) => sum + good.price, 0)\n    }\n}\n\n//Класс вывода единицы товара в корзине\nclass CartItem extends Item {\n    constructor(id, name, price, img, cartImage, quantity) {\n      super(id, name, price, img, cartImage);\n      this.quantity = quantity;\n    }\n\n    //Вывод товара в корзине\n    render() {\n      return `<div class=\"cart-item\" data-id=\"${this.id}\">\n                    <div class=\"product-bio\">\n                        <img src=\"${this.img}\" alt=\"Some image\">\n                        <div class=\"product-desc\">\n                            <p class=\"product-title\">${this.name}</p>\n                            <p class=\"product-quantity\">Quantity: ${this.quantity}</p>\n                            <p class=\"product-single-price\">$${this.price} each</p>\n                        </div>\n                    </div>\n                    <div class=\"right-block\">\n                        <p class=\"product-price\">${this.quantity * this.price}</p>\n                        <button class=\"del-btn\" data-id=\"${this.id}\">&times;</button>\n                    </div>\n                </div>`;\n    }\n}\n\n//Класс корзины\nclass Cart {\n    constructor(container){\n        this.products = [];\n        this.container = document.querySelector(container);\n\n        this._bindHandlers();\n    }\n\n    //Вывод корзины\n    render() {\n        let listHtml = '';\n        this.products.forEach(product => {\n            const productItem = new CartItem(product.id, product.name, product.price, product.img, product.cartImage, product.quantity);\n            listHtml += productItem.render();\n        });\n        listHtml += `<div>Total price: ${this.getTotalPrice()} $</div>`;\n        this.container.innerHTML = listHtml;\n    }\n\n    // Добавление продуктов в корзину\n    addProduct (product) {\n        let productId = +product.dataset['id'];\n        let find = this.products.find(element => element.id === productId);\n\n        \n        if (!find) {\n            this.products.push ({\n                name: product.dataset['name'],\n                id: productId,\n                img: product.dataset['cartimage'],\n                price: +product.dataset['price'],\n                quantity: 1\n            })\n        }  else {\n            find.quantity++\n        }\n\n        this.render()\n    }\n\n    //удаление товаров\n    removeProduct (product) {\n        let productId = +product.dataset['id'];\n        let find = this.products.find (element => element.id === productId);\n        if (find.quantity > 1) {\n            find.quantity--;\n        } else {\n            this.products.splice(this.products.indexOf(find), 1);\n        }\n        this.render ();\n    }\n\n    //Общая цена товаров в корзине\n    getTotalPrice(){\n        return this.products.reduce((sum, product) => sum + (product.price * product.quantity), 0)\n    }\n\n    _bindHandlers(){\n\n        //кнопка скрытия и показа корзины\n        document.querySelector('.btn-cart').addEventListener('click', () => {\n            document.querySelector('.cart-block').classList.toggle('invisible');\n        });\n\n        //кнопки удаления товара (добавляется один раз)\n        document.querySelector('.cart-block').addEventListener ('click', (evt) => {\n            if (evt.target.classList.contains ('del-btn')) {\n                userCart.removeProduct (evt.target);\n            }\n        });\n\n        //кнопки покупки товара (добавляется один раз)\n        document.querySelector('.products').addEventListener ('click', (evt) => {\n            if (evt.target.classList.contains ('buy-btn')) {\n                userCart.addProduct (evt.target);\n            }\n        });\n    }\n}\n\n\n\n\nconst list = new GoodsList('#goods-list');\nlist.fetchGoods();\nlist.render();\n\nconsole.log(list.getTotalPrice());\n\nconst userCart = new Cart('#cart-block');\n\n\n\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

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