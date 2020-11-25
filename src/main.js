export default class App {
 
    esPar(numero) {
     if (numero == 0) {
         return false;
     } else if (numero % 2 == 0) {
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
console.log(app.esPar(0))