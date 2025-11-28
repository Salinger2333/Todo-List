import { format } from 'date-fns';
import { Project } from './logic/Project.js';
import { Todo } from './logic/Todo.js';
import { nav } from './dom/nav.js';
import { board } from './dom/board.js';

// create a project
const firstProject = new Project('default')
const secoundProject = new Project('Book to read')
// create a todo
const firstTodo = Todo({ title: "1", description: "..." })
const secondTodo = Todo({ title: "2", description: "..." })
const thridTodo = Todo({ title: "3", description: "..." })
const fourthTodo = Todo({ title: "4", description: "..." })
firstProject.addTodo(firstTodo)
firstProject.addTodo(secondTodo)

secoundProject.addTodo(thridTodo)
secoundProject.addTodo(fourthTodo)

const toDoObj = { project: [firstProject.getProject(), secoundProject.getProject()] }
const toDoJson = JSON.stringify(toDoObj)
localStorage.setItem('todo', toDoJson)
nav()
board()
const dialog = document.querySelector('dialog')
const newTodo = document.querySelector('.create-todo')
newTodo.addEventListener('click',() => {
    dialog.showModal()
})

