import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import { contactList } from "./js/sampleData";

class App extends Component {
  state = { contactList };

  render() {
    return (
      // console.log(contactList)
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/Features">
                <Features contactList={this.state} />
              </Route>
              <Route path="/Pricing">
                <Pricing />
              </Route>
              <Route path="/About">
                <About />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
