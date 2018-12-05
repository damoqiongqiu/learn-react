import React, { Component } from "react";

class Child extends Component {
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
        console.log("Child componentDidMount...");
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
                        <button className="btn btn-danger" onClick={this.props.clickHandler}>测试Props</button>
                    </div>
                    <div className="panel-footer"></div>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        console.log("Child componentWillUnmount...");
    }
}

export default Child;