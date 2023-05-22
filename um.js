const mongoose = require('mongoose');
const usermodel = new mongoose.Schema({
    
    name:String,
    pass:String,
   
});
usermodel.index({name:1,pass:1},{unique:true})

exports.cust = mongoose.model("cust",usermodel,"cust");