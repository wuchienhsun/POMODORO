import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import Landing from './view/Landing';
import TODO from './view/TODO';
import Analytics from './view/Analytics';


function App() {
  return (<>
    <Router>
      <Route exact path="/POMODORO" component={Landing} />
      <Route exact path="/POMODORO/todo" component={TODO} />
      <Route exact path="/POMODORO/analytics" component={Analytics} />
    </Router>

  </>);
}


export default App;
