import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import Context from "./contexts/context";
import ContextProvider from "./ContextProvider/contextProvider";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <Context.Consumer>
          {({ number, changeNumber }) => (
            <div>
              <h2>{number}</h2>
              <button onClick={changeNumber}>Change</button>
            </div>
          )}
        </Context.Consumer>
      </div>
    </ContextProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
