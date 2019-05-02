const todoID = location.hash.substring(1)
let todos = getStoredTodos()
let todo = todos.find(function (todo) {
    return todo.id === todoID
})

if (todo === undefined) {
    location.assign('/index.html')
}

document.querySelector('#change-todo').value = todo.title
document.querySelector('#change-todo').addEventListener('input', function (e) {
    editName(e.target.value)
    savedTasks(todos)
})

let editName = function (newName) {
    todo.title = newName
}

document.querySelector('#remove-todo').addEventListener('click', function (e) {
    removeTask(todo.id)
    savedTasks(todos)
    location.assign('\index.html')
})