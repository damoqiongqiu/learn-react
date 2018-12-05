import React, { Component } from 'react';
import loggerWrapper from './logger-warpper';

class MyPanel extends Component {
    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">MyPanel</div>
                <div className="panel-body">
                </div>
                <div className="panel-footer"></div>
            </div>
        );
    }
}

//注意这里：包装之后再导出
export default loggerWrapper(MyPanel);
