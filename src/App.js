import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    info: [
      { username: 'MaxRobertsDear', content: 'Time to rule the world' },
      { username: 'Sarah', content: 'Should have known better' },
    ]
  }

  render() {
    return (
      <div className="App">
          <UserInput />
          <UserOutput username={this.state.info[0].username} content={this.state.info[0].content} />
          <UserOutput username={this.state.info[1].username} content={this.state.info[1].content} />
      </div>
    );
  }
}

export default App;
