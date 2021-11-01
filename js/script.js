// Data
const clicks = document.getElementById('loc');
const input = document.getElementById('input');
const check = document.getElementById('check');
const up = document.getElementById('wtt');

let wToType = `var loc = 0`
var totalClicks = 0
// functions
function checkCode() {
  if(input.value === wToType) {    
    totalClicks += 1
    bou();
    clicks.textContent = "Lines of code:" + totalClicks;
    clearInput();
  }
};
  
function clearInput(){
  input.value = null
};

function keyCode(Event){
  if(Event = 13){
    checkCode();
    return;
  }
};


//!!THIS FUNCTION CONTROLS EVERY UPGRADE!!
function bou(){
  if(totalClicks <= 4){
    up.innerHTML = `Type: "var loc += 1"`
    wToType = `var loc += 1`
  }else if(totalClicks < 6){
    up.innerHTML = 'Great! Now for some upgrades! first, type [div][/div]'
    wToType = `[div][/div]`
  }else if(totalClicks < 7){
    up.innerHTML = `Now, lets fill in our div element. first, add {h1}Loc multiplier{/h1}`
    wToType = `[h1]Loc Multiplier[/h1]`
  }
  
};

// Event listeners
check.addEventListener("click", checkCode, false);
document.addEventListener("keydown", keyCode, false)