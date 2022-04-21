let counter = 0
let element = document.getElementById ("divCounter")
let inputName = document.getElementById ("inputName")

console.log ("Hello")

function sayClick (){
    alert ("You on Anna Kyrii site")
}


function countClick (){
    counter ++
    element.innerText = counter
    console.log (counter)
}


inputName.addEventListener('input', event => {
    let input = event.target.value
    console.log(input)
    if (input === "hello"){
        alert ("Enter your name!")
    }
    })

