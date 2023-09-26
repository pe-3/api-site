const express = require('express');
const http = require('http');
const { join } = require('path');
const app = express();
app.use('/tiny-react', express.static(join(__dirname, './dist')));
const server = http.createServer(app);
server.listen(3000);