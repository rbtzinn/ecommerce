function checkPasswordCriteria() {
    const senha = document.getElementById('senha').value;

    const minimoCaracteres = document.getElementById('minimo-caracteres');
    const maiuscula = document.getElementById('maiuscula');
    const minuscula = document.getElementById('minuscula');
    const numero = document.getElementById('numero');
    const caractereEspecial = document.getElementById('caractere-especial');

    // Verifica cada critério da senha
    if (senha.length >= 8) {
        minimoCaracteres.classList.remove('invalid');
        minimoCaracteres.classList.add('valid');
    } else {
        minimoCaracteres.classList.remove('valid');
        minimoCaracteres.classList.add('invalid');
    }

    if (/[A-Z]/.test(senha)) {
        maiuscula.classList.remove('invalid');
        maiuscula.classList.add('valid');
    } else {
        maiuscula.classList.remove('valid');
        maiuscula.classList.add('invalid');
    }

    if (/[a-z]/.test(senha)) {
        minuscula.classList.remove('invalid');
        minuscula.classList.add('valid');
    } else {
        minuscula.classList.remove('valid');
        minuscula.classList.add('invalid');
    }

    if (/\d/.test(senha)) {
        numero.classList.remove('invalid');
        numero.classList.add('valid');
    } else {
        numero.classList.remove('valid');
        numero.classList.add('invalid');
    }

    if (/[@$!%*?&]/.test(senha)) {
        caractereEspecial.classList.remove('invalid');
        caractereEspecial.classList.add('valid');
    } else {
        caractereEspecial.classList.remove('valid');
        caractereEspecial.classList.add('invalid');
    }
}

function checkPasswordMatch() {
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;
    const confirmarSenhaValidacao = document.getElementById('confirmar-senha-validacao');

    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) {
        confirmarSenhaValidacao.textContent = 'As senhas não correspondem.';
        confirmarSenhaValidacao.style.color = 'red';
    } else {
        confirmarSenhaValidacao.textContent = 'Senhas correspondem.';
        confirmarSenhaValidacao.style.color = 'green';
    }
}

function validatePasswords() {
    const senha = document.getElementById('senha').value;
    const confirmarSenha = document.getElementById('confirmar-senha').value;

    // Checa a validade dos critérios
    const senhaValida = senha.length >= 8 &&
                        /[A-Z]/.test(senha) &&
                        /[a-z]/.test(senha) &&
                        /\d/.test(senha) &&
                        /[@$!%*?&]/.test(senha);

    // Se os critérios forem válidos, verificar se as senhas coincidem
    if (!senhaValida) {
        alert('Por favor, preencha os critérios de senha corretamente antes de cadastrar.');
        return false; // Impede o envio do formulário
    }

    // Verifica se as senhas coincidem
    if (senha !== confirmarSenha) {
        alert('As senhas não correspondem.');
        return false; // Impede o envio do formulário
    }

    return true; // Permite o envio do formulário
}
