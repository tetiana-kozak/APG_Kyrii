// $("input[type=tel]")
// .change(function() {
//     let phone, element;
//     element = $(this);
//     element.unmask();
//     phone = element.val().replace(/\D/g, "");
//     if (phone.length > 10) {
//     element.mask("+38(999) 999 99 99", {placeholder: "+38(999) 999 99 99"});
//     } else {
//     element.mask("+38(999) 999 99 99", {placeholder: "+38(999) 999 99 99"});
//     }
// })
// .trigger("change");


const phoneId = document.getElementById('inp-phone')
if (phoneId) {
    
    phoneId.addEventListener('input', function (e) {
    let x = e.target.value.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2] ? x[1] : '+(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '');
});
}