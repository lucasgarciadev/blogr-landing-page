const toggleMenu = document.querySelector('.toggle-menu');
const nav = document.querySelector('nav');
const menuLink = document.querySelectorAll('.menu-link');

toggleMenu.addEventListener('click', () => {
    toggleMenu.classList.toggle('show');
    nav.classList.toggle('show');
})

menuLink.forEach(i => {
    i.addEventListener('click', ()=> {
        const children = i.childNodes;
        children[3].classList.toggle('active');
        children[5].classList.toggle('active');
        i.nextElementSibling.classList.toggle('show');
    })
})

if(nav.classList.contains('show')) {
    const div = document.createElement('div');
    div.classList.add('join-links-mobile');

    const a1 = document.createElement('a');
    const a2 = document.createElement('a');

    a1.innerHTML = "Login";
    a2.innerHTML = "Sign Up";

    div.appendChild(a1);
    div.appendChild(a2);

    document.querySelector('nav').appendChild(div);
}





