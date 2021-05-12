"use strict";
const notes_action = require("../notes/notes_action.js");

class Remove{
constructor(username, title){
this.username = username;
this.title= title;
}
removeArticle()
{
let data = notes_action.getdata();
let myarticles = this.isUserExist(data);
if(this.isArticleAvailable(myarticles))
{
let myArticlesCopy = [];
for(let i = 0; i < myarticles.length; ++i)
{
if(myarticles[i].title != this.title)
{
myArticlesCopy.push(myarticles[i]);
} else {
console.log("article has removed \n");
}
}

this.setuser(data, myArticlesCopy);
} else {
console.log("article is not available \n");
}
}
isArticleAvailable(articles)
{
if(articles == false)
{
console.log(" no article is writen by this user \n");
} else {
for(let i = 0; i < articles.length; ++i)
{
if(articles[i].title == this.title)
{
return true;
}
}
return false;
}
}
isUserExist(obj)
{
for(let i =0; i < obj.length; ++i)
{
if(obj[i].username == this.username)
{
return obj[i].articles;
}
}
return false;
}
setuser(obj, articles)
{
for(let i = 0; i < obj.length; ++i)
{
if(obj[i].username == this.username)
{
obj[i].articles = articles;
break;
}
}
notes_action.setdata(obj);
console.log(" task has done \n");

}
};
module.exports={Remove};