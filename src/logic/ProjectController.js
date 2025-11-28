import { storage } from "../utils/storage"

const ProjectController = function () {
    let projects = []
    projects = storage().getProjects()
    const getNameList = () => {
        return projects.map((project) => project.name)
    }
    const addProject = (name) => {
        projects.push({ name: name, todos: [] })
        saveInStorage()
    }
    const removeProject = (name) => {
        projects = projects.filter((project) => project.name !== name)
        saveInStorage()
    }
    const getTodoList = (name) => {
        return projects.find((project) => project.name === name).todos
    }

    return {
        getNameList,
        getTodoList,
        addProject,
        removeProject
    }// Placeholder for future project-related logic
}

export { ProjectController }