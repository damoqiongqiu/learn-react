import React from 'react';
import { Outlet } from 'react-router-dom';
import ManageMenu from '../manage-menu';

function ManageMain() {
    return (
        <div className="row">
            <div className="col-md-9">
                <Outlet></Outlet>
            </div>
            <div className="col-md-3">
                <ManageMenu></ManageMenu>
            </div>
        </div>
    );
}

export default ManageMain;
