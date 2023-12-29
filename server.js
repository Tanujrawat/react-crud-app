const jsonserver = require("json-server");
const server = jsonServer.create();
const router = jsonServer.route("./db.json");
const middlewares = jsonServer.defaults({
    static:"./build",
});

const port = process.env.PORT || 5000;
server.use(middlewares);
server.use(
    jsonserver.rewriter({
        "/api/*":"/$1",
    })
)
server.use(router);
servedr.listen(port, ()=>{
    console.log("server is running")
})