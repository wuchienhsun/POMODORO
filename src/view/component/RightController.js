import React, { useState } from "react";
import "../../style/Todo.scss";
import { Link } from "react-router-dom";

const RightController = () => {
  return (
    <div className="Todo-right-container">
      <Link className="text-decoration" to="/POMODORO">
        <i className="material-icons">clear</i>
      </Link>
      <div>POMODORO</div>
    </div>
  );
};

export default RightController;
