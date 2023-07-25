const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // set header content type
  res.setHeader('Content-Type', 'text/html');

  // routing
  let path;
  switch (req.url) {
    case '/':
      res.statusCode = 200;
      path = 'index.html';
      break;
    case '/about':
      res.statusCode = 200;
      path = 'about.html';
      break;
    case '/contact-me':
      res.statusCode = 200;
      path = 'contact-me.html';
      break;
    default:
      res.statusCode = 404;
      path = 'not-found.html';
      break;
  }

  // sending css from server to client

  // send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      // res.write(data);
      res.end(data);
      console.log(data.toString());
    }
  });
});

server.listen(8080, 'localhost', () => {
  console.log('listening for requests on port 8080');
});
