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

eval("const image = 'https://placehold.it/200x150';\nconst cartImage = 'https://placehold.it/100x80';\nconst goods = [\n    { id: 1, title: 'Shirt', price: 150, img:'https://via.placeholder.com/200x150' },\n    { id: 2, title: 'Socks', price: 50, img:'https://via.placeholder.com/200x150' },\n    { id: 3, title: 'Jacket', price: 350, img:'https://via.placeholder.com/200x150' },\n    { id: 4, title: 'Shoes', price: 250, img:'https://via.placeholder.com/200x150' },\n];\n\n//класс списка товаров\nclass GoodsList {\n    constructor() {\n        this.goods = [];\n    }\n    fetchData () {\n        this.goods = goods;\n    }\n    render() {\n        let listHtml = '';\n        this.goods.forEach(good => {\n          const goodItem = new GoodsItem(good);\n          listHtml += goodItem.render();\n        });\n        document.querySelector('.products').innerHTML = listHtml;\n    }\n    totalSumGoods () {\n        let goodsSum = 0;\n        this.goods.forEach(good => {\n            goodsSum += good.price;\n        });\n        document.querySelector('.products-sum').textContent = `Стоимость всех товаров: ${goodsSum} $`;\n    }\n    initListeners() {\n        const buttons = document.querySelectorAll('.buy-btn');\n        buttons.forEach((button)=>{\n            button.addEventListener('click', (evt)=>{\n                this.addToCart (this.findElement(parseInt(evt.target.dataset.id, 10)))\n            })\n        })\n    }\n    findElement(goodId){\n        return this.goods.find(el=>el.id===goodId)  \n     }\n    //Добавление продуктов в корзину\n    addToCart (product) {\n        let productId = +product.dataset['id'];\n        let find = userCart.find (element => element.id === productId);\n        if (!find) {\n            userCart.push ({\n                name: product.dataset ['name'],\n                id: productId,\n                img: cartImage,\n                price: +product.dataset['price'],\n                quantity: 1\n            })\n        }  else {\n            find.quantity++\n        }\n        renderCart ()\n    }\n}\n\n//товар каталога\nclass GoodsItem {\n    constructor(good) {        \n        this.id = good.id;\n        this.title = good.title;\n        this.price = good.price;\n        this.img = good.img;\n    }\n    render() {\n        return  `<div class=\"product-item\" data-id=\"${this.id}\">\n                    <img src=\"${this.img}\" alt=\"Some img\">\n                    <div class=\"desc\">\n                        <h3>${this.title}</h3>\n                        <p>${this.price} $</p>\n                        <button class=\"buy-btn\" \n                        data-id=\"${this.id}\"\n                        data-title=\"${this.title}\"\n                        data-image=\"${this.img}\"\n                        data-price=\"${this.price}\">Купить</button>\n                    </div>\n                </div>`\n    }    \n}\n\n\nconst list = new GoodsList();\nlist.fetchData();\nlist.render();\nlist.totalSumGoods();\n\n\n// класс корзины товаров\nclass GoodCart extends GoodsList {\n    constructor () {\n\n    }\n}\n\n//товары корзины\nclass GoodItemCart extends GoodsItem{\n    constructor () {\n\n    }\n\n}\n\n//кнопка скрытия и показа корзины\n// document.querySelector('.btn-cart').addEventListener('click', () => {\n//     document.querySelector('.cart-block').classList.toggle('invisible');\n// });\n//кнопки удаления товара (добавляется один раз)\n// document.querySelector('.cart-block').addEventListener ('click', (evt) => {\n//     if (evt.target.classList.contains ('del-btn')) {\n//         removeProduct (evt.target);\n//     }\n// })\n//кнопки покупки товара (добавляется один раз)\n// document.querySelector('.products').addEventListener ('click', (evt) => {\n//     if (evt.target.classList.contains ('buy-btn')) {\n//         addProduct (evt.target);\n//     }\n// })\n\n//CART\n\n// Добавление продуктов в корзину\n// function addProduct (product) {\n//     let productId = +product.dataset['id'];\n//     let find = userCart.find (element => element.id === productId);\n//     if (!find) {\n//         userCart.push ({\n//             name: product.dataset ['name'],\n//             id: productId,\n//             img: cartImage,\n//             price: +product.dataset['price'],\n//             quantity: 1\n//         })\n//     }  else {\n//         find.quantity++\n//     }\n//     renderCart ()\n// }\n\n// //удаление товаров\n// function removeProduct (product) {\n//     let productId = +product.dataset['id'];\n//     let find = userCart.find (element => element.id === productId);\n//     if (find.quantity > 1) {\n//         find.quantity--;\n//     } else {\n//         userCart.splice(userCart.indexOf(find), 1);\n//         document.querySelector(`.cart-item[data-id=\"${productId}\"]`).remove()\n//     }\n//     renderCart ();\n// }\n\n// //перерендер корзины\n// function renderCart () {\n//     let allProducts = '';\n//     for (el of userCart) {\n//         allProducts += `<div class=\"cart-item\" data-id=\"${el.id}\">\n//                             <div class=\"product-bio\">\n//                                 <img src=\"${el.img}\" alt=\"Some image\">\n//                                 <div class=\"product-desc\">\n//                                     <p class=\"product-title\">${el.name}</p>\n//                                     <p class=\"product-quantity\">Quantity: ${el.quantity}</p>\n//                                     <p class=\"product-single-price\">$${el.price} each</p>\n//                                 </div>\n//                             </div>\n//                             <div class=\"right-block\">\n//                                 <p class=\"product-price\">${el.quantity * el.price}</p>\n//                                 <button class=\"del-btn\" data-id=\"${el.id}\">&times;</button>\n//                             </div>\n//                         </div>`\n//     }\n\n//     document.querySelector(`.cart-block`).innerHTML = allProducts;\n// }\n\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

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