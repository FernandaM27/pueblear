window.onload = () => {
    const sesion = document.getElementById('cerrarSesion');
    sesion.onclick = cerrarSesion;
};

function cerrarSesion() {
    localStorage.removeItem('user');
    window.location.href = '../index.html';
}

//write a hello world function
export default function helloWorld() {
    console.log('Hello World');
}

 