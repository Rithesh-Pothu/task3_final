import React from "react";
import "./App.css";
import Cards from "./components/card.js";
import { BrowserRouter, Route } from "react-router-dom";
import resume from "./components/Resume";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/" component={Cards} />
          <Route exact path="/resume" component={resume} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
