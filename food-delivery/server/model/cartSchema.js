const mongoose = require('mongoose')

const cartschema = mongoose.Schema({
    
    name:{
        type:String
    }, 
    fname:{
        type:String
    }, 
    mobile:{
        type:String
    },
    quantity:{
        type:String
    },
    total:{
        type:String
    } ,
    date:{
        type:Date,
        default:Date.now
    }        

})

const orders = mongoose.model('orders',cartschema)
module.exports = orders