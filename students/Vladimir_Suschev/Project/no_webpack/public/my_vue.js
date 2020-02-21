const API = 'https://raw.githubusercontent.com/azazel87/js2_12_0502/master/students/Vladimir_Suschev/Project/wpk/src/server'
let app = new Vue({
  el: '#app',
  data: {
    items: [],
    cartitems: [],
    viewCart: false,
    viewQshow: false,
    img: 'https://placehold.it/200x150',
    cartImg: 'https://placehold.it/100x80',
    // viewQ: 0
  },

  methods: {
    getData(url) {
      return fetch(url)
        .then(d => d.json())
    },

    init() {
      this.getData(API + '/catalogData.json').then(parsedData => { this.items = parsedData })
      this.getData(API + '/getBasket.json').then(parsedData => { this.cartitems = parsedData.contents })
      // this.viewQcalc()
    },

    btnBay(el) {
      let prodId = +el.id_product
      // console.log(prodId)
      let findInCart = this.cartitems.find(element => element.id_product === prodId)
      // console.log(findInCart)
      if (!findInCart) {
        this.cartitems.push({
          product_name: el.product_name,
          id_product: prodId,
          price: +el.price,
          quantity: 1
        })
      } else {
        findInCart.quantity++
      } 
        // this.viewQcalc()
    },

    btnRemCartItem(el) {
      let prodId = +el.id_product
      let findInCart = this.cartitems.find(element => element.id_product === prodId)
      if(findInCart && findInCart.quantity >1){
        findInCart.quantity--
      }else if(findInCart){
        let n = this.cartitems.indexOf(findInCart)
        this.cartitems.splice(n, 1)
      } 
      // this.viewQcalc()
    },

    btnCart() {
      this.viewCart = !this.viewCart
      // console.log('xep')
    },

    // viewQcalc() {
    //   this.viewQ = 0
    //   this.cartitems.forEach(el => this.viewQ += el.quantity)
      
    //   console.log(viewQ)
    //   // if(viewQ > 0) {
    //   //   viewQshow = true
    //   // } viewQshow = false
    // }
  },

  computed: {

  },
  
  mounted() {
    this.init()
  }

})