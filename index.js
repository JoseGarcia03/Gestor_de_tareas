//Pendientes
//Limpiar filtros, acortar el codigo, poder marcar o desmarcar si una actividad se realizo o no y editar la fecha

let taskList = [
    {
        id: 0,
        title: "Organizar mi Cuarto",
        date: "2022-01-31",
        check: true
    },
    {
        id: 1,
        title: "Hacer las compras",
        date: "2022-01-30",
        check: true
    },
    {
        id: 2,
        title: "Salir al parque",
        date: "2022-01-29",
        check: true
    },
    {
        id: 3,
        title: "Hacer FreeCodeCamp",
        date: "2022-02-01",
        check: false
    }
];

// Contenerdor de la lista de trareas
const lista = document.getElementById('lista')

//Evento que ejecuta una funcion apenas carge el DOM
window.addEventListener('DOMContentLoaded', ()=>{
    //Recorremos el arreglo de objetos con un forech
    taskList.forEach(task=>{
        const { id, title, date } = task //Desestructuramos el objeto

        //Insetamos HTML con contenido dinamico que traemos del array
        lista.innerHTML += `
        <div class="contTask">
            <h3 class="titleTask">${title}</h3>
            <input type="date" name="" id="" value="${date}" readonly>
            <button onClick="deleteTaks(${id})" class="btnDelete">Borrar Tarea</button>
        </div>
        `
    })
})

//Botones para filtrar
const btnFilterOld = document.getElementById('btnFilterOld');
const btnFilterNew = document.getElementById('btnFilterNew');

//Funcionalidad de los filtros
btnFilterOld.addEventListener('click', old)
btnFilterNew.addEventListener('click', newT)


function old(){
    const oldTaks = taskList.filter(task=> task.check == true)

    lista.innerHTML = ''; //vaciamos nuesta caja de listas

    //Llenamos nuestra caja de listas con las que ya se realizaron
    oldTaks.forEach(task=>{
        const { id, title, date } = task //Desestructuramos el objeto
        //Insetamos HTML con contenido dinamico que traemos del array
        lista.innerHTML += `
        <div class="contTask">
            <h3 class="titleTask">${title}</h3>
            <input type="date" id="" value="${date}" readonly>
            <button onClick="deleteTaks(${id})" class="btnDelete">Borrar Tarea</button>
        </div>
        `
    })
}

function newT(){
    const newTaks = taskList.filter(task=> task.check == false)

    lista.innerHTML = ''; //vaciamos nuesta caja de listas

    //Llenamos nuestra caja de listas con las que ya se realizaron
    newTaks.forEach(task=>{
        const { id, title, date } = task //Desestructuramos el objeto
        //Insetamos HTML con contenido dinamico que traemos del array
        lista.innerHTML += `
        <div class="contTask">
            <h3 class="titleTask">${title}</h3>
            <input type="date" name="" id="" value="${date}" readonly>
            <button onClick="deleteTaks(${id})" class="btnDelete">Borrar Tarea</button>
        </div>
        `
    })
}

//Borrar Tareas
function deleteTaks(id){
    //borramos indicando la pocion
    taskList.splice(id, 1)

    lista.innerHTML = ''; //vaciamos nuesta caja de listas

    //Llenamos nuestra caja de listas con las que ya se realizaron
    taskList.forEach(task=>{
        const { id, title, date } = task //Desestructuramos el objeto
        //Insetamos HTML con contenido dinamico que traemos del array
        lista.innerHTML += `
        <div class="contTask">
            <h3 class="titleTask">${title}</h3>
            <input type="date" name="" id="" value="${date}" readonly>
            <button onClick="deleteTaks(${id})" class="btnDelete">Borrar Tarea</button>
        </div>
        `
    })
}

//añadir tareas
const form = document.getElementById('form');

form.addEventListener('submit', function(e) {
    e.preventDefault() //Prevenimos el evento por defecto de los formularios

    //Capturamos los datos
    const titleTask = document.getElementById('titleTask').value;
    const dateTask = document.getElementById('dateTask').value;

    //Creamos un objeto con la nueva tarea
    let newTask = {
        id: taskList.length,
        title: titleTask,
        date: dateTask,
        check: false
    }
    //añadimos la tarea al arreglo
    taskList.push(newTask)
    
    lista.innerHTML = ''; //vaciamos nuesta caja de listas

    //Llenamos nuestra caja de listas con las que ya se realizaron
    taskList.forEach(task=>{
        const { id, title, date } = task //Desestructuramos el objeto
        //Insetamos HTML con contenido dinamico que traemos del array
        lista.innerHTML += `
        <div class="contTask">
            <h3 class="titleTask">${title}</h3>
            <input type="date" name="" id="" value="${date}" readonly>
            <button onClick="deleteTaks(${id})" class="btnDelete">Borrar Tarea</button>
        </div>
        `
    })
})