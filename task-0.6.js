 //bonus question attempt
 function getMaximum(num1, num2, num3) {
     var max = 0;

     for (index = 0; index < arguments.length; index++) {

         if (max < arguments[index]) {
             max = arguments[index];
         }
     }

     return max;
 }

 console.log(getMaximum(100, 88, 9, 99, 0, 7, 600));