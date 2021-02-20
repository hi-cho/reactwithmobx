import { inject, observer } from 'mobx-react';
import React, { Component } from 'react';
import TodoListView from '../views/TodoListView';

@inject('todoStore')
@observer
class TodoListContainer extends Component {
  render(){

    const { todos } = this.props.todoStore
    
    return (
      <TodoListView todos={todos} />
    )
  }
}

export default TodoListContainer;