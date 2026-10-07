// ===>destructuring ===>

let student ={
    name :"varad",
    rollNo :34,
    subject: ["math","english","hind"],
    totalMark : 500,

}
 
//how to rename key

// let { subject, vishay,...Hello} = student
// //subject -> vishay
// //let vishay = subject
// console.log(Hello);


// let{subject , name , rollNo}= student
// console.log(subject);


// let { subject, vishay, totalMark = 500,...Hello} = student
// console.log(totalMark);

// let obj1 = {
// name : "akash",
// phone : 2546789375
// }

// let obj2 = {
// adddres : "india",
// adharCard:52254245664,
// name : "anshu"

// }

// let obj3 = {...obj1 , ...obj2}

// console.log(obj3);

// array and objet update 



// const arr = [1,2,3,4]
// let arr = [1,2,3,4]
// arr [1] ="updated"
// console.log(arr);


// let obj = {
//     name :"kasturi",
//     rollNo : 23,
//     address : null
// }

//  obj ["name"] = "ssdfuri",
//    obj.name= "sunil"

   //delete obj.rollNo //property deleted
// console.log(obj);
//   console.log(obj.address?.street);
   //let arr1 = [1,2,3,4,5,6]


//    ==>splice===>

   //arr1.splice(3,0,["hello"])//add
   //arr1.splice(3,0,["replace"])
   //arr1.splice(1, 3)//delete karna
//    arr1[2]
//   arr1.shift 
// console.log(arr1);

// ===>slice===>

//    let trimArr = arr1.slice(1,3)
//     console.log(trimArr);
    
//console.log(arr1.indexOf(69575));

// let res = arr1.find((value) => {
// return value === 3;
// })

// console.log(res);

// let resIndex = arr1.findIndex((value) =>{
//     return value === 3;
// })
// console.log(resIndex);

//flat

// let arr3 = [1,2,3,4,5,[6,7,8[9,10,11]]]

//console.log(arr3.flat(Infinity));

//mutability

let arr4 = [4, 5, 6,62,213,13]

let arrCopy = arr4;
let arrCopy2 = arr4;//spread operator

arrCopy2.pop()

console.log("arr4", arr4);
console.log("arrCopy",arrCopy2);


