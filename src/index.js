import { format } from 'date-fns';
import { Project } from './logic/Project.js';
import { Todo } from './logic/Todo.js';

// create a project
const firstProject = new Project('default')
const secoundProject = new Project('Book to read')
// create a todo
const firstTodo = Todo({ title: "1", description: "..." })
const secondTodo = Todo({ title: "2", description: "..." })
const thridTodo = Todo({ title: "3", description: "..." })
const fourthTodo = Todo({ title: "4", description: "..." })
firstProject.addNewTodo(firstTodo)
firstProject.addNewTodo(secondTodo)

secoundProject.addNewTodo(thridTodo)
secoundProject.addNewTodo(fourthTodo)

const toDoObj = { project: [firstProject.getProject(), secoundProject.getProject()] }
const toDoJson = JSON.stringify(toDoObj)
localStorage.setItem('todo', toDoJson)
if (!localStorage.getItem('todo')) {
    throw new Error("there's no localStorage")
} else {
    const ls = localStorage.getItem('todo')
    const projectName = JSON.parse(ls).project[0].name
    const content = document.querySelector('.content')
    const div = document.createElement('div')
    div.textContent = projectName
    content.append(div)
}

