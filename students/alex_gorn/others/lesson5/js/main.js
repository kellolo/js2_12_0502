const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    // Импорт важных данных!
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'https://placehold.it/200x150',
        imgCatalogSmall: 'https://placehold.it/100x150',
        filteredGoods: [],
        searchLine: '',
        isVisible: false

    },
    // Методы по продуктам
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product){
            console.log(product.id_product);
        },
        FilterGoods() {
            const regexp = new RegExp(this.searchLine, 'i');
            this.filteredGoods = this.products.filter(product => {
                return regexp.test(product.product_name);
            });
        }
    },
    // Мясище
    mounted(){
       this.getJson(`${API + this.catalogUrl}`)
           .then(data => {
               for(let el of data){
                   this.products.push(el);
                   this.filteredGoods.push(el)
               }
           });
        this.getJson(`getProducts.json`)
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filteredGoods.push(el)
                }
            })


    },
    // А тут уже тележка катится...
    computed: {
        divClasses() {
            return {
                invisible: !this.isVisible,
                '': this.isVisible
            }
        }
    }
})
