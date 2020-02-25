
let app = new Vue ({
  el: '#app',
  data: {
      items: [],
      url: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json',
      image: 'https://via.placeholder.com/200x150',
      description: 'Product',
      inStock: false,
      cart: 0
  },
  methods: {
      //функции, которые изменяют объект или данные data
      getData (url) {
          return fetch(url)
              .then(d => d.json())
      },

      addToCart () {
          this.cart += 1
      }
  },
  computed: {
      //функции, должные возвращать значения
  },
  // Хуки жизненного цикла
  mounted () {
      //событие, когда vue-компонент встроился в ДОМ-модель
      this.getData(this.url)
          .then(product => {
              this.items = product
          })
  }
})