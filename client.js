const net = require("net");
const constants =require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: constants.IP,
    port: constants.PORT
  });
  conn.setEncoding("utf8");
  
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: " + constants.NAME);
  });
  
  conn.on("data", (data) => {
    console.log(data);
  });
  return conn;
};

module.exports = connect;