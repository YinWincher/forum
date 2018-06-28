'use strict';
const Hapi = require('hapi');
const {plugins} = require('./plugins/index');
const {routes} = require('./routes/index');
const path = require('path');
const server = Hapi.server({
    port: 3000,
    host: 'localhost'
});




const init = async () => {
    await server.register(plugins);
    await server.start();

    routes.forEach(val=>{
        server.route(val);
    })
    server.route({
        method:"GET",
        path:'/static/{a*}',
       
        handler: {
            directory: { 
              path: '../build/static'
            }
          }
    })
    console.log(`Server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();