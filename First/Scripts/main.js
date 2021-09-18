let miImage = document.querySelector('img');
miImage.onclick = function() {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'Images/AAA.svg') {
        miImage.setAttribute('src', 'Images/UUU.png');
    } else {
        miImage.setAttribute('src', 'Images/AAA.svg');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector('h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Introduzca su nombre.');
    if (!miNombre) {
        estableceNombreUsuario();
    } else {
        localStorage.setItem('nombre', miNombre);
        miTitulo.innerHTML = 'Mozilla is cool, ' + miNombre;
    }
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}