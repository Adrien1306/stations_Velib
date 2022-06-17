// Latitude de Issy-les-Moulineaux	48.8245306
// Longitude de Issy-les-Moulineaux	2.2743419




fetch("https://opendata.paris.fr/api/records/1.0/search/?dataset=velib-disponibilite-en-temps-reel&q=&facet=name&facet=is_installed&facet=is_renting&facet=is_returning&facet=nom_arrondissement_communes&refine.nom_arrondissement_communes=Issy-les-Moulineaux")
    .then(data => data.json())
    .then(data => display(data))

const container = document.querySelector(".table-group-divider")

function display(data) {
    let records = data.records
    records.forEach(element => {
        container.innerHTML +=
        `
            <tr>
                <th scope="row">${element.fields.stationcode}</th>
                <td>${element.fields.name}</td>
                <td>${element.fields.numbikesavailable}</td>
                <td>
                    <iframe width="300" height="170" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" 
                    src="https://maps.google.com/maps?q=${element.fields.coordonnees_geo}&hl=fr=&z=14&amp;output=embed"
                    >
                    </iframe>
                </td>
            </tr>
        `
    });
}

initMap()
