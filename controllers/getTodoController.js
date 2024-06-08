const todoModel = require("../model/todoModel");


const getTodoController = async (req, res )=>{

    const {title, description} = req.body

    try {
        const getAllTodo = await  todoModel.find().select("title description -_id")
        res.send(getAllTodo)
        
    } catch (error) {
        console.log(error);
    }

}

module.exports = getTodoController