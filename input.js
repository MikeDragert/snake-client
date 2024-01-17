const constants = require("./constants");

let connection;

const setupInput = function(_connection) {
  connection = _connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const chooseRandomMessage = function() {  
  let messageIndex = Math.floor(Math.random()*10);
  return constants.MESSAGE[messageIndex];
}


const handleUserInput = function(data) {
  switch (data) {
  case '\u0003':
    process.exit();
    break;
  case constants.MOVE_UP_KEY:
    connection.write("Move: up");
    break;
  case constants.MOVE_LEFT_KEY:
    connection.write("Move: left");
    break;
  case constants.MOVE_DOWN_KEY:
    connection.write("Move: down");
    break;
  case constants.MOVE_RIGHT_KEY:
    connection.write("Move: right");
    break;
  case '1': 
  case '2':
  case '3':
  case '4':
  case '5':
  case '6':
  case '7':
  case '8':
  case '9':
  case '0':
    connection.write("Say: " + constants.MESSAGE[(data==0) ? 9 : (data-1)]);
    break;
  case ' ':
    connection.write("Say: "+chooseRandomMessage());
    break;
  default:
    console.log(data);
    break;
  }
};

module.exports = setupInput;