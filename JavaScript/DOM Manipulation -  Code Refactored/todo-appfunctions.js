let getStoredTodos = function () {
    if (localStorage.getItem('todos') !== null) {
        return JSON.parse(localStorage.getItem('todos'))
    } else {
        return []
    }
}

let totalNumberDOM = function (todos) {
    let totalNumber = 0
    todos.forEach(function (task) {
        if (task.completed === false) {
            totalNumber = totalNumber + 1
        }
    })

    return totalNumber
}

let totalNumberFilterDOM = function (match) {
    let totalNumber = 0 
    match.forEach(function (task) {
        if (task.completed === false) {
            totalNumber = totalNumber + 1
        }
    })
    return totalNumber
}

let taskListDOM = function (task) {
    let tasks = document.createElement('p')
    tasks.textContent = `To Do: ${task.title}, Completed: ${task.completed}.`

    return tasks
}

let totalTasksLeftDOM = function (totalNumber) {
    let totalTasksLeft = document.createElement('h2')
    totalTasksLeft.textContent = `You have ${totalNumber} tasks left to complete!`

    return totalTasksLeft
}

let newTaskDOM = function (newToDo) {
    let newTask = {
        title: newToDo,
        completed: false,
    }

    if (newTask.title.length === 0) {
        newTask.title = `Unnamed Task`
    }
    return newTask

}