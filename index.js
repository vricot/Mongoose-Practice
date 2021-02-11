const mongoose = require('mongoose');
//Connect Mongoose to MongoDB
mongoose.connect('mongodb://localhost:27017/movieApp', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("CONNECTION OPEN!!!")
})
.catch(err => {
    console.log("OH NO ERROR!!!")
    console.log(err)
})

//Make a Schema that blueprints your model structure
 
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    rating: String
});

//Set your model variable

const Movie = mongoose.model('Movie', movieSchema)

//const amadeus = new Movie({title: 'Amadeus', year: 1986, score: 9.2, rating: 'R'})

//Returns a promise, so you don't need to call save:

Movie.insertMany([
    {title: 'Pretty In Pink', year: 1986, score: 6.8, rating: 'PG-13'},
    {title: 'The Breakfast Club', year: 1985, score: 7.8, rating: 'R'},
    {title: 'Paprika', year: 2006, score: 7.7, rating: 'R'},
    {title: 'Princess Mononoke', year: 1997, score: 8.4, rating: 'PG-13'},
    {title: 'Perfect Blue', year: 1997, score: 8.0, rating: 'R'}
])
.then(data => {
    console.log("IT WORKED!!!")
    console.log(data)
})


