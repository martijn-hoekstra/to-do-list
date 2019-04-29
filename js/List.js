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

        // Append tasks to lists
        for(let i = 0; i < this.tasks.length; i++){
            if(this.tasks[i].status > 1) {
                inProgress.appendChild(this.tasks[i].getTask());
            } else {
                completed.appendChild(this.tasks[i].getTask());
            }
        }

        this.displayProgress();
    }

    // This function triggers when button is clicked on page to add a task. Information is given by user.
    createTask(date, task, priority){
        this.tasks.push(new Task(date, task, priority));
        this.displayList();
    }

    removeTask(taskId){
        const element = document.getElementById(taskId);
        const list = element.parentNode;
        list.removeChild(element);

        const newTasksArray = this.tasks.filter(function(task, index, arr){
            return task.id !== taskId;
        });

        this.tasks = newTasksArray;

        // displayList() ??
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
        progressBar.textContent = amountOfTasks > 0 ? `${tasksCompleted.length} / ${tasksInProgress.length} completed`: '';
    }
}