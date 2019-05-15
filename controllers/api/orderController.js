const Order = require('../../models/Order.js');
const Product = require('../../models/Product.js');
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
            const { products } = req.body;
            const updateParameters = products.map(product => {
                return {
                    condition: {
                        _id: product._id
                    },
                    data: {
                        stock: product.stock - product.quantity
                    }
                }
            });
            await Promise.all([
                order.save(),
                ...updateParameters.map(parameters => {
                    return Product.findOneAndUpdate(parameters.condition, parameters.data).exec();
                })
            ])

            res.json(responseService.createSuccessResponse());
        } catch (error) {
            res.json(responseService.createErrorResponse(error.message));
        }
    }
}