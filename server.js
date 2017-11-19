const userData = require('./user-data.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/userdata', (req, res) => {
	res.send(userData);
});

app.listen(5000, () => {
	console.log('server listening on port 5000');
});