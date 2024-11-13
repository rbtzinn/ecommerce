document.addEventListener('DOMContentLoaded', function () {
    console.log("Arquivo scripts.js carregado com sucesso");

    // Verificando os botões de compra
    const buttons = document.querySelectorAll('.comprar-btn');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const nome = this.getAttribute('data-nome');
            const descricao = this.getAttribute('data-descricao');
            const imagem = this.getAttribute('data-imagem');

            document.getElementById('modal-nome').textContent = nome;
            document.getElementById('modal-descricao').textContent = descricao;
            document.getElementById('modal-imagem').src = imagem;

            const compraModal = new bootstrap.Modal(document.getElementById('compraModal'));
            compraModal.show();
        });
    });

    // Verificando o container de zoom
    const zoomContainer = document.querySelector('.zoom-container');
    if (zoomContainer) {
        const image = document.getElementById('modal-imagem');
        zoomContainer.addEventListener('mousemove', (e) => {
            const rect = zoomContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const xPercent = (x / rect.width) * 200;
            const yPercent = (y / rect.height) * 200;

            image.style.transformOrigin = `${xPercent}% ${yPercent}%`;
        });

        zoomContainer.addEventListener('mouseleave', () => {
            image.style.transformOrigin = 'center';
        });
    }

    // Verificando o toggle de modo escuro
    const toggleSwitch = document.getElementById('dark-mode-toggle');
    if (toggleSwitch) {
        toggleSwitch.addEventListener('change', function () {
            document.body.classList.toggle('dark-mode', this.checked);
        });
    }

    // Verifica o nome do usuário
    const nomeUsuario = localStorage.getItem('usuarioNome');
    const usuarioNomeElement = document.getElementById('usuario-nome');
    const usuarioLinkElement = document.getElementById('usuario-link');
    const usuarioNomeElement2 = document.getElementById('usuario-nome2');
    const usuarioLinkElement2 = document.getElementById('usuario-link2');
    const botaoSair = document.getElementById('botao-sair');

    function atualizarInterfaceUsuario(nome) {
        if (nome) {
            if (usuarioNomeElement) usuarioNomeElement.textContent = nome;
            if (usuarioLinkElement) {
                usuarioLinkElement.href = './minha_conta.html';
                usuarioLinkElement.innerHTML = `<i class="bi bi-person"></i> ${nome}`;
            }
            if (usuarioNomeElement2) usuarioNomeElement2.textContent = nome;
            if (usuarioLinkElement2) {
                usuarioLinkElement2.href = './minha_conta.html';
                usuarioLinkElement2.innerHTML = `<i class="bi bi-person"></i> ${nome}`;
            }
            if (botaoSair) botaoSair.style.display = 'inline-block';
        } else {
            if (usuarioNomeElement) usuarioNomeElement.textContent = "Entrar/Cadastrar";
            if (usuarioLinkElement) usuarioLinkElement.href = './login.html';
            if (usuarioNomeElement2) usuarioNomeElement2.textContent = "Entrar/Cadastrar";
            if (usuarioLinkElement2) usuarioLinkElement2.href = './login.html';
            if (botaoSair) botaoSair.style.display = 'none';
        }
    }

    atualizarInterfaceUsuario(nomeUsuario);
});

atualizarInterfaceUsuario(nomeUsuario);

if (botaoSair) {
    botaoSair.addEventListener('click', function () {
        localStorage.removeItem('usuarioNome');
        atualizarInterfaceUsuario(null);
        window.location.href = 'index.html';
    });
}

document.getElementById('botao-sair').addEventListener('click', function () {
    localStorage.clear(); // Limpa os dados do localStorage
    window.location.href = 'login.html'; // Redireciona para a página de login
});
