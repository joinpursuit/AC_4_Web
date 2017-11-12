const http = require('http')
const server = http.createServer(function (req, res) {

  // const parsedUrl = url.parse(req.url, true)
  // const time = new Date(parsedUrl.query.iso)
  // let result

  // if (/^\/api\/parsetime/.test(req.url)) {
  //   result = parsetime(time)
  // } else if (/^\/api\/unixtime/.test(req.url)) {
  //   result = unixtime(time)
  // }

  const htmlGreeting = (name) => `
  <!doctype>
  <head>
    <title>Greeter</title>
  </head>
  <body>
    <h1> Hello ${name}! </h1>
  </body>
  </html>
  `
  const result = require('url').parse(req.url, true);
  console.log(result)
  console.log(req.url)
  if (result.query.name) {
   // res.writeHead(200, { 'Content-Type': 'text/html' })
    res.end(htmlGreeting(result.query.name))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(3000)