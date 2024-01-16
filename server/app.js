var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var sqlite = require('sqlite3');
var env = require('dotenv').load();
const cors = require('cors');
const expressWs = require('express-ws');
const http = require ('http');
const botController = require('./controllers/botController.js');
var port = process.env.PORT || 8080;

// models
var models = require("./models");

// routes
var botRoute = require('./routes/bots');
var settingRoute = require('./routes/setting');
var transactionRoute = require('./routes/transactions');
var tokenRoute = require('./routes/token');


//Sync Database
models.sequelize.sync().then(function() {
    console.log('connected to database')
}).catch(function(err) {
    console.log(err)
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

// register routes
app.use('/setting', settingRoute);
app.use('/bots', botRoute);
app.use('/transactions',transactionRoute);
app.use('/tokens',tokenRoute);

// index path
app.get('/', function(req, res){
    console.log('app listening on port: '+port);
    res.send('tes express nodejs sqlite')
});

const server = http.createServer(app);

server.listen(port, function(){
    console.log('app listening on port: '+port);
});

module.exports.wss = expressWs(app, server);

app.ws('/connect' , function(ws, req) {
    ws.on('message', async function (msg) {
        console.log(msg);
    })
})

global.snipSubscription = null;
global.frontSubscription = null;

module.exports = app;