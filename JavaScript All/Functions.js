//FUNCTION- we can use it whenever there is need so it made for code reusibilty purpose only. whenever we call it revoke execute and return the value of function. 
//-functions flow from down to up steps means first calling then performing 

//1)Normal Function
function sum(){      //defination of function
    let num1=12;
    let num2=12;
    console.log(num1+num2);
}
sum();             //Calling of function

//2)Function with parameters/Arguments
function sum1(v1,v2){             //defining function with parameters ,parameters are directly become a variable no need to define them using let, var, const..
    let add=v1+v2;                //performing operation
    console.log('addition of given number is ',add); //output
}
sum1(14,32);                     //calling of function and output will generate
sum1(34,55);

//3)Function with return value
function sum2(n1,n2){
    let result=n2+n1;
    return result;
}
let add1=sum2(12,33);
console.log('result is',add1);
let add2=sum2(12,40);
console.log('result is',add2)

//4)Function by passing array..
function sum3(arr){
    let total=0;
    for(let i=0;i<arr.length;i++){
      total=total+arr[i];
}
return total;
}
let sumarray=[1,2,3,4,5,6,7];
let arresult=sum3(sumarray);
console.log(arresult);

//5)Function without argument/parameters..
function sum4(){ //here arguments is predefined and by default function create it
    let tot=0;
    for(let i=0;i<arguments.length;i++){
        tot=tot+arguments[i];
    }
    return tot;
}
let add3=sum4(1,2,3,4,5,6,7,8,9);
console.log(add3);

//6)Arrow Function-(=>):-everything is same as in the original function, same properties will be applicable to arrow function also, only the way of writing is different..
let sum5=(var1,var2)=>{  //===//  //function sum5(){}
    let add4=var1+var2;
    console.log(add4)
}
sum5(55,55);

//7)CallBack Function:
//A callback is a function passed as an argument to another function This technique allows a function to call another function A callback function can run after another function has finished