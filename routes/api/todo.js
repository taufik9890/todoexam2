const express = require('express')
const createTodoController = require('../../controllers/createTodoController')
const secureApi = require('../../middleware/secureApi')
const getTodoController = require('../../controllers/getTodoController')
const updateTodoController = require('../../controllers/updateTodoController')
const deleteTodoController = require('../../controllers/deleteTodoController')
const route = express.Router()

route.post('/createtodo',  createTodoController)
route.get('/gettodo',  getTodoController)
route.put('/updatetodo/:id',  updateTodoController)
route.delete('/deletetodo/:id',  deleteTodoController)



module.exports = route


