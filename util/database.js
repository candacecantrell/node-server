
import mongodb from 'mongodb'
const MongoClient = mongodb.MongoClient

let _db

export const mongoConnect = (callback) => {
MongoClient.connect('mongodb+srv://candace55:zxcv1234@cc-database-duvx8.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(client => {
    console.log('Connected')
    _db = client.db()
    callback()
}).catch(err => {
    console.log(err)
    throw err
})
}

export const getDb = () => {
    if (_db) {
        return _db
    }
    throw 'No database found!'
}