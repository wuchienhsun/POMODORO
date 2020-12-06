// rsc
import React from "react";
import "../../style/PlayerButton.scss";

const PlayerButton = props => {
  return (
    <div
      className={
        props.type === "big"
          ? "player-big-button-container"
          : "player-button-container"
      }
    >
      <div className="player-button-border">
        <div className="player-button-circle">
          <i className="material-icons">
            {props.type === "big" ? "play_circle_filled" : "play_arrow"}
          </i>
        </div>
      </div>
    </div>
  );
};

export default PlayerButton;
