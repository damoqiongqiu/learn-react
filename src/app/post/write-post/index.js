import React, { useState } from "react";
import Ajv from 'ajv';
import ajvErrors from 'ajv-errors';

/**
 * ajv.js 表单校验案例
 */
function WritePost(props) {
    const [postDetail, setPostDetail] = useState({
        title: '',
        content: '',
        isOriginal: true,
        tag: '',
    });
    // 表单输入项数据规格定义
    const schema = {
        "type": "object",
        "properties": {
            "title": {
                "type": "string",
                "minLength": 1,
                "maxLength": 32,
                "errorMessage": "标题长度在 1 到 32 个字符之间。"
            },
            "content": {
                "type": "string",
                "minLength": 10,
                "maxLength": 200,
                "errorMessage": "内容长度在 10 到 200 个字符之间。"
            },
            "isOriginal": {
                "type": "boolean"
            },
            "tag": {
                "tagValidator": true,
                "errorMessage": "标签长度在 2 到 12 个字符之间。",
            }
        },
        "required": ["title", "content"]
    }
    const [errors, setErrors] = useState({});
    const ajv = new Ajv({ allErrors: true });
    // 添加 ajv-errors 插件
    ajvErrors(ajv);
    //tag 字段的校验规则比较复杂：当用户输入了 tag 字段时，才进行校验；如果用户没有输入 tag 字段的内容，请不要强制校验，因为 tag 不是必填字段。
    //这里需要自定义一个校验函数
    ajv.addKeyword('tagValidator', {
        validate: function (schema, data) {
            if (data.trim() === '') {
                return true;
            }
            let temp = data.trim();
            if (temp.length >= 2 && temp.length <= 12) {
                return true;
            }
            return false;
        },
        errors: false
    });
    const validate = ajv.compile(schema);

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

    const handleSubmit = (e) => {
        //阻止浏览器默认的跳转行为
        e.preventDefault();

        const isValid = validate(postDetail);
        setErrors({});

        if (!isValid) {
            const fieldErrors = {};
            validate?.errors.forEach((error) => {
                const field = error.instancePath.substring(1);
                fieldErrors[field] = error.message;
            });
            setErrors(fieldErrors);
            console.log(fieldErrors);
            return;
        }

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

                    <button type="submit" className="btn btn-success">
                        提交
                    </button>
                </form>
            </div>
        </div>
    );
}

export default WritePost;