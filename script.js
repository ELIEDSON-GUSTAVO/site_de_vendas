// Função para fazer a transição de páginas suavemente
function smoothScroll(target, duration) {
  var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
      var startPosition = window.pageYOffset;
        var distance = targetPosition - startPosition;
          var startTime = null;

            function animation(currentTime) {
                if (startTime === null) startTime = currentTime;
                    var timeElapsed = currentTime - startTime;
                        var run = ease(timeElapsed, startPosition, distance, duration);
                            window.scrollTo(0, run);
                                if (timeElapsed < duration) requestAnimationFrame(animation);
                                  }

                                    function ease(t, b, c, d) {
                                        t /= d / 2;
                                            if (t < 1) return c / 2 * t * t + b;
                                                t--;
                                                    return -c / 2 * (t * (t - 2) - 1) + b;
                                                      }

                                                        requestAnimationFrame(animation);
                                                        }

                                                        // Event listeners para as categorias do menu
                                                        var categoriaList = document.querySelector('.categoria-list');
                                                        categoriaList.addEventListener('click', function (event) {
                                                          if (event.target.tagName === 'A') {
                                                              event.preventDefault();
                                                                  var target = event.target.getAttribute('href');
                                                                      smoothScroll(target, 1000);
                                                                        }
                                                                        });

                                                                        // Event listener para o botão de "Comprar" em cada produto
                                                                        var btnComprarList = document.querySelectorAll('.btn-cart');
                                                                        btnComprarList.forEach(function (btn) {
                                                                          btn.addEventListener('click', function () {
                                                                              var productDetails = btn.parentElement;
                                                                                  var productName = productDetails.querySelector('h3').innerText;
                                                                                      var productPrice = productDetails.querySelector('.product-price').innerText;

                                                                                          // Aqui você pode fazer alguma ação com os dados do produto (como adicionar ao carrinho)
                                                                                              // Por exemplo, você pode enviar esses dados para o backend ou mostrar uma mensagem de sucesso
                                                                                                  console.log('Nome do Produto:', productName);
                                                                                                      console.log('Preço do Produto:', productPrice);
                                                                                                        });
                                                                                                        });

                                                                                                        // Event listeners para as páginas de descrição de produtos
                                                                                                        var productItemList = document.querySelectorAll('.product-item');
                                                                                                        productItemList.forEach(function (item) {
                                                                                                          item.addEventListener('click', function () {
                                                                                                              var productDetails = item.querySelector('.product-details');
                                                                                                                  productDetails.classList.toggle('show');
                                                                                                                    });
                                                                                                                    });
                                                                                                                    