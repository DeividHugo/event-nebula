const express = require('express');
const userController = require('../controllers/userControllers');
const authMiddleware = require('../../auth/middlewares/authMiddleware');

const modelName = 'user'
const router = express.Router();

router.get(`/${modelName}/list/`, authMiddleware, userController.getAll);

router.post(`/${modelName}/create/`, authMiddleware, userController.create);

router.put(`/${modelName}/update/:id`, authMiddleware, userController.update);

router.delete(`/${modelName}/delete/:id`, authMiddleware, userController.delete);

router.get(`/${modelName}/detail/:id`, authMiddleware, userController.getDetail);

module.exports = router;
