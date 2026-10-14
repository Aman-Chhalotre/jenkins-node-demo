
const http = require("node:http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/health") {
        res.writeHead(200);
        res.end(JSON.stringify({ status: "healthy" }));
        return;
    }

    res.writeHead(200);
    res.end(JSON.stringify({ message: "Hello from Docker!" }));
});

server.listen(3000, "0.0.0.0", () => {
    console.log("Server running on port 3000");
});
