const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(":::ENTER THE URI:::", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("MongoDb connected");
    }
    catch (err) {
        console.log(err);
        process.exit();
    }
}
module.exports = connectDB;