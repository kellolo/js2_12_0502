let app = new Vue({
    el: '#app',
    data:{
        items:[],
        url:'http://jsonplaceholder.typicode.com/comments'
        // testData: 'hello Vue',
        // visible: true,
        //Данные создаваемые и изменяемые внутри vue компонента
    },
    methods:{
        
        getData(url){
           return fetch(url).then(d=>d.json())
        },
        
        toggle(el){
            el.hidden ? el.hidden = !el.hidden : this.$set(el, 'hidden', true)
        }
        

        
        //Функции которые изменяют обьект или данные data
        // fooMethod(){
        //     alert(this.testData)
        // }
    },
    computed:{
        //Функции которые должны возвращать значения
        // testComputed(){
        //     return "Computed value: "+this.testData;
        // }
    },
    //Хуки жизненного цикла
    mounted() {
        this.getData(this.url).then(posts=>{
            this.items = posts;
            console.log(this.items)
        })
        
        //событие когда VUE компонент встроился в DOM модель
    }
})