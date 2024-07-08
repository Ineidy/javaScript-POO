class Persona {
    constructor(nombre, edad, genero) {
        this.nombre = nombre;
        this.edad = edad;
        this.genero = genero;
    }
    saludo() {
        console.log(`Hola ${this.nombre}`);
        alert(`Hola ${this.nombre}`);
    }
}

document.querySelector('#contenidor').addEventListener('submit', function(event) {
    event.preventDefault();
    let nombre = document.querySelector('#name').value;
    let edad = document.querySelector('#edad').value;
    let genero = document.querySelector('#genero').value;
    let nueva = new Persona(nombre, edad, genero);
    nueva.saludo();

    document.querySelector('#name').value = '';
    document.querySelector('#edad').value = '';
    document.querySelector('#genero').value = '';
});
