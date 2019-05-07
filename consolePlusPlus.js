// User Input in NodeJS by Timmy Chen, Jaxatax, & topherPedersen

const readLine = require("readline-sync");

function input(prompt) {
    const userInput = readLine.question(prompt)
    return(userInput)
}

module.exports = {
  input: input
};
