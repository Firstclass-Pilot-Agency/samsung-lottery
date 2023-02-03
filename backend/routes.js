// handle READ, CREATE DELETE, UPDATE
const express = require('express')
const { addUser, getUsers, deleteUser, addWinner, checkLot } = require('./controllers/users');
const { authAdmin } = require('./controllers/admin');

const router = express.Router()

// Get Data All Data
router.get('/users', getUsers);
router.post("/users/new", addUser);
router.put("/users/addwinner", addWinner);
router.delete("/users/del", deleteUser);
router.post("/users/checkLot", checkLot);

router.post('/admin', authAdmin)

module.exports = router