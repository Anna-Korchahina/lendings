'use strict';
window.addEventListener(('DOMContentLoaded'), (event) => {

    function openBurgerMenu(){
        const burgerMenuClose = document.querySelector('.menu__wrapper');
        if (burgerMenuClose.classList.contains('menu__wrapper_hidden')){
            burgerMenuClose.classList.remove('menu__wrapper_hidden');
            document.body.style.overflow = 'hidden';
        }
        if (overlay.classList.contains('overlay_hidden')){
            overlay.classList.remove('overlay_hidden');
        }
        document.addEventListener('click', changeBurgerMenu);
    }

    function closeBurgerMenu(){
        const burger = document.querySelector('.menu__wrapper');
        if (!burger.classList.contains('menu__wrapper_hidden')){
            burger.classList.add('menu__wrapper_hidden');
            document.body.style.overflow = '';
        }
        if (!overlay.classList.contains('overlay_hidden')){
            overlay.classList.add('overlay_hidden');
        }
        document.removeEventListener('click', changeBurgerMenu);
    }

    function followLink(){
        document.body.style.overflow = '';
        closeBurgerMenu();
    }

    function changeBurgerMenu(currentTarget){
        // console.log(currentTarget.target );
        if(currentTarget.target.className === "overlay" || currentTarget.target.className === "menu__link" || currentTarget.target.className === "menu__part"){
            closeBurgerMenu();
        }
    }

    const burgerMenuOpen = document.querySelector('.header__menu-btn_mobile__wrapper');
    const burgerMenuClose = document.querySelector('.menu__burger');
    // const menuLink = document.querySelectorAll('.menu__list');
    const overlay = document.querySelector('.overlay');

    burgerMenuOpen.addEventListener('click', openBurgerMenu);
    burgerMenuClose.addEventListener('click', closeBurgerMenu);
    // for(let i = 0; i < menuLink.length; i++){
    //     menuLink[i].addEventListener('click', followLink);
    // }


});