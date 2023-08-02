import React from "react";

/**
 * 受控表单案例
 * “受控”的含义是：表单中的输入项数据完全交给 React 的 state 机制来管理。
 * @param {*} props 
 * @returns 
 */
function WritePost(props) {
    //受控表单必须提供初始值，否则 React 会报警告，因为 undefined 会导致 React 无法确定组件到底是受控还是非受控组件。
    //@see https://react.dev/reference/react-dom/components/input
    const [postDetail, setPostDetail] = React.useState({
        title: '',
        content: '',
        isOriginal: true,
        tag: ''
    });

    //React 要求受控表单必须提供 onChange 事件处理函数，如果不提供，React 会把表单设置为只读状态。
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setPostDetail({
            ...postDetail,
            [name]: value
        });
    }

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
                            value={postDetail.title}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="content">内容</label>
                        <textarea
                            className="form-control"
                            rows="10"
                            placeholder="请输入内容"
                            name="content"
                            value={postDetail.content}
                            onChange={handleChange}
                        ></textarea>
                    </div>
                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                defaultChecked={true}//注意 React 中 default*** 这种写法，与 HTML 标准不同。
                                name="isOriginal"
                                value={postDetail.isOriginal}
                                onChange={handleChange}
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
                            value={postDetail.tag}
                            onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-success">提交</button>
                </form>
            </div>
        </div>
    );
}

export default WritePost;