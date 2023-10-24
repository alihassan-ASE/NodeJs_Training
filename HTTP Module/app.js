const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end('Welcome to Home page');
    }
    if(req.url === '/about'){
        res.end('This is something about us.');
    }
    res.end(`
    <h1>Ooops</h1> 
    <p>We can"t find the page you requested for</p>
    <a href='/'>Back to Home</a>`
    );
})

server.listen(5000);

console.log('Hi this is my server app js file');