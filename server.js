let userData = require('./user-data.js');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const STATUS_USER_ERROR = 422;
const STATUS_CREATED = 201;

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.get('/userdata', (req, res) => {
	res.send(userData);
});

app.post('/adduser', (req, res) => {
  const { id, username, description, budgetAmt, isActive } = req.body;

  console.log("body:" + JSON.stringify(req.body));  
  if (id === undefined) {
	  res.status(STATUS_USER_ERROR);
	  res.json({ error: 'Must provide an ID' });
	  return;
	}
  if (username === undefined) {
    res.status(STATUS_USER_ERROR);
    res.json({ error: 'Must provide a username' });
    return;
  }
  if (description === undefined) {
    res.status(STATUS_USER_ERROR);
    res.json({ error: 'Must provide description' });
    return;
  }
  if (budgetAmt === undefined) {
    res.status(STATUS_USER_ERROR);
    res.json({ error: 'Must provide budget amount' });
    return;
  }
  if (isActive === undefined) {
    res.status(STATUS_USER_ERROR);
    res.json({ error: 'Must provide if the user is active or not' });
    return;
  }

  const newUserDetails = { id, username, description, budgetAmt, isActive };

  userData.push(newUserDetails);

  // save to database

  res.status(STATUS_CREATED).json(newUserDetails);
});

app.delete('/deleteuser', (req, res) => {
  // In case of delete, extract params from req.query (unlike post/patch/put).
  const id = req.query.id;
  if (id === undefined) {
    res.status(STATUS_USER_ERROR);
    res.json({ error: 'Must provide a user id' });
    return;
  }

  const user = userData.find(p => p.id === Number(id));
  if (user === undefined) {
  	console.log("user not found");
    res.status(STATUS_USER_ERROR);
    res.json({ error: `Couldn't find a user with id ${id}` });
    return;
  }

  userData = userData.filter(p => p.id !== id);
  res.json({ success: true });
});

app.listen(5000, () => {
	console.log('server listening on port 5000');
});