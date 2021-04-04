// Data
const clicks = document.getElementById('loc');
const input = document.getElementById('input');
const check = document.getElementById('check');

var totalClicks = 0;
var wToType = "var loc = 0";

// functions
function checkCode() {
  if(input.value === wToType) {    
    totalClicks += 1
    clicks.textContent = "Lines of code:" + totalClicks;                                                                                                                                                                                    
  }
};

// Event listeners
check.addEventListener("click", checkCode, false);
