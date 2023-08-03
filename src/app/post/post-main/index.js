import React from 'react';
import HotPost from '../hot-post';
import { Outlet } from 'react-router-dom';

function PostMain() {
    return (
        <div className="row">
            <div className="col-md-9">
                <Outlet></Outlet>
            </div>
            <div className="col-md-3">
                <HotPost></HotPost>
            </div>
        </div>
    );
}

export default PostMain;
