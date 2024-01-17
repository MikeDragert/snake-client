const connect = require("./client.js");
const setupInput = require("./input.js");

let connection = connect();
setupInput(connection);
