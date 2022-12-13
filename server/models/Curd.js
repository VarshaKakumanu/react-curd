const mongoose = require('mongoose')

const CrudSchema = new mongoose.Schema({
    col1: {
        type: String,
        Required : true,
    },
    col2: {
        type: Number,
        Required : true,
    },
});

const  crud = mongoose.model("crud", CrudSchema)
module.exports = crud