const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

taskForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const taskTitle = document.getElementById("task-title").value;
    const taskDescription = document.getElementById("task-description").value;

    if (taskTitle.trim() === "") {
        alert("El título de la tarea no puede estar vacío.");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <h3>${taskTitle}</h3>
        <p>${taskDescription}</p>
         <button class="complete-button">Completar</button>
        <button class="delete-button">Eliminar</button>
    `;
     
    const botonEliminar = document.createElement("button");
    botonEliminar.innerHTML= `
    <button class="complete-button">Completar</button>
    <button class="delete-button">Eliminar</button>
    `;

    taskList.appendChild(taskItem);

    // Limpiar el formulario
    taskForm.reset();
});

function guardar() {
    const task = document.getElementById('taskInput').value;
    localStorage.setItem('mitask', task);
    mostrarTaskGuardada();
}

function mostrarTaskGuardada() {
    const taskGuardada = localStorage.getItem('mitask');
    if (task) {
        document.getElementById('Taskguardada').textContent = 'Task guardada: ' + taskGuardada;
    } else {
        document.getElementById('Taskguardada').textContent = 'No hay dato guardado.';
    }
}

mostrarTaskGuardada();


