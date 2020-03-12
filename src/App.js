import React from 'react';
import TodoList from "./components/TodoList.js"
import TodoForm from "./components/TodoForm.js"

  const todos = [
  
  ];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


    constructor() {
    super();
    this.state = {
      todos
    };
  }

   toggleCompleted = todoId => {
    this.setState({
      todos: this.state.todos.map(item => {
        if (item.id === todoId) {
          return {
            ...item,
            completed: !item.completed

          };


        }
        return item;
        console.log(item)
      })
    });
  };

addTodo = todoName => {
      console.log(this.state.todos);

    this.setState({
      todos: [
        ...this.state.todos,
        {
          name: todoName,
          completed: false,
          id: (Math.random() * Math.random()).toString(9).substr(2, 9)
        }
      ]
    });
  };

 clearChecked = () => {
    console.log("cleared");
    this.setState({
      todos: this.state.todos.filter(item => {
        return !item.completed;
      })
    });
  };



  render() {
    return (
      <center>
      <div>
              <TodoForm addTodo={this.addTodo}/> 
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} toggleCompleted= {this.toggleCompleted} clearChecked={this.clearChecked}/> 
      </div>
      </center>
    );
  }
}

export default App;
