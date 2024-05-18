const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    }
}, {
    timestamps: true,
});


const userid = mongoose.model("userDetails", userSchema);



module.exports = userid;