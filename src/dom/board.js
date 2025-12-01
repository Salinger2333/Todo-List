import { ProjectManager } from '../logic/ProjectManager.js';
import { createTodoItem } from './todo-item.js';


function board() {
    const curProject = ProjectManager.getCurProject()
    const todoList = document.querySelector('.todo-list')
    todoList.replaceChildren()
    curProject.todos.forEach((todo) => {
        const todoItem = createTodoItem(todo)
        todoList.append(todoItem)
    })
}

export { board }