function scrollDown() {
  window.scrollTo({
    top: document.body.scrollHeight /* Rola até o final da página */,
    behavior: "smooth" /* Adiciona uma animação suave */,
  });
}
