const {connect} = require("./client.js");



console.log("Connecting ...");
const conn = connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  return stdin;
}


conn.on("connect", () => {
  console.log("Successfully connected to game server");
  conn.write("Name: MPD");
});

conn.on("data", (data) => {
  console.log(data);
});

const handleUserInput = function(data) {
  switch(data) {
    case '\u0003':
      process.exit();
    default:
      console.log(data);
      break;
  }
}

const input = setupInput();

input.on("data", handleUserInput)


// setInterval(() => {
//   conn.write("Move: up");
// }, 50);

