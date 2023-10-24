const jsonServer = require('json-server');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

// Rota personalizada para 'eventos'
server.use(jsonServer.rewriter({
    '/api/eventos/*': '/$1',
}));

server.use(router);

server.listen(3001, () => {
    console.log('JSON Server is running');
});
