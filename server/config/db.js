// MongoDB connection, Plaid setup, etc.
const mongoose = require("mongoose");
const connectDB = async () => {
    mongoose.connection.on('connected',() => {
        console.log("DB Connected");
    })
    await mongoose.connect(`${process.env.MONGODB_URI}`)
}
module.exports = connectDB;