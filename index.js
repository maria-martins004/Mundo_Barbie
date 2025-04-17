const tabMenu = document.querySelectorAll('.js-tabmenu li');
const tabContent = document.querySelectorAll('.js-tabcontent section');
tabContent[0].classList.add('ativo');

function activeTab(index) {
  tabContent.forEach((section) => {
    section.classList.remove('ativo');
  });
  tabContent[index].classList.add('ativo');
}

tabMenu.forEach((itemMenu, index) => {
  itemMenu.addEventListener('click', () => {
    activeTab(index);
  })
});

const container = document.querySelector('.barbie');
const mediaQuery = window.matchMedia('(max-width: 615px)');

function Responsividade(r) {
  if (r.matches) {
    container.style.flexDirection = 'column';
  } else {
    container.style.flexDirection = 'row';
  }
}

Responsividade(mediaQuery);

mediaQuery.addEventListener('change', Responsividade);