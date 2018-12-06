import React, { Component } from "react";
import { BrowserRouter as Router, Route, NavLink, Switch } from "react-router-dom";
import JokeItem from "./JokeItem";

/**
 * 段子
 */
class Jokes extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-3">
                    <div className="list-group">
                        <a href="#" className="list-group-item active">二级导航</a>
                        <NavLink to={`/jokes/joke-item/1`} className="list-group-item">段子1</NavLink>
                        <NavLink to={`/jokes/joke-item/2`} className="list-group-item">段子2</NavLink>
                        <NavLink to={`/jokes/joke-item/3`} className="list-group-item">段子3</NavLink>
                    </div>
                </div>
                <div className="col-md-9">
                    <Route path={`/jokes/joke-item/:jokeId`} component={JokeItem} />
                </div>
            </div>
        );
    }
}

export default Jokes;