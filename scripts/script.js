document.querySelectorAll('.comprar-btn').forEach(button => {
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


const image = document.getElementById('modal-imagem');
const zoomContainer = document.querySelector('.zoom-container');


zoomContainer.addEventListener('mousemove', (e) => {
    const rect = zoomContainer.getBoundingClientRect(); // Pega as dimensões do contêiner
    const x = e.clientX - rect.left; // Posição X do mouse dentro do contêiner
    const y = e.clientY - rect.top; // Posição Y do mouse dentro do contêiner

    // Calcula a posição do zoom com base no mouse
    const xPercent = (x / rect.width) * 200;
    const yPercent = (y / rect.height) * 200;

    // Define a origem do transform (zoom) para a posição do mouse
    image.style.transformOrigin = `${xPercent}% ${yPercent}%`;
});

// Remove o efeito de zoom quando o mouse sai do contêiner
zoomContainer.addEventListener('mouseleave', () => {
    image.style.transformOrigin = 'center'; // Redefine a origem do zoom
});

// Seleciona o checkbox e o body
const toggleSwitch = document.getElementById('dark-mode-toggle');
const body = document.body;

// Adiciona um ouvinte de evento para o checkbox
toggleSwitch.addEventListener('change', function() {
    if (this.checked) {
        body.classList.add('dark-mode');  // Ativa o modo escuro
    } else {
        body.classList.remove('dark-mode');  // Desativa o modo escuro
    }
});

