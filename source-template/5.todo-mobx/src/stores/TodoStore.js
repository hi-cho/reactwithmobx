import { observable, action, computed, makeObservable } from 'mobx'

class TodoStore {

    constructor(){
        makeObservable(this)
    }

    @observable
    _todo = {} // id, title, date

    @observable
    _todos = []
    
    get todo() {
        return this._todo
    }

    @computed
    get todos(){
        return this._todos
    }

    @action
    setTodoProps(name, value) {
        this._todo = {
            ...this._todo,
            [name] : value
        }
    }

    @action
    addTodo(todo) {
        this._todos.push(todo)
    }
}

export default new TodoStore()
