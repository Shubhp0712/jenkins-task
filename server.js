const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3300;

const server = http.createServer((req, res) => {
  // Path to your index.html file
  const filePath = path.join(__dirname, 'index.html');

  // Read and serve the HTML file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error loading index.html');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
