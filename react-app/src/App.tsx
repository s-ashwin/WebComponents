import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { CounterComponent } from 'component-library-react';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Web Components</p>
        <CounterComponent name="Counter component"/>
      </header>
    </div>
  );
}

export default App;
