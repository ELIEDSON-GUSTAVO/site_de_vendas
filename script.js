const links = document.querySelectorAll(".fade-out-link");

links.forEach(link => {
  link.addEventListener("click", function(event) {
      event.preventDefault();
          const href = link.getAttribute("href");

              // Adicionando a classe "fade-out" para criar o efeito de fade-out
                  document.body.classList.add("fade-out");

                      // Removendo a classe "fade-out" após um pequeno intervalo (tempo da animação)
                          setTimeout(function() {
                                window.location.href = href;
                                    }, 500); // Tempo em milissegundos, ajuste conforme o tempo de animação

                                        // Evitando o comportamento padrão do link
                                            return false;
                                              });
                                              });
                                              