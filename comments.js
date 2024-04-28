// Create web server
// Create a web server that listens on port 3000 and serves the comments.html file.
// The comments.html file should be served with the correct content type.

const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'comments.html');
    const file      

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' });
            res.end('Internal Server Error');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    }
});

server.listen(3000, () => {
    console.log('Server is listening on port 3000');
}
```

### 2. Serving Static Files
