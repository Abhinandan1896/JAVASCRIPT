//Conditional Statements:- executes based on the conditions

//[1]if-else statement:-used when the condition is either true or fales
let age=15;
if(age<18){
    console.log("you are allowed in this kidsplay ground");
}else{
    console.log("you are Not allowed inside the ground");
}

//[2]Nested if-else statement:- used when there is more than 1 condition 
let a=18;
if(a==0){
    console.log("Not born only");
}else if(a<=18){
    console.log("under aged");
}else if(a>18){
    console.log("over aged");
}else{
    console.log("please enter proper entry");
}

//[3]Switch Statements:- used when the conditions are similar but in large quantity.

switch (new Date().getDay()) {
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
    case  6:
      day = "Saturday";
      break;
    default:
      day="please check calender"  
  }
  console.log("Today is " + day);

  //[4]Ternary Operator:- its like if statements younger brother
  //syntax condition?block of code if it is true:block of code if it is false
  //Eg-1
    let PMarks = 40
    let res=(PMarks > 39)?
    "Pass":"Fail";
    console.log(res);

  //Eg-2
    let pass=23;
    let userlogin=23;
    (userlogin=pass) ? console.log('login') : console.log('logout');

