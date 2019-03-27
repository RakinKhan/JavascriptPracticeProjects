//Searching an array and deleting an item

let todos = [{
    title: 'Order Cat Food',
    completed: false
}, {
    title: 'Clean Kitchen',
    completed: false
}, {
    title: 'Buy food',
    completed: true
}, {
    title: 'Do Work',
    completed: false
}, {
    title: 'Exercise',
    completed: true
}]
console.log(todos)

let deleteTodo = function (todos, toDelete) {
    let index = todos.findIndex(function (todo, index) {
        return todo.title.toLowerCase() === toDelete.toLowerCase()
    })
    if (index > -1) {
        todos.splice(index, 1)
    }
}

deleteTodo(todos, 'buy food')

console.log(todos)