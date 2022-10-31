//server using nodejs


const fs = require('fs');
const http = require('http');
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    //set headers content type
    //res.setHeader('Content-Type', 'text /html ');
    //res.write('<p> hello GODWIN </p>');
    //res.write('<b>hello ninjas again</b>');
    //res.end();


    let path = './backened/views/';
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;

        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;

            //setting redirect
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;

        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }
    // routeing / send an html file  to browser
    //we use file system

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();

        } else {
            res.write(data);
            res.end();
        }
    })


});
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});