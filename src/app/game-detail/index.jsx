import React, { useRef } from 'react';

function GameDetail(props) {
    const myRef = useRef("myText");//利用 useRef 来操作 DOM 元素
    const gameName = "星际争霸";
    const names = ['人族', '虫族', '神族'];
    const userName = "大漠穷秋1111";

    const getUserName = () => {
        return userName;
    }

    const clickHandler = (text) => {
        alert(text);
    }

    return (
        <div className="panel panel-primary">
            <div className="panel-heading">面板标题</div>
            <div className="panel-body">
                <p>游戏名称：{gameName}</p>
                <p>玩家姓名：{getUserName()}</p>
                <p>随机种族：{Math.ceil(Math.random() * 10) % 2 == 0 ? "人族" : "虫族"}</p>
                <p>全部种族列表</p>
                {
                    names.map(function (name, index) {
                        return <p key={index}>{index}-{name}!</p>;
                    })
                }
                <div>
                    <input
                        type="text"
                        ref={myRef}
                        name="userName"
                    ></input>
                </div>
                <button
                    className="btn btn-danger"
                    onClick={(e) => {
                        clickHandler(myRef.current.value);
                    }}
                >测试ref</button>
            </div>
            <div className="panel-footer"></div>
        </div>
    );
}

export default GameDetail;