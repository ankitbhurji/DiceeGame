
// for player 1
var randomNumber1 = ""
const checkNumber1 = Math.floor(Math.random()*10);
if(checkNumber1>6){
    randomNumber1 = 10 - checkNumber1
}
else if(checkNumber1===0){
    randomNumber1 = checkNumber1 + 1;
}
else{
    randomNumber1 = checkNumber1;
}


//for player 2
var randomNumber2 = ""
const checkNumber2 = Math.floor(Math.random()*10);
if(checkNumber2>6){
    randomNumber2 = 10 - checkNumber2
}
else if(checkNumber2===0){
    randomNumber2 = checkNumber2 + 1;
}
else{
    randomNumber2 = checkNumber2;
}


// for player 1
var pic = document.getElementById("switchPic1");
switch(randomNumber1){
    case 1 :
    console.log(randomNumber1);
    pic.src = "images/dice1.png"
    break;
    case 2 :
    pic.src = "images/dice2.png"
    break;
    case 3 :
    pic.src = "images/dice3.png"
    break;
    case 4 :
    pic.src = "images/dice4.png"
    break;
    case 5 :
    pic.src = "images/dice5.png"
    break;
    case 6 :
    pic.src = "images/dice6.png"
    break;
}


// for player 2
var pic = document.getElementById("switchPic2");
switch(randomNumber2){
    case 1 :
    console.log(randomNumber1);
    pic.src = "images/dice1.png"
    break;
    case 2 :
    pic.src = "images/dice2.png"
    break;
    case 3 :
    pic.src = "images/dice3.png"
    break;
    case 4 :
    pic.src = "images/dice4.png"
    break;
    case 5 :
    pic.src = "images/dice5.png"
    break;
    case 6 :
    pic.src = "images/dice6.png"
    break;
}


// show the winer
if(randomNumber1>randomNumber2){
    document.getElementById("winner").innerHTML = "Player 1 Wins !";
}else if(randomNumber1 == randomNumber2){
    document.getElementById("winner").innerHTML = "Draw The Match !";
}
else(
    document.getElementById("winner").innerHTML = "Player 2 Wins !"
)


//button refresh
function Refresh(){
    location.reload()   
}