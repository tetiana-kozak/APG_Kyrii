"use strict"

document.addEventListener('DOMContentLoaded', function(){
    const form = document.getElementById('contacts__form');
    if(form){

        form.addEventListener('submit', formSend);
    }

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

            // inputs verification
           
            if (input.value === ''){
                formAddError(input);
                error ++;
            } else if (input.classList.contains('_name')){
                
                if(!isNameCorrect(input)) {

                    formAddError(input);
                    error ++;
                }
            } else if (input.classList.contains('_phone')){
                
                if(input.value.length < 14) {
                    // console.log(input.value.length)
                    formAddError(input);
                    error ++;            
                } 
            } else if (input.classList.contains('_email')) {
            
                if (!isEmailCorrect(input)) {
                    
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


    function isEmailCorrect(input){
        const result = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(input.value);
        console.log("email", result)
        return result;
    }
    function isNameCorrect(input){
        const isAnyLet = /^[a-zA-Z]+$/.test(input.value)
        console.log(isAnyLet)
        return isAnyLet;
    }
    // function isNameCorrect(input){
    //     const isAnyNum = /^[0-9]+$/.test(input.value)
    //     console.log(isAnyNum)
    //     return isAnyNum;
    // }
})








