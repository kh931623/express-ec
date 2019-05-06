const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    firstName: {
        type: String,
        require: true,
    },
    lastName: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        require: true,
        default: 'normal'
    },
    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date,
        default: Date.now
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