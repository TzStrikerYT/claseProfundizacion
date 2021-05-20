function math(){
    let num1 = 10
    let num2 = 10

    let resSuma = suma(num1, num2)
    let resResta = resta(num1, num2)
    let resMulti = multi(num1, num2)
    let resDivi = divi(num1, num2)
    imprimir(resSuma, resResta, resMulti, resDivi)
    
}

function suma(num1, num2){
    let resultado = num1 + num2

    return resultado
}

function resta(num1, num2){
    let resultado = num1 - num2

    return resultado
}

function multi(num1, num2){
    let resultado = num1 * num2

    return resultado
}

// === si es igual
// !== no es igual
// > si es mayor
// < si es menor

function divi(num1, num2){

    if (num2 !== 0){
        let resultado = num1 / num2
        return resultado
    } else {
       return "No se puede dividir por 0" 
    }
}

function imprimir(resSuma, resResta, resMulti, resDivi){
    console.log(`la suma es ${resSuma}`)
    console.log(`la resta es ${resResta}`)
    console.log(`la multiplicacion es ${resMulti}`)

    //console.log(typeof(number))
    if(typeof(resDivi) === "number"){
        console.log(`El rtesultado de la division es ${resDivi}`)
    } else {
        console.log(resDivi)
    }
}
math();