"use strict";
const fs = require("fs");

const getdata = () => {
    const data = fs.readFileSync("./notes/notes.json", "utf8");

    console.log(" data got from file \n next creating object \n");

    //data.trim();
    let newdata = JSON.parse(data);
    console.log(" object is created \n");
    return newdata;
};
const setdata = (obj) => {
    const data = JSON.stringify(obj);
    fs.writeFile("./notes/notes.json", data, (err) => {
        if (err) {
            console.log(" unable to store data inside json file \n");
        } else {
            console.log(" data is stored in json file \n");
        }
    });
};
const isuserexist = (obj, username) => {
    for (let i = 0; i < obj.length; ++i) {
        if (obj[i].username == username) {
            return i;
        }
    }
    return -1;
};
const indexfinder = (obj) => {
    console.log(" function is unde development\n");
};
module.exports = {
    getdata,
    setdata,
    isuserexist,
    indexfinder
};