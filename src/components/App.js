import React from 'react';
import './css/App.css';
import UnauthenticatedApp from './components/UnauthenticatedApp.js/index.js';
import './components/AuthenticatedApp.js/index.js';


function App() {
  return (
    <UnauthenticatedApp />
  );
}

export default App;
