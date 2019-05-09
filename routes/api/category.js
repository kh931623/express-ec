const express = require('express');
const router = express.Router();
const categoryController = require('../../controllers/api/categoryController.js');

router.get('/', categoryController.fetchCategoryList);
router.post('/', categoryController.createCategory);
router.delete('/:id', categoryController.deleteCategory);
router.put('/:id', categoryController.updateCategory);

module.exports = router;