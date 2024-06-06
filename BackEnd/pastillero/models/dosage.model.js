import mongoose from "mongoose";

const dosageSchema = new mongoose.Schema({
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
     pillBoxID: { 
        type: mongoose.Schema.Types.String,
        ref: 'PillBox',
        require: true
     },
     dosage: {
        type: Object,
        require: true        
    },
  });

  export default mongoose.model("Dosage", dosageSchema);