import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  
  render() {
    return (
      <div className="App">
          <UserInput />
          <UserOutput username='MaxRobertsDear' content='Time to rule the world' />
          <UserOutput username='MJ' content='Should have known better' />
      </div>
    );
  }
}

export default App;
