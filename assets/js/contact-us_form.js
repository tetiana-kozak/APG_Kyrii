"use strict"

const formReq = document.querySelectorAll('._req');
const ifNameError = document.querySelector('.name-error');
const ifPhoneError = document.querySelector('.phone-error');
const ifEmailError = document.querySelector('.email-error');    

document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('contacts__form');
    if(form){
        form.addEventListener('submit', formSend);
    }
    async function formSend(e){
        e.preventDefault();
        let error = formValidate(form);
        if (error === 0) {
            form.classList.add('_sending')
            document.querySelector('.error-hiden').style.visibility = "hidden"
            let response = await fetch('send-mail.php', {
                method: 'POST',
                body: formData
            })
            if (response.ok) {
                let result = await response.json()
                alert(result.message)
                form.reset()
                form.classList.remove('_sending')
            } else {
                alert("Mistake")
                form.classList.remove('_sending')
            }
        }else{
            document.querySelector('.error-hiden').style.visibility = "visible"
        }
    };
    function formValidate(form){
        let error = 0;
        formRemoveError()
        for (let index = 0; index < formReq.length; index++) {            
            const input = formReq[index];
            formRemoveErrorBorder(input);
            if (input.value === ''){
                formAddError(input);
                error ++;
            } else if (input.classList.contains('_name')){
                if(!isNameCorrect(input)) {
                    ifNameError.innerHTML = "Only letters allowed"
                    error ++;
                }
            } else if (input.classList.contains('_phone')){
                if(input.value.length < 14) {
                    ifPhoneError.innerHTML = "Invalid phone number"
                    error ++;            
                } 
            } else if (input.classList.contains('_email')) {
                if (!isEmailCorrect(input)) {
                    ifEmailError.innerHTML = "Enter an email in the correct format"
                    error ++;
                }
            }
        }
        return error;
    };
    function formAddError(input){
        const ifEmptyError = document.querySelectorAll('.input-error');
        input.parentElement.classList.add('_error');
        input.classList.add('_error')
    }
    function formRemoveErrorBorder(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error')
    }
    function formRemoveError(){
        ifNameError.innerHTML = ""
        ifPhoneError.innerHTML = ""
        ifEmailError.innerHTML = ""
    }
    function isEmailCorrect(input){
        const result = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(input.value);
        return result;
    }
    function isNameCorrect(input){
        const isAnyLet = /^[a-zA-Zа-яА-Я ]+$/.test(input.value)
        return isAnyLet;
    }
})
