//for player 1

var randomNumber1=Math.floor(Math.random()*6)+1;        //  0-6
console.log(randomNumber1);

var randomDiceImage1="images/dice"+randomNumber1+".png"; 
//  images/dice1.png-images/dice6.png


var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage1);

//for player 2

var randomNumber2=Math.floor(Math.random()*6) +1;

var randomDiceImage2="images/dice"+randomNumber2+".png";

var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2);




if (randomNumber1 > randomNumber2)
{   var result=document.querySelector("h1");
    result.innerHTML="🚩 Player 1 Wins !";}

else if (randomNumber1 < randomNumber2)
{   var result=document.querySelector("h1");
    result.innerHTML="Player 2 Wins ! 🚩";
}
 
else
{   var result=document.querySelector("h1");
    result.innerHTML="Draw !";

}



