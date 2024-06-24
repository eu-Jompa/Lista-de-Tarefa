
// evento de adicionar tarefa
function addtask(){

    const taskTittle = document.querySelector("#task-title").value;
    if(taskTittle){
        // clonar template
        const template = document.querySelector(".template");
        const newTask = template.cloneNode(true);
        // clonou o template, ou seja, aquela div
        // adicionando titulo
        newTask.querySelector(".task-tittle").textContent = taskTittle;
        // Pegou a div que estava vazia e adicionou o tasktittle
        //textContent permite fazer alteração.

        // remover as classes desnecessarias
        newTask.classList.remove('template');
        newTask.classList.remove('hide');

        //adiciona tarefa na lista
        const list = document.querySelector('#task-list')

        list.appendChild(newTask);

        //evento de remover tarefa

        const removeBtn = newTask.querySelector(".remove-btn").addEventListener("click", function(){
            removeTask(this);
        });

        // evento adicionar tarefa
        const doneBtn = newTask.querySelector(".done-btn").addEventListener('click', function(){
            completeTask(this)
        })

        // limpando o input
        document.querySelector("#task-title").value = ''
    }

    
} 
function removeTask(task){
    task.parentNode.remove(true)
    
}
function completeTask(task){

    const taskToComplete = task.parentNode;
    taskToComplete.classList.toggle('done');
}


const addbutton = document.querySelector("#add-button");
addbutton.addEventListener('click', (e)=>{
    e.preventDefault();
    
    console.log('button');
    addtask();
});
