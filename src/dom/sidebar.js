import { ProjectManager } from '../logic/ProjectManager.js'
import { board } from "./board.js"


function sidebar() {
    const projectList = ProjectManager.getAllProjects()
    const list = document.querySelector('.project-list')
    projectList.forEach((project) => {
        const div = document.createElement('div')
        div.textContent = project.name
        div.classList.add('project-name')
        div.id = project.uid
        list.append(div)
    })
    list.addEventListener('click', (e) => {
        if (e.target.classList.contains('project-name')) {
            const projectUid = e.target.id
            ProjectManager.switchCurProject(projectUid)
            console.log(ProjectManager.getCurProject())
            board()
        }
    })
}

export { sidebar }