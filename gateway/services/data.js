const db = require('../services/db');
// const config = require('../config');

function getMultiple(page = 1) {
  const offset = (page - 1) * 10
  const data = db.query(`SELECT name FROM sqlite_schema WHERE type=? ORDER BY name;`, ['table']);
  const meta = {page}

  return {
    data,
    meta
  }
}

module.exports = {
  getMultiple
}