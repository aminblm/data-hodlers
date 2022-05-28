let express = require('express')
let router = express.Router()
const dataService = require('./services/data')
const {
  signString,
  verifySignature
} = require('./services/near')

let app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.json({ message: 'Data Hodlers Gateway v.0.0.1' })
})

app.post('/data', async function(req, res, next) {
    try {
      console.log(req.body)
      payload = {
        message: req.body.message,
        publicKey: req.body.publicKey,
        signature: req.body.signature
      }
      if (await verifySignature(payload)) {
        res.json(dataService.getMultiple())
      } else {
        res.status(401).json({ message: 'Unauthorized' })
      }
    } catch(err) {
      console.error(`Error while getting data `, err.message)
      res.status(401).json({ message: 'Unauthorized' })
      next(err)
    }
  })
  

let server = app.listen(3000, function () {
    console.log('Listening on port %d', server.address().port)
})
