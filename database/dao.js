// dao.js

const sqlite3 = require('sqlite3');

class AppDAO {
  constructor(dbFilePath) {
    if(!dbFilePath) {
        dbFilePath = "./database/users.db"
    }
    if(!this.db) {
      this.db = new sqlite3.Database(dbFilePath, sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE ,(err) => {
        if (err) {
          console.log('Could not connect to database', err)
        } else {
          console.log('Connected to database')
        }
      })
    }
  }
}

module.exports = AppDAO