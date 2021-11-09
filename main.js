var splide = new Splide('.splide', {
  type: 'fade',
  rewind: true,
});

splide.mount();
AOS.init();
const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('navbar-mobile');
const navItems = [...document.querySelectorAll('.navbar-mobile a')];

hamburger.addEventListener('click', () => {
  navUl.classList.toggle('hidden');
});

navItems.forEach(item => {
  item.addEventListener('click', () => {
    navUl.classList.toggle('hidden');
  });
});
