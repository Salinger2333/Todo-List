import { ProjectController } from "../logic/ProjectController.js"
import { board } from "./board.js"
import { init } from "./dom.js"


function nav() {
    const nameList = ProjectController.getNameList()
    const nav = document.querySelector('nav')
    nameList.forEach((name) => {
        const div = document.createElement('div')
        div.textContent = name
        div.classList.add('project-name')
        div.id = name
        nav.append(div)
    })
    nav.addEventListener('click', (e) => {
        if (e.target.classList.contains('project-name')) {
            const projectName = e.target.id
            ProjectController.changeCurProject(projectName)
            console.log(ProjectController.getCurProject())
            board()
        }
    })
}

export { nav }