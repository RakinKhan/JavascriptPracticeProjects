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

let filter = {
    searchText: ''
}

let filterFunction = function (todos, filter) {
    let match = todos.filter(function (todo) {
        return todo.title.toLowerCase().includes(filter.searchText.toLowerCase())
    })
    let totalNumber = 0
    document.querySelector('#filtered').innerHTML = ''

    match.forEach(function (task) {
        if (task.completed === false) {
            totalNumber = totalNumber + 1
        }
    })

    const totalTasksLeft = document.createElement('h2')
    totalTasksLeft.textContent = `You have ${totalNumber} tasks left to complete!`
    document.querySelector('#filtered').appendChild(totalTasksLeft)

    match.forEach(function (task) {
        let matchFilter = document.createElement('p')
        matchFilter.textContent = `To Do: ${task.title}, Completed: ${task.completed}.`
        document.querySelector('#filtered').appendChild(matchFilter)
    })
}

let totalTodoLeft = function (todos) {
    let totalNumber = 0

    todos.forEach(function (task) {
        if (task.completed === false) {
            totalNumber = totalNumber + 1
        }
    })
    
    const totalTasksLeft = document.createElement('h2')
    totalTasksLeft.textContent = `You have ${totalNumber} tasks left to complete!`
    document.querySelector('#filtered').appendChild(totalTasksLeft)
}

let fullList = function (todos) {
    todos.forEach(function (task) {
        const tasks = document.createElement('p')
        tasks.textContent = `To Do: ${task.title}, Completed: ${task.completed}.`
        document.querySelector('#filtered').appendChild(tasks)
    })
}

document.querySelector('#search-text').addEventListener('input', function (e) {
    filter.searchText = e.target.value
    filterFunction(todos, filter)
})

totalTodoLeft(todos)
fullList(todos)

