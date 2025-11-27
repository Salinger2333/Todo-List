class Project {
    todos = []
    static projectList = []
    constructor(name = 'default') {
        this.name = name
    }
    getName = () => name
    setName = (newName) => this.name = newName
    addNewTodo = (todo) => this.todos.push(todo)
    getTodos = () => this.todos
    getProject = () => {
        return {
            name: this.name,
            todos: this.todos
        }
    }

    static addNewProject = (name) => {
        this.projectList.push(name)
    }
    static
}

export { Project }
