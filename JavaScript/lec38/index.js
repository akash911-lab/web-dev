//"use strict"

// let name1 ="Hello"
// console.log(name1);




// let student={
//     name :"akku",
//     printName:function(){
//         console.log("akku");

//     }
// }
//  student.printName()


// let student={
//     name :"akku",
//     printName:function(){
//         console.log("hii", student.name);

//     }
// }


// student.printName()

// let student2 = {
//     name : "aman",
//     printName : student.printName 

// }
// student2.printName()

// let result = student.printName;
// result()

// let product = {
//     name : "Iphone",
//     printName : () => {
//         console.log(this.name);

//     }
// }
// product.printName()

// let product = {
//     name : "Iphone",
//     printName : function(){
//         const print = ()=>{
//              console.log(this.name);
//         }
//        print()

//     }
// }
// product.printName()

// let name = "something"
// let product = {
//     name : "Iphone",
//     printName : ()=>{
//              console.log(this.name);
//         }
// }
// product.printName()

// function fun4(){
//     let hello = "hii"
//     let name2 ="something";
//     let product ={
//         name: "Iphone",
//         printName: ()=> {
//             console.log(this.name2);
//             console.log(this.hello);

//         }
//     }
//     console.log(this);

//     product.printName()
// }
// fun4()

// function fun1(){
//     let name = "sdhfd"
//     function fun2(){
//         console.log(name);

//     }
//     name = "jbd"
//     return fun2
// }
//  let result2 = fun1
//  result2()


//  console.log(this);

// console.log(global);
// console.log(global===globalThis);


// let a = 1

//  console.log(this.a);


// function fun1(){
//     console.log(this);

// }
// fun1()



// function fun4(){
// let name = "something"

//     let product = {
//         name: "Iphone",
//         printName: function (){
//             const print =()=>{
//                 console.log(this.name);

//             }
//             print()
//         }
//     }
//     product.printName()
// }
// fun4()




// let nestedFunction = {
//     name: "Something",
//     fun: function () {
//         //let name = "something"

//         let product = {
//         //    name: "Iphone",

//             printName: function () {
//                 const print = () => {
//                     console.log(this.name);
//                 }
//                 print()
//             }
//         }
//         product.printName()
//     }
// }
// nestedFunctionfun()




// //=====>
// let nestedFunction = {
//     name: "Something",
//     fun: function () {
//        let product = {
//          name: "Iphone",
//           printName: () => {
//                     console.log(this.name);
                
            
//             }
//         }
//         product.printName()
//     }
// }
// nestedFunction.fun()


//=====>
// let nestedFunction = {
//     name: "Something",
//     fun: function () {
//        let product = {
//         printName: function(){
//             const print = ()=>{
//                     console.log(this.name);

            
//         }
//         print()
//     }
//         }
//         product.printName()
//     }
// }
// nestedFunction.fun()



///===============>

//     let btn =document.getElementById("btn")

//     btn.addEventListener("click", (event)  => { 
//         console.log("hii");

// });


//     let btn =document.getElementById("btn")

//     btn.addEventListener("mousup", (event)  => { 
//         console.log("hii");

// });


    let btn =document.getElementById("btn")

    btn.addEventListener("mousup", (event)  => { 
        //console.log("hii" ,Math.random());
        history.innerText="hii" ,Math.random();

});