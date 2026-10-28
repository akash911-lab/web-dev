


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

///let todos = ['Go to gym', "Revision Web  dev ", "Take class"]





const todoForm = document.querySelector("#todo-form")
const todoInput = document.querySelector("#todo-input")
const todoList = document.querySelector("#todo-list")


todoForm.addEventListener('submit', (e) => {
    e.preventDefault()

    //console.log(Date.now());

    // console.log(Math.floor(Math.round()* (1000-1+1))+1);


    const todoValue = todoInput.value;
    todos.push(todoValue)//this  for saving 
    //console.log("ander wala :", todos);



    let newTodo = {
        id: Date.now(),
        text: todoValue,
        isCompleted: false

    }
    addTodo(newTodo)


    // renderTodo()//  jab koi naya add hog first  updated todo render ho jayenge 

    // console.log(todoInput.value);

})


function renderTodo() {


    todoList.innerHTML = ""

    todos.forEach(function (todo) {
        addTodo(todo)
    })
}

renderTodo()///jab first time excute hagi tab existing todo  render ho jayenge 


function addTodo(todo) {
    const li = document.createElement("li")/// <li><li>
  
    // li.textContent = todo.text //<li>{Actual Todo}<li>
    //  <li data-id="1" class="flex gap-2 border border-slate-300 p-4 rounded-xl">
   li.dataset.id = todo.id
    li.className = `flex gap-2 border border-slate-300 p-4 rounded-xl`
    li.innerHTML = `
                    <input  data-id=${todo.id} ${todo.isCompleted === true? 'checked':""}  type="checkbox">
                    <p class="flex-1">${todo.text}</p>
                    <div class="flex gap-2">
                        <button data-action="edit" data-id=${todo.id}>Edit</button>
                        <button data-action="delete" data-id=${todo.id}>Delete</button>
                    </div>
                
                
    `

    todoList.append(li)//ul->li

}

//console.log("bahar:", todos);



// event delegation

todoList.addEventListener('click', (e) => {

    let li = e.target.closest('li')
    let btn = e.target.closest('button')
    let action = btn?.dataset.action;
    let id = btn?.dataset?.id
    let checkbox = e.target.closest('input[type="checkbox"]') //css selector to select only checkbox input element
    // console.log(checkbox);


    if (action === "edit") {
        //edit wala part 
        console.log("editing....");

    }

    if (action === "delete") {

        deleteTodo(e, id)

        if (checkbox) {
            todos = todos.map((todo) => {
                if (todo.id !== Number(checkbox?.dataset?.id)) {
                    console.log(hii);
                    
                    return {
                        ...todo,
                        isCompleted: !todo.isCompleted
                    }
                }
                return todo
            })

            console.log(todos);

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

    }



})

function deleteTodo(e, id) {
    e.target.closest('li').remove()

    todos = todos.filter((todo) => {

        if (todo.id !== Number(id)) {
            return todo
        }
    })



    //renderTodo()

}

