const express = require('express');
const morgan = require("morgan");
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

// Config
const PORT = 3000;
const HOST = "localhost";

// Create Express Server
const app = express();

app.use(cors({
    origin: '*',
}));

app.use(express.urlencoded())
 
// Proxy endpoints
app.get('/proxy/:host/:target', (req, res) => {
    const target = req.params.target
    app.use(`${host}/`, createProxyMiddleware({
        target: target,
        changeOrigin: true,
        pathRewrite: {
            [`^/${host}`]: '',
        },
     }));
}
 
 // Start the Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
 });
 
