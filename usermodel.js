const mongoose = require('mongoose');
const usermodel = new mongoose.Schema({
    name:String,
    mrg:String,
    aft:String,
    eve:String,
    nig:String,
    time:String,
});

exports.users = mongoose.model("workoutdetail",usermodel,"workoutdetail");