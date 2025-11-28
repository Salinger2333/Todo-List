import { format } from 'date-fns';
import { Project } from './logic/Project.js';
import { Todo } from './logic/Todo.js';
import * as dom from './dom/dom.js';
import './style.css';
import { storage } from './utils/storage.js';
import { ProjectController } from './logic/ProjectController.js';

// // create a project
// const firstProject = new Project('default')
// const secoundProject = new Project('Book to read')
// // create a todo
// const firstTodo = Todo({ title: "1", description: "..." })
// const secondTodo = Todo({ title: "2", description: "..." })
// const thridTodo = Todo({ title: "3", description: "..." })
// const fourthTodo = Todo({ title: "4", description: "..." })
// firstProject.addTodo(firstTodo)
// firstProject.addTodo(secondTodo)

// secoundProject.addTodo(thridTodo)
// secoundProject.addTodo(fourthTodo)

// const toDoObj = { project: [firstProject.getProject(), secoundProject.getProject()] }
// const toDoJson = JSON.stringify(toDoObj)
// localStorage.setItem('todo', toDoJson)
const dialog = document.querySelector('dialog')
const newTodo = document.querySelector('.create-todo')
newTodo.addEventListener('click',() => {
    dialog.showModal()
})
console.log(ProjectController().getNameList());
dom.board()
dom.nav()


