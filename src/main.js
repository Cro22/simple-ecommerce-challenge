const Config = require('./config/config');
const express = require('express');
const app = express();
const DatabaseMongo = require('./db/mongo');
const configureRoutes = require('./modules/routes');

DatabaseMongo.createDatabaseConnection(Config.getMongoDbName(), Config.getMongoUrl());

require('./db/models');
const allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
}
app.set('port', Config.getPort() || 3000);
app.use(allowCrossDomain);
app.use(express.json());
configureRoutes(app);
app.listen(app.get('port'), () => {
  console.log(`Server running on port ${app.get('port')}`);
});

