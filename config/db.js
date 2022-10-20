const DB_NAME = "blog";
const DB_HOST = "0.0.0.0";
const DB_PORT = 27019;

const URI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

module.exports = URI;
