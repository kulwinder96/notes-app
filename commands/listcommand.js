"use strict";
const notes_action = require("../notes/notes_action.js");
const chalk = require("chalk");
class List{
constructor(username){
this.username=username;
//this.title=title;
}
printer(){
let data = notes_action.getdata();
console.log(" i got it data \n");
let index = notes_action.isuserexist(data, this.username);
if(index == -1)
{
console.log("user is not exist \n");
} else {
let articles = data[index].articles;
if(articles.length == 0)
{
console.log(" no article is available \n");
} else if(articles.length == 1)
{
console.log(chalk.blue.bgGreen(articles[0].title)+"\n");
} else {
for(let i = 0; i < articles.length; ++i)
{
console.log(chalk.blue.bgGreen(articles[i].title)+"\n");
}
}
}
}

};
module.exports={List};