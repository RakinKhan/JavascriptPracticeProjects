//4/25/2019 This functions checkes to see if there is a list previously saved to the local storage. If there is data saved,
//the function returns an array of the previous list. If there is no data then function returns an empty array.
let getStoredTodos = function () {
    if (localStorage.getItem('todos') !== null) {
        return JSON.parse(localStorage.getItem('todos'))
    } else {
        return []
    }
}

//4/25/2019 This function takes the "todos" variable as an argument and returns the total unfiltered number of tasks that have 
//not been completed. 
let totalNumberDOM = function (todos) {
    let totalNumber = 0
    todos.forEach(function (task) {
        if (task.completed === false) {
            totalNumber = totalNumber + 1
        }
    })

    return totalNumber
}

//4/25/2019 This function takes the "match" variable, which is a filtered task list, and returns the new number of tasks that
//matches the characters that a person writes in the input and is also incomplete.
let totalNumberFilterDOM = function (match) {
    let totalNumber = 0 
    match.forEach(function (task) {
        if (task.completed === false) {
            totalNumber = totalNumber + 1
        }
    })
    return totalNumber
}

//4/25/2019 This function is inside of a loop and will change the text content of the element with respect to each task in the array 
//and return that information.
let taskListDOM = function (task) {
    //4/30/2019 creates a <div> element
    let taskHTML = document.createElement('div')
    //4/30/2019 creates a <span> element to display the tasks.textContent string
    let tasks = document.createElement('span')
    //4/30/2019 creates a button
    let button = document.createElement('button')
    //4/30/2019 creates an input 
    let checkbox = document.createElement('input')

    //4/30/2019 sets the input type as a checkbox for the checkbox variable
    checkbox.setAttribute('type', 'checkbox')
    
    tasks.textContent = `To Do: ${task.title}, Completed: ${task.completed}.`
    
    button.textContent = `x`
    button.addEventListener('click', function () {
        removeTask(task.id)
        filterFunction(todos, filter)
    })

    //4/30/2019 places the checkbox input in the beginning of the <div> element
    taskHTML.appendChild(checkbox)
    //4/30/2019 places the span element within the <div> element but after the checkbox
    taskHTML.appendChild(tasks)
    //4/30/2019 places the button element within the <div> element but at the end, after the checkbox input and span elements
    taskHTML.appendChild(button)

    return taskHTML
}

//4/30/2019
let removeTask = function (id) {
    let removeNoteIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })

    if (removeNoteIndex > -1) {
        todos.splice(removeNoteIndex, 1)
    }

}


//4/25/2019 This function takes the total number of tasks that have yet to be completed and includes it in the text
//content of the the element. The total number will be different depending on if the list is filtered or unfiltered.
let totalTasksLeftDOM = function (totalNumber) {
    let totalTasksLeft = document.createElement('h2')
    totalTasksLeft.textContent = `You have ${totalNumber} tasks left to complete!`

    return totalTasksLeft
}

//4/25/2019 This function creates a newTask object with its title value being the argument (the value being whatever the user submits
//as the task name). If the user does not provide a task name then the title value is set automatically as `Unnamed Task`. The 
//completion status of each new task is automatically set to boolean false. Each added task will change the total number of tasks that
//have yet to completed, filtered or unfiltered.
let newTaskDOM = function (newToDo) {
    let newTask = {
        //4/30/2019 id uses a third party library to generate a random id for each task that is added
        id: uuidv4(),
        title: newToDo,
        completed: false,
    }

    if (newTask.title.length === 0) {
        newTask.title = `Unnamed Task`
    }
    return newTask

}

