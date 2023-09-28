const User = require('../models/user');
const baseController = require('../../../utils/baseController');

exports.getAll = async (req, res) => {
    baseController.getAllRecords(req, res, User);
};

exports.create= async (req, res) => {
    baseController.createRecord(req, res, User);
};

exports.update = async (req, res) => {
    baseController.updateRecord(req, res, User);
};

exports.delete = async (req, res) => {
    baseController.deleteRecord(req, res, User);
};

exports.getDetail= async (req, res) => {
    baseController.getRecordById(req, res, User);
};