 function checkDayOfWeek() {
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
     var dayByIndex =
 }