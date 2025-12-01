import { ProjectController } from '../logic/ProjectController.js';
import { createTodoItem } from './todo-item.js';


function board(todos) {
    const curProject = ProjectController.getCurProject()
    const todoList = ProjectController.getTodoList(curProject.name)
    const content = document.querySelector('.content')
    content.replaceChildren()
    todoList.forEach((todo) => {
        const todoItem = createTodoItem(todo)
        content.append(todoItem)
    })
}

export { board }