'use strict'; 


class feedbackForm{

    constructor(){
        this.name = document.getElementById("name")
        this.email = document.getElementById('email'); 
        this.phone = document.getElementById('phone'); 
        this.message = document.getElementById('message'); 

        this._init();
    }

    showSuccess(field){
        let formGroup = field.parentNode; 
        if (field.id != 'message'){
            formGroup = formGroup.parentNode; 
            let glyphicon = formGroup.querySelector('.form-control-feedback');
            glyphicon.classList.remove('glyphicon-remove');
            glyphicon.classList.add('glyphicon-ok');
        }
            formGroup.classList.remove('has-error');
            formGroup.classList.add('has-success');
            formGroup.querySelector('.error-message').innerHTML = ''; 
          
    }

    showError(field, error_message){
        let formGroup = field.parentNode; 
        if (field.id != 'message'){
            formGroup = formGroup.parentNode; 
            let glyphicon = formGroup.querySelector('.form-control-feedback');
            glyphicon.classList.remove('glyphicon-ok');
            glyphicon.classList.add('glyphicon-remove');
            glyphicon.addEventListener('click', ()=> {field.value = ''}); 
        }

        formGroup.classList.remove('has-success');
        formGroup.classList.add('has-error');
        formGroup.querySelector('.error-message').innerHTML = error_message; 
    }

    validationMessage(){
        let str_message = this.message.value; 
        if (str_message == ''){
            let error_message ='Поле должно быть заполнено';
            this.showError(this.message, error_message); 
            return false;

        }
        else
        { this.showSuccess(this.message);
        return true;  }
    }

    validationEmail(){
        let str_email = this.email.value; 
        let regexp = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-0-9A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/
        
        if (!regexp.test(str_email)){
            let error_message = 'Некорректный ввод email';
            if (str_email == ''){
                error_message ='Поле должно быть заполнено';
            }
            this.showError(this.email, error_message); 
            return false; 
        }
        else{
            this.showSuccess(this.email); 
            return true; 
        }
    }

    validationPhone(){
        let str_phone = this.phone.value; 
        let regexp  = /^(\+7)(\()([\d]{3})(\))([\d]{3})(\-)([\d]{4})$/
        if (!regexp.test(str_phone))
        {
            let error_message ='Поле может cодержать только цифры и должно соответствовать шаблону +7(000)000-0000';
            if (str_phone == ''){
                error_message ='Поле должно быть заполнено';
            }
            this.showError(this.phone, error_message); 
            return false; 
        }
        else {
            this.showSuccess(this.phone); 
            return true; 
        }

    }

    validationName(){
        let str_name = this.name.value; 
        let regexp = /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/;
        let regexp2 = /[A-Z]|[А-Я]/;
        if (!regexp.test(str_name))
        {
            let error_message ='Поле может cодержать только буквы';
            if (str_name == ''){
                error_message ='Поле должно быть заполнено';
                return false; 
            }
            else if (!regexp2.test(str_name[0])){
                error_message ='Имя должно начинаться с заглавной буквы';
            }
            this.showError(this.name, error_message); 
            return false; 
        }
        else{
            this.showSuccess(this.name); 
            return true; 
        }
    }


    validationForm(){
        let valid_name = this.validationName();
        let valid_email = this.validationEmail();
        let valid_phone = this.validationPhone();
        let valid_message = this.validationMessage();
            
        if (valid_name&&
        valid_phone &&
        valid_email&&
        valid_message){
            return true; 
        }

    }

    _init(){
        let btn_send = document.querySelector('.btn-send');

        btn_send.addEventListener('click', (event) => {
            event.preventDefault(); 
            if (this.validationForm()){

                if (document.querySelector('.alert-danger') != null){
                    document.querySelector('.alert-danger').remove(); 
                }

                if (document.querySelector('.alert-success') == null){
                    let alert_success = document.createElement('div');
                    alert_success.innerHTML = 'Данные успешно добавлены!'; 
                    alert_success.classList.add('alert', 'alert-success');
                    document.querySelector('.container').insertBefore(alert_success, document.querySelector('.container').firstChild);
                }
            }
            else
            {
                if (document.querySelector('.alert-success') != null){
                    document.querySelector('.alert-success').remove(); 
                }

                if (document.querySelector('.alert-danger') == null){
                let alert_error = document.createElement('div')
                alert_error.innerHTML = 'Неверный ввод данных!'; 
                alert_error.classList.add('alert', 'alert-danger');
                document.querySelector('.container').insertBefore(alert_error, document.querySelector('.container').firstChild); 
                }
            }

        });
    }


}

let obj = new feedbackForm(); 