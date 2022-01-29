import React, { Component } from "react";
import { Button, Divider , Modal} from "antd";
import { NavLink } from "react-router-dom";
import Item from "../../componments/Item/index";
import axios from "axios";
export default class Demo3 extends Component {
  constructor(props) {
    super(props);
    this.state = { sum: 0 , dataList: {},visible: false};
    console.log("父组件: constructor!!");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("父组件: getDerivedStateFromProps!!");
    return null;
  }
  componentDidMount() {
    axios({
      url:"http://39.101.202.100:3033/dataList",
      method:"GET"
    }).then(res =>{
      this.setState({dataList:res.data.data})
    })
    console.log("父组件: componentDidMount");
  }
  // 数据更新
  shouldComponentUpdate(nextProps, nextState) {
    console.log("父组件: shouldComponentUpdate");
    console.log("thisProps", this.props, "this.state=", this.state);
    console.log("nextProps=", nextProps, "nextState=", nextState);
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("父组件: getSnapshotBeforeUpdate");
    console.log("thisProps", this.props, "this.state=", this.state);
    console.log("prevProps=", prevProps, "prevState=", prevState);
    return null;
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("父组件: componentDidUpdate");
    console.log("thisProps", this.props, "this.state=", this.state);
    console.log("prevProps=", prevProps, "prevState=", prevState);
  }
  // 卸载
  componentWillUnmount() {
    console.log("父组件: componentWillUnmount");
  }
  add = () => {
    let { sum } = this.state;
    this.setState({ sum: sum + 1 });
  };
  open = () => {
    this.setState({visible: true})
  }
  handleCancel = () => {
    this.setState({visible: false})
  }
  render() {
    console.log("父组件: render!!");
    let  {dataList, visible} = this.state
    return (
      <div>
      <Divider />
        <div>
          <NavLink to="/demo1">demo1</NavLink>
        </div>
        <Divider />
        <div>
          <NavLink to="/demo2">demo2</NavLink>
        </div>
        <Divider />
        demo3
        <Button type="primary" onClick={this.open}>点击打开modal</Button>
        <Modal
        title="Title"
        visible={visible}
        onCancel={this.handleCancel}
      >
        <div>
          <Item data={dataList}></Item>
        </div>
      </Modal>
        
      </div>
    );
  }
}
