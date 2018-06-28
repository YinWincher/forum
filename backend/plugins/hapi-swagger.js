const hapiSwagger = require('hapi-swagger');
const Pack = require('../package');
const swaggerOptions = {
    info: {
            title: 'Test API Documentation',
            version: Pack.version,
        },
};
const plugin = {
    plugin : hapiSwagger,
    options : swaggerOptions
}

module.exports = plugin;