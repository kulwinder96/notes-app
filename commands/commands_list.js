"use strict";
const user_action = require("../user/user_action.js");
const addcommand = require("./addcommand.js");
const listcommand = require("./listcommand.js");
const readcommand = require("./readcommand.js");
const removecommand=require("./removecommand.js");
const username = {
    describe: " enter your user name ",
    demandOption: true,
    type: "string"
};
const userpassword = {
    describe: " enter password ",
    demandOption: true,
    type: "string"
};
const title = {
    describe:" enter title of the article ",
    demandOption: true,
    type: "string"
};
const body= {
describe:" enter article ",
demandOption: true,
type:"string"
};
const add_command = {
    command: "add",
    describe: " add data inside json file using add command",
    builder:{
        username: username,
        //password: userpassword,
        title: title,
    body: body
    },
 handler(arg)   {
     if(arg.title ==" " && arg.body ==" ")
     {
         console.log(" title and body is empty \n");
     } else {
         let addme = new addcommand.AddData(arg.username, arg.title, arg.body);
         addme.add();
     }
 }
};
const read_command = {
    command:"read",
    describe:"this command is reading for content",
    builder:{
username: username,
//password: userpassword,
title: title
    },
    handler(arg){
if(arg.username == " " || arg.title == " ")
{
console.log(" user name or title is empty \n");
} else {
let read = new readcommand.Read(arg.username, arg.title);
read.print();
}
    }
};
const remove_command = {
    command:"remove",
    describe:" through this command you can remove any article using title ",
    builder:{
username: username, 
//password: userpassword,
title: title
    },
handler(arg){
if(arg.username == " " || arg.title ==" ")
{
console.log(chalk.red.bgBlue(" username or title field is empty \n"));
} else {
let remove = new removecommand.Remove(arg.username, arg.title);
remove.removeArticle();

}
}
};
const list_command = {
    command:"list",
    describe:" se the list of your stored articles ",
    builder:{
        username: username,
//        password: userpassword,
//title: title
    },
handler(arg){
if(arg.username == " ")
{
console.log("user name is empty \n");
} else {
let my_list = new listcommand.List(arg.username);
my_list.printer();
}
}
};
const create_user = {
    command:"create",
    describe: " through this command you can create user ",
    builder:{
        username: username,
        password: userpassword
    },
    handler(arg){
        if(arg.username == "" || arg.password == "")
        {
            throw "user name or password command is empty ";
        } else {
            let my_user = new user_action.CreateAccount(arg.username, arg.password);
            my_user.create();
            console.log(" account is created \n");

        }
    }
};
module.exports = {
    add_command,
    read_command,
    remove_command,
    list_command,
    create_user
};