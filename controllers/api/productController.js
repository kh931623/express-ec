const Product = require('../../models/Product.js');
const ProductSchema = Product.schema;
const responseService = require('../../services/responseService.js');

module.exports = {
    async fetchProductList(req, res) {
        try {
            const { query } = req;
            const transformedConditions = Object.keys(query).filter(key => typeof query[key] === 'string').reduce((prev, key) => {
                prev[key] = new RegExp(query[key], 'i');
                return prev;
            }, {});
            const finalConditions = Object.assign({}, query, transformedConditions);
            const products = await Product.find().populate('category').where(finalConditions).exec();
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