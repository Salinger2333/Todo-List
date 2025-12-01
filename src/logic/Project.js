class Project {
    todos = []
    uid = crypto.randomUUID()
    constructor(name = 'default') {
        this.name = name
    }

    set name(newName) {
        this.name = newName
    }

    getTodo = (toDoUid) => this.todos.find((todo) => todo.uid === toDoUid)
    getAllTodos = () => { return [...this.todos] }
    addTodo = (todo) => {
        this.todos.push(todo)
    }
    removeTodo = (toDoUid) => {
        this.todos.filter((todo) => todo.uid !== uid)
    }
    setTodo = (toDoUid, newDetail) => {
        const todoToEdit = this.getTodo(toDoUid)
        if (!todoToEdit) return
        Object.assign(todoToEdit, newDetail)
    }

}

export { Project }