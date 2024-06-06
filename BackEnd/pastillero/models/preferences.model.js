import mongoose from "mongoose";

const preferencesSchema = new mongoose.Schema({
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
    description: {
        type: String,
        require: true        
    },
    date: {
        type: Date,
        default: new Date(0),
        require: true        
    },
    status: {
        type: Boolean,
        default: true        
    },
  });

  export default mongoose.model("Preferences", preferencesSchema);