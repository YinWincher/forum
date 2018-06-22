import React from 'react';
import {SignInForm} from "../compontents/SignInForm";

export default class SignInContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            account : '',
            password : '',
            passwordAgain : '',
            answer : '',
            question : ''
        }
    }
    handleFormInput = (event)=>{
        const {name} = event.target.dataset;
        const val = event.target.value;
        switch (name){
            case 'account':
                this.setState(()=>({account:val}));
                break;
            case 'password':
                this.setState(()=>({password:val}));
                break;
            case 'passwordAgain':
                this.setState(()=>({passwordAgain:val}));
                break;
            case 'question':
                this.setState(()=>({question:val}));
                break;
            case 'answer':
                this.setState(()=>({answer:val}));
                break;
            default:
                break;
        }
    }
    handleFormSubmit = ()=>{
        fetch(url,{
            method : 'POST',
            body : JSON.stringify(data),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        }).then(res=>res.json())
    }
    render(){
        const {account,password,passwordAgain,question,answer} = this.state;
        return (
            <div>
                <SignInForm
                    question={question}
                    answer={answer}
                    handleFormInput={this.handleFormInput}
                    account={account}
                    password={password}
                    passwordAgain={passwordAgain}
                />
            </div>
        );
    }
}