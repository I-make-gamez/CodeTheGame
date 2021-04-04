// Data
const clicks = document.getElementById('loc');
const img = document.getElementById('cImg');

var totalClicks = 0;

// Event listeners
img.addEventListener("click", function() {
  totalClicks += 1;
  clicks.textContent = "Clicks: " + totalClicks;
});
