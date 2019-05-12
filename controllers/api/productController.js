const Product = require('../../models/Product.js');
const responseService = require('../../services/responseService.js');

module.exports = {
    async fetchProductList(req, res) {
        try {
            const products = await Product.find(req.query).populate('category').exec();
            res.json(responseService.createSuccessResponse({
                products
            }));
        } catch (error) {
            res.json(responseService.createErrorResponse(error.message));
        }
    },

    async createProduct(req, res) {
        try {
            const product = new Product(req.body);
            await product.save();

            res.json(responseService.createSuccessResponse());
        } catch (error) {
            res.json(responseService.createErrorResponse(error.message));
        }
    },

    async deleteProduct(req, res) {
        try {
            await Product.findOneAndDelete({
                _id: req.params.id
            }).exec();

            res.json(responseService.createSuccessResponse());
        } catch (error) {
            res.json(responseService.createErrorResponse(error.message));
        }
    },

    async updateProduct(req, res) {
        try {
            await Product.findOneAndUpdate({
                _id: req.params.id
            }, req.body).exec();

            res.json(responseService.createSuccessResponse());
        } catch (error) {
            res.json(responseService.createErrorResponse(error.message));
        }
    }
}