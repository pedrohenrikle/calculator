const result = document.querySelector(".answer")
const calc = document.querySelector("#calc")




function insert(valor) {
    const lastChar = calc.innerHTML[calc.innerHTML.length - 1]
    
    if(isNumber(valor) || isNumber(lastChar)) {
            calc.innerHTML += valor
        }
     else if(calc.innerHTML == "" && isNumber(valor) != true) {
        alert('Você não pode iniciar com operações')
            
    }    
    
}

function clean() {
    result.innerHTML = "",
    calc.innerHTML = ""
}

function cancelEntry() {
    calc.innerHTML = " "
}

function exeCalc() {

    const lastChar = calc.innerHTML[calc.innerHTML.length - 1]

    if(isNumber(lastChar)) {
    result.innerHTML = eval(calc.innerHTML)
    calc.innerHTML = " "
    } else {
        alert('Formato usado inválido')
        calc.innerHTML = " "
    }
}

function isNumber(char) {
    const numberKeys = ["0","1","2","3","4","5","6","7","8","9"]
    
    if(numberKeys.includes(char)) {
        return true
    } else{ 
        return false
    }
}
