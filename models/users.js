const mongoose = require('mongoose')

const users = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    expiretime: {
        type: String,
        required: true
    },
    key:{
        type: String,
        required: true
    },
    userid: {
        type: String,
        required: true
    }
});



module.exports = new mongoose.model("users", users)