import { storage } from "../utils/storage"

class Project {
    todos = []
    constructor(name = 'default') {
        this.name = name
    }
    // get and set project name
    getName = () => this.name
    setName = (newName) => {
        this.name = newName
        storage().saveInStorage()
    }
    // get project detail
    getProject = () => {
        return {
            name: this.name,
            todos: this.todos
        }
    }
    // todo 增删查改
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
    setTodo = (uid, newDetail) => {
        const todoToEdit = this.getTodo(uid)
        if (!todoToEdit) return
        Object.assign(todoToEdit, newDetail)
        storage().saveInStorage()
    }

}

export { Project }
