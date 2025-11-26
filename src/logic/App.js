// getCurProject
const storage = {
    todo: {
        project: [
            {
                name: "project1",
                todos: [
                    {
                        title: "1",
                        decription: "asdasd"
                    },
                    {
                        title: "2",
                        decription: "asdasd"
                    }
                ]
            },
            {
                name: "project2",
                todos: [
                    {
                        title: "3",
                        decription: "asdasd"
                    },
                    {
                        title: "4",
                        decription: "asdasd"
                    }
                ]
            }
        ]
    }
}

const project = storage.todo.project
console.table(project);
