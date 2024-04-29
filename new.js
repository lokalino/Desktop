document.getElementById('get-weather').addEventListener('click', function() {
    const city = document.getElementById('city-input').value;
    const url = 'api.meteomatics.com/2024-04-24T00:00:00Z/t_2m:C/52.520551,13.461804/html';

    fetch(url)
    .then(response => response.text())
    .then(data => {
        let parser = new DOMParser();
        let xmlDoc = parser.parseFromString(data, "text/html");
        let temperature = xmlDoc.getElementById('id_t_2m').innerText;
        document.getElementById('city').textContent = city;
        document.getElementById('temperature').textContent = temperature + '°C';
    })
    .catch(() => {
        alert('Došlo je do greške.');
    });
});
