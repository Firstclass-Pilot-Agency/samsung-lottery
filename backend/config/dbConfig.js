const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_SRV);
        console.log(`MongoDB Connected`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

const connectDB_local = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_LOCAL);
        console.log(`MongoDB Connected Local`);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};
module.exports = { connectDB, connectDB_local }
