const page = new Page();
page.createPage();

document.getElementById('page').addEventListener('click', page.handleInteraction);
document.getElementById('createNewTask').addEventListener('submit', page.handleInteraction);