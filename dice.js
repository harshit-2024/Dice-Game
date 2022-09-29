var a = Math.floor(Math.random() * 6) + 1;
var dice1 = "./images/dice" + a + ".png";
document.querySelectorAll("img")[0].setAttribute("src", dice1);

var b = Math.floor(Math.random() * 6) + 1;
var dice2 = "./images/dice" + b + ".png";
document.querySelectorAll("img")[1].setAttribute("src", dice2);

var verdict = "";
if(b>a){
	verdict = "Player 2 Wins";
}
else if(a>b){
	verdict = "Player 1 Wins";
}
else{
	verdict = "Draw";
}


document.querySelector("h1").textContent = verdict;