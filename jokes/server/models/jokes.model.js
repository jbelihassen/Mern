const mongoose = require('mongoose');


// Create Instance of the Schema

const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String
}, {timestamps : true})


// Create Collection (table)

const jokes = mongoose.model('joke', JokeSchema);


// Export the mongoose model

module.exports = jokes;








