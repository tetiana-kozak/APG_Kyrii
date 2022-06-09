"use strict"

document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('contacts__form');
    form.addEventListener('submit', formSend);

    async function formSend(e){
        e.preventDefault();

        let error = formValidate(form);

        if (error === 0) {
            
        }else{
            alert('Enter fields')
        }
    };

    function formValidate(form){
        let error = 0;
        let formReq = document.querySelectorAll('._req');

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            // inpurs verification
           
            if (input.value === ''){
                formAddError(input);
                error ++;
            } else if (input.classList.contains('_email')) {
                
                if (emailTest(input)) {
                    
                    formAddError(input);
                    error ++;
                }
            } else if (input.classList.contains('_name')){
                if(nameTest(input)) {

                    formAddError(input);
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
    function formRemoveError(input){
        input.parentElement.classList.remove('_error');
        input.classList.remove('_error')
    }

    // email test

    function emailTest(input){
        return /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(input.value);
    }
    function nameTest(input){
        return /^[0-9]+$/.test(input.value);
    }
})