let todos = []

let filter = {
    searchText: '',
    hideCompleted: false
}

//4/24/2019: Checking for existing data using CRUD/JSON if there is any existing data for todos. If there is none then it will be an empty list. If there is
//data then the todos variable will use the stored data

if (localStorage.getItem('todos') !== null) {
    todos = JSON.parse(localStorage.getItem('todos'))
}


let filterFunction = function (todos, filter) {
    let match = todos.filter(function (todo) {
        let searchText = todo.title.toLowerCase().includes(filter.searchText.toLowerCase())
        let hideCompleted = !filter.hideCompleted || !todo.completed

        return searchText && hideCompleted
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

//this function lets you add a new task to the todos array of objects. 
//UPDATE 4/24/2019: this function will also stringify the todos array and restringify the todos key with each addition of a task. Also, if a person submitted an empty
//title, this function will recognize it and change the title of the nex task to `Unnamed Task`

let addToDo = function (newToDo) {
    let newTask = {
        title: newToDo,
        completed: false,
    }

    if (newTask.title.length === 0) {
        newTask.title = `Unnamed Task`
    }
    return todos.push(newTask) && localStorage.setItem('todos', JSON.stringify(todos))
}

// this takes the input from the browser form and and runs the argument through the addToDo function, then rerenders the list on the browser.

document.querySelector('#name-form').addEventListener('submit', function (e) {
    e.preventDefault()
    addToDo(e.target.elements.toDo.value)
    filterFunction(todos, filter)
    e.target.elements.toDo.value = ''
    
})

//when you click the checkbox next to "Hide Completed", this will hide all the tasks that have a todos.completed: true, then rerender the list.

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filter.hideCompleted = e.target.checked
    filterFunction(todos, filter)
})

//this will console.log the value of the the specific dropdown option.
document.querySelector('#filter-by').addEventListener('change', function (e) {
    console.log(e.target.value)
})

totalTodoLeft(todos)
fullList(todos)

