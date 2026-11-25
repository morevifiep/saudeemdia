/* Menu recolhível para telas pequenas.
   Sem JavaScript, o menu continua sempre visível (o botão nem aparece). */
(function () {
  var header = document.querySelector('.header');
  var botao = document.querySelector('.btn-menu');
  var painel = document.getElementById('menu-principal');
  if (!header || !botao || !painel) return;

  header.classList.add('menu-recolhivel');

  function definir(aberto) {
    header.classList.toggle('menu-aberto', aberto);
    botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
  }

  botao.addEventListener('click', function () {
    definir(botao.getAttribute('aria-expanded') !== 'true');
  });

  // Esc fecha o menu e devolve o foco ao botão
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && botao.getAttribute('aria-expanded') === 'true') {
      definir(false);
      botao.focus();
    }
  });

  // Fecha ao seguir um link interno da mesma página (ex.: index.html#servicos)
  painel.addEventListener('click', function (e) {
    if (e.target.closest('a')) definir(false);
  });
})();
