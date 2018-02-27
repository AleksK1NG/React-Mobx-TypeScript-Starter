import * as React from 'react';
import {observer, inject} from 'mobx-react'
import TodoStore from '../../stores/TodoStore'
import ViewStore from "../../stores/ViewStore";


interface AppProps {
  viewStore?: ViewStore,
  todoStore?: TodoStore,
};

interface AppState {
  todoInput: any,
};


@inject('todoStore')
@observer
class Todo extends React.Component<AppProps, AppState> {

  state: AppState = {
    todoInput: '',
  };

  handleClick = () => {
    this.props.todoStore.consoleLog()
  };



  render(){
    return (
      <div >
        <h1>Todo list</h1>
        <h2>{this.props.todoStore.myTitle}</h2>
        <button onClick={() => this.handleClick()}>Console Log</button>
        <button onClick={this.props.todoStore.addTodo}>ADD TODO</button>
        <input
          type="text"
          value={this.props.todoStore.todoItem}
          onChange={(e) => this.props.todoStore.setTodoItem(e.target.value)}
        />
        <h4>todo item is: {this.props.todoStore.todoItem}</h4>
        <hr/>
        <br/>
        {this.props.todoStore.todoList.map((item, index) => (
          <div key={index}>
            <h4 >{item}</h4>
            <button onClick={() => this.props.todoStore.deleteTodo(index)}>Delete</button>
          </div>

        ))}
      </div>
      )
    }
}

export default Todo;