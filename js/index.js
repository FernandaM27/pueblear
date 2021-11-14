window.onload = () => {
    document.getElementById('btn-login').onclick = iniciarSesion;
    document.getElementById('form-login').onsubmit = (e) => {
        e.preventDefault();
    };
};

const switchers = [...document.querySelectorAll('.switcher')];

switchers.forEach((item) => {
    item.addEventListener('click', function () {
        switchers.forEach((item) =>
            item.parentElement.classList.remove('is-active')
        );
        this.parentElement.classList.add('is-active');
    });
});

const iniciarSesion = async () => {
    const login_email = document.getElementById('login-email').value;
    const login_password = document.getElementById('login-password').value;

    if (login_email == '' || login_password == '') {
        alert('Ingrese su email y contraseña');
        return;
    }

    fetch('http://localhost:3000/logIn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: login_email, password: login_password }),
    })
        .then((res) => res.json())
        .then((user) => {
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = './html/listadoPueblos.html';
        });
};
