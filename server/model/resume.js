const mongoose = require("mongoose");

const resumeSchema = new mongoose.Schema({
    name: {
        type: String,
        default: null,
    },
    contact: {
        type: Number,
        default: null,
    },
    qualifications: {
        type: String,
        default: null,
    },
    hobbies: {
        type: String,
        default: null,
    },
    achievements: {
        type: String,
        default: null,
    },
    interestedIn: {
        type: String,
        default: null,
    },
    disabilityType: {
        type: String,
        default: null,
    },
    email: {
        type: String,
        default: null,
    },
    userId: {
        type: mongoose.Types.ObjectId,
        default: null,
    },
});

const Resume = mongoose.model("resume", resumeSchema);
module.exports = Resume;