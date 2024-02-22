const mongoose= require('mongoose')
const validator = require('validator')
const userSchema = mongoose.Schema({
    fname:{
        type:String,
        required:true,
        trim:true
    },
    
    mobile:{
        type:String,
        required:true,
        unique:true,
        minlength:10,
        maxlength:10
    },
    email:{
        type:String,
        required:true,
       unique:true,
       validator(value){
        if(!validator.isEmail(value)){
            throw Error("Invalid Email")
        }
       }
    },
    address:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now
    },
    myorders:{
        type:Array,
        required:true,
    },
    cart:{
        type:Array,
        required:true,
    }

})


// create a model

const users = mongoose.model("users",userSchema)

// Export model
module.exports = users