const { type } = require('express/lib/response');
const { Schema,model } = require('mongoose');

const LinkSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

module.exports = model('Link', LinkSchema);