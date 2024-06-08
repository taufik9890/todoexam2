const userTodo = require('../model/userModel')
const otpVerificationController = async (req, res)=>{

    const {email, otp} = req.body

    const findUser = await userTodo.findOne({email: email})

    console.log(findUser);

    if(!findUser.emailVerified && findUser.otp == otp){
        res.send('Milse')
        await userTodo.findOneAndUpdate({email: email}, {otp: '', emailVerified: true})
    }
    else{
        res.send('Mile nai')
    }





}


module.exports = otpVerificationController