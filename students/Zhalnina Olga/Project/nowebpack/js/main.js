const API = 'https://raw.githubusercontent.com/OlgaZh-UX/js2_12_0502/master/students/Zhalnina%20Olga/Project/iswebpack/src/server/db/'

let app = new Vue ({
    el: '#app',
    data: {
        items: [],
        basket: [],
        image: 'https://placehold.it/200x150',
        cartImage: 'https://placehold.it/100x80',
        imgURL: '../../Project/iswebpack/src/public/img',                
        catalogURL: '/catalog.json',
        basketURL: '/basket.json',
        classInvisible: false,
        showBasket: false
    },
    methods: {
        getData (url) {
            return fetch(API + url).then(d => d.json())                    
        },
        addProduct (item) {
            let find = this.basket.find (element => element.id_product == item.id_product)                    
            if (!find) {
                item.quantity = 1
                this.basket.push (item)                            
            }  else {
                find.quantity++
            }
        },
        removeProduct (item) {
            let find = this.basket.find (element => element.id_product == item.id_product)                    
            if (find.quantity > 1) {
                find.quantity--
            }  else {
                this.basket.splice (this.basket.indexOf(find), 1)
            }                    
        }                        
    },
    computed:{
        
    },
    mounted () {
        this.getData(this.catalogURL)
        .then(posts => {
            this.items = posts            
        })
        
        this.getData(this.basketURL)
        .then(posts => {
            this.basket = posts.contents                
        })
    }
})       