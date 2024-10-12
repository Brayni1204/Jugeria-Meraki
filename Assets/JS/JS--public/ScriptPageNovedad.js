const btncerrarcategoria = document.getElementById('conten--img--responsive');
const menunovedadesrespnsive  = document.getElementById('conten--menu-novedades--responsive');
const cerrarmenu = document.getElementById('btn--cerrarmenu');


btncerrarcategoria.addEventListener('click', () =>{
    menunovedadesrespnsive.style.display = 'block';
    let body = document.querySelector('body');
    body.style.overflow= 'hidden';
    btncerrarcategoria.style.display = 'none';
});

cerrarmenu.addEventListener('click', (event) => {
    if (event.target === cerrarmenu) {
        menunovedadesrespnsive.style.display = 'none';
        let body = document.querySelector('body');
        body.style.overflow = 'auto';
        btncerrarcategoria.style.display = 'flex';
    }
});