const form = document.getElementById('form-contato');

form.addEventListener('submit', function (evento) {
    evento.preventDefault();

    const nome = document.getElementById('nome');
    const errNome = document.getElementById('erro-nome');
    const email = document.getElementById('email');
    const errEmail = document.getElementById('erro-email');
    const termos = document.getElementById('termos')
    const errTermos = document.getElementById('erro-termos');

    let tudoCerto = true;

    if (nome.value.trim().includes(' ') || !nome.value.trim()) {
        errNome.textContent = 'Please fill in your name.';
        tudoCerto = false;
    } else {
        errNome.textContent = '';
    }


    if (email.value.trim() === '') {
        errEmail.textContent = 'Please enter your email address.';
        tudoCerto = false;
    } else {
        errEmail.textContent = '';
    }


    if (termos.checked === false) {
        errTermos.textContent = 'You need to accept the terms.';
        tudoCerto = false;
    } else {
        errTermos.textContent = '';
    }


    if (tudoCerto) {
        alert('Message sent successfully!');
        form.reset();
    }



});
