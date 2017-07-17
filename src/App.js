import React, { Component } from 'react';
import Calendar from './containers/Calendar'
import Input from './components/Input'

import 'semantic-ui-css/semantic.min.css';

class App extends Component {

  constructor() {
    super()

    this.state = {
      input: ""
    }
  }

  handleInputChange = (event) => {
    event.preventDefault()
    this.setState({ input: event.target.value })
  }

  render() {
    return (
      <div>
        <div className="ui center aligned segment blue inverted">
          <h2>Welcome to the McKinsey Calendar</h2>
          <Input input={this.input} handleInputChange={this.handleInputChange}/>
        </div>

        <p></p>
        <p></p>
        <p></p>
        <Calendar input={this.input}/>
      </div>
    );
  }

}

export default App;
