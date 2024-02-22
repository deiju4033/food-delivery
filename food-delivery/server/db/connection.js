const mongoose = require('mongoose')

const connectionString = process.env.connectionString
mongoose.connect (connectionString).then(
    () => {

    console.log("MongoDB Atlas connected with foodDelivery");


}).catch((err) => {
    console.log("MongoDB connection failed!!", err);
})