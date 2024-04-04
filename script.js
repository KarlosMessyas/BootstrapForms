window.addEventListener('load', () => {
    const buttonTheme = document.querySelector('#buttonTheme');
    buttonTheme.addEventListener("click", () => {
        const html = document.querySelector('html');
        const currentTheme = html.getAttribute('data-bs-theme');
        if (currentTheme === 'dark') {
            html.setAttribute('data-bs-theme', 'light');
        } else {
            html.setAttribute('data-bs-theme', 'dark');
        }
    });

    let map = L.map('map', {
        center: [-6.887698002563706, -38.56015173326553],
        zoom: 15,
        minZoom: 14,
        maxZoom: 16
    });

    let icone = L.icon({
        iconUrl: 'https://imagensemoldes.com.br/wp-content/uploads/2020/05/%C3%8Dcone-Localiza%C3%A7%C3%A3o-PNG.png',
        iconSize: [38, 38],
        iconAnchor: [22, 94],
    });

    let marker = L.marker([-6.887698002563706, -38.56015173326553], {
        draggable: true,
        icon: icone
    }).addTo(map);

    map.locate();

    map.on('locationfound', e => {
        marker.setLatLng(e.latlng);
        map.setView(e.latlng);
    });

    map.on('click', l => {
        marker.setLatLng(l.latlng);
        map.setView(l.latlng);
    });

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const buttonGo = document.querySelector('#buttonGo');
    buttonGo.addEventListener("click", () => {
        const inputLocate = document.querySelector('#floatingInputLocate');
        const locate = inputLocate.value;
        const [latitude, longitude] = locate.split(',');
        console.log("Latitude:", latitude);
        console.log("Longitude:", longitude);

        const newLatLng = new L.LatLng(parseFloat(latitude), parseFloat(longitude));

        marker.setLatLng(newLatLng);
        map.setView(newLatLng);
    });
});