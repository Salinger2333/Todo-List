import { Project } from './Project.js'
import { Todo } from './Todo.js'
const ProjectManager = (function () {
    let projects = []
    let curProject = projects[0]
    const save = () => {
        localStorage.setItem('Todos', JSON.stringify(projects))
    }
    const load = () => {
        const data = JSON.parse(localStorage.getItem('Todos'))
        if (!data) {
            const defaultProject = new Project('default')
            projects.push(defaultProject)
            curProject = defaultProject
            save()
            return
        }
        projects = [] // 清空当前列表，避免重复（虽然这里是初始化，但好习惯）
        data.forEach((project) => {
            const newProject = new Project(project.name)
            newProject.uid = project.uid
            newProject.todos = project.todos.map((todo) =>{
                const newTodo = new Todo(todo)
                Object.assign(newTodo, todo)
                return newTodo
            })
            projects.push(newProject) // 关键修复：添加到数组
        })
        if (projects.length > 0) {
            curProject = projects[0] // 关键修复：恢复 curProject
        }
    }
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
        save()
    }
    const removeProject = (uid) => {
        projects = projects.filter((project) => project.uid !== uid)
        save()
    }

    const getCurProject = () => curProject
    const switchCurProject = (uid) => {
        const newCurProject = projects.find((project) => project.uid === uid)
        if (newCurProject) {
            curProject = newCurProject
        }
    }
    load()
    return {
        save,
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