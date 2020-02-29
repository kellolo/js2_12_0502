class ContactForm {
    constructor(container = '.form'){
        this.container = container; 
        this.userName = [];
        this.userPhone = [];
        this.userEmail = [];

        this._init();  
    }
    validName(value) {
        let rex = /[А-Яа-яЁёA-Za-z]/g;
        this.userName = value.match(rex);
        console.log(this.userName);
    }
    validPhone(value) {
        let rex = /\d+/g;
        this.userPhone = value.match(rex);
        console.log(this.userPhone);
    }
    validEmail(value) {
        let rex = /[0-9]/g;
        this.userEmail = value.match(rex);
        console.log(this.userEmail);
    }

    addError(){
        let error = 'Поле заполнено неверно'
        if(this.userName === null){
            document.querySelector('.name').classList.add('formerror');
            document.querySelector('.form_text_error').textContent = error;
        }else{
            document.querySelector('.name').classList.remove('formerror');
            document.querySelector('.form_text_error').textContent = null;
        }
        if(this.userPhone === null){
            document.querySelector('.phone').classList.add('formerror');
            document.querySelector('.form_text_error').textContent = error;
        }else{
            document.querySelector('.phone').classList.remove('formerror');
            document.querySelector('.form_text_error').textContent = null;
        }if(this.userEmail === null){
            document.querySelector('.email').classList.add('formerror');
            document.querySelector('.form_text_error').textContent = error;
        }else{
            document.querySelector('.email').classList.remove('formerror');
            document.querySelector('.form_text_error').textContent = null;
        }
    }

    _init() {
        document.querySelector('.form').addEventListener('submit', e=> {
            e.preventDefault();
            this.validName(document.querySelector('.name').value);
            this.validPhone(document.querySelector('.phone').value);
            this.validEmail(document.querySelector('.email').value);

            this.addError();
        });
    }


}

const ctForm = new ContactForm();
