// Espera o HTML ser carregado para garantir que os elementos existam
document.addEventListener('DOMContentLoaded', () => {
    // Pega o input com id="nome" do HTML (ou null se não existir)
    const nome = document.getElementById('nome');
    // Pega o textarea/input com id="mensagem" do HTML
    const mensagem = document.getElementById('mensagem');
    // Número do WhatsApp no formato internacional (apenas dígitos)
    const telefone = '5511987371566'; // Substitua pelo seu número

    // Função que roda quando o formulário é enviado
    function enviarMensagem(event) {
        // Evita o comportamento padrão do form (recarregar a página)
        event.preventDefault();

        // Verifica se os elementos foram encontrados antes de usar
        if (!nome || !mensagem) {
            console.warn('Campos do formulário não encontrados.');
            return;
        }

        // Lê os valores atuais dos campos e monta a mensagem
        const texto = `Olá, meu nome é ${nome.value} e minha mensagem é: ${mensagem.value}`;
        // Codifica a mensagem para usar em URL (substitui espaços/caracteres especiais)
        const msgFormatada = encodeURIComponent(texto);
        // Monta a URL do wa.me com o número e a mensagem codificada
        const url = `https://wa.me/${telefone}?text=${msgFormatada}`;

        // Abre a URL em nova aba (window com w minúsculo é o objeto global correto)
        window.open(url, '_blank');
        // Log simples para ajudar no debug
        console.log('Mensagem enviada com sucesso!');
    }

    // Seleciona o primeiro <form> encontrado no documento
    const form = document.querySelector('form');
    if (form) {
        // Adiciona o listener para executar enviarMensagem ao submeter
        form.addEventListener('submit', enviarMensagem);
    } else {
        // Aviso caso não exista um form no HTML
        console.warn('Formulário não encontrado para adicionar handler.');
    }
});

