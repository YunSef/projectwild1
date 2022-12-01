const menuBurger = document.querySelector('.menu__burger');
const menuMobile = document.querySelector('.menu__mobile');
menuBurger.addEventListener('click', function(event){
    menuMobile.classList.toggle('visible');
})