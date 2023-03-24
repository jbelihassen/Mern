// Import mongoose to build a model ===========>

const mongoose = require('mongoose');

// The Schema

const AutherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Title must be present"],
        minLength: [3, "Title must be more than 3 characters"]
    }
}, { timestamps: true })


// Create The Schema and export it ============>

const Auther = mongoose.model('Auther', AutherSchema);


// Export the mongoose model =============>

module.exports = Auther;