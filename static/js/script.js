// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var items = document.querySelectorAll('#menu .list-group-item');
    items.forEach(function(item) {
      item.addEventListener('click', function() {
        // Remover la clase 'active' de todos los elementos
        items.forEach(function(i) {
          i.classList.remove('active');
        });
        // Agregar la clase 'active' al elemento clicado
        this.classList.add('active');
      });
    });
  });

   // Función para inicializar el mapa
   function inicializarMapa() {
    // Coordenadas del centro de Colombia (aproximadas)
    var centroColombia = [4.5709, -74.2973];

    
    var mapa = L.map('map').setView(centroColombia, 7);

    // Capa de OpenStreetMap como base del mapa
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapa);

    // Array de sitios turísticos de Boyacá y Cundinamarca con nombre y coordenadas
    var sitiosTuristicos = [
        // Sitios turísticos de Boyacá
        { nombre: 'Villa de Leyva, Boyacá', ubicacion: [5.6351, -73.5247] },
        { nombre: 'Tunja, Boyacá', ubicacion: [5.5359, -73.3678] },
        { nombre: 'Paipa, Boyacá', ubicacion: [5.7738, -73.1145] },
        { nombre: 'Nobsa, Boyacá', ubicacion: [5.7732, -72.9381] },
        // Sitios turísticos de Cundinamarca
        { nombre: 'Zipaquirá, Cundinamarca', ubicacion: [5.0214, -74.0024] },
        { nombre: 'Guatavita, Cundinamarca', ubicacion: [4.9667, -73.8667] },
        { nombre: 'La Candelaria, Bogotá, Cundinamarca', ubicacion: [4.5964, -74.0721] }
      
    ];

  
    sitiosTuristicos.forEach(function(sitio) {
        var marcador = L.marker(sitio.ubicacion).addTo(mapa);
        marcador.bindPopup('<b>' + sitio.nombre + '</b>').openPopup();
    });
}

window.onload = inicializarMapa;
//==================//

function showInfo(destination) {
  switch (destination) {
      case 'villa_de_leyva':
          alert('Villa de Leyva es un pueblo colonial famoso por su arquitectura, la Plaza Mayor y el Parque Nacional Iguaque.');
          break;
      case 'zipaquira':
          alert('Zipaquirá es conocida por su Catedral de Sal, una iglesia construida dentro de una mina de sal.');
          break;
      case 'guatavita':
          alert('La Laguna de Guatavita es un lago sagrado para los muiscas y es famoso por la leyenda de El Dorado.');
          break;
     
      default:
          alert('Información no disponible.');
  }
}

document.addEventListener('DOMContentLoaded', function() {
    var items = document.querySelectorAll('#menu .list-group-item');
    items.forEach(function(item) {
      item.addEventListener('click', function() {
        // Remover la clase 'active' de todos los elementos
        items.forEach(function(i) {
          i.classList.remove('active');
        });
        // Agregar la clase 'active' al elemento clicado
        this.classList.add('active');
      });
    });
  });


        