const mongoose = require('mongoose') ; 

// Todo {
//     title: String,
//     description: String,
//     completed: Boolean
// }

 
mongoose.connect("mongodb+srv://Shorya1203:ShoryaSharma@shoryacluster.eiyaa3j.mongodb.net/todos");

const todoSchema = mongoose.Schema({
    title: String, 
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema) ; 

module.exports = {
    todo
}



