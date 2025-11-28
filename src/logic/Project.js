class Project {
    todos = []
    static projectList = []
    constructor(name = 'default') {
        this.name = name
    }
    getName = () => this.name
    setName = (newName) => this.name = newName
    getProject = () => {
        return {
            name: this.name,
            todos: this.todos
        }
    }

    addTodo = (todo) => this.todos.push(todo)
    getTodo = (uid) => this.todos.find((todo) => todo.uid === uid)
    getAllTodos = () => { return [...this.todos] }
    removeTodo = (uid) => this.todos.filters((todo) => todo.uid !== uid)

    static addNewProject = (name) => {
        this.projectList.push(name)
    }
}

export { Project }
