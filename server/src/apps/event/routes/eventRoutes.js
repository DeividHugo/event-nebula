const express = require('express');
const eventController = require('../controllers/eventControllers');

const modelName = 'event'
const router = express.Router();

router.get(`/${modelName}/list/`, eventController.getAll);

router.post(`/${modelName}/create/`, eventController.create);

router.put(`/${modelName}/update/:id`, eventController.update);

router.delete(`/${modelName}/delete/:id`, eventController.delete);

router.get(`/${modelName}/detail/:id`, eventController.getDetail);

module.exports = router;
