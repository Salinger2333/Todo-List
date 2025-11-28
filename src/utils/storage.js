function storage() {
    if (!localStorage.getItem('todo')) {
        throw new Error("there's no localStorage")
    } else {
        const ls = localStorage.getItem('todo')
        const projectList = JSON.parse(ls).project
        const getNameList = () => {
            return projectList.map((project) => project.name)
        }
        const getTodoList = (name) => {
            return projectList.find((project) => project.name === name).todos
        }
        return {
            getNameList,
            getTodoList
        }
    }
}
export { storage }