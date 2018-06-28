import React from 'react'
import {FindPasswordForm} from './FindPasswordForm'
export const LoginInForm = (props)=>{
    const {account,password,handleFormInput,handleFormSubmit,
        showFindPassword,handleShowFindPassword,
        findPasswordData,handleFindPasswordFormInput,handleFindPasswordFormSubmit} = props;
    return (
        <div className="logininform-wrapper">
            {!showFindPassword
                ?
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="account">账号</label>
                        <input data-name="account" required={true} onChange={handleFormInput} type="text" name="account"  value={account}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">密码</label>
                        <input data-name="password" required={true} name="password" type="password" onChange={handleFormInput} value={password}/>
                    </div>
                    <p onClick={handleShowFindPassword}>忘记密码？</p>
                    <button type="submit" className="btn btn-primary">登录</button>
                </form>
                :
                <FindPasswordForm
                    {...findPasswordData}
                    handleFormInput={handleFindPasswordFormInput}
                    handleFormSubmit={handleFindPasswordFormSubmit}
                />
            }

        </div>
    );
}