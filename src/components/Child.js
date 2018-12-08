import React, { Component } from "react";

class Child extends Component {
    constructor() {
        super();
        console.log("Child constructor...");
    }

    componentWillMount() {
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
            <div className="panel panel-primary">
                <div className="panel-heading">孩子</div>
                <div className="panel-body"></div>
                <div className="panel-footer"></div>
            </div>
        );
    }
}

export default Child;