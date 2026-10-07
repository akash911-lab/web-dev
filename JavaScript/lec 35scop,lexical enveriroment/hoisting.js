
//  console.log(a);

// //let a = 6;
// //const a = 6;
// var a = 76;


// addName()

// function addName(){
// console.log("Hello");
// }

// console.log(addTwoNum);


// // addName()
// var addTwoNum = function(){
//     console.log("function epression");

// }

// console.log(a);
//  var a =5;

//console.log(b);
//let b =7;  

//  function addNum(){
//     let a =6 ;

//     console.log( a);

//  }
//  addNum()



// let x = 6;

// function random() {
//     console.log(x);
//     let x = 3

// }
// random()



// var x = 6;

// function random() {
//     console.log(x);
//     var x = 3

// }
// random()

// var x = 6;

// function random() {
//     console.log(x);
//    

// }
// random()


// var x = 6;

// function random() {
//     console.log(x);
//  var x = 3

// }
// random()

// let city ="Delhi"

//  function printCity(){
//     console.log(city);

//  }
//  function random(fn){
//     let city="varanasi"
//     fn()
//  }
//  random(printCity)

let city = "Delhi"

// function printCity(){
//  console.log(city);

//}
//  function random(fn){
//     let city="varanasi"
//      function printCity(){
//     console.log(city);
//      }
//      return printCity

//  }
//  let printCity = random();
// printCity()

//console.log(random());

//  random(printCity)


// function outer(){

// function inner(){
// } 

//     inner()//right
// return inner
// return inner()

// }

// inner ()


function outter() {

    let usernamer = "akku"
    function inner() {

        console.log(usernamer);

        // return 10
    }


    return inner()

}

const inner = outter()
let username = "drvi"
inner()

//  console.log(result); 


function fun1() {
    let username = "akku"
    function fun2() {
        function fun3() {
            function fun4() {

                console.log(username);
                
            }
            fun4
        }
        fun3
    }
    fun2()
}
fun1()