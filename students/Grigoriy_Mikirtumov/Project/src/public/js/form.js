class FormBlank {
    constructor(container){
        this.container =document.querySelector(container);
        this.name = '';
        this.phone = '';
        this.e_mail = '';
        this.resultCheckName = false;
        this.resultCheckPhone = false;
        this.resultChecke_mail = false;
        this._init()
    }
    _init(){
        this.render()
        this.initListener()
    }
    checkValueName(val){
        let regexpName = /[a-zА-яё]+$/gi
        this.resultCheckName = regexpName.test(val)
    }
    checkValuePhone(val){
        let regexpPhone = /^\+7\(\d{3}\)\d{3}\-\d{4}$/gi
        this.resultCheckPhone = regexpPhone.test(val)
    }
    checkValueE_mail(val){
        let regexpE_mail = /^[\w._-]+\w+@\w+\.\w{2,4}$/gi
        this.resultChecke_mail = regexpE_mail.test(val)
    }
    initListener(){
        const closeBtn = this.container.querySelector('.close-form');
        closeBtn.addEventListener('click', ()=>{
            this.container.classList.toggle('hidden')
        })
        const callBackBtn = document.querySelector('.callback-Btn');
        callBackBtn.addEventListener('click', ()=>{
            this.container.classList.toggle('hidden')
        })
        let formBtn = this.container.querySelector('.form_btn-submit')
        const formInputs = [...this.container.querySelectorAll('input')]
        formBtn.addEventListener('click', (evt)=>{
            evt.preventDefault();
            formInputs.forEach((el)=>{
                if(el.name=="name"){
                    this.checkValueName(el.value);
                    this.name=el.value
                }
                if(el.name=="phone"){
                    this.checkValuePhone(el.value);
                    this.phone=el.value
                }
                if(el.name=="e-mail"){
                    this.checkValueE_mail(el.value);
                    this.e_mail=el.value;
                }
            })
            this.generalCheck()
        })
    }
    generalCheck(){
        this.resultCheckName ? document.querySelector('#form_name').style.borderColor="greenyellow" : document.querySelector('#form_name').style.borderColor="red"
        this.resultCheckPhone ? document.querySelector('#form_phone').style.borderColor="greenyellow" : document.querySelector('#form_phone').style.borderColor="red"
        this.resultChecke_mail ? document.querySelector('#form_e-mail').style.borderColor="greenyellow" : document.querySelector('#form_e-mail').style.borderColor="red"
        console.log(this.resultCheckPhone, 'result check phone')
        console.log(this.resultChecke_mail, 'result check email')
        if(this.resultCheckName && this.resultCheckPhone && this.resultChecke_mail){
            this.container.querySelector('.form_btn-submit').style.backgroundColor = 'greenyellow'
            
            
        }else{
            this.container.querySelector('.form_btn-submit').style.backgroundColor = 'red'
        }
    }
    render(){
        this.container.innerHTML = `<form  class="form">
                                        <span class="close-form">&#10006;</span>    
                                        <input type="text" name="name" placeholder="Имя" class="form_name" id="form_name">
                                        <input type="tel" name="phone" placeholder="+7(000)000-0000" class="form_phone" id="form_phone">
                                        <input type="text" name="e-mail" placeholder="e-mail" class="form_e-mail" id="form_e-mail">
                                        <textarea name="textarea" cols="32" rows="10" class="form_textarea"></textarea>
                                        <button class="form_btn-submit">Отправить</button> 
                                    </form>`
        
    }
}

let form = new FormBlank('.form-block');


