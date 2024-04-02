const buttonTheme = document.querySelector('.theme');
buttonTheme.addEventListener("click", () => {
    const html = document.querySelector('html');
    const currentTheme = html.getAttribute('data-bs-theme');
    if (currentTheme === 'dark') {
        html.setAttribute('data-bs-theme', 'light');
    } else {
        html.setAttribute('data-bs-theme', 'dark');
    }
});

var map = L.map('map', {
    center: [-6.844181, -38.348011],
    zoom: 15,
    minZoom: 14,
    maxZoom: 16
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.locate();

map.on('locationfound', e=>{
    marker.setLatLng(e.latlng);
    map.setView(e.latlng);
});

map.on('click', l => {
    marker.setLatLng(l.latlng);
    map.setView(l.latlng);
})

var marker = L.marker([-6.844181, -38.348011], {
    draggable: true
}).addTo(map);
