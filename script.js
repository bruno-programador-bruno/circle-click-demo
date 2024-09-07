document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');

    container.addEventListener('click', function(event) {
        if (event.button === 0) { // 0 es el botón izquierdo del ratón
            // Crear un nuevo círculo
            const circle = document.createElement('div');
            circle.className = 'circle';
            circle.style.top = `${event.clientY}px`; // Posicionar en el punto de clic
            circle.style.left = `${event.clientX}px`;
            
            // Añadir el círculo al contenedor
            container.appendChild(circle);

            // Eliminar el círculo después de 1 segundo
            setTimeout(() => {
                circle.remove();
            }, 1000);
        }
    });
});
