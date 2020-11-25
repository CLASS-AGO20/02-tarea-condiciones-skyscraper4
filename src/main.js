export default class App {
 
    esPar(numero) {
    numero = numero % 2;
     if (numero == 0) {
         return true;
     } else {
         return false;
     }   
    }
    
}

let app = new App();

console.log("Probando: esPar");
console.log(app.esPar(444));
console.log(app.esPar(5));
