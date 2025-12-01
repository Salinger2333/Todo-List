import { Project } from './Project.js'
const ProjectController = (function () {
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
        projects.push(new Project(name))
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

export { ProjectController }