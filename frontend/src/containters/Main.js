import React from 'react';
import {connect} from 'react-redux';
import PublishArea from '../compontents/PublishArea.jsx'
import Pagination from '../compontents/Pagination';
import {Post} from '../compontents/Post';
import {changePostPage, fetchFeedList, fetchFeedListLen} from "../action/feed";
import {errorHandle} from "../action/user";
class Main extends React.Component{
    componentDidMount(){
        const {dispatch} = this.props;
        dispatch(fetchFeedListLen('/api/post/getpostlength'));
        dispatch(fetchFeedList(`/api/post?limit=10&start=0`));
    }
    handlePaginationChange = (page,pageSize)=>{
        const {dispatch} = this.props;
        dispatch(changePostPage(page));
        dispatch(fetchFeedList(`/api/post?limit=${pageSize}&start=${page-1}`))
    }
    handlePublishSubmit = async (content,title)=>{
        const {user,dispatch} = this.props;
        if(!user.account){
            alert('请先登录');
            return ;
        }
        try{
            const data = {
                author : user.account,
                content,
                title
            }
            const url = '/api/post';
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
            alert('发表成功');
            dispatch(fetchFeedList('/api/post?limit=10&start=0'));
            dispatch(fetchFeedListLen('/api/post/getpostlength'));
            dispatch(changePostPage(1));
        }catch (e) {
            console.log(e);
        }

    }
    render(){
        const {dispatch,feed,user} = this.props;
        return (
            <main className="main-wrapper ">
                <div className="post border border-5">
                    <Post
                        {...feed}
                        {...user}
                        dispatch={dispatch}
                    />
                    <Pagination
                        onChange={this.handlePaginationChange}
                        current={feed.nowPage}
                        total={feed.postCount}
                        dispatch={dispatch}
                        pageSize={5}
                        buttonSize={4}
                    />
                    <PublishArea
                        onSubmit={this.handlePublishSubmit}
                        showTitle={true}
                        head={'发布帖子'}
                    />
                </div>
            </main>
        );
    }
}

function mapStateToProp(state){
    return {
        feed : state.feed,
        user : state.user
    }
}

export default connect(mapStateToProp)(Main);