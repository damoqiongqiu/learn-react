import React, { Component } from 'react';

class GameDetail extends Component{
    gameName = "星际争霸";

    names = ['人族', '虫族', '神族'];

    userName = "大漠穷秋1111";

    getUserName() {
        return this.userName;
    }

    clickHandler(text) {
        alert(text);
    }

    render(){
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">面板标题</div>
                <div className="panel-body">
                    <p>游戏名称：{this.gameName}</p>
                    <p>玩家姓名：{this.getUserName()}</p>
                    <p>随机种族：{Math.ceil(Math.random() * 10) % 2 == 0 ? "人族" : "虫族"}</p>
                    <p>全部种族列表</p>
                    {
                    this.names.map(function (name, index) {
                        return <p key={index}>{index}-{name}!</p>;
                    })
                    }
                    <p ref="myText">这是被引用的元素</p>
                    <button className="btn btn-danger" onClick={(e) => { this.clickHandler(this.refs.myText.innerHTML); }}>测试ref</button>
                </div>
                <div className="panel-footer"></div>
            </div>
        );
    }
}

export default GameDetail;