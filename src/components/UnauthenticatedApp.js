import React from 'react';
import './css/UnauthenticatedApp.css';
import Timer from './Timer'

export default function UnauthenticatedApp() {
    return (
      <div className="UnauthenticatedApp">
        <header className="App-header">
          <Timer/>
        </header>
      </div>
    );
  }
