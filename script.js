var numero = parseInt(prompt("Digite um numero para ver sua tabuada"));
var contador = 0;
var resultado = 0;

while (contador <= 10) {
  resultado = numero * contador;
  document.write(numero + " x " + contador + " = " + resultado + "<br>");
  contador++;
}

var numero = parseInt(prompt("Digite um numero para ver sua tabuada"));
var contador = 0;
var resultado = 0;

do {
  resultado = numero * contador;
  document.write(numero + " x " + contador + " = " + resultado + "<br>");
  contador++;
} while (contador <= 10);
