// let counter = 0
// let element = document.getElementById ("divCounter")
// let inputName = document.getElementById ("inputName")

// console.log ("Hello")

// function sayClick (){
//     alert ("You on Anna Kyrii site")
// }


// function countClick (){
//     counter ++
//     element.innerText = counter
//     console.log (counter)
// }


// inputName.addEventListener('input', event => {
//     let input = event.target.value
//     console.log(input)
//     if (input === "hello"){
//         alert ("Enter your name!")
//     }
//     })



// let sum = 0, bool = true; 
// for (i = 0; i < 10; i++) {
//     console.log (i);
//     sum = sum + i;
//     if (i>5) {
//         bool = !bool
//         console.log (bool); 
//     }
//     console.log ("sum = " + sum);
// }


// const company = {};
// company.name = "Sweet Palyanytsi";
// company.ceo = {};
// company.ceo.firstName = "Vanya";
// company.ceo.secondName = "Hryshko";
// company.ceo.$salary = 1000000
// company.ceo["$salar/dollar"] = 2000000

// console.log(company.ceo["$salar/dollar"])


function makeMultiplier(multiplier, y){
    let number2 = function (x){
        let result = multiplier * x + y
        console.log(result)
        return result     
    }
return number2
}

let multiplyBy3 = makeMultiplier(3,2)
// console.log(multiplyBy3(10))
// console.log(multiplyBy3(20))
multiplyBy3(10)
// multiplyBy3(20)

let multiplyBy4 = makeMultiplier(4,4)
// console.log(multiplyBy4(10))
// console.log(multiplyBy4(20))
multiplyBy4(10)
multiplyBy4(20)
