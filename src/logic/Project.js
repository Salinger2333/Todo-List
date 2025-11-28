import { storage } from "../utils/storage"

class Project {
    todos = []
    constructor(name = 'default') {
        this.name = name
    }
    getName = () => this.name
    setName = (newName) => {
        this.name = newName
        storage().saveInStorage()
    }
    getProject = () => {
        return {
            name: this.name,
            todos: this.todos
        }
    }

    getTodo = (uid) => this.todos.find((todo) => todo.uid === uid)
    getAllTodos = () => { return [...this.todos] }
    addTodo = (todo) => {
        this.todos.push(todo)
        storage().saveInStorage()
    }

    removeTodo = (uid) => {
        this.todos.filter((todo) => todo.uid !== uid)
        storage().saveInStorage()
    }
}

export { Project }
