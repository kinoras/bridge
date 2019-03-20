var countDownDateOriginal1 = new Date("Mar 29, 2019 00:00:0");
var countDownDateOriginal2 = new Date("Apr 10, 2019 00:00:0");

var countDownDate1 = countDownDateOriginal1.getTime();
var countDownDate2 = countDownDateOriginal2.getTime();

   var cddy1 = countDownDateOriginal1.getFullYear() - 1911;
   var cddm1 = countDownDateOriginal1.getMonth() + 1;
   var cddd1 = countDownDateOriginal1.getDate();
   var cddh1 = countDownDateOriginal1.getHours();
   var cddx1 = countDownDateOriginal1.getMinutes();

   var cddy2 = countDownDateOriginal2.getFullYear() - 1911;
   var cddm2 = countDownDateOriginal2.getMonth() + 1;
   var cddd2 = countDownDateOriginal2.getDate();
   var cddh2 = countDownDateOriginal2.getHours();
   var cddx2 = countDownDateOriginal2.getMinutes();

   if (cddy1 < 100){ cddy1 = '0' + cddy1;}
   if (cddm1 < 10){ cddm1 = '0' + cddm1;}
   if (cddd1 < 10){ cddd1 = '0' + cddd1;}
   if (cddh1 < 10){ cddh1 = '0' + cddh1;}
   if (cddx1 < 10){ cddx1 = '0' + cddx1;}
                  
   if (cddy2 < 100){ cddy2 = '0' + cddy2;}
   if (cddm2 < 10){ cddm2 = '0' + cddm2;}
   if (cddd2 < 10){ cddd2 = '0' + cddd2;}
   if (cddh2 < 10){ cddh2 = '0' + cddh2;}
   if (cddx2 < 10){ cddx2 = '0' + cddx2;}


// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
   var distance1 = countDownDate1 - now;
   var distance2 = countDownDate2 - now;
  // Time calculations for days, hours, minutes and seconds
   var days1 = Math.floor(distance1 / (1000 * 60 * 60 * 24)) + 1;
   var hours1 = Math.floor((distance1 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes1 = Math.floor((distance1 % (1000 * 60 * 60)) / (1000 * 60));
   var seconds1 = Math.floor((distance1 % (1000 * 60)) / 1000);
   
   var days2 = Math.floor(distance2 / (1000 * 60 * 60 * 24)) + 1;
   var hours2 = Math.floor((distance2 % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutes2 = Math.floor((distance2 % (1000 * 60 * 60)) / (1000 * 60));
   var seconds2 = Math.floor((distance2 % (1000 * 60)) / 1000);
   
   if (days1 < 10){ days1 = '0' + days1;}
   if (hours1 < 10){ hours1 = '0' + hours1;}
   if (minutes1 < 10){ minutes1 = '0' + minutes1;}
   if (seconds1 < 10){ seconds1 = '0' + seconds1;}
   ;
   if (days2 < 10){ days2 = '0' + days2;}
   if (hours2 < 10){ hours2 = '0' + hours2;}
   if (minutes2 < 10){ minutes2 = '0' + minutes2;}
   if (seconds2 < 10){ seconds2 = '0' + seconds2;}

   if (days1 <= 1){
      $('.s1').css('color', '#333');
   }
   
   if (days2 <= 1){
      $('.s2').css('color', '#333');
   }
   
   
  // Display the result in the element with id="demo"
   document.getElementById("day1").innerHTML = days1;
   document.getElementById("day2").innerHTML = days2;
   document.getElementById("time1").innerHTML = "(+ " + hours1 + "-" + minutes1 + "-" + seconds1 + ")";
   document.getElementById("time2").innerHTML = "(+ " + hours2 + "-" + minutes2 + "-" + seconds2 + ")";
  // If the count down is finished, write some text 
  if (distance1 < 0) {
    clearInterval(x);
    document.getElementById("main").innerHTML = "畢業考到了！加油！";
  }
   if (distance2 < 0) {
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
   $("#lastday1").html(cddy1 + '-' + cddm1 + '-' + cddd1 + ' ' + cddh1 + ' H ' + cddx1);
   $("#lastday2").html(cddy2 + '-' + cddm2 + '-' + cddd2 + ' ' + cddh2 + ' H ' + cddx2);
}, 1000);