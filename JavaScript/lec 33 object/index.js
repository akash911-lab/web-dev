// let product1 = ["iphone", 56225, 4.5 ,75 , 10 ]

// console.log(product1["0"]);
// console.log(typeof product1);
//let productName ="Something"

// let product2 = {  
//     price: 56225,
//     avgRating: 4.5,
//     totalRevies: 75,
//     discount: 50,
//     productName: "iphone 20 pro max",
//    printProductName : function(){
//     console.log(this.productName);    
//    },
//    printDiscount(){
//     console.log(this.discount);
    
//    }
// }



//let res = product2.printProductName()
//console.log(res);
//product2.printDiscount()
// console.log(Object.keys(product2));
// console.log(Object.values(product2));
// console.log(Object.entries(product2));

// 
//for(value of product1){
//     console.log(value);    
// }


// for(let i = 0 ; i<product1.length; i++ ){
//     console.log(product1[i]);
// }
       

             //for each loop ===>          

// product1.forEach(function(value , index){    
//     console.log(value , index);   
// });

// let Math = {
//    abs(){

//    },
//     ceil(){

//     },
//     floor(){

//     }

// }
// Math2.abs()
// product2.printProductName()

// console.log(product2._productName);

//console.log(product2);

// console.log(product2['first-name']);


//product2.first-name //error
//product2 ["first-name"]


   

// function a (){
//     console.log("a");
    
// }


// function b (num){
//     console.log(num);
//     num()
//     console.log("b");
    
// }

// b(function a (){
//     console.log("a");
    
// })

   

// function b (fun){
//     // console.log(num);
//     console.log("b");
//     console.log(fun);
//     fun()   
// }

// let a = function(){}
// console.log("a");
// b(a)


// b(function  (){
//     console.log("a");
    
// })



// let a = function(){}
// a()
// console.log(a);


   //for in loop ===>

    // for (value in product2){
    //     console.log(product2[value]);
    // }

  // ===> destructuring===>
    // let product1 = ["iphone",56225, 4.5 ,75 , 10]
    // const [name, price,c,d] = ["iphone",56225, 4.5 ,75 , 10]
    // console.log(price);
    

//     let  product2 = {  
//     price: 56225,
//     avgRating: 4.5,
//     totalRevies: 75,
//     discount: 50,
//     productName: "iphone 25",
// variants : ["pro", "base", "promax"],
// manufacturerDetail:{
//       city:"Dharmpru",
//       state:"India",
//       price:300
// },
//    printProductName : function(){
//     console.log(this.productName);    
//    },
//    printDiscount(){
//     console.log(this.discount);
    
//    }
// }

//let{price, printDiscount, avgRating} = product2 //react

// console.log(price, printDiscount(), avgRating);

//==>for of loop===>

    // for ([key, value]of Object.entries(product2)){
    //     console.log(key, value);
        
    // }

       //===> spread operator===>

    //       let product1 = ["iphone",56225, 4.5 ,75 , 10]
    //  const [name, price] = ["iphone",56225, 4.5 ,75 , 10]


    //  let arr =[52,17,654,43,65,5,43,4,45,32] 
    // console.log(...arr);
    // console.log(arr);
     
    //  console.log( Math.min(...arr));

      //let a =[1,2]
      //let b =[3,4]
     //let c =[...a , ...b]//array merging by spread operator
     //console.log(...c);
    

//Math.max()


//===> rest operator===>

 let product1 = ["iphone",56225, 4.5 ,75 , 10]
     const [n, p, ...hello] = ["iphone",56225, 4.5 ,75 , 10]

console.log(hello);

     function add(num1 , ...number){
        console.log(num1);
        console.log(number);
        
       
     }
    
    //console.log(add(4, 5, 6456,454,6));
     
    let { manufactureDetail, ...userKeLiyeDetail}= product2; //rest
    // console.log(productName,remaining);
     console.log(userKeLiyeDetail);