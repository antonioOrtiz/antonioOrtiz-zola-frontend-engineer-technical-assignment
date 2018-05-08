import React, { Component } from 'react'; /* named imports if what we are importing is coming in as an object */
import Users from './Users';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/* named imports if what we are importing is coming in as an object */

// import '../index.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Users />
      </div>
    );
  }
}
