let connection = undefined;

const setupInput = function(_connection) {
  connection = _connection;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function(data) {
  switch (data) {
  case '\u0003':
    process.exit();
    break;
  case 'w':
    connection.write("Move: up");
    break;
  case 'a':
    connection.write("Move: left");
    break;
  case 's':
    connection.write("Move: down");
    break;
  case 'd':
    connection.write("Move: right");
    break;
  case '1': 
    connection.write("Say: It's a trap!");
    break;
  case '2': 
    connection.write("Say: Hail to the kng bby!");
    break;
  case '3': 
    connection.write("Say: Fried spahgetti!");
    break;
  case '4': 
    connection.write("Say: AHHHHHHHHH!");
    break;
  case '5': 
    connection.write("Say: Do or do not. No try!");
    break;
  case '6': 
    connection.write("Say: Beam me up Scottie!");
    break;
  default:
    console.log(data);
    break;
  }
};

module.exports = setupInput;