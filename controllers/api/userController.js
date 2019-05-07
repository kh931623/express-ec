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
    try {
        const data = req.body;
        const user = User.findOne({
            username: data.username,
            password: data.password
        });

        if (!user) {
            throw new Error('User Name or Password is wrong!');
        }

        res.json(responseService.createSuccessResponse({
            user
        }));
    } catch (error) {
        res.json(responseService.createErrorResponse(error.message));
    }
}

async function createUser(req, res) {
    try {
        const newUser = new User(req.body);
        await newUser.save();

        // write user info. into session (without password)
        const userInfo = Object.assign({}, newUser.toObject());
        delete userInfo.password;
        delete userInfo.passwordConfirmation;
        req.session.user = userInfo;

        res.json(responseService.createSuccessResponse({
            user: userInfo
        }));
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
