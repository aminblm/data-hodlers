let express = require('express')
let router = express.Router()
const dataService = require('./services/data')

let app = express();

app.get('/', (req, res) => {
    res.json({ message: 'Data Hodlers Gateway v.0.0.1' })
});

app.get('/data', function(req, res, next) {
    try {
      res.json(dataService.getMultiple(req.query.page));
    } catch(err) {
      console.error(`Error while getting data `, err.message);
      next(err);
    }
  });
  

let server = app.listen(3000, function () {
    console.log('Listening on port %d', server.address().port)
})
