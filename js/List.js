class List {
    constructor(listName){
        this.id = 'id-' + Math.random().toString(36).substr(2, 16);
        this.listName = listName;
        this.tasks = [];
    }

    displayList(){
        document.getElementById('listName').textContent = this.listName;
        const inProgress = document.getElementById('in-progress');
        const completed = document.getElementById('completed');
        // clear lists
        inProgress.innerHTML = '';
        completed.innerHTML = '';

        if(this.tasks.length === 0) {
            const li = page.createElement('li', 'list-group-item', 'There are currently no tasks. Use the \'New task\' button to create one.');
            li.style.textAlign = 'center';
            inProgress.appendChild(li);
        }

        // Append tasks to lists
        for(let i = 0; i < this.tasks.length; i++){
            if(this.tasks[i].status !== 'Completed') {
                inProgress.appendChild(this.tasks[i].getTask());
            } else {
                completed.appendChild(this.tasks[i].getTask());
            }
            const task = document.getElementById(this.tasks[i].id);
            this.tasks[i].setBadge(task);
        }
        this.displayProgress();
    }

    // This function triggers when button is clicked on page to add a task. Information is given by user.
    createTask(date, task, priority){
        // if(!this.validateTask(date, task, priority)) {
        //     return;
        // }
        this.tasks.push(new Task(date, task, priority));
        this.displayList();
        const taskId = this.tasks[this.tasks.length - 1].id;
        document.querySelector('#' + taskId + ' .dropdown-menu').addEventListener('click', page.handleInteraction);
    }

    removeTask(taskId){
        const element = document.getElementById(taskId);
        const list = element.closest('ul');
        list.removeChild(element);

        const newTasksArray = this.tasks.filter(function(task, index, arr){
            return task.id !== taskId;
        });
        this.tasks = newTasksArray;
        this.displayList();
        // displayList() ??
    }

    edit(element, typeOfInput){
        if(!document.querySelector('.edit-form')){
            const parent = element.parentNode;
            const content = element.textContent;
            const render = `
            <div class="input-group edit-form">
                <input type="${typeOfInput}" class="form-control" ${typeOfInput === 'text' ? 'value="' + content + '"' : ''}" placeholder="Edit" id="edit-${typeOfInput}">
                <div class="input-group-append" id="edit-buttons">
                    <button class="btn btn-outline-secondary" type="button" id="edit-confirm">v</button>
                    <button class="btn btn-outline-secondary" type="button" id="edit-cancel">x</button>
                </div>
            </div>`;
            parent.innerHTML = render;
            
            document.getElementById('edit-buttons').addEventListener('click', (e) => {
                if(e.target.type === 'button') {
                    if(e.target.id === 'edit-confirm'){
                        const inputValue = document.getElementById('edit-' + typeOfInput).value;
                        element.textContent = inputValue;
                        page.lists[page.activeList].listName = inputValue;
                    }
                    
                    parent.innerHTML = '';
                    parent.appendChild(element);
                }
            });
        }
    }

    validateTask(date, task, priority){
        // validate date
        
        // validate task description

        // validate priority
    }

    checkListItem(taskId){

    }

    moveTask(taskId){

    }

    displayProgress(){
        const progressBar = document.getElementById('progress-bar');
        const tasksInProgress = document.getElementById('in-progress').children;
        const tasksCompleted = document.getElementById('completed').children;
        const amountOfTasks = tasksInProgress.length + tasksCompleted.length;
        const percentage = (100 * tasksCompleted.length) / amountOfTasks;

        progressBar.setAttribute('aria-valuenow', `${percentage}%`);
        progressBar.style.width = `${percentage}%`;
        progressBar.textContent = amountOfTasks > 0 ? `${tasksCompleted.length} / ${amountOfTasks} completed`: '';
    }
}