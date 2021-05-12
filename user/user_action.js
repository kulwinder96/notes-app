"use strict";
const fs = require("fs");
const chalk = require("chalk");
class CreateAccount{
    
    constructor(name, password){

this.username = name;
this.password = password;
    }
    isuserexist(dataobj, username)
    {
        for(let i = 0; i < dataobj.length; ++i)
        {
if(dataobj[i].username == username)
{
    return true;
}
        }
        return false;
    }
  create()
  {
      let data = fs.readFileSync("./user/users.json", "utf8");
    console.log(data);
//data.trim();
      let my_obj = JSON.parse(data);
      if(this.isuserexist(my_obj, this.username))
      {
        console.log(" user is allready exist in our files \n");
      } else {
          let user = {
              username: this.username,
              password: this.password
          };
          my_obj[my_obj.length] = user;
          data = JSON.stringify(my_obj);
    fs.writeFile("./user/users.json", data, (err) => {
        if(err)
        {
            //throw err;
            console.log("unable to add data in json file \n");
        } else {
            console.log(" data is stored in json file \n");
        }
    });
    this.createPostField();
      }
  }
    createPostField()
    {
const user_post = {
            username: this.username,
            articles: []
        };

    let data = fs.readFileSync("./notes/notes.json", "utf8");
            
        //data.trim();
let next_obj = JSON.parse(data);
next_obj[next_obj.length] = user_post;
data = JSON.stringify(next_obj);
fs.writeFile("./notes/notes.json", data, (err) => {
    if(err)
    {
        //throw err;
        console.log("unable to write notes in notes json file \n");
    } else {
        console.log(" data is stored in notes json file \n");
    }
});
    }

};
module.exports = {CreateAccount};