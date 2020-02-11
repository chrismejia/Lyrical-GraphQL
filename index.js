const chalk = require("chalk");
const figlet = require("figlet");
const app = require("./server/server");

app.listen(4000, () => {
  console.log(
    chalk.yellow(`
=======================================`)
  );
  console.log(
    chalk.yellow(
      figlet.textSync("Listening.", {
        font: "Small Slant",
        horizontalLayout: "default",
        verticalLayout: "default"
      })
    )
  );
  console.log(
    chalk.yellow(`
http://localhost:4000/ || http://localhost:4000/graphql
  `)
  );
});
