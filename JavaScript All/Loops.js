//Loops:- The JavaScript loops are used to iterate the piece of code using for, while, do while or for-in loops. It makes the code compact. It is mostly used in array.

//[1]for loop:-The JavaScript for loop iterates the elements for the fixed number of times. It should be used if number of iteration is known. 
// //Eg-1
let a=5;
let sum=0;
for(let i=1;i<=a;i++){
    sum=sum+i;
    console.log(sum);
}

//[2]While loop:-The JavaScript while loop iterates the elements for the infinite number of times. It should be used if number of iteration is not known.
//Eg-1
let b=0;
while(b<5){
    console.log("Hare Krishna")
    b++;
}

//[3]Do While

//[4]for in:-The JavaScript for in statement loops through the properties of an Object
//Eg-1
const numbers = [45, 4, 9, 16, 25];
let sum1=0;
for(let p in numbers){  //p is integer in the numbers array
    let sum1=sum1+numbers[p] //printing value at pth integer
    console.log(sum)
}

//[5]for of:-it is speacially to make somthing similar in the whole array
   let maths=['apple','bada apple','chota apple','doble apple'];
   let Uppermaths=[]; //empty Array
   for(const badaletter of maths){
       Uppermaths.push(badaletter.toUpperCase());
    }
     console.log(Uppermaths);
