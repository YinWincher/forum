const hapiMongodb = require('hapi-mongodb');

const dbOpts = {
    url: 'mongodb://localhost:27017/forum',
    settings: {
        poolSize: 10
    },
    decorate: true
};
const plugin = {
    plugin: hapiMongodb,
    options: dbOpts
}
module.exports = plugin;