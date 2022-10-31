const currentDay= new Date('31 octomber, 2022 15:18:50');
let day = currentDay.getDay();
console.log(day);
switch (day) {
    case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
         day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
}
console.log(day)
let i=0;
for (let i = 0; i < 50; i++) {

    console.log()
}

while (i<150) {
    console.log();
    i++
}
 
do {
    console.log(i)
    i++;
  }
  while (i < 100);

  