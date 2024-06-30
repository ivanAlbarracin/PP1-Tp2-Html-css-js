let pantalla = document.getElementById('pantalla');
let igual = document.getElementById('igual');
let teclas = document.getElementsByClassName('tecla');
let operaciones = document.getElementsByClassName('operacion');
let operacion = '';
let operando1 = '';
let operando2 = '';

for (let i = 0; i < teclas.length; i++) {
    teclas[i].addEventListener('click', () => {
        if (operacion === '') {
            operando1 += teclas[i].innerText;
            
        } else{
            operando2 += teclas[i].innerText;
        }
        pantalla.innerText += teclas[i].innerText;
    })
}
for (let i = 0; i < operaciones.length; i++) {
    operaciones[i].addEventListener('click', () => {
        switch(operaciones[i].innerText){
            case '+':
                operacion = 'suma';
                break;
            case '-':
                operacion = 'resta';
                break;
            case '*':
                operacion = 'multiplicacion';
                break;
            case '/':
                operacion = 'division';
                break;
            default:
                console.log('operacion no valida');
        }
        pantalla.innerText = '';
    })
}
igual.addEventListener('click', () => {
    operando1 = parseFloat(operando1);
    operando2 = parseFloat(operando2);
    switch(operacion){
        case 'suma':
            pantalla.innerText = operando1 + operando2;
            operando1 = operando1 + operando2;
            operando2 = '';
            break;
        case 'resta':
            pantalla.innerText = operando1 - operando2;
            operando1 = operando1 - operando2;
            operando2 = '';
            break;
        case 'multiplicacion':
            pantalla.innerText = operando1 * operando2;
            operando1 = operando1 * operando2;
            operando2 = '';
            break;
        case 'division':
            pantalla.innerText = operando1 / operando2;
            operando1 = operando1 / operando2;
            operando2 = '';
            break;
        default:
            console.log('operacion no valida');
    }
})
borrar.addEventListener('click', () => {
    operando1 = '';
    operando2 = '';
    operacion = '';
    pantalla.innerText = '';
})
punto.addEventListener('click', () => {
    if (!pantalla.innerText.includes('.')){
        if (operacion === '') {
            operando1 += punto.innerText;
        } else{
            operando2 += punto.innerText;
        }
        pantalla.innerText += punto.innerText;
    }
})