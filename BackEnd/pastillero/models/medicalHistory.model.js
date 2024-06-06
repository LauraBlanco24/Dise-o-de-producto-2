import mongoose from "mongoose";

const medicalHistorySchema = new mongoose.Schema({
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
     diseases: [String], //diseases are stored in an array
     processDiseases: [String],
     medications: [String], //Name of thes medicamentos are stored in an array
  });

  export default mongoose.model("MedicalHistory", medicalHistorySchema);