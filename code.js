// // Define function to calculate percentage change
// function calculateChange(currentYear, previousYear) {
//   if (previousYear === 0) {
//     return "N/A";
//   } else {
//     const change = ((currentYear - previousYear) / previousYear) * 100;
//     return change.toFixed(2) + "%";
//   }
// }

// // Load GeoJSON data
// fetch("http://127.0.0.1:5500/Resources/crime_counts.json")
//   .then(response => response.json(), console.log(response))
//   .then(precinctData => {
//     // Initialize the map
//     const map = L.map("map").setView([34.0522, -118.2437], 10);
//     L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//       attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(map);

//     // Define crime layer
//     const crimeLayer = L.geoJson(precinctData, {
//       // Access precinct and crime data properties
//       onEachFeature: function(feature, layer) {
//         const precinct = feature.properties.Precinct;
//         const currentYear = feature.properties[2023]; // Access data for 2023
//         const previousYear = feature.properties[2022]; // Access data for 2022
//         const change = calculateChange(currentYear, previousYear);

//         // Update popup content
//         layer.bindPopup(`<b>Precinct: ${precinct}</b><br>2023 Crime Rate: ${currentYear}<br>Change from 2022: ${change}`);
//       }
//     });

//     // Add crime layer to map
//     crimeLayer.addTo(map);

//     // Event listener for year selection
//     document.getElementById("year-select").addEventListener("change", function (e) {
//       const selectedYear = e.target.value;

//       // Update crime layer data
//       crimeLayer.eachLayer(function (layer) {
//         const crimeRate = layer.feature.properties[selectedYear];
//         layer.bindPopup(`<b>Precinct: ${layer.feature.properties.Precinct}</b><br>${selectedYear} Crime Rate: ${crimeRate}`);
//       });
//     });
//   });
# Define function to calculate percentage change
function calculateChange(currentYear, previousYear) {
  if (previousYear === 0) {
    return "N/A";
  } else {
    const change = ((currentYear - previousYear) / previousYear) * 100;
    return change.toFixed(2) + "%";
  }
}
  fetch("http://127.0.0.1:5500/Resources/crime_counts.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    return data; // Pass the parsed data to the next callback
  })
  .then(precinctData => {
    // Initialize the map
    const map = L.map("map").setView([34.0522, -118.2437], 10);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
  })
    // Define crime layer
    const crimeLayer = L.geoJson(precinctData, {
      // Access precinct and crime data properties
      onEachFeature: function(feature, layer) {
        const precinct = feature.properties.Precinct;
        const currentYear = feature.properties["2023"]; // Access data for 2023
        const previousYear = feature.properties["2022"]; // Access data for 2022
        const change = calculateChange(currentYear, previousYear);

        // Update popup content
        layer.bindPopup(`<b>Precinct: ${precinct}</b><br>2023 Crime Rate: ${currentYear}<br>Change from 2022: ${change}`);
      }
    });

    // Add crime layer to map
    crimeLayer.addTo(map);

    // Event listener for year selection
    document.getElementById("year-select").addEventListener("change", function (e) {
      const selectedYear = e.target.value;

      // Update crime layer data
      crimeLayer.eachLayer(function (layer) {
        const crimeRate = layer.feature.properties[selectedYear];
        layer.bindPopup(`<b>Precinct: ${layer.feature.properties.Precinct}</b><br>${selectedYear} Crime Rate: ${crimeRate}`);
      });
    });
  