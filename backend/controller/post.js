const Boom = require('boom');

const getPost = async function(request) {
    const db = request.mongo.db;
    try {
        console.log(request.query);
        const {id} = request.params;
        const postid = Number.parseInt(id);
        const result = await db.collection('post').findOne({'postid':postid});
        if(!result){
            return Boom.notFound('not post');
        }
        return {
            data:result
        }
    }
    catch (err) {
        throw Boom.internal('Internal MongoDB error', err);
    }
}
const getPostList = async function(request,h) {
    const db = request.mongo.db;
    try {
        let {start=0,limit=10} = request.query;
        start = Number.parseInt(start);
        limit = Number.parseInt(limit)
        const result = await db.collection('post').find().sort({dateline:-1}).limit(limit).skip(start).toArray();
        if(!result){
            return Boom.notFound('not post');
        }
        return {
            data:result
        }
    }
    catch (err) {
        throw Boom.internal('Internal MongoDB error', err);
    }
}
const getPostLength = async function(request,h) {
    const db = request.mongo.db;
    try {
        const result = await db.collection('post').count();
        if(!result){
            return Boom.notFound('not post');
        }
        const res = {
            data : result
        }
        return res;
    }
    catch (err) {
        throw Boom.internal('Internal MongoDB error', err);
    }
}

    
const createPost = async function(request,h) {
        const db = request.mongo.db;
        try {
            const {title,author,content} = request.payload;
            const result = await db.collection('post').find().sort({postid:-1}).limit(1).toArray();
            const postid = (result.length)  ? result[0].postid : 0;
            const post = {
                postid : postid+1,
                title,
                author,
                content,
                dateline:new Date()
            }
            const discussion = {
                postid : postid+1,
                author,
                reply:[]
            }
            await db.collection('post').insert(post);
            //同时建立discussion中的document
            await db.collection('discussion').insertOne(discussion);

            const response = h.response().code(201);
            return response;
        }
        catch (err) {
            throw Boom.internal('Internal MongoDB error', err);
        }
    }

const deletePost = async function(request,h) {
        const db = request.mongo.db;
        try {
            const {postid} = request.params;
            const id = Number.parseInt(postid);
            const hasPost = await db.collection('post').findOne({'postid':id});
            if(!hasPost){
                return Boom.notFound(`postid:${postid} did not exist`);
            }
            await db.collection('post').deleteOne({'postid':id});
            await db.collection('discussion').deleteOne({postid:id})
            return h.response().code(200);
        }
        catch (err) {
            throw Boom.internal('Internal MongoDB error', err);
        }
    }

const post = {
    getPost,
    deletePost,
    createPost,
    getPostLength,
    getPostList
}

module.exports = post;