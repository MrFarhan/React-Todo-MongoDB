const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: String,
    // complete: {
    //     type: Boolean,
    //     default: false
    // }
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo;
