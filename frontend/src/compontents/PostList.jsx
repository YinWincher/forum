import React from 'react';
import './postlist.css';
import {fetchDiscussion, getPostid, getPostMessage} from '../action/discussion'
import {Link} from 'react-router-dom'
const PostList = ({discussion,dispatch})=>{
    const {title,author,postid} = discussion;
    const handleLinkClick = (event)=>{
        const {postid} = event.currentTarget.dataset;
        dispatch(getPostid(postid))
        dispatch(fetchDiscussion('/api/discussion/'+postid))
        dispatch(getPostMessage(discussion));
    }
    return (
        <div className="border border-3 postlist-wrapper">
            <Link to={'/discussion/'+postid}>
            <div className='head' onClick={handleLinkClick} data-postid={postid}>
                <span className='title'>{title}</span>
                <span className='author'>{author}</span>
            </div>
            </Link>
        </div>
    );
}
export default PostList;