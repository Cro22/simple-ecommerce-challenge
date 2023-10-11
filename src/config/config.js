require('dotenv')
  .config();
class Config {
  #mongoUrl;
  #mongoDbName;
  #port;

  constructor() {
    this.#mongoUrl = process.env.MONGO_URL;
    this.#mongoDbName = process.env.MONGO_DB_NAME;
    this.#port = process.env.PORT;
  }

  getMongoUrl() {
    return this.#mongoUrl;
  }

  getMongoDbName() {
    return this.#mongoDbName;
  }

  getPort() {
    return this.#port;
  }
}

module.exports = new Config();
