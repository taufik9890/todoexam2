const userTodo = require('../model/userModel')
const bcrypt = require('bcrypt');

const loginController = async (req, res, next)=>{

    const {email, password} = req.body

    const findUser = await userTodo.findOne({email: email})

    console.log(findUser);
    if(findUser){

        bcrypt.compare(password, findUser.password, function(err, result) {

            console.log(result);
            if(result){
                res.send({success: "login successful"})
                next()
            }
            else{
                res.send({error: "Credential not matched"})
            }
            // result == true
        });
    }
    else{
        res.send("User not found")
    }




}


module.exports = loginController