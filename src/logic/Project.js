import { Todo } from "./Todo"

class Project {
    todos = []
    uid = crypto.randomUUID()
    constructor(name = 'default') {
        this.name = name
    }

    setName(newName) {
        this.name = newName
    }

    getTodo = (toDoUid) => this.todos.find((todo) => todo.uid === toDoUid)
    getAllTodos = () => { return [...this.todos] }
    addTodo = (todo) => {
        const newTodo = new Todo(todo)
        this.todos.push(newTodo)
    }
    removeTodo = (toDoUid) => {
        this.todos = this.todos.filter((todo) => todo.uid !== toDoUid)
    }
    setTodo = (toDoUid, newDetail) => {
        const todoToEdit = this.getTodo(toDoUid)
        if (!todoToEdit) return
        Object.assign(todoToEdit, newDetail)
    }

}

export { Project }