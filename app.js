var user_number = document.getElementById("user_number");
var random_number = document.getElementById("random_number");
var result = document.getElementById("result");
var info_box_result = document.getElementById("info_box_result");
var total = document.getElementById("total");
var win  = document.getElementById("win");
var loss = document.getElementById("loss");
var massageshow = document.getElementById("massageshow");
var count = 10;
var won = 0;
var losted = 0;

function tryMyluck(userNumber){
  var randomNumber = Math.ceil(Math.random()*6);
  user_number.innerText = userNumber;
  random_number.innerText =randomNumber;
  total.innerText = --count;
  if(userNumber === randomNumber){
    result.innerText = "You win";
    info_box_result.style.background = ("green");
    win.innerText = ++won
  }else{
    result.innerText = "You loss";
    info_box_result.style.background =("red");
    loss.innerText = ++losted
  }
  check();
}
function check(){
  if(count==0){
    if(won >= 3){
      massageshow.innerText = "Congration ! You win ";
      massageshow.style.color = ("green");

    }else{
      massageshow.innerText="Sorry ! You loss";
      massageshow.style.color=("red")
    }
    count=10;
    win = 0;
    loss = 0 ;
    total.innerText = count;
    win.innerText = win ;
    loss.innerText = loss;
  }
}

