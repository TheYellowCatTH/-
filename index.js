let result1El = document.getElementById("result1-el")
let result2El = document.getElementById("result2-el")


function getRandomNumber(){
    return Math.floor(Math.random()*6) + 1
}


function btn1(){
    result1()
    result2El.innerText = "-"
}

function btn2(){
    result1()
    result2()
}


function result1(){
    let number1 = getRandomNumber()
    result1El.innerText = number1

}

function result2(){
    let number2 = getRandomNumber()
    result2El.innerText = number2
}

function restart(){
    result1El.innerText = "-"
    result2El.innerText = "-"
}