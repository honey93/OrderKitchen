import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./global/header";
import { Switch, Route } from "react-router-dom";

import PlaceOrder from "./main/PlaceOrder";
import UpdatePredicted from "./main/UpdatePredicted";
import Kitchen from "./main/Kitchen";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={PlaceOrder} />
          <Route path="/updatepredicted" component={UpdatePredicted} />
          <Route path="/kitchen" component={Kitchen} />
        </Switch>
      </div>
    );
  }
}

export default App;
