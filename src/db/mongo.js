const mongoose = require('mongoose');

class DatabaseMongo {
  constructor() {
    this.connections = null;
  }

  getDatabaseConnection() {
    return this.connections;
  }

  async createDatabaseConnection(dbName, dbUrl) {
    if (!this.connections) {
      this.connections = await mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
    }
  }

  closeAllConnections() {
    this.connections.close();
  }
}

module.exports = new DatabaseMongo();
