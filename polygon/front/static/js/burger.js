let header__burger = document.querySelector('.header__burger');
let burger__content = document.querySelector('.burger__content');
let back = document.querySelector('body');
let content__list = document.querySelector('.content__list');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    burger__content.classList.toggle('active');
    back.classList.toggle('lock');
}

content__list.onclick = function () {
    content__list.classList.remove('active');
    back.classList.toggle('lock');
}