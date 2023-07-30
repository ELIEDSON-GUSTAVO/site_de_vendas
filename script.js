// Selecionar elementos
const btnProdutos = document.getElementById('btn-produtos');
const btnContato = document.getElementById('btn-contato');
const btnGmail = document.getElementById('btn-gmail');
const btnVoltarProduto = document.getElementById('btn-voltar-produto');
const btnVoltarContato = document.getElementById('btn-voltar-contato');
const btnVoltarGmail = document.getElementById('btn-voltar-gmail');
const produtosPage = document.getElementById('produtos');
const contatoPage = document.getElementById('contato');
const gmailPage = document.getElementById('gmail');
const descricaoProdutoPage = document.getElementById('descricao-produto');
const btnComprarProduto = document.getElementById('btn-comprar-produto');

// Mostrar página de produtos
btnProdutos.addEventListener('click', () => {
  produtosPage.classList.add('show');
    contatoPage.classList.remove('show');
      gmailPage.classList.remove('show');
        descricaoProdutoPage.classList.remove('show');
        });

        // Mostrar página de contato
        btnContato.addEventListener('click', () => {
          produtosPage.classList.remove('show');
            contatoPage.classList.add('show');
              gmailPage.classList.remove('show');
                descricaoProdutoPage.classList.remove('show');
                });

                // Mostrar página do Gmail
                btnGmail.addEventListener('click', () => {
                  produtosPage.classList.remove('show');
                    contatoPage.classList.remove('show');
                      gmailPage.classList.add('show');
                        descricaoProdutoPage.classList.remove('show');
                        });

                        // Voltar para a página de produtos a partir da página de descrição do produto
                        btnVoltarProduto.addEventListener('click', () => {
                          produtosPage.classList.add('show');
                            descricaoProdutoPage.classList.remove('show');
                            });

                            // Voltar para a página de contato a partir da página de formulário do Gmail
                            btnVoltarContato.addEventListener('click', () => {
                              contatoPage.classList.add('show');
                                gmailPage.classList.remove('show');
                                });

                                // Voltar para a página de produtos a partir da página de formulário do Gmail
                                btnVoltarGmail.addEventListener('click', () => {
                                  produtosPage.classList.add('show');
                                    gmailPage.classList.remove('show');
                                    });

                                    // Mostrar a página de descrição do produto quando o botão "Comprar" for clicado
                                    btnComprarProduto.addEventListener('click', () => {
                                      produtosPage.classList.remove('show');
                                        descricaoProdutoPage.classList.add('show');
                                        });
                                        