const User = require('../../models/User.js');

async function fetchUserList(req, res) {
    try {
        const users = await User.find().exec();
        res.json(users);
    } catch (error) {
        res.json([]);
    }
}

function fetchUser(req, res) {
    res.json({
        id: req.params.id,
        msg: 'hello'
    });
}

function createUser(req, res) {
    const newUser = new User(req.body);

}

function updateUser(req, res) {
    
}

function deleteUser(req, res) {

}

module.exports = {
    fetchUserList,
    fetchUser,
    createUser,
    updateUser,
    deleteUser
}