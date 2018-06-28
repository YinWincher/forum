const post = require('../../controller/post');
const getPost = {
    method: 'GET',
    path: '/post/{id}',
    handler : post.getPost
    
};
const getPostList = {
    method: 'GET',
    path: '/post',
    handler : post.getPostList
    
};
const createPost = {
    method: 'POST',
    path: '/post/{id?}',
    handler : post.createPost
    
}
const deletePost = {
    method: 'DELETE',
    path: '/post/{postid}',
    handler : post.deletePost
}
const getPostLength = {
    method : 'GET',
    path:'/post/getpostlength',
    handler:post.getPostLength
}

const routes = [getPost,createPost,deletePost,getPostLength,getPostList];

module.exports = {
    routes
}