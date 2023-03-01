const inputTask = document.querySelector('#input-task');

const addButton = document.querySelector('#add-button');

const firstTasksContainer = document.querySelector('.tasks-container')

// const presentDay = document.querySelector('#present-day');

//Events 
//Add button
addButton.addEventListener('click', createTasks)
//Check button
// checkTask.addEventListener('click', checkedTasks)

function createTasks() {

    const taskContainer = document.createElement('ul');
    taskContainer.setAttribute('class', 'task-container');
    firstTasksContainer.appendChild(taskContainer);

    //create a new task
    const task = document.createElement('li')
    task.setAttribute('class', 'alert m-0 p-0')

    task.innerText = inputTask.value;
    taskContainer.appendChild(task);
    inputTask.value = '';

    //delete Button
    const checkTask = document.createElement('button')
    checkTask.innerHTML = '<i class="bi bi-check-lg m-2 p-2"></i>'
    checkTask.setAttribute('class', 'btn btn-success')
    taskContainer.appendChild(checkTask)

    //Checked List Function
    checkTask.addEventListener('click', () => {
        task.classList.add('checked')
        checkTask.style.display = 'none'
    })


    //delete Button
    const trashTask = document.createElement('button')
    trashTask.innerHTML = '<i class="bi bi-trash3 m-2 p-2"></i>'
    trashTask.setAttribute('class', 'btn btn-danger')
    taskContainer.appendChild(trashTask)

    //Delete Button
    trashTask.addEventListener('click', () => {
        taskContainer.removeChild(task)
        taskContainer.style.display = 'none'
    })

}

