// CRUD Operations
const express = require("express");
const router = express.Router();

// Import the Admission model
const Admission = require("./models/admission");

// Get all admissions
router.get('/admissions', async (req, res) => {
    try {
        const admissions = await Admission.find();
        res.status(200).json({ message: "Successful", admissions: admissions });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

// Create a new admission
router.post('/admissions', async (req, res) => {
    try {
        const newAdmission = new Admission({
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
            parentPhoneNumber: req.body.parentPhoneNumber,
            parentEmailAddress: req.body.parentEmailAddress,
            howDidYouHear: req.body.howDidYouHear,
            referralName: req.body.referralName,
        });

        await newAdmission.save();

        res.status(201).json({ message: "Form submitted successfully", admission: newAdmission });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
});

module.exports = router;

