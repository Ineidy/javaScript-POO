class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    saludo() {
        console.log(`Hola ${this.nombre}`);
    }
}

let persona1 = new Persona("Ineidy", 17, "Femenino")
persona1.saludo();

class Estudiante extends Persona{
    constructor(nombre, edad, genero, carrera){
        super( nombre, edad, genero)
        this.carrera = carrera;
    }
    estudiar() {
        console.log(`${this.nombre} estudia ${this.carrera}`);
    }
}
document.querySelector('#contenidor').addEventListener('submit', function(event) {
    event.preventDefault();
    let nombre = document.querySelector('#name').value;
    let edad = document.querySelector('#edad').value;
    let genero = document.querySelector('#genero').value;
    let carrera = document.querySelector('#carrera').value;
    let nueva = new Persona(nombre, edad, genero);
    let nnn = new Estudiante(nombre, edad, genero, carrera);
    nueva.saludo();
    nnn.estudiar();
    
    document.querySelector('#name').value = '';
    document.querySelector('#edad').value = '';
    document.querySelector('#genero').value = '';
    document.querySelector('#carrera').value = '';
});
