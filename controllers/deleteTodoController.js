
const todoModel = require('../model/todoModel')

const deleteTodoController = async (req, res)=>{

    try{
        const deleteTodo = await todoModel.findByIdAndDelete(req.params.id, req.body)


        deleteTodo.save()
        res.send(deleteTodo)

    }
    catch(error){
        console.log(error);
    }
}


module.exports = deleteTodoController 