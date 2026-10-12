



// function outter(){
// let a = 5;
// function inner(){
// console.log(a);
// let a = 7;
// }
// inner()
// }
// outter()


// function outter(){
// var a = 5;
// function inner(){
// console.log(a);
// var a = 7;
// }
// inner()
// }
// outter()


// function outter(){
// const a = 5;
// function inner(){
// console.log(a);
// const a = 7;
// }
// inner()
// }
// outter()



//==== closure=====>

// function outter(){
// const a = 5;
// function inner(){
// console.log(a);

// }
// return inner;
// }
//  const response = outter();
//  console.log(outter);
//  console.log(response);
//  response()
   
// inner call=====>

// function outter(){
// const a = 5;
// function inner(){
// console.log(a);

// }
// return inner;
// }
//  const response = outter();
//  console.log(outter);
//  console.log(response);
//    response ()



// function outter(){
// let a = 5;
// function inner(){
// console.log(a);

// }
//  a=10;
// return inner;
// }
//  const response = outter();
 
//    response ()


// function outter(){
// let count = 0;
// function counter(){
//     count = count + 1;
//     console.log(count);
    
// }
// return counter
// }
//  const counter1 = outter();
//  const counter2 = outter();
 
//    counter1();
//    counter2();
//    counter2();





// const arr =[4, 5, 2, 5, 7]
// let arr2 = arr
// arr2.pop()
// console.log(arr);
// console.log(arr2);



//====unpack===sperd operater==>
    const arr =[4, 5, 2, 5, 7]
let arr2 = [...arr]
arr2.pop()
console.log(arr);
console.log(arr2);