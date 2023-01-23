// Controle do menu 
function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle('active')
}


const btn_menu = document.getElementById("btn-menu");


btn_menu.addEventListener('click', toggleMenu, true)

// Scroll Suave para link interno

const menuItens = document.querySelectorAll('#nav a[href^="#"]') 

menuItens.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick)
})

function scrollToIdOnClick(event) {
    event.preventDefault();
    const element = event.target;
    const id = element.getAttribute('href');

    const to = document.querySelector(id).offsetTop; //OffsetTop > posição da seção

    window.scroll({
        top: to,
        behavior: "smooth"
    })
}

