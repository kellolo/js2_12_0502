'use strict'

var app = new Vue({
    el: '#app',
    data: {
      items: [],
      url_catalog: 'https://raw.githubusercontent.com/amaremshaova/data_db/master/catalogData.json',
      carts: [],
      url_basket: 'https://raw.githubusercontent.com/amaremshaova/data_db/master/getBasket.json',
    },
    methods: {
        getData (url) {
            return fetch(url)
                .then(d => d.json())
        },

        addProduct(el){
            let find = this.carts.find (element => element.id_product == el.id_product);
            if (!find) {
                let cart = {
                    product_name: el.product_name,
                    id_product: el.id_product,
                    price: el.price,
                    img: el.img,
                    quantity: 1
                }
                this.carts.push(cart); 
            }  else {
                find.quantity++
            }
        },


        removeProduct(el){
            let find = this.carts.find (element => element.id_product == el.id_product);
            if (find.quantity > 1) {
            find.quantity--}
              else {
            this.carts.splice (this.carts.indexOf(find), 1)
            }
        },

        showBasket(){
            document.querySelector('.cart-block').classList.toggle('invisible');
        }
    },
    computed: {

    },
    mounted() {
        this.getData(this.url_catalog)
        .then (parsedData => { this.items = parsedData
        }),
        
        this.getData(this.url_basket)
        .then (parsedData => { this.carts = parsedData.contents 
        })
    }
  })