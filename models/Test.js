const mongoose = require('mongoose');

const TestSchema = mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number
    }
}, {
    collection: 'collection0'
});

module.exports = mongoose.model('Test', TestSchema);