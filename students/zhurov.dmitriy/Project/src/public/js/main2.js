let app = new Vue ({
    el: '#app',
    data: {
        items: [],
        url: 'https://raw.githubusercontent.com/Shadzen/js2_12_0502/master/students/zhurov.dmitriy/Project/src/server/db/'
        // testData: 'Hello Vue',
        // visible: true
        //данные, создаваемые и изменяемые внутри vue-компонента
    },
    methods: {
        //функции, которые изменяют объект или данные data
        getData (url) {
            return fetch(url)
                .then(d => d.json())
        },
        toggle (el) {
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
    // Хуки жизненного цикла
    mounted () {
        //событие, когда vue-компонент встроился в ДОМ-модель
        this.getData(this.url + 'catalog.json')
            .then(posts => {
                this.items = posts
                console.log (this.items)
            })
    }
})