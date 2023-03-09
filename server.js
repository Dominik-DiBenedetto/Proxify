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
 
// Proxy endpoints
app.use('/*', createProxyMiddleware({
    changeOrigin: true,
    pathRewrite: {
        [`^/*/`]: '',
    },
 }));
 
 // Start the Proxy
app.listen(PORT, HOST, () => {
    console.log(`Starting Proxy at ${HOST}:${PORT}`);
 });
 
