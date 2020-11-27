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
    
    obtenerCalificacion(calificacionnumerica) {
    let notaFinal;
    if (calificacionnumerica == 0 || calificacionnumerica ==1) {
        notaFinal = "C";
    } else if (calificacionnumerica == 2 || calificacionnumerica == 3) {
        notaFinal = "C";
    } else if (calificacionnumerica == 4 || calificacionnumerica == 5) {
        notaFinal = "C";
    } else if (calificacionnumerica == 6 || calificacionnumerica == 7) {
        notaFinal = "B";
    } else if (calificacionnumerica == 8 || calificacionnumerica == 9) {
        notaFinal = "A";
    } else if (calificacionnumerica == 10) {
        notaFinal = "A+";
    } else {
        notaFinal = "ERROR";
    }
    return notaFinal;
 }

     obtenerCercano100(numero1, numero2, numero3) {
   let cercano;
   let cercano1 = Math.abs(numero1 - 100);
   let cercano2 = Math.abs(numero2 - 100);
   let cercano3 = Math.abs(numero3 - 100);
   if (cercano1 < cercano2 && cercano1 < cercano3) {
       cercano = numero1;
   } else if (cercano2 < cercano1 && cercano2 < cercano3) {
       cercano = numero2;
   } else if (cercano3 < cercano1 && cercano3 < cercano2) {
       cercano = numero3;
   }
   return cercano;
 }

 calcular(numero1, numero2, operador){
 let resultado;
 if (operador == "+") {
    resultado = numero1 + numero2;
 } else if (operador == "-") {
    resultado = numero1 - numero2;
 } else if (operador == "*") {
    resultado = numero1 * numero2;
 } else if (operador == "/") {
    resultado = numero1 / numero2;
 } else if (operador == "%") { 
    resultado = numero1 % numero2;
 } else {
    resultado = -1;
 }
 return resultado;
 }

 costoRenta(peliculas, dia) {
    let promo; 
    let descuento;
    if (dia == 1 || dia == 5) {
    promo = (Math.trunc(peliculas / 3) * 60) + ((peliculas % 3) * 25);
     } else if (dia == 2 || dia == 4) {
           promo = ((Math.trunc(peliculas / 2)) * 25) + ((peliculas % 2) * 25);
     } else if (dia == 3) {
           descuento = (peliculas * 25) * 0.15;
           promo = (peliculas * 25) - descuento;
       } else if (dia == 6 || dia == 7) {
           promo = peliculas * 25;
       } else {
           promo = -1;
       }
       return promo;

 }

 costoBoletos(boletos, zona) {
     let costo;
     
     if (zona == 1) {
         costo = boletos * 300;
     } else if (zona == 2) {
         costo = boletos * 450;
     } else if (zona == 3) {
         costo = boletos * 700;
     } else if (costo > 2000) {
         costo = costo - (costo * 0.07);
     } else {
         costo = -1;
     }
     return costo;
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

console.log("probando obtenerCalificacion");
console.log(app.obtenerCalificacion(3));
console.log(app.obtenerCalificacion(6));
console.log(app.obtenerCalificacion(8));
console.log(app.obtenerCalificacion(10));
console.log(app.obtenerCalificacion(14));

console.log("probando obtenerCercano100");
console.log(app.obtenerCercano100(98, 50, 105));
console.log(app.obtenerCercano100(90, 70, 103));

console.log("probando calcular");
console.log(app.calcular(4, 2, "+"));
console.log(app.calcular(4, 2, "-"));
console.log(app.calcular(4, 2, "*"));
console.log(app.calcular(4, 2, "/"));
console.log(app.calcular(4, 2, "%"));
console.log(app.calcular(4, 2, "$"));

console.log("probando costoRenta");
console.log(app.costoRenta(6, 1));
console.log(app.costoRenta(96, 2));
console.log(app.costoRenta(3, 3));
console.log(app.costoRenta(6, 4));
console.log(app.costoRenta(6, 5));

console.log("probando costoBoletos");
console.log(app.costoBoletos(3, 1));
console.log(app.costoBoletos(3, 2));
console.log(app.costoBoletos(3, 3));
console.log(app.costoBoletos(3, 4));