const http = require('http');

const server = http.createServer((req,res)=>{
  if(req.url=='/'){
    res.end('welcome to our home page');

  }
  if(req.url=='\about')
  {
 res.end('here this is about page');
  }
  res.end(`
  <h1>Oops</h1>
  <p> we can't seen to find the  page  you are looking for </p>
  <a href='/'> back to home page </a>
  `)

})

server.listen(3000);