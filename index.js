const http = require('http');

// Define server port
const PORT = 5050;
const userDb = require('./user.constant');

// Create the HTTP server
const server = http.createServer((req, res) => {
    // Set the response header for JSON content
    res.setHeader('Content-Type', 'application/json');

    if (req.method === 'GET' && req.url === '/') {
        // Example API endpoint /api/hello
        res.writeHead(200);
        res.end(JSON.stringify({ message: 'Server is running at 5050' }));
    }
    // Define a simple router
    if (req.method === 'GET' && req.url === '/api/users') {
        // Example API endpoint /api/hello
        res.writeHead(200);
        res.end(JSON.stringify({
            message: 'Fetching user data...',
            data: userDb
        }));
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
