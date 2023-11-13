const mongoose = require("mongoose");

const dbconfig = async()=>{
    const mongoDBUri = process.env.mongodb_uri
    await mongoose.connect(mongoDBUri).then(()=>{
        console.log("database connected!:)")
    }).catch(err=>{
        console.log(`Some Problem Occurred:( ${err}`)
    })
}
module.exports = dbconfig;