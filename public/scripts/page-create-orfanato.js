const map = L.map("mapid").setView([-22.5669492,-47.4057182], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
 .addTo(map);

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    marker && map.removeLayer(marker);

    marker = L.marker([lat, lng], {icon}).addTo(map);
});

function addPhotoField() {
    const container = document.querySelector('#images');

    const fieldsContainer = document.querySelectorAll('.new-upload');

    const newFieldContainer = fieldsContainer[fieldsContainer.length-1].cloneNode(true);

    const input = newFieldContainer.children[0];

    if(input.value == '') {
        return;
    }

    input.value = '';

    container.appendChild(newFieldContainer);
};

function deleteField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length < 2) {
        span.parentNode.children[0].value = '';
        return;
    }

    span.parentNode.remove();
}

function toggleSelect(event) {
    document.querySelectorAll('.button-select button')
    .forEach((button) => {
        button.classList.remove('active')
        button.classList.remove('negative')
    });

    const button = event.currentTarget;
    let classe = 'active'

    if(button.dataset.value == 0) {
        classe = 'negative'
    }

    button.classList.add(classe);

    const input = document.querySelector('[name="open-on-weekends"]');

    input.value = button.dataset.value;
}

function validate(event) {
    const Lat = document.querySelector('[name="lat"]').value;
    const Lng = document.querySelector('[name="lng"]').value;
    if(Lat == '' || Lng == '') {
        event.preventDefault();
        alert('Selecione um ponto no mapa!')
    }
}