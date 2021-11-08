// Data
const clicks = document.getElementById('loc');
const mon = document.getElementById('mon');
const input = document.getElementById('input');
const check = document.getElementById('check');
const up = document.getElementById('wtt');
const nhy = document.getElementById('tt');
const locm = document.getElementsByClassName('st')[0];
const dfh = document.getElementsByClassName('dfh')[0];
const btn_data = document.getElementById('btn_data');

let wToType = `var loc = 0`
var totalClicks = 0
var funds = 0
var locmPrice = 20
var able = 0
var adminCmds = ['unup', 'gainFunds', 'gainLOC', 'changeAble']

// functions
function checkCode() {
  if(input.value === wToType) {    
    totalClicks += 1
    localStorage.setItem('LOC', totalClicks)
    clicks.textContent = "Lines of code: " + totalClicks;
    input.value = null;
  }else if(input.value === adminCmds[0]){
    unlockLcm();
    unlockDfh();
    input.value = null;
    return;
  }else if(input.value === adminCmds[1]){
    clearInput()    
    let aut = window.prompt('Enter Amount')
    funds += parseInt(aut);
    mon.innerHTML = `Funds: $${funds}`
    return;
  }else if(input.value === adminCmds[2]){
    input.value = null;
    let aol = window.prompt('Enter Amount')
    totalClicks += parseInt(aol);
    clicks.innerHTML = `Lines of code: ${totalClicks}`
    return;
  }else if(input.value === adminCmds[3]){
    able = window.prompt('Enter An Integer\n[0-7]')
    sou();
    bou();
    input.value = null;  
  }
};

function loadData(){
  totalClicks = JSON.parse(localStorage.getItem('LOC'));
  if(totalClicks != null){
    clicks.textContent = "Lines of code: " + totalClicks;
  }else{
    clicks.innerHTML = `Lines of code: 0`
  }
  able = JSON.parse(localStorage.getItem('able'));
  sou();
  bou();
  if(totalClicks <= 24 && totalClicks >= 9){
    up.innerHTML = `keep using var loc += 1 to get LOC`
    wToType = `var loc += 1`
    unlockLcm();
  }else if(totalClicks >= 9){
    unlockLcm();
  }
  
  funds = JSON.parse(localStorage.getItem('funds'));
  if(funds != null){
    mon.innerHTML = `Funds: $${funds}`
  }else{
    mon.innerHTML = `Funds: $0`
  }
};

function eraseData(){
  const y_n = window.prompt('This Will Completely erase your data!\nAre you sure?\n[Y/N]')
  if(y_n == 'y' || 'Y'){
    totalClicks = 0;
    clicks.textContent = "Lines of code: " + totalClicks;    
    localStorage.removeItem('LOC');
    funds = 0
    mon.innerHTML = `Funds: $${funds}`
    localStorage.removeItem('funds');
    able = 0;
    up.innerHTML = 'Lets get started with our loc (lines of code) variable.&nbsp;Type "var loc = 0"'
    wToType = `var loc = 0`
    localStorage.removeItem('able');
  }else{
    return;
  }
};
  
function sneak(){
  totalClicks += 1
  bou();
  clicks.textContent = "Lines of code: " + totalClicks;    
}

function enter(Event){
  if(Event = 13){
    checkCode();   
    sou();
    bou();
    return;
  };
};

/*function key1(Event){
  if(Event = 49){
    sneak();
    return;
  }
}*/

//Loc Multiplier
function unlockLcm(){
  nhy.style.opacity = '0'
  locm.style.opacity = "1"
};



//Dev for hire
function unlockDfh(){
  dfh.style.opacity = '1'
}


//!!THESE FUNCTIONS CONTROL EVERY UPGRADE!!
function bou(){
 if(totalClicks === 1 && able === 0){
    up.innerHTML = `Type: "var loc += 1"`
    wToType = `var loc += 1`
  }else if(totalClicks === 5 && able === 1){
    up.innerHTML = 'Great! Now for some upgrades! first, type [div][/div]'
    wToType = `[div][/div]`
  }else if(totalClicks === 6 && able === 2){
    up.innerHTML = `Now, lets fill in our div element. first, add [h1]Loc Multiplier[/h1]`
    wToType = `[h1]Loc Multiplier[/h1]`
  }else if(totalClicks === 7 && able === 3){
    up.innerHTML = `lets add a description: [p]Increses LOC by 1 per line typed[/p]`
    wToType = `[p]Increses LOC by 1 per line typed[/p]`
  }else if(totalClicks === 8 && able === 4){
    up.innerHTML = `lets add the buy button: [button]Buy | Cost: 20[/button]`
    wToType = `[button]Buy | Cost: 20[/button]`
  }else if(totalClicks === 9 && able === 5){
    up.innerHTML = `Good Job! The Upgrade show now show! keep using var loc += 1 to get LOC`
    wToType = `var loc += 1`
    unlockLcm();
  }else if(totalClicks === 25 && able === 6){
    up.innerHTML = `I think we need some more developers, type, [div][/div]`
    wToType = `[div][/div]`
  }else if(totalClicks === 26 && able === 7){
    up.innerHTML = `Next, type: [h1]Dev For Hire[/h1]`
    wToType = `[h1]Dev For Hire[/h1]`
  }else if(totalClicks === 27 && able === 8){
    up.innerHTML = `Now, [p]Hire some devs for work for you[/p]`
    wToType = `[p]Hire some devs for work for you[/p]`
  }
  localStorage.setItem('able', able)
};

function sou(){
  if(totalClicks === 1){
      able = 0
    }else if(totalClicks === 5){
      able = 1
    }else if(totalClicks === 6){
      able = 2
    }else if(totalClicks === 7){
      able = 3
    }else if(totalClicks === 8){
      able = 4
    }else if(totalClicks === 9){
      able = 5
    }else if(totalClicks === 25){
      able = 6
    }else if(totalClicks === 26){
      able = 7
    }else if(totalClicks === 27){
      able = 8
    }
};

//upgrades

//Loc Multiplier
locm.addEventListener("click", function(){
  if(totalClicks >= locmPrice){
    totalClicks -= locmPrice;
    clicks.textContent = "Lines of code: " + totalClicks;
    setInterval(() => {
      funds += 1
      localStorage.setItem('funds', funds)
      mon.innerHTML = `Funds: $${funds}`
    }, 1000);
  }
});

// Event listeners
check.addEventListener("click", function(){
  checkCode();
  sou();
  bou();
}, false);
document.addEventListener("keydown", enter, false);
btn_data.addEventListener('click', eraseData, false);
//document.addEventListener("keydown", key1, false);