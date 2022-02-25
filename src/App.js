import logo from './logo.svg';
import './App.css';
import SetIntervalExample from './SetIntervalExample';
import { useState } from 'react';

function App() {
  const [display, setDisplay] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => { setDisplay(!display) }}>Toggle Component</button>
        {display && <SetIntervalExample />}
      </header>
    </div>
  );
}

export default App;
