const { createServer } = require("http");
const { port } = require("./config.json");
const { readFile } = require("fs/promises");
const { resolve } = require("path");

createServer(async (req, res) => {
    if(req.method === "GET") {
        switch(req.url) {
            case "/":
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(await readFile(resolve("public/index.html")));

                break;
            case "/css/main.css":
                res.writeHead(200, { "Content-Type": "text/css" });
                res.end(await readFile(resolve("public/css/main.css")));

                break;
            case "/css/normalize.css":
                res.writeHead(200, { "Content-Type": "text/css" });
                res.end(await readFile(resolve("public/css/normalize.css")));

                break;
            case "/img/logo.png":
                res.writeHead(200, { "Content-Type": "image/png" });
                res.end(await readFile(resolve("public/img/logo.png")));

                break;
            case "/img/instagram.png":
                res.writeHead(200, { "Content-Type": "image/png" });
                res.end(await readFile(resolve("public/img/instagram.png")));

                break;
            case "/img/bg-image.png":
                res.writeHead(200, { "Content-Type": "image/png" });

                res.end(await readFile(resolve("public/img/bg-image.png")));

                break;
            case "/img/tiktok.png":
                res.writeHead(200, { "Content-Type": "image/png" });

                res.end(await readFile(resolve("public/img/tiktok.png")));

                break;
            default:
                res.writeHead(404);
                res.end("Page not found ...");

                break;
        }
    }
}).listen(port, () => {
    console.log("Server started on port: " + port);
});
