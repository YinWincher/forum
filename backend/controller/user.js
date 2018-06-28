const Boom = require('boom');

const createUser = async function(request,h) {
        const db = request.mongo.db;
        try {
            console.log('12')
            const {account,password,question,answer} = request.payload;
            console.log(account,password,question,answer)
            const result = await db.collection('user').findOne({account});
            if(result){
                return Boom.forbidden('account has exists');
            }
            const user = {
                account,
                password,
                question,
                answer
            }
            await db.collection('user').insertOne(user);
            return h.response().code(201);
        }
        catch (err) {
            throw Boom.internal('Internal MongoDB error', err);
        }
    };

const validateUser = async function(request,h){
        const db = request.mongo.db;
        try {
            const {account,password} = request.payload;
            const result = await db.collection('user').findOne({account});
            if(!result){
                return Boom.notFound('account dot not exists');
            }
            if(result.password !== password){
                return Boom.methodNotAllowed('error password');
            }
            return h.response('success').code(200).type('application/json');
        }
        catch (err) {
            throw Boom.internal('Internal MongoDB error', err);
        }
    }

const getUserMessage = async function(request) {
        const db = request.mongo.db;
        try {
            let account = request.params.account;
            const result = await db.collection('user').findOne({'account':account});
            return result;
        }
        catch (err) {
            throw Boom.internal('Internal MongoDB error', err);
        }
}
const findPassword = async function(request,h){
    const db = request.mongo.db;

    try {
        const {account,question,answer,password} = request.payload;
        const result = await db.collection('user').findOne({account});
        if(!result){
            return Boom.notFound('account not exists');
        }
        if(result.question !== question){
            return Boom.methodNotAllowed('wrong question');
        }
        if(result.answer !== answer){
            return Boom.methodNotAllowed('wrong answer');
        }
        
        await db.collection('user').updateOne({account},{$set:{password:password}});
        return h.response().code(200);
    }
    catch (err) {
        throw Boom.internal('Internal MongoDB error', err);
    }
}
const changePassword = async function(request,h){
        const db = request.mongo.db;

        try {
            const {account,password,newPassword} = request.payload;
            const result = await db.collection('user').findOne({account});
            if(!result){
                return Boom.notFound('account not exists');
            }
            if(result.password === password){
                await db.collection('user').updateOne({account},{$set:{password:newPassword}});
                return h.response().code(200);
            }
            return Boom.methodNotAllowed('wrong password');
        }
        catch (err) {
            throw Boom.internal('Internal MongoDB error', err);
        }
    }

const user = {
    createUser,
    getUserMessage,
    changePassword,
    validateUser,
    findPassword
};

module.exports = user;