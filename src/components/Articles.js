import React, { Component } from "react";

/**
 * 文章
 */
class Articles extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="jumbotron">
                <h1>这里是文章页面</h1>
                <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                <p><a className="btn btn-success btn-lg" href="#" role="button">查看详情</a></p>
            </div>
        );
    }
}

export default Articles;