// Data
const clicks = document.getElementById('loc');
const input = document.getElementById('cImg');
const wtt = document.getElementById('wtt');

var totalClicks = 0;
var wToType = "var loc = 0";

// Event listeners
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      if(input.value = wToType) {
        totalClicks += 1
        clicks.textContent = "Lines of code:" + totalClicks;                                                                                                                                                                                    
      }
    }
});

