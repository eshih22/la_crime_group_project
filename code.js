let map = L.map("map", {
  center: [34.0522, -118.2437],
  zoom: 10
});
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let url = "http://127.0.0.1:5500/Resources/crime_counts.json";
d3.json(url)
  .then(precinctData => {
    // Create an empty array to store the markers
    const markers = [];

    // Iterate over the keys of the "Precinct" object
    Object.keys(precinctData.Precinct).forEach((key, index) => {
      const precinctName = precinctData.Precinct[key];
      const year = precinctData.Year[key];
      const totalCrimes = precinctData["Total Crimes"][key];
      const latitude = precinctData.Lat[key];
      const longitude = precinctData.Lng[key];

      // Create a marker for each precinct and bind a popup with the crime data
      const marker = L.marker([latitude, longitude]).addTo(map);
      marker.bindPopup(`<b>Precinct: ${precinctName}</b><br>Year: ${year}<br>Total Crimes: ${totalCrimes}`);

      // Add the marker to the markers array
      markers.push(marker);
    });

    // Event listener for year selection
    const yearSelect = document.getElementById("year-select");
    if (yearSelect) {
      yearSelect.addEventListener("change", function (e) {
        const selectedYear = parseInt(e.target.value);
        // Show markers for the selected year and hide markers for other years
        markers.forEach(marker => {
          const markerYear = parseInt(marker.getPopup().getContent().split("<br>")[1].split(": ")[1]);
          if (markerYear === selectedYear) {
            marker.addTo(map);
          } else {
            map.removeLayer(marker);
          }
        });
      });
    }
  });
