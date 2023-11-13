const bcrypt = require("bcrypt");
const User = require("/Users/amans/Desktop/temp/server/Models/users");
var jwt = require('jsonwebtoken');
const SignIn = async (req, res) => {
    try {
        User.findOne({ email: req.body.email }).then(response => {
            if (response === null) {
                res.status(201).json({
                    message: "Not registered"
                });
            } else {
                bcrypt.compare(req.body.password, response.password, (err, result) => {
                    if (result !== true) {
                        res.status(201).json({
                            message: "Incorrect Password*"
                        });
                    } else {
                        const seckey = process.env.secretKey;
                        const token = jwt.sign({email:req.body.email},seckey,{expiresIn:'24h'})
                        res.status(200).json({
                            message: "Authenticated Successfully!",
                            token:token
                        });
                    }
                });
            }
        });
    } catch (err) {
        console.log(`Catched error: ${err}`);
        res.status(500).json({
            message: "Something went wrong"
        });
    }
};

module.exports = SignIn;
