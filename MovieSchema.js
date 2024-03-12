const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/MovieKalpesh')
const movieSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    releaseDate: {
        type: Date
    },
    genres: {
        type: String
    },
    rating: {
        type: String
    },
    movieImage: {
        type: String
    },
})
const movieModel = mongoose.model('MOVIES', movieSchema)
module.exports = { movieModel } 