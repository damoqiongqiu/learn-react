import React, { Component } from "react";
import uuidv4 from 'uuid/v4';
import eventBus from "./EventBus";

class Child extends Component {
    id = uuidv4();

    constructor() {
        super();
        console.log(this.props);//注意：this.props在构造的时候还没有赋值
        console.log("Child constructor...");
    }

    componentWillMount() {
        console.log(this.props);//构造函数执行完成之后this.props已经被赋值
        console.log("Child componentWillMount...");
    }

    componentDidMount() {
        console.log("Child componentDidMount..." + this.id);
        eventBus.addListener("myEvent", (event) => {
            console.log("事件来源>");
            console.log(event);
            console.log("事件接受者>" + this.id);
        });
    }

    componentWillReceiveProps() {
        console.log("Child componentWillReceiveProps...");
    }

    componentWillUpdate() {
        console.log("Child componentWillUpdate...");
    }

    componentDidUpdate() {
        console.log("Child componentDidUpdate...");
    }

    shouldComponentUpdate() {
        console.log("Child shouldComponentUpdate...");
    }

    render() {
        console.log("Child render...");
        return (
            <div className="container-fluid">
                <div className="panel panel-primary">
                    <div className="panel-heading">Child组件</div>
                    <div className="panel-body">
                        组件ID：{this.id}
                    </div>
                    <div className="panel-footer">
                        <button className="btn btn-success" onClick={(e) => eventBus.emit("myEvent", this)}>触发事件</button>
                    </div>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        console.log("Child componentWillUnmount...");
        eventBus.addListener("myEvent");
    }
}

export default Child;