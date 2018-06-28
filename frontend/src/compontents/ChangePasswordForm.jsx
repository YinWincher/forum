import React from 'react';
import './ChangePasswordForm.css'

export const ChangePasswordForm = ({password,newPassword,handleFormInput,handleFormSubmit})=>{
    return (
        <form className="border-3 changepasswordform-wrapper" onSubmit={handleFormSubmit}>
            <div className="form-group">
                <label htmlFor="password">密码</label>
                <input onChange={handleFormInput}
                       data-name="password"
                       required={true} name="password"
                       type="password"
                       onChange={handleFormInput} value={password}/>
            </div>
            <div className="form-group">
                <label htmlFor="passwordAgain">新的密码</label>
                <input name="passwordAgain"
                       required={true} data-name="newPassword" type="password"
                       value={newPassword} onChange={handleFormInput}/>
            </div>
            <button type="submit" className="btn btn-primary">更改</button>
        </form>
    )
}