import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import { productRouter } from './routes/admin-route'

const app = express()

app.use(
    bodyParser.urlencoded({
      limit: '5mb',
      extended: false,
    })
  ),
// app.use(bodyParser.json());
//   app.use(cors({
//     origin: '*'
//   }))

app.use('/shop', productRouter)

let port = process.env.PORT
if (port == null || port == '') {
  port = 3000
} 

mongoose.connect(
    `mongodb+srv://candace55:zxcv1234@cc-database-duvx8.mongodb.net/shop?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }
)
.then(result => {
    app.listen(port, () => {
        console.log(
          `Server is running on port ${port}`
        )
    })
})
.catch(err => console.log(err))
