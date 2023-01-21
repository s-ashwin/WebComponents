import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { LikeComponent, SearchComponent } from "component-library-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Web Components</p>
        <SearchComponent onChangeInput={(e) => console.log(e.target.value)} />
        <LikeComponent  />
      </header>
    </div>
  );
}

export default App;
