import React from 'react'
export const SignInForm = (props)=>{
    const {account,password,passwordAgain,question,answer,handleFormInput,handleFormSubmit} = props;
    return (
        <div className="signinform-wrapper">
            <wired-card>
            <form onSubmit={handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="account">账号</label>
                    <input data-name="account" required={true} onChange={handleFormInput} type="text" name="account"  value={account}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">密码</label>
                    <input data-name="password" required={true} name="password" type="password" onChange={handleFormInput} value={password}/>
                </div>
                <div className="form-group">
                    <label htmlFor="passwordAgain">再次输入密码</label>
                    <input name="passwordAgain" required={true} data-name="passwordAgain" type="password" value={passwordAgain} onChange={handleFormInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="question">密保问题</label>
                    <input name="question" type="text" required={true} data-name="question" value={question} onChange={handleFormInput}/>
                </div>
                <div className="form-group">
                    <label htmlFor="answer">答案</label>
                    <input name="answer" type="text" required={true} value={answer} data-name="answer" onChange={handleFormInput}/>
                </div>
                <button type="submit" className="btn btn-primary">注册</button>
            </form>
            </wired-card>
        </div>
    );
}