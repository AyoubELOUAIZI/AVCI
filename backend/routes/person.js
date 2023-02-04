const express = require('express');
const router = express.Router();
const {
    createPerson,
    getAllperson,
    deleteWorkout,
    updateWorkout
} = require('../controllers/personController');


// //1--Get all workouts
// router.get('/', getAllperson);

// //2--Get single workout
// router.get('/:id', getperson);

//-------------------------------//
//3--post a new workout
router.post('/', createPerson);


// //4-- Delete workout from the database
// router.delete('/:id', deleteWorkout);


// //5-- Update workout in the database with new properties
// router.patch('/:id', updateWorkout);


module.exports = router;