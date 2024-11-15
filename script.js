let menu = document.querySelector('#menu');
let Navlist = document.querySelector('.list');


menu.onclick = () => {
    menu.classList.toggle('bx-x');
    Navlist.classList.toggle('open')
}