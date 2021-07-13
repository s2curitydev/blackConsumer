import React, { Component, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import { contactList } from "./js/sampleData";
// import { firebase_db } from "./js/firebaseConfig";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { contactList };
  }

  // function App() {
  //   const [state, setState] = useState([]);

  //   useEffect(() => {
  //     setTimeout(() => {
  //       firebase_db
  //         .ref("/contactList")
  //         .once("value")
  //         .then((snapshot) => {
  //           console.log("파이어베이스에서 데이터 가져왔습니다!!");
  //           let tip = snapshot.val();
  //           setState(contactList);
  //         });
  //     }, 1000);
  //   }, []);

  render() {
    console.log(contactList);
    return (
      <Router>
        <div>
          <Navbar />
          <div className="container">
            <Switch>
              <Route path="/" exact>
                <Home />
              </Route>
              <Route path="/Features">
                <Features contactList={contactList} />
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
