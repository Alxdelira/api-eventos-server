const jsonServer = require('json-server')

const server = jsonServer.create()
// Uncomment to allow write operations
// const fs = require('fs')
// const path = require('path')
// const filePath = path.join('db.json')
// const data = fs.readFileSync(filePath, "utf-8");
// const db = JSON.parse(data);
// const router = jsonServer.router(db)

const router = jsonServer.router('db.json')

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))
server.use(router)
server.listen(3001, () => {
    console.log('JSON Server está Rodando!')
})

// Export the Server API
module.exports = server