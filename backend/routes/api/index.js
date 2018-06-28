const user = require('./user').routes;
const post = require('./post').routes;
const discussions = require('./discussions').routes;
const routes = [...user,...post,...discussions];

routes.forEach(val=>{
    val.path = '/api'+val.path;
});

module.exports = {
    routes
}