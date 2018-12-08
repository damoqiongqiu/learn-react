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

    //一般情况下不要覆盖这个生命周期方法，如果覆盖了这个方法，什么时候个更新组件就交由你自己控制了
    // shouldComponentUpdate() {
    //     console.log("Father shouldComponentUpdate...");
    // }

    render() {
        console.log("Father render...");
        return (
            <div className="container-fluid">
                <div className="panel panel-primary">
                    <div className="panel-heading">Father组件</div>
                    <div className="panel-body">
                        <div className="col-md-3">
                            <div class="list-group">
                                <a href="#" class="list-group-item active">
                                    二级菜单
                                </a>
                                <a href="#" class="list-group-item">Dapibus ac facilisis in</a>
                                <a href="#" class="list-group-item">Morbi leo risus</a>
                                <a href="#" class="list-group-item">Porta ac consectetur ac</a>
                                <a href="#" class="list-group-item">Vestibulum at eros</a>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <Child></Child>
                        </div>
                    </div>
                    <div className="panel-footer">
                    </div>
                </div>
            </div >
        );
    }

    componentWillUnmount() {
        console.log("Father componentWillUnmount...");
    }
}

export default Father;