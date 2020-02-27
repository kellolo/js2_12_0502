let app = new Vue({
    el: '#app',
    data: {
        catalogItems: [],
        filterCatalogItems: [],
        basketItems: [],
        urlcatalog: 'https://raw.githubusercontent.com/Diger134/js2_12_0502/master/students/Denis%20Gadzhibalaev/Project/webpack/src/server/db/catalogData.json',
        urlbasket: 'https://raw.githubusercontent.com/Diger134/js2_12_0502/master/students/Denis%20Gadzhibalaev/Project/webpack/src/server/db/getBasket.json',
        hiddenBasket: false,
        seenTotalsum: true,
        img: "https://placehold.it/200x150",
        inputValue: ''
    },
    methods: {
        getData(url) {
            return fetch(url)
                .then(d => d.json())
        },
        controlModalWindow() {
            this.hiddenBasket == false ? this.hiddenBasket = true : this.hiddenBasket = false;
        },
        addProduct(el) {
            let find = this.basketItems.contents.find(element => element.id_product === el.id_product);
            if (!find) {
                this.basketItems.contents.push({
                    product_name: el.product_name,
                    id_product: el.id_product,
                    price: +el.price,
                    quantity: 1
                });
                this.basketItems.countGoods += 1;
                this.basketItems.amount += el.price;
            } else {
                find.quantity++
                this.basketItems.countGoods += 1;
                this.basketItems.amount += el.price;
            }
            if (this.basketItems.contents.length > 0) {
                this.seenTotalsum = true;
            }
        },
        removeProduct(el) {
            let find = this.basketItems.contents.find(element => element.id_product === el.id_product);
            if (find.quantity > 1) {
                find.quantity--;
                this.basketItems.countGoods -= 1;
                this.basketItems.amount -= el.price;
            } else {
                this.basketItems.contents.splice(this.basketItems.contents.indexOf(find), 1);
                this.basketItems.countGoods -= 1;
                this.basketItems.amount -= el.price;
            }
            if (this.basketItems.contents.length == 0) {
                this.seenTotalsum = false;
            }
        },
        filterProducts() {
            if (this.inputValue == '') {
                this.filterCatalogItems = this.catalogItems;
            } else {
                this.filterCatalogItems = this.catalogItems.filter(el => {
                    return el.product_name.toLowerCase().indexOf(this.inputValue.toLowerCase()) !== -1
                });
            }
        }

    },
    computed: {},
    mounted() {
        this.getData(this.urlcatalog)
            .then(items => {
                this.catalogItems = items;
                this.filterCatalogItems = items;
                console.log(this.catalogItems);
            });
        this.getData(this.urlbasket)
            .then(items => {
                this.basketItems = items;
                console.log(this.basketItems);
                if (this.basketItems.contents.length == 0) {
                    this.seenTotalsum = false;
                }
            });

    }
})