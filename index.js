
let todoItem = [];
function addNewTodos() {
    let todoText = document.querySelector("#todoInput");
    let todoDate = document.querySelector("#todoDate");
    let todoTextElement = todoText.value;
    let todoDateElement = todoDate.value;
    todoItem.push({item: todoTextElement, dueDate: todoDateElement});
    todoText.value = '';
    todoDate.value = '';
    displayitem();
}
function displayitem() {
    let addText = document.querySelector('.todo-container');
    let newHtml = "";
    for (let i = 0; i < todoItem.length; i++) {
        newHtml += `
        <span class="item"><b>${todoItem[i].item}</b></span> 
        <span class="item"><b>${todoItem[i].dueDate}</b></span> 
        <button class="delete-btn" onclick="todoItem.splice(${i}, 1); displayitem()">delete</button> 
        `
    }
    addText.innerHTML = newHtml;
}