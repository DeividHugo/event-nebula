const Subscription = require('../models/subscription');
const baseController = require('../../../utils/baseController');

exports.getAll = async (req, res) => {
    baseController.getAllRecords(req, res, Event);
};

exports.create= async (req, res) => {
    baseController.createRecord(req, res, Event);
};

exports.update = async (req, res) => {
    baseController.updateRecord(req, res, Event);
};

exports.delete = async (req, res) => {
    baseController.deleteRecord(req, res, Event);
};

exports.getDetail= async (req, res) => {
    baseController.getRecordById(req, res, Event);
};