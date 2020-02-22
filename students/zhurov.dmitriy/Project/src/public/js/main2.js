let app = new Vue({
    el: '#app',
    data: {
        catalog: {
            content: []
        },
        basket: {
            show: false,
            totalCost: 0,
            totalQty: 0,
            content: []
        },
        url: 'https://raw.githubusercontent.com/Shadzen/js2_12_0502/master/students/zhurov.dmitriy/Project/src/server/db/'
        // testData: 'Hello Vue',
        // visible: true
        //данные, создаваемые и изменяемые внутри vue-компонента
    },
    methods: {
        //функции, которые изменяют объект или данные data
        getData(url) {
            return fetch(url)
                .then(d => d.json())
        },
        toggle(el) {
            el.hidden !== undefined ? el.hidden = !el.hidden : this.$set(el, 'hidden', true)
        }
        // fooMethod () {
        //     alert (this.testData)
        // }
    },
    computed: {
        // testComputed () {
        //     return 'Computed Value: ' + this.testData
        // }
        //функции, должные возвращать значения
    },
    mounted() {
        //событие, когда vue-компонент встроился в ДОМ-модель
        this.getData(this.url + 'catalog.json')
            .then(items => {
                this.catalog.content = items
                console.log(this.catalog.content)
            })
        this.getData(this.url + 'basket.json')
            .then(items => {
                this.basket.content = items.content
                console.log(this.basket.content)
            })
    }
})