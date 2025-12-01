class Todo {
    constructor({ title, description, dueDate = new Date(), priority = 4 }) {
        this.title = title
        this.description = description
        this.dueDate = dueDate
        this.priority = priority
        this.uid = crypto.randomUUID()
        this.isComplete = false
    }
    isComplete = false
    toggleComplete = () => isComplete = !isComplete
}
export { Todo }