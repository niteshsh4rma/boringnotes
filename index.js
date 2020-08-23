import React, { Component } from 'react';
import { render } from 'react-dom';
import Home from './Components/Home';
import Serverdown from './Components/Serverdown';
import './style.css';
import 'antd/dist/antd.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends Component {
  

  render() {
    return (

      <Router>

      <div style={{textAlign : 'center'}}>
        <Home/>
        
      </div>

      </Router>
    );
  }
}

render(<App />, document.getElementById('root'));
