let app = new Vue({
    el: '#app',
    data:{
        testData: 'hello Vue',
        visible: true,
        //Данные создаваемые и изменяемые внутри vue компонента
    },
    methods:{
        //Функции которые изменяют обьект или данные data
        fooMethod(){
            alert(this.testData)
        }
    },
    computed:{
        //Функции которые должны возвращать значения
        testComputed(){
            return "Computed value: "+this.testData;
        }
    },
    //Хуки жизненного цикла
    mounted: {
        //событие когда VUE компонент встроился в DOM модель
    }
})