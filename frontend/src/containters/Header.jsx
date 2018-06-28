import React from 'react';
import './header.css';
import {connect} from 'react-redux'
import SignInContainer from './SignIn';
import {isParentOfTarget} from "../utils/delegate";
import {loginOut} from "../action/user";
import {ChangePasswordForm} from '../compontents/ChangePasswordForm'
import './header.css'
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show:false,
            showChangePassword:false,
            showUserPanel : false,
            changePasswordData : {
                password:'',
                newPassword : ''
            }
        }
    }
    componentDidMount(){
        document.body.addEventListener('click',this.closePanel);
        document.body.addEventListener('click',this.closeUserControlPanel);
    }
    componentWillUnmount(){
        document.body.removeEventListener('click',this.closePanel);
        document.body.removeEventListener('click',this.closeUserControlPanel);
    }
    handleButtonClick = ()=>{
        this.setState(()=>({show:true}));
    }
    closePanel = (event)=>{
        if(isParentOfTarget('div.signin-wrapper',event.target)){
            return ;
        }
        this.setState({
                show : false
        })
    }
    closeUserControlPanel =  (event)=>{
        if(isParentOfTarget('div.userpanel',event.target)){
            return ;
        }
        this.setState({
            showUserPanel:false,
            showChangePassword:false
        })
    }
    handlePanelClose = ()=>{
        this.setState({show:false,showUserPanel:false,showChangePassword:false})
    }
    handleUserPanelShow = ()=>{
        this.setState({showUserPanel:true})
    }
    handleLoginOut = ()=>{
        const {dispatch} = this.props;
        dispatch(loginOut());
        this.setState({showUserPanel:false})
    }
    handleShowChangePassword = ()=>{
        this.setState({
            showChangePassword : true,
            showUserPanel:false
        })
    }
    handleChangePasswordFormInput = (event)=>{
        const {name} = event.target.dataset;
        const {value} = event.target;
        switch (name){
            case 'password':
                this.setState((preState)=>{
                    return {
                            changePasswordData:{
                            ...preState.changePasswordData,
                            password:value
                        }
                    }
                });
                break;
            case 'newPassword':
                this.setState((preState)=>{
                    return {
                        changePasswordData:{
                            ...preState.changePasswordData,
                            newPassword:value
                        }
                    }
                })
                break;
        }
    }
    handleChangePasswordFormSubmit = async (event)=>{
        const {account} = this.props.user;
        event.preventDefault();
        try{
            const url = '/api/user';
            const data = {
                account,
                ...this.state.changePasswordData
            }
            const res = await fetch(url,{
                method : 'PUT',
                body : JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            });
            if(!res.status.toString().match(/^2/)){
                const resJson = await res.json();
                throw new Error(resJson.message);
            }
            alert('修改成功');
            this.handlePanelClose();
            this.setState({
                changePasswordData : {
                    password:'',
                    newPassword : ''
                }
            });
        }catch (e) {
            console.log(e);
        }
    }
    render(){
        const {user,dispatch} = this.props;
        const {show,showUserPanel,showChangePassword,changePasswordData} = this.state;
        return (
            <header className="header border border-4">
                {!user.account
                    ?
                    <div>
                        <button className="btn-default" onClick={this.handleButtonClick}>登录/注册</button>
                        {show ? <SignInContainer handlePanelClose={this.handlePanelClose} dispatch={dispatch} {...user}/>: ''}
                    </div>
                    :
                    <div className="border-4 userinfo padding-left-large" onClick={this.handleUserPanelShow}>
                        {user.account}
                    </div>
                }
                <div className='userpanel'>
                    {showUserPanel
                        ?
                        <ul className="border-5 " >
                            <li onClick={this.handleShowChangePassword}>修改密码</li>
                            <li onClick={this.handleLoginOut}>登出</li>
                        </ul>
                        :
                        ''}
                    {showChangePassword
                        ?
                        <ChangePasswordForm
                            {...changePasswordData}
                            handleFormInput={this.handleChangePasswordFormInput}
                            handleFormSubmit={this.handleChangePasswordFormSubmit}
                        />
                        : ''
                    }
                </div>

            </header>
        );
    }
}
function mapStateToProps(state){
    return {
        user : state.user
    }
}

export default connect(mapStateToProps)(Header)