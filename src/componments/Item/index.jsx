import React, { Component } from 'react';

export default class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    console.log("子组件: constructor!!");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("子组件: getDerivedStateFromProps!!");
    return {...props};
  }
  componentDidMount() {
    console.log("子组件: componentDidMount");
  }
  // 数据更新
  shouldComponentUpdate(nextProps, nextState) {
    console.log("子组件: shouldComponentUpdate");
    console.log("thisProps", this.props, "this.state=", this.state);
    console.log("nextProps=", nextProps, "nextState=", nextState);
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("子组件: getSnapshotBeforeUpdate");
    console.log("thisProps", this.props, "this.state=", this.state);
    console.log("prevProps=", prevProps, "prevState=", prevState);
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("子组件: componentDidUpdate");
    console.log("thisProps", this.props, "this.state=", this.state);
    console.log("prevProps=", prevProps, "prevState=", prevState);
  }
  // 卸载
  componentWillUnmount() {
    console.log("子组件: componentWillUnmount");
  }
  render() {
    console.log("子组件: render!!");
    return <div>
    <p>{this.props.data.name}</p>
    <p>{this.props.data.time}</p>
    </div>;
  }
}
