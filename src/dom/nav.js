import { storage } from "../utils/storage.js"

function nav() {
    const nameList = storage().getNameList()
    const nav = document.querySelector('nav')
    nameList.forEach((name) => {
        const div = document.createElement('div')
        div.textContent = name
        div.classList.add('project-name')
        nav.append(div)
    })
}

export { nav }