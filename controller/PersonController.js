const Person = require('../model/Person')

const savePerson = async (req, res) => {
    try {
        // get the data sent by client
        const data = req.body
        const newPerson = new Person(data);
        const response = await newPerson.save()
        console.log("data saved")
        res.status(200).json(response)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "internal server error" })
    }
}


const fetchPerson = async (req, res) => {
    try {
        const people = await Person.find()
        res.status(200).json(people)
    }

    catch (err) {
        console.log("error while fetching person ", err)
        res.status(500).json({ error: "internal server error" })
    }
}

const fetchPersonrole = async (req, res) => {

    try {
        const { role } = req.params
        const validroles = ["admin", "buyer", "seller"]
        if (!validroles.includes(role)) {
            return res.status(404).json({ message: "Invalid role" })
        }

        const people = await Person.find({ role })
        if (people.length === 0) {
            return res.status(404).json({ message: "No Person found with this role" })
        }
        res.status(200).json(people)


    }

    catch (err) {
        console.log("error while fetching person ", err)
        res.status(500).json({ error: "internal server error" })
    }
}




const updatePerson = async (req, res) => {

    try {
        const personId = req.params.id;
        const updatedPerson = req.body;
        const response = await Person.findByIdAndUpdate(
            personId,
            updatedPerson,
            {
                // return the updated document
                new: true,
                // run mongoose validations 
                runValidators: true
            }
        )
        if (!response) {
            return res.status(404).json({ message: "No Person found " })
        }
        res.status(200).json(response)
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ error: "Internal server error" })
    }
}



const deletePerson = async (req, res) => {
    try {
        const personId = req.params.id;
        const response = await Person.findByIdAndDelete(personId)
        if (!response) {
            return res.status(404).json({ message: "No Person found " })
        }
        res.status(200).json({message: "person deleted successfully"})
    }
    catch (err) {
    console.log(err)
    res.status(500).json({ error: "Internal server error" })
}
}




module.exports = {
    savePerson, fetchPerson, fetchPersonrole, updatePerson, deletePerson
}