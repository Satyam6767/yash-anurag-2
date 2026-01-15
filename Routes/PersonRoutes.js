const express = require("express");
const Person = require("../model/Person");
const { savePerson, fetchPerson, fetchPersonrole, updatePerson, deletePerson } = require("../controller/PersonController");
const router = express.Router()

// add a person to database
router.post('/save', savePerson)

// to fetch all data of person
router.get('/fetch', fetchPerson)

// to fetch data of person according to their role
router.get('/fetch/:role', fetchPersonrole)

// find and update a person
router.put('/update/:id', updatePerson)

// find and delete a person
router.delete('/delete/:id', deletePerson)

module.exports = router;