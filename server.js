const express = require('express');
const morgan = require("morgan");
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Create Express Server
const app = express();

app.use(cors({
    origin: '*',
}));

app.use(express.urlencoded())
 
// Proxy endpoints
app.get('/proxy/:host/:target', (req, res, next) => {
    const target = req.params.target
    const host = req.params.host
    console.log({host, target})
    app.use(`${host}/`, createProxyMiddleware({
        target: target,
        changeOrigin: true,
        pathRewrite: {
            [`^/${host}`]: '',
        },
     }));
    res.send(`Target: ${target} | Host: ${host}`)
})

app.listen(3000, 'localhost')
