import React, { Component } from 'react';
import './App.css';
import routes from './routes'

class App extends Component {
  render() {
    return (
      <div>
        <div >
          {routes}
        </div>
      </div>
    );
  }
}

export default App;
