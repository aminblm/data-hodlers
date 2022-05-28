const db = require('../services/db');
// const config = require('../config');

const offset = 10
const limit = 10
const query = `SELECT * FROM weather_data LIMIT ? OFFSET ?`;
const params = [ limit, offset ]

function getMultiple(page = 1) {
  const offset = (page - 1) * 10
  const data = db.query(query, params);
  const meta = {page}

  return {
    data,
    meta
  }
}

module.exports = {
  getMultiple
}