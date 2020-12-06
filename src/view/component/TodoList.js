import React, { useState } from "react";
import "../../style/TodoList.scss";
import TodoField from "./TodoField";

const TodoList = props => {
  const [view, changeView] = useState(true);
  return (
    <div className="TodoList-container">
      <div
        className="TodoList-title-container"
        onClick={() => changeView(!view)}
      >
        <div className="TodoList-title-text">{props.name}</div>
        <i className="material-icons">
          {view ? "keyboard_arrow_up" : "keyboard_arrow_down"}
        </i>
      </div>
      <div className="TodoList-field-container">
        {view ? <TodoField  type={props.type} time={[1, 2, 3]} /> : null}
      </div>
    </div>
  );
};

export default TodoList;
