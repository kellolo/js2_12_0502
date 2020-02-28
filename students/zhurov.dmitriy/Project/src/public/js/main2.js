let app = new Vue({
    el: '#app',
    data: {
        url: 'https://raw.githubusercontent.com/Shadzen/js2_12_0502/master/students/zhurov.dmitriy/Project/src/server/db/',
        catalog: {
            content: []
        },
        basket: {
            totalCost: 0,
            totalQty: 0,
            content: []
        }
    },
    methods: {
        getData(url) {
            return fetch(url)
                .then(d => d.json())
        }
    },
    computed: {},
    mounted() {
        this.getData(this.url + 'catalog.json')
            .then(data => {
                this.catalog.content = data
                console.log(this.catalog.content)
            })
        this.getData(this.url + 'basket.json')
            .then(data => {
                this.basket = data
                console.log(this.basket)
            })
    }
})