import React from 'react';
import {fetchDiscussion,fetchSinglePost} from "../action/discussion";
import PublishArea from '../compontents/PublishArea';
import {connect} from 'react-redux'
import {errorHandle} from "../action/user";
import './discussionpage.css'
class DiscussionPage extends React.Component{

    componentDidMount(){
        const {dispatch,location} = this.props;
        const postid = location.pathname.split('/')[2];
        dispatch(fetchDiscussion('/api/discussion/'+postid));
        dispatch(fetchSinglePost('/api/post/'+postid));
    }
    handlePublishSubmit = async (content)=>{
        const {user,dispatch,location} = this.props;
        const postid = location.pathname.split('/')[2];
        if(!user.account){
            alert('请先登录');
            return ;
        }
        try{
            const data = {
                author : user.account,
                content
            }
            const url = '/api/discussion/'+postid;
            const res = await fetch(url,{
                method : 'POST',
                body : JSON.stringify(data),
                headers: new Headers({
                    'Content-Type': 'application/json'
                })
            });
            if(!res.status.toString().match(/^2/)){
                const resJson = await res.json();
                errorHandle[resJson.message]();
                throw new Error(resJson.message);
            }
            alert('回复成功');
            dispatch(fetchDiscussion('/api/discussion/'+postid));
        }catch (e) {
            console.log(e);
        }
    }
    handleReplyDelete = async (event)=>{
        const {dispatch,location} = this.props;
        const postid = location.pathname.split('/')[2];
        const {replyid} = event.target.dataset;
        try{
            const url = '/api/discussion/'+postid+'/'+replyid;
            const res = await fetch(url,{
                method : 'DELETE'
            });
            if(!res.status.toString().match(/^2/)){
                const resJson = await res.json();
                errorHandle[resJson.message]();
                throw new Error(resJson.message);
            }
            alert('删除成功');
            dispatch(fetchDiscussion('/api/discussion/'+postid));
        }catch (e) {
            console.log(e);
        }
    }

    handlePostDelete = async (event)=>{
        const {dispatch,location,history} = this.props;
        const postid = location.pathname.split('/')[2];
        try{
            const url = '/api/post/'+postid;
            const res = await fetch(url,{
                method : 'DELETE'
            });
            if(!res.status.toString().match(/^2/)){
                const resJson = await res.json();
                errorHandle[resJson.message]();
                throw new Error(resJson.message);
            }
            alert('删除成功');
            dispatch(fetchDiscussion('/api/post/'+postid));
            history.push('/')
        }catch (e) {
            console.log(e);
        }
    }
    render(){
        const {discussion,user} = this.props;
        const {title,author,content} = discussion;
        let reply = (Array.isArray(discussion.reply))? discussion.reply :[];
        const list = reply.map(val=>{
            const date = new Date(val.dateline).toLocaleTimeString();
            const deleteButton =(
                user.account === val.author && user.account
                    ?
                <span className='delete' data-replyid={val.replyid} onClick={this.handleReplyDelete}>
                    delete
                </span>
                : ''
            );
            return (
                <div key={val.replyid} className="reply border-2">
                    <div className="content">{val.content}</div>
                    <div className="message">
                        <div>{date}</div>
                        <div className="author">{val.author}</div>
                        {deleteButton}
                    </div>
                </div>
            )
        })
        return (
            <div className="discussionpage-wrapper">
                <header className='border-6'>
                    <div className="title">{title}</div>
                    <div className="content">{content}</div>
                    <div className="author">{author}</div>
                    {user.account=== author && user.account
                        ?
                        <div className="delete" onClick={this.handlePostDelete}>delete</div>
                        :''
                    }
                    </header>
                {list}
                <PublishArea
                    onSubmit={this.handlePublishSubmit}
                    showTitle={false}
                    head={'回复'}
                />
            </div>

        )
    }
}
function mapStateToProps(state){
    return {
        discussion : state.discussion,
        feed : state.feed,
        user:state.user
    }
}

export default connect(mapStateToProps)(DiscussionPage);
