const discussions = require('../../controller/discussions');

const getDiscussion = {
    method: 'GET',
    path: '/discussion/{postid}',
    handler : discussions.getDiscussion
    
}
const createDiscussion = {
    method: 'POST',
    path: '/discussion/{postid}',
    handler : discussions.createDiscussion
    
}
const deleteDiscussion = {
    method: 'DELETE',
    path: '/discussion/{postid}/{replyid}',
    handler : discussions.deleteDiscussion
}

const routes = [getDiscussion,deleteDiscussion,createDiscussion];

module.exports = {
    routes
}