const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const PersonSchema = new Schema({
    age: {
        type: Number,
        required: false
    },
    gender: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: false
    },
    QA: [{
        question: {
            type: String,
            required: true
        },
        answer: {
            type: String,
            required: true
        }
    }],
}, { timestamps: true });

const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;
