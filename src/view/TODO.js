import React, { Component } from "react";
import "../style/Todo.scss";
import PlayerButton from "./component/PlayerButton";
import AddInput from "./component/AddInput";
import List from "./component/TodoList";
import LeftController from "./component/LeftController";
import RightController from "./component/RightController";

class TODO extends Component {
  render() {
    return (
      <div className="Todo-container">
        <LeftController name="todo" />
        <div className="Todo-mid-container">
          <div>
            <AddInput />
          </div>
          <div className="Todo-mid-mid-container">
            <List name="TO-DO" type="todo" />
          </div>
          <div className="Todo-mid-down-container">
            <List name="DONE" type="done" />
          </div>
        </div>
        <RightController />
      </div>
    );
  }
}

const Todo = props => {
  return (
    <div className="Todo-container">
      <div className="Todo-left-container">
        <div className="Todo-left-top-container">
          <div className="Todo-left-top-field">
            <i className="material-icons pink">list</i>
            <div className="Todo-left-top-field-text pink">to-do list</div>
          </div>
          <div className="Todo-left-top-field">
            <i class="material-icons">insert_chart</i>
            <div className="Todo-left-top-field-text">analytics</div>
          </div>
          <div className="Todo-left-top-field">
            <i className="material-icons">library_music</i>
            <div className="Todo-left-top-field-text">ringtones</div>
          </div>
        </div>
        <div className="Todo-left-down-container">
          <div className="Todo-left-down-top-container">
            <PlayerButton />
          </div>
          <div className="Todo-left-down-mid-container">25:00</div>
          <div className="Todo-left-down-down-container">
            the First thing to do today
          </div>
        </div>
      </div>
      <div className="Todo-mid-container">
        <div>
          <AddInput />
        </div>
        <div className="Todo-mid-mid-container">
          <List name="TO-DO" type="todo" />
        </div>
        <div className="Todo-mid-down-container">
          <List name="DONE" type="done" />
        </div>
      </div>
      <div className="Todo-right-container">
        <i className="material-icons">clear</i>
        <div>POMODORO</div>
      </div>
    </div>
  );
};

export default TODO;
