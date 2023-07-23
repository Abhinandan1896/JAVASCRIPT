//Parameter vs Arguments:-
//Parameter:- it is used when we need to define the function, it is used to pass the argument inside the function, it refers to argument given at the time of of function call, parameter name may vary from argument
//arguments:- it is passed when we make function call, it is real javascript value, it's real value passed to parameter


//Global scope vs Local scope:-
//when you declare anything in the global scope you can access it anywhere you want and when you declare it in local you can access in that perticular local scope onlu

//Hoisting in JS:-
     /*Hoisting(it is inbuilt concept of JS)**- let-get error , var- undefined,   function-function as it returns, temporal dead zone(let or const),always declare the variable At the top of the code
     
     When you call function without parenthesis that means its reference is passed(eg- callback function in addeventlistner eg-a) and when you used it with parenthesis that means function call is happening (eg-a(2,3))  */

//Closures:- it is also concept of javascript it helps in the scopechain of javascript code blocks

//Event loop:-
//it is looping of execution of callstack :- first it will create callstack from executing code then it will goes to webapis if these web apis are used in code then they check which type of queve is like microtask queve(promises) or task queve(callbak, setTimeout(),etc) then it will come under event loop and from event loop to callstack and then callstack quikly executes it
const user1=()=>{
    console.log("hello one");
}
const user2=()=>{
    console.log("hello tow");
    setTimeout(()=>{
        console.log("hellow, i am inside a loop")
    },2000) 
}
const user3=()=>{
    console.log("hello three");
}
user1();
user2();
user3();

//this and new keywords:-
//THIS keywords represent the parent object like in case of browser it represents the windows and NEW keyword in JavaScript is used to create new and unique instances.

//execution context:-
//it has two enviroment 1)variable enviroment(memory allocation of variable etc) 2)thread of execution(actual execution og code happens here)
//everything is javascript happens inside an execution context
//JavaScript is a synchronous single-threaded langauge
//

//callstack:-
//call stack maintains the order of execution of execution context
//here in the callstack at the time of execution of code two things happen one global execution context generates where all the code can execute and again local execution context generates whenver there is need and again delete it for to run another local execution context and finally afte all code is run then global execution context is alswo gets deleted.

//spread and rest operator:-
//Spread operator:The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
//Rest parameter:The rest parameter syntax allows a function to accept an indefinite number of arguments as an array, providing a way to represent variadic functions in JavaScript.
function sum(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
      total += arg;
    }
    return total;
  }
  
  console.log(sum(1, 2, 3));

//Promises:-
//in JavaScript a promise is a good way to handle asynchronous operation. it  is used to find out if the asynchronous operation is successfully completed or not.
//it has three states pending, fullfilled, rejected
//Syntax
let promise=new Promise(function(resolve,reject){
 //do something
})
//How to used promise using callback then(used when resolve) catch(rejected) finally(run on both cases) method 
//eg-1-- synchronous code
const ticket=new Promise(function(resolve,reject){
    const isboarded=false;
    if(isboarded){
        resolve("you are not in the platform")
    }else{
        reject("you are on the platform")
    }
})
ticket
.then((data)=>{
    console.log('woooho', data)
})
.catch((data)=>{
    console.log('oh no--', data)
})
.finally(()=>{
    console.log('i will always executed')
})

//eg-2 is for asunchronous code we use asynch and await

//asynch and await:-
function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }
  
  async function asyncCall() {
    console.log('waiting for resolve and reject');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // Expected output: "resolved"
  }
  
  asyncCall();

//web apis fetch():-
//it is very speacial power provided by these web apis from browser
//so browser raps up all webapis superpower in window object and gives this window objects access to CallStack
//setTimeout(), fetch(), dom ,local storage, console, location

//call by value and call by reference:-Primitive(number,string,boolean etc) are passed by there values generaly and non-primitives(arays, object etc) are always passed by there reference
//when you pass the data by call by value then that is independent of older one
let a=5;
let b=a; //here just value is passed not its reference i.e not memory location but only memory value
b=56;   //new value assign
console.log(b); 
console.log(a); //older value is there 5
//when you pass the data by call by reference then that is dependent on each other
let c=[1,2,3];
let d=c;
d.push(12); //here we just chanhed the d array value but it will reflect on the c array also that means value is passed by reference of it
console.log(d)
console.log(c)

//destructuring:

//setTimeout():-
//setIntrval():-
