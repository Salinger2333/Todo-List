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