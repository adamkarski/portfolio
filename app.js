import { handler } from './build/handler.js';
import express from 'express';

const app = express();

// add a route that lives separately from the SvelteKit app
app.get('/healthcheck', (req, res) => {
    res.end('ok');
});

// let SvelteKit handle everything else, including serving prerendered pages and static assets
app.use(handler);

app.listen(80, () => {
    console.log('listening on port 80');
});






// // app.js
// const { createServer } = require('http')
// const { parse } = require('url')
// const next = require('next')
// port = process.env.PORT || 80

// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// app.prepare().then(() => {
//   createServer((req, res) => {
//     // Be sure to pass `true` as the second argument to `url.parse`.
//     // This tells it to parse the query portion of the URL.
//     const parsedUrl = parse(req.url, true)
//     const { pathname, query } = parsedUrl

//     if (pathname === '/a') {
//       app.render(req, res, '/a', query)
//     } else if (pathname === '/b') {
//       app.render(req, res, '/b', query)
//     } else {
//       handle(req, res, parsedUrl)
//     }
//   }).listen(port, (err) => {
//     if (err) throw err
//     console.log('> Ready on http://localhost:'+ port)
//     console.log('enviroment -> '+ process.env.NODE_ENV )


//   })
// })