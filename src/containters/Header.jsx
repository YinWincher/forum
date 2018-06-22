import React from 'react';
// import {WiredButton} from 'wired-elements';
import 'wired-elements';
import './header.css';
export default class Header extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show:false
        }
    }
    handleButtonClick = ()=>{
        this.setState(()=>({show:true}));
    }

    render(){
        return (
            <header className="header">
                <wired-button class="button" onClick={this.handleButtonClick}>Sign in/Login up</wired-button>
            </header>
        );
    }
}