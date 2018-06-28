const indexHandler = require('../controller/main');
const api = require('./api/index').routes;

const index = {
    method : 'GET',
    path:'/{id*}',
    handler : indexHandler
}

module.exports = {
    routes : [...api,index]
}