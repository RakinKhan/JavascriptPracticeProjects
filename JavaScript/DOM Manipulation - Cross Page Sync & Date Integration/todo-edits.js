//5/4/2019 this function returns the part of the part of the url that is after the # sign
const todoID = location.hash.substring(1)
let todos = getStoredTodos()
//5/4/2019 this function makes sure that the return of the todoID matches the tasks ID
let todo = todos.find(function (todo) {
    return todo.id === todoID
})
//5/4/2019 this function changes the name of the task 
let editName = function (newName) {
    todo.title = newName
}

//5/4/2019 the if statement will decide what will be displayed in the <span id="lastEdited"> element in edit.html based on the their .createdAt and .updatedAt values.
// if the two values are the same then that means that the task was never edited, and will display the first .textContent. if they are not equal then the tasks has been updated,
//and so the second textContent will be shown intead.
if (todo.createdAt === todo.updatedAt) {
    document.querySelector('#lastEdited').textContent = `Created: ${moment(todo.createdAt).fromNow()}`
} else if (todo.createdAt !== todo.updatedAt) {
    document.querySelector('#lastEdited').textContent = `Last Edited: ${moment(todo.updatedAt).fromNow()}`
}



//5/4/2019 This function updates the moment that task title is edited and updates when the task was updated in the edit.html
let editUpdate = function (updated) {
    todo.updatedAt = updated
    document.querySelector('#lastEdited').textContent = `Last Edited: ${moment(todo.updatedAt).fromNow()}`

}

//5/4/2019 when the task is removed by the remove task button the page will return us to index.html
if (todo === undefined) {
    location.assign('/index.html')
}


document.querySelector('#change-todo').value = todo.title
document.querySelector('#change-todo').addEventListener('input', function (e) {
    //5/4/2019 when the task name is being changed, the editname() function is called with the input value passed through as the argument
    editName(e.target.value)
    //5/4/2019 this function logs the time last time the value was changed/updated
    editUpdate(moment().valueOf())
    //5/4/2019 this function saves the edits and updates the local storage to reflect the changes to the name and time
    savedTasks(todos) 
})


document.querySelector('#remove-todo').addEventListener('click', function (e) {
    //5/4/2019 when the Remove Task button is clicked the remove task will search for the task in local storage and then remove by its id
    removeTask(todo.id)
    //5/4/2019 once the task has been removed from local storage local storage will save the new todos list
    savedTasks(todos)
    //5/4/2019 once local stoage is updated and the task is gone, the page will automatically return to the home page
    location.assign('\index.html')
})

//if there is multiple edit windows opened for the same task, any changes made in one of the windows will automatically update the other
window.addEventListener('storage', function (e) {
    if (e.key === 'todos') {
        todos =  JSON.parse(e.newValue)
        todo = todos.find(function (todo) {
            return todo.id === todoID
        })
        
        if (todo === undefined) {
            location.assign('/index.html')
        }
        document.querySelector('#change-todo').value = todo.title
    }

})