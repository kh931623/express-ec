const User = require('../../models/User.js');
const responseService = require('../../services/responseService.js');

module.exports = {
    async login(req, res) {
        try {
            const data = req.body;
            const user = await User.findOne({
                username: data.username,
                password: data.password
            }, {
                password: 0,
                passwordConfirmation: 0
            }).exec();
    
            if (!user) {
                throw new Error('User Name or Password is wrong!');
            }
    
            res.json(responseService.createSuccessResponse({
                user: user.toObject()
            }));
        } catch (error) {
            res.json(responseService.createErrorResponse(error.message));
        }
    }
}