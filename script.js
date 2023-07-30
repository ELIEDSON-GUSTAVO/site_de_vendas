// JavaScript para fazer a transição de páginas
const links = document.querySelectorAll('.categoria-list a');
const sections = document.querySelectorAll('section');

links.forEach(link => {
  link.addEventListener('click', e => {
      e.preventDefault();
          const target = e.target.getAttribute('href').substring(1);
              sections.forEach(section => {
                    section.classList.remove('show');
                        });
                            document.getElementById(target).classList.add('show');
                              });
                              });

                              // JavaScript para exibir a página de descrição do produto
                              const productItems = document.querySelectorAll('.product-item');
                              const productDetails = document.querySelectorAll('.product-details');
                              const btnBack = document.querySelectorAll('.btn-back');
                              const btnCart = document.querySelectorAll('.btn-cart');

                              productItems.forEach((item, index) => {
                                item.addEventListener('click', () => {
                                    window.location.href = "product-details.html";
                                      });
                                      });

                                      btnBack.forEach((btn, index) => {
                                        btn.addEventListener('click', () => {
                                            productDetails[index].classList.remove('show');
                                                sections[1].classList.add('show');
                                                  });
                                                  });

                                                  btnCart.forEach((btn, index) => {
                                                    btn.addEventListener('click', () => {
                                                        // Implemente o código para redirecionar para a página de pagamento com os dados do produto
                                                            window.location.href = "payment-page.html";
                                                              });
                                                              });
                                                              