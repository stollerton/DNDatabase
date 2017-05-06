import React, {Component} from 'react';
import NavBar from './NavBar';
import Item from './Item';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header"></div>
        <NavBar></NavBar>
        <div className="pagecontainer">
          <Item></Item>
        </div>
      </div>
    );
  }
}

export default App;
