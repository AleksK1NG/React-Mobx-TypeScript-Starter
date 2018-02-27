import {observable, computed, action} from 'mobx'


class TodoStore {

  @observable myTitle: string = 'React Mobx TS';
  @observable todoItem: any = '';
  @observable todoList: Array<any> = [];


  @action  consoleLog = () => {
    console.log('todoStore', this.myTitle);
  };

  @action setTodoItem = (payload: any) => {
    this.todoItem = payload;
  };

  @action addTodo = () => {
    this.todoList.push(this.todoItem);
    this.todoItem = '';
  };

  @action deleteTodo = (payload) => {
    this.todoList.splice(payload, 1);
  }
}


export default TodoStore;