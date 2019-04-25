//4/25/2019 todos calls the getStoredTodos() function to chek if there is any previous data saved in local storage
let todos = getStoredTodos()

let filter = {
    searchText: '',
    hideCompleted: false
}

let filterFunction = function (todos, filter) {
    let match = todos.filter(function (todo) {
        let searchText = todo.title.toLowerCase().includes(filter.searchText.toLowerCase())
        let hideCompleted = !filter.hideCompleted || !todo.completed

        return searchText && hideCompleted
    })

    //4/25/2019 totalNumber calls the totalNumberFilterDOM function and passes "match" variable for its argument
    let totalNumber = totalNumberFilterDOM(match)

    document.querySelector('#filtered').innerHTML = ''

    //4/25/2019 totalTasksLeft calls the totalTasksLeftDOM function and passes the "totalNumber" variable arguement
    const totalTasksLeft = totalTasksLeftDOM(totalNumber)
    document.querySelector('#filtered').appendChild(totalTasksLeft)

    match.forEach(function (task) {
        let matchFilter = taskListDOM(task)
        document.querySelector('#filtered').appendChild(matchFilter)
    })
}

let totalTodoLeft = function (todos) {

    //4/25/2019 totalNumber calls the totalNumberFilterDOM function and passes "todos" variable for its argument
    let totalNumber = totalNumberDOM(todos)
    //4/25/2019 totalTasksLeft calls the totalTasksLeftDOM function and passes the "totalNumber" variable arguement    
    const totalTasksLeft = totalTasksLeftDOM(totalNumber)
    document.querySelector('#filtered').appendChild(totalTasksLeft)
}

let fullList = function (todos) {
    todos.forEach(function (task) {
        const tasks = taskListDOM(task)
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

    //4/25/2019 newTask calls the newTaskDOM function with the "newToDo" arguement
    let newTask = newTaskDOM(newToDo)
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

