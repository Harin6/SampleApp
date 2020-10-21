const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const herlper = require('./_helpers')

export default (function Server() {

  const app: any = express()

  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(cors())

  // api call version 1
  app.post("/api/v1/parse", (req: any, res: any) => {
    let data = req.body.data || {}
    const userInfo = herlper.getUserData(data, "v1")
    res.json({
      statusCode: 200,
      data: userInfo
    })
  })


  app.post("/api/v2/parse",  (req: any, res: any) => {
    let data = req.body.data || {}
    const userInfo = herlper.getUserData(data, "v2")
    res.json({
      statusCode: 200,
      data: userInfo
    })
  })

  app.listen(3000, () => {
    console.log("server: http://localhost:3000");
  }
)

})()