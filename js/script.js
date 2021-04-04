// Data
const clicks = document.getElementById('loc');
const input = document.getElementById('cImg');
const wtt = document.getElementById('wtt');

var totalClicks = 0;
var wToType = "var loc = 0;";

// functions
function checkCode() {
  if(input.innerHTML === wToType) {
    totalClicks += 1
    clicks.textContent = "Lines of code:" + totalClicks;                                                                                                                                                                                    
  }
}

// Event listeners
input.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      checkCode();
    }
});

