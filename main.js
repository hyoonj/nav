const tooglebtn = document.querySelector('.navbar__tooglebtn');
const menu = document.querySelector('.navbar__menu');
const icons = document.querySelector('.navbar__icons');

tooglebtn.addEventListener('click', () => {
    //click대신 mousemove 사용가능
    menu.classList.toggle('active');
    icons.classList.toggle('active');
    
});


