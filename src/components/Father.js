import React, { Component } from "react";
import Child from "./Child";

class Father extends Component {
    constructor() {
        super();
        console.log("Father constructor...");
        this.state = {
            childVisible: false
        }
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

    //一般情况下不要覆盖这个生命周期方法，如果覆盖了这个方法，什么时候个更新组件就交由你自己控制了
    // shouldComponentUpdate() {
    //     console.log("Father shouldComponentUpdate...");
    // }

    renderChild() {
        if (!this.state.childVisible) return null;
        return (
            <Child userId="damoqiongqiu"></Child>
        );
    }

    render() {
        console.log("Father render...");
        return (
            <div className="container-fluid">
                <div className="panel panel-primary">
                    <div className="panel-heading">Father组件</div>
                    <div className="panel-body">
                        {this.renderChild()}
                    </div>
                    <div className="panel-footer">
                        <button className="btn btn-danger" onClick={() => this.clickHandler()}>切换可见性</button>
                    </div>
                </div>
            </div >
        );
    }

    componentWillUnmount() {
        console.log("Father componentWillUnmount...");
    }

    clickHandler() {
        if (this.state && this.state.childVisible) {
            this.setState({
                childVisible: false
            });
        } else {
            this.setState({
                childVisible: true
            });
        }
    }
}

export default Father;