import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import ButtonGroup from './ButtonGroup'
import {store} from './store';
import './App.css';




class App extends Component {
 
  render() {
    return (
      <div>
        <HelloWorld  tech = {store.getState().tech}/>
        <ButtonGroup technologies={["react", "Elm", "shalom"]}/>
      </div>
    )

  }
}

export default App;
