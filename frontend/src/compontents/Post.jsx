import React from 'react';
import PostList from './PostList';
export const Post = (props)=>{

        const {discussions,dispatch,account} = props;
        const list = discussions.map(val=>{
            return (
                <PostList
                    account={account}
                    dispatch={dispatch}
                    key={val.postid}
                    discussion = {val}
                />
            );
        })
        return (
            <div >
                {list}
            </div>
        );
}