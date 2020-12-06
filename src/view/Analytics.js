import React, { Component } from "react";
import LeftController from "./component/LeftController";
import FocusTime from "./component/FocusTime";
import RightController from "./component/RightController";
import Chart from "./component/Chart";

class Analytics extends Component {
  render() {
    return (
      <div className="Todo-container">
        <LeftController name="analytics" />
        <div className="mt45">
          <FocusTime name="focus time" />
          <Chart />
        </div>
        <RightController />
      </div>
    );
  }
}

export default Analytics;
