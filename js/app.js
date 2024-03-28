// 5- Crea una clase llamada Persona que siga las siguientes condiciones:
// Sus propiedades son: nombre, edad, DNI, sexo , peso , altura y  año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
// Los métodos que se debe poder utilizar  son:
// mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona creada y cual es el rasgo característico de esta generación.
// Para realizar este método tener en cuenta la siguiente tabla de generaciones:
// esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la persona es mayor de edad.
// mostrarDatos: devuelve toda la información del objeto.
class Persona  {
    constructor(nombre, DNI, sexo, peso, altura, año){
        this.nombre = nombre;
        this.DNI = DNI;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        this.año = año;
    }
    mostrarGeneracion(){
        if (1994 < this.año && this.año <= 2010) {
            console.log("la persona es generacion z");
        } else if (1981 < this.año && this.año <= 1994) {
            console.log("la persona es generación y");
        } else if (1969 < this.año && this.año<= 1980) {
            console.log("la persona es generación x");
        } else if (1949 < this.año && this.año<= 1969) {
            console.log("la persona es generación Baby Boom")
        } else if (1930 < this.año && this.año < 1949) {
            console.log("la persona es generación Silent");
        } else {
            console.log("el año no esta dentro de los rangos validos");
        
        }
    }  
    comprobarEdad() {
        const añoActual = new Date().getFullYear();
        const edad= añoActual - this.año;
        if (edad >= 18) {
            console.log ('La persona es mayor de edad');
        }else{
            console.log('La persona es menor de edad')
        }
    }
    // mostrarDatos(){

    // }



}


const usuarioPersona = new Persona('Ariel', '12345678A', 'M', 70, 170, 2015);
usuarioPersona.mostrarGeneracion();
//console.log(usuarioPersona.mostrarDatos()); 
usuarioPersona.comprobarEdad();
 