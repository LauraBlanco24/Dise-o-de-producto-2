import mongoose from "mongoose";

const emergencyContactchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    userID: {
        type: mongoose.Schema.Types.String,
        ref: 'User',
        require: true
    },
    relationship: {
        type: String,
        require: true
    },
});

export default mongoose.model("EmergencyContact", emergencyContactchema);