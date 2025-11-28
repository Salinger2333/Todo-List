function createTodoItem(todo) {
    const div = document.createElement('div')
    const titleTodo = document.createElement('div')
    const dueDateTodo = document.createElement('div')
    const toggleTodo = document.createElement('div')
    const priorityTodo = document.createElement('div')
    const descriptionTodo = document.createElement('div')

    div.classList.add('todo-item')
    div.dataset.uid = todo.uid

    titleTodo.classList.add('todo-title')
    titleTodo.textContent = todo.title
    dueDateTodo.classList.add('todo-dueDate')
    dueDateTodo.textContent = todo.dueDate
    toggleTodo.classList.add('todo-toggle')
    priorityTodo.classList.add('todo-priority')
    priorityTodo.textContent = todo.priority
    descriptionTodo.classList.add('todo-description')
    descriptionTodo.textContent = todo.description
    div.append(titleTodo,descriptionTodo, dueDateTodo, priorityTodo, toggleTodo)
    return div

    // const expandTodo = function(){

    // }

    // div.addEventListener('click', expandTodo())
}
export { createTodoItem }