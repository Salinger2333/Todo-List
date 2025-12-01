import { ProjectManager } from "../logic/ProjectManager"
import { board } from "./board"
import { openEditModal } from "./edit-handler.js"

function createTodoItem(todo) {
    const div = document.createElement('div')
    const titleTodo = document.createElement('div')
    const dueDateTodo = document.createElement('div')
    const toggleTodo = document.createElement('div')
    const priorityTodo = document.createElement('div')
    const descriptionTodo = document.createElement('div')
    const editTodo = document.createElement('button')
    const deleteTodo = document.createElement('button')

    div.classList.add('todo-item')
    div.dataset.uid = todo.uid

    titleTodo.classList.add('todo-title')
    titleTodo.textContent = todo.title
    dueDateTodo.classList.add('todo-dueDate')
    dueDateTodo.textContent = todo.dueDate
    // toggleTodo.classList.add('todo-toggle')
    priorityTodo.classList.add('todo-priority')
    priorityTodo.textContent = todo.priority
    descriptionTodo.classList.add('todo-description')
    descriptionTodo.textContent = todo.description
    editTodo.classList.add('todo-edit')
    editTodo.textContent = '编辑'
    deleteTodo.classList.add('todo-delete')
    deleteTodo.textContent = '删除'
    div.append(titleTodo, descriptionTodo, dueDateTodo, priorityTodo, toggleTodo, editTodo, deleteTodo)

    editTodo.addEventListener('click', (event) => {
        event.preventDefault()
        openEditModal(todo)
    })
    deleteTodo.addEventListener('click', (event) => {
        event.preventDefault()
        const curProject = ProjectManager.getCurProject()
        curProject.removeTodo(todo.uid)
        board()
    })
    return div


}
export { createTodoItem }