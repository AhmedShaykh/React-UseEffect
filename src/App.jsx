import React from 'react';
import Effect from './Hooks/UseEffect';
import State from './Hooks/UseState';
import './App.css';

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