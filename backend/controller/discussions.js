const Boom = require('boom')

const getDiscussion = async function(request) {
        const db = request.mongo.db;
        try {
            let {postid} = request.params;
            postid = Number.parseInt(postid);
            const hasDiscussion = await db.collection('discussion').findOne({postid});
            if(!hasDiscussion){
                return Boom.notFound(`postid:${postid} did not exist`);
            }
            const result = await db.collection('discussion').findOne({postid});
            return {
                data:result
            }
        }
        catch (err) {
            throw Boom.internal('Internal MongoDB error', err);
        }
    }

const createDiscussion = async function(request,h) {
        const db = request.mongo.db;
        try {
            let {postid} = request.params;
            let {author,content} = request.payload;
            postid = Number.parseInt(postid);
            const hasDiscussion = await db.collection('discussion').findOne({postid});
            if(!hasDiscussion){
                return Boom.notFound(`postid:${postid} did not exist`);
            }
            const {reply} = await db.collection('discussion').findOne({postid},{_id:0,reply:1});
            let idArr = reply.map(val=>{
                return val.replyid;
            })
            let maxReplyid = (idArr.length) ? Math.max(...idArr) : 0;
            const discussion = {
                replyid : Number.parseInt(maxReplyid)+1,
                content,
                author,
                dateline : new Date()
            }
            await db.collection('discussion').updateOne({postid},{$push: {reply:discussion}});
            return h.response().code(200);
        }
        catch (err) {
            throw Boom.internal('Internal MongoDB error', err);
        }
    }

const deleteDiscussion = async function(request,h) {
        const db = request.mongo.db;
        try {
            let {postid,replyid} = request.params;
            postid = Number.parseInt(postid);
            replyid = Number.parseInt(replyid);
            const hasDiscussion = await db.collection('discussion').findOne({postid});
            if(!hasDiscussion){
                return Boom.notFound(`postid:${postid} did not exist`);
            }
            await db.collection('discussion')
                .updateOne({postid},{$pull:{reply:{replyid}}});
                
            return h.response().code(200);
            
        }
        catch (err) {
            throw Boom.internal('Internal MongoDB error', err);
        }
    }

const discussions = {
    deleteDiscussion,
    createDiscussion,
    getDiscussion
}

module.exports = discussions;