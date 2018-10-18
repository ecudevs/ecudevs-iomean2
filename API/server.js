const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const api = require('./routes/api');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', api);

app.use(express.static(path.join(__dirname, '../dist/ecudevs-iomean2')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/to-do-app/index.html'));
});

const port = process.env.PORT || '9000';
app.set('port', port);

const server = http.createServer(app);

const conn_str = process.env.MONGODB_URI || 'mongodb://localhost:27017/ecudevs';
mongoose.connect(conn_str, { useNewUrlParser: true });

server.listen(port, () => console.log(`La magia sucede en el pueto:${port}`));
