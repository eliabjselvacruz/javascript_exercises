var edad = 27;
edad = edad + 1;
edad += 1;

var peso = 100;
peso = peso - 10;
peso -= 6;

var precioCaja = 681.6;

//Esta operación se realiza para tener una mayor precisión en los decimales
var total = precioCaja * 100 * 3 / 100;

var total = Math.round(precioCaja * 100 * 3) / 100;
var totalStr = total.toFixed(3);
var montoT = parseFloat(totalStr);

