const {Schema ,model,models} = require("mongoose");

const UserSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    imgurl:{
        type:String,
    },
    password:{
        type:String,
        required:true
    }
}) 
const User = models.user || model("user",UserSchema);
module.exports = User;