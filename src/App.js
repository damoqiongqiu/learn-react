import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import './App.css';

/**
 * JSX 的作用与其它框架中的模板表达式比较类似，必须掌握以下技术细节：
 * 1、引入外部CSS，在HTML标签中使用样式
 * 2、获取动态值
 * 3、标签模板里面支持函数调用
 * 4、标签内部支持基本表达式
 * 5、JS代码与HTML代码混写
 * 6、ref（真实项目中很少用）
 * 7、事件写法
 */

class App extends Component {

  gameName = "星际争霸";

  names = ['人族', '虫族', '神族'];

  userName = "大漠穷秋1111";

  getUserName() {
    return this.userName;
  }

  clickHandler(text) {
    alert(text);
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="panel panel-primary">
          <div className="panel-heading">面板标题</div>
          <div className="panel-body">
            <div className="list-group">
              <a href="#" className="list-group-item disabled">
                Cras justo odio
              </a>
              <a href="#" className="list-group-item">Dapibus ac facilisis in</a>
              <a href="#" className="list-group-item">Morbi leo risus</a>
              <a href="#" className="list-group-item">Porta ac consectetur ac</a>
              <a href="#" className="list-group-item">Vestibulum at eros</a>
            </div>
          </div>
          <div className="panel-footer"></div>
        </div>

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
      </div>
    );
  }
}

export default App;
