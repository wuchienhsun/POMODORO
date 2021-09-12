/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import '../../style/ringtonesList.scss';
import TodoField from './TodoField';

const List = (props) => (
  <div className="ringtonesList-container">
    <div className="title-container">
      <div className="title-text">{props.name}</div>
    </div>
    <div className="field-container"></div>
  </div>
);

export default List;
