import React from 'react';
import './App.css';
import Effect from './Hooks/Effect';
import State from './Hooks/State';

function App() {
  return (
    <div className="App App-header">
      <Effect />
      <br />
      <State />
    </div>
  );
}

export default App;