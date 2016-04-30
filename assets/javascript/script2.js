$(document).ready(function() {


    console.log("ready!");
   // computernumber();
   // crystalNumbers();


//function computernumber = Math.floor((Math.random() * 100) + 19;
    var randCrystal1 = 0;
    var randCrystal2 = 0;
    var randCrystal3 = 0;
    var randCrystal4 = 0;
    var totalCrystals = 0;
    var clickCounter = 0;
    var wins= 0;
    var losses = 0;
    var randomNumber = 0;


  //function computernumber() {
    //var min1 = 15;
    //var max1= 10;
    //randomNumber= Math.floor(Math.random()*(max1-min1+1)+min1);
    //console.log(randomNumber);
    //$('#computerNumber').html('<h5>'+ randomNumber +'</h5>');
//}

function crystalNumbers() {
    var min = 1;
    var max= 5;    
     var min1 = 15;
    var max1= 10;
    randomNumber= Math.floor(Math.random()*(max1-min1+1)+min1);
    console.log(randomNumber);
    $('#computerNumber').html('<h5>'+ randomNumber +'</h5>');
    randCrystal1= Math.floor(Math.random()*(max-min+1)+min);
    randCrystal2= Math.floor(Math.random()*(max-min+1)+min);
    randCrystal3= Math.floor(Math.random()*(max-min+1)+min);
    randCrystal4= Math.floor(Math.random()*(max-min+1)+min);
    console.log(randCrystal1);
    console.log(randCrystal2);
    console.log(randCrystal3);
    console.log(randCrystal4);
   
 }
 
function winslosses (){
console.log(totalCrystals);
console.log(randomNumber);
if (totalCrystals === randomNumber){
  wins++;
  console.log(wins) 
$('#W').html('Total wins '+'<h6>'+ wins +'</h6>');
 
}
else
 
 if (totalCrystals > randomNumber){
  losses++;
    $('#L').html('Total losses  '+'<h6>'+ losses +'</h6>');
    }
 }


 console.log("ready2");

$('#crystalspurple').on('click', function() {
  if (clickCounter++ === 0) {crystalNumbers()};

  totalCrystals = totalCrystals + randCrystal1;
$('#yourNumber').html('<h5>'+ totalCrystals +'</h5>');
   console.log('randomNumber');
   console.log(randomNumber);
   console.log(totalCrystals);
   console.log(randCrystal1);
   winslosses();
 });

$('#crystalspink').on('click', function() {
  if (clickCounter++ === 0) {crystalNumbers()};
 totalCrystals = totalCrystals + randCrystal2;
$('#yourNumber').html('<h5>'+ totalCrystals +'</h5>');
   console.log(totalCrystals);
   console.log(randCrystal1);
   winslosses();
});

$('#crystalsblue').on('click', function() {
  if (clickCounter++ === 0) {crystalNumbers()};
 totalCrystals = totalCrystals + randCrystal3;
$('#yourNumber').html('<h5>'+ totalCrystals +'</h5>');
   console.log(totalCrystals);
   console.log(randCrystal1);
   winslosses();
});

   $('#crystalsyellow').on('click', function() {
  if (clickCounter++ === 0) {crystalNumbers()};
 totalCrystals = totalCrystals + randCrystal4;
$('#yourNumber').html('<h5>'+ totalCrystals +'</h5>');
   console.log(totalCrystals);
   console.log(randCrystal1);
   winslosses();




});
});