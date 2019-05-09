const Category = require('../../models/Category.js');
const responseService = require('../../services/responseService.js');

module.exports = {
    async fetchCategoryList (req, res) {
        try {
            const categories = await Category.find().exec();
            res.json(responseService.createSuccessResponse({
                categories
            }));
        } catch (error) {
            res.json(responseService.createErrorResponse(error.message));
        }
    },

    async createCategory(req, res) {
        try {
            const category = new Category(req.body);
            await category.save();

            res.json(responseService.createSuccessResponse());
        } catch (error) {
            res.json(responseService.createErrorResponse(error.message));
        }
    },

    async deleteCategory(req, res) {
        try {
            await Category.findOneAndDelete({
                _id: req.params.id
            }).exec();

            res.json(responseService.createSuccessResponse());
        } catch (error) {
            res.json(responseService.createErrorResponse(error.message));
        }
    },

    async updateCategory(req, res) {
        try {
            await Category.findOneAndUpdate({
                _id: req.params.id
            }, req.body).exec();

            res.json(responseService.createSuccessResponse());
        } catch (error) {
            res.json(responseService.createErrorResponse(error.message));
        }
    }
}