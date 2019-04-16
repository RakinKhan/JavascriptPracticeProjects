// For this challenge i used DOM Manipulation to create an <h2> and multiple <p> elements for my array of objects.
// Within the totalTodoLeft function i created a todos.forEach loop to get the total number of tasks i have yet to complete
// and used the number to create an <h2> element with that number. For the fullList function i created another todos.forEach
// function but this time i used it to create a <p> element for each item.


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

let totalTodoLeft = function (todos) {
    let totalNumber = 0

    todos.forEach(function (task) {
        if (task.completed === false) {
            totalNumber = totalNumber + 1
        }
    })
    
    const totalTasksLeft = document.createElement('h2')
    totalTasksLeft.textContent = `You have ${totalNumber} tasks left to complete!`
    document.querySelector('body').appendChild(totalTasksLeft)
}

let fullList = function (todos) {
    todos.forEach(function (task) {
        const tasks = document.createElement('p')
        tasks.textContent = `To Do: ${task.title}, Completed: ${task.completed}.`
        document.querySelector('body').appendChild(tasks)
    })
}

totalTodoLeft(todos)
fullList(todos)