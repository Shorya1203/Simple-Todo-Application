const mongoose = require('mongoose') ; 

// Todo {
//     title: String,
//     description: String,
//     completed: Boolean
// }

 
mongoose.connect("mongodb+srv://<username>:<password>@<cluster>/todos");

const todoSchema = mongoose.Schema({
    title: String, 
    description: String,
    completed: boolean
})

const todo = mongoose.model('todos', todoSchema) ; 

module.exports({
    todo
})



