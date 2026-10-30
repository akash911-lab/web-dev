
const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")
const formBtn = document.querySelector("#form-btn")
const taskCount = document.querySelector("#task-count")
const completedCount = document.querySelector("#completed-count")

//'Go to gym', "Revision Web  dev ", "Take class"

let todos = [
    {
        id: Date.now() + 1,
        text: "Go to gym",
        isCompleted: false
    },
    {

        id: Date.now() + 2,
        text: "Revision Web  dev",
        isCompleted: true
    },

    {
        id: Date.now() + 3,
        text: "Take class",
        isCompleted: false
    }
]



todos.forEach((todo)=>{
 const li = document.createElement("li");

 //li.setAttribute("class","flex gap-2 border-slate-300 p-4 rounded-xl")

 li.className ="flex gap-2 border-slate-300 p-4 rounded-xl"

 // <li data-id="1" class="flex gap-2 border border-slate-300 p-4 rounded-xl"> 


    li.innerHTML = `
                    <input type="checkbox">
                    <p class="flex-1">${todo.text}</p>
                    <div class="flex gap-2">
                        <button>Edit</button>
                        <button >Delete</button>
                    </div> `
                     
                     

              todoList.append(li)//here be want exact html code  
})




let editTodoId  = null //flag



todoForm.addEventListener('submit', (e) => {
    e.preventDefault()


const todoValue = todoInput.value.trim();

// agar todo is value empty  "" then we do !""-> true and ! is loarest not operator
if(!todoValue){
    return
}

   console.log(editTodoId ,todoValue);
  
if(editTodoId){
    // editing
    todos =todos.map((todo)=>{
        if (todo.id === Number(editTodoId)){
            return{
                ...todo,
                text: todoValue
            }
        }
        return todo
    })
}else{
    //adding
    let newTodo = {
        id: Date.now(),
        text: todoValue,
        isCompleted: false
    }
    todos.push(newTodo)
}


    //console.log(Date.now());

    // console.log(Math.floor(Math.round()* (1000-1+1))+1);


//     const todoValue = todoInput.value;
//     todos.push(todoValue)//this  for saving 
//     //console.log("ander wala :", todos);



    // let newTodo = {
    //     id: Date.now(),
    //     text: todoValue,
    //     isCompleted: false

    // }
    // todos.push(newTodo)
      


    // todos.push({
    //      id: Date.now(),
    //     text: todoValue,
    //     isCompleted: false

    
    // })




//     addTodo(newTodo)

todoInput.value = ""


renderTodo()//  jab koi naya add hog first  updated todo render ho jayenge 

    // console.log(todoInput.value);
    console.log(todos);

 })

    

function renderTodo() {


    todoList.innerHTML = ""
    // todoList.innerHTML = ""

    todos.forEach((todo)=>{
      const li = document.createElement("li");
       li.className = `flex gap-2 border border-slate-300 p-4 rounded-xl`
    //    li.setAttribute ("data-id",todo.id)//this is  jugad
          //or
          li.dataset.id = todo.id //this is original method
       
       li.innerHTML = 
                    `
                    <input data-action="toogle" ${todo.isCompleted ? "checked" : ""} type="checkbox">
                    <p class="flex-1 ${todo.isCompleted ? "line-through text-red-400":""}">${todo.text}</p>
                    <div class="flex gap-2">
                        <button data-action="edit">Edit</button>
                        <button data-action="delete" >Delete</button>
                    </div> `

       
            //   li.addEventListener('click',(e)=>{
            //     console.log(todo.id);
                
              //})       


    todoList.append(li)

})
      taskCount.textContent =`TASKS(${todos.length})`
      completedCount.textContent =`COMPLETED:${todos.filter((todo)=>todo.isCompleted).length}`
  
}

renderTodo()//jab first time excute hagi tab existing todo  render ho jayenge 


function addTodo(todo) {
  console.log(todo);
  



    //const li = document.createElement("li")//<li><li>
  

       //  <li data-id="1" class="flex gap-2 border border-slate-300 p-4 rounded-xl">
    // li.textContent = todo.text //<li>{Actual Todo}<li>
 
//    li.dataset.id = todo.id
//    li.className = `flex gap-2 border border-slate-300 p-4 rounded-xl`
//     li.innerHTML = `
//                     <input  data-id=${todo.id} ${todo.isCompleted === true? 'checked':""}  type="checkbox">
//                     <p class="flex-1">${todo.text}</p>
//                     <div class="flex gap-2">
//                         <button data-action="edit" data-id=${todo.id}>Edit</button>
//                         <button data-action="delete" data-id=${todo.id}>Delete</button>
//                     </div>
                
                
// //     `

//     todoList.append(li)//ul->li

}

//console.log("bahar:", todos);



// event delegation



    //console.log(e.target); //e.target -> jis element per click kar ta ho   
    //console.log(e.currentTarget); //e.currenttarget -> jis element per event listener attached hai
    



todoList.addEventListener('click', (e) => {
     e.stopPropagation()
       
     //console.log(e.target.parentElement);
     const li =  e.target.closest('li')
     const id = li.dataset.id;

    let action = e.target.dataset.action
   
    
   if (action === "delete") {

        deleteTodo(id)
    }
    
     if (action === "edit") {
        startEdit(id)
        //edit wala part 


    //    let currentTodo = todos.find((todo)=>  {
    //           if (todo.id == Number(id)) {
    //         return todo
    //     }
    //    })
   
    //    todoInput.value=currentTodo.text
    //  formBtn.textContent = "Update"


    }



    // console.log(id);


//  todos = todos.filter((todo)=>{
//     if(todo.id !== Number(id)){
//         return todo
//     }
//  })
//  renderTodo()

    // let li = e.target.closest('li')
    // let btn = e.target.closest('button')
    // let action = btn?.dataset.action;
    // let id = btn?.dataset?.id
     //let checkbox = e.target.closest('input[type="checkbox"]') //css selector to select only checkbox input element
    // // console.log(checkbox);


    // if (action === "edit") {
    //     //edit wala part 
    //     console.log("editing....");

    // }

    

       if (action === "toogle") {
            todos = todos.map((todo) => {
                 if (todo.id === Number(id)) {
                    
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted
                   }
                }
               return todo
            })
               renderTodo()
            // console.log(todos);

            // console.log("toggling....");

        }

        // console.log("deleting.....");

        //     e.target.closest('li').remove()

        //   todos = todos.filter((todo) =>{
        //       //console.log(id);

        //     if(todo.id !== Number (id)){
        //         return todo
        //     }
        //    })

        //    console.log(todos);

        //    //renderTodo()
        //     //console.log(output);
        //     // e.target.closest('li').remove()

    //}



})

function deleteTodo( id) {
    // e.target.closest('li').remove()

    todos = todos.filter((todo) => {

        if (todo.id !== Number(id)) {
            return todo
        }
    })



    renderTodo()

}
function startEdit( id) {
    editTodoId = id
      let currentTodo = todos.find((todo)=>  {
           if (todo.id === Number(id)) {
         return todo
     }
    })
   
      todoInput.value=currentTodo.text
  formBtn.textContent = "Update"
    }






// document.querySelector("#task-count").addEventListener("click" , (e)=>{
//     console.log(todoInput.value);
    
// })