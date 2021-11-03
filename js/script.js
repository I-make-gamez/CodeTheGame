// Data
const clicks = document.getElementById('loc');
const mon = document.getElementById('mon');
const input = document.getElementById('input');
const check = document.getElementById('check');
const up = document.getElementById('wtt');
const nhy = document.getElementById('tt');
const locm = document.getElementsByClassName('st')[0];
const dfh = document.getElementsByClassName('dfh')[0];

let wToType = `var loc = 0`
var totalClicks = 0
var funds = 0
var locmPrice = 20
var able = false

// functions
function checkCode() {
  if(input.value === wToType) {    
    totalClicks += 1
    bou();
    clicks.textContent = "Lines of code: " + totalClicks;
    clearInput();
  }
};
  
function sneak(){
  totalClicks += 1
  bou();
  clicks.textContent = "Lines of code: " + totalClicks;    
}

function clearInput(){
  input.value = null
};

function enter(Event){
  if(Event = 13){
    checkCode();
    return;
  };
};

function key1(Event){
  if(Event = 49){
    sneak();
    return;
  }
}

//Loc Multiplier
function unlockLcm(){
  nhy.style.opacity = '0'
  locm.style.opacity = "1"
};



//Dev for hire
function unlockDfh(){
  dfh.style.opacity = '1'
}


//!!THIS FUNCTION CONTROLS EVERY UPGRADE!!
function bou(){
  if(totalClicks <= 4){
    up.innerHTML = `Type: "var loc += 1"`
    wToType = `var loc += 1`
  }else if(totalClicks <= 6){
    up.innerHTML = 'Great! Now for some upgrades! first, type [div][/div]'
    wToType = `[div][/div]`
  }else if(totalClicks <= 7){
    up.innerHTML = `Now, lets fill in our div element. first, add [h1]Loc Multiplier[/h1]`
    wToType = `[h1]Loc Multiplier[/h1]`
  }else if(totalClicks <= 8){
    up.innerHTML = `lets add a description: [p]Increses LOC by 1 per line typed[/p]`
    wToType = `[p]Increses LOC by 1 per line typed[/p]`
  }else if(totalClicks <= 9){
    up.innerHTML = `lets add the buy button: [button]Buy | Cost: 20[/button]`
    wToType = `[button]Buy | Cost: 20[/button]`
  }else if(totalClicks <= 10){
    up.innerHTML = `Good Job! The Upgrade show now show! keep using var loc += 1 to get LOC`
    wToType = `var loc += 1`
    unlockLcm();
  }else if(totalClicks >= 25){
    up.innerHTML = `I think we need some more developers, type, [div][/div]`
    wToType = `[div][/div]`
  }
};

//upgrades
locm.addEventListener("click", function(){
  if(totalClicks >= locmPrice){
    totalClicks -= locmPrice;
    clicks.textContent = "Lines of code: " + totalClicks;
    setInterval(() => {
      funds += 1
      mon.innerHTML = `Funds: $${funds}`
    }, 1000);
  }
});

// Event listeners
check.addEventListener("click", checkCode, false);
document.addEventListener("keydown", enter, false);
document.addEventListener("keydown", key1, false);