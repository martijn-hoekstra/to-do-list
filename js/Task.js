class Task {
    constructor(date, description, priority){
        this.id = 'id-' + Math.random().toString(36).substr(2, 16);
        this.description = description;
        this.date = date;
        this.priority = priority;
        this.status = 3;
    }

    getTask(){
        const li =             page.createElement('li', 'list-group-item', '', this.id);
        const row =            page.createElement('div', 'row');
        const col1 =           page.createElement('div', 'col');
        const col2 =           page.createElement('div', 'col-md-auto');
        const col3 =           page.createElement('div', 'col col-lg-3');
        const status =         page.createElement('div', 'status', this.status);
        const description =    page.createElement('div', 'description', this.description);
        const date =           page.createElement('div', 'date', 'Due: ' + this.date);
        const statusDiv =      page.createElement('div', 'dropdown');
        const statusButton =   page.createElement('button', 'btn btn-outline-info dropdown-toggle', 'Status', 'dropdownMenuLink');
        const statusDropdown = page.createElement('div', 'dropdown-menu');
        const statusDropdownCompleted =  page.createElement('a', 'dropdown-item', 'Completed', '', '#');
        const statusDropdownInProgress = page.createElement('a', 'dropdown-item', 'In progress', '', '#');
        const statusDropdownNotStarted = page.createElement('a', 'dropdown-item', 'Not started', '', '#');
        const removeButton =             page.createElement('button', 'btn btn-outline-danger', 'Remove', 'removeTask', '#');
        
        li.setAttribute('data-status', this.status);
        statusButton.setAttribute('data-toggle', 'dropdown');
        statusButton.setAttribute('aria-haspopup', 'true');
        statusButton.setAttribute('aria-expanded', 'false');
        statusDropdown.setAttribute('aria-labelledby', 'dropdownMenuLink');
        col3.style.textAlign = 'right';

        li.appendChild(row);
        row.appendChild(col1);
        row.appendChild(col2);
        row.appendChild(col3);
        col1.appendChild(description);
        col2.appendChild(date);
        col3.appendChild(statusDiv);
        statusDiv.appendChild(statusButton);
        statusDiv.appendChild(statusDropdown);
        statusDiv.appendChild(removeButton);
        statusDropdown.appendChild(statusDropdownCompleted);
        statusDropdown.appendChild(statusDropdownInProgress);
        statusDropdown.appendChild(statusDropdownNotStarted);

        return li;
    }

    // set status(_status){

    // }

    // get status(){
    //     return this.status;
    // }

    edit(date, description, priority){
        this.date = date;
        this.description = description;
        this.priority = priority;
    }

}