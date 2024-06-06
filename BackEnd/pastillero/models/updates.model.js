import mongoose from "mongoose";

const updateSchema = new mongoose.Schema({
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
    language: {
        type: String,
        require: true        
    },
    dateFormat: {
        type: String,
        require: true        
    },
  });

  export default mongoose.model("Updates", updateSchema);