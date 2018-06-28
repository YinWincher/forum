const hapiMongodb = require('./hapi-mongodb');
const inert = require('./inert');
// const hapiSwagger = require('./hapi-swagger');
// const vision = require('./vision');
// const plugins = [hapiMongodb,inert,vision,hapiSwagger];
const plugins = [hapiMongodb,inert];
module.exports = {
    plugins
}