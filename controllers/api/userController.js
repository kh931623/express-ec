const User = require('../../models/User.js');
const responseService = require('../../services/responseService.js');

async function fetchUserList(req, res) {
    try {
        const users = await User.find(null, {
            password: 0
        }).exec();
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

async function createUser(req, res) {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.json(responseService.createSuccessResponse());
    } catch (error) {
        res.json(responseService.createErrorResponse(error.message));
    }
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
};
