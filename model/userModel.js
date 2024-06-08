const mongoose = require('mongoose')
const {Schema} = mongoose



const userTodoSchema = new Schema({
    name: String,
    email: String,
    password: String,
    emailVerified: {
        type: Boolean,
        default: false
    },
    role: {
        type: String,
        enum: ["todoMan"],
        default: 'todoMan'
    },
    otp: String
})

module.exports = mongoose.model("todoUser", userTodoSchema)