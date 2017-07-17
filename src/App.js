import React, { Component } from 'react';
import Calendar from './containers/Calendar'
import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to the McKinsey Calendar</h2>
        </div>
        <Calendar />
      </div>
    );
  }

}

export default App;
