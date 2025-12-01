import { storage } from "../utils/storage"

const ProjectController = (function () {
    let projects = []
    projects = storage().getProjects()
    let curProject = projects[0]
    // 渲染在dom上
    const getNameList = () => {
        return projects.map((project) => project.name)
    }
    // 增删查改dom
    const getProject = (name) => {
        return projects.find((project) => project.name === name)
    }
    const addProject = (name) => {
        projects.push({ name: name, todos: [] })
        saveInStorage()
    }
    const removeProject = (name) => {
        projects = projects.filter((project) => project.name !== name)
        saveInStorage()
    }
    // 得到某个项目的todo列表
    const getTodoList = (name) => {
        return projects.find((project) => project.name === name).todos
    }
    const getCurProject = () => curProject
    const changeCurProject = (name) => {
        const newCurProject = projects.find((project) => project.name === name)
        if (newCurProject) {
            curProject = newCurProject
        }
    }
    return {
        getCurProject,
        changeCurProject,
        getProject,
        getNameList,
        getTodoList,
        addProject,
        removeProject
    }
})()

export { ProjectController }