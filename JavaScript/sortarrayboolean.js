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

let sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (a.completed === true && b.completed === false) {
            return -1
        } else if (b.completed === true && a.completed === false) {
            return 1
        } else {
            return 0
        }

    })
}

sortTodos(todos)
console.log(todos)