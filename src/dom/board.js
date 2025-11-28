import { storage } from '../utils/storage.js';
import { createTodoItem } from './todo-item.js';


function board(todos) {
    const todoList = storage().getTodoList('default')
    console.log(todoList)
    const content = document.querySelector('.content')
    todoList.forEach((todo) => {
        const todoItem = createTodoItem(todo)
        todoItem.classList.add('todo')
        content.append(todoItem)
    })
}

export { board }