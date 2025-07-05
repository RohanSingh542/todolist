const inputEle = document.querySelector('#input_text');
const btnEle = document.querySelector('#task_btn');
const listItemEle = document.querySelector('.list_item');
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

//Save task to local storage
function saveTask(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

//Render tasks to the DOM
function renderTask(){
    listItemEle.innerHTML = '';  //clear existing list
    tasks.forEach((task,index) => {
        let listEle = document.createElement('li');

        //create the icon
        const icon = document.createElement('img');
        icon.src = task.completed ?'./images/done.png' : './images/pending.png';
        icon.classList.add('icon');
        icon.height = 20;
        icon.width = 20;
        icon.dataset.index = index;

        const span = document.createElement('span');
        span.textContent = task.text;

        //create the delete button
        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = 'X';
        deleteBtn.classList.add('delete-btn')
        deleteBtn.dataset.index = index;

        if(task.completed){
            listEle.classList.add('checked');
        }

        listEle.appendChild(icon);
        listEle.appendChild(span);
        listEle.appendChild(deleteBtn)
        listItemEle.appendChild(listEle);
    })
}

//add new task
btnEle.addEventListener('click', () => {
    const text = inputEle.value.trim();
    if(text === ""){
        alert("Please Enter Your Task")
    }
    tasks.push({text,completed:false});
    saveTask();
    renderTask();
    inputEle.value = ""
})

//handle toggling and deletion

listItemEle.addEventListener('click', (e) => {
    const index = e.target.dataset.index;

    if(e.target.classList.contains('icon')){
        tasks[index].completed = !tasks[index].completed;
        saveTask();
        renderTask();
    }

    if(e.target.classList.contains('delete-btn')){
        tasks.splice(index,1);
        saveTask();
        renderTask();
    }
})
renderTask();