// const from = document.querySelector("#from")
// const btn = document.querySelector("#btn")

// from.addEventListener("click" ,(e)=>{
//     e.preventDefault()
//     // console.log("hii");    

//     const name = document.querySelector("#name").value
//     const email = document.querySelector("#email").value
//     const password = document.querySelector("#password").value

//     console.log({name,email, password });
    

// })

//=================================================>

const from = document.querySelector("#from")
const btn = document.querySelector("#btn")
const username = document.querySelector("#username")
const bio = document.querySelector("#bio")
const charCount = document.querySelector("#char-count")
const checkbox = document.querySelector("#checkbox")
const country = document.querySelector("#country")
const passwordHint = document.querySelector("#password-hint")
const password = document.querySelector("#password")
// const errorMessage = document.querySelector("#error-message")

const LIMIT = 200

charCount.textContent = `${LIMIT}characters remaining`;

function showError(input , errorMessage){
    input.parentElement.querySelector(".error-message").textContent = errorMessage
}

function clearError(input){
    input.parentElement.querySelector(".error-message").textContent =""
   //input.parentElement.querySelector(".error-message").remove
}



function validUsername(username){
   // console.log(username.parentElement.querySelector(".error-message"));
    //check1
    if(username.value.trim().length === 0){
        //errorMessage.textContent = "Enter your name"
        showError(username , "please Enter your name")
        return false
    }

    //check2
       if(username.value.trim().length < 3){
        // errorMessage.textContent = ""
       showError(username , "username must be at least 3 character")
        return false
    }
    clearError(username)

    return true
}

function validPassword(password){
   // console.log(username.parentElement.querySelector(".error-message"));
    //check1
    if(password.value.trim().length === 0){
        //errorMessage.textContent = "Enter your name"
        showError(password , "Please Enter your Password")
        return false
    }
    //check2
       if(password.value.trim().length < 8){
        
       showError(password , "password must be at least 8 character")
        return false
    }
    clearError(password)

    return true
}



from.addEventListener("submit" ,(e)=>{
    e.preventDefault();
    // console.log("hii");    
    // const name = document.querySelector("#name").value

    // if(username.value.trim().length === 0){
    //     console.log("Enter your name");
       
    const isUsernameValid = validUsername(username)// passing username element
    const isPasswordValid = validPassword(password)// passing password element

        //  alert("")
    //     errorMessage.textContent = "please enter your name"
    //      return;
    // }

    if(isUsernameValid && isPasswordValid){
        document.querySelector("h1").classList.remove("hidden")
    }else{

          document.querySelector("h1").classList.add("hidden")

        //console.log("form invalid");
        
    }

      // const password = document.querySelector("#password").value

   // const email = document.querySelector("#email").value
   // console.log({ username: username.value, password: password.value, email  });




})

// bio.addEventListener("input" ,(e)=>{
//     const remaining = LIMIT - bio.value.length;
//       charCount.textContent = `${remaining} characters remaining`;
    //console.log(remaining);
    


    //  console.log(bio.value);
   // let name ="akash"
   // console.log(name.length);
    
// })


// username.addEventListener("change" ,(e) => {
//     console.log("change event" ,username.value);
    
// })

// username.addEventListener("input" , (e) => {
//     console.log("input event" , username.value);
    
// })

// checkbox.addEventListener("change" , (e) => {
//     console.log(checkbox.checked);   
// })

// country.addEventListener("input" , (e) => {
//     console.log(country.value);   
// })


// username.addEventListener("focus" , (e) => {
//     console.log("focus");
    
// })

// username.addEventListener("blur" , (e) => {
//     console.log("blur");
    
// })

// password.addEventListener("focus" , (e) => {
//     passwordHint.classList.remove("hidden")
    
// })

// password.addEventListener("blur" , (e) => {
//   passwordHint.classList.add("hidden")
// })

