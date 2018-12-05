import React, { Component } from "react";

/**
 * 共9个生命周期事件，分4类
 * 1、构造
 * 2、mount
 * 3、update
 * 4、unmount
 */
class TestLifecycle extends Component {
    constructor() {
        super();
        console.log("TestLifecycle constructor...");
    }

    componentWillMount() {
        console.log("TestLifecycle componentWillMount...");
    }

    componentDidMount() {
        console.log("TestLifecycle componentDidMount...");
    }

    componentWillReceiveProps() {
        console.log("TestLifecycle componentWillReceiveProps...");
    }

    componentWillUpdate() {
        console.log("TestLifecycle componentWillUpdate...");
    }

    componentDidUpdate() {
        console.log("TestLifecycle componentDidUpdate...");
    }

    shouldComponentUpdate() {
        console.log("TestLifecycle shouldComponentUpdate...");
    }

    render() {
        console.log("TestLifecycle render...");
        return (
            <div className="container-fluid">
                <div className="panel panel-primary">
                    <div className="panel-heading">TestLifecycle组件</div>
                    <div className="panel-body">
                        <div className="list-group">
                            <a href="#" className="list-group-item disabled">
                                Cras justo odio
                            </a>
                            <a href="#" className="list-group-item">Dapibus ac facilisis in</a>
                            <a href="#" className="list-group-item">Morbi leo risus</a>
                            <a href="#" className="list-group-item">Porta ac consectetur ac</a>
                            <a href="#" className="list-group-item">Vestibulum at eros</a>
                        </div>
                    </div>
                    <div className="panel-footer"></div>
                </div>
            </div>
        );
    }

    componentWillUnmount() {
        console.log("TestLifecycle componentWillUnmount...");
    }
}

export default TestLifecycle;