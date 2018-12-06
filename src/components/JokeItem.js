import React, { Component } from "react";

/**
 * 段子实例详情
 */
class JokeItem extends Component {
    constructor() {
        super();
    }

    render() {
        const { match } = this.props;
        console.log(match.path);
        console.log(match.url);
        console.log(match.params);//获取到的参数
        return (
            <div className="well well-lg">
                女王怀孕了，谁干的？
            </div>
        );
    }
}

export default JokeItem;