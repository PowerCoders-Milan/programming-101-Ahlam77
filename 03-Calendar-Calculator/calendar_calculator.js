//insert your pseudocode below
/* we can make 2 var as month and days.
for the var month will contin the name of the months.
for the second var will contin the num of day of the month before
after that we  need to calcolet the days from the months befor + the days are requeird 
ex" if i want to the 4th of april it means (31 + 28 + 31 + 4), all days previus the day we want.


here
*/

//Insert your code below
var month, day, Result;


month = 'February';
day = 18;

if (month == 'January') {
  Result = 0 + day;
}
if (month == 'February') {
  Result = 31 + day;
}
if (month == 'March') {
  Result = 59 + day;
}
if (month == 'April') {
  Result = 90 + day;
}
window.alert(Result);