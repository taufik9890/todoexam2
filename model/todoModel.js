const mongoose = require('mongoose')
const {Schema} = mongoose


const todoSchema = new Schema({
    title: String,
    description: String 

})

module.exports = mongoose.model('todoItem', todoSchema)