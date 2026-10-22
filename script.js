const menuBotao = document.getElementById('menuBotao');
const menu = document.getElementById('menu');

menuBotao.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  menuBotao.setAttribute('aria-expanded', String(aberto));
  menuBotao.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  menuBotao.textContent = aberto ? '✕' : '☰';
});

menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('aberto');
    menuBotao.setAttribute('aria-expanded', 'false');
    menuBotao.setAttribute('aria-label', 'Abrir menu');
    menuBotao.textContent = '☰';
  });
});

document.querySelectorAll('.ler-mais').forEach((botao) => {
  botao.addEventListener('click', () => {
    const detalhe = document.getElementById(botao.dataset.alvo);
    const vaiAbrir = detalhe.hidden;
    detalhe.hidden = !vaiAbrir;
    botao.innerHTML = vaiAbrir
      ? 'Ocultar informações <span>↑</span>'
      : 'Ver efeitos e riscos <span>→</span>';
    botao.setAttribute('aria-expanded', String(vaiAbrir));
  });
});

const filtros = document.querySelectorAll('.filtro');
const cards = document.querySelectorAll('.droga-card');

filtros.forEach((filtro) => {
  filtro.addEventListener('click', () => {
    filtros.forEach((item) => item.classList.remove('ativo'));
    filtro.classList.add('ativo');

    const categoria = filtro.dataset.filtro;
    cards.forEach((card) => {
      card.hidden = categoria !== 'todas' && card.dataset.categoria !== categoria;
    });
  });
});
