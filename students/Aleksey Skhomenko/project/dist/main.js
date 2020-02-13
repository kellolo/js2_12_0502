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

eval("let catalog = {\n    items: [],\n    container: '.products',\n    cart: null,\n    json_path: 'https://raw.githubusercontent.com/awesomesk1ll/js-level-1/develop/shop/json/response.json',\n\n    init() {\n        this.items = [];\n        this.cart = cart;\n\n        this.fetchData(this.json_path)\n            .finally(() => {\n                this._extendData();\n                this._render();\n            })\n\n        document.querySelector(this.container).addEventListener('click', (evt) => {\n            if (evt.target.name == 'buy') {\n                let product = evt.target.dataset;\n                let item = this.items.find(x => x.product_id === product.id);\n                if (this.cart.items.indexOf(item) < 0) this.cart.items.push(item);\n                item.quantity++;\n                this.cart._render();\n                console.log(`${product.name} добавлен в корзину.`);\n            }\n        })\n    },\n    fetchData(url) {\n        return fetch(url)\n            .then(data => data.json())\n            .then((data2) => {\n                this.items = data2\n            })\n    },\n    _extendData() {\n        this.items.forEach(item => {\n            this.extendProduct(item);\n        })\n    },\n    extendProduct(obj) {\n        obj.quantity = 0;\n        obj.catalog_template = function() {\n            return `\n                        <div class=\"product-item\" data-id=\"${this.product_id}\">\n                            <img src=\"${this.img+'?225x311'}\" alt=\"${this.product_name}\">\n                            <div class=\"desc\">\n                                <h3>${this.product_name}</h3>\n                                <p>${this.price}$</p>\n                                <button name=\"buy\" class=\"btn\"\n                                    data-id=\"${this.product_id}\"\n                                    data-name=\"${this.product_name}\"\n                                    data-price=\"${this.price}\">\n                                    Купить\n                                </button>\n                            </div>\n                        </div>\n                    `\n        };\n        obj.cart_template = function() {\n            return `\n                        <div class=\"cart-item\" data-id=\"${this.product_id}\">\n                            <img src=\"${this.img+'?69x93'}\" alt=\"${this.product_name}\">\n                            <div class=\"product-bio\">\n                                <p class=\"cart-item-name\">${this.product_name}</p>\n                                <p class=\"product-price right-block\"> ${this.price}$</p>\n\t\t\t\t\t\t\t\t<div class=\"quantity\">\n\t\t\t\t\t\t\t\t\t<button name=\"count-modifier\" class=\"btn\" data-id=\"${this.product_id}\" data-modify=\"-1\">-</button>\n\t\t\t\t\t\t\t\t\t<input name=\"quantity\" type=\"number\" onclick=\"event.target.select()\" data-id=\"${this.product_id}\" value=\"${this.quantity}\">\n\t\t\t\t\t\t\t\t\t<button name=\"count-modifier\" class=\"btn\" data-id=\"${this.product_id}\" data-modify=\"+1\">+</button>\n\t\t\t\t\t\t\t\t</div><br>\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t<button name=\"remove\" class=\"btn\"\n\t\t\t\t\t\t\t\tdata-id=\"${this.product_id}\"\n\t\t\t\t\t\t\t\tdata-name=\"${this.product_name}\"\n\t\t\t\t\t\t\t\tdata-price=\"${this.price}\">\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n                    ` \n        };\n    },\n    _render() {\n        let container = document.querySelector(this.container);\n        let domString = '';\n\n        this.items.forEach(item => {\n            domString += item.catalog_template();\n        })\n        container.innerHTML = domString;\n    }\n};\n\nlet cart = {\n    items: [],\n    container: '.cart-block',\n    btn: '.btn-cart',\n\n    init() {\n        this._render();\n        document.querySelector(this.btn).addEventListener('click', () => {\n            document.querySelector(this.container).classList.toggle('invisible');\n        });\n        document.querySelector(this.container).addEventListener('change', (evt) => {\n            if (evt.target.name == \"remove\" || evt.target.name == \"count-modifier\" || evt.target.name == \"quantity\") {\n                let ds = evt.target.dataset;\n                let item = this.items.find(x => x.product_id === ds.id);\n                if (evt.target.name == 'quantity') {\n                    item.quantity = +evt.target.value;\n                    console.log(item.quantity == 0 ? `${item.product_name} удалён из корзины.` :\n                        `Количество ${item.product_name} теперь равно ${item.quantity}.`);\n                }\n\n                if (item.quantity == 0) this.items.splice(this.items.indexOf(item), 1);\n                this._render();\n            }\n            if (evt.target.name == \"wipe\") this.wipe();\n        })\n        document.querySelector(this.container).addEventListener('click', (evt) => {\n            if (evt.target.name == \"remove\" || evt.target.name == \"count-modifier\" || evt.target.name == \"quantity\") {\n                let ds = evt.target.dataset;\n                let item = this.items.find(x => x.product_id === ds.id);\n                if (evt.target.name == 'remove') {\n                    item.quantity = 0;\n                    this._render();\n                    console.log(`${ds.name} удалён из корзины.`);\n                }\n                if (evt.target.name == 'count-modifier') {\n                    item.quantity += +ds.modify;\n                    console.log(item.quantity == 0 ? `${item.product_name} удалён из корзины.` :\n                        `Количество ${item.product_name} ${ds.modify == \"+1\" ? \"увеличено\" : \"уменьшено\"} и теперь равно ${item.quantity}.`);\n                }\n\n                if (item.quantity == 0) this.items.splice(this.items.indexOf(item), 1);\n\n                if (evt.target.name == 'quantity')\n                    evt.target.select();\n                else\n                    this._render();\n            }\n            if (evt.target.name == \"wipe\") this.wipe();\n        })\n    },\n    _get_price(items) {\n        return items.reduce((a, b) => +a + +b[\"price\"] * b[\"quantity\"], 0)\n    },\n    _get_count(items) {\n        return items.reduce((a, b) => +a + +b[\"quantity\"], 0)\n    },\n    _do_wipe(items) {\n        return items.reduce((a, b) => b[\"quantity\"] = 0, 0)\n    },\n    _prepare(domstroke) {\n        if (this.items.length == 0)\n            return '<p>Корзина пуста.</p>';\n        else\n            return domstroke += `<hr>\n\t\t\t\t\t\tТоваров в корзине: ${this._get_count(this.items)} (стаков: ${this.items.length})<br>\n\t\t\t\t\t\tОбщая стоимость: ${this._get_price(this.items)}$\n\t\t\t\t\t\t<button name=\"wipe\" class=\"btn\">Очистить корзину</button>\n\t\t\t\t\t\t`; //костыльчик\n    },\n    _render() {\n        let container = document.querySelector(this.container);\n        let domString = '';\n\n        this.items.forEach(item => {\n            domString += item.cart_template();\n        });\n\n        container.innerHTML = this._prepare(domString);\n    },\n    wipe() {\n        this._do_wipe(this.items)\n        this.items.splice(0, this.items.length);\n        this._render();\n        console.log('Корзина очищена.');\n    }\n};\n\ncart.init();\ncatalog.init();\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

/***/ }),

/***/ "./src/public/style/normalize.css":
/*!****************************************!*\
  !*** ./src/public/style/normalize.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/public/style/normalize.css?");

/***/ }),

/***/ "./src/public/style/style.css":
/*!************************************!*\
  !*** ./src/public/style/style.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./src/public/style/style.css?");

/***/ })

/******/ });