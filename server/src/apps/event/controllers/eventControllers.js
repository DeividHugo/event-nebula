const Event = require('../models/event');
const baseController = require('../../../utils/baseController');

exports.modelName = Event.name
Model = Event

exports.getAll = async (req, res) => {
    baseController.getAllRecords(req, res, Model);
};

exports.create= async (req, res) => {
    baseController.createRecord(req, res, Model);
};

exports.update = async (req, res) => {
    baseController.updateRecord(req, res, Model);
};

exports.delete = async (req, res) => {
    baseController.deleteRecord(req, res, Model);
};

exports.getDetail= async (req, res) => {
    baseController.getRecordById(req, res, Model);
};