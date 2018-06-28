const path = require('path');

const handler = (request,h)=>{
    console.log(path.join(__dirname,'../build/index.html'));
    return h.file(path.join(__dirname,'../build/index.html'));
}
const handle = {
    directory:{
        path:path.join(__dirname)
    }
}

module.exports = handler;