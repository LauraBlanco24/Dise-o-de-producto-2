import mongoose from "mongoose";

const healthDataSchema = new mongoose.Schema({
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
    allergies: [String], //se guardan las alergias en un array
    medicalConditions: [String],
    currentMedications: [String], //Nombre de los medicamentos en un array
});

export default mongoose.model("HealthData", healthDataSchema);