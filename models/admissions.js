// models/Admission.js
const mongoose = require('mongoose');

const admissionSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    middleName: {
        type: String,   
    },
    lastName: {
        type: String,
    
    },
    parentPhoneNumber: {
        type: Number,
        default: 0
    },
    parentEmailAddress: {
        type: String
    },
    howDidYouHear: {
        type: String
    },
    referralName: {
        type: String
    }
});

const Admission = mongoose.model('Admission', admissionSchema);

module.exports = Admission;


