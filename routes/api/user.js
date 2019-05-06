const express = require('express');
const router = express.Router();
const userController = require('../../controllers/api/userController.js');

router.get('/', userController.fetchUserList);
router.get('/:id', userController.fetchUser);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;