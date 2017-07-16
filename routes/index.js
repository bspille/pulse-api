const Router = require("express").Router()
const path = require("path")
const { authenticate} = require('../authenticate')
const {  CONTACT, GEOMETRY, PULSE, UPDATE, UPDATE_CONTACT, USER } = require('./paths')



Router.post(CONTACT, authenticate);

Router.post(GEOMETRY, authenticate);

Router.post(PULSE, authenticate);

Router.post(UPDATE, authenticate);

Router.post(UPDATE_CONTACT, authenticate);

Router.post(USER, authenticate);


// Router.get("*", (req, res)=> res.sendFile(path.resolve(__dirname, "index")))
Router.get("*", (req, res) => {
  // sends static html file in the public dir
  // res.sendFile(path.resolve(__dirname, 'index.html'));
  res.sendFile("splash.html", {root: __dirname + '/../public/'});
  // res.render("index");
});

module.exports = Router