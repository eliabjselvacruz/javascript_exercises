var nombre = "eliab";
var apellido = "SELVA"

var nombreMayuscula = nombre.toLocaleUpperCase();
var apellidoMinuscula = apellido.toLocaleLowerCase();

var primerCaracter = nombre.charAt(0);
var ultimoCaracter = nombre.charAt((nombre.length-1));

var nombreCompleto = `${nombreMayuscula} ${apellido}`;
var str = nombre.substr(0,3);

console.log("La primera letra de tu nombre es: "+primerCaracter);
console.log("La última letra de tu nombre es: "+ultimoCaracter);
console.log("Tu nombre tiene "+nombre.length+" letras.");
console.log("Tu nombre completo es: "+nombreCompleto);
console.log(`Los primeros 3 caracteres son ${str}`);