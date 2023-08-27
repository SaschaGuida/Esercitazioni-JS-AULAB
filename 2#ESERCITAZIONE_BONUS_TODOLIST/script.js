document.getElementById('addTodo').addEventListener('click', function() {
    const todoInput = document.getElementById('todoInput');
    const todoText = todoInput.value;
    addTodoItem(todoText, false);
    saveToLocalStorage(todoText, false);
    todoInput.value = '';
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('todoList').innerHTML = '';
    localStorage.clear();
});

function addTodoItem(text, checked) {
    const newTodo = document.createElement('li');
    
    const uniqueID = 'todo-' + Date.now();

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = uniqueID;
    checkbox.classList.add('hidden');
    if(checked) {
        checkbox.checked = true;
        newTodo.classList.add('completed');
    }

    const checkboxLabel = document.createElement('label');
    checkboxLabel.setAttribute('for', uniqueID);
    checkboxLabel.classList.add('checkbox-label');
    
    checkbox.addEventListener('change', function() {
        if (this.checked) {
            newTodo.classList.add('completed');
            updateLocalStorage(text, true);
        } else {
            newTodo.classList.remove('completed');
            updateLocalStorage(text, false);
        }
    });

    newTodo.appendChild(checkbox);
    newTodo.appendChild(checkboxLabel);
    newTodo.appendChild(document.createTextNode(text));

    document.getElementById('todoList').appendChild(newTodo);
}

function saveToLocalStorage(text, checked) {
    const currentTodos = JSON.parse(localStorage.getItem('todos')) || [];
    currentTodos.push({ text, checked });
    localStorage.setItem('todos', JSON.stringify(currentTodos));
}

function updateLocalStorage(text, checked) {
    const currentTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const todoIndex = currentTodos.findIndex(todo => todo.text === text);
    if(todoIndex !== -1) {
        currentTodos[todoIndex].checked = checked;
        localStorage.setItem('todos', JSON.stringify(currentTodos));
    }
}
document.addEventListener('DOMContentLoaded', function() {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    storedTodos.forEach(todo => {
        addTodoItem(todo.text, todo.checked);
    });
});

/* 
|￣￣￣￣￣￣￣ |  
|Sascha-WebDev|
|＿＿＿＿＿ _＿_|
(\__/) || 
(•ㅅ•) || 
/ 　 づ 
*/