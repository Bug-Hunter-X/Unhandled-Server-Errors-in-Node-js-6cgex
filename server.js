const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');
//The above code will not handle errors properly.  If there is an error on the server, it will crash without logging any details to the console.
//This is a common problem, and there are many ways to solve it.  The simplest way is to add an error listener to the server.