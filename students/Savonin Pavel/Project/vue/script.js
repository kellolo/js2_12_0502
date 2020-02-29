//const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
//скопировал файл и преумножил его содержимое
const API_URL = '';
const app = new Vue({
    el: '#app',
    data: {
        goods: [],
        filteredGoods: [],
        searchLine: '',
        searchRequest: '',
        isCartVisible: false,
        showCart: false,
    },
    methods: {
        makeGETRequest(url, callback) {
            const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

            var xhr;

            if (window.XMLHttpRequest) {
                xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }

            xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    callback(xhr.responseText);
                }
            }

            xhr.open('GET', url, true);
            xhr.send();
        },

        filterGoods(searchLine) {
            let filteredGoods = [];
            console.log("filtered");
            console.log(this.searchLine.toLowerCase());
            this.goods.forEach(good => {
                if (good.product_name.toLowerCase().indexOf(searchLine.toLowerCase()) + 1) {
                    filteredGoods.push(good);
                }
            })
            this.filteredGoods = filteredGoods;
            this.searchRequest = searchLine;
            if (filteredGoods.length == 0) {
                document.getElementById('empty_list').classList.remove('invisible');
            } else {
                document.getElementById('empty_list').classList.add('invisible');
            }
        },
        addToCart() {
            console.log('item ' +  ' added to cart');
        },
    },

    mounted() {
        this.makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            goods = JSON.parse(goods);
            this.goods = goods;
            this.filteredGoods = goods;
        });

    }

});