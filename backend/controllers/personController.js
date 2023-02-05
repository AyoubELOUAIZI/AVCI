const Person = require('../models/personModel');
const mongoose = require('mongoose');
// const PersonModel = mongoose.model("Person", PersonSchema);


//1--Get all persons
const getAllpersons = async (req, res) => {
    try {
        // Attempt to fetch all person documents from the database and sort them by the createdAt field in descending order
        const persons = await Person.find().sort({ createdAt: -1 });
        // If the fetch is successful, return a response with a 200 status code and the persons as the body
        res.status(200).json(persons);
    } catch (error) {
        // If an error occurs during the process, return a response with a 400 status code and the error message
        res.status(400).json({ error: error.message });
    }
};


//2--Get single person
const getperson = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: 'Invalid person id' });
    }
    try {
        const person = await Person.findById(req.params.id);
        if (!person) return res.status(404).json({ error: 'person not found' });
        res.status(200).json(person);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};



//-------------------------------------------------------------------------------------//

//3--post a new person
// const createPerson = async (req, res) => {
//     const { age, gender, address, QA } = req.body;

//     try {
//         const person = await PersonModel.create({ age, gender, address, QA });
//         res.status(200).json(person);
//     } catch (error) {
//         res.status(400).json({ error: error.message });
//     }
// }
//-------------------------------------------------------------------------------------//

const createPerson = async (req, res) => {
    console.log(req.body)
    const { age, gender, address } = req.body;
    try {
        console.log("------------------------------------------");
        const person = await Person.create({ age, gender, address });
        console.log(person);
        res.status(200).json(person);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}
//-------------------------------------------------------------------------------------//

//4-- Delete person from the database
const deleteperson = async (req, res) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ error: 'Invalid person id' });
    }
    try {
        const person = await Person.findByIdAndDelete(req.params.id);
        if (!person) return res.status(404).json({ error: 'person not found' });
        res.status(200).json({ message: 'person deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


//5-- Update person in the database
const updateperson = async (req, res) => {
    // Check if the person id passed in the request is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        // If it's not a valid id, return a response with a 400 status code and an error message
        return res.status(400).json({ error: 'Invalid person id' });
    }
    try {
        // Attempt to find and update the person document in the database using the id and data from the request
        const person = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });
        // If the person is not found, return a response with a 404 status code and an error message
        if (!person) return res.status(404).json({ error: 'person not found' });
        // If the update is successful, return a response with a 200 status code and the updated person as the body
        res.status(200).json(person);
    } catch (error) {
        // If an error occurs during the process, return a response with a 400 status code and the error message
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    createPerson,
};