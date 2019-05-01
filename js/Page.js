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
                const parent = e.target.closest('ul');
                const taskId = e.target.closest('li').id;
                page.lists[page.activeList].removeTask(taskId);
            } else if(e.target.className === 'dropdown-item') {
                const parent = e.target.closest('ul');
                const taskId = e.target.closest('li').id;

                for(let i = 0; i < page.lists[page.activeList].tasks.length; i++) {
                    if(page.lists[page.activeList].tasks[i].id === taskId) {
                        page.lists[page.activeList].tasks[i].status = e.target.textContent;
                        page.lists[page.activeList].displayList();
                        break;
                    }
                }
            } else if(e.target.id === 'listName'){
                page.lists[page.activeList].edit(e.target, 'date');
            }
        }
    }

    createElement(element, classList = '', textContent = '', id = '', href = ''){
        const el = document.createElement(element);
        if(classList !== '') el.classList = classList;
        if(textContent !== '') el.textContent = textContent;
        if(id !== '') el.id = id;
        if(href !== '') el.href = href;
        return el;
    }
}