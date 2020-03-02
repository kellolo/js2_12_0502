<template>
    <div class="callBack">
        <button class="callback-Btn" @click="toggleForm">
            <i class="fas fa-headset"></i>
        </button>
        <div class="form-block"  v-if="formStatus">
            <form  class="form" @submit ="generalCheck" action="#">
                <span class="close-form" @click="toggleForm">&#10006;</span>    
                <input type="text"  placeholder="Имя" class="form_name" v-bind:class="classForNameField"  @blur="checkValueName" v-model="name">
                <input type="tel" name="phone" placeholder="+7(000)000-0000" class="form_phone " v-bind:class="classForPhoneField" @blur="checkValuePhone" v-model="phone">
                <input type="text" name="e-mail" placeholder="e-mail" class="form_e-mail" v-bind:class="classForEmailField" @blur="checkValueE_mail" v-model="e_mail">
                <textarea name="textarea" cols="32" rows="10" class="form_textarea"></textarea>
                <button class="form_btn-submit" v-bind:class="classForBtnField" >Отправить</button> 
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
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
            formStatus: false,
        }
    },
    methods: {
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
}
</script>