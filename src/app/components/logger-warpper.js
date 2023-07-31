import React, { Component } from "react";

/**
 * @see 
 * https://legacy.reactjs.org/docs/higher-order-components.html
 * 
 * 这个高阶组件的功能是给任意组件提供日志功能。
 * @param {*} OriginComponent 
 */
function LoggerWrapper(OriginComponent) {
    return class extends Component {
        componentDidUpdate(prevProps) {
            console.log('Current props: ', this.props);
            console.log('Previous props: ', prevProps);
        }

        render() {
            //把接收到的参数全部传递给被包装的组件
            return <OriginComponent {...this.props}></OriginComponent>;
        }
    }
}

export default LoggerWrapper;