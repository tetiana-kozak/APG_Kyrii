"use strict"

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
        let formData = new FormData(form);
        if (error === 0) {
            form.classList.add('_sending')
            document.querySelector('.error-hiden').style.visibility = "hidden"
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            })
            if (response.ok) {
                let result = await response.json()
                document.querySelector('.form-response').classList.add('_visible')
                document.querySelector('.response').innerHTML = result.message
                form.reset()
                form.classList.remove('_sending')
            } else {
                alert("Something went wrong! Please, try again later!")
                form.classList.remove('_sending')
            }
        }else{
            document.querySelector('.error-hiden').style.visibility = "visible"
        }
    };
    function formValidate(form){
        let error = 0;
        const formReq = document.querySelectorAll('._req');
        formRemoveError()
        for (let index = 0; index < formReq.length; index++) {            
            const input = formReq[index];
            formRemoveErrorBorder(input);
            if (input.value === ''){
                formAddError(input);
                error ++;
            } else if (input.classList.contains('_name')){
                if(isNameCorrect(input)) {
                    ifNameError.innerHTML = "Only letters allowed"
                    error ++;
                }
            } else if (input.classList.contains('_phone')){
                if(input.value.length < 14) {
                    formAddError(input);
                    ifPhoneError.innerHTML = "Invalid phone number"
                    error ++;            
                } 
            } else if (input.classList.contains('_email')) {
                if (!isEmailCorrect(input)) {
                    formAddError(input);
                    ifEmailError.innerHTML = "Enter a valid email (name@email.com)"
                    error ++;
                }
            }
        }
        return error;
    };
    function formAddError(input){
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
        const isAnyLet = /^[0-9]*[.,]?[0-9]+$/.test(input.value)
        return isAnyLet;
    }
})
