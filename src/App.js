import React, { Component } from 'react';
import request from './js/api/request';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
      request.getItems().then((success) => {
        console.log('success');
        const { data } = success
        console.log(Object.keys(data.list).length)
        console.log(success)
      },  (err) => {
        console.log('error');
        console.log(err);
      })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {/*<a href={getPocketAuthUrl()} target='_blank'>Pocket Auth</a>*/}
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
