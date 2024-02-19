// Define function to calculate percentage change
function calculateChange(currentYear, previousYear) {
    if (previousYear === 0) {
        return "N/A";
    } else {
        const change = ((currentYear - previousYear) / previousYear) * 100;
        return change.toFixed(2) + "%";
    }
}

// Load GeoJSON data
const baseUrl = "http://127.0.0.1:5500/";
const dataUrl = `${baseUrl}crime_counts.json`; {
console.log(response)};
fetch(dataUrl)
//   fetch("crime_counts.json")
    .then(response => response.json())
    .then(precinctData => {
        // Initialize the map
        const map = L.map("map").setView([34.0522, -118.2437], 10);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // Define crime layer
        const crimeLayer = L.geoJson(precinctData, {
            onEachFeature: function (feature, layer) {
                const currentYear = feature.properties["2023"];
                const previousYear = feature.properties["2022"];
                const change = calculateChange(currentYear, previousYear);
                layer.bindPopup(`<b>Precinct: ${feature.properties.Precinct_Name}</b><br>2023 Crime Rate: ${currentYear}<br>Change from 2022: ${change}`);
            }
        });

        // Add crime layer to map
        crimeLayer.addTo(map);

        // Event listener for year selection
        document.getElementById("year-select").addEventListener("change", function (e) {
            const selectedYear = e.target.value;

            // Update crime layer data
            crimeLayer.eachLayer(function (layer) {
                layer.bindPopup(`<b>Precinct: ${layer.feature.properties.Precinct_Name}</b><br>${selectedYear} Crime Rate: ${layer.feature.properties[selectedYear]}`);
            });
        });
    });
