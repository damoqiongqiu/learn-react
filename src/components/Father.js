import React, { Component } from "react";
import Child from "./Child";

class Father extends Component {
    constructor() {
        super();
        console.log("Father constructor...");
    }

    componentWillMount() {
        console.log("Father componentWillMount...");
    }

    componentDidMount() {
        console.log("Father componentDidMount...");
    }

    componentWillReceiveProps() {
        console.log("Father componentWillReceiveProps...");
    }

    componentWillUpdate() {
        console.log("Father componentWillUpdate...");
    }

    componentDidUpdate() {
        console.log("Father componentDidUpdate...");
    }

    shouldComponentUpdate() {
        console.log("Father shouldComponentUpdate...");
    }

    render() {
        console.log("Father render...");
        return (
            <div className="container-fluid">
                <div className="panel panel-primary">
                    <div className="panel-heading">Father组件</div>
                    <div className="panel-body">
                        <Child clickHandler={this.clickHandler} userId="damoqiongqiu"></Child>
                    </div>
                    <div className="panel-footer"></div>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        console.log("Father componentWillUnmount...");
    }

    clickHandler() {
        alert("父层传递进来的事件处理函数！");
    }
}

export default Father;