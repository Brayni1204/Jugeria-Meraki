const asidemenucarta = document.getElementById('img--responsive--carta');
const menucartarespnsive = document.getElementById('aside--responsive');
const btncerrarcategoria = document.getElementById('btn--cerrar--categoria');



asidemenucarta.addEventListener('click', () =>{
    menucartarespnsive.style.display = 'flex';
    let body = document.querySelector('body');
    body.style.overflow= 'hidden';
    asidemenucarta.style.display = 'none';
});

btncerrarcategoria.addEventListener('click', (event) => {
    if (event.target === btncerrarcategoria) {
        menucartarespnsive.style.display = 'none';
        let body = document.querySelector('body');
        body.style.overflow = 'auto';
        asidemenucarta.style.display = 'flex';
    }
});

 