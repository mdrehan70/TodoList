let todoArray = [{
    name: 'Complete TodoList',
    dueDate: '2024-12-01'
}, {
    name: 'Complete BCA',
    dueDate: '2025-07-15'
}];

renderTodoList();

function renderTodoList() {
    let todoListHTML = '';
    for (let i = 0; i < todoArray.length; i++) {
        const todoObj = todoArray[i];
        const name = todoObj.name;
        const dueDate = todoObj.dueDate;
        const html = `
    <p class="singleLine">
        ${name} ${dueDate}
        <button onclick="
                            todoArray.splice(${i}, 1);
                            renderTodoList();
                        ">Delete</button>
    </p>
    `;
        todoListHTML += html;
    }
    document.querySelector('.todoOnPage').innerHTML = todoListHTML;
}

function displayTodo() {
    let todolist = document.querySelector('.inputTodo');
    let inputValue = todolist.value;

    let todolistDate = document.querySelector('.inputDate');
    let inputDateValue = todolistDate.value;

    todoArray.push({
        name: inputValue,
        dueDate: inputDateValue
    });

    todolist.value = '';
    todolistDate.value = '';

    renderTodoList();
}