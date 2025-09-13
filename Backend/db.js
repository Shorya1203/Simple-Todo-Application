const mongoose = require('mongoose') ; 

// Todo {
//     title: String,
//     description: String,
//     completed: Boolean
// }

 
mongoose.connect("mongodb+srv://<UserName>:<Password>@<ClusterAddress>/todos");

const todoSchema = mongoose.Schema({
    title: String, 
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema) ; 

module.exports = {
    todo
}



