const http = require('http');
const newModule = require("./NewModule");

const server = http.createServer(function(req, res) {
    const _newModule = new newModule.NewModule("Nelli");
    res.write(_newModule.getMessage());
    res.end();
})

server.listen(5000);
