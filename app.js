console.log('shohan');

// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");

// event listener
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener("click", filterTodo);

// function
function addToDo(event){
  event.preventDefault();
  // create div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');

  // create li
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  // check button
  const completeButton = document.createElement('button');
  completeButton.innerHTML = `<i class='fas fa-check'></i>`;
  completeButton.classList.add('complete-btn');
  todoDiv.appendChild(completeButton);
  // trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = `<i class='fas fa-trash'></i>`;
  trashButton.classList.add('trash-btn');
  todoDiv.appendChild(trashButton);
  todoList.appendChild(todoDiv);
  todoInput.value = '';
}

    function deleteCheck(e){
      // console.log(e.target);
      const item = e.target;
      if(item.classList[0]=== 'trash-btn'){
        const todo = item.parentElement;
        // todo.remove();
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function(){
          todo.remove();
        })
      }

      if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
      }
    }

    function filterTodo(e) {
      const todos = todoList.childNodes;
      todos.forEach(function(todo) {
        switch (e.target.value) {
          case "all":
            todo.style.display = "flex";
            break;
          case "completed":
            if (todo.classList.contains("completed")) {
              todo.style.display = "flex";
            } else {
              todo.style.display = "none";
            }
            break;
          case "uncompleted":
            if (!todo.classList.contains("completed")) {
              todo.style.display = "flex";
            } else {
              todo.style.display = "none";
            }
            break;
        }
      });
    }