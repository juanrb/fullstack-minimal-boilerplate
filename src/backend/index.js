// server
const express = require('express');
const app = express();
const environment = require('../environment');
const path = require('path');

// Application setttings
app.disable('x-powered-by'); // express watermark

// Middlewares
app.use(require('cors')());
app.use(require('compression')()); // gzip
app.use(express.json()); // parse json requests
app.use(require('response-time')()); // to measure server response time
app.use(express.static(path.join(__dirname, '../../build'))); // expose static route

// Routing
app.use('/api', require('./config/router'));
app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '../../build', 'index.html'))); // Serve react files


const port = environment.server.port || 3000;
app.listen(port, () => console.log(`Port: ${port}`));
