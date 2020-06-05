import React, { Component } from 'react';

class UserList extends Component{
    render(){
        return(
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
        );
    }
}

export default UserList;