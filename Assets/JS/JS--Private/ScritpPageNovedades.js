const textarea = document.getElementById('summary');

function autoResizeTextArea(element) {
    element.style.height = '200px';
    element.style.height = (element.scrollHeight) + 'px';
}

textarea.addEventListener('input', function() {
    autoResizeTextArea(this);
});

autoResizeTextArea(textarea);



document.addEventListener('DOMContentLoaded', () => {
    const subtitlesContainer = document.getElementById('subtitles-container');
    const addSubtitleBtn = document.getElementById('add-subtitle-btn');
    const removeAllBtn = document.getElementById('remove-all-btn');
    let subtitleCount = 1; // Contador para el número de subtítulos

    // Función para crear una nueva sección de subtítulo
    const createSubtitleSection = (count, subtitleText = '', contentText = '') => {
        const sectionDiv = document.createElement('div');
        sectionDiv.classList.add('subtitulo-section');
        sectionDiv.id = `subtitle-section-${count}`;

        // Campo de texto para el subtítulo
        const subtitleLabel = document.createElement('label');
        subtitleLabel.setAttribute('for', `subtitle-${count}`);
        subtitleLabel.textContent = `Subtítulo ${count}:`;

        const subtitleInput = document.createElement('input');
        subtitleInput.type = 'text';
        subtitleInput.id = `subtitle-${count}`;
        subtitleInput.name = `subtitle-${count}`;
        subtitleInput.placeholder = `Subtítulo ${count}`;
        subtitleInput.value = subtitleText; // Valor del subtítulo

        // Área de texto para el contenido del subtítulo
        const contentLabel = document.createElement('label');
        contentLabel.setAttribute('for', `content-${count}`);
        contentLabel.textContent = `Contenido del subtítulo:`;

        const contentTextarea = document.createElement('textarea');
        contentTextarea.id = `content-${count}`;
        contentTextarea.name = `content-${count}`;
        contentTextarea.placeholder = 'Texto';
        contentTextarea.rows = 2;
        contentTextarea.value = contentText; // Valor del contenido

        // Botón para eliminar (solo para subtítulos mayores al primero)
        if (count > 1) {
            const deleteBtn = document.createElement('button');
            deleteBtn.type = 'button';
            deleteBtn.classList.add('btn', 'btn-danger');
            deleteBtn.textContent = 'Eliminar Subtítulo';
            deleteBtn.onclick = () => removeSubtitleSection(count);

            sectionDiv.appendChild(deleteBtn); // Se agrega después del área de texto
        }

        // Agregar elementos al contenedor de la sección
        sectionDiv.appendChild(subtitleLabel);
        sectionDiv.appendChild(subtitleInput);
        sectionDiv.appendChild(contentLabel);
        sectionDiv.appendChild(contentTextarea);

        return sectionDiv;
    };

    // Función para agregar una nueva sección
    const addSubtitleSection = (subtitleText = '', contentText = '') => {
        const newSection = createSubtitleSection(subtitleCount, subtitleText, contentText);
        subtitlesContainer.appendChild(newSection);
        subtitleCount++;
    };

    // Función para reordenar los subtítulos después de una eliminación
    const reorderSubtitles = () => {
        // Obtener todas las secciones actuales
        const subtitleSections = document.querySelectorAll('.subtitulo-section');

        // Recorrer todas las secciones y actualizarlas con los nuevos números
        subtitleSections.forEach((section, index) => {
            const newCount = index + 1; // Nuevo número de subtítulo
            section.id = `subtitle-section-${newCount}`;
            
            // Actualizar los labels
            const subtitleLabel = section.querySelector('label[for^="subtitle"]');
            subtitleLabel.textContent = `Subtítulo ${newCount}:`;

            const subtitleInput = section.querySelector('input[id^="subtitle"]');
            subtitleInput.id = `subtitle-${newCount}`;
            subtitleInput.name = `subtitle-${newCount}`;
            subtitleInput.placeholder = `Subtítulo ${newCount}`;

            const contentLabel = section.querySelector('label[for^="content"]');
            contentLabel.setAttribute('for', `content-${newCount}`);

            const contentTextarea = section.querySelector('textarea[id^="content"]');
            contentTextarea.id = `content-${newCount}`;
            contentTextarea.name = `content-${newCount}`;
            contentTextarea.placeholder = `Contenido del Subtítulo ${newCount}`;

            // Actualizar el botón de eliminar si existe y mostrarlo solo en secciones mayores a 1
            const deleteBtn = section.querySelector('button');
            if (deleteBtn) {
                section.removeChild(deleteBtn); // Eliminar el botón actual

                if (newCount > 1) {
                    const newDeleteBtn = document.createElement('button');
                    newDeleteBtn.type = 'button';
                    newDeleteBtn.classList.add('btn', 'btn-danger');
                    newDeleteBtn.textContent = 'Eliminar Subtítulo';
                    newDeleteBtn.onclick = () => removeSubtitleSection(newCount);
                    section.appendChild(newDeleteBtn); // Agregar nuevo botón solo a secciones mayores a 1
                }
            }
        });

        // Actualizar el contador
        subtitleCount = subtitleSections.length + 1;
    };

    // Función para eliminar una sección de subtítulo individual
    const removeSubtitleSection = (count) => {
        if (count > 1) { // Solo permitir eliminar subtítulos mayores al primero
            const sectionToRemove = document.getElementById(`subtitle-section-${count}`);
            if (sectionToRemove) {
                subtitlesContainer.removeChild(sectionToRemove);
                reorderSubtitles(); // Reordenar subtítulos después de eliminar
            }
        }
    };

    // Función para eliminar todas las secciones de subtítulos
    const removeAllSubtitles = () => {
        // Mantener solo la primera sección y eliminar las demás
        const subtitleSections = document.querySelectorAll('.subtitulo-section');
        subtitleSections.forEach((section, index) => {
            if (index > 0) {
                subtitlesContainer.removeChild(section);
            }
        });

        subtitleCount = 2; // Reiniciar el contador para comenzar desde 2
    };

    // Agregar la primera sección al cargar la página (imposible de eliminar)
    addSubtitleSection();

    // Evento para agregar nuevas secciones al hacer clic en el botón
    addSubtitleBtn.addEventListener('click', () => addSubtitleSection());

    // Evento para eliminar todas las secciones al hacer clic en el botón
    removeAllBtn.addEventListener('click', removeAllSubtitles);
});

