import React from "react";

const Todo = props => {
  return (
  	 <div
      className={`todo${props.todo.completed ? " " : "completed"}`}
      // onClick={e => props.toggleCompleted(props.todo.id)}
    >
  	 <form>
        <label>
         {props.todo.name}
          <input
            name="checked"
            type="checkbox"
            // checked={props.checked}
            onChange={e => props.toggleCompleted(props.todo.id)}
         />
        </label>
        </form> 
   

    </div>
  );
};

export default Todo;