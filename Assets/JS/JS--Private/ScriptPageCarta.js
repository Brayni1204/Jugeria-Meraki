
document.addEventListener("DOMContentLoaded", function() {
    const cantidadInput = document.getElementById('cantidadIngredientes');
    
    generarCamposIngredientes();

    cantidadInput.addEventListener('input', () => {
        validarCantidadIngredientes();
        generarCamposIngredientes();
    });
});

function generarCamposIngredientes() {
    const cantidad = document.getElementById('cantidadIngredientes').value;
    const contenedor = document.getElementById('listaIngredientes');
    contenedor.innerHTML = ''; // Limpiar el contenido anterior


    for (let i = 1; i <= cantidad; i++) {
        const ingredienteDiv = document.createElement('div');
        ingredienteDiv.classList.add('ingrediente-container'); 

        ingredienteDiv.innerHTML = `
            <label for="ingrediente${i}">${i}. Ingrediente:</label>
            <input type="text" id="ingrediente${i}" name="ingrediente${i}" class="ingrediente-input" placeholder="Nombre del ingrediente">
        `;
        
        contenedor.appendChild(ingredienteDiv);
    }
}


function validarCantidadIngredientes() {
    const input = document.getElementById('cantidadIngredientes');
    const value = parseInt(input.value, 10); 
    if (value > 20) {
        input.value = 20;
    } else if (value < 1 || isNaN(value)) {
        input.value = 1;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll('input[type="text"], input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('blur', function () {
            if (input.value.trim() === "") {
                input.classList.add('error');
                input.classList.remove('valid');
            } else {
                input.classList.add('valid'); 
                input.classList.remove('error');
            }
        });

        input.addEventListener('focus', function () {
            input.classList.remove('error');
        });
    });
});

const fileInput = document.getElementById('imagenFile');
const textInput = document.getElementById('imagen');

fileInput.addEventListener('change', function () {
    if (fileInput.files.length > 0) {
        const fileURL = URL.createObjectURL(fileInput.files[0]);

        textInput.value = fileURL;
    }
});


/*--------------- ---------------*/

function agregarJugoCarta() {
    const botonAgregar = document.getElementById('btn-nuevo--jugo');

    botonAgregar.addEventListener('click', () => {
        const nombreJugo = document.getElementById('nombre').value;
        const precioJugo = document.getElementById('precio').value;
        const imagenURL = document.getElementById('imagen').value;
        const categoriaSeleccionada = document.getElementById('categoria').value;

        const ingredientes = [];

        const cantidadIngredientes = document.getElementById('cantidadIngredientes').value;

        for (let i = 1; i <= cantidadIngredientes; i++) {
            const ingrediente = document.getElementById(`ingrediente${i}`).value;
            if (ingrediente.trim() !== '') {
                ingredientes.push(ingrediente);
            }
        }

        console.log(`Nombre del Jugo: ${nombreJugo}`);
        console.log(`Precio del Jugo: ${precioJugo}`);
        console.log(`URL de la Imagen: ${imagenURL}`);
        console.log(`Categoría Seleccionada: ${categoriaSeleccionada}`);
        console.log(`Ingredientes: ${ingredientes.join(', ')}`);
    });
}

agregarJugoCarta();






