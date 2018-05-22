function setup_menu_toggle(menu_toggler)
{
    var toggling_menu = menu_toggler.nextElementSibling;

    menu_toggler.addEventListener('click', function (e) {
        e.preventDefault();

        toggling_menu.classList.toggle('open');
    });

    toggling_menu.querySelectorAll('a').forEach(function (item) {
        item.addEventListener('click', function () {
            toggling_menu.classList.remove('open');
        });
    });
}

document.addEventListener('DOMContentLoaded', function ()
{
    'use strict';

    var menu_toggler = document.querySelector('.menu-toggle');

    if (menu_toggler) {
        setup_menu_toggle(menu_toggler);
    }
})