// server
const express = require('express');
const app = express();
const environment = require('./config/environment');

// db
const db = require('./config/db');

// Application setttings
app.disable('x-powered-by'); // express watermark

// Middlewares
app.use(require('cors')());
app.use(require('compression')()); // gzip
app.use(express.json()); // parse json requests
app.use(require('response-time')()); // to measure server response time

// Routing
app.use('/', require('./config/router'));

const port = environment.server.port || 3000;
app.listen(port, () => console.log(`Port: ${port}`));
