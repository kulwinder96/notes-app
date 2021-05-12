"use strict";
const notes_action = require("../notes/notes_action.js");
const chalk = require("chalk");
class Read{
constructor(username, title){
this.username=username;
this.title=title;
}
print()
{
let data = notes_action.getdata();
let articles = this.isavailable(data);
if(articles == -1)
{
console.log(chalk.red.bgBlue(" user is not exist \n"));
} else if(articles.length ==0)
{
console.log(chalk.red.bgBlue(" no article is available \n"));
} else {
for(let i = 0; i < articles.length; ++i)
{
if(articles[i].title == this.title)
{
console.log(chalk.blue.bgGreen("title : "+articles[i].title));
console.log("\n\n");
console.log(chalk.green.bgBlue(articles[i].body));
return true;
}
}
console.log(" article is not available \n");
return false;
}
}
isavailable(obj)
{
for(let i =0; i < obj.length; ++i)
{
if(obj[i].username == this.username)
{
return obj[i].articles;
}
}
console.log(" user is not available \n");
return -1;
}
};
module.exports={Read};