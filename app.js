"use strict";
const fs = require("fs");
const yargs = require("yargs");
const chalk = require("chalk");
const commands_list = require("./commands/commands_list.js");
try{
    if(!(fs.existsSync("./notes/notes.json")&&fs.existsSync("./user/users.json")))
    {
        let dt = [];
        let ndt = JSON.stringify(dt);
        fs.writeFile("./notes/notes.json", ndt, (err) => {
            if(err)
            {
                console.log(" unable to create notes json file \n");
            } else {
                console.log(" notes json file is created successfuly \n");
            }
        });
        fs.writeFile("./user/users.json", ndt, (err) => {
            if(err)
            {
                console.log(" unable to create user json file \n");
            } else {
                console.log(" users json file is successfully created \n");
            }
        });
    }
yargs.command(commands_list.create_user);
yargs.command(commands_list.add_command);
yargs.command(commands_list.remove_command);
yargs.command(commands_list.read_command);
yargs.command(commands_list.list_command);
yargs.version('2.0.0');
yargs.parse();
} catch(err)
{
    console.log(chalk.red.bgBlue(err));
}