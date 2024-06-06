import mongoose from "mongoose";

const pharmacySchema = new mongoose.Schema({
    _id: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    pillBoxID: { 
        type: mongoose.Schema.Types.String,
        ref: 'PillBox',
        require: true
     },
    name: {
        type: String,
        require: true        
    },
    number: {
        type: Number,
        require: true        
    },
    serviceDays: {
        type: String,
        require: true        
    },
    delivery: {
        type: Boolean,
        require: true        
    },
  });

  export default mongoose.model("Pharmacy", pharmacySchema);