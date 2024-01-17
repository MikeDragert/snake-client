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
  default:
    console.log(data);
    break;
  }
};

module.exports = setupInput;