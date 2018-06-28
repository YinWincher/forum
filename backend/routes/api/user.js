const user = require('../../controller/user');

const createUser = {
    method: 'POST',
    path: '/user/{account?}',
    handler : user.createUser
    
};
const validateUser = {
    method : 'POST',
    path:'/user/validate',
    handler : user.validateUser
    
}
const getUserMessage = {
    method: 'GET',
    path: '/user/{account}',
    handler : user.getUserMessage
    
};
const changePassword = {
    method : 'PUT',
    path : '/user/{id?}',
    handler : user.changePassword
}
const findPassword = {
    method:'POST',
    path : '/user/findpassword',
    handler : user.findPassword
}
const routes = [createUser,getUserMessage,changePassword,validateUser,findPassword];

module.exports = {
    routes
};