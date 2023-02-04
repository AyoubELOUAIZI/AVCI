// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
// const PersonSchema = new Schema({
//     age: {
//         type: Number,
//         required: false
//     },
//     gender: {
//         type: String,
//         required: true
//     },
//     address: {
//         type: String,
//         required: false
//     },
//     QA: [{
//         question: {
//             type: String,
//             required: true
//         },
//         answer: {
//             type: String,
//             required: true
//         }
//     }],
// }, { timestamps: true });

// const Person = mongoose.model("Person", PersonSchema);

// module.exports = Person;
//-------------------------------------------------//
const mongoose = require("mongoose");

// Create a schema for a person
const personSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    },
    pic: {
        type: Number,
        required: false
    },
}, { timestaps: true }
);


// Create a schema for a question
const questionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    Person: [{ type: mongoose.Schema.Types.ObjectId, ref: "Person" }],

}, { timestaps: true });

// Create a model for the person schema
const Person = mongoose.model("Person", personSchema);

// Create a model for the question schema
const Question = mongoose.model("Question", questionSchema);

// Export the models to be used in other parts of the application
module.exports = { Person, Question };



