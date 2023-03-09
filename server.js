const express = require('express');
const morgan = require("morgan");
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

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
 
