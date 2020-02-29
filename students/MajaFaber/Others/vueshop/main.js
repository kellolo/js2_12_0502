let app = new Vue ({
    el: '#app',
    data: {
      catalogItems: [],
      cartItems: [],
      foundItems: [],
      API: 'https://raw.githubusercontent.com/qimitau/js2_12_0502/master/students/MajaFaber/Project/webp/src/public/db/',
      image: 'https://placehold.it/200x150',
      cartImage: 'https://placehold.it/100x80',
      isVisibleCart: false,
      searchLine: ''
    },
    methods: {
  
      getData (url) {
        return fetch(this.API + url).then(d => d.json())
      },
  
      addProduct (good) {
        let find = this.cartItems.find (element => element.id == good.id);
        if (!find) {
            this.cartItems.push (
                {
                    title: good.title,
                    id: good.id,
                    price: +good.price,
                    quantity: 1
                }
            )
        }  else {
            find.quantity++
        }
      },
  
      removeProduct (id) {
        let find = this.cartItems.find (element => element.id == id);
        if (find.quantity > 1) {
            find.quantity--
        }  else {
            this.cartItems.splice (this.cartItems.indexOf(find), 1)
        }
      },
  
      findProduct(e) {
        e.preventDefault()
        let reg = new RegExp(this.searchLine, 'i')
        this.foundItems = this.catalogItems.filter(item => reg.test(item.title))
      }
    },
    computed: {
      getTotalPrice(){
        return this.cartItems.reduce((sum, good) => {
          return sum + good.price * good.quantity
        }, 0)
      }
    },
    mounted () {
        this.getData('/catalogData.json')
            .then (parsedData => { this.foundItems = this.catalogItems = parsedData })
        this.getData('/getBasket.json')
              .then (parsedData => { this.cartItems = parsedData.contents })
    }
  })