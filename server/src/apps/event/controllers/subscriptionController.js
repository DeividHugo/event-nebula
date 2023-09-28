const Subscription = require('../models/subscription');
const baseController = require('../../../utils/baseController');

exports.modelName = Subscription.name

exports.getAll = async (req, res) => {
    baseController.getAllRecords(req, res, Subscription);
};

exports.create= async (req, res) => {
    baseController.createRecord(req, res, Subscription);
};

exports.update = async (req, res) => {
    baseController.updateRecord(req, res, Subscription);
};

exports.delete = async (req, res) => {
    baseController.deleteRecord(req, res, Subscription);
};

exports.getDetail= async (req, res) => {
    baseController.getRecordById(req, res, Subscription);
};