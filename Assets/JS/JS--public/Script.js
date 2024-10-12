const menuIcon = document.getElementById('icono--menu');
const menuResponsive = document.getElementById('menu-responsive');
const cerrar = document.getElementById('btn--cerrar');



    
    menuIcon.addEventListener('click', () => {
        menuResponsive.style.display = 'flex';
        let body = document.querySelector('body');
        body.style.overflow = 'hidden';
    });

    cerrar.addEventListener('click', (event) => {
        if (event.target === cerrar) {
            menuResponsive.style.display = 'none';
            let body = document.querySelector('body');
            body.style.overflow = 'auto';
        }
    });

