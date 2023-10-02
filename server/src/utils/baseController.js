exports.getAllRecords = async (req, res, Model) => {
    try {
        const records = await Model.findAll();
        return res.status(200).json(records);
    } catch (error) {
        console.error('Error fetching records:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

exports.getRecordById = async (req, res, Model, recordData = null) => {
    const { id } = recordData || req.params;
    try {
        const record = await Model.findByPk(id);
        if (!record) {
            return res.status(404).json({ error: 'Record not found' });
        } else {
            return res.status(200).json(record);
        }
    } catch (error) {
        console.error('Error fetching record:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

exports.createRecord = async (req, res, Model, recordData = null) => {
    try {
        const newRecord = await Model.create(recordData || req.body);
        return res.status(201).json(newRecord);
    } catch (error) {
        console.error('Error creating record:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

exports.updateRecord = async (req, res, Model, recordData = null) => {
    const { id } = recordData || req.params;
    try {
        const [updatedRows] = await Model.update(req.body, { where: { id } });
        if (updatedRows === 0) {
            return res.status(404).json({ error: 'Record not found' });
        } else {
            return res.status(200).json({ message: 'Record updated successfully' });
        }
    } catch (error) {
        console.error('Error updating record:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

exports.deleteRecord = async (req, res, Model, recordData = null) => {
    const { id } = recordData || req.params;
    try {
        const deletedRowCount = await Model.destroy({ where: { id } });
        if (deletedRowCount === 0) {
            return res.status(404).json({ error: 'Record not found' });
        } else {
            return res.status(204).json();
        }
    } catch (error) {
        console.error('Error deleting record:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
