import React from "react";

class TodoForm extends React.Component {
	 constructor(props) {
	    super(props);
	    this.state = {
      		todoName: ""
    };
}
  


 handleChanges = e => {
    // update state with each keystroke
    this.setState({ todoName: e.target.value });
  };

    handleAddTodo = e => {
    e.preventDefault();
    this.props.addTodo(this.state.todoName);
    this.state.todoName = ""
  };



	render(){
		return(
		<form onSubmit={this.handleAddTodo}>
        {/* This is an uncontrolled component 😬 We want it to be controlled by state */}
        <input
          type="text"
          name="todo"
          value={this.state.todoName}
          onChange={this.handleChanges}
          placeholder="...todo"
        /><br/>
        <button>Add</button>
      </form>
	)}
}

export default TodoForm 