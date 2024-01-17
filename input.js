const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput)
  return stdin;
}

const handleUserInput = function(data) {
  switch(data) {
    case '\u0003':
      process.exit();
    default:
      console.log(data);
      break;
  }
}

module.exports = setupInput;