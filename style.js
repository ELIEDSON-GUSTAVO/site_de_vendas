// Função para exibir a seção selecionada e esconder as outras
function showSection(sectionId) {
  // Esconder todas as seções
    var sections = document.getElementsByTagName('section');
      for (var i = 0; i < sections.length; i++) {
          sections[i].style.display = 'none';
            }

              // Exibir a seção selecionada
                var sectionToShow = document.getElementById(sectionId);
                  if (sectionToShow) {
                      sectionToShow.style.display = 'block';
                        }
                        }

                        // Função para preencher o valor do produto na página de compra
                        function fillProductValue(productName, productValue) {
                          var productValueElement = document.getElementById('product-value');
                            if (productValueElement) {
                                productValueElement.textContent = 'Valor: R$ ' + productValue.toFixed(2);
                                  }
                                  }

                                  // Função para exibir o formulário de preenchimento de dados para compra
                                  function showPaymentForm() {
                                    // Obter o valor do produto selecionado
                                      var productName = document.getElementById('product-name').textContent;
                                        var productValue = parseFloat(document.getElementById('product-value').textContent.split(' ')[1]);

                                          // Preencher o valor do produto na página de compra
                                            fillProductValue(productName, productValue);

                                              // Esconder a seção de produtos
                                                var produtosSection = document.getElementById('produtos');
                                                  if (produtosSection) {
                                                      produtosSection.style.display = 'none';
                                                        }

                                                          // Exibir a seção de pagamento
                                                            var paymentSection = document.getElementById('payment-page');
                                                              if (paymentSection) {
                                                                  paymentSection.style.display = 'block';
                                                                    }
                                                                    }
                                                                    