'use strict';

const { MongoMemoryServer } = require('mongodb-memory-server');

module.exports = async () => {
	const mongod = await MongoMemoryServer.create();
	process.env.MONGODB_URI = mongod.getUri();
	process.env.MONGO_DB_NAME = 'test';
};
