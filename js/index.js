window.onload = () => {
    document.getElementById('btn-login').onclick = iniciarSesion;
    document.getElementById('form-login').onsubmit = handleonSubmit;
    document.getElementById('form-signup').onsubmit = handleonSubmit;

    const btn_registrar = document.getElementById('btn-signup');
    btn_registrar.onclick = registrarCuenta;
};

const handleonSubmit = (e) => {
    e.preventDefault();
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

const registrarCuenta = async () => {
    const username = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const age = document.getElementById('age').value;
    const location = document.getElementById('location').value;

    fetch('http://localhost:3000/user', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: username,
            password,
            age,
            location,
        }),
    })
        .then((res) => res.json())
        .then((user) => {
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = './index.html';
        });
};

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
            if (user.status === 'User not logged in') {
                alert('Usuario o contraseña incorrectos');
                return;
            } else {
                localStorage.setItem('user', JSON.stringify(user));
                window.location.href = './html/listadoPueblos.html';
            }
        });
};
