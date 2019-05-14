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
    
            req.session.user = user;
            res.json(responseService.createSuccessResponse({
                user: user.toObject()
            }));
        } catch (error) {
            res.json(responseService.createErrorResponse(error.message));
        }
    },
    
    fetchUserInfo(req, res) {
        req.session.touch();
        res.json(responseService.createSuccessResponse({
            user: req.session.user || null
        }));
    },

    logout(req, res) {
        req.session.user = null;
        res.json(responseService.createSuccessResponse());
    },

    updateShoppingCart(req, res) {
        req.session.shoppingCart = req.body;
        res.json(responseService.createSuccessResponse());
    },

    fetchShoppingCart(req, res) {
        res.json(responseService.createSuccessResponse({
            shoppingCart: req.session.shoppingCart
        }));
    },

    increaseQuantity(req, res) {
        req.session.shoppingCart[req.body.index].quantity++;
        res.json(responseService.createSuccessResponse());
    },

    decreaseQuantity(req, res) {
        req.session.shoppingCart[req.body.index].quantity--;
        res.json(responseService.createSuccessResponse());
    }
}