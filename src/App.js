import React, { Component } from "react";

import "./App.css";
import Landing from "./components/home/Landing";
import { Footer } from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import { Provider } from "react-redux";
import { HashRouter as Router, Route } from "react-router-dom";
import store from "./store";
import Movie from "./components/home/Movie";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route path="/movie/:id" component={Movie} />
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
