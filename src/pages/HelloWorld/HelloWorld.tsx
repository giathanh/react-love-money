import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';

import logo from './logo.svg';
import './HelloWorld.css';

interface HelloWorldProps {}

const HelloWorld = ({}: HelloWorldProps) => {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          <Button variant="contained" color="primary">
            Hello World
          </Button>
        </p>
      </header>
    </div>
  );
}

export default HelloWorld;