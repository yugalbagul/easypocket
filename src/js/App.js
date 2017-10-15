import React, { Component } from 'react';
import Header from './containers/Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="site-container">
        <Header />
        <div className="main-content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
