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

  onClickHandler = (newUserName) => {
    this.setState({
      info: [
        { username: newUserName, content: 'Time to rule the world' },
        { username: 'Sarah', content: 'This little piggy went all the way home' },
      ]
    });
  }

  render() {
    const style = {
      backgroundColor: 'white', 
      font: 'inherit', 
      border: '1px solid blue', 
      padding: '8px', 
      cursor: 'pointer'
    }

    return (
      <div className="App">
      <button 
        style={style}
        onClick={() => this.onClickHandler('YATSI!')} >Change Content</button>
          <UserInput />
          <UserOutput username={this.state.info[0].username} content={this.state.info[0].content} />
          <UserOutput username={this.state.info[1].username} content={this.state.info[1].content} />
      </div>
    );
  }
}

export default App;
