const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    products: {
        type: Array,
        required: true
    },
    totalAmount: {
        type: Number,
        required: true
    }
}, {
    collection: 'orders'
});

module.exports = mongoose.model('Order', OrderSchema);