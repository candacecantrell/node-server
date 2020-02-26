import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

import { productRouter } from './routes/admin-route'

//import { getDB } from './util/database'
const app = express()

app.use(
    bodyParser.urlencoded({
      limit: '5mb',
      extended: false,
    })
  )

app.use('/shop', productRouter)

app.use('/api', function(req, res, next) {
    //console.log(req)
    console.log(`A new request was received at ${new Date().toLocaleString()}`)
    res.send(`Thanks for hitting my api`)
    next()
  })

let port = process.env.PORT
if (port == null || port == '') {
  port = 3000
} 

mongoose.connect(
    `mongodb+srv://candace55:zxcv1234@cc-database-duvx8.mongodb.net/test?retryWrites=true&w=majority`,
    { useUnifiedTopology: true }
)
.then(result => {
    app.listen(port, () => {
        console.log(
          `Server is running on port ${port}`
        )
    })
})
.catch(err => console.log(err))
