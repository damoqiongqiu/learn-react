import React, { useState } from "react";

/**
 * 表单校验案例
 */
function WritePost(props) {
    const [postDetail, setPostDetail] = useState({
        title: '',
        content: '',
        isOriginal: true,
        tag: '',
    });

    const [errors, setErrors] = useState({
        title: '',
        content: '',
        tag: '',
    });

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
    };

    // 表单校验函数
    const validateForm = () => {
        let valid = true;
        const newErrors = {
            title: '',
            content: '',
            tag: '',
        };

        // 校验标题长度是否在2到32个字符之间
        if (postDetail.title.trim().length < 2 || postDetail.title.trim().length > 32) {
            newErrors.title = '标题长度应在2到32个字符之间';
            valid = false;
        }

        // 校验内容长度是否在10到200个字符之间
        if (postDetail.content.trim().length < 10 || postDetail.content.trim().length > 200) {
            newErrors.content = '内容长度应在10到200个字符之间';
            valid = false;
        }

        // 校验标签长度是否在2到32个字符之间
        if (postDetail.tag.trim().length < 2 || postDetail.tag.trim().length > 32) {
            newErrors.tag = '标签长度应在2到32个字符之间';
            valid = false;
        }

        // 更新错误状态
        setErrors(newErrors);
        return valid;
    };

    // 表单输入变更处理函数
    const handleChange = (event) => {
        const { name, value, type, checked } = event.target;
        // 处理 checkbox 输入项
        const newValue = type === 'checkbox' ? checked : value;
        setPostDetail({
            ...postDetail,
            [name]: newValue,
        });
    };

    return (
        <div className="row">
            <div className="col-md-12">
                <form onSubmit={handleSubmit}>
                    <div className={`form-group ${errors.title ? "has-error" : ""}`} >
                        <label>标题：</label>
                        <input
                            type="text"
                            name="title"
                            value={postDetail.title}
                            onChange={handleChange}
                            className="form-control"
                        />
                        {errors.title && <span className="text-danger">{errors.title}</span>}
                    </div>

                    <div className={`form-group ${errors.content ? "has-error" : ""}`} >
                        <label>内容：</label>
                        <textarea
                            name="content"
                            rows="10"
                            value={postDetail.content}
                            onChange={handleChange}
                            className="form-control"
                        />
                        {errors.content && <span className="text-danger">{errors.content}</span>}
                    </div>

                    <div className="checkbox">
                        <label>
                            <input
                                type="checkbox"
                                name="isOriginal"
                                checked={postDetail.isOriginal}
                                onChange={handleChange}
                            />{' '}
                            原创
                        </label>
                    </div>

                    <div className={`form-group ${errors.tag ? "has-error" : ""}`} >
                        <label>标签：</label>
                        <input
                            type="text"
                            name="tag"
                            value={postDetail.tag}
                            onChange={handleChange}
                            className="form-control"
                        />
                        {errors.tag && <span className="text-danger">{errors.tag}</span>}
                    </div>

                    <button type="submit" className="btn btn-success" onClick={validateForm}>
                        提交
                    </button>
                </form>
            </div>
        </div>
    );
}

export default WritePost;