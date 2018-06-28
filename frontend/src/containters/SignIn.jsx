import React from 'react';
import {SignInForm} from "../compontents/SignInForm";
import './SignIn.css';
import {errorHandle} from "../action/user";
import {fetchCreateNewUser, fetchLoginIn} from '../action/user'
import {LoginInForm} from '../compontents/LoginInForm'
export default class SignInContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            signInData : {
                account : '',
                password : '',
                passwordAgain : '',
                answer : '',
                question : ''
            },
            loginInData:{
                account:'',
                password:''
            },
            findPasswordData:{
                account : '',
                password : '',
                answer : '',
                question : ''
            },
            showSignIn : false,
            showFindPassword : false
        }
    }
    handleFindPasswordFormInput = (event)=>{
        const {name} = event.target.dataset;
        const val = event.target.value;
        switch (name){
            case 'account':
                this.setState((preState)=>{
                    return {
                        findPasswordData:{
                            ...preState.findPasswordData,
                            account:val
                        }
                    }
                });
                break;
            case 'password':
                this.setState((preState)=>{
                    return {
                        findPasswordData:{
                            ...preState.findPasswordData,
                            password:val
                        }
                    }
                });
                break;
            case 'question':
                this.setState((preState)=>{
                    return {
                        findPasswordData:{
                            ...preState.findPasswordData,
                            question:val
                        }
                    }
                });
                break;
            case 'answer':
                this.setState((preState)=>{
                    return {
                        findPasswordData:{
                            ...preState.findPasswordData,
                            answer:val
                        }
                    }
                });
                break;
            default:
                break;
        }
    }
    handleLoginInFormInput = (event)=> {
        const {name} = event.target.dataset;
        const val = event.target.value;
        switch (name) {
            case 'account':
                this.setState((preState) => {
                    return {
                        loginInData: {
                            ...preState.loginInData,
                            account: val
                        }
                    }
                });
                break;
            case 'password':
                this.setState((preState) => {
                    return {
                        loginInData: {
                            ...preState.loginInData,
                            password: val
                        }
                    }
                });
                break;
            default:
                return;
        }
    }
    handleSignInFormInput = (event)=>{
        const {name} = event.target.dataset;
        const val = event.target.value;
        switch (name){
            case 'account':
                this.setState((preState)=>{
                    return {
                        signInData:{
                            ...preState.signInData,
                            account:val
                        }
                    }
                });
                break;
            case 'password':
                this.setState((preState)=>{
                    return {
                        signInData:{
                            ...preState.signInData,
                            password:val
                        }
                    }
                });
                break;
            case 'passwordAgain':
                this.setState((preState)=>{
                    return {
                        signInData:{
                            ...preState.signInData,
                            passwordAgain:val
                        }
                    }
                });
                break;
            case 'question':
                this.setState((preState)=>{
                    return {
                        signInData:{
                            ...preState.signInData,
                            question:val
                        }
                    }
                });
                break;
            case 'answer':
                this.setState((preState)=>{
                    return {
                        signInData:{
                            ...preState.signInData,
                            answer:val
                        }
                    }
                });
                break;
            default:
                break;
        }
    }
    handleLoginInFormSubmit = (e)=>{
        e.preventDefault();
        const {dispatch}  = this.props;
        dispatch(fetchLoginIn(this.state.loginInData));

    }
    handleFindPasswordFormSubmit = async (e)=>{
        const {handlePanelClose} = this.props;
        e.preventDefault();
        try{
            const url = '/api/user/findpassword';
            const res = await fetch(url,{
                method : 'POST',
                body : JSON.stringify(this.state.findPasswordData),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            });
            if(!res.status.toString().match(/^2/)){
                const resJson = await res.json();
                errorHandle[resJson.message]();
                throw new Error(resJson.message);
            }
            alert('修改成功');
            handlePanelClose();
        }catch (e) {
            console.log(e);
        }

    }
    handleSignInFormSubmit = (e)=>{
        e.preventDefault();
        const {password,passwordAgain} = this.state.signInData;
        const {dispatch}  = this.props;
        if(password !== passwordAgain){
            alert('两次密码不一致')
            return ;
        }
        dispatch(fetchCreateNewUser(this.state.signInData));
    }
    handleButtonClick = ()=>{
        const {showSignIn} = this.state;
        if(!showSignIn){
            this.setState((preState)=>{
                return {
                    showSignIn : true
                }
            })
        }
    }
    handleShowFindPassword = ()=>{
        const {showFindPassword} = this.state;
        if(!showFindPassword){
            this.setState((preState)=>{
                return {
                    showFindPassword : true
                }
            })
        }
    }
    render(){
        const {signInData,showSignIn,loginInData,showFindPassword,findPasswordData} = this.state;
        return (
            <div className='signin-wrapper border-5'>
                {showSignIn
                    ?
                    <SignInForm
                        {...signInData}
                        handleFormSubmit={this.handleSignInFormSubmit}
                        handleFormInput={this.handleSignInFormInput}
                    />
                    :
                    <LoginInForm
                        {...loginInData}
                        showFindPassword={showFindPassword}
                        handleFindPasswordFormInput={this.handleFindPasswordFormInput}
                        handleFindPasswordFormSubmit={this.handleFindPasswordFormSubmit}
                        findPasswordData={findPasswordData}
                        handleShowFindPassword={this.handleShowFindPassword}
                        handleFormInput={this.handleLoginInFormInput}
                        handleFormSubmit={this.handleLoginInFormSubmit}
                    />
                }
                {!showSignIn&&!showFindPassword
                    ? <button onClick={this.handleButtonClick} className="btn-small">注册</button>
                    : ''
                }
            </div>
        );
    }
}



