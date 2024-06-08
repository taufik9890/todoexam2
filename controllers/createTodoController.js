const todoModel = require("../model/todoModel");


const createTodoController = async (req, res )=>{

    const {title, description} = req.body

    try {
        const todoItem = new todoModel({
            title,
            description
        })

        await todoItem.save()
        res.status(200).send(todoItem)

        
    } catch (error) {
        console.log(error);
    }

}

module.exports = createTodoController