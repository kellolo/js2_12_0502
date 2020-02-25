'use strict'

var app = new Vue({
    el: '#app',
    data: {
      items: [],
      url_catalog: 'https://raw.githubusercontent.com/amaremshaova/data_db/master/catalogData.json',
      userCarts: [],
      url_basket: 'https://raw.githubusercontent.com/amaremshaova/data_db/master/getBasket.json',
    },
    methods: {
        getData (url) {
            return fetch(url)
                .then(d => d.json())
        }

    },
    computed: {

    },
    mounted() {
        this.getData(this.url_catalog)
        .then (parsedData => { this.items = parsedData })
        console.log(this.items)

    }
  })