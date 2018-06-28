import React from 'react';
import './PublishArea.css'
export default class PublishArea extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            title : '',
            content : ''
        }
    }
    handleFormSubmit = (event)=>{
        event.preventDefault();
        const {showTitle,onSubmit}= this.props;
        const {title,content} = this.state;
        const shouldFormSubmit = (showTitle) ? ((title&&content)) : (content);
        if(!shouldFormSubmit){
            return ;
        }
        if(onSubmit){
            onSubmit(content,title);
            this.setState((preState)=>({
                title:'',
                content:''
            }))
        }

    }
    handleInputChange = (event)=>{
        const {type} = event.target.dataset;
        const {value} = event.target;
        switch (type){
            case 'input':
                this.setState(()=>({title:value}));
                break;
            case 'textarea':
                this.setState(()=>({content:value}));
                break;
            default:
                return;
        }
    }
    render(){
        const {showTitle,head}= this.props;
        const {title,content} = this.state;
        return (
            <form className="border-3 publisharea-wrapper" onSubmit={this.handleFormSubmit}>
                <div className='head'>
                    {head}
                </div>
                {showTitle
                    ?
                    <div className="form-group">
                        <input
                            onChange={this.handleInputChange}
                            data-type="input"
                            className="input-block"
                            type="text"
                            value={title}
                            name="title"
                            placeholder="请输入标题" />
                    </div>
                    : ''
                }
                <div className="form-group">
                    <textarea
                        onChange={this.handleInputChange}
                        data-type="textarea"
                        className="no-resize"
                        value={content}
                        placeholder="请输入内容"
                    ></textarea>
                </div>
                <div className="form-group">
                    <button
                        onSubmit={this.handleFormSubmit}
                        className="btn-small"
                        type="submit"
                    >提交</button>
                </div>
            </form>
        );
    }
}