let app = new Vue({
    el: '#app',
    data:{
        name: '',
        phone : '',
        e_mail: '',
        statusNameField: false,
        statusPhoneField: false,
        statusEmailField: false,
        resultCheckName: false,
        resultCheckPhone: false,
        resultChecke_mail: false,
        resultGEneralCheck: false,
        search:'',
        filterdElements:[],
        cartStatus:  false,
        formStatus: false,
        catalogItems:[],
        cartItems:[],
        url_catalog:'https://raw.githubusercontent.com/GrigoRASH6000v/js2_12_0502/master/students/Grigoriy_Mikirtumov/Project/src/public/Data%20base/catalogData.json',
        url_cart: 'https://raw.githubusercontent.com/GrigoRASH6000v/js2_12_0502/master/students/Grigoriy_Mikirtumov/Project/src/public/Data%20base/getBasket.json',
    },
    methods:{
        
        getData(url){
           return fetch(url).then(d=>d.json())
        },
        toggleCart(){
            this.cartStatus ? this.cartStatus = false : this.cartStatus = true
        },
        toggleForm(){
            this.formStatus ? this.formStatus = false : this.formStatus = true
            this.statusNameField = false
            this.statusPhoneField = false
            this.statusEmailField = false
            this.resultCheckName = false
            this.resultCheckPhone = false
            this.resultChecke_mail = false
            this.resultGEneralCheck = false
            this.name= ''
            this.phone = ''
            this.e_mail= ''
        },
        addItemToCart(item){
           if(!this.check(item)){
                this.$set(item, 'quantity', 1)
                this.cartItems.contents.push(item)
                this.cartItems.countGoods++
           }else{
                this.cartItems.contents[this.findIndexItem(item)].quantity++
           }
           this.amountItem()
        },
        removeItem(item){
            this.cartItems.contents.splice(this.findIndexItem(item), 1)
            this.amountItem()
            this.cartItems.countGoods--
        },
        check(elItem){
            
           return  this.cartItems.contents.find(el=>el.id_product==elItem.id_product)
        },
        findIndexItem(elItem){
            return this.cartItems.contents.findIndex(el=>el.id_product==elItem.id_product)
        },
        amountItem(){
            let sum=0
            this.cartItems.contents.forEach(el => sum+=el.price*el.quantity);
            this.cartItems.amount = sum
        },
        filtredItem(){
            let regexp = new RegExp(this.search, 'i')
            this.filterdElements = this.catalogItems.filter((el)=>{
                return regexp.test(el.product_name)
            })
        },
        checkValueName(){
            let regexpName = /[a-zА-яё]+$/gi
            this.resultCheckName = regexpName.test(this.name)
            this.statusNameField=true
            this.generalCheck()
        },
        checkValuePhone(){
            let regexpPhone = /^\+7\(\d{3}\)\d{3}\-\d{4}$/gi
            this.resultCheckPhone = regexpPhone.test(this.phone)
            this.statusPhoneField = true
            this.generalCheck()
        },
        checkValueE_mail(val){
            let regexpE_mail = /^[\w._-]+\w+@\w+\.\w{2,4}$/gi
            this.resultChecke_mail = regexpE_mail.test(this.e_mail)
            this.statusEmailField = true
            this.generalCheck()
        },
        generalCheck(){
            if(this.resultCheckName && this.resultCheckPhone && this.resultChecke_mail){
                this.resultGEneralCheck = true;
            }
        }
        
    },
    computed:{
        classForNameField() {
            return {
                valid: this.resultCheckName && this.statusNameField, novalid: !this.resultCheckName && this.statusNameField 
            }
        },
        classForPhoneField() {
            return {
                valid: this.resultCheckPhone && this.statusPhoneField, novalid: !this.resultCheckPhone && this.statusPhoneField 
            }
        },
        classForEmailField() {
            return {
                valid: this.resultChecke_mail && this.statusEmailField, novalid: !this.resultChecke_mail && this.statusEmailField 
            }
        },
        classForBtnField(){
            return {
                formValid: this.resultGEneralCheck && this.statusEmailField && this.statusPhoneField && this.statusNameField, formNovalid: !this.resultGEneralCheck && this.statusEmailField && this.statusPhoneField && this.statusNameField 
            }
        }
    },
    mounted() {
        this.getData(this.url_catalog).then(items=>{
            this.catalogItems = items;
            this.filterdElements = [...this.catalogItems]
        })
        this.getData(this.url_cart).then(items=>{
            this.cartItems = items
        })
    }
})


