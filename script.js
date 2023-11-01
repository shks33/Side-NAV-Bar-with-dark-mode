
let main = document.querySelector('.main');
let wrapper = document.querySelector('.side-bar');
let button = document.querySelector('.ri-arrow-left-line');
let swtchwh = document.querySelector('.switch');
let swtch = document.querySelector('.switch-in');
let menu = document.getElementsByClassName('me');
let talk = document.querySelector('.dark-mode h1');

button.addEventListener('click', () => {
    wrapper.classList.toggle('hide');
    button.classList.toggle('button');
});

swtchwh.addEventListener('click', ()=>{
    if (wrapper.hasAttribute('id')) {
        wrapper.removeAttribute('id');
        swtch.removeAttribute('style');
        for(var i=0; i< menu.length; i++) {
            menu[i].removeAttribute('id');
        };
        talk.innerHTML = 'Light mode';
        button.removeAttribute('id');
        main.removeAttribute('id');
    } else{
        main.setAttribute('id','main-light');
        wrapper.setAttribute('id','light');
        for(var i=0; i< menu.length; i++) {
            menu[i].setAttribute('id','light-menu');
        };
        swtch.setAttribute('style','transform: translateX(35px);');
        talk.innerHTML = 'Dark mode';
        button.setAttribute('id','light');
    }
});