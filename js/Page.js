class Page {
    constructor(){
        this.lists = [];
        this.activeList = 0;
    }

    createPage(listName){
        this.lists.push(new List('New list!'));
        this.lists[this.activeList].displayList();
    }

    handleInteraction(e){
        const target = e.currentTarget;
        if(e.type === 'submit'){
            if(e.currentTarget.id === 'createNewTask') {
                e.preventDefault();
                const date = document.getElementById('date').value !== '' ? document.getElementById('date').value : 'No date';
                const description = document.getElementById('description').value !== '' ? document.getElementById('description').value : 'No description';
                const priority = document.getElementById('priority').value;
                page.lists[page.activeList].createTask(date, description, priority);
            }
        } else if(e.type === 'click'){
            if(e.target.id === 'removeTask'){
                const parent = e.target.parentNode.parentNode;
                const taskId = e.target.parentNode.id;
                page.lists[page.activeList].removeTask(taskId);
            }
        }
    }
}