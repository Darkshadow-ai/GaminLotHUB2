const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClosed = document.querySelector('.icon-closed');

registerLink.addEventListener('click', ()=> {wrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', ()=> {wrapper.classList.add('active-popup');
});

iconClosed.addEventListener('click', ()=> {wrapper.classList.remove('active-popup');
});

let menu =document.querySelector('.menu-icon');
let navigation =document.querySelector('.navigation');

menu.onclick = () => {
    menu.classList.toggle('menu-icon');
    navigation.classList.toggle('open')
}