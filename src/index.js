import { format } from 'date-fns';
import { Project } from './logic/Project.js';
import { Todo } from './logic/Todo.js';
import { init } from './dom/dom.js';
import './style.css';
import { ProjectController } from './logic/ProjectController.js';
import { storage } from './utils/storage.js';

const dialog = document.querySelector('dialog')
const newTodo = document.querySelector('.create-todo')
newTodo.addEventListener('click', () => {
    dialog.showModal()
})

const subBtn = document.querySelector('#subBtn')
subBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const title = document.querySelector('#title').value
    const description = document.querySelector('#description').value
    const dueDate = format(new Date(document.querySelector('#date').value), 'yyyy-MM-dd')
    const priority = document.querySelector('#priority').value
    const todo = new Todo({ title, description, dueDate, priority })
    
        dialog.close()
})
init()


