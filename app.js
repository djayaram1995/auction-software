const express = require('express');
const process = require('process');
const path = require('path');
const nunjucks = require('nunjucks');
const fs = require("fs");
const sqlite3 = require('sqlite3');
var session = require('express-session');
var SQLiteStore = require('connect-sqlite3')(session);
const AppDAO = require('./database/dao');

const cron = require('node-cron');
const { request } = require('http');
const appDao = new AppDAO();


var app = express();
app.use(express.json());

app.use(express.urlencoded({ extended: false }));
// view engine setup
var env = nunjucks.configure(path.join(__dirname, 'views'), {
    autoescape: true,
    express: app,
    noCache: true,
    trimBlocks: true
  });
var store = new SQLiteStore({
    concurrentDB: true
});
  app.use(session({
    store: store,
    secret: 'Auth token',
    cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 } // 1 week
  }))
app.listen(process.env.PORT || 3000, () => {
    console.log("listening on "+3000);
})