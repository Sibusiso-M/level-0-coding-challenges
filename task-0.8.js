 function numberToTime(number) {
     if (number < 60) {
         var minute = number;
         return (minute > 1 || minute == 0) ? "0 hours, " + minute + " minutes" : "0 hours, " + minute + " minute";
     } else {
         var minute = (number % 60);
         var hour = Math.floor(number / 60);
         return ((hour > 1) ? hour + " hours" : hour + " hour") + ", " + ((minute > 1 || minute == 0) ? minute + " minutes" : minute + " minute");
     }
 }

 //Example
 console.log(numberToTime(133));