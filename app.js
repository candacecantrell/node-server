import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import { productRouter } from './routes/admin-route'
const app = express()
app.use('/admin', productRouter)
const port = 3000

app.use(
    bodyParser.urlencoded({
        limit: '5mb',
        extended: false
    }),
)

mongoose
.connect (
    `mongodb+srv://candace55:zxcv1234@cc-database-duvx8.mongodb.net/test?retryWrites=true&w=test?`
)
.then(result => {
    app.listen(port)
})
.catch(err => console.log(err))