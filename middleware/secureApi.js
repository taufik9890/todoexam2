const secureApi =(req,res,next)=>{
    if (req.headers.authorization == "c£=F~5*73F18"){
        next()
    }
    else{
        res.status(401)
        res.send('Invalid Api')
    }

}
module.exports = secureApi