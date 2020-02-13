import React, { Component } from 'react';
//import '../css/UnauthenticatedApp.css';
import TimeForm from './TimeForm'


export default class UnauthenticatedApp extends Component{
  constructor(props) {
    super(props);
    this.state = {
  
    };
  }  
  render(){
    return (
      <div className="UnauthenticatedApp">
        <header className="App-header">
          <TimeForm />
        </header>
      </div>
    );
  }
  
  }
