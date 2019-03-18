var countDownDateOriginal = new Date("Apr 10, 2019 00:00:0");

var countDownDate = countDownDateOriginal.getTime();

   var cddy = countDownDateOriginal.getFullYear() - 1911;
   var cddm = countDownDateOriginal.getMonth() + 1;
   var cddd = countDownDateOriginal.getDate();
   var cddh = countDownDateOriginal.getHours();
   var cddx = countDownDateOriginal.getMinutes();

   if (cddy < 100){ cddy = '0' + cddy;}
   if (cddm < 10){ cddm = '0' + cddm;}
   if (cddd < 10){ cddd = '0' + cddd;}
   if (cddh < 10){ cddh = '0' + cddh;}
   if (cddx < 10){ cddx = '0' + cddx;}


// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24)) + 1;
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
   
   if (days < 10){ days = '0' + days;}
   if (hours < 10){ hours = '0' + hours;}
   if (minutes < 10){ minutes = '0' + minutes;}
   if (seconds < 10){ seconds = '0' + seconds;}

   if (days < 1){
      $('.s').text('');
   }
   
   
  // Display the result in the element with id="demo"
   document.getElementById("day").innerHTML = days;
   document.getElementById("time").innerHTML = "(+ " + hours + "-" + minutes + "-" + seconds + ")";
  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("main").innerHTML = "畢業考到了！加油！";
  }
}, 1000);

var m = setInterval(function() {
   var d = new Date();
   var tdy = d.getFullYear() - 1911;
   var tdm = d.getMonth() + 1;
   var tdd = d.getDate();
   var tdh = d.getHours();
   var tdx = d.getMinutes();

   if (tdy < 100){ tdy = '0' + tdy;}
   if (tdm < 10){ tdm = '0' + tdm;}
   if (tdd < 10){ tdd = '0' + tdd;}
   if (tdh < 10){ tdh = '0' + tdh;}
   if (tdx < 10){ tdx = '0' + tdx;}

   document.getElementById("dayx").innerHTML = tdy + "-" + tdm + "-" + tdd + " " + tdh + " " + "H" + " " + tdx;
   $("#lastday").html(cddy + '-' + cddm + '-' + cddd + ' ' + cddh + ' H ' + cddx);
}, 1000);