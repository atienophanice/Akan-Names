 function checkDay() {
     var year, month, day;
     var male, female;

     year = parseInt(document.getElementById("year").value);
     month = parseInt(document.getElementById("month").value);
     day = parseInt(document.getElementById("day").value);

     male = document.getElementById("radio1").checked;
     female = document.getElementById("radio2").checked;

     var century = parseInt((year + 1) / 100 + 1);
     var fomular = (((26 * (month + 1) / 10)) + ((5 * year / 4)) + ((century / 4) - 2 * century - 1) + day) % 7;
     var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
     var femaleNames = ["Akosua", "Adowa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
     var daysOfTheWeek = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satarday"];
     var indexDate = Math.floor(fomular);

     if (year > 0 && year < 2022) {
         if (month > 0 && month < 13) {
             if (day > 0 && day < 32) {

                 if (male) {
                     document.getElementById("result").innerHtml = ("Your Akan name is" + maleNames[indexDate] + "you were born on a" + daysOfTheWeek[indexByDate]);
                 } else {
                     document.getElementById("result").innerHtml = ("Your Akan name is" + femaleNames[indexDate] + "you were born on a" + daysOfTheWeek[indexByDate]);
                 }

             } else {
                 alert("insert the correct day");
             }

         } else {
             alert("insert the correct month");
         }

     } else {
         alert("insert the corect year");
     }
 }