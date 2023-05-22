const mongoose = require('mongoose');
const usermodel3 = new mongoose.Schema({
    
    name:String,
    pno:String,
    email:String,
    add:String,
    h1:String,
    w1:String,
   // dob:String,
   // h:String,

});

exports.users3 = mongoose.model("register",usermodel3,"register");