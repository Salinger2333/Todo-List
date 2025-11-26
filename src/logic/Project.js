class Project {
    constructor(name,todos) {
        this.name = name
        this.todos = todos
    }
    set name(name){
        if(name == null)
            throw new Error('must have content')
        this.name = name
    }
    
}

