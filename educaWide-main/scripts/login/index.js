document.addEventListener('DOMContentLoaded', function() {
    function processLogin(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        const storedUser = JSON.parse(localStorage.getItem(username));
        if (storedUser && storedUser.password === password) {
            alert('Login bem-sucedido!');
            window.location.href = 'index.html';
        } else {
            alert('Usuário ou senha inválidos.');
        }
    }

    function processRegistration(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const newUsername = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;

        const user = {
            name: name,
            password: newPassword
        };

        localStorage.setItem(newUsername, JSON.stringify(user));
        alert(`Usuário ${newUsername} registrado com sucesso!`);
        window.location.href = 'login.html';
    }

    function processPasswordRecovery(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;

        if (localStorage.getItem(email)) {
            alert('Email de recuperação enviado com sucesso!');
            window.location.href = 'login.html';
        } else {
            alert('Email não encontrado.');
        }
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', processLogin);
    }

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', processRegistration);
    }

    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    if (forgotPasswordForm) {
        forgotPasswordForm.addEventListener('submit', processPasswordRecovery);
    }
});
