

// let alockmarks = 45 + 56 + 23;
// let addimarks = 65 + 36 + 53;
// let karanmarks = 25 + 86 + 33;
// let anu = 25 + 66 + 93;
// console.log("alockmarks", alockmarks);


// let productPrice =3000;
// let discountAmount =  3000 * 10 / 100;
// let deliveryCharge = 50;
// let totalAmount = productPrice - discountAmount + deliveryCharge

// function totalMarks(studentName, mattMarks, scienceMarks, sanskritMarks){
//     console.log(`${studentName} total marks :` , mattMarks + scienceMarks + sanskritMarks);

// }

// totalMarks("alock",45 , 56 , 23)
// totalMarks("addi", 65 , 36 , 53)
// totalMarks("kara", 25 , 86 , 33)
// totalMarks("anu" ,25 , 66 , 93)

// function greetingMsg(userName, greeting){
//     console.log(`${greeting}, ${userName}`);
    
// }

// greetingMsg("Priyanshu", "Hii")
// greetingMsg("Anshika", "Hello")
// greetingMsg("Saytam", "Namaste")
// greetingMsg("Saii", "Kemcho")


// function calculator(num1, num2, operator){
//     switch( operator){
//         case "+":
//             console.log(`${num1} ${operator} ${num2} =`, num1 + num2);
//             break;
//             case "-":
//            console.log(`${num1} ${operator} ${num2} =`, num1 - num2);  
//     }
// }
//  calculator(4, 5, "-")


 //Default &parameter

//  function greetingMsg(userName, greeting = "hii"){
//     //  console.log(`${greeting}, ${userName}`);
//     console.log(`${greeting}, ${userName}`);


//console.log(greeting + "" +(userName)) ;


    
//  }

//  greetingMsg("Priyanshu")
//  greetingMsg("Anshika")
//  greetingMsg("Saytam", "ki hal hi")
//  greetingMsg("Saii")


//  function totalMarks(mattMarks, scienceMarks, sanskritMarks){
//    return  mattMarks + scienceMarks + sanskritMarks;
//    } 


//  function calpercentage(studentName, mattMarks, scienceMarks, sanskritMarks){
//     let total = totalMarks(mattMarks, scienceMarks, sanskritMarks)
//     let percentage = (total / 300) * 100
//     console.log(`${studentName} percentage :`, percentage);
//     return "percentage"
//  }

//  let normalVariable = calpercentage("alock",45 , 56 , 23)
// console.log(normalVariable);



  //  totalMarks("alock",45 , 56 , 23)
//  totalMarks("addi", 65 , 36 , 53)
//  totalMarks("kara", 25 , 86 , 33)
//  totalMarks("anu" ,25 , 66 , 93)

// let add = function(num1, num2) {
//     return num1 + num2
// }

// let result = add(5 ,7)
// console.log(result);

// fun1()
// function fun1(){
//     console.log("function declaration");
// }

// console.log(add(5, 7));
// let add = function (num1 , num2) {
//     return num1 + num2
// }


//arrow function

// let add = (num1 , num2) =>{
//     return num1 + num2
// }
// console.log(add(5,7));

//syntax 1
let add = num1 => num1 + 4;

//syntax 2
let add = (num1 ,num2) =>  num1 +num2;

//syntax 3
let add = (num1 , num2) =>{
    //something
    //something
    return num1 + num2
};

console.log(add(5,7));