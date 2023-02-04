/* 
    Uploading an existing repo
    after it has been linked 
*/

// npm run build
// git add .
// git commit -m "message"
// git push -u origin main

const shell = require('shelljs')
const inquirer = require("inquirer");
const prompt = inquirer.createPromptModule()
var colors = require("colors");
colors.enable();

console.log("\x1b[33m Quick Run Your Repo \x1b[0m\n\n");
prompt([
  {
    type: 'list',
    name: 'run',
    message: "What should we run: ",
    choices: ['client', 'server', 'client and server', 'build']
  }
]).then((a) => {
  if (a.run === 'server') {
    shell.exec('nodemon index.js')
  }
  if (a.run === "client") {
      prompt([
          {
              name: "path",
              message: "Path to frontend dir: ",
              default: "./frontend",
          },
      ]).then((b) => {
          shell.exec(`npm run dev --prefix ${b.path}`);
      });
  }
  if (a.run === "client and server") {
    prompt([
        {
            name: "path",
            message: "Path to frontend dir: ",
            default: "./frontend",
        },
    ]).then((c) => {
        shell.exec(
            `concurrently \"nodemon index.js\" \"npm run dev --prefix ${c.path}\" `
        );
    });
  }
  if (a.run === 'build') {
    prompt([
        {
            name: "path",
            message: "Path to frontend dir: ",
            default: "./frontend",
        },
        {
            name: "commit",
            message: "Add a commit message: ",
        },
    ]).then((d) => {
        shell.exec(`npm run build --prefix ${d.path}`);
        console.log("\n BUILD COMPLETE \n".green);
        shell.exec(`git add .`);
        shell.exec(`git commit -m "${d.commit}"`);
        console.log("\n REPO HAS BEEN COMMITED \n".green);
        shell.exec(`git push -u origin main`);
        console.log("\nDone".green);
    });
  }
})