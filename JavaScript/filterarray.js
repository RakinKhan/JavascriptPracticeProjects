//searchigng array of objects using boolean values

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


let filterTodos = function (todos, query) {
    return todos.filter(function (todo) {
        return todo.completed === query
    })
}

console.log(filterTodos(todos, false))