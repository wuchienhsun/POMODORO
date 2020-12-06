import React from "react";
import "../../style/Todo.scss";
import PlayerButton from "./PlayerButton";
import { Link } from "react-router-dom";

const LeftController = props => {
  console.log("LeftController", props);

  return (
    <>
      <div className="Todo-left-container">
        <div className="Todo-left-top-container">
          <Link
            className={
              props.name === "todo"
                ? "Todo-left-top-field pink"
                : "Todo-left-top-field"
            }
            to="/todo"
          >
            <i className="material-icons">list</i>
            <div className="Todo-left-top-field-text">to-do list</div>
          </Link>
          <Link
            className={
              props.name === "analytics"
                ? "Todo-left-top-field pink"
                : "Todo-left-top-field"
            }
            to="/analytics"
          >
            <i class="material-icons">insert_chart</i>
            <div className="Todo-left-top-field-text">analytics</div>
          </Link>
          <Link
            className={
              props.name === "ringtones"
                ? "Todo-left-top-field pink"
                : "Todo-left-top-field"
            }
            to="/ringtones"
          >
            <i class="material-icons">library_music</i>
            <div className="Todo-left-top-field-text">ringtones</div>
          </Link>
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
    </>
  );
};

export default LeftController;
