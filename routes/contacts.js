const express = require('express');
const router = express.Router();
const {Contact, validateContact} = require('../models/contacts');

//POST: CREATING A NEW CONTACT
router.post('/', async (req,res) => {
    const error = await validateContact(req.body);
    if(error.message) res.status(400).send(error.message)
    contact = new Contact({
        name:req.body.name,
        lastname:req.body.lastname,
        company:req.body.company,
        phone:req.body.phone,
        email:req.body.email
    });

    contact.save().then(contact => {
        res.send(contact);
    }).catch(error => {
        res.status(500).send("Contact was not stored in db");
    });
});

module.exports = router;