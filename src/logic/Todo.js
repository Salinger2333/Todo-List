const Todo = function ({ title, description, dueDate = new Date(), priority = 4 }) {
    const uid = crypto.randomUUID()
    const isComplete = false
    const toggleComplete = () => isComplete = !isComplete
    return {
        title,
        description,
        dueDate,
        priority,
        uid,
        isComplete,
        toggleComplete
    }
}
export { Todo }