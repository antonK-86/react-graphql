import React from "react";
import MainComponent from "./components/MainComponent";

const styleC = {
  textAlign: 'center',
}

function App() {
  return (
    <div>
      <header className="header" style={styleC}>
        <h1>React App with GraphQl </h1>
      </header>
      <MainComponent/>
    </div>
  );
}

export default App;
