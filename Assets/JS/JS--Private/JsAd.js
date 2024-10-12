let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {
        listElement.classList.toggle('arrow');

        let height = 0;

        let menu = listElement.nextElementSibling;
       

        if (menu.clientHeight == '0') {
            height = menu.scrollHeight;
            
            listElement.style.backgroundColor = "#FFF";
           
        }

        if (menu.clientHeight != '0') {
            listElement.style.backgroundColor = "rgb(0, 103, 199)";
        }

        menu.style.height = `${height}px`;

    })
});