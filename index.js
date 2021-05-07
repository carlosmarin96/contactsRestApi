const express = require('express');
const mongoose = require('mongoose');
const winston = require('winston');
const app = express();
require('dotenv').config();
const contactsRoute = require('./routes/contacts')
const cors = require('cors');
const PORT = process.env.PORT || 3000


app.use(cors({origin: "*", methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE']}))

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//create a logger
const logger = winston.createLogger({
    level: 'info',
    transports: [
        new winston.transports.Console({
            format:winston.format.combine(
                winston.format.colorize({all:true})
            )
        }),
        new winston.transports.File({ filename: 'error.log', level:'error'})
    ],
    exceptionHandlers: [
        new winston.transports.File({ filename: 'exceptions.log'})
    ]
});

//routes
app.use('/api/contacts', contactsRoute);

//Connecting to mongodb atlas
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser:true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex:true})
    .then(() => {
    logger.info("connected to mongoDb atlas");
}).catch(error => {
    logger.error(error.message);
})

//Starting the server
app.listen(PORT,() =>{
    logger.info(`Server started at PORT ${PORT}`);
});