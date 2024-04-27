

var dice = document.getElementById("dice");
var userInput = document.getElementById("dice_input");
var win = document.getElementById("won");

function lucktry(){
    var uservalue = userInput.value;
    if(uservalue > 0 && uservalue < 7){
     var diceNumber = Math.ceil(Math.random ()* 6);

     dice.innerText = diceNumber
     if(diceNumber == uservalue){
        win.innerText = "You win" ;
        win.style.color=("green");

     }else{
        win.innerText = "Try again ";
        win.style.color = ("red")
     }
    }else{
        win.innerText = "Number sahi da lo"
        win.style.color ="orange"
    }
    
}
