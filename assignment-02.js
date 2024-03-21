  let check = true;
  let i = 0;


  let zeroDigit = "0";
  let zeroDigitHigh = "0";
  let currentCount = 0;
  let highestCount = 0;


  let Gendiv = [];
  let divclk = [];
  let checkNoClick = false;
  let buttonclick = document.querySelectorAll(".clickables");

buttonclick.forEach(function(button) {
  button.addEventListener("click", function() {
    divclk.push(button.id);

    console.log("Buttons Pressed" ,divclk);
    if(divclk[i] == Gendiv[i])
    {
      console.log("Correct Input " + i);
    }
    else{
      console.log("Incorrect Input " + i);
      check = false;
      defaultMode();
    }
    i++;
  });
});

function startGame()
{
  currentCount = 0;
  check = true;
  Gendiv = [];
  document.getElementById("startSignal").style.background ='green';
  setTimeout(flashInputs, 3000);
}

async function flashInputs()
{
while(check == true)
{
  let x = Math.floor((Math.random() * 4) + 1);
  var buttonNumber = "color"+x;
  Gendiv.push(buttonNumber);
  console.log("Buttons Pressed" , Gendiv);
  divclk=[];
  i = 0;
  for (var k = 0; k < Gendiv.length; k++)
  {
  if(Gendiv[k] == "color1")
  {
    document.getElementById("color1").style.background ='#000000';
    await delayFewSeconds(50);
    setTimeout(function(){document.getElementById("color1").style.background = 'green';},300);
  }
  else if(Gendiv[k] == "color2")
  {
    document.getElementById("color2").style.background ='#000000';
    await delayFewSeconds(50);
    setTimeout(function(){document.getElementById("color2").style.background = 'red';},300);
  }
  else if(Gendiv[k] == "color3")
  {
    document.getElementById("color3").style.background ='#000000';
    await delayFewSeconds(50);
    setTimeout(function(){document.getElementById("color3").style.background = 'yellow';},300);
  }
  else
  {
    document.getElementById("color4").style.background ='#000000';
    await delayFewSeconds(50);
    setTimeout(function(){document.getElementById("color4").style.background = 'blue';},300);
  }
    if(Gendiv.length > 12)
    {
      await delayFewSeconds(100);
    }
    if(Gendiv.length > 8)
    {
      await delayFewSeconds(300);
    }
    if(Gendiv.length > 4)
    {
      await delayFewSeconds(600);
    }
    if(Gendiv.length > 1)
    {
      await delayFewSeconds(900);
    }
  }
  if(check!==false)
  {

    await delayFewSeconds(3000);
    if(divclk.length < Gendiv.length)
    {
      check = false;
      defaultMode();
    }
    else
    {
      currentCount++;
    }
  }
}
if(currentCount<10)
{
  zeroDigit = "0";
}
else
{
  zeroDigit = "";
}
if(highestCount<10)
{
  zeroDigitHigh = "0";
}
else
{
  zeroDigitHigh = "";
}
document.getElementById("LastScore").innerHTML = zeroDigit + currentCount;
if(currentCount > highestCount)
{
  document.getElementById("AllTimeHighScore").innerHTML = zeroDigitHigh + currentCount;
}
console.log("End off Inputs method:" );
}

function defaultMode()
{
  document.getElementById("startSignal").style.background ='red';
}

function delayFewSeconds(desiredSeconds)
{
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve();
    },desiredSeconds);
  });
}