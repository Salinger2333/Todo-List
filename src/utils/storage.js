const defaultToDo = {
    project: [{
        name: 'default',
        todos: [{
            title: 'Welcome to your To-Do List!',
            description: 'This is your first task. Feel free to edit or delete it.',
            dueDate: new Date().toISOString(),
            priority: 3,
        }]
    }]
}
function storage() {
    const ls = localStorage.getItem('todo')
    const projects = JSON.parse(ls).project
    if (!ls) {
        localStorage.setItem('todo', JSON.stringify(defaultToDo))
    }
    const getProjects = () => projects
    const saveInStorage = () => {
        const toDoObj = { project: projects }
        const toDoJson = JSON.stringify(toDoObj)
        localStorage.setItem('todo', toDoJson)
    }

    return {
        getProjects,
        saveInStorage
    }
}

export { storage }