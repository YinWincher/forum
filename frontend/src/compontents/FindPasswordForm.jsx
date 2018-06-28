import React from 'react';

export const FindPasswordForm = (props)=>{
    const {handleFormSubmit,password,account,question,answer,handleFormInput} = props;
    return (
        <form onSubmit={handleFormSubmit}>
            <div className="form-group">
                <div className="form-group">
                    <label htmlFor="account">账号</label>
                    <input data-name="account" required={true} onChange={handleFormInput} type="text" name="account"  value={account}/>
                </div>
                <div className="form-group">
                    <label htmlFor="question">密保问题</label>
                    <input name="question" type="text" required={true} data-name="question" value={question} onChange={handleFormInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="answer">答案</label>
                    <input name="answer" type="text" required={true} value={answer} data-name="answer" onChange={handleFormInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">新的密码</label>
                    <input data-name="password" required={true} name="password" type="password" onChange={handleFormInput} value={password}/>
                </div>
                <button type="submit" className="btn btn-primary">更改密码</button>
            </div>
        </form>
    );
}