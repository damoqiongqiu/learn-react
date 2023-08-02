import React, { useEffect, useState } from "react";

function WritePost(props) {
    return (
        <div className="row">
            <div className="col-md-12">
                <form role="form" noValidate>
                    <div className="form-group">
                        <label htmlFor="title">标题</label>
                        <input type="text" className="form-control" placeholder="请输入标题" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">内容</label>
                        <textarea className="form-control" rows="10"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tag">标签</label>
                        <input type="text" className="form-control" placeholder="请输入标签" />
                    </div>
                    <button type="submit" className="btn btn-primary">提交</button>
                </form>
            </div>
        </div>
    );
}

export default WritePost;