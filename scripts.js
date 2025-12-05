document.addEventListener('DOMContentLoaded', () => {
    
    // ----------------------------------------------------------------------
    // 1. FUNCIONALIDAD PARA LOS BOTONES DE FILTRO DE PROCESOS
    // Objetivo: Permitir la selección de un filtro y simular el filtrado de documentos.
    // ----------------------------------------------------------------------
    
    const filterButtons = document.querySelectorAll('.process-filters .filter-btn');
    const documentList = document.querySelector('.document-list');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            // 1.1. Manejo del estado Activo/Inactivo del botón
            // Quita la clase 'active' de todos los botones primero
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Añade la clase 'active' al botón que fue clickeado
            button.classList.add('active');
            
            // 1.2. Simulación del Filtrado de Documentos
            const filterCategory = button.textContent.trim(); // E.g., "Recursos Humanos"
            
            // Nota: En un proyecto real, aquí llamarías a una función que oculte/muestre las tarjetas
            // o cargue nuevos datos desde una API. Aquí simulamos el feedback visual.
            
            // Demostración de qué filtro se seleccionó:
            console.log(`Filtro seleccionado: ${filterCategory}`);
            
            // 1.3. Feedback visual (Opcional, pero bueno para el usuario)
            if (documentList) {
                documentList.innerHTML = `<p style="text-align: center; padding: 40px; color: #007bff; font-weight: bold;">
                                            Cargando documentos para: ${filterCategory}...
                                            </p>`;
                // Reemplaza el mensaje después de un breve tiempo para simular la carga
                setTimeout(() => {
                    // Aquí pondrías la lógica real para mostrar SÓLO las tarjetas que coincidan.
                    // Por ahora, para mantener el ejemplo simple:
                    documentList.innerHTML = `
                        <article class="document-card">
                            <h2>Resultados para ${filterCategory}</h2>
                            <p class="doc-meta">Mostrando documentos relevantes. Se requiere lógica JS avanzada para el filtrado real.</p>
                            <ul>
                                <li>Ítem de ejemplo</li>
                                <li>Otro ítem de ejemplo</li>
                            </ul>
                            <a href="#" class="download-link">Ver Documento</a>
                        </article>
                    `;
                    
                    // Si el filtro es "Todos los Procesos", puedes volver a cargar las tarjetas originales
                    if (filterCategory === "Todos los Procesos") {
                        // (Reemplazar con el HTML original de las tarjetas si quieres que el demo funcione completamente)
                        documentList.innerHTML = `
                            <article class="document-card">...</article>
                            <article class="document-card">...</article>
                            <article class="document-card">...</article>
                        `;
                    }
                }, 800);
            }
        });
    });


    // ----------------------------------------------------------------------
    // 2. FUNCIONALIDAD PARA EL BOTÓN DE VOTAR (Encuesta)
    // Objetivo: Capturar la selección de la encuesta y dar feedback al usuario.
    // ----------------------------------------------------------------------

    const submitButton = document.querySelector('.survey-widget .submit-btn');
    const pollOptions = document.querySelector('.survey-widget .poll-options');
    
    if (submitButton) {
        submitButton.addEventListener('click', () => {
            const selectedOption = pollOptions.querySelector('input[name="claridad"]:checked');
            
            if (selectedOption) {
                const voteValue = selectedOption.value;
                
                // Simulación de envío del voto (En un proyecto real, se enviaría a una base de datos)
                console.log(`Voto enviado: ${voteValue}`);
                
                // Deshabilitar el botón y mostrar mensaje de éxito (Feedback de Interacción)
                submitButton.textContent = '¡Voto Registrado!';
                submitButton.disabled = true;
                submitButton.style.backgroundColor = '#28a745'; // Color verde
                
                // Opcional: Deshabilitar todas las opciones después de votar
                pollOptions.querySelectorAll('input').forEach(input => input.disabled = true);
                
                alert(`¡Gracias por tu voto! Se registró: ${voteValue}`);
                
            } else {
                alert('Por favor, selecciona una opción antes de votar.');
            }
        });
    }

    
    // ----------------------------------------------------------------------
    // 3. FUNCIONALIDAD BÁSICA DEL BOTÓN DE BÚSQUEDA (Simulación)
    // Objetivo: Dar un feedback al hacer clic en buscar.
    // ----------------------------------------------------------------------
    
    const searchButton = document.querySelector('.search-box button');
    const searchInput = document.querySelector('.search-box input');

    if (searchButton) {
        searchButton.addEventListener('click', (e) => {
            e.preventDefault(); // Evita que el formulario se envíe si está dentro de uno
            const query = searchInput.value.trim();
            if (query) {
                alert(`Buscando: "${query}"... En un proyecto real, esto redirigiría a la página de resultados.`);
            } else {
                alert('Por favor, ingresa un término de búsqueda.');
            }
        });
    }

});