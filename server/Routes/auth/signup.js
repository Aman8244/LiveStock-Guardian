const bcrypt = require("bcrypt");
const User = require("/Users/amans/Desktop/temp/server/Models/users")
const saltRounds = 10
var jwt = require('jsonwebtoken');

const SignUp = async (req, res) => {
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        if (err) {
            res.status(201).json({
                message: "something unexpected happened"
            })
        }
        new User({
            name: req.body.name,
            password: hash,
            email: req.body.email,
            imgurl: req.body.imgurl
        }).save();
        const seckey = process.env.secretKey;
        const token = jwt.sign({email:req.body.email},seckey,{expiresIn:'24h'})
        res.status(200).json({
            message: "Registered Successfully!",
            token:token
        });
    })
}
module.exports = SignUp;