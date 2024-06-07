document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Exibe a mensagem de agradecimento
    document.getElementById("messageContainer").style.display = "block";
    document.getElementById("messageContainer").innerText = "Obrigado, logo entraremos em contato";

    // Limpa os campos do formulário
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
});
