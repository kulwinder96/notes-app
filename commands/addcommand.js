"use strict";
const notes_action = require("../notes/notes_action.js");
class AddData {
    constructor(username, title, text) {
        this.username = username;
        this.title = title;
        this.body = text;
    }
    add() {
        const data = notes_action.getdata();
        console.log(" data variable is got data \n");
        console.log(data);
        const index = notes_action.isuserexist(data, this.username);
        console.log(" index got \n");
     const titleexist = this.istitleexist(data, this.title, index);
        if (index == -1) {
            console.log(" sorry user you are not exist our json file \n first you need to create account \n");
        } else if(titleexist)
        {
            console.log(" title is allready exist \n");
        }
        else {
            let post = {
                title: this.title,
                body: this.body
            };
            console.log(" post is created \n wate for installing in data base \n");
            data[index].articles[data[index].articles.length] = post;
            notes_action.setdata(data);
            console.log(" grate your article or post is stored inside json file \n");
        }
    }
    istitleexist(mydata, title, i){
        let posts = mydata[i].articles;
        for(let j =0; j< posts.length; ++j)
        {
            if(posts[j].title == title)
            {
                return true;
            }
        }
        return false;
    }

};
module.exports = { AddData };