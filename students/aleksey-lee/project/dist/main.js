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

eval("// Запрос к серверу\nfunction makeGETRequest(url, resolve, reject) {\n    var xhr;\n  \n    if (window.XMLHttpRequest) {\n      xhr = new XMLHttpRequest();\n    } else if (window.ActiveXObject) { \n      xhr = new ActiveXObject(\"Microsoft.XMLHTTP\");\n    }\n  \n    xhr.onreadystatechange = function () {\n        if (xhr.readyState === 4) {\n            if (xhr.status === 200) {\n                resolve (xhr.responseText)\n            } else {\n                reject ('error')\n            }\n        }\n    }\n  \n    xhr.open('GET', url, true);\n    xhr.send();\n}\n\n//Общий класс для единицы товара\nclass Item {\n    constructor(id, name, price, img, cartImage) {\n        this.id = id;\n        this.name = name;\n        this.price = price;\n        this.img = img;\n        this.cartImage = cartImage;\n    }\n}\n\n//Класс Вывода единицы товара в каталоге\nclass GoodsItem extends Item {\n\n    //Вывод единицы товара в каталоге\n    render() {\n      return `<div class=\"product-item\" data-id=\"${this.id}\">\n                <img src=\"${this.img}\" alt=\"Some img\">\n                <div class=\"desc\">\n                    <h3>${this.name}</h3>\n                    <p>${this.price} $</p>\n                    <button class=\"buy-btn\" \n                    data-id=\"${this.id}\"\n                    data-name=\"${this.name}\"\n                    data-image=\"${this.img}\"\n                    data-cartimage=\"${this.cartImage}\"\n                    data-price=\"${this.price}\">Купить</button>\n                </div>\n            </div>`;\n    }\n}\n\n//Класс вывода единицы товара в корзине\nclass CartItem extends Item {\n    constructor(id, name, price, img, cartImage, quantity) {\n      super(id, name, price, img, cartImage);\n      this.quantity = quantity;\n    }\n\n    //Вывод товара в корзине\n    render() {\n      return `<div class=\"cart-item\" data-id=\"${this.id}\">\n                    <div class=\"product-bio\">\n                        <img src=\"${this.img}\" alt=\"Some image\">\n                        <div class=\"product-desc\">\n                            <p class=\"product-title\">${this.name}</p>\n                            <p class=\"product-quantity\">Quantity: ${this.quantity}</p>\n                            <p class=\"product-single-price\">$${this.price} each</p>\n                        </div>\n                    </div>\n                    <div class=\"right-block\">\n                        <p class=\"product-price\">${this.quantity * this.price}</p>\n                        <button class=\"del-btn\" data-id=\"${this.id}\">&times;</button>\n                    </div>\n                </div>`;\n    }\n}\n\n//Общий класс для списка товаров\nclass List{\n    constructor(container) {\n        this.goods = [];\n        this.container = document.querySelector(container);\n    }\n\n    //Вывод каталога\n    render() {\n        this.container.innerHTML = this.goods.map(product => {\n            const productItem = new GoodsItem(product.id, product.name, product.price, product.img, product.cartImage);\n            return productItem.render();\n        }).join('');\n    }\n\n    promiseReq (url) {\n        return new Promise ((res, rej) => {\n            makeGETRequest(url, res, rej)\n        })\n    }\n\n}\n\n//Класс каталога\nclass GoodsList extends List {\n    fetchGoods() {\n        let response = this.promiseReq('https://raw.githubusercontent.com/aleksey-lee/js2_12_0502/master/students/aleksey-lee/project/src/public/json/catalog.json')\n        response\n            .then(dataJSON => {\n                return JSON.parse(dataJSON);\n            })\n            .then( goods => {\n                this.goods = goods\n                this.render() \n            })\n    }\n}\n\n//Класс корзины\nclass Cart extends List {\n    constructor(container){\n        super(container);\n\n        this._bindHandlers();\n    }\n\n    //Вывод корзины\n    render() {\n        this.container.innerHTML = this.goods.map(product => {\n            const productItem = new CartItem(product.id, product.name, product.price, product.img, product.cartImage, product.quantity);\n            return productItem.render();\n        }).join('');\n    }\n\n    fetchGoods() {\n        let response = this.promiseReq('https://raw.githubusercontent.com/aleksey-lee/js2_12_0502/master/students/aleksey-lee/project/src/public/json/getBasket.json')\n        response\n            .then(dataJSON => {\n                console.log(dataJSON)\n                return JSON.parse(dataJSON);\n            })\n            .then( carts => {\n                this.goods = carts.contents\n                this.render() \n            })\n    }\n\n    // Добавление продуктов в корзину\n    addProduct (product) {\n        let productId = +product.dataset['id'];\n        let find = this.goods.find(element => element.id === productId);\n\n        \n        if (!find) {\n            this.goods.push ({\n                name: product.dataset['name'],\n                id: productId,\n                img: product.dataset['cartimage'],\n                price: +product.dataset['price'],\n                quantity: 1\n            })\n        }  else {\n            find.quantity++\n        }\n\n        this.render()\n    }\n\n    //удаление товаров\n    removeProduct (product) {\n        let productId = +product.dataset['id'];\n        let find = this.goods.find (element => element.id === productId);\n        if (find.quantity > 1) {\n            find.quantity--;\n        } else {\n            this.goods.splice(this.goods.indexOf(find), 1);\n        }\n        this.render ();\n    }\n\n    //Общая цена товаров в корзине\n    getTotalPrice(){\n        return this.goods.reduce((sum, product) => sum + (product.price * product.quantity), 0)\n    }\n\n    _bindHandlers(){\n\n        //кнопка скрытия и показа корзины\n        document.querySelector('.btn-cart').addEventListener('click', () => {\n            document.querySelector('.cart-block').classList.toggle('invisible');\n        });\n\n        //кнопки удаления товара (добавляется один раз)\n        document.querySelector('.cart-block').addEventListener ('click', (evt) => {\n            if (evt.target.classList.contains ('del-btn')) {\n                userCart.removeProduct (evt.target);\n            }\n        });\n\n        //кнопки покупки товара (добавляется один раз)\n        document.querySelector('.products').addEventListener ('click', (evt) => {\n            if (evt.target.classList.contains ('buy-btn')) {\n                userCart.addProduct (evt.target);\n            }\n        });\n    }\n}\n\n\n\n\nconst list = new GoodsList('#goods-list');\nlist.fetchGoods()\n\nconst userCart = new Cart('#cart-block');\nuserCart.fetchGoods()\n\n\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

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