const userTodo = require('../model/userModel')
const bcrypt = require('bcrypt');
const nodemailer = require("nodemailer");
const otpGenerator = require('otp-generator')


const registrationController = async (req, res) => {
  const {
    name,
    email,
    password
  } = req.body

  console.log(name, email, password);
  if (!name || !email || !password) {
    return res.send({
      error: 'Please fill up all the fields'
    })
  }
  if (password && password.length < 8) {
    return res.send({
      error: 'Password is too small'
    })
  }
  console.log('database will recieve data');


  let existingUser = await userTodo.find({
    email: email
  })


  if (existingUser.length > 0) {
    res.send({
      error: `${email} already in use`
    })
  } else {

    

    let otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false
    });
    console.log(otp);

    bcrypt.hash(password, 10, async function  (err, hash) {
      let user = new userTodo({
        name: name,
        email: email,
        password: hash,
        otp: otp
      })
      user.save()
      



      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: "taufik9890@gmail.com",
          pass: "pkzr amph zvji faye",
        },
      });


      const info = await transporter.sendMail({
        from: `"MERNIAN"`, // sender address
        to: email, // list of receivers
        subject: "This is your Verification", // Subject line
        text: "This is your Verification",
        // html: `Here is your <a href="http://localhost:5173/emailverification/${token}">CLick here</a>`,
        html: `here is your ${otp}`
      });

      res.send({
        name: user.name,
        email: user.email,
        role: user.role
      })
      // console.log(hash);


    });





  }


}

module.exports = registrationController