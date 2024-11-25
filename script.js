// Obtener los elementos del carrusel
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const items = document.querySelectorAll('.carousel-item');
let currentIndex = 0; // Índice del item actual visible

// Función para mostrar el item actual
function showCurrentItem() {
  // Ocultar todos los items
  items.forEach(item => {
    item.style.display = 'none';
  });
  
  // Mostrar el item actual
  items[currentIndex].style.display = 'block';
}

// Función para mover al siguiente item
function nextItem() {
  currentIndex++;
  if (currentIndex >= items.length) {
    currentIndex = 0; // Si llegamos al final, volvemos al inicio
  }
  showCurrentItem();
}

// Función para mover al item anterior
function prevItem() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = items.length - 1; // Si llegamos al principio, vamos al final
  }
  showCurrentItem();
}

// Inicializar el carrusel mostrando el primer item
showCurrentItem();

// Añadir los eventos de clic a los botones
nextButton.addEventListener('click', nextItem);
prevButton.addEventListener('click', prevItem);

// Opcional: Automatizar el cambio de imagen cada 3 segundos
setInterval(nextItem, 3000); // Cambia cada 3 segundos
