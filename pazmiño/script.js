alert('hola mundo');
console.log('byron pazmiño');
//
/*
if (promedio>=90) {
    console.log("A");
} else if(promedio>=70) {
    console.log("B");
} else if(promedio>=50) {
    console.log("C");
} else if(promedio>=30) {
    console.log("D");
} else if{
    console.log("E"),
*/
//Que lea el valor correspondiente a una distancia en millas marinas y las escriba
//expresadas en metros. Sabiendo que 1 milla marina equivale a 1852 metros.

var mm=1;
var metros=1853;
metros=millas*(1852/1)
console.log(metros)

//Que escribe el porcentaje descontado en una compra, introduciendo el
//precio de la tarifa y el precio pagado.
var tarifa=18%;
var pagado=4500;
pagado=(tarifa/100)*precio
console.log(descuento)

calcule el área y el perímetro de un triángulo rectángulo dada la base y la altura.

Formula del area de un triangulo rectangulo
A=(b.c)/2

*/

var saludo
var formulas
var ladoA
var ladoB
var hipotenusa
var AreaTriangulo
var perimetro

saludo=alert("bienvenido al calculo del area y el perimetro de un triangulo rectangulo")


ladoA=prompt("ingrese lado Base")
ladoA=parseFloat(ladoA)
ladoB=prompt("ingrese lado Altura")
ladoB=parseFloat(ladoB)
hipotenusa=prompt("ingrese la hipotenusa para el calculo del perimetro")
hipotenusa=parseFloat(hipotenusa)

AreaTriangulo=(ladoA*ladoB)/2
alert("Base dede un triangulo rectangulo                               "+AreaTriangulo)

perimetro=(ladoA+ladoB+hipotenusa)
alert(perimetro)
/*
perimetros=(ladoA+ladoB+hipotenusa)
alert("perimetro de un rectangulo rectangulo                           "+perimetros )
*/

/* 
exprese en horas, minutos y segundos un tiempo expresado en segundos.
*/

var segundos
var horas 
var minutos
var minutos
var total

segundos=prompt("ingres los segundos")
minutos=(segundos/60)
alert("minutos "+minutos)
horas=(minutos/60)
alert("horas "+horas)

