 function checkDay() {
     var year, month, day;
     var male, female;

     year = perseInt(document.getElementById("year").value);
     month = perseInt(document.getElementById("month").value);
     day = perseInt(document.getElementById("day".value));

     male = document.getElementById("radio1").checked;
     female = document.getElementById("radio2").checked;

     var centuary = parseint((year + 1) / 100 + 1);
     var formula = (((26 * (month + 1) / 10)) + ((5 * year / 4)) + ((century / 4) - 2 * century - 1) + day) % 7;
     var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
     var femaleNames = ["Akosua", "Adowa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
     var daysOfTheweek = ["sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satarday"];
     var indexByDate = Math.floor(formula);

     if (year < 0 && year > 2022) {
         if (month > 0 && month < 13) {
             if (day > 0 && day < 32) {

                 if (male) {
                     document.getElementById("result").innerHtml("Your Akan name is" + maleNames[indexByDate] + "you were born on a" [daysOfTheweek][indexByDate]);
                 } else {
                     document.getElementById("result").innerHtml("Your Akan name is" + femaleNames[indexByDate] + "you were born on a" [daysOfTheweek][indexByDate]);
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