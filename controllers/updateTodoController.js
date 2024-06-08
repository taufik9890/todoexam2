const todoModel = require('../model/todoModel')
const updateTodoController = async (req, res)=>{

    try{
        const updateTodo = await todoModel.findByIdAndUpdate(req.params.id, req.body, {new: true})
        await updateTodo.save()
        res.send(updateTodo)

    }
    catch(error){
        console.log(error);
    }

}

module.exports = updateTodoController