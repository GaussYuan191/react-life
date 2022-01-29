import React, { Component } from "react";
import { Button, Divider } from "antd";
import { NavLink } from "react-router-dom";
export default class Demo1 extends Component {
  //构建
  constructor(props) {
    super(props);
    this.state = { sum: 0 };
    console.log("constructor!!");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps!!");
    return null;
  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  // 数据更新
  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    console.log("thisProps", this.props, "this.state=", this.state);
    console.log("nextProps=", nextProps, "nextState=", nextState);
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    console.log("thisProps", this.props, "this.state=", this.state);
    console.log("prevProps=", prevProps, "prevState=", prevState);
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    console.log("thisProps", this.props, "this.state=", this.state);
    console.log("prevProps=", prevProps, "prevState=", prevState);
  }
  // 卸载
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }
  add = () => {
    let { sum } = this.state;
    this.setState({ sum: sum + 1 });
  };
  render() {
    console.log("render!!");
    const { sum } = this.state;
    return (
      <div>
        <Divider />
        <div>
          <NavLink to="/demo2">demo2</NavLink>
        </div>
        <Divider />
        <div>
          <NavLink to="/demo3">demo3</NavLink>
        </div>
        <Divider />
        <Button type="primary" onClick={this.add}>
          点击加1
        </Button>
        : {sum}
      </div>
    );
  }
}
