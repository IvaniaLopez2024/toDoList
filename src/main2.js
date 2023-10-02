class Task {

    constructor({

    name,

    description,

    startTime,

    endTime,

    status

    }){

    this.name = name;

    this.description = description;

    this.startTime = startTime;

    this.endTime = endTime;

    this.status = status;

    }

}


const Task = new Task({

    name : name1,

    description: description,

    startTime: startTime,

    endTime: endTime,

    status: estado,

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

