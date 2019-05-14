const Order = require('../../models/Order.js');
const responseService = require('../../services/responseService.js');

module.exports = {
    async fetchOrderList(req, res) {
        try {
            const orders = await Order.find(req.query).exec();
            res.json(responseService.createSuccessResponse({
                orders
            }));
        } catch (error) {
            res.json(responseService.createErrorResponse(error.message));
        }
    },

    async createOrder(req, res) {
        try {
            const order = new Order(req.body);
            await order.save();

            res.json(responseService.createSuccessResponse());
        } catch (error) {
            res.json(responseService.createErrorResponse(error.message));
        }
    }
}