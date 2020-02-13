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

eval("const API = 'https://raw.githubusercontent.com/awesomesk1ll/js2_12_0502/master/students/Aleksey%20Skhomenko/project/src/public/json'\n\nclass ItemList {\n    constructor(path, container) {\n        this.items = []\n        this.url = path\n        this.container = container\n        this._init()\n    }\n    _init() {\n        return false\n    }\n    \n    ////////////////////////// модерн вариант запроса данных через fetch - 4 строчки\n\n    // getData(url) {\n    //     return fetch(url)\n    //         .then(d => d.json())\n    // }\n\n    ////////////////////////// запрос данных с использованием new Promise - 21 строка\n    getData (url) {\n        return new Promise ((res, rej) => {\n            this.makeGETRequest(url, res, rej)\n            })\n            .then(d => JSON.parse(d))\n    }\n\n    makeGETRequest(url, resolve, reject) {\n        var xhr = new XMLHttpRequest();\n        xhr.onreadystatechange = function () {\n            if (xhr.readyState === 4) {\n                if (xhr.status === 200) {\n                    resolve (xhr.responseText)\n                } else {\n                    reject ('error code: '+xhr.status)\n                }\n            }\n        }\n        xhr.open('GET', url, true);\n        xhr.send();\n    }\n\n    ////////////////////////// конец запроса\n\n    _render() {\n        let DOM_target = document.querySelector(this.container)\n        let htmlString = ''\n        if (this.items.length > 0)\n            this.items.forEach((item) => {\n                let t = new proto[this.constructor.name](item)\n                t.quantity = item.quantity\n                htmlString += t.render()\n            })\n        if (this.price != undefined && this.quantity != undefined) {\n            if (this.items.length > 0) {\n                htmlString += `<hr>\n                Товаров в корзине: ${this.quantity} (стаков: ${this.items.length})<br>\n                Общая стоимость: ${this.price}$\n                <button name=\"wipe\" class=\"btn\">Очистить корзину</button>\n                `\n            } else {\n                htmlString = `<p>Корзина пуста.</p>`\n            }\n        }\n        DOM_target.innerHTML = htmlString\n    }\n}\n\nclass Catalog extends ItemList {\n    constructor(cart, url = '/catalogDataResponse.json', container = '.products') {\n        super(url, container)\n        this.cart = cart\n    }\n    _init() {\n        this.getData(API + this.url)\n            .then(parsedData => { this.items = parsedData })\n            .then(() => { this._render() })\n            .catch(console.log.bind(console))\n            .finally(() => { this._addListeners() })\n    }\n\n    _addListeners() {\n        document.querySelector(this.container).addEventListener('click', (evt) => {\n            if (evt.target.name == 'buy') {\n                this.cart.addProduct(evt.target)\n                console.log(`${evt.target.dataset.name} добавлен в корзину.`)\n            }\n        })\n    }\n}\n\nclass Cart extends ItemList {\n    constructor(url = '/cartDataResponse.json', container = '.cart-block', btn = '.btn-cart') {\n        super(url, container)\n        this.price = 0\n        this.quantity = 0\n        this.btn = btn\n    }\n\n    _init() {\n        this.getData(API + this.url)\n            .then(parsedData => {\n                this.items = parsedData.items\n                this.price = parsedData.price\n                this.quantity = parsedData.quantity\n            })\n            .then(() => { this._render() })\n            .catch(console.log.bind(console))\n            .finally(() => {\n                this._addListeners()\n            })\n    }\n\n    _addListeners() {\n        //кнопка скрытия и показа корзины\n        document.querySelector(this.btn).addEventListener('click', () => {\n            document.querySelector(this.container).classList.toggle('invisible')\n        })\n        //кнопки удаления товара (добавляется один раз)\n        document.querySelector(this.container).addEventListener('click', (evt) => {\n            if (evt.target.name == \"remove\") this.removeProduct(evt.target, true)\n            if (evt.target.name == \"wipe\") this.wipe()\n            if (evt.target.name == \"count-modifier\") this.setCount(evt.target)\n\n        })\n        //при изменении количества товаров через прямой ввод в input\n        document.querySelector(this.container).addEventListener('change', (evt) => {\n            if (evt.target.name == 'quantity') this.setCount(evt.target)\n        })\n    }\n    addProduct(prod) {\n        let find = this.items.find(x => x.product_id === prod.dataset.id)\n        if (!find) {\n            this.items.push(new CartItem({\n                img: prod.dataset.img,\n                product_name: prod.dataset.name,\n                price: +prod.dataset.price,\n                product_id: prod.dataset.id,\n                quantity: 1\n            }))\n        } else {\n            find.quantity++\n        }\n        this._calculate()\n        this._render()\n\n    }\n    //удаляет одну единицу товара в корзине, если второй параметр true, то удаляет всю связку этого товара\n    removeProduct(prod, all = false) {\n        let find = this.items.find(item => item.product_id === prod.dataset.id)\n        if (all || find.quantity <= 1) {\n            this.items.splice(this.items.indexOf(find), 1)\n        } else {\n            find.quantity--\n        }\n        this._calculate()\n        this._render()\n    }\n    //прописывает количество товару в корзине, используется на кнопках (+|- 1) и для инпута (любое число)\n    setCount(elem) {\n        let item = this.items.find(x => x.product_id === elem.dataset.id)\n        if (elem.name == \"quantity\") {\n            item.quantity = +elem.value\n            console.log(item.quantity == 0 ? `${item.product_name} удалён из корзины.` :\n                `Количество ${item.product_name} теперь равно ${item.quantity}.`)\n        } else if (elem.name == \"count-modifier\") {\n            item.quantity += +elem.dataset.modify\n            console.log(item.quantity == 0 ? `${item.product_name} удалён из корзины.` :\n                `Количество ${item.product_name} ${elem.dataset.modify == \"+1\" ? \"увеличено\" : \"уменьшено\"} и теперь равно ${item.quantity}.`)\n        }\n        if (item.quantity == 0) this.items.splice(this.items.indexOf(item), 1)\n        this._calculate()\n        this._render()\n    }\n    //пересчитывает стоимость всех товаров в корзине и количество всех товаров (колво связок this.items.length)\n    _calculate() {\n        let p = 0, q = 0\n        this.items.forEach(elem => {\n            p += elem.price * elem.quantity\n            q += elem.quantity\n        })\n        this.price = p\n        this.quantity = q\n    }\n    //стирает данные в корзине\n    wipe() {\n        delete this.items\n        this.items = []\n        this._calculate()\n        this._render()\n        console.log('Корзина очищена.')\n    }\n}\n\nclass Item {\n    constructor(obj) {\n        this.product_name = obj.product_name\n        this.price = obj.price\n        this.product_id = obj.product_id\n        this.img = obj.img\n    }\n    render() {\n        return `\n            <div class=\"product-item\" data-id=\"${this.product_id}\">\n                <img src=\"${this.img + '?225x311'}\" alt=\"${this.product_name}\">\n                <div class=\"desc\">\n                    <h3>${this.product_name}</h3>\n                    <p>${this.price}$</p>\n                    <button name=\"buy\" class=\"btn\"\n                        data-id=\"${this.product_id}\"\n                        data-name=\"${this.product_name}\"\n                        data-price=\"${this.price}\"\n                        data-img=\"${this.img}\">\n                        Купить\n                    </button>\n                </div>\n            </div>\n        `\n    }\n}\n\nclass CatalogItem extends Item { }\n\nclass CartItem extends Item {\n    constructor(obj) {\n        super(obj)\n        this.quantity = 1\n    }\n\n    render() {\n        return `\n            <div class=\"cart-item\" data-id=\"${this.product_id}\">\n                <img src=\"${this.img + '?69x93'}\" alt=\"${this.product_name}\">\n                <div class=\"product-bio\">\n                    <p class=\"cart-item-name\">${this.product_name}</p>\n                    <p class=\"product-price right-block\"> ${this.price}$</p>\n                    <div class=\"quantity\">\n                        <button name=\"count-modifier\" class=\"btn\" data-id=\"${this.product_id}\" data-modify=\"-1\">-</button>\n                        <input name=\"quantity\" type=\"number\" onclick=\"event.target.select()\" data-id=\"${this.product_id}\" value=\"${this.quantity}\">\n                        <button name=\"count-modifier\" class=\"btn\" data-id=\"${this.product_id}\" data-modify=\"+1\">+</button>\n                    </div><br>\n                <button name=\"remove\" class=\"btn\"\n                    data-id=\"${this.product_id}\"\n                    data-name=\"${this.product_name}\"\n                    data-price=\"${this.price}\">\n                </button>\n                </div>\n            </div>\n        `\n    }\n}\n\nlet proto = {\n    Cart: CartItem,\n    Catalog: CatalogItem\n}\n\nlet cart = new Cart()\nlet catalog = new Catalog(cart)\n\nconsole.timeEnd('Loading')\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

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