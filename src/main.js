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
    
    esMultiplo(numero1, numero2) {
     if (numero1 % numero2 == 0) {
         return true;
     } else {
         return false;
     }   
    }

    calcularSalario(tipoTrabajador, horasTrabajadas) {
       let salario;
       let sueldo;
     if (tipoTrabajador == 1) {
         salario = 20;
     } else if (tipoTrabajador == 2) {
         salario = 22;
     } else if (tipoTrabajador == 3) {
         salario = 25;
     } else {
         return -1;
     }       
     sueldo = salario * horasTrabajadas;
     return sueldo;
       } 
    

}

let app = new App();

console.log("Probando: esPar");
console.log(app.esPar(444));
console.log(app.esPar(5));
console.log(app.esPar(0))

console.log("probando: esMultiplo");
console.log(app.esMultiplo(16, 4));
console.log(app.esMultiplo(9, 4));

console.log("probando calcularSalario");
console.log(app.calcularSalario(1, 8));
console.log(app.calcularSalario(2, 8));
console.log(app.calcularSalario(3, 8));
console.log(app.calcularSalario(4, 8));