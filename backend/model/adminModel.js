const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema(
    {
        admin: {
            type: String,
            require: true,
        },
        token: {
            type: String,
            require: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Admin", AdminSchema);
