// const { request } = require("express");
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const personRoutes = require('./routes/person');
const express = require("express");
const app = express();
const connectDB = require('./config/db');
dotenv.config();



const PORT = process.env.PORT || 3000;
const connectionString = process.env.MONGO_URI;
//middleware
app.use(express.json());

//routes
app.use('/api/person', personRoutes);

//routes
app.get("/", (req, res) => {
    res.send("Hello, World!");
});


connectDB(); // connect to database atlas

app.listen(PORT, () => {
    console.log(` app listening on port http://localhost:${PORT}`.yellow.bold)
})













// //connecting with mongo db and then make the server listening in the port
// mongoose.connect(connectionString).then(() => {
//     console.log("\n********************Successfully connected to the database.");

//     //listen for requests
//     app.listen(PORT, () => {
//         console.log(`Server is running on port 4010 or 3000 Click http://localhost:${PORT}`);
//     });
// })
//     .catch(err => {
//         console.log("Error connecting to the database: ", err);
//     });






