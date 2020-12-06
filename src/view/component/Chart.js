import React, { useState } from "react";
import moment from "moment";
import "../../style/Chart.scss";
import { Bar } from "react-chartjs-2";

const Chart = () => {
  const [startDay, countStartDay] = useState(7);
  const [endDay, countEndDay] = useState(0);

  const startDate = moment()
    .subtract(startDay, "days")
    .format("YYYY.MM.DD");
  // const endDate = moment(new Date(), "YYYY.MM.DD");
  const endDate = moment()
    .add(endDay, "days")
    .format("YYYY.MM.DD");

  const data = {
    // labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderColor: "rgba(255, 255, 255, 1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255, 255, 255, 1)",
        hoverBorderColor: "rgba(255, 255, 255, 1)",
        data: [
          {
            x: new Date(),
            y: 1
          },
          {
            t: new Date(),
            y: 10
          }
        ]
      }
    ]
  };

  const options = {
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            unit: "day",
            // displayFormats: {
            //   quarter: "day"
            // }
          }
        }
      ]
    }
  };

  return (
    <>
      <div className="FocusTime-title-container mt60">
        <div className="FocusTime-title-text">chart</div>
        <div className="Chart-time-container">
          <i
            onClick={() => countStartDay(startDay + 7)}
            className="material-icons"
          >
            keyboard_arrow_left
          </i>
          <div>{startDate}</div>
          <div> - </div>
          <div> {endDate}</div>
          <i onClick={() => countEndDay(endDay + 1)} className="material-icons">
            keyboard_arrow_right
          </i>
        </div>
      </div>
      <div className="Chart-container">
        <Bar data={data} options={options} />
      </div>
    </>
  );
};

export default Chart;
