'use strict'

class Validate {
  constructor(form, inputsClass = '.valid'){
    this.form = form
    this.inputsClass = inputsClass
    this.inputs = this.form.querySelectorAll(this.inputsClass)

    this.regName = /^[a-zA-Zа-яА-Я]+$/;  //регулярка для имени
    this.regPhone = /^\+7\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/i;  //регулярка для телефона формат +7(000)000-0000
    this.regEmail = /^[0-9a-z_\-]+@[0-9a-z_^\.]+\.[a-z]{2,3}$/i;  //регулярка для телефона формат +7(000)000-0000
    this.regText = /.+/i;  //регулярка для текста

    this._validateForm()
  }

  _validateForm() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      if ( this._validateInputs() ) {
        console.log('Форма отправлена')
      } else {
        console.log('Форма НЕ отправлена')
      }
      
    })
  }

  _validInput(input, reg) {
    let value = input.value
    // console.log(value);
    let isSending = false;
    if ( reg.test(value) ) {
      this._addRemoveError(input)
      isSending = true;
    } else {
      this._addClassError(input)
    }
    return isSending
  }

  _validateInputs() {
    let inputsValid = [];

    this.inputs.forEach( input => {
      // console.log((this.inputsClass+'-text').slice(1))
      if( input.classList.contains( this._getClassName('name') ) ){
        inputsValid.push( this._validInput(input, this.regName) ? true : false )
      } else if( input.classList.contains( this._getClassName('phone') ) ){
        inputsValid.push( this._validInput(input, this.regPhone) ? true : false)
      } else if( input.classList.contains( this._getClassName('email') ) ){
        inputsValid.push( this._validInput(input, this.regEmail) ? true : false)
      } else if( input.classList.contains( this._getClassName('text') ) ){
        inputsValid.push( this._validInput(input, this.regText) ? true : false)
      }
    })

    return inputsValid.every(res => res )
  }

  _getClassName(text) {
    return (this.inputsClass+'-'+text).slice(1)
  }

  // _removeClassErr(){
  //   this.inputs.forEach( input => {
  //     input.classList.remove(this.inputsClass+'-error')
  // }

  _addRemoveError(input){
    input.classList.remove( (this.inputsClass+'-error').slice(1) )
  }

  _addClassError(input){
    input.classList.add( (this.inputsClass+'-error').slice(1) )
  }
}

const form = document.getElementById('form');
let valid = new Validate(form);

