// Desarrolla una calculadora sencilla con dos campos de entrada y botones para sumar, restar, multiplicar y dividir.

// Usa JavaScript para realizar las operaciones y mostrar el resultado en un área de texto.

// boton para sumar y poner resultado en alert
document.getElementById('sumar').addEventListener('click', function(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let resultado = parseInt(num1) + parseInt(num2);
    alert(resultado);
});

// boton para restar y poner resultado en alert
document.getElementById('restar').addEventListener('click', function(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let resultado = parseInt(num1) - parseInt(num2);
    alert(resultado);
});

// boton para multiplicar y poner resultado en alert
document.getElementById('multiplicar').addEventListener('click', function(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let resultado = parseInt(num1) * parseInt(num2);
    alert(resultado);
});

// boton para dividir y poner resultado en alert
document.getElementById('dividir').addEventListener('click', function(){
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let resultado = parseInt(num1) / parseInt(num2);
    alert(resultado);
});