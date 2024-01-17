const {connect} = require("./client.js");

console.log("Connecting ...");
const conn = connect();

conn.on("connect", () => {
  console.log("Successfully connected to game server");
  conn.write("Name: MPD");
});

conn.on("data", (data) => {
  console.log(data);
});
