// Get the current year for the copyright
document.getElementById('windchill').textContent = calculateWindChill(40, 10);

function calculateWindChill(temp, windSpeed) {
  return (temp <= 50 && windSpeed > 3)
         ? (35.74 + (0.6215 * temp) - (35.75 * Math.pow(windSpeed, 0.16)) + (0.4275 * temp * Math.pow(windSpeed, 0.16))).toFixed(2)
         : "N/A";
}