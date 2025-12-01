import { Project } from './Project.js'
const ProjectManager = (function () {
    let projects = []
    let curProject = projects[0]
    // 渲染在dom上
    const getNameList = () => {
        return projects.map((project) => project.name)
    }
    // 增删查改dom
    const getProject = (uid) => {
        return projects.find((project) => project.uid === uid)
    }
    const getAllProjects = () => {
        return [...projects]
    }
    const addProject = (name) => {
        const newProject = new Project(name)
        projects.push(newProject)
        if (!curProject) {
            curProject = newProject
        }
    }
    const removeProject = (uid) => {
        projects = projects.filter((project) => project.uid !== uid)
    }

    const getCurProject = () => curProject
    const switchCurProject = (uid) => {
        const newCurProject = projects.find((project) => project.uid === uid)
        if (newCurProject) {
            curProject = newCurProject
        }
    }
    return {
        getCurProject,
        switchCurProject,
        getProject,
        getAllProjects,
        getNameList,
        addProject,
        removeProject
    }
})()

export { ProjectManager }