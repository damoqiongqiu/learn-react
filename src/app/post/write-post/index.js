import React from "react";

function WritePost(props) {
    const handleSubmit = (e) => {
        //阻止浏览器默认的跳转行为
        e.preventDefault();

        //通过 e.target 获得表单实例
        const form = e.target;

        //FormData 是 HTML5 中新增的一个对象，可以方便的获取表单中的数据
        //使用 FormData 有一个要求，就是表单中的每个表单元素都要有 name 属性
        //https://developer.mozilla.org/en-US/docs/Web/API/FormData/FormData
        const formData = new FormData(form);

        //整理成 JSON 格式
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);

        //接下来就可以提交到服务器了，在下一节中我们会介绍如何使用 axios 发送请求。
    }

    return (
        <div className="row">
            <div className="col-md-12">
                <form noValidate onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">标题</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="请输入标题"
                            name="title"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">内容</label>
                        <textarea
                            className="form-control"
                            rows="10"
                            placeholder="请输入内容"
                            name="content"
                        ></textarea>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                defaultChecked={true}//注意 React 中 default*** 这种写法，与 HTML 标准不同。
                                name="isOriginal"
                                value={true}
                            />原创
                        </label>
                    </div>
                    <div className="form-group">
                        <label htmlFor="tag">标签</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="请输入标签"
                            name="tag"
                        />
                    </div>
                    <button type="submit" className="btn btn-success">提交</button>
                </form>
            </div>
        </div>
    );
}

export default WritePost;