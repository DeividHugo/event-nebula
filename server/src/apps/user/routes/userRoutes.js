const express = require('express');
const userController = require('../controllers/userControllers');

const modelName = 'user'
const router = express.Router();

router.get(`/${modelName}/list/`, userController.getAll);

router.post(`/${modelName}/create/`, userController.create);

router.put(`/${modelName}/update/:id`, userController.update);

router.delete(`/${modelName}/delete/:id`, userController.delete);

router.get(`/${modelName}/detail/:id`, userController.getDetail);

module.exports = router;
