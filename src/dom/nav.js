import { ProjectController } from "../logic/ProjectController.js"


function nav() {
    const nameList = ProjectController().getNameList()
    const nav = document.querySelector('nav')
    nameList.forEach((name) => {
        const div = document.createElement('div')
        div.textContent = name
        div.classList.add('project-name')
        div.id = name
        nav.append(div)
    })
}

export { nav }