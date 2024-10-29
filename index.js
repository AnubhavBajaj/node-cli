const {program} = require("commander");
const fs = require("fs");
program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.parse();

console.log(program.args[0]);
let filePath = program.args[0];
const content = fs.readFileSync(filePath, 'utf8');
console.log(`You have ${ content.length} letters in this file`); 