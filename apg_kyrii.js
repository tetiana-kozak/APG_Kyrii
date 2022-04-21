let counter = 0
let element = document.getElementById ("divCounter")


console.log ("Hello")

function sayClick (){
    alert ("You on Anna Kyrii site")
}


function countClick (){
    counter ++
    element.innerText = counter
    console.log (counter)
}