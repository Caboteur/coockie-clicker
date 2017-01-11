//selection du HTML
var p1 = document.querySelector("p1");
var p2 = document.querySelector("p2");
function button1 (fonc) { document.getElementById('boutton').addEventListener('click', fonc );};
button1(clique);
button1(DémarerautoClick);

var button2 = document.getElementById('multiplicateur').addEventListener('click', multiplier);

//Jeux

var score = 0;
var multiplicateur = 1;

function afficherScore () {
p1.innerHTML= "Reserve de coockie: " + '\r '+score;
};

function afficherMultiplicateur (){
p2.innerHTML="Tu peux acheter  "+ multiplicateur +"  " + "four, à partir de " + boost() + "  coockie";
};
afficherScore();
afficherMultiplicateur ();

function clique () {

score = score + multiplicateur;
afficherScore();
//arrièrePlan();
};

function boost() {
return 50 * multiplicateur * multiplicateur;
};



function multiplier() {
if (score >= boost()) {
score -= boost();
multiplicateur += 1;
afficherScore();
afficherMultiplicateur();
}
else if (score -= boost()<0)
{
alert("continue de cliquer");
}
};

function autoClick () {
setInterval(clique,4000);
};

function DémarerautoClick () {
if (score>200) {
autoClick ();
}
};

//function arrièrePlan() {
//if (score>20)
//var z = new Image();
//z.src= "C:/Users/Dell/Pictures/giphy.gif";
//document.getElementById("fond").style.background=z;
//};

function cana () {
if (score<20)
}
