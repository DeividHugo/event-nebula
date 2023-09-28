// event/routes/eventRoutes.js

const express = require('express');
const subscriptionController = require('../controllers/subscriptionController');

const modelName = 'subscription'
const router = express.Router();

router.get(`${modelName}/list/`, subscriptionController.getAll);

router.post(`${modelName}/create/`, subscriptionController.create);

router.put(`${modelName}/update/:id`, subscriptionController.update);

router.delete(`${modelName}/delete/:id`, subscriptionController.delete);

router.get(`${modelName}/detail/:id`, subscriptionController.getDetail);

module.exports = router;
