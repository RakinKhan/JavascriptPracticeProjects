//4/25/2019 todos calls the getStoredTodos() function to chek if there is any previous data saved in local storage
let todos = getStoredTodos()

let filter = {
    searchText: '',
    hideCompleted: false,
    sortBy: 'byEdited'

}
//5/5/2019 this function sorts by the value of the dropdown option on the index.html page
let sortTodos = function (todos, sortBy) {
    //5/5/2019 if the value of the dropdown option is 'byEdited' it will sort by when it was last edited
    if (sortBy === 'byEdited') {
        return todos.sort(function (a,b) {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                0
            }
        })
    } //5/5/2019 if the value of the dropdown option is 'byCreated' it will sort by when it was created
    else if (sortBy === 'byCreated') {
        return todos.sort(function (a,b) {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } //5/5/2019 if the value of the dropdown option is 'byAlphabet' it will sorted alphabetically by task name
    else if(sortBy === 'byAlphabet') {
        return todos.sort(function (a,b) {
            if (a.title < b.title) {
                return - 1
            } else if (a.title > b.title) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return todos
    }
}

//4/25/2019 This function filters the list of tasks by either the name of the task (as the user types in the filter input box)
//or clicked checkbox (will filter out tasks that are completed) or both.
let filterFunction = function (todos, filter) {
    //5/5/2019 before the todos list becomes filtered it will be sorted based on when it was created, when it was last edited, or alphabetically.
    todos = sortTodos(todos, filter.sortBy)
    let match = todos.filter(function (todo) {
        let searchText = todo.title.toLowerCase().includes(filter.searchText.toLowerCase())
        let hideCompleted = !filter.hideCompleted || !todo.completed

        return searchText && hideCompleted
    })

    //4/25/2019 totalNumber calls the totalNumberFilterDOM function and passes "match" variable for its argument
    let totalNumber = totalNumberFilterDOM(match)
    
    //4/25/2019 this will clear the elements in the <div id="filtered"></div> first before rerendering new elements with the
    //filtered data.
    document.querySelector('#filtered').innerHTML = ''

    //4/25/2019 totalTasksLeft calls the totalTasksLeftDOM function and passes the "totalNumber" variable arguement. The return
    //value will create a new element with the filtered number of tasks to complete.
    const totalTasksLeft = totalTasksLeftDOM(totalNumber)
    document.querySelector('#filtered').appendChild(totalTasksLeft)

    //4/25/2019 this loop function wil create a new element for each item in the filtered list.
    match.forEach(function (task) {
        let matchFilter = taskListDOM(task)
        document.querySelector('#filtered').appendChild(matchFilter)
    })
}


//4/25/2019 This function generates the unfiltered number of tasks that have yet to be completed and includes that number
//in the element.
let totalTodoLeft = function (todos) {

    //4/25/2019 totalNumber calls the totalNumberFilterDOM function and passes "todos" variable for its argument
    let totalNumber = totalNumberDOM(todos)
    //4/25/2019 totalTasksLeft calls the totalTasksLeftDOM function and passes the "totalNumber" variable arguement    
    const totalTasksLeft = totalTasksLeftDOM(totalNumber)
    document.querySelector('#filtered').appendChild(totalTasksLeft)
}

//4/25/2019 This function creates an element for each task in the "todos" variable.
let fullList = function (todos) {
    todos.forEach(function (task) {
        const tasks = taskListDOM(task)
        document.querySelector('#filtered').appendChild(tasks)
    })
}

//4/25/2019 This is for the filter input that will update rerender the list automatically as the user types.
document.querySelector('#search-text').addEventListener('input', function (e) {
    filter.searchText = e.target.value
    filterFunction(todos, filter)
})

//this function lets you add a new task to the todos array of objects. 
let addToDo = function (newToDo) {

    //4/25/2019 newTask calls the newTaskDOM function with the "newToDo" arguement
    let newTask = newTaskDOM(newToDo)
    //4//25/2019 once the value for the "newTask" variable is returned the value will be pushed to the end of the "todos" array 
    //and local storage will be updated with the new value
    return todos.push(newTask) && localStorage.setItem('todos', JSON.stringify(todos))
}

// this takes the input from the browser form and and runs the argument through the addToDo function, 
//then rerenders the list on the browser.
document.querySelector('#name-form').addEventListener('submit', function (e) {
    e.preventDefault()
    addToDo(e.target.elements.toDo.value)
    filterFunction(todos, filter)
    e.target.elements.toDo.value = ''
    
})

//when you click the checkbox next to "Hide Completed", this will hide all the tasks that have a todos.completed: true, 
//then rerender the list.

document.querySelector('#hide-completed').addEventListener('change', function (e) {
    filter.hideCompleted = e.target.checked
    filterFunction(todos, filter)
})

//5/5/2019 This event listner checks the dropdown on the index.html to see how the user wants to sort his notes
document.querySelector('#filter-by').addEventListener('change', function (e) {
    filter.sortBy = e.target.value
    filterFunction(todos, filter)
})

//5/4/2019 this event listener will in real time reflect any changes made to the task name made in the edit.html document 
window.addEventListener('storage', function (e) {
    if (e.key === 'todos') {
        todos = JSON.parse(e.newValue)
        filterFunction(todos, filter)
    }    
})


totalTodoLeft(todos)
fullList(todos)

