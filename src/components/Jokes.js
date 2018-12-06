import React, { Component } from "react";

/**
 * 段子
 */
class Jokes extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div class="list-group">
                <a href="#" class="list-group-item active">段子列表</a>
                <a href="#" class="list-group-item">Dapibus ac facilisis in</a>
                <a href="#" class="list-group-item">Morbi leo risus</a>
                <a href="#" class="list-group-item">Porta ac consectetur ac</a>
                <a href="#" class="list-group-item">Vestibulum at eros</a>
            </div>
        );
    }
}

export default Jokes;