let app = new Vue ({
  el: '#app',
  data: {
    items: [],//товары каталога
    goods: [],//товары корзины
    founds: [],//найденные товары
    API: 'https://raw.githubusercontent.com/aleksey-lee/js2_12_0502/master/students/aleksey-lee/project/webpack/src/server/db',
    image: 'https://placehold.it/200x150',
    cartImage: 'https://placehold.it/100x80',
    isVisibleCart: false,
    searchLine: '',
    urlCatalog: '/catalogData.json',
    urlCart: '/getBasket.json'
  },
  methods: {

    getData (url) {
      return fetch(this.API + url).then(d => d.json())
    },

    addProduct (good) {
      let find = this.goods.find (element => element.id_product == good.id_product);
      if (!find) {
          this.goods.push (
              {
                  product_name: good.product_name,
                  id_product: good.id_product,
                  price: +good.price,
                  quantity: 1
              }
          )
      }  else {
          find.quantity++
      }
    },

    removeProduct (good) {
      let find = this.goods.find (element => element.id_product == good.id_product);
      if (find.quantity > 1) {
          find.quantity--
      }  else {
          this.goods.splice (this.goods.indexOf(find), 1)
      }
    },

    filterGoods(e) {
      e.preventDefault()
      let reg = new RegExp(this.searchLine, 'i')
      this.founds = this.items.filter(item => reg.test(item.product_name))
    }
  },

  computed: {
    getTotalPrice(){
      return this.goods.reduce((sum, good) => {
        return sum + good.price * good.quantity
      }, 0)
    }
  },

  mounted () {
    this.getData(this.urlCatalog)
      .then (parsedData => { this.founds = this.items = parsedData })

    this.getData(this.urlCart)
      .then (parsedData => { this.goods = parsedData.contents })
  }
})