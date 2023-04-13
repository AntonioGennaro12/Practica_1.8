/* 
Operadores de Condición 
*/
console.log("\n ** Verificación de Condicioes Simples y Dobles **\n");
console.log("Cond. #1  " + (4 < 4) );
console.log("Cond. #2  " + (23 == 33) );
console.log("Cond. #3  " + (37 >= -3) );
console.log("Cond. #4  " + ("Joel" == "Joel") );
console.log("Cond. #5  " + ("joel" == "Joel") );
console.log("Cond. #6  " + ('!"$:;14;' != "123qwerty") );
console.log("Cond. #7  " + (("Joel" == "Joel") && ('!"$:;14;' == '!"$:;14;')) );
console.log("Cond. #8  " + (("Joel" == "joel") || ('!"$:;14;' == '!"$:;14;')) );
console.log("Cond. #9  " + (("joel" != "Joel") && ('!"$:;14;' != "123qwerty")) );
console.log("Cond. #10 " + (("joel" != "Joel") && !('!"$:;14;' != "123qwerty"))+(" Igual que #9 con 2da Condición Negada") ); /* niego la 2da expresión */

console.log("\n*** Verficación Edad de Usuario ***"); 
/* Verifico Edad Usando "if" y "else" fuera del console.log */
const EDAD_MINIMA = 18;
const EDAD_MAXIMA = 100;  /* Debe ser menor que este número */  
let edadUsuarioIngresado = 23;
console.log("Edad de Usuario Ingresada = " +edadUsuarioIngresado+ ".-\n");
console.log('\nVerfico Edad del Usuario usando "if" y "else" fuera del "console.log"'); 
if((edadUsuarioIngresado >= EDAD_MINIMA) && (edadUsuarioIngresado < EDAD_MAXIMA)) {
    console.log ("Chk Edad #1 = Edad de Usuario Válida!!"); }
else {
    console.log ("Chk Edad #1 = Edad de Usuario No válida!!"); }  

/* Dentro del console.log */
console.log('\nVerifico Edad del Usuario dentro del comando "console.log"');
console.log(((edadUsuarioIngresado >= EDAD_MINIMA) && (edadUsuarioIngresado < EDAD_MAXIMA)) ? 
    "Chk Edad #1 = Edad de Usuario Válida!!!" :  "Chk Edad #1 = Edad de Usuario No válida!!!");
console.log(((edadUsuarioIngresado >= EDAD_MINIMA) || (edadUsuarioIngresado < EDAD_MAXIMA)) ? 
    "Chk Edad #2 = Edad de Usuario Válida!!!" :  "Chk Edad #2 = Edad de Usuario No válida!!!");
console.log(((edadUsuarioIngresado <= EDAD_MINIMA) || (edadUsuarioIngresado < EDAD_MAXIMA)) ? 
    "Chk Edad #3 = Edad de Usuario Válida!!!" :  "Chk Edad #3 = Edad de Usuario No válida!!!");
console.log(((edadUsuarioIngresado < EDAD_MINIMA) && (edadUsuarioIngresado > EDAD_MAXIMA)) ? 
    "Chk Edad #4 = Edad de Usuario Válida!!!" :  "Chk Edad #4 = Edad de Usuario No válida!!!");
console.log(((edadUsuarioIngresado < EDAD_MINIMA) || (edadUsuarioIngresado > EDAD_MAXIMA)) ? 
    "Chk Edad #5 = Edad de Usuario Válida!!!" :  "Chk Edad #5 = Edad de Usuario No válida!!!");
console.log("\n ** Fin **\n");
    /*Fin */


