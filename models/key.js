const mongoose = require('mongoose')

const key = new mongoose.Schema({
    key: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    }
});



module.exports = new mongoose.model("keys", key)