import React from 'react';
import '../../style/TodoField.scss'

const TodoField = (props) => {
  return (
    <div className="TodoField-container">
      <div className="TodoField-left-container">
        <i class="material-icons">{props.type === 'todo' ? 'radio_button_unchecked' : 'check_circle_outline'}</i>
        <div className={props.type === 'done' ? 'done-text' : null}>the First thing to do today</div>
      </div>
      <div className="TodoField-right-container">
        {props.type === 'done' ?
          (
            props.time.map((x) => <Dot key={x} />)
          )

          : (<i className="material-icons">play_circle_outline</i>)}

      </div>
    </div>
  );
};

const Dot = () => {
  return (
    <div className="dot-container"></div>
  )
}

export default TodoField;