const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("tasks");

// localStorage 
loadTasksFromLocalStorage();

taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskTitle = document.getElementById("task-title").value;
    const taskDescription = document.getElementById("task-description").value;
    const taskDate = document.getElementById("task-date").value;
    const taskTime = document.getElementById("task-time").value;

    if (taskTitle.trim() === "") {
        alert("El titulo no puede estar vacio.");
        return;
    }

    const selectedDateTime = new Date(`${taskDate}T${taskTime}`);
    const currentDateTime = new Date();

    if (selectedDateTime < currentDateTime) {
        alert("No se puede agregar tareas con fechas retrasadas.");
        return;
    }

    // objeto
    const task = {
        title: taskTitle,
        description: taskDescription,
        date: taskDate,
        time: taskTime,
        completed: false
    };

    
    saveTaskToLocalStorage(task);

    addTaskToList(task);
    
    // Clear the form
    taskForm.reset();
});

function addTaskToList(task) {
    const taskItem = document.createElement("li");
    taskItem.className = "p-4 bg-white rounded-lg shadow-md";

    taskItem.innerHTML = `
        <h3 class="text-lg font-semibold mb-2">${task.title}</h3>
        <p class="text-gray-600">${task.description}</p>
        <p class="text-gray-600">Date: ${task.date}</p>
        <p class="text-gray-600">Time: ${task.time}</p>
        <button class="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 mr-2" onclick="completeTask(this)">Complete</button>
        <button class="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(taskItem);
}

function completeTask(button) {
    const taskItem = button.parentElement;
    taskItem.classList.add("bg-green-100");
    button.classList.add("bg-green-500");
    button.textContent = "Completed";
    button.disabled = true;

    // Tarea terminada
    const taskTitle = taskItem.querySelector("h3").textContent;
    markTaskAsCompleted(taskTitle);
}

function deleteTask(button) {
    const taskItem = button.parentElement;
    taskList.removeChild(taskItem);

    // Eliminar la tarea 
    const taskTitle = taskItem.querySelector("h3").textContent;
    deleteTaskFromLocalStorage(taskTitle);
}

function saveTaskToLocalStorage(task) {
    let tasks = getTasksFromLocalStorage();
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function getTasksFromLocalStorage() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    return tasks;
}

function markTaskAsCompleted(title) {
    const tasks = getTasksFromLocalStorage();
    const taskIndex = tasks.findIndex(task => task.title === title);
    if (taskIndex !== -1) {
        tasks[taskIndex].completed = true;
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
}

function deleteTaskFromLocalStorage(title) {
    const tasks = getTasksFromLocalStorage();
    const updatedTasks = tasks.filter(task => task.title !== title);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

function loadTasksFromLocalStorage() {
    const tasks = getTasksFromLocalStorage();
    tasks.forEach(task => {
        if (!task.completed) {
            addTaskToList(task);
        }
    });
}
    






