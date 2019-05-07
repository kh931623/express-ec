const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
        default: 'normal'
    },
    created: {
        type: Date,
        default: Date.now,
        required: true
    },
    updated: {
        type: Date,
        default: Date.now,
        required: true
    }
}, {
    collection: 'users'
});

UserSchema
    .virtual('name')
    .get(() => this.firstName + ' ' + this.lastName);

UserSchema
    .virtual('url')
    .get(() => `/users/${this._id}`);

module.exports = mongoose.model('User', UserSchema);