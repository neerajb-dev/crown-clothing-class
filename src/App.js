import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation.component";
import Home from "./routes/home/home.component";
import SignIn from "./routes/sign-in/sign-in.component";

class Shop extends Component {
  render() {
    return (
      <h1>I am the shop component</h1>
    )
  }
}

export default class App extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="sign-in" element={<SignIn />} />
          {/* /home/shop */}
        </Route>
      </Routes>
    )
  }
}