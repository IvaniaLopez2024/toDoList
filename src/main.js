const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");


taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

        const taskTitle = document.getElementById("task-title").value;
        const taskDescription = document.getElementById("task-description").value;
        const taskDate = document.getElementById("task-date").value;
        const taskTime = document.getElementById("task-time").value;

    if (taskTitle.trim() === "") {
        alert("El título de la tarea no puede estar vacío.");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <h3>${taskTitle}</h3>
        <p>${taskDescription}</p>
        <p>Date:${taskDate}</p>
        <p>Time:${taskTime}</p>
         <button class="complete-button">Completar</button>
        <button class="delete-button">Eliminar</button>
    `;
     
    const botonEliminar = document.createElement("button");
    botonEliminar.innerHTML= `
    <button class="complete-button">Completar</button>
    <button class="delete-button">Eliminar</button>
    `;

    const completeButton = taskItem.querySelector(".complete-button");
    const deleteButton = taskItem.querySelector(".delete-button");

    completeButton.addEventListener("click", function () {
        
    
    });

    deleteButton.addEventListener("click", function () {
        taskList.removeChild(taskItem);
    });

    taskList.appendChild(taskItem);

    // Limpiar el formulario
    taskForm.reset();

});



