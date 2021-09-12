/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
import LeftController from './component/LeftController';
import FocusTime from './component/FocusTime';
import RightController from './component/RightController';
import List from './component/ringtonesList';
import Chart from './component/Chart';

class Ringtones extends Component {
  render() {
    return (
      <div className="Todo-container">
        <LeftController name="ringtones" />
        <div className="mt45">
          <List name="WORK" />
          <List name="WORK" />
        </div>
        <RightController />
      </div>
    );
  }
}

export default Ringtones;
