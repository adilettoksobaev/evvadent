const {Schema, model} = require('mongoose');

const schema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    createDate: {type: Date, required: true},
    text: {type: String, required: true},
});

module.exports = model('Review', schema);