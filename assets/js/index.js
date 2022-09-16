let todos = []
const input_new_todo = document.querySelector('#input_new_todo')
const todo_list = document.querySelector('#todo_list')
const todo_total = document.querySelector('#total')
const todo_completed = document.querySelector('#todo_completed')

const addTodo = (todo) => {
  const new_todo = { id: Date.now(), name: todo.value, completed: false };
  todos.push(new_todo);
  todo.value = "";
  renderTodos();

};

const deleteTodo = (id) => {
  const index = todos.findIndex((ele) => ele.id == id);
  todos.splice(index, 1);
  renderTodos();
};

const updateTodo = (id) => {
  const index = todos.findIndex((ele) => ele.id == id);
  todos[index].completed ? todos[index].completed = false : todos[index].completed = true;
  renderTodos();
};

document.querySelector("#btn_todo").addEventListener("click", () => {
  addTodo(input_new_todo);
});

const renderTodos = () => {
  let html = "";
  let total = 0;
  let completed = 0;
  let idCurrent = 0;

  for (let todo of todos) {
    idCurrent += 1
    if (todo.completed) {
      completed += 1
    }

    html += `
      <tr>
        <td >${idCurrent} </td>
        <td >
             ${todo.name} 
            <button class="btn_update" onclick="updateTodo(${todo.id})">Cambiar</button>
            <i class="fa-sharp fa-solid fa-xmark"onclick="deleteTodo(${todo.id})"></i>
        </td>
      </tr>`;
    total++;

  }
  todo_list.innerHTML = html;
  todo_total.innerHTML = total;
  todo_completed.innerHTML = completed;
}
