class Task {
    constructor(date, description, priority){
        this.id = 'id-' + Math.random().toString(36).substr(2, 16);
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.status = 3;
    }

    getTask(){
        const li = document.createElement('li');
        li.classList = 'list-group-item d-flex justify-content-end align-items-center';
        li.id = this.id;

        const status = document.createElement('div');
        status.classnName = 'status';
        status.textContent = this.status;

        const description = document.createElement('div');
        description.className = 'description';
        description.textContent = this.description;

        const date = document.createElement('div');
        date.className = 'date';
        date.textContent = this.date;

        const statusContainer = document.createElement( 'div');
        statusContainer.className = 'dropdown';

        const statusButton = document.createElement('button');
        statusButton.textContent = 'Status';
        statusButton.classList = 'btn btn-outline-info dropdown-toggle';
        statusButton.id = 'dropdownMenuLink';
        statusButton.setAttribute('data-toggle', 'dropdown');
        statusButton.setAttribute('aria-haspopup', 'true');
        statusButton.setAttribute('aria-expanded', 'false');

        const statusDropdown = document.createElement('div');
        statusDropdown.className = 'dropdown-menu';
        statusDropdown.setAttribute('aria-labelledby', 'dropdownMenuLink');

        const statusDropdownCompleted = document.createElement('a');
        statusDropdownCompleted.className = 'dropdown-item';
        statusDropdownCompleted.href = '#';
        statusDropdownCompleted.textContent = 'Completed';

        const statusDropdownInProgress = document.createElement('a');
        statusDropdownInProgress.className = 'dropdown-item';
        statusDropdownInProgress.href = '#';
        statusDropdownInProgress.textContent = 'In progress';

        const statusDropdownNotStarted = document.createElement('a');
        statusDropdownNotStarted.className = 'dropdown-item';
        statusDropdownNotStarted.href = '#';
        statusDropdownNotStarted.textContent = 'Not started';

        const removeButton = document.createElement('button');
        removeButton.classList = 'btn btn-outline-danger';
        removeButton.id = 'removeTask';
        removeButton.href = '#';
        removeButton.textContent = 'Remove';

        li.appendChild(status);
        li.appendChild(description);
        li.appendChild(date);
        li.appendChild(statusContainer);

        statusContainer.appendChild(statusButton);
        statusContainer.appendChild(statusDropdown);

        statusDropdown.appendChild(statusDropdownCompleted);
        statusDropdown.appendChild(statusDropdownInProgress);
        statusDropdown.appendChild(statusDropdownNotStarted);

        li.appendChild(removeButton);

        return li;
    }

    edit(date, description, priority){
        this.date = date;
        this.description = description;
        this.priority = priority;
    }

}


        // li.innerHTML = `
        //     <i class="material-icons drag-handle">drag_handle</i>
        //     <span class="flex-grow-1">${this.date} | ${this.description} | ${this.priority}</span>
        //     <div class='status'></div>
        //     <div class="dropdown">
        //         <button class="btn btn-outline-info dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //             Status
        //         </button>
                
        //         <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        //             <a class="dropdown-item" href="#">Completed</a>
        //             <a class="dropdown-item" href="#">In progress</a>
        //             <a class="dropdown-item" href="#">Not started</a>
        //         </div>
        //     </div>
        //     <button id="removeTask" href="#" class="btn btn-outline-danger">Remove</button>
        //     `;
