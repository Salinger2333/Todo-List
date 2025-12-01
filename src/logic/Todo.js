class Todo {
    constructor({ title, description, dueDate = new Date(), priority = 4 }) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
    }
    uid = crypto.randomUUID()
    isComplete = false
    toggleComplete = () => isComplete = !isComplete
}
export { Todo }