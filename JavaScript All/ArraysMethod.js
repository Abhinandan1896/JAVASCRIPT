//Array:- An array is a special variable, which can hold more than one value:

//Arrays Methods:- when we use loop in the arrays then it very helpful for solving the great and complex problems

//[1]Push : push the new value inside the array at last
let arr1=[1,2,3,4,5,6];
arr1.push(7,8);
console.log(arr1);

//[2]Pop : delete the last element of array
arr1.pop();
console.log(arr1);

//[3]shift : delete the first element of array
arr1.shift();
console.log(arr1);

//[4]unshift : add a new element inside array at the start
arr1.unshift(0);
console.log(arr1);

//[5]Splice: 2-starting index from where to insert item & 2-is how many is to delete or replace with original item from 2 index
arr1.splice(2,2,44,45)
console.log(arr1);

//[6]Slice: The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

let animals=['tiger','lion','sarrow','jackle','etc']
console.log(animals.slice(2));
console.log(animals.slice(1,6));

//[7]Concat: to connect two things
 let arr=[1,2,3,4];
 let arr2=[5,6,7,8];
 let arr3=[9,10,11,12];
 console.log(arr.concat(arr2));
 console.log(arr.concat(arr2,arr3));

 //[8]fill: add element on the possition of index 2 and of index before 4, by default if we dobt give start and end possition whole array will be filled with fill value
 let arr4=[1,2,3,4,5,6]
 arr4.fill('anurag',2,4); //insert the anraug at 2,3 rd index
 console.log(arr4);
 arr4.fill("hari") //insert it from start bydefault start index and till last index if we dont mention.
 console.log(arr4); 

//[9]includes:- search for element if it is there return true else false
let arr5=[1,2,3,4,5,6]
console.log(arr5.includes(5));
console.log(arr5.includes(10));

//[10]indexOf()
console.log(arr5.indexOf(4));

//[11]isArray()
let arr6=[1,2,3,45];
console.log(Array.isArray(arr6));

//[12]map():it will apply to all the element present in the array list
const numbers = [65, 44, 12, 4];
const newArr = numbers.map(myFunction)
console.log(newArr)
function myFunction(num) {
  return num * 5;
}

//[13]Reverse the array
   let maths=[1,2,3,4,24];
   console.log(maths.reverse());

//[14]Coverting to array     //Sentense
   let nam='anurag sir';
   let array1=nam.split(' '); //single quote will converts all words into characters array
   let array2=nam.split(''); //single quote with space inbetween will converts all sentense into words array
   console.log(array1);
   console.log(array2);

//[15]join- it will join the each array item with given input(its like linking of bridge element)
     let num3=[1,2,3,4,5,6,7,8];
     console.log(num3.join('-'));

//[16]Sort:sort the array by default into ascending order but not in value based it is based on the possition of the value
    let math=[1,2,3,6,3,4,6,8,6,4,9,20,45,6,65];
    console.log(math.sort());

    //1)proper ascending order sort of array
        var array=[2,4,1,20,30,120,8,5]; 
        console.log("it is wrong sorting of array")
        console.log(array.sort());
        var result=array.sort(function compare(a,b)  
        {  
          return a-b;  
        });  
        console.log(result)

    //2)proper descending order sort of array
        var array3=[2,4,1,20,30,120,8,5];  
        var result1=array3.sort(function compare(a,b)  
          {  
           return b-a;  
          });  
          console.log(result1)

//[17]filter: filter down the element of array which satisfy the function requirement of array
    const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    const resul = words.filter(word => word.length > 6);
    console.log(resul);

//[18]For each: to perform specific action on each element of array, this method always return the undefined value
  const nams=[1,2,3,4,5,6];
  let sum=0;
  nams.forEach((number)=>sum +=number);
  console.log(sum)

//[19]Reduce: 


