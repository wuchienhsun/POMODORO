/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from 'react';
import '../style/Landing.scss';
import { Link } from 'react-router-dom';
import AddInput from './component/AddInput';
import PlayerButton from './component/PlayerButton';

class Landing extends Component {
  render() {
    return (
      <div className="landing-page-container">
        <div className="landing-page-left-container">
          {/* top */}
          <div className="landing-page-left-top-container">
            <AddInput />
          </div>
          {/* mid */}
          <div className="landing-page-left-mid-container">
            <div className="landing-page-left-mid-top-container">
              <div className="landing-page-left-mid-top-left" />
              <div className="landing-page-left-mid-top-right">
                <div className="landing-page-left-mid-top-right-text">
                  the First thing to do today
                </div>
                <div className="landing-page-left-mid-top-right-circle" />
              </div>
            </div>
            <div className="landing-page-left-mid-bottom-container">
              <div className="landing-page-left-mid-bottom-time">25:00</div>
            </div>
          </div>
          {/* bottom */}
          <div>
            <div className="landing-page-left-bottom-container landing-page-left-bottom-container-border">
              <div className="landing-page-left-bottom-right-container">
                <div className="landing-page-left-bottom-circle" />
                <div className="landing-page-left-bottom-text">
                  the second thing to do today
                </div>
              </div>
              <div className="landing-page-left-bottom-left-container">
                <i className="material-icons">play_circle_outline</i>
              </div>
            </div>
            <div className="landing-page-left-bottom-container landing-page-left-bottom-container-border">
              <div className="landing-page-left-bottom-right-container">
                <div className="landing-page-left-bottom-circle" />
                <div className="landing-page-left-bottom-text">
                  the second thing to do today
                </div>
              </div>
              <div className="landing-page-left-bottom-left-container">
                <i className="material-icons">play_circle_outline</i>
              </div>
            </div>
            <div className="landing-page-left-bottom-text-more">
              <Link className="text-decoration" to="/POMODORO/todo">
                more
              </Link>
            </div>
          </div>
        </div>

        <div className="landing-page-right-container">
          <div className="landing-page-right-right-container">
            <div className="landing-page-player-button">
              <PlayerButton type="big" />
            </div>
            <div className="landing-page-right-right-column-container">
              <div className="landing-page-right-right-column-top">
                <Link className="Todo-left-top-field text-decoration" to="/POMODORO/todo">
                  <i className="material-icons">list</i>
                </Link>
                <Link className="Todo-left-top-field text-decoration" to="/POMODORO/analytics">
                  <i className="material-icons">insert_chart</i>
                </Link>
                <Link className="Todo-left-top-field text-decoration" to="/POMODORO/ringtones">
                  <i className="material-icons">library_music</i>
                </Link>
              </div>
              <div className="landing-page-right-right-column-bottom">
                <div className="landing-page-right-right-column-bottom-text">
                  POMODORO
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
