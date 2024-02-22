const mongoose= require('mongoose')
const validator = require('validator')
const foodSchema = mongoose.Schema({
   categoryname:{
        type:String,
        required:true,
    },
    
   name:{
        type:String,
        required:true,
       
    },
    image:{
        type:String,
        required:true,
      
    },
    price:{
        type:String,
        required:true,
    }

})


// create a model

const foods = mongoose.model("foods",foodSchema)

// Export model
module.exports = foods