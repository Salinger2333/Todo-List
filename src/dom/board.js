import { ProjectController } from '../logic/ProjectController.js';
import { createTodoItem } from './todo-item.js';


function board(todos) {
    const todoList = ProjectController().getTodoList('default')
    console.log(todoList)
    const content = document.querySelector('.content')
    todoList.forEach((todo) => {
        const todoItem = createTodoItem(todo)
        content.append(todoItem)
    })
}

export { board }