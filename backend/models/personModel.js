const mongoose = require('mongoose'); // importing the mongoose package

const Schema = mongoose.Schema // creating a constant variable that references the mongoose schema property
const PersonSchema = new Schema({ // create new schema for workouts 
    fullName:{
        type: String, // should be a string 
        required: true // required field
    },
    phoneNember:{
        type: String, // should be a string 
        required: true // required field
    },
    cin:{
        type: String, // should be a string 
        required: true // required field
    },
    age:{
        type: int, // should be a string 
        required: true // required field
    },
    pic: {
        type: "String",
        // required: true,
        default: "https://github.com/AyoubELOUAIZI/MERN-Stack-chat-app/blob/master/backend/images/avatar-icon.jpg?raw=true"
    },
    Question: { type: mongoose.Schema.Types.ObjectId, ref: "Question" },

}, { timestamps: true }); 


// Create a Mongoose model for the Chat collection
const Person = mongoose.model("Person", PersonSchema);

// Export the Chat model to be used in other parts of the application
module.exports = Person;


