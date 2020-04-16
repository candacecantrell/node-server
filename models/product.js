
import mongoose from 'mongoose'

const Schema = mongoose.Schema

const vinylSchema  = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // imageUrl: {
    //     type: String,
    //     required: true
    // },
    artist: {
        type: String,
        required: true
    }
})

// const productSchema = new Schema({
//     title: String,
//     prict: Number,
//     description: String,
//     imageUrl: String,
//     artist: String
//   })

export const Vinyl = mongoose.model('Vinyl', vinylSchema)