import React, { Component } from "react";

/**
 * 这个高阶组件的功能是给任意组件提供日志功能
 * @param {*} OriginComponent 
 */
function loggerWrapper(OriginComponent) {
    console.log("loggerWrapper...");
    return class extends Component {
        render() {
            //把接收到的参数全部传递给被包装的组件
            return <OriginComponent {...this.props}></OriginComponent>;
        }
    }
}

export default loggerWrapper;