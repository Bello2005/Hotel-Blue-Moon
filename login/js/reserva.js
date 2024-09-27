/*mapa begin*/
var sedes = [
    { 
        nombre: "Sede de New York", 
        latitud: 40.7128, 
        longitud: -74.0060, 
        detalles: "Ubicada en el corazón de Manhattan, la Sede de New York ofrece una vista impresionante del skyline de la ciudad. Disfruta de la elegancia y comodidad en cada rincón.", 
        imagen: "img/New York.jpg", 
        telefono: "+1 212 555 1234" 
    },
    { 
        nombre: "Sede de Los Angeles", 
        latitud: 34.0522, 
        longitud: -118.2437, 
        detalles: "En la soleada Los Angeles, nuestra sede combina el estilo moderno con la relajación californiana. Descubre un ambiente único y vibrante.", 
        imagen: "img/Los Angeles.jpg", 
        telefono: "+1 213 555 5678" 
    },
    { 
        nombre: "Sede principal: Quibdó", 
        latitud: 5.691998332456322, 
        longitud: -76.65676364611446, 
        detalles: "La sede principal en Quibdó refleja la rica cultura local. Experimenta la hospitalidad chocoana en nuestras instalaciones modernas y acogedoras.", 
        imagen: "img/Quibdó.jpg", 
        telefono: "+57 4 555 7890" 
    },
    { 
        nombre: "Sede en Reikiavik", 
        latitud: 64.1466, 
        longitud: -21.9426, 
        detalles: "Descubre la serenidad en nuestra sede en Reikiavik. Ubicada en la pintoresca Islandia, ofrecemos una experiencia tranquila con servicios de alta calidad.", 
        imagen: "img/Reikiavik.jpg", 
        telefono: "+354 1234 5678" 
    },
    { 
        nombre: "Sede en Tokio", 
        latitud: 35.6895, 
        longitud: 139.6917, 
        detalles: "En la bulliciosa Tokio, nuestra sede combina la modernidad con la tradición japonesa. Sumérgete en la energía de la ciudad y relájate en nuestras instalaciones únicas.", 
        imagen: "img/Tokyo.jpg", 
        telefono: "+81 90 1234 5678" 
    },
    { 
        nombre: "Sede en Nuquí", 
        latitud: 5.7108, 
        longitud: -77.2664, 
        detalles: "Experimenta la belleza natural de Nuquí en nuestra sede. Con playas prístinas y exuberante vegetación, ofrecemos una escapada perfecta para la tranquilidad y la aventura.", 
        imagen: "img/Nuqui.jpg", 
        telefono: "+57 310 123 4567" 
    },
    // Agrega más sedes según sea necesario
];


var map = L.map('map').setView([0, 0], 2.4);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Capa de fronteras de los continentes
var continentLayer = L.geoJson(null, {
    style: {
        color: "white", // Color de las líneas de los continentes
        weight: 1,
        fillOpacity: 0,
    },
});

// Cargar fronteras de los continentes desde el servicio de GeoJSON
fetch('https://naturalearth.s3.amazonaws.com/geojson/ne_10m_admin_0_countries.geojson')
    .then((response) => response.json())
    .then((data) => {
        continentLayer.addData(data);
    });

// Agregar la capa de fronteras de los continentes al mapa
continentLayer.addTo(map);

sedes.forEach(function(sede) {
    var marker = L.marker([sede.latitud, sede.longitud]).addTo(map);

    // Popup con detalles al hacer clic en el marcador
    marker.bindPopup(
        '<b>' + sede.nombre + '</b><br>' +
        sede.detalles + '<br>' +
        '<img src="' + sede.imagen + '" width="100"><br>' +
        '<strong>Teléfono:</strong> ' + sede.telefono
    );

    // Al hacer clic en el marcador, mostrar imagen y detalles en el panel lateral
    marker.on('click', function() {
        document.getElementById('sede-img').src = sede.imagen;
        document.getElementById('sede-detalles').innerText = sede.detalles;
        document.getElementById('sede-info').style.display = 'block';
        document.getElementById('sede-telefono').innerText = 'Teléfono: ' + sede.telefono;
    });

    // Iluminar el marcador al pasar el ratón
    marker.on('mouseover', function() {
        marker.openPopup();
    });

    // Desactivar la iluminación al retirar el ratón
    marker.on('mouseout', function() {
        marker.closePopup();
    });
});
/*mapa finish*/

/*card begin*/
var tarjetasContainer = document.getElementById('tarjetas-container');

sedes.forEach(function(sede) {
    // Crear una tarjeta por cada sede
    var card = document.createElement('div');
    card.classList.add('card');

    // Agregar contenido a la tarjeta (puedes personalizar esto según tus necesidades)
    card.innerHTML = `
        <h2>${sede.nombre}</h2>
        <img src="${sede.imagen}" alt="${sede.nombre}" style="max-width: 100%">
        <p>${sede.detalles}</p>
        <p><strong>Teléfono:</strong> ${sede.telefono}</p>
    `;

    // Agregar la tarjeta al contenedor
    tarjetasContainer.appendChild(card);
});

/*card end*/


/*Formulario de reserva*/
function realizarReserva() {
    // Obtener los valores del formulario
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var lugar = document.getElementById('lugar').value;
    var tipoHabitacion = document.getElementById('tipo_habitacion').value;

    // Aquí puedes manejar la lógica de reserva, como enviar los datos a un servidor, etc.
    // Por ahora, simplemente mostraremos un mensaje en la consola
    console.log(`Reserva realizada por ${nombre} (${email}) en ${lugar} para una ${tipoHabitacion}`);
}

/*Fin del formulario*/

/*Navvar*/
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const menu = document.getElementById('menu');

    menuIcon.addEventListener('click', function() {
        menu.style.display = (menu.style.display === 'block' ? 'none' : 'block');
    });

    window.addEventListener('click', function(event) {
        if (!event.target.matches('#menu-icon') && !event.target.matches('#menu')) {
            menu.style.display = 'none';
        }
    });
});


/*----------------------------------------------------------------*/