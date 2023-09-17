#!/usr/bin/env node

const { default: chalk } = require("chalk");

console.log(
  `👋 I'm ${chalk.bgBlue("Shane Walker")}, a ${chalk.bgYellow("web engineer")}`
);
console.log("🌎 I live in the United States");
console.log(
  `I'm married and have ${chalk.magenta("two daughters #girldad")} 👨‍👩‍👧‍👧 `
);
console.log(
  `💻 I work ${chalk.greenBright("@Lemongrass")} building SAP on the cloud`
);
console.log(`I'm currently ${chalk.bgCyan("learning about Go")}`);
console.log("How to reach me: https://x.com/swalker326");
