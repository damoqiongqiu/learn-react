import React, { Component } from "react";
import Child from "./Child";

class Father extends Component {
    constructor() {
        super();
        console.log("father constructor...");
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
            <div className="panel panel-primary">
                <div className="panel-heading">父亲</div>
                <div className="panel-body">
                    <Child></Child>
                </div>
                <div className="panel-footer"></div>
            </div>
        );
    }
}

export default Father;