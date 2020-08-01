const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middleware = jsonServer.defaults();

const PORT = process.env.PORT || 3333;

server.use(middleware);
server.use(router);
server.listen(PORT, function() {
    console.log(`JSON Server is running on port ${this.address().port}!!!`)
});