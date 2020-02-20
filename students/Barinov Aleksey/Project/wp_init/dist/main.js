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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./public/style/style.css */ \"./src/public/style/style.css\");\n/* harmony import */ var _public_style_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_public_style_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_style_normalize_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./public/style/normalize.css */ \"./src/public/style/normalize.css\");\n/* harmony import */ var _public_style_normalize_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_style_normalize_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public/js/main.js */ \"./src/public/js/main.js\");\n/* harmony import */ var _public_js_main_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_js_main_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_js_test_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public/js/test.js */ \"./src/public/js/test.js\");\n/* harmony import */ var _public_js_test_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_js_test_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//заглушки (имитация базы данных)\nconst image = 'https://placehold.it/200x150';\nconst cartImage = 'https://placehold.it/100x80';\nconst items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];\nconst prices = [1000, 200, 20, 10, 25, 30, 18, 24];\nconst ids = [1, 2, 3, 4, 5, 6, 7, 8];\n\n\n//глобальные сущности корзины и каталога (ИМИТАЦИЯ! НЕЛЬЗЯ ТАК ДЕЛАТЬ!)\nvar userCart = [];\nvar list = fetchData ();\n\n//кнопка скрытия и показа корзины\ndocument.querySelector('.btn-cart').addEventListener('click', () => {\n    document.querySelector('.cart-block').classList.toggle('invisible');\n});\n//кнопки удаления товара (добавляется один раз)\ndocument.querySelector('.cart-block').addEventListener ('click', (evt) => {\n    if (evt.target.classList.contains ('del-btn')) {\n        removeProduct (evt.target);\n    }\n})\n//кнопки покупки товара (добавляется один раз)\ndocument.querySelector('.products').addEventListener ('click', (evt) => {\n    if (evt.target.classList.contains ('buy-btn')) {\n        addProduct (evt.target);\n    }\n})\n\n//создание массива объектов - имитация загрузки данных с сервера\nfunction fetchData () {\n    let arr = [];\n    for (let i = 0; i < items.length; i++) {\n        arr.push (createProduct (i));\n    }\n    return arr\n};\n\n//создание товара\nfunction createProduct (i) {\n    return {\n        id: ids[i],\n        name: items[i],\n        price: prices[i],\n        img: image,\n        quantity: 0,\n        createTemplate: function () {\n            return `<div class=\"product-item\" data-id=\"${this.id}\">\n                        <img src=\"${this.img}\" alt=\"Some img\">\n                        <div class=\"desc\">\n                            <h3>${this.name}</h3>\n                            <p>${this.price} $</p>\n                            <button class=\"buy-btn\"\n                            data-id=\"${this.id}\"\n                            data-name=\"${this.name}\"\n                            data-image=\"${this.img}\"\n                            data-price=\"${this.price}\">Купить</button>\n                        </div>\n                    </div>`\n        },\n\n        add: function() {\n            this.quantity++\n        }\n    }\n};\n\n//рендер списка товаров (каталога)\nfunction renderProducts () {\n    let arr = [];\n    for (item of list) {\n        arr.push(item.createTemplate())\n    }\n    document.querySelector('.products').innerHTML = arr.join(\"\");\n}\n/*\n  По пункту 3 из задания, запятая выводится из-за свойства innerHTML,\n  чтобы избежать этого, в коде было сделано преобразование в строку\n  с удалением разделителей при помощи .join(\"\")\n*/\nrenderProducts ();\n\n//CART\n\n// Добавление продуктов в корзину\nfunction addProduct (product) {\n    let productId = +product.dataset['id'];\n    let find = userCart.find (element => element.id === productId);\n    if (!find) {\n        userCart.push ({\n            name: product.dataset ['name'],\n            id: productId,\n            img: cartImage,\n            price: +product.dataset['price'],\n            quantity: 1\n        })\n    }  else {\n        find.quantity++\n    }\n    renderCart ()\n}\n\n//удаление товаров\nfunction removeProduct (product) {\n    let productId = +product.dataset['id'];\n    let find = userCart.find (element => element.id === productId);\n    if (find.quantity > 1) {\n        find.quantity--;\n    } else {\n        userCart.splice(userCart.indexOf(find), 1);\n        document.querySelector(`.cart-item[data-id=\"${productId}\"]`).remove()\n    }\n    renderCart ();\n}\n\n//перерендер корзины\nfunction renderCart () {\n    let allProducts = '';\n    for (el of userCart) {\n        allProducts += `<div class=\"cart-item\" data-id=\"${el.id}\">\n                            <div class=\"product-bio\">\n                                <img src=\"${el.img}\" alt=\"Some image\">\n                                <div class=\"product-desc\">\n                                    <p class=\"product-title\">${el.name}</p>\n                                    <p class=\"product-quantity\">Quantity: ${el.quantity}</p>\n                                    <p class=\"product-single-price\">$${el.price} each</p>\n                                </div>\n                            </div>\n                            <div class=\"right-block\">\n                                <p class=\"product-price\">${el.quantity * el.price}</p>\n                                <button class=\"del-btn\" data-id=\"${el.id}\">&times;</button>\n                            </div>\n                        </div>`\n    }\n\n    document.querySelector(`.cart-block`).innerHTML = allProducts;\n}\n\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

/***/ }),

/***/ "./src/public/js/test.js":
/*!*******************************!*\
  !*** ./src/public/js/test.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Массив с товарами\nconst goods = [\n    { name: 'Notebook', price: 1000, ids: 1, image: 'https://placehold.it/200x150' },\n    { name: 'Display', price: 200, ids: 2, image: 'https://placehold.it/200x150' },\n    { name: 'Keyboard', price: 20, ids: 3, image: 'https://placehold.it/200x150' },\n    { name: 'Mouse', price: 10, ids: 4, image: 'https://placehold.it/200x150' },\n    { name: 'Phones', price: 25, ids: 5, image: 'https://placehold.it/200x150' },\n    { name: 'Router', price: 30, ids: 6, image: 'https://placehold.it/200x150' },\n    { name: 'USB-camera', price: 18, ids: 7, image: 'https://placehold.it/200x150' },\n    { name: 'Gamepad', price: 24, ids: 8, image: 'https://placehold.it/200x150' },\n]\nconst cartImage = 'https://placehold.it/100x80'\n// Класс товара\nclass Product {\n    constructor (good) {\n        this.name = good.name\n        this.price = good.price\n        this.id = good.ids\n        this.image = good.image\n    }\n\n    render () {\n        return `<div class=\"product-item\" data-id=\"${this.id}\">\n                    <img src=\"${this.image}\" alt=\"Some img\">\n                        <div class=\"desc\">\n                            <h3>${this.name}</h3>\n                            <p>${this.price} $</p>\n                            <button class=\"buy-btn\"\n                            data-id=\"${this.id}\"\n                            data-name=\"${this.name}\"\n                            data-image=\"${this.image}\"\n                            data-price=\"${this.price}\">Купить</button>\n                        </div>\n                </div>`\n    }\n}\n\n// Класс каталога товаров\nclass Catalog {\n    constructor (container) {\n        this.goods = []\n        this.container = container\n    }\n\n    init () {\n        this.goods = goods\n        this._render ()\n    }\n    _render () {\n        let strCat = ''\n        this.goods.forEach (good => {\n            strCat += new Product(good).render ()\n        })\n        document.querySelector(this.container).innerHTML = strCat\n    }\n\n}\n// Создаем каталог и выводим в div с классом \"products\"\nconst catalog = new Catalog('.products')\ncatalog.init()\n\n\n// Элемент карзины\n\nclass CartProduct {\n    constructor (good) {\n        this.name = good.name\n        this.price = good.price\n        this.id = good.ids\n        this.image = good.image\n        this.quantity = good.quantity\n    }\n    render (){\n        return `<div class=\"cart-item\" data-id=\"${this.id}\">\n                    <div class=\"product-bio\">\n                        <img src=\"${this.image}\" alt=\"Some image\">\n                            <div class=\"product-desc\">\n                                <p class=\"product-title\">${this.name}</p>\n                                <p class=\"product-quantity\">Quantity: ${this.quantity}</p>\n                                <p class=\"product-single-price\">$${this.price} each</p>\n                                </div>\n                    </div>\n                            <div class=\"right-block\">\n                                <p class=\"product-price\">${this.quantity * this.price}</p>\n                                <button class=\"del-btn\" data-id=\"${this.id}\">&times;</button>\n                            </div>\n                </div>`\n    }\n}\n\n// Класс корзины\n\nclass Cart {\n    constructor (container){\n        this.cartGoods = []\n        this.container = container\n    }\n\n    init () {\n        this.cartGoods = []\n        this.cartAdd ()\n        this.cartRemove ()\n        this.cartHidden ()\n        this.render ()\n    }\n\n    render () {\n        let strCart = ''\n        this.cartGoods.forEach (good => {\n            strCart += new CartProduct(good).render ()\n        })\n        document.querySelector(this.container).innerHTML = strCart\n    }\n    cartHidden () {\n        document.querySelector('.btn-cart').addEventListener('click', () => {\n            document.querySelector('.cart-block').classList.toggle('invisible');\n        });\n    }\n    cartAdd () {\n        document.querySelector('.products').addEventListener ('click', (evt) => {\n            if (evt.target.classList.contains ('buy-btn')) {\n                this.addProduct (evt.target);\n            }\n        })\n    }\n    cartRemove () {\n        document.querySelector('.cart-block').addEventListener ('click', (evt) => {\n            if (evt.target.classList.contains ('del-btn')) {\n                this.removeProduct (evt.target);\n            }\n        })\n    }\n    addProduct (product) {\n        let productId = +product.dataset['id'];\n        let find = this.cartGoods.find (element => element.id === productId);\n        if (!find) {\n            this.cartGoods.push ({\n                name: product.dataset ['name'],\n                price: +product.dataset ['price'],\n                id: productId,\n                image: cartImage,\n                quantity: 1\n            })\n        }  else {\n            find.quantity++\n        }\n        this.render ()\n    }\n    removeProduct (product) {\n        let productId = +product.dataset['id'];\n        let find = this.cartGoods.find (element => element.id === productId);\n        if (find.quantity > 1) {\n            find.quantity--;\n        } else {\n            this.cartGoods.splice(this.cartGoods.indexOf(find), 1);\n            document.querySelector(`.cart-item[data-id=\"${productId}\"]`).remove()\n        }\n        this.render ()\n    }\n}\n\nconst cart = new Cart ('.cart-block')\ncart.init ()\n\n\n//# sourceURL=webpack:///./src/public/js/test.js?");

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