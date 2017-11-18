const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const acct = require('./AcctModel.js');

const STATUS_USER_ERROR = 422;
const STATUS_SERVER_ERROR = 500;
const STATUS_PASS = 200;

const server = express();

server.use(bodyParser.json());

mongoose.Promise = global.Promise
mongoose
.connect('mongodb://localhost:27017/accounts', { useMongoClient: true })
.then(function(db){
    console.log('All wired up and ready to go')
})
.catch(function(err) {
    console.log('Database connection failed', err.message);
})

server.get('/accounts', function(req, res) {
    acct.find( function(err, acct) {
        if (err) {
            res.status(STATUS_SERVER_ERROR).json({ error: "You've gone supernova; NEVER GO SUPERNOVA (in other words your server is missing)"})
        } else {
            res.status(200).json(acct)
        }
    });
});

server.post('/accounts', function (req, res) {
    const newAcct = new acct(req.body);

    newAcct.save(function(err, acct) {
if (err) {
            res.status(STATUS_USER_ERROR).json({ error: "How, bout you provide me with all the required fields? k thx bye" });
        } else {
            res.status(STATUS_PASS).json(acct)
        }
    });
});

server.get('/accounts/:id', function(req, res) {
    const { id } = req.params;
    acct.findById(id, function(err, acct) {
        if (err) {
            res.status(STATUS_USER_ERROR).json({ error: "You should work on your copy and pasting skills, that ID is WRONG"})
        } else {
            res.status(STATUS_PASS).json(acct)
        }
    });
});

server.put('/accounts/:id', function(req, res) {
    const { id } = req.params;
    acct.findByIdAndUpdate(id, function(err, acct) {
        if (err) {
            res.status(STATUS_USER_ERROR).json({ error: "You should work on your copy and pasting skills, that ID is WRONG, also... you probably need to change something"})
        } else {
            res.status(200).json(acct)
        }
    });
});

server.delete('/accounts/:id', function(req, res) {
    const { id } = req.params;
    acct.findByIdAndRemove(id, function(err, acct) {
        if (err) {
            res.status(STATUS_USER_ERROR).json({ error: "You should work on your copy and pasting skills, that ID is WRONG"})
        } else {
            res.status(200).json(acct)
        }
    });
});

const port = 1963;
server.listen(port, function() {
   console.log('server running on port 1963');
});
