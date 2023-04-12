/* 
Operadores de Condición 
*/

console.log(4 < 4);
console.log(23 == 33);
console.log(37 >= -3);
console.log("Joel" == "Joel");
console.log("joel" == "Joel");
console.log('!"$:;14;' != "123qwerty");
console.log(("Joel" == "Joel") && ('!"$:;14;' == '!"$:;14;'));
console.log(("Joel" == "joel") || ('!"$:;14;' == '!"$:;14;'));
console.log(("joel" != "Joel") && ('!"$:;14;' != "123qwerty"));
console.log(("joel" != "Joel") && !('!"$:;14;' != "123qwerty")); /* niego la 2da expresión */
/* Usando "if" y "else" fuera del console.log */
console.log("Verfico Edad usando if y else fuera del console.log"); 
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 100;  /* Debe ser menor que este número */  
let edadUsuarioIngresado = 25;
if((edadUsuarioIngresado >= EDAD_MINIMA) && (edadUsuarioIngresado < EDAD_MAXIMA)) {
    console.log ("Edad de Usuario Válida!!"); }
else {
    console.log ("Edad de Usuario No válida!!"); }  
/* Dentro del console.log */
console.log("Condición resuelta dentro del console.log");
console.log(((edadUsuarioIngresado >= EDAD_MINIMA) && (edadUsuarioIngresado < EDAD_MAXIMA)) ? 
    "Edad de Usuario Válida!!!" :  "Edad de Usuario No válida!!!");
console.log(((edadUsuarioIngresado >= EDAD_MINIMA) || (edadUsuarioIngresado < EDAD_MAXIMA)) ? 
    "Edad de Usuario Válida!!!" :  "Edad de Usuario No válida!!!");
console.log(((edadUsuarioIngresado <= EDAD_MINIMA) || (edadUsuarioIngresado < EDAD_MAXIMA)) ? 
    "Edad de Usuario Válida!!!" :  "Edad de Usuario No válida!!!");
console.log(((edadUsuarioIngresado < EDAD_MINIMA) && (edadUsuarioIngresado > EDAD_MAXIMA)) ? 
    "Edad de Usuario Válida!!!" :  "Edad de Usuario No válida!!!");
console.log(((edadUsuarioIngresado < EDAD_MINIMA) || (edadUsuarioIngresado > EDAD_MAXIMA)) ? 
    "Edad de Usuario Válida!!!" :  "Edad de Usuario No válida!!!");

    /*Fin */


