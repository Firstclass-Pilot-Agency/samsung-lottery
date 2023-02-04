const express_async = require('express-async-handler')
const User = require("../model/userModel");


// get all Users
const getUsers = express_async(async (req, res) => {
    const users = await User.find()

    res.status(200).json({
        message: "Geting User list",
        userList: users,
        status: "valid 200",
    });
})

// add a User
const addUser = express_async(async (req, res) => {
    const { name, phoneNumber, lotteryId } = req.body;

    if (!name || !phoneNumber || !lotteryId ) {
        res.status(400).json({
            message: 'Missing Fields found',
            status: "error"
        })
    }

    const lotteryUser = await User.create({
        name,
        phoneNumber,
        lotteryId,
        winner: false,
    })

    if (lotteryUser) {
        res.status(201).json({
            message: `${name} add to database`,
            data: {
                name: lotteryUser.name,
                phoneNumber: lotteryUser.phoneNumber,
                lotteryId: lotteryUser.lotteryId,
                winner: false,
            },
            status: "created User",
        });
    }
});

// add Winner
const addWinner = express_async(async (req, res) => {
    const { id } = req.body;

    const winner = await User.findByIdAndUpdate(id, {winner: true})
    if (winner) {
        res.status(200).json({
            message: "Added to winning Libst",
            guns: "big ones",
            data: winner,
            winner: winner.winner,
            id: winner._id,
            status: "success",
        });
    }
});


// delete a User pass
const deleteUser = express_async(async (req, res) => {
    const { id } = req.body

    if (!id) {
        res.status(400).json({
            message: "no id",
            status:'error'
        });
        return;
    }

    const delUser = await User.findByIdAndDelete(id)
    if (delUser) {
        res.status(200).json({
            message: "Deleted User id " + id,
            status: "success",
        });
    }
});

const checkLot = express_async(async (req, res) => { 
    const { phoneNumber, lotteryId } = req.body;


    if (phoneNumber && lotteryId) {
            const lot = await User.findOne({ lotteryId });
            if (lot && lot.phoneNumber === phoneNumber) {
                res.status(200).json({
                    message: "Lottery Id Found",
                    data: lot,
                    status: "success",
                });
            } else {
                res.status(400).json({
                    message: "Lottery Id or PhoneNumber Not Found",
                    status: "error",
                });
            }
        return
    }

    res.status(400).json({
        message: "Data Not Found",
        status: "error",
    });
})

module.exports = {
    addUser,
    getUsers,
    addWinner,
    deleteUser,
    checkLot,
};