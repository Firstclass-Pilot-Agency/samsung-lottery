const express_async = require("express-async-handler");
const Admin = require('../model/adminModel')
const bcrypt = require('bcryptjs')

// Token = admintoken01



const authAdmin = express_async(async (req, res) => {
    const {token} = req.body


    // const salt = await bcrypt.genSalt(10);
    // const hashedtoken = await bcrypt.hash(token, salt);

    // Admin.create({
    //     admin : 'admin',
    //     token: hashedtoken,
    // });

    // res.status(200).json({
    //     created: 'created admin'
    // })

    const admin = 'admin'
    if (token) {
        const getAdmin = await Admin.findOne({admin})
        if (getAdmin) {
            if (await bcrypt.compare(token, getAdmin.token)) {
                res.status(200).json({
                    staus: "Authorized",
                    data: {
                        id: getAdmin._id
                    },
                    message: "Login success",
                });
            } else {
                res.status(400).json({
                    staus: "Not Authorized",
                    message: "Invalid Token",
                });
            }
        }
        return
    }

    res.status(400).json({
        staus: 'error',
        message: "Fill in all fields",
    });
});

module.exports = {
    authAdmin,
}