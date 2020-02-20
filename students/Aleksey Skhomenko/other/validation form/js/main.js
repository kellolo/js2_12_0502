/* 
    1. Дан большой текст, в котором для оформления прямой речи используются одинарные кавычки. 
        Придумать шаблон, который заменяет одинарные кавычки на двойные.
    2. Улучшить шаблон так, чтобы в конструкциях типа aren't одинарная кавычка не заменялась на двойную.
    3. *Создать форму обратной связи с полями: Имя, Телефон, E-mail, текст, кнопка Отправить. 
        При нажатии на кнопку Отправить произвести валидацию полей следующим образом:
        a. Имя содержит только буквы.
        b. Телефон имеет вид +7(000)000-0000.
        c. E-mail имеет вид mymail@mail.ru, или my.mail@mail.ru, или my-mail@mail.ru.
        d. Текст произвольный.
        e. Если одно из полей не прошло валидацию, необходимо выделить это поле красной рамкой и сообщить пользователю об ошибке. 
*/

// задания 1 и 2 выводятся в консоль
let text = `Oleg: 'I'm kill you!'
Olga: 'NO! Is this just because i'm n't prepared your's breakfast?'`
let rule1 = /\'/gm
let rule2 = /(?![in])'(?![stm])/gmi
console.log("Исходный текст:\n",text)
console.log("Задание 1:\n",text.replace(rule1,"\""))
console.log("Задание 2:\n",text.replace(rule2,"\""))

// задание 3
class Validator {
    constructor(form = document.querySelector("form")){
        this.form = form
        this.inputs = {
            this.name: form.elements.name,
            this.phone: form.elements.phone,
            this.mail: form.elements.mail,
            this.text: form.elements.text
        }
        this.checking = false
        this.rules = {
            name: /^[a-zа-яё]+$/i,
            phone: /^\+7\(\d{3}\)\d{3}-\d{4}$/,
            mail: /^[0-9a-z]+\.*\-*[0-9a-z]+@[0-9a-z]+\.[0-9a-z]+$/i,
            text: /\S/i
        }
        this._init()
    }

    _init() {
        // Слушатель недает отправить форму если она не проходит проверку
        this.form.addEventListener('submit', evt => {
            if (this.check_all() === false) {
              evt.preventDefault();
              evt.stopPropagation();
            }
            //когда кнопку сабмит нажмут первый раз - вешаем еще один слушатель на изменение данных в форме
            if (!this.checking) {
                this.checking = true
                this.form.addEventListener('input', evt => {this.check(evt.target)})
            }
        });
        
    }

    check(target) {
		let isOK = this.rules[target.id].test(target.value)
        target.classList.toggle("is-valid", isOK)
        target.classList.toggle("is-invalid", !isOK)
		return isOK
	}
	
	check_all() {
        let valid = true

        for (let input in this.inputs) {
            let isOK = this.check(this.inputs[input])
            if (valid && !isOK) valid = false // input не прошел проверку валидности - ставим флаг, что форму нельзя отправлять
        };
        return valid
    }
}

let test = new Validator()
