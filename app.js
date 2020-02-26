import express from 'express'
import bodyParser from 'body-parser'

import { productRouter } from './routes/admin-route'

import mongoose from 'mongoose'

//import { getDB } from './util/database'
const app = express()

app.use(
    bodyParser.urlencoded({
        limit: '5mb',
        extended: false
    }),
)
app.use('/shop', productRouter)

let port = process.env.PORT
if (port == null || port == '') {
  port = 3000
} 

mongoose
.connect (
    `mongodb+srv://candace55:zxcv1234@cc-database-duvx8.mongodb.net/test?retryWrites=true&w=majority`
)
.then(result => {
    app.listen(port, () => {
        console.log('server is listening')
    })
})
.catch(err => console.log(err))