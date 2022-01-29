import Demo1 from "../views/Demo1";
import Demo2 from "../views/Demo2";
import Demo3 from "../views/Demo3";
import React, { Component } from "react";
import {
  Route,
  Routes,
  BrowserRouter,
  Navigate,
} from "react-router-dom";

export default class Routers extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <React.Fragment>
            <Route path="/demo1" element={<Demo1></Demo1>} />
            <Route path="/demo2" element={<Demo2></Demo2>} />
            <Route path="/demo3" element={<Demo3></Demo3>} />
            <Route path="*" element={<Navigate to="/demo1" />}></Route>
          </React.Fragment>
        </Routes>
      </BrowserRouter>
    );
  }
}
