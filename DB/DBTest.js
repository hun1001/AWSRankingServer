console.log("set DB");

function Add() {
    console.log("add");
}

function Get() {
    console.log("get");
    return "DBTest";
}

module.exports = { Add, Get };