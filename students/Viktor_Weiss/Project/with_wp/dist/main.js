!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e){let n=[];var i;(i="https://raw.githubusercontent.com/EdwardLeks/database/master/goodsData.json",new Promise((t,e)=>{!function(t,e,n){let i=new XMLHttpRequest;i.onreadystatechange=function(){4===i.readyState&&(200===i.status?e(i.responseText):n("error"))},i.open("GET",t,!0),i.send()}(i,t,e)})).then(t=>JSON.parse(t)).then(t=>{n=t}).finally(()=>{console.log(n)}),document.querySelector(".btn-cart").addEventListener("click",(function(){document.querySelector(".cart-block").classList.toggle("invisible")}));class r{constructor(t){this.id=t.id,this.name=t.name,this.price=t.price,this.img="https://via.placeholder.com/200x150"}render(){return`<div class="product-item">\n                    <img src="${this.img}" alt="Some img">\n                    <div class="desc">\n                        <h3>${this.name}</h3>\n                        <p>${this.price} $</p>\n                        <button class="buy-btn" data-value="addToCart" data-id="${this.id}">Купить</button>\n                    </div>\n                </div>`}}class s{constructor(t){this.container=document.querySelector(t),this.goods=[]}initListeners(){[...this.container.querySelectorAll("button")].forEach(t=>{t.addEventListener("click",t=>{"addToCart"===t.target.dataset.value?this.addToCart(this.findElement(parseInt(t.target.dataset.id,10))):"removeToCart"===t.target.dataset.value&&this.deleteGood(this.findElement(parseInt(t.target.dataset.id,10)))})})}findElement(t){return this.goods.find(e=>e.id===t)}totalCost(){let t=0;return this.goods.forEach(e=>t+=e.price),t}fetchData(){this.goods=n,this.render()}render(){let t="";this.goods.forEach(e=>{t+=new r(e).render()}),this.container.innerHTML=t,this.initListeners(),this.totalCost()}}new class extends s{addToCart(t){a.checkQuantity(t)}}(".products").fetchData();class o{constructor(t){this.id=t.id,this.name=t.name,this.price=t.price,this.img="https://placehold.it/100x80",this.quantity=t.quantity}render(){return`<div class="cart-item" data-id="${this.id}">\n                    <div class="product-bio">\n                        <img src="${this.img}" alt="Some image">\n                        <div class="product-desc">\n                            <p class="product-title">${this.name}</p>\n                            <p class="product-quantity">Quantity: ${this.quantity}</p>\n                            <p class="product-single-price">$${this.price} each</p>\n                        </div>\n                    </div>\n                    <div class="right-block">\n                        <p class="product-price">${this.quantity*this.price}</p>\n                        <button class="del-btn" data-id="${this.id}" data-value="removeToCart">&times</button>\n                    </div>\n                </div>`}}const a=new class extends s{constructor(...t){super(t)}checkQuantity(t){this.findElement(t.id)?(this.goods[this.findIndexGood(t)].quantity++,this.render()):(t.quantity=1,this.goods.push(t),this.render())}findIndexGood(t){return this.goods.findIndex(e=>e===t)}incQuantity(){}decQuantity(){}deleteGood(t){this.goods.splice(this.findIndexGood(t),1),this.render()}render(){let t="";this.goods.forEach(e=>{t+=new o(e).render()}),this.container.innerHTML=t,this.initListeners()}}(".cart-block")}]);