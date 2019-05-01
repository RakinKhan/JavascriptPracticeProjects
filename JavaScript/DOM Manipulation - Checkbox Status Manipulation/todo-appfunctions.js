//4/25/2019 This functions checkes to see if there is a list previously saved to the local storage. If there is data saved,
//the function returns an array of the previous list. If there is no data then function returns an empty array.
let getStoredTodos = function () {
    if (localStorage.getItem('todos') !== null) {
        return JSON.parse(localStorage.getItem('todos'))
    } else {
        return []
    }
}

let savedTasks = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
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
    checkbox.addEventListener('change', function () {
        //5/1/2019 when the checkbox is clicked the changeToCompleted() function is called and the tasks id value is passed through
        changeToCompleted(task.id)
        savedTasks(todos)
        filterFunction(todos, filter)
    })
    
    tasks.textContent = `To Do: ${task.title}, Completed: ${task.completed}.`
    
    button.textContent = `x`
    button.addEventListener('click', function () {
        //4/30/2019 when the button is clicked the removeTask() function is called with the tasks id value.
        removeTask(task.id)
        savedTasks(todos)
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

//4/30/2019 This function removes the task that is next to the button that is clicked. It uses the functions id value.
let removeTask = function (id) {
    //4/30/2019 this function seaches for the index whos todo.id matches the argument sent through the removeTask() call from
    //the above function.
    let removeTaskIndex = todos.findIndex(function (todo) {
        return todo.id === id
    })
    //4/30/2019 once the index number is found, the if statement will remove the item with the respective task number
    if (removeTaskIndex > -1) {
        todos.splice(removeTaskIndex, 1)
    }
}

//5/1/2019 This function changes the tasks completed status from false to true when the checkbox is clicked and back to false when the checkbox is unclicked
let changeToCompleted = function (id) {
    //5/1/2019 this function searched for the task with the matching id
    let changeTask = todos.find(function (todo) {
        return todo.id === id
    })
    //5/1/2019 once the matching task has been found the tasks completed status changes from false to true or vice versa.
    if (changeTask !== undefined) {
        changeTask.completed = !changeTask.completed        
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
//4/30/2019 An "id" property was added to the object whos value is a the return value of a function from a third party library.
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
