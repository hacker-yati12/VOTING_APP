const mongoose = require('mongoose');

//Define the Person schema
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        require: true
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    address: {
        type: String,
        required: true
    }, 
    aadharCardNumber: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;