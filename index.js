const express = require('express');
const mongoose = require('mongoose')
const app = express();
require('dotenv').config();
const contactsRoute = require('./routes/contacts')

const PORT = process.env.PORT || 3000

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api/contacts', contactsRoute);

//Connecting to mongodb atlas
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser:true}).then(() => {
    console.log("Connected to monngodb atlas");
}).catch(error => {
    console.log("Something wrong happened", error)
})

//Starting the server
app.listen(PORT,() =>{
    console.log("Server started at PORT", PORT)
});