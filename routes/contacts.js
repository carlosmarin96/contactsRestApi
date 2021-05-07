const express = require('express');
const { connections } = require('mongoose');
const router = express.Router();
const {Contact, validateContact} = require('../models/contacts');

//POST: CREATING A NEW CONTACT
router.post('/', async (req,res) => {
    const error = await validateContact(req.body);
    if(error.message) res.status(400).send(error.message);
    contact = new Contact({
        name:req.body.name,
        lastname:req.body.lastname,
        company:req.body.company,
        phone:req.body.phone,
        email:req.body.email
    });

    contact
        .save()
        .then((contact) => {
            res.send(contact);
        })
        .catch((error) => {
            res.status(500).send("Contact was not stored in db");
        });
    });

//GET ALL CONTACTS
router.get("/", (req,res) =>{
    Contact.find()
        .then((contacts) => res.send(contacts))
        .catch((error) => { 
            res.status(500).send("Something went wrong");
        });
});

//GET THE CONTACT BY ID
router.get("/:contactId", async (req,res) => {
    const contact = await Contact.findById(req.params.contactId);
    if(!contact) res.status(404).send("Contact not found");
    res.send(contact);
    return; 
});

//UPDATE CONTACT BASED ON ID
router.put("/:contactId", async (req, res) => {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.contactId,{
        name:req.body.name,
        lastname:req.body.lastname,
        company:req.body.company,
        phone:req.body.phone,
        email:req.body.email
    },
    {new:true}
    );
    if(!updatedContact) res.status(404).send("Contact not found");
});


//DELETE BOOK BASED ON ID
router.delete('/:contactId', async (req,res) =>{
    const contact = await Contact.findByIdAndRemove(req.params.contactId);
    if (!contact) res.status(404).send("Contact with id not found");
    res.send(contact);
});
module.exports = router;