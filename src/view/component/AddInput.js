import React from 'react';
import '../../style/AddInput.scss'

const AddInput = () => {
  return (
      <div className="AddInput-container">
        <input className="AddInput" type="text" value="add a new mission…" />
        <i className="material-icons">add</i>
      </div>
  );
};

export default AddInput;